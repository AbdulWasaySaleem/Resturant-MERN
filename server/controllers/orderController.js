import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Order from "../Model/Order.js";
import {
  handleResponse,
  handleError,
  successResponse,
  errorResponse,
} from "../utils/responseHandler.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const orderController = async (req, res) => {
  try {
    const { userId, userEmail, products } = req.body;
    const orderId = "ORDER" + Math.floor(Math.random() * 1000000);

    const orderProducts = products.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
      title: product.title,
      category: product.category,
      price: product.price,
    }));

    const order = new Order({
      orderId,
      userId,
      userEmail,
      products: orderProducts,
    });
    await order.save();

    return handleResponse(
      res,
      201,
      { orderId: order.orderId },
      "Order placed successfully"
    );
  } catch (error) {
    return handleError(res, error, "Error placing order");
  }
};

export const getUserOrder = async (req, res) => {
  try {
    const { userId, email } = req.query;
    const latestOrder = await Order.findOne({ $or: [{ userId }, { email }] })
      .sort({ createdAt: -1 })
      .limit(1);

    return handleResponse(
      res,
      200,
      { order: latestOrder },
      "Order fetched successfully"
    );
  } catch (error) {
    return handleError(res, error, "Error fetching latest order");
  }
};

export const getUserOrderConfirm = async (req, res) => {
  try {
    const { userId, userEmail } = req.body;
    const latestOrder = await Order.findOne({
      $or: [{ userId }, { userEmail }],
    })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!latestOrder) {
      return handleResponse(res, 404, {}, "No order found");
    }

    const clientEmailHTML = `
      <h2>Your Order Confirmation</h2>
      <p>Thank you for shopping with us!</p>
      <ul>
        ${latestOrder.products
          .map(
            (product) => `
              <li>
                <strong>${product.title}</strong><br/>
                Quantity: ${product.quantity}<br/>
                Price: ${product.price}
              </li>
            `
          )
          .join("")}
      </ul>
    `;

    const adminEmailHTML = `
      <h2>New Order Placed</h2>
      <p>User Email: ${latestOrder.userEmail}</p>
      <ul>
        ${latestOrder.products
          .map(
            (product) => `
              <li>
                <strong>${product.title}</strong><br/>
                Quantity: ${product.quantity}<br/>
                Price: ${product.price}
              </li>
            `
          )
          .join("")}
      </ul>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: latestOrder.userEmail,
      subject: `Order Confirmation`,
      html: clientEmailHTML,
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_ADMIN_USER,
      subject: `New Order Placed`,
      html: adminEmailHTML,
    });

    return handleResponse(res, 200, {}, "Emails sent successfully");
  } catch (error) {
    return handleError(res, error, "Error sending email");
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .select("orderId userEmail products createdAt")
      .lean();

    const simplifiedOrders = orders.map((order) => ({
      _id: order._id,
      orderId: order.orderId,
      userEmail: order.userEmail,
      totalItems: order.products.length,
      totalAmount: order.products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      createdAt: order.createdAt,
    }));

    return successResponse(
      res,
      200,
      { orders: simplifiedOrders },
      "All orders fetched successfully"
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return errorResponse(res, 500, "Failed to fetch orders");
  }
};

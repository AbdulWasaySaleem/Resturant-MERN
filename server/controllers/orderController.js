// Helper function to generate order ID (you can use any method you prefer)

import nodemailer from "nodemailer";
import Order from "../Model/Order.js"; // Import your Order model

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "07.abdulwasayy@gmail.com", // Your Gmail email address
    pass: "", // Your Gmail password
  },
});

export const orderController = async (req, res) => {
  try {
    const { userId, userEmail, products } = req.body;

    // Generate a unique order ID
    const orderId = "ORDER" + Math.floor(Math.random() * 1000000);

    // Construct the products array with necessary fields
    const orderProducts = products.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
      title: product.title,
      category: product.category,
      price: product.price,
    }));

    // Validate and save the order to the database
    const order = new Order({
      orderId,
      userId,
      userEmail,
      products: orderProducts,
      // You can add other order details here
    });
    await order.save();

    res.status(201).json({ success: true, orderId: order.orderId }); // Send orderId back to frontend
  } catch (error) {
    console.error("Error placing order:", error.message);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getUserOrder = async (req, res) => {
  try {
    const { userId, email } = req.query;

    // Find the latest order for the given user ID or email
    const latestOrder = await Order.findOne({ $or: [{ userId }, { email }] })
      .sort({ createdAt: -1 }) // Sort by createdAt timestamp in descending order
      .limit(1); // Limit the result to only one document

    res.json({ success: true, order: latestOrder });
  } catch (error) {
    console.error("Error fetching latest order:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getUserOrderConfirm = async (req, res) => {
  try {
    const { userId, userEmail } = req.body;

    // Find the latest order for the given user ID or email
    const latestOrder = await Order.findOne({
      $or: [{ userId }, { userEmail: userEmail }],
    })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!latestOrder) {
      return res.status(404).json({ success: false, error: "No order found" });
    }

    // Email text for the client's confirmation
    let clientEmailText = `Your order has been confirmed. Thank you for shopping with us!\n\n`;

    // Construct email text for each product
    latestOrder.products.forEach((product, index) => {
      clientEmailText += `Product ${index + 1}:\n`;
      clientEmailText += `  Name: ${product.title}\n`;
      clientEmailText += `  Quantity: ${product.quantity}\n`;
      clientEmailText += `  Price: ${product.price}\n\n`;
    });

    // Email text for the admin notification
    let adminEmailText = `New order placed:\n\n`;

    // Construct email text for each product
    latestOrder.products.forEach((product, index) => {
      adminEmailText += `Product ${index + 1}:\n`;
      adminEmailText += `  Name: ${product.title}\n`;
      adminEmailText += `  Quantity: ${product.quantity}\n`;
      adminEmailText += `  Price: ${product.price}\n\n`;
    });

    adminEmailText += `User Email: ${latestOrder.userEmail}`;

    // Sending email to the client's email address
    await transporter.sendMail({
      from: "07.abdulwasayy@gmail.com", // Admin email address
      to: latestOrder.userEmail,
      subject: `Order Confirmation`,
      text: clientEmailText,
    });

    // Sending email to the admin's email address
    await transporter.sendMail({
      from: "07.abdulwasayy@gmail.com", // Admin email address
      to: "", // Admin email address
      subject: `New Order Placed`,
      text: adminEmailText,
    });

    res.status(200).json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};




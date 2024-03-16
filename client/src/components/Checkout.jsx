import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../redux/cartSlice.js";

const Checkout = () => {
  const [userOrders, setUserOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        // Extract userId from user object
        const userId = user._id;

        // Send request to backend API to fetch user's orders
        const response = await axios.get(
          "http://localhost:3000/order/userOrder",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
            params: {
              userId: userId, // Include userId as query parameter
            },
          }
        );
        //console.log(response.data);
        setUserOrders(response?.data?.order);

        // Clear the cart after fetching user's orders
        dispatch(clearCart());

        // Send email confirmation
        await sendEmailConfirmation(response.data.order);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, [user, dispatch]);

  //sendign mail confirmation
  const sendEmailConfirmation = async (order) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/order/confirmOrder",
        { userId: order?.userId, email: order?.userEmail }
      );

      //console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

  const order = userOrders;
  //console.log("first", order);
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Your Order</h2>
        <div>
          <p>
            <span className="font-bold">Order ID:</span> {order.orderId}
          </p>
          <p>
            <span className="font-bold">User Email:</span> {order.userEmail}
          </p>
          <h3 className="text-lg font-bold mt-4">Products:</h3>
          {order?.products?.map((product, index) => (
            <div key={index} className="border-t border-gray-300 mt-2">
              <p>
                <span className="font-bold">Title:</span> {product.title}
              </p>
              <p>
                <span className="font-bold">Quantity:</span> {product.quantity}
              </p>
              <p>
                <span className="font-bold">Category:</span> {product.category}
              </p>
              <p>
                <span className="font-bold">Price:</span> ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



{/*


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "houseofdumplingsapp@gmail.com",
        pass: "cota rmpk tngw qczh ",
    },
});

async function sendMail(subject, text, to) {
    if (!subject || !text) {
        console.error("Subject and text are required to send an email");
        return; // Do not proceed if subject or text is missing
    }

    var mailOptions = {
        from: "houseofdumplingsapp@gmail.com",
        //! Change
        to: to || "shahryar2k3@gmail.com, arsalnaeem1@gmail.com",
        subject: subject,
        html: text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: " + info.response);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

module.exports = sendMail;


*/}

export default Checkout;

# 🍔 Foodie Hub - Restaurant Web App

Foodie Hub is a full-stack restaurant web application where users can explore delicious food categories like burgers, pizza, and gyros, add items to their cart, and place orders — while admins manage everything via a dedicated dashboard.

## 🚀 Features

### 👤 User Side
- Browse by food categories: Burger, Pizza, Gyros, and more.
- View detailed product pages with images and ratings.
- Add items to cart and proceed to checkout.
- Receive a confirmation email after placing an order.

### 🛠️ Admin Panel
- View all products and users.
- Promote regular users to admin (role-based access).
- Add new products (with image upload via Cloudinary).
- View total number of orders (TNO).
- Receive email notifications when an order is placed.

---

## 🧰 Tech Stack

### 💻 Frontend
- React
- Tailwind CSS
- Redux (for state management)
- React Router DOM
- Axios

### 🌐 Backend
- Node.js
- Express
- MongoDB (Mongoose ODM)
- Cloudinary (for image uploads)
- Nodemailer (for order confirmation emails)
- JWT (for authentication & authorization)

---

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbdulWasaySaleem/Resturant-MERN
   cd /Resturant-MERN

   ```

2. **Install Backend Dependencies**:
   - Navigate to the server directory and install the dependencies:
     ```bash
     cd server
     npm install
     ```

3. **Install Frontend Dependencies**:
   - Navigate to the client directory and install the dependencies:
     ```bash
     cd client
     npm install
     ```

4. **Setup Environment Variables**:
   - Create an `.env` file in the root of both the `client` and `server` directories and add the following environment variables:

   **Client Environment Variables** (in `client/.env`):
   ```bash
   VITE_API_BASE_URL=http://localhost:3000
   ```

   **Server Environment Variables** (in `server/.env`):
   ```bash
   PORT = 3000
   MONGO_URL = your_MongoDb_String
   JWT_SECRET = your_secret
   
   GMAIL_USER=your_email
   GMAIL_APP_PASSWORD=your_App_Password
   GMAIL_ADMIN_USER=email_to_receive_Orders

   CLOUDINARY_NAME= from_Cloudinary_DashBoard
   CLOUDINARY_API_KEY= from_Cloudinary_DashBoard
   CLOUDINARY_API_SECRET= from_Cloudinary_DashBoard

   CLIENT_URL= your_Client_Origin_URL || http://localhost:5173
   ```

   Make sure to replace everything with your actual credentials.

5. **Run MongoDB**:
   - Make sure MongoDB is running on your local machine or connect it to a cloud instance (like MongoDB Atlas).

6. **Start the Backend**:
   - In the `server` directory, run:
     ```bash
     npm start
     ```

7. **Start the Frontend**:
   - In the `client` directory, run:
     ```bash
     npm run dev
     ```

8. **Access the Application**:
   - Open your browser and access the app at `http://localhost:5173`.


## Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Any suggestions or improvements are always welcome!

## Contact
For any inquiries, please feel free to reach out to 07.abdulwasayy@gmail.com.

---


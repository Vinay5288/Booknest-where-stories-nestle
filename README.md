# Booknest-where-stories-nestle
BookNest is a MERN stack digital bookstore where users can browse, search, sort, and purchase books, while sellers manage inventory with images, genres, and details. It includes role-based access, cart functionality, and a modern UI for seamless book discovery and management.

# 📚 BookNest – Online Book Management System

BookNest is a **full-stack web application** designed to manage books efficiently.  
It allows users to **add, view, update, and delete books**, providing a simple and intuitive interface for book management.  
The project is built using **React.js**, **Node.js**, **Express.js**, and **MongoDB** following the MERN stack architecture.

---

## 🚀 Features

- 📖 Add new books with title, author, genre, and price  
- 👀 View all available books  
- ✏️ Update existing book details  
- ❌ Delete books from the system  
- 🔐 User authentication using JWT  
- 🖥️ Simple and responsive user interface  
- 🌐 RESTful API integration  
- 🗄️ MongoDB database for persistent storage  

---

## 🛠️ Technologies Used

### Frontend
- React.js  
- HTML5  
- CSS3  
- JavaScript  
- Axios  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Tools
- VS Code  
- Postman  
- Git & GitHub  

---

## 📂 Project Structure

```

BookNest/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│
├── server/                 # Backend (Node + Express)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── config/
│
├── package.json
├── README.md
└── .env

```

> ⚠️ **Note:** The `.env` file contains sensitive information (MongoDB URI, JWT secret)  
> and **should not be uploaded to GitHub**.

---

## 📦 Requirements

- Node.js (v16 or above)  
- MongoDB  
- npm or yarn  

---

## 🔑 Environment Variables Setup

Create a `.env` file in the **server** folder and add:

```

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

```

---

## ▶️ Running the Application Locally

### 1️⃣ Clone the repository

```

git clone [https://github.com/your-username/booknest.git](https://github.com/your-username/booknest.git)
cd booknest

```

---

### 2️⃣ Install Backend Dependencies

```

cd server
npm install

```

---

### 3️⃣ Install Frontend Dependencies

```

cd ../client
npm install

```

---

### 4️⃣ Start the Backend Server

```

cd server
npm start

```

---

### 5️⃣ Start the Frontend Application

```

cd client
npm start

```

---

### 6️⃣ Open your browser and go to:

```

[http://localhost:3000]

```

---

## 🔁 Application Workflow

1. User registers or logs into the system  
2. User can add book details (title, author, genre, price)  
3. Data is sent to the backend through REST APIs  
4. Backend stores data securely in MongoDB  
5. User can view, edit, or delete books  
6. UI updates dynamically using React  

---

## 🧠 Use Cases

- 📚 Library management  
- 🏫 College mini / major project  
- 📖 Personal book tracking system  
- 🛒 Online book inventory system  

---

## 📌 Future Enhancements

- Role-based access (Admin / User)  
- Book search and filter options  
- Pagination for large book lists  
- Cloud image upload for book covers  
- Deployment on cloud platforms  
- Payment integration for book purchase  

---

## 📄 Conclusion

BookNest is a practical and user-friendly **book management system** that demonstrates the power of the MERN stack.  
It simplifies book handling operations while providing a scalable architecture suitable for real-world applications.  
This project helps in understanding **full-stack development**, REST APIs, and database integration.

---

## 📚 References

- React Documentation  
- Node.js Documentation  
- Express.js Documentation  
- MongoDB Documentation  

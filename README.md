# 📚 PH-Assignment-11 - Assignment Management System (Server-Side)  

🚀 **Live Frontend:** [PH Assignment Management System](https://ph-assignment-management-system.surge.sh/)  

## 📖 Overview  

The **PH-Assignment-11 Server** is a backend system built with **Node.js, Express, MongoDB, and JWT authentication**. It provides secure API endpoints for user authentication, assignment management, and CRUD operations.  

---

## 🎯 Key Features  

✅ **User Authentication** – Firebase authentication with JWT security.  
✅ **Assignment Management** – Users can create, update, delete, and track assignments.  
✅ **MongoDB CRUD Operations** – Efficient data storage and retrieval.  
✅ **Secure API Access** – Middleware-based authorization with JWT.  
✅ **Cross-Origin Resource Sharing (CORS)** – Enables communication between frontend and backend.  

---

## 📂 Table of Contents  

- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [API Environment Variables](#api-environment-variables)  
- [Troubleshooting](#troubleshooting)  
- [License](#license)  

---

## 🛠️ Installation  

### Prerequisites  
Ensure you have the following installed on your system:  

- **Node.js** (Latest LTS) → [Download](https://nodejs.org/)  
- **MongoDB** → [Download](https://www.mongodb.com/)  
- **Git** → [Download](https://git-scm.com/)  

### Step 1: Clone the Repository  

```sh
git clone https://github.com/Rokon-Khan/ph-assignment-11-server-side.git
cd your-server-folder
```

### Step 2: Install Dependencies  

```sh
npm install
```

---

## ⚙️ Configuration  

### 📄 Create a `.env` File  

Create a `.env` file in the **root** directory and add the following variables:  

```plaintext
DB_USER=your_database_user
DB_PASS=your_database_pass
```

**🔒 Important:** Do **not** commit the `.env` file to Git. Add it to `.gitignore` to keep your credentials secure.  

---

## 🚀 Usage  

### Step 3: Start the Server  

To start the **Assignment Management backend**, run:  

```sh
npm start
```

For development mode with **nodemon**:  

```sh
npm run dev
```

The server will be running at **http://localhost:5000/**.  

---

## 📦 Dependencies  

This project uses the following **npm packages**:  

- **MongoDB** – Database for storing assignments and user data  
- **dotenv** – Manage environment variables  
- **CORS** – Handle cross-origin requests  
- **Express** – Backend framework for handling API requests  

Install all dependencies with:  

```sh
npm install
```

---

## 🌍 API Environment Variables  

These are required for backend API communication and database connection.  

| Variable Name         | Description                           |
|-----------------------|---------------------------------------|
| `DB_USER`            | MongoDB database user                 |
| `DB_PASS`            | MongoDB database password             |

---

## 🛠️ Troubleshooting  

### 1. **MongoDB Connection Issues**  

- Ensure **MongoDB** is running locally or use a **MongoDB Atlas** cloud connection.  
- Verify database credentials in `.env`.  

### 2. **Port Already in Use Error**  

If you see `Error: Port 5000 is already in use`, stop the process using:  

```sh
npx kill-port 5000
```

Or specify another port in `server.js`:  

```js
const PORT = process.env.PORT || 4000;
```

### 3. **JWT Authentication Errors**  

- Ensure `ACCESS_TOKEN_SECRET` is set in `.env`.  
- Make sure tokens are properly stored and sent in API requests.  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

This README provides everything needed to set up, run, and troubleshoot your **PH-Assignment-11 Server-Side** project. Let me know if you need any modifications! 🚀




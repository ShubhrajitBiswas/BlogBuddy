# BlogBuddy.ai 🧠✍️

**BlogBuddy.ai** is an AI-powered blogging platform designed to assist writers and content creators by providing intelligent suggestions, automated formatting, comment moderation, and more. It simplifies the blogging experience using cutting-edge AI technologies.

---

## 📌 Features

### 👤 User Side
- 📰 View all published blogs
- 🔍 Read blog details with rich text content
- 💬 Add comments to blogs (approval-based)
- 🧠 AI-powered blog generation (with Gemini AI)
- 📤 Share blogs on social media

### 🛠️ Admin Panel
- 🔐 Secure login system
- 📋 Manage blogs: Add / Delete / Publish-Unpublish
- 💬 Manage comments: Approve / Delete
- 📊 Dashboard with total blogs, drafts, comments
- 🧭 Simple UI with filtering (Approved / Not Approved)

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- Multer for image upload

### 💾 Database
- **MongoDB (Mongoose ORM)**

### 🤖 AI Integration
- **Google Gemini AI API**  
Used to help generate rich blog content from a prompt. Admins can use this feature to auto-generate blogs by providing topics or short descriptions.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js
- MongoDB instance (local or cloud like MongoDB Atlas)
- ImageKit account (free)
- Gemini AI API Key

---
## 📂 Folder Structure
```
BlogBuddy/
├── client/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── uploads/
│ └── index.js

```
---

### 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/BlogBuddy.ai.git
   cd BlogBuddy.ai


2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   * Create a `.env` file in `/backend`:

     ```
     MONGO_URI=your_mongodb_url
     JWT_SECRET=your_jwt_secret
     ADMIN_EMAIL=admin@example.com
     ADMIN_PASSWORD=yourpassword
     IMAGEKIT_PUBLIC_KEY=your_public_key
     IMAGEKIT_PRIVATE_KEY=your_private_key
     IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
     GEMINI_API_KEY=your_google_gemini_api_key
     ```

   ```bash
   npm run start
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 📸 Screenshots

Home Page   

![Screenshot 2025-06-20 124047](https://github.com/user-attachments/assets/310b3392-5740-4182-ae0c-46dfbc1601be)

---

## ✨ AI Blog Generation

Admins can generate content for blogs using **Gemini AI**:

* Enter a topic or prompt
* AI returns a full blog body
* You can edit and publish instantly
* Removes writer's block and saves time!

---





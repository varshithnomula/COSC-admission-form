# 🎓 College Admissions Portal

A simple Express.js web application for handling student admissions. Users can submit their name, email, phone number, and selected course. Submitted data is stored temporarily in-memory, and a confirmation is displayed post-submission.

## 🚀 Features

* Responsive HTML admission form
* Express.js backend
* In-memory storage (no database)
* Displays personalized confirmation on submission

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Backend:** Node.js, Express.js

## 📁 Project Structure

```
admissions-portal/
│
├── public/
│   └── style.css          # Optional: Add your styling here
│
├── views/
│   └── form.html          # Admission form
│
├── server.js              # Express server
├── README.md              # Project guide
└── package.json
```

## 📦 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/admissions-portal.git
   cd admissions-portal
   ```

2. **Install dependencies:**

   ```bash
   npm install express
   ```

3. **Run the server:**

   ```bash
   node server.js
   ```

4. **Visit the form:**
   Open your browser and navigate to `http://localhost:3000/admission`

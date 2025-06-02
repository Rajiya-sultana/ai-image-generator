# AI-Powered Image Search

An intuitive web application that allows users to search for images using keywords, powered by the Unsplash API. Built with React, Vite, and Tailwind CSS.

---

## 🚀 Features

✅ Search for images using natural language keywords.  
✅ Fetches images from the Unsplash API.  
✅ Loading indicator while fetching images.  
✅ Responsive and clean UI.  
✅ Environment variable integration for securing API keys.

---

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.  
- **Vite**: Fast build tool for modern web projects.  
- **Tailwind CSS**: Utility-first CSS framework for styling.  
- **Unsplash API**: Fetches free-to-use images.

---

## 📸 Demo

Check out the live demo here: 

---

## 🔧 Getting Started

1. **Clone the repository**:
   ```bash
 git clone https://github.com/Rajiya-sultana/ai-image-generator.git
cd ai-image-generator

Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:
Create a .env file in the root directory and add:

env
Copy
Edit
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
Run the development server:

bash
Copy
Edit
npm run dev
📂 File Structure
css
Copy
Edit
src/
│
├── assets/
│   └── default_image.svg
│
├── components/
│   └── ImageGenerator.jsx
│
└── App.jsx
📝 Notes
The Unsplash API key is stored securely using Vite’s environment variables (VITE_UNSPLASH_ACCESS_KEY).

Make sure to create a .env file with your API key in the root directory for local development.

To deploy, build the project using npm run build and host it on Vercel, Netlify, or your preferred platform.

✍️ Author
Rajiya sultana

GitHub: @Rajiya-sultana


🌐 License
This project is licensed under the MIT License. Feel free to use and modify it!

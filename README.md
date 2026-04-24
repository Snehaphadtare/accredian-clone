# 🚀 Accredian Enterprise Landing Page (Partial Clone)

## 📌 Overview
This project is a partial clone of the Accredian Enterprise website built as part of a Full Stack Developer Intern assignment.

The goal was to recreate the landing page with a focus on clean UI, responsiveness, reusable components, and basic API integration using Next.js.

---

## 🛠 Tech Stack

- Next.js (App Router)
- React (Functional Components + Hooks)
- Tailwind CSS
- Vercel (Deployment)

---

## ✨ Features

- Fully responsive landing page (mobile + desktop)
- Clean and structured UI
- Reusable component-based architecture
- Smooth navigation using anchor scrolling
- Contact form with API integration
- Organized sections:
  - Hero
  - Stats
  - Clients
  - Accredian Edge
  - Testimonials
  - Contact (Footer)

---

## 🧠 Approach

- Broke the UI into reusable components for better scalability and readability
- Focused on layout structure and spacing rather than pixel-perfect cloning
- Used Tailwind CSS for rapid styling and consistency
- Implemented smooth scrolling for better user experience
- Built a simple API route to handle form submission

---

## 🔌 API Integration

A basic API route was created using Next.js App Router:

- Endpoint: `/api/contact`
- Method: POST
- Functionality:
  - Accepts user input (name, email)
  - Logs data to the server
  - Returns a success response

This demonstrates frontend-backend communication.

---

## 🤖 AI Usage

AI tools were used as development assistants during the project.

### Where AI Helped
- Generating initial component structure
- Debugging layout and Tailwind styling issues
- Implementing API routes in Next.js
- Connecting frontend form to backend API
- Improving code readability and structure

### Manual Improvements
- Adjusted UI to match reference design
- Refined spacing, alignment, and responsiveness
- Organized components for clarity and reusability
- Tested navigation and API functionality
- Made final UI and UX decisions

---

## 🔮 Improvements (If Given More Time)

- Add animations (Framer Motion)
- Improve accessibility (ARIA labels, keyboard navigation)
- Add proper form validation and error handling
- Store form data in a database (MongoDB / Firebase)
- Enhance UI with micro-interactions

---

## ⚙️ Setup Instructions

```bash
git clone <your-repo-link>
cd <project-folder>
npm install
npm run dev

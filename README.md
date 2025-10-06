# 🎮 QUIZ_APP

A modern, interactive **quiz application** built with **React** and **Tailwind CSS**, featuring multiple categories, animations, and progress tracking. Designed to provide a smooth, engaging experience for users while testing their knowledge.

---

## 🌟 Features

- **Multiple Categories:** Technology, Nature, Politics, and Sports  
- **Interactive Questions:** Instant feedback on answers  
- **Progress Tracking:** Visual progress bar and text indicator (e.g., "3/5 answered")  
- **Animations & Micro-interactions:**  
  - Answer selection: scale-up + background change  
  - Hover/focus: smooth color fade + focus ring  
  - Result chips: staggered fade-in  
- **Timer:** 10-second countdown per question  
- **Responsive Design:** Optimized for devices down to 320px width  
- **Accessibility:** Maintains ≥ 4.5:1 contrast ratio for text and feedback  

---

## 🎨 Design & Branding

**Color Palette:**  
- Primary: Blue (#2563EB), Ainstein Green (#00B75F)  
- Secondary: Sunburst Orange (#FF9D33), Bubblegum Pink (#FF6CA1)  
- Neutral: Light, dark, grayscale tokens for text, backgrounds, and borders  

**Feedback States:**  
- Correct: Ainstein Green (#00B75F) with white text  
- Incorrect: Sunburst Orange (#FF9D33) with white text  
- Neutral: Light gray background with dark text  

---

## ⚙️ Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Routing:** React Router DOM  
- **UI Components:** Radix UI, Tailwind Variants  
- **Animations:** react-animated-numbers, ConfettiExplosion  
- **Version Control:** GitHub  

---

## 📁 Project Structure

```bash
QUIZ_APP/
├─ src/
│  ├─ components/        # Reusable UI components
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  ├─ Label.jsx
│  │  ├─ Progress.jsx
│  │  └─ Separator.jsx
│  │
│  ├─ pages/             # Application pages
│  │  ├─ Home.jsx
│  │  ├─ Quiz.jsx
│  │  ├─ Layout.jsx
│  │  └─ NoPage.jsx
│  │
│  ├─ shared/            # Shared components
│  │  └─ Question.jsx
│  │
│  └─ QuizApp.jsx        # Main app with routing
│
├─ public/               # Static assets
│  ├─ logo.png
│  ├─ favicon.ico
│  └─ banner.jpg
│
├─ package.json
└─ README.md


🚀 Setup & Run

Clone the repo:
git clone https://github.com/singhayush007/QUIZ-_APP.git


Install dependencies:
cd QUIZ-_APP
npm install
npm run dev


Open your browser and navigate to:
http://localhost:3000


📝 Usage

Open the app in your browser.
Select a category from the Home Page.
Answer questions within the 10-second timer.
View results with score, explanations, and animations.

📚 Libraries Used

React: UI components.
Tailwind CSS: Utility-first styling.
Radix UI: Accessible components.
react-animated-numbers: Animated scores.
ConfettiExplosion: Fun confetti effect.
React Router DOM: Client-side routing.

🎥 Demo & Deployment
Demo Video: Loom Video
Live Deployment: Quiz App

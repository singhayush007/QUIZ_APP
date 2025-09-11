# QUIZ_APP

A modern, interactive quiz application built with **React** and **Tailwind CSS**, featuring multiple categories, animations, and progress tracking. Designed to provide a smooth, engaging experience for users while testing their knowledge.

---

## 🌟 Features

- **Multiple Categories:** Technology, Nature, Politics, and Sports.
- **Interactive Questions:** Users can select answers with instant feedback.
- **Progress Tracking:** Visual progress bar and text indicator (e.g., "3/5 answered").
- **Animations & Micro-interactions:**
  - Answer selection: scale-up + background change
  - Hover/focus: smooth color fade + focus ring
  - Result chips: staggered fade-in
- **Timer:** 10-second countdown for each question.
- **Responsive Design:** Works on devices down to 320px width.
- **Accessibility:** Maintains ≥ 4.5:1 contrast ratio for text and feedback.

---

## 🎨 Design & Branding

**Color Palette:**
- Primary: Blue (#2563EB), Ainstein Green (#00B75F)
- Secondary: Sunburst Orange (#FF9D33), Bubblegum Pink (#FF6CA1)
- Neutral: light, dark, grayscale tokens for text, backgrounds, and borders

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

QUIZ_APP/
├─ src/
│  ├─ components/                # Reusable UI components
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  ├─ Label.jsx
│  │  ├─ Progress.jsx
│  │  └─ Separator.jsx
│  │
│  ├─ pages/                     # Application pages
│  │  ├─ Home.jsx
│  │  ├─ Quiz.jsx
│  │  ├─ Layout.jsx
│  │  └─ NoPage.jsx
│  │
│  ├─ shared/                    # Shared components
│  │  └─ Question.jsx
│  │
│  └─ QuizApp.jsx                    # Main app with routing
│
├─ public/                       # Static assets
│  ├─ logo.png
│  ├─ favicon.ico
│  └─ banner.jpg
│
├─ package.json
└─ README.md



---

## 🚀 Setup & Run

1. Clone the repo:
```bash
git clone https://github.com/singhayush007/QUIZ-_APP.git


2. Install dependencies:
```bash
cd QUIZ-_APP
npm install
npm run dev


3. 📸 Screenshots

Check out the Screenshots in src/assets folder.


## 📝 Usage

1. Open the app in your browser (or via local server).
2. Select a category from the Home Page.
3. Answer questions within the 10-second timer.
4. See your results with score, explanations, and animations.


## 📚 Libraries Used

- **React**: For building UI components.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **Radix UI**: Accessible UI components.
- **react-animated-numbers**: Animated score numbers.
- **ConfettiExplosion**: Fun confetti animation for correct answers.
- **React Router DOM**: Client-side routing.


## 🎥 Demo Video

Watch a walkthrough of the app here:
[Loom Video Link: https://www.loom.com/share/b4e536fdaee04e66a43c699acbd6993f?sid=07635854-88dc-40c2-b73d-50cfdf51fd12]
[Deployment Link: https://quiz-app-rho-red-31.vercel.app/]


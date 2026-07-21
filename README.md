# Subscription Tracker

A modern, responsive web application for managing and tracking subscriptions. Built with React, Vite, Tailwind CSS, and Firebase, this application helps users visualize their expenses, manage active subscriptions, and maintain better financial oversight.

## 🚀 Tech Stack

- **Frontend:** React 19, Vite, TypeScript
- **Styling:** Tailwind CSS, Lucide React (Icons)
- **Database/Backend:** Firebase (Firestore, Auth)
- **Data Visualization:** Recharts
- **AI Integration:** Google Gemini API (`@google/genai`)
- **Animations:** Motion

## 📦 Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher recommended)
- npm or yarn

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dreamdaytech/Subscription-Tracker-.git
   cd Subscription-Tracker-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env.local` file in the root directory and add your necessary API keys and configuration based on `.env.example`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   # Add your Google Gemini API key if using AI features
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

##  scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and maintained by DreamDay Technology.

1. Project Title & Description

AI Business Plan Generator

This is an AI-powered platform that takes a business idea and generates a complete, professional business plan.

You give it a prompt like "AI-powered logistics app in Kenya", and it creates sections like Executive Summary, Financial Projections, SWOT, Marketing Strategy, etc.

The generated plan is editable, and in the future, you’ll be able to save it for later use.

Key point: Right now, the plan is generated and displayed. Saving, exporting, and pitch decks are planned for later.

2. Features

The README lists core features:

Idea Understanding – The AI reads your input and understands the sector, target market, and business type.

Market Analysis – It provides insights about competitors, customers, and industry trends.

Financial Estimator – Generates revenue, cost, and profit projections.

Business Plan Composer – Automatically creates all standard sections of a business plan.


Future Features:

Plan Saving & Management – Currently not implemented, but planned. Eventually, you can store multiple generated plans in your account and come back to edit them later.

Export Options (PDF, Word, Excel, PowerPoint) – Also future feature. This will allow users to download their plans for sharing or presentations.

AI-powered Pitch Deck Creation – The system will convert your plan into a visual presentation, like slides for investors.

Key point: Saving plans, exporting, and pitch decks are not functional yet but are in the roadmap.

3. Tech Stack

Lists the technologies used:

Frontend – React, Tailwind CSS, javascript.

Backend – Node.js + Express for APIs; .

Database – MongoDB to store users and plans when implemented.

AI Layer – GROQ_API_KEY

Hosting – Vercel and render

Key point: The stack is modern and scalable, ready for future features like saving plans, exports, and pitch decks.

4. Architecture Overview
User → Web UI → Backend API → AI Engine → Database → Output


User submits a business idea.

Backend sends it to AI engine.

AI generates the plan and returns it as JSON.

Frontend shows the plan to the user.

Future additions:

Saved plans will go into the database.

Exports (PDF/Word/Excel/PPT) will be generated from the formatted plan.

5. Core Modules

Prompt Handler – Understands the user’s business idea.

Content Generator – Generates each section of the business plan.

Financial Calculator – Creates revenue, costs, and profit tables.

competitor analysis

idea validation

Dashboard – Future feature: lets users see and manage saved plans.


6. Future Enhancements

Save & Manage Plans – Users will be able to store multiple generated plans, edit them, and reuse them later.

AI-powered Pitch Deck Creation – Converts plans into visual slides for presentations or investors.

Multi-language Support – Plans can be generated in different languages.

Advanced Financial Modeling – More detailed forecasts, charts, and scenario analysis.

Real-time Collaboration – Teams can work on the same plan simultaneously.

User Analytics & Insights – Track how users generate plans and what features are popular.

Key point: These are not functional yet. They indicate the roadmap and future direction of the app.

7. Project Structure

Backend – Organized to separate configuration, models, services, controllers, routes, middleware, and utils.

Frontend – Organized to separate components, pages, context/state, services (API calls), and assets.

backend/
├─ node_modules/                  # Installed packages (ignore in Git)
├─ exports/                        # Optional: store exported plans
├─ .env                            # Environment variables (API keys, DB URIs)
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ checkplans.mjs                  # Script to test plan generation
│
├─ src/
│   ├─ app.js                      # Express app setup
│   ├─ server.js                   # Server startup
│   │
│   ├─ config/
│   │   ├─ db.js                   # MongoDB connection
│   │   └─ groq.js                 # GROQ API client
│   │
│   ├─ controllers/                # Handles routes
│   ├─ routes/                     # API route definitions
│   ├─ services/                   # Business logic & AI calls
│   ├─ models/                     # Database schemas (Mongoose)
│   ├─ middlewares/                # Express middleware
│   └─ utils/                      # Utility functions

frontend/
├─ node_modules/                  # Installed packages
├─ public/                        # Static assets (favicon, images)
├─ .env                           # Environment variables
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ vite.config.js                 # Vite build configuration
├─ tailwind.config.js             # Tailwind CSS configuration
├─ postcss.config.js
├─ eslint.config.js
│
├─ src/
│   ├─ main.jsx                    # React entry point
│   ├─ index.css                   # Global styles
│   ├─ App.jsx                     # Main App component
│   ├─ App.css
│   ├─ router.jsx                  # React routes
│   │
│   ├─ assets/                     # Images, logos, icons
│   ├─ components/                 # Reusable UI components
│   ├─ pages/                      # Page-level components
│   ├─ services/                   # API calls
│   └─ context/                    # React context/state management


8. Installation & Usage

Instructions show how to set up backend and frontend locally.

Users can run the app, generate a business plan.
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd ../backend
npm install
node src/server.js



Future usage improvements:

Once saving is implemented, users can store plans in the database.

When export is implemented, users can download plans in various formats.

When pitch deck is implemented, users can convert plans into investor-ready presentations.

9. Screenshots
10. <img width="1813" height="961" alt="image" src="https://github.com/user-attachments/assets/d6e55bc2-1568-4a2f-a92d-e7fef5933e6b" />
11. <img width="1095" height="944" alt="image" src="https://github.com/user-attachments/assets/3a458548-a66a-431f-b894-563d8d2c6a47" />



Screenshots section is for showing the UI and generated plans.

MIT license is included to allow free use and modification.

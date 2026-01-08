# Campus Companion Platform

A **community-driven, open-source platform** designed to bring **campus life, study groups, events, and AI-powered student tools** into one unified place.

Built by **GDG On Campus University of Primorska**, for students.

🌐 **Live Demo**

* Marketing site: [https://campus-companion-upr.web.app/](https://campus-companion-upr.web.app/)
* Dashboard (app): [https://campus-companion-upr.web.app/app](https://campus-companion-upr.web.app/app)

---

## 🌟 Vision

The Campus Companion Platform aims to become a **digital home for campus communities**:

* One place for **events, study groups, and resources**
* A real-world showcase of **Google technologies** (Firebase, Gemini, Cloud)
* A **beginner-friendly**, contribution-first open-source project

The platform is intentionally **modular and extensible**, allowing new features, AI tools, and plugins to be added over time without breaking the core system.

---

## 🧱 Project Overview (Big Picture)

```
Existing GDG Website  ──▶  Campus Companion Platform
     (Info only)              (Interactive Product)
```

* The existing GDG website remains **unchanged**
* Campus Companion is a **separate interactive product**
* Shared branding, separate responsibilities

---

## 🖥️ Platform Layout

### High-Level Structure

```
┌────────────────────────────────────────────────────┐
│  Top Bar: Logo | Search | Notifications | Profile  │
├────────────────────────────────────────────────────┤
│ Sidebar        │                                   │
│ - Dashboard    │        Main Content Area          │
│ - Events       │   (Cards, Tables, Forms, AI...)   │
│ - Study Groups │                                   │
│ - AI Tools     │                                   │
│ - Settings     │                                   │
└────────────────────────────────────────────────────┘
```

* **Public (Marketing)**: landing pages, community info, onboarding
* **Dashboard (Authenticated)**: interactive tools and features
* **Admin (Future)**: moderation and platform management

---

## 📄 Core Features (MVP)

### 1️⃣ Dashboard

Personalized landing page after login:

* Overview of upcoming events
* Joined study groups
* Quick access to AI tools
* Platform announcements

---

### 2️⃣ Events Hub

* Publish campus & GDG events
* RSVP and attendance tracking
* Event filtering (tech, academic, social)
* Calendar-based browsing

**Gemini Add-ons (Planned):**

* Auto-generated event summaries
* Weekly event digest

---

### 3️⃣ Study Groups

* Create and join study groups
* Group-specific resources
* Member roles (admin / member)

Examples:

* *“DSA – Semester 3”*
* *“AI/ML Reading Group”*

---

### 4️⃣ Resources Library (Planned)

* Upload notes, PDFs, links
* Tag by subject and semester
* Community voting & quality ranking

**Gemini Add-ons:**

* Notes summarization
* Key-point extraction

---

### 5️⃣ Gemini Tools (Plugin Zone)

A dedicated space for **AI-powered student tools**, implemented as independent plugins.

Initial tools:

* Notes Summarizer
* Resume Reviewer
* Interview Preparation Assistant
* Code Explainer

Each tool:

* Runs via **Firebase Cloud Functions**
* Uses **Gemini API**
* Can be developed independently

---

### 6️⃣ User Profile

* Events attended
* Study groups joined
* Contribution history (future)
* Badges & achievements (future)

---

## 🧩 Plugin-Based Architecture

```
campus-companion/
│
├── frontend/              # React + TypeScript (Vite)
│
├── backend/
│   ├── functions/         # Firebase Cloud Functions
│   │   ├── events/
│   │   ├── study-groups/
│   │   ├── gemini/
│   │   │   ├── summarize.ts
│   │   │   ├── resumeReview.ts
│   │
│   └── firebase-config/
│
├── plugins/
│   ├── gemini-for-students/
│   ├── analytics/         # future
│   └── datasets/          # future
│
├── docs/
│   ├── onboarding.md
│   ├── contributing.md
│   └── architecture.md
│
└── README.md
```

---

## 🔧 Tech Stack

### Frontend

* React + TypeScript
* Vite
* Tailwind CSS

### Backend (Serverless)

* Firebase Authentication
* Firestore Database
* Firebase Cloud Functions (Node.js)
* Firebase Hosting

### AI

* Gemini API (via Cloud Functions)

---

## 🔄 Backend Flow (Example)

```
User Action (Frontend)
   ↓
Cloud Function (Business Logic)
   ↓
Gemini API
   ↓
Process & Store Result (Firestore)
   ↓
Return Response to UI
```

All backend logic is handled **server-side** via Cloud Functions for security and scalability.

---

## 👥 Who Can Contribute?

This project is intentionally built for **all skill levels**:

* **Beginners** → UI components, styling, documentation
* **Intermediate** → Firestore schemas, APIs, dashboard logic
* **Advanced** → Gemini integrations, security rules, performance

---

## 🏷️ GitHub Issue Labels

* `good first issue`
* `frontend`
* `backend`
* `firebase`
* `gemini`
* `docs`

---

## 🚀 Roadmap

### Phase 1 – Foundation ✅

* Project setup
* Public marketing pages
* Dashboard layout
* Navigation & routing

### Phase 2 – Community Features 🔄

* Event management (CRUD + RSVP)
* Study groups
* User profiles
* Firestore security rules

### Phase 3 – AI Plugins 🔮

* Gemini tools for students
* Plugin framework stabilization
* AI usage limits & cost control

### Phase 4 – Admin & Scale 🔒

* Admin dashboard
* Moderation tools
* Analytics & monitoring

---

## 🤝 Community & Contribution

This is a **GDG On Campus open-source initiative**.

Everyone is welcome to:

* Learn
* Build
* Ship real features

👉 See `CONTRIBUTING.md` to get started.

---

## 📜 License

MIT License

---

> Built with ❤️ by the GDG On Campus University of Primorska community

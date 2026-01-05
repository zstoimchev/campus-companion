# Campus Companion Platform

A community-driven, open-source platform designed to bring **campus life, study groups, events, and AI-powered student tools** into one unified place.

Built by **GDG On Campus** community members, for students.

---

## 🌟 Vision

Campus Companion Platform aims to become a **digital home for campus communities**:

* One place for events, study groups, and resources
* A practical showcase of **Google technologies** (Firebase, Gemini, Cloud)
* A beginner-friendly, contribution-first open-source project

This project is intentionally **modular**, so new ideas (AI tools, analytics, datasets, plugins) can be added over time without breaking the core system.

---

## 🧱 Project Overview (Big Picture)

```
Existing GDG Website  ──▶  Campus Companion Platform
     (Info only)              (Interactive Product)
```

* The existing GDG website remains **unchanged**
* Campus Companion Platform is a **separate product**
* Shared branding, separate responsibilities

---

## 🖥️ What Does the Platform Look Like?

### High-Level Layout

```
┌──────────────────────────────────────────────┐
│  Top Bar: Logo | Events | Groups | AI | Profile│
├──────────────────────────────────────────────┤
│ Sidebar        │                              │
│ - Dashboard    │   Main Content Area          │
│ - Events       │   (Cards, Tables, Chats)    │
│ - Study Groups │                              │
│ - Resources    │                              │
│ - Gemini Tools │                              │
│ - Career       │                              │
└──────────────────────────────────────────────┘
```

---

## 📄 Core Pages (MVP)

### 1️⃣ Dashboard

Personalized landing page after login:

* Upcoming events
* Joined study groups
* Recent announcements
* Quick access to Gemini tools

---

### 2️⃣ Events Hub

* Publish campus & GDG events
* RSVP and attendance tracking
* Filters (tech, cultural, sports)
* Calendar view

**Gemini Add-on**:

* Auto-generate event summaries
* Weekly event digest

---

### 3️⃣ Study Groups

* Create and join study groups
* Group-based resources
* Roles (admin / member)

Examples:

* "DSA – Semester 3"
* "AI/ML Reading Group"

---

### 4️⃣ Resources Library

* Upload notes, PDFs, links
* Tag by subject and semester
* Community voting

**Gemini Add-on**:

* Notes summarization
* Key-point extraction

---

### 5️⃣ Gemini Tools (Plugin Zone)

This section hosts AI-powered student tools.

Initial tools:

* Notes Summarizer
* Resume Reviewer
* Interview Prep Assistant
* Code Explainer

Each tool is developed as an **independent plugin**.

---

### 6️⃣ Profile

* Events attended
* Study groups joined
* Contribution badges (future)

---

## 🧩 Plugin-Based Architecture

```
campus-companion/
│
├── frontend/              # React + TypeScript
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
* Tailwind CSS / MUI

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
Cloud Function (Backend Logic)
   ↓
Gemini API
   ↓
Process + Store Result (Firestore)
   ↓
Return Response to UI
```

Firebase Cloud Functions handle **all backend logic**.

---

## 👥 Who Can Contribute?

This project is designed for **all skill levels**.

* Beginners → UI components, docs, styling
* Intermediate → Firestore schemas, APIs
* Advanced → Gemini integration, security, scalability

---

## 🏷️ GitHub Issue Labels

* `good first issue`
* `frontend`
* `backend`
* `firebase`
* `gemini`
* `docs`

---

## 🚀 Roadmap (Draft)

### Phase 1 – Foundation

* Repo setup
* Auth + Events MVP
* Basic dashboard

### Phase 2 – Community Features

* Study groups
* Resource sharing
* Role-based access

### Phase 3 – AI Plugins

* Gemini for Students
* Resume & interview tools

---

## 🤝 Community & Contribution

This is a **GDG On Campus open-source initiative**.

All students are welcome to:

* Learn
* Build
* Ship

Check `CONTRIBUTING.md` to get started.

---

## 📜 License

MIT License

---

> Built with ❤️ by the GDG On Campus community

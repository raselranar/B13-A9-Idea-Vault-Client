# **IdeaVault – Startup Idea Sharing Platform**

Welcome to **IdeaVault**\! This is a web-based platform where creative minds can share innovative startup ideas, explore concepts posted by others, and collaborate through feedback and active discussions. Instead of scheduling or booking, this platform focuses entirely on idea validation and gathering helpful community feedback.

- **Live Site URL:** https://idea-vault-server-3r1n.vercel.app
- **Client Repository:** https://github.com/raselranar/Idea-Vault-Client
- **Server Repository:** https://github.com/raselranar/Idea-Vault-Server

## **🚀 Key Features**

- **Secure Authentication via Better-Auth:** Simple login and registration using custom emails/passwords or quick Google Sign-In, fully secured with JWT tokens.
- **Full CRUD for Ideas:** Logged-in users can easily post new startup ideas, update details using modals, or delete their ideas with confirmation safety.
- **Dynamic Interactive Comment System:** Users can leave feedback on ideas, edit their own thoughts, or remove comments dynamically with real-time feedback.
- **Smart Search & Category Filters:** Quickly search through titles (case-insensitive) or filter out ideas by specific categories like Tech, Health, AI, and Education.
- **Global Light / Dark Theme Mode:** Smooth theme switching accessible straight from the navbar to customize user experience across the whole application.

## **🛠️ Technologies Used**

### **Frontend (Client-Side)**

- **Framework:** Next.js (v16) with React 19
- **Styling:** Tailwind CSS (v4) & HeroUI components
- **Animations:** Motion (Framer Motion)
- **Theme Management:** Next-Themes
- **Authentication:** Better-Auth (with MongoDB adapter)
- **Icons:** Lucide React & React Icons

### **Backend (Server-Side)**

- **Database:** MongoDB
- **Environment:** Node.js / Express.js (or Next.js API routes)

## **💻 Prerequisites & Local Setup**

To get this project running locally on your computer, please follow these steps:

### **1\. Clone the repository**

`git clone https://github.com/raselranar/B13-A9-Idea-Vault-Client.git`  
`cd B13-A9-Idea-Vault-Client`

### **2\. Install dependencies**

`npm install`  
`# or`  
`yarn install`

### **3\. Setup Environment Variables**

Create a .env.local file in the root directory and add your keys (be sure to replace placeholders with your actual credentials):  
`MONGODB_URI=your_mongodb_connection_string`  
`BETTER_AUTH_SECRET=your_auth_secret_key`  
`NEXT_PUBLIC_APP_URL=http://localhost:3000`

### **4\. Run the Development Server**

`npm run dev`  
`# or`  
`yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the platform.

## **🧩 Junior Developer Reflection & Challenges**

Building **IdeaVault** taught me a lot about real-world full-stack problems\! Here are some things I worked hard to overcome:

- **Handling Private Route Reloads:** Ensuring that when a logged-in user refreshes the browser on a private route, they stay logged in instead of getting immediately kicked back to the login page.
- **Dynamic Custom Toast Feedback:** Completely removed boring default alerts to implement clean, asynchronous user status toasts for every add, update, and delete operation.
- **Complex MongoDB Queries:** Learning how to write proper $regex logic for case-insensitive title searching alongside precise category filtering.

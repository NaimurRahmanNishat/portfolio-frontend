<img width="1899" height="959" alt="Homepage" src="https://github.com/user-attachments/assets/880f685e-baba-4b82-8c35-daab1f81eeb5" />

# 🚀 Portfolio Frontend (Next.js)

## 🌟 **Overview**

This is the **frontend** of my **portfolio website**, built using **Next.js (TypeScript)** with a sleek and responsive UI. The project utilizes **Tailwind CSS, Framer Motion, ShadcnUI, Redux, JWT, and NextAuth** for an optimized and interactive experience. The dashboard offers complete **CRUD** functionality and other powerful features.

---

## 🛠 **Tech Stack**

### **Frontend**

- **⚡ Next.js (TypeScript)** – SSR & SSG for better performance & SEO
- **🎨 Tailwind CSS** – Utility-first CSS framework for fast styling
- **🎭 Framer Motion** – Smooth animations & interactions
- **🛠 ShadcnUI** – Beautiful, accessible UI components
- **🗄 Redux** – State management for scalable applications
- **🔐 JWT & NextAuth** – Secure authentication & authorization

---

## 📌 **Features**

### 🔹 **Home Page** 🏠

- Showcases an interactive introduction & featured projects
- Uses **Framer Motion** for smooth animations
- **Responsive** layout for all screen sizes

### 🔹 **Projects Section** 📂

- Displays portfolio projects dynamically
- Filters projects by category & tech stack
- Integrated **dynamic routing** for individual project pages

### 🔹 **Blog Section** ✍️

- Fetches blog posts dynamically

### 🔹 **Contact Form** 📬

- Users can send messages directly via a contact form
- Integrated with **email services** for instant communication

### 🔹 **Dashboard** 🎛

- Secure **authentication (NextAuth, JWT)** 🔐
- **CRUD operations** for managing blog posts, projects & users 📝
- **Dark Mode** & customizable UI 🎨
- **Role-based access control (Admin/User)** 🔑
- Real-time updates with **Optimistic UI updates** 🚀

---

## 🏗 **Installation & Setup**

1️⃣ **Clone the Repository**

```bash
  git clone https://github.com/Shakilofficial/portfolio-client.git
  cd frontend
```

2️⃣ **Install Dependencies** 📦

```bash
  npm install
  # or
  yarn install
```

3️⃣ **Set Up Environment Variables**
Create a `.env.local` file and add the following:

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

4️⃣ **Run the Development Server** 🚀

```bash
  npm run dev
  # or
  yarn dev
```

5️⃣ **Open in Browser** 🌍
Visit: [http://localhost:3000](http://localhost:3000)

---

## 📜 **Project Structure**

```
/frontend-portfolio
│── public/         # Static assets
│── src/
│   ├── components/ # Reusable UI components
│   ├── app/      # Next.js pages (home, blog, projects, dashboard)
│   ├── styles/     # Global styles
│   ├── lib/      # Redux store & slices
│   ├── utils/      # Helper functions
│  
│── next.config.js  # Next.js configuration
│── tailwind.config.js # Tailwind configuration
│── package.json    # Dependencies & scripts
```

---

## 🚀 **Future Enhancements**

- **📊 Analytics Integration** (Google Analytics)
- **🛒 E-commerce Features** (for product showcase)
- **📡 API Caching & Performance Optimization**

---

## 👥 Contributing

🔹 Fork the repository.

🔹 Create a new branch (`git checkout -b feature-branch`).

🔹 Commit your changes (`git commit -m 'Add new feature'`).

🔹 Push to the branch (`git push origin feature-branch`).

🔹 Create a **Pull Request**.

---


## Deploy on Vercel

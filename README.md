🌐 Aadi Shrivastava — Personal Portfolio

A modern and fully responsive portfolio website built using React.js, Tailwind CSS, and EmailJS.
This website showcases my skills, projects, experience, achievements, SIPs, and competitive programming profiles — all in one place.

🚀 Live Demo:
👉 View Live Portfolio: https://my-portfolio-tech.netlify.app/

🧠 Tech Stack

Category — Technologies Used
Frontend:  React, TypeScript, Tailwind CSS
UI & Animations: Framer Motion, ShadCN UI
Email Service: EmailJS
Deployment: Netlify
Version Control: Git & GitHub

✨ Features

🎨 Modern UI/UX — Sleek, minimal, and elegant design.

⚡ Optimized Performance — Uses Next.js App Router.

📱 Fully Responsive — Works perfectly on all devices.

💬 EmailJS Contact Form — Sends messages directly to your inbox.

🏆 Dedicated Sections — About, Education, Skills, Projects, Experience, Achievements, SIPs, and CP Profiles.

🌈 Smooth Animations — Powered by Framer Motion.

🧊 Glassmorphism Effects — Adds modern visual depth.

📂 Folder Structure

portfolio/
├── app/
│ ├── page.tsx
│ └── components/
│ ├── Hero.tsx
│ ├── About.tsx
│ ├── Contact.tsx
│ ├── Input.tsx
│ └── TextArea.tsx
├── public/
├── styles/
├── package.json
└── README.md

⚙️ Setup Instructions

Step 1: Clone this repository
git clone https://github.com/aadi-shrivastava/My-Portfolio.git

cd My-Portfolio

Step 2: Install dependencies
npm install

Step 3: Set up environment variables
Create a file named .env.local and add your EmailJS credentials:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

Step 4: Run locally
npm run dev

Visit http://localhost:3000 to view your portfolio.

📧 Contact Form Integration (EmailJS)
This portfolio uses EmailJS for direct email delivery.

EmailJS Template Variables:
from_name: {{name}}
from_email: {{email}}
message: {{message}}
to_name: "Aadi Shrivastava"

Make sure your EmailJS template matches these variable names.

🌍 Deploying on Netlify

Push your code to GitHub.

Go to Netlify → New Site from Git.

Connect your GitHub account and select your portfolio repository.

Set Build Command to: npm run build

Set Publish Directory to: .next

Add your .env variables inside Netlify → Site Settings → Environment Variables.

Click Deploy Site 🚀

✅ That’s it — your portfolio will be live at:
https://your-site-name.netlify.app

🧑‍💻 Author
👋 Aadi Shrivastava
🎓 UIT-RGPV, Bhopal
💻 Full Stack Developer | Competitive Programmer
📧 aadishrivastava13@gmail.com

⭐ Show Your Support
If you like this project, please star it on GitHub ⭐
It really helps and keeps me motivated to build more amazing projects.

“Built with passion, precision, and purpose. 🚀”

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume - Aadi Shrivastava",
  description: "Full Stack Developer and Competitive Programmer Resume",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b border-border">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AADI SHRIVASTAVA
          </h1>
          <div className="text-muted-foreground space-y-1">
            <p>+91 7987764125 | Bhopal, India</p>
            <p>
              <a href="mailto:aadishrivastava13@gmail.com" className="hover:text-primary transition-colors">
                aadishrivastava13@gmail.com
              </a>
            </p>
            <p className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://www.linkedin.com/in/aadishrivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/aadishrivastava
              </a>
              <a
                href="https://github.com/aadishrivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                github.com/aadishrivastava
              </a>
            </p>
          </div>
        </div>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">EDUCATION</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-semibold text-lg">Bachelor of Technology, UIT RGPV, Bhopal</h3>
                <p className="text-muted-foreground">Electronics and Communication Engineering</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">Expected 2026</p>
                <p className="text-muted-foreground">CGPA – 7.74</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coding Profiles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">CODING PROFILES</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Solved 300+ problems on Codeforces with a rating of 1250+, maintaining a top 8k global rank{" "}
              <a
                href="https://codeforces.com/profile/aadishrivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Profile
              </a>
            </li>
            <li>
              Solved 200+ problems on LeetCode with a rating of 1450+{" "}
              <a
                href="https://leetcode.com/aadishrivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Profile
              </a>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">SKILLS</h2>
          <div className="grid gap-3">
            <div>
              <span className="font-semibold">Languages: </span>
              <span className="text-muted-foreground">Java (Data Structures & Algorithms), JavaScript, C++</span>
            </div>
            <div>
              <span className="font-semibold">Frontend: </span>
              <span className="text-muted-foreground">React.js, HTML, CSS, Tailwind CSS, Bootstrap</span>
            </div>
            <div>
              <span className="font-semibold">Backend: </span>
              <span className="text-muted-foreground">
                Node.js, Express.js, RESTful APIs, Authentication & Authorization
              </span>
            </div>
            <div>
              <span className="font-semibold">Databases: </span>
              <span className="text-muted-foreground">MySQL, MongoDB</span>
            </div>
            <div>
              <span className="font-semibold">Developer Tools: </span>
              <span className="text-muted-foreground">VS Code, Git, GitHub</span>
            </div>
            <div>
              <span className="font-semibold">API Testing Tools: </span>
              <span className="text-muted-foreground">Postman, Insomnia, Hoppscotch, Thunder Client</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">PROJECTS</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="font-semibold text-lg">Vivid Lodging – Full Stack Project</h3>
                <a
                  href="https://vivid-lodging.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Click here for a demo
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Developed a full-stack hotel booking application using EJS, Express.js, and MongoDB for seamless hotel
                  management and booking functionality.
                </li>
                <li>
                  Implemented authentication and authorization with Passport.js, Express-sessions, and Express-flash for
                  secure, personalized access.
                </li>
                <li>Integrated Mapbox API for geocoding and interactive map visualization of hotel locations.</li>
                <li>
                  Utilized Cloudinary for image storage, uploading user files, retrieving URLs, and saving them in
                  MongoDB.
                </li>
                <li>Configured MongoDB session store to maintain persistent sessions across devices.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="font-semibold text-lg">Task Management App – Full Stack Project</h3>
                <a
                  href="https://your-personal-task-manager.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Click here for a demo
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Built a full-stack task management app using React.js and Redux for efficient state handling and a
                  responsive UI.
                </li>
                <li>
                  Created a secure backend with Node.js, Express.js, and MongoDB, using JWT and bcrypt.js for
                  authentication and password encryption.
                </li>
                <li>Integrated frontend-backend communication with Axios and CORS, enabling smooth CRUD operations.</li>
                <li>Deployed on Render (backend) and Netlify (frontend) for continuous performance and uptime.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">EXPERIENCE</h2>
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <div>
                <h3 className="font-semibold text-lg">Branch Coordinator</h3>
                <p className="text-muted-foreground">Training & Placement Cell, RGPV, Bhopal, India</p>
              </div>
              <p className="font-semibold">2023 – Present</p>
            </div>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                Organized and executed placement drives and training programs, enhancing student placement readiness.
              </li>
              <li>Coordinated with 5+ companies and managed recruitment data using Excel/Google Sheets.</li>
              <li>Streamlined scheduling and communication with automated workflows for better efficiency.</li>
            </ul>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">ACHIEVEMENTS</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Earned "REST API (Intermediate)" Certificate from HackerRank{" "}
              <a
                href="https://www.hackerrank.com/certificates/your-cert-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Certificate
              </a>
            </li>
            <li>
              Maintaining a daily GitHub repository named practiceQue where I commit solutions to problems I practice on
              Codeforces.{" "}
              <a
                href="https://github.com/aadishrivastava/practiceQue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Repository
              </a>
            </li>
            <li>
              Earned "Introduction to JavaScript" Certificate from Sololearn{" "}
              <a
                href="https://www.sololearn.com/certificates/your-cert-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Certificate
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

import { useEffect } from "react";
import { Download, Linkedin, ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Gowtham Nimmana | Senior Software Engineer";
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-inter scroll-smooth bg-gray-950 text-white text-[16px] leading-relaxed">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
        <nav className="flex justify-between items-center px-6 md:px-20 py-4">
          <h1 className="text-xl font-bold text-blue-400 tracking-wide">Gowtham</h1>
          <ul className="flex gap-6 text-sm font-medium">
            {['home', 'about', 'skills', 'experience', 'certifications', 'achievements', 'contact'].map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-blue-400 transition capitalize">{id}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="pt-24 space-y-24">
        {/* Section Template */}
        {[
          {
            id: "home",
            content: (
              <div className="text-center">
                <motion.h1
                  className="text-6xl md:text-7xl font-extrabold tracking-tight"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Gowtham Nimmana
                </motion.h1>
                <p className="text-2xl md:text-3xl text-gray-400 mt-6 font-light">
                  Senior Software Engineer | Solution Architect | DevOps Advocate
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                  <a href="mailto:gowtham.nimmana@outlook.com" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-base">Contact Me</a>
                  <a
                    href="https://www.linkedin.com/in/gowtham-nimmana-ab489b112/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-900 transition text-base"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </span>
                  </a>
                  <a href="/GOWTHAM_NIMMANA_CV.pdf" download className="px-6 py-2 text-blue-300 underline hover:text-blue-400 transition text-base">
                    <span className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" /> Download CV
                    </span>
                  </a>
                </div>
              </div>
            ),
            next: "about",
          },
          {
            id: "about",
            title: "About Me",
            content: (
              <p className="text-lg text-gray-300 leading-8">
                With 12+ years of software engineering experience, I’ve built and scaled distributed systems across industries.
                I'm driven by system design thinking, clean code principles, and a collaborative leadership mindset. I've delivered cloud-native, secure,
                and highly available platforms while mentoring engineers and enabling agile practices in global teams.
              </p>
            ),
            next: "skills",
          },
          {
            id: "skills",
            title: "Technical Skills",
            content: (
              <div className="grid md:grid-cols-2 gap-12 text-base text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Programming</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Java 11/17, Dart, JavaScript, Python</li>
                    <li>REST, WebSocket, GraphQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Frameworks</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Spring Boot, Angular, Flutter, Hibernate</li>
                    <li>Kafka, Apigee, Mashery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Cloud & DevOps</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>AWS (Lambda, EKS, Cognito, S3)</li>
                    <li>Terraform, Jenkins, GitHub Actions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Security & IAM</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>SSO, OAuth2, OpenID, SAML 2.0</li>
                    <li>IAM roles, policies, Cognito</li>
                  </ul>
                </div>
              </div>
            ),
            next: "experience",
          },
          {
            id: "experience",
            title: "Professional Experience",
            content: (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300">KPN – Sr Software Engineer</h3>
                  <p>Architected field apps and CI/CD systems using cloud-native stack and Cognito-based SSO.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300">ING Bank – Software Engineer</h3>
                  <p>Built financial backend systems with Java, Camel and integrated high-security APIs.</p>
                </div>
              </div>
            ),
            next: "certifications",
          },
          {
            id: "certifications",
            title: "Certifications",
            content: (
              <ul className="list-disc list-inside text-gray-300">
                <li>AWS Certified Solutions Architect – Professional</li>
                <li>AWS Certified DevOps Engineer – Professional</li>
                <li>Oracle Certified Java Developer</li>
                <li>Scrum Master – PSM I</li>
              </ul>
            ),
            next: "achievements",
          },
          {
            id: "achievements",
            title: "Key Achievements",
            content: (
              <ul className="list-disc list-inside text-gray-300">
                <li>Hackathon Winner – Dutch Open Hackathon, Amsterdam</li>
                <li>Initiated SSO integration bootcamp</li>
                <li>Tech awards for internal platform automation</li>
              </ul>
            ),
            next: "contact",
          },
          {
            id: "contact",
            title: "Get in Touch",
            content: (
              <div className="space-y-2 text-center">
                <p>Email: <a href="mailto:gowtham.nimmana@outlook.com" className="text-blue-500">gowtham.nimmana@outlook.com</a></p>
                <p>Location: Almere, Netherlands</p>
                <p><a href="https://www.linkedin.com/in/gowtham-nimmana-ab489b112/" className="text-blue-500">LinkedIn Profile</a></p>
              </div>
            ),
          },
        ].map(({ id, title, content, next }) => (
          <section
            id={id}
            key={id}
            className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto text-left"
          >
            <h2 className="text-5xl font-bold text-blue-400 mb-10">{title}</h2>
            {content}
            {next && (
              <button onClick={() => scrollTo(next)} className="mt-16 self-center text-blue-500 hover:text-blue-300">
                <ArrowDownCircle className="w-8 h-8 animate-bounce" />
              </button>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
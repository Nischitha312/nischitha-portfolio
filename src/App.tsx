import { useState, useEffect, useRef } from "react";
import profileImg from "./assets/profile.jpeg";

const NAV_ITEMS = ["About", "Education", "Skills", "Projects", "Achievements", "Contact"];

const TECH_SKILLS = ["Python", "Java", "HTML", "CSS", "NoSQL"];
const SOFT_SKILLS = ["Teamwork", "Time Management", "Leadership", "Communication & Interactions"];
const TOOLS = ["VS Code", "Eclipse - Java", "MongoDB - NoSQL"];

const ACHIEVEMENTS = [
  "Programming Fundamentals of Python Part -1 – Infosys",
  "Programming Fundamentals of Python Part -2 – Infosys",
  "Get Started with Pub/Sub Badge – Google Cloud Skill Boost",
  "Machine Learning with Python – IBM",
  "Python Foundation Certificate – Infosys",
  "Coursera – Google Data Analytics",
  "UiPath Completion Certificate",
  "Google Cloud Fundamentals: Core Infrastructure & Introduction to Generative AI – Google Cloud Skills Boost",
];

const PROJECTS = [
  {
    title: "Skin Cancer Detection Using CNNs",
    icon: "🧬",
    color: "from-rose-500 to-pink-600",
    description:
      "Leverages deep learning techniques to classify skin lesions as benign or malignant. A CNN is trained on a dataset of skin images to automatically extract features and detect cancerous patterns. Provides predictions with high accuracy, enhancing early diagnosis and aiding dermatologists.",
    tags: ["CNN", "Deep Learning", "Python", "Medical AI"],
  },
  {
    title: "Detection of Cardiovascular Disease in ECG Images using ML",
    icon: "❤️",
    color: "from-blue-500 to-cyan-600",
    description:
      "An AI-based system for analyzing ECG images to identify heart abnormalities. Applies machine learning algorithms to detect patterns associated with arrhythmia, myocardial infarction, and atrial fibrillation. Assists healthcare professionals in early detection and intervention.",
    tags: ["Machine Learning", "ECG Analysis", "Healthcare AI", "Python"],
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = NAV_ITEMS.map((n) => n.toLowerCase().replace(" ", "-"));
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "about";
      sectionIds.forEach((id) => {
        const el = refs.current[id];
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = refs.current[id];
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-['Outfit',sans-serif] overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/8 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
         <span className="text-xl font-bold tracking-tight">
  Hi, I'm <span className="text-violet-400">N</span>ischitha
  <span className="text-violet-400">.</span>
</span>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0f0f1a]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                    activeSection === item ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero / About */}
        <section
          ref={(el) => { refs.current["about"] = el; }}
          id="about"
          className="min-h-screen flex items-center pt-20"
        >
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-violet-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
                Nischitha
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  B M
                </span>
              </h1>
              <p className="text-lg text-violet-300 font-semibold tracking-widest uppercase text-sm">
                Aspiring Computer Science & Engineering Student
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                Dedicated and ambitious student pursuing Computer Science & Engineering. Academically driven with a strong record, achieving CGPA of{" "}
                <span className="text-white font-bold">8.42</span>. Proficient in programming languages and eager to apply skills in a Software role.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:nischumanju3@gmail.com"
                  className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5"
                >
                  View My Work
                </a>
                <a
                  href="https://www.linkedin.com/in/nischitha-b-m-47b2aa32a"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-pink-600 rounded-3xl blur-2xl opacity-30 scale-105" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Nischitha B M"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating badge */}
               
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          ref={(el) => { refs.current["education"] = el; }}
          id="education"
          className="py-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle label="Education" />
            <div className="mt-12 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/60 via-violet-600/20 to-transparent" />
              <div className="pl-20 relative">
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-violet-600 border-4 border-[#0a0a0f] shadow-lg shadow-violet-600/50" />
                <div className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Bachelor of Engineering (CSE)</h3>
                      <p className="text-violet-400 font-medium mt-1">Moodlakatte Institute of Technology, Kundapura</p>
                      <p className="text-gray-500 text-sm mt-1">Udupi, Karnataka</p>
                      <p className="text-gray-500 text-sm">Visvesvaraya Technological University</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-violet-600/15 border border-violet-500/25 text-violet-300 text-sm font-semibold px-4 py-1.5 rounded-full">
                        2022 – 2026
                      </span>
                      <p className="text-3xl font-black text-white mt-2">8.42 <span className="text-sm font-normal text-gray-400">CGPA</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          ref={(el) => { refs.current["skills"] = el; }}
          id="skills"
          className="py-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle label="Skills" />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <SkillCard title="Tech Skills" emoji="💻" items={TECH_SKILLS} color="violet" />
              <SkillCard title="Soft Skills" emoji="🤝" items={SOFT_SKILLS} color="pink" />
              <SkillCard title="Tools" emoji="🛠️" items={TOOLS} color="cyan" />
            </div>
            {/* Languages */}
            <div className="mt-6 bg-white/3 border border-white/8 rounded-2xl p-6 flex items-center gap-6 flex-wrap">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="text-sm text-gray-400 font-medium mb-2">Languages</p>
                <div className="flex gap-3">
                  {["Kannada", "English"].map((lang) => (
                    <span
                      key={lang}
                      className="bg-gradient-to-r from-violet-600/20 to-pink-600/20 border border-violet-500/20 text-violet-300 px-4 py-1.5 rounded-full text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          ref={(el) => { refs.current["projects"] = el; }}
          id="projects"
          className="py-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle label="Projects" />
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="group bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/20"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 border border-white/8 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section
          ref={(el) => { refs.current["achievements"] = el; }}
          id="achievements"
          className="py-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle label="Achievements" />
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((ach, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/3 border border-white/8 rounded-xl p-5 hover:border-violet-500/25 hover:bg-white/5 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-violet-600/30 to-pink-600/30 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{ach}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          ref={(el) => { refs.current["contact"] = el; }}
          id="contact"
          className="py-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle label="Contact" />
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              <ContactCard
                icon="📱"
                label="Phone"
                value="9449100041"
                href="tel:9449100041"
              />
              <ContactCard
                icon="📧"
                label="Email"
                value="nischumanju3@gmail.com"
                href="mailto:nischumanju3@gmail.com"
              />
              <ContactCard
                icon="🔗"
                label="LinkedIn"
                value="nischitha-b-m"
                href="https://www.linkedin.com/in/nischitha-b-m-47b2aa32a"
              />
            </div>
            <div className="mt-6 text-center bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 text-sm mb-1">Location</p>
              <p className="text-white font-semibold text-lg">📍 Channagiri, Davangere, Karnataka</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm">
          
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight">{label}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-violet-600/40 to-transparent" />
    </div>
  );
}

function SkillCard({
  title,
  emoji,
  items,
  color,
}: {
  title: string;
  emoji: string;
  items: string[];
  color: "violet" | "pink" | "cyan";
}) {
  const colorMap = {
    violet: "border-violet-500/20 bg-violet-600/5",
    pink: "border-pink-500/20 bg-pink-600/5",
    cyan: "border-cyan-500/20 bg-cyan-600/5",
  };
  const tagColorMap = {
    violet: "bg-violet-600/15 border-violet-500/20 text-violet-300",
    pink: "bg-pink-600/15 border-pink-500/20 text-pink-300",
    cyan: "bg-cyan-600/15 border-cyan-500/20 text-cyan-300",
  };
  return (
    <div className={`rounded-2xl border p-6 ${colorMap[color]}`}>
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xl">{emoji}</span>
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`text-sm px-3 py-1.5 rounded-full border font-medium ${tagColorMap[color]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-200 group hover:-translate-y-0.5"
    >
      <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
      <div>
        <p className="text-xs text-gray-500 font-medium">{label}</p>
        <p className="text-white text-sm font-semibold mt-0.5 truncate">{value}</p>
      </div>
    </a>
  );
}

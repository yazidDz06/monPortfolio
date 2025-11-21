import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaPlay, FaBars, FaTimes, FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

// Assets
import s1 from "./assets/skill1.svg";
import s2 from "./assets/typescript.png";
import s3 from "./assets/react.png";
import s4 from "./assets/nodejs.png";
import s5 from "./assets/tailwind-css.png";
import s6 from "./assets/mongodb.png";
import s7 from "./assets/postgresql.png";
import s from "./assets/next.svg";
import s11 from "./assets/express.svg";
import s9 from "./assets/git.png";
import ps from "./assets/postman.svg";
import s13 from "./assets/docker.svg";
import s10 from "./assets/sequelize.svg";
import s12 from "./assets/prisma.svg";
import bg1 from "./assets/cars.png";
import bg2 from "./assets/lastpr.png";
import bg3 from "./assets/proj3.png";
import bg4 from "./assets/coaching.png";
import bg5 from "./assets/project1.png";
import v1 from "./assets/rental.mp4";
import v2 from "./assets/admin.mp4";
import v3 from "./assets/ecom.mp4";
import v4 from "./assets/videontwo.mp4";
import v5 from "./assets/project1.mp4";

// Grid Component with scroll animations
function SkillGrid({ items, centered = false }) {
  return (
    <div className={`py-8 ${centered ? 'max-w-4xl mx-auto' : 'max-w-7xl mx-auto'}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-4 hover:border-purple-300 hover:shadow-xl transition-all shadow-md"
          >
            <img src={item.img} alt={item.name} className="w-16 h-16 object-contain" />
            <span className="text-sm text-center text-gray-800 font-medium">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playingProject, setPlayingProject] = useState(null);

  const navItems = ["Skills", "Projects", "Contact"];

  const skills = [
    { name: "HTML | CSS | JS", img: s1 },
    { name: "TypeScript", img: s2 },
    { name: "React", img: s3 },
    { name: "Node.js", img: s4 },
    { name: "Tailwind CSS", img: s5 },
    { name: "Next.js", img: s },
    { name: "MongoDB", img: s6 },
    { name: "PostgreSQL", img: s7 },
    { name: "Express", img: s11 },
  ];

  const orms = [
    { name: "Sequelize", img: s10 },
    { name: "Prisma", img: s12 },
  ];

  const tools = [
    { name: "Git", img: s9 },
    { name: "Postman", img: ps },
    { name: "Docker", img: s13 },
  ];

  const projects = [
    {
      title: "Car Rental",
      description: "Car rental web app where users can book cars, registered ones can reserve, admins manage CRUD for cars, users, and reservations.",
      github: ["https://github.com/yazidDz06/Location"],
      bg: bg1,
      video: v1,
    },
    {
      title: "Dental Clinic",
      description: "Appointment booking app for dental clinics with admin dashboard for availability management.",
      github: ["https://github.com/yazidDz06/mvp-dental-clinic"],
      bg: bg2,
      video: v2,
    },
    {
      title: "Ecommerce Website",
      description: "Minimalist ecommerce platform with all essential functionalities (frontend + backend repos).",
      github: [
        "https://github.com/yazidDz06/frontendecommercevercel",
        "https://github.com/yazidDz06/ecommerce-",
      ],
      bg: bg3,
      video: v3,
    },
    {
      title: "Coaching Platform",
      description: "Platform connecting clients and coaches with reservation system and automatic email notifications.",
      github: ["https://github.com/yazidDz06/Gym"],
      bg: bg4,
      video: v4,
    },
    {
      title: "Restaurant Appointments",
      description: "Web app to book tables and manage restaurant reservations.",
      github: ["https://github.com/yazidDz06/resto"],
      bg: bg5,
      video: v5,
    },
  ];

  const contacts = [
    { icon: FaEnvelope, label: "Email", value: "yazidkhoualdi5@gmail.com", href: "mailto:yazidkhoualdi5@gmail.com", color: "purple" },
    { icon: FaPhone, label: "Phone", value: "+213 774 392 043", href: "tel:+213774392043", color: "pink" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "+213 557 149 150", href: "https://wa.me/213557149150", color: "green" },
  ];

  const socials = [
    { icon: FaLinkedin, href: "#", color: "blue-600" },
    { icon: FaFacebook, href: "#", color: "blue-700" },
    { icon: FaInstagram, href: "#", color: "pink-600" },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
          
          body {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>
      
      <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent tracking-tight">
                Portfolio
              </div>
              <div className="hidden md:flex gap-8">
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-purple-600 transition-all font-semibold">
                    {item}
                  </a>
                ))}
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-gray-700">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-gray-50 px-4 py-4 flex flex-col gap-2 border-t border-gray-200">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="py-2 text-gray-700 hover:text-purple-600 font-semibold">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hi, I'm
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Khoualdi Lyazid
              </span>
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                , Full Stack Web Developer.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-lg md:text-xl mb-8 leading-relaxed text-gray-600"
            >
              I help you build modern web apps with clean design and solid backend. Passionate about solving problems and delivering high-quality results.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <a href="#contact" className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                Get In Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Skills
            </motion.h2>
            <SkillGrid items={skills} />
          </div>
        </section>

        {/* ORMs */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent"
            >
              ORMs
            </motion.h2>
            <SkillGrid items={orms} centered={true} />
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Tools
            </motion.h2>
            <SkillGrid items={tools} centered={true} />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent"
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all"
                >
                  <div className="relative aspect-video">
                    {playingProject === idx ? (
                      <video src={project.video} autoPlay loop muted className="w-full h-full object-cover" />
                    ) : (
                      <img src={project.bg} alt={project.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.github.map((link, i) => (
                        <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-purple-400 px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition-all font-semibold text-gray-700">
                          <FaGithub /> Repo {project.github.length > 1 ? i + 1 : ""}
                        </a>
                      ))}
                    </div>
                    <button onClick={() => setPlayingProject(playingProject === idx ? null : idx)} className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold hover:scale-105 transition-transform w-full justify-center shadow-md hover:shadow-lg">
                      <FaPlay /> {playingProject === idx ? "Stop" : "Watch"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contacts.map((contact, idx) => (
                <motion.a 
                  key={idx} 
                  href={contact.href} 
                  target={contact.icon === FaWhatsapp ? "_blank" : undefined} 
                  rel={contact.icon === FaWhatsapp ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-purple-300 hover:shadow-xl transition-all flex items-center gap-4 shadow-md"
                >
                  <contact.icon className={`text-3xl text-${contact.color}-600`} />
                  <div className="text-left">
                    <div className="text-sm text-gray-500 font-semibold">{contact.label}</div>
                    <div className="font-bold text-gray-900">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6 rounded-2xl flex items-center justify-center gap-6 shadow-md hover:shadow-xl transition-all"
              >
                {socials.map((social, idx) => (
                  <motion.a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`text-3xl text-gray-600 hover:text-${social.color} transition-colors`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 text-center bg-white">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 font-medium"
          >
            © {new Date().getFullYear()} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">Khoualdi Lyazid</span>. All rights reserved.
          </motion.p>
        </footer>
      </div>
    </>
  );
}


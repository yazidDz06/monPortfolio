import React, { useState } from "react";
import { FaGithub, FaPlay, FaPhone, FaEnvelope, FaBars, FaTimes, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


import s1 from "./assets/skill1.svg";
import s2 from "./assets/typescript.png";
import s3 from "./assets/react.png";
import s4 from "./assets/nodejs.png";
import s5 from "./assets/tailwind-css.png";
import s6 from "./assets/mongodb.png";
import s7 from "./assets/postgresql.png";
import s8 from "./assets/java.png";
import s9 from "./assets/git.png";
import s from "./assets/next.svg";
import ps from "./assets/postman.svg"

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


const img = { s1, s2, s3, s4, s5, s6, s7, s8, s9, s, ps, bg1, bg2, bg3, bg4, bg5 };
const vid = { v1, v2, v3, v4, v5 };

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [playingProject, setPlayingProject] = useState(null);


    const skills = [
        { id: 1, name: "HTML | CSS | JS", img: img.s1 },
        { id: 2, name: "TypeScript", img: img.s2 },
        { id: 3, name: "React", img: img.s3 },
        { id: 4, name: "Node.js", img: img.s4 },
        { id: 5, name: "Tailwind CSS", img: img.s5 },
        { id: 6, name: "Next.js", img: img.s },
        { id: 6, name: "MongoDB", img: img.s6 },
        { id: 7, name: "PostgreSQL", img: img.s7 },
        { id: 8, name: "Java", img: img.s8 },
        { id: 9, name: "Git", img: img.s9 },
        { id: 10, name: "Postman", img: img.ps },
    ];


    const projects = [
        {
            id: 1,
            title: "Car Rental",
            description:
                "Car rental web app where users can book cars, registered ones can reserve , admins manage CRUD for cars, users, and reservations, admins can also change status of reservations while finished statut delete reservations and make car available.",
            github: ["https://github.com/yazidDz06/Location"],
            bg: img.bg1,
            video: vid.v1,
        },
        {
            id: 2,
            title: "Dental Clinic",
            description:
                "Appointment booking app for dental clinics with admin dashboard for availability management.",
            github: ["https://github.com/yazidDz06/mvp-dental-clinic"],
            bg: img.bg2,
            video: vid.v2,
        },
        {
            id: 3,
            title: "Ecommerce Website",
            description:
                "Minimalist ecommerce platform with all essential functionalities (frontend + backend repos).",
            github: [
                "https://github.com/yazidDz06/frontendecommercevercel",
                "https://github.com/yazidDz06/ecommerce-",
            ],
            bg: img.bg3,
            video: vid.v3,
        },
        {
            id: 4,
            title: "Coaching Platform",
            description:
                "Platform connecting clients and coaches with reservation system and automatic email notifications.",
            github: ["https://github.com/yazidDz06/Gym"],
            bg: img.bg4,
            video: vid.v4,
        },
        {
            id: 5,
            title: "Restaurant Appointments",
            description: "Web app to book tables and manage restaurant reservations.",
            github: ["https://github.com/yazidDz06/resto"],
            bg: img.bg5,
            video: vid.v5,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">


            <div className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="#hero"
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300"
                    >
                        Portfolio
                    </a>

                    <nav className="hidden md:flex gap-6 items-center">
                        <a href="#skills" className="hover:text-purple-300 transition">Skills</a>
                        <a href="#projects" className="hover:text-purple-300 transition">Projects</a>
                        <a href="#about" className="hover:text-purple-300 transition">About</a>
                        <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
                    </nav>

                    <button
                        className="md:hidden p-2 rounded-md hover:bg-white/10"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-gray-900/90">
                        <div className="flex flex-col px-6 py-4 gap-3">
                            {["Skills", "Projects", "About", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="py-2 hover:text-purple-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>


            <section id="hero" className="pt-28 pb-12 text-center">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
                        Hi, I'm Khoualdi Lyazid, Full Stack Web Developer.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
                        I help you build modern web apps with clean design and solid backend.
                        Passionate about solving problems and delivering high-quality results.
                    </p>
                </div>
            </section>


            <section id="skills" className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8">Skills</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="flex flex-col items-center bg-white/5 rounded-xl p-4 shadow-sm hover:scale-105 transition-transform"
                            >
                                <img src={skill.img} alt={skill.name} className="w-16 h-16 object-contain mb-3" />
                                <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="projects" className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        {projects.map((p) => (
                            <div
                                key={p.id}
                                className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
                            >

                                <div className="relative w-full h-48 bg-black">
                                    {playingProject === p.id ? (
                                        <video
                                            src={p.video}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            autoPlay
                                            controls
                                        />
                                    ) : (
                                        <img
                                            src={p.bg}
                                            alt={p.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    )}
                                </div>


                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                                        <p className="text-sm text-gray-400">{p.description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 bg-gray-900">
                                    {/* Liens GitHub */}
                                    <div className="flex gap-2">
                                        {p.github.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                                            >
                                                <FaGithub className="text-white text-lg" />
                                            </a>
                                        ))}
                                    </div>


                                    <button
                                        onClick={() =>
                                            setPlayingProject(playingProject === p.id ? null : p.id)
                                        }
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
                                    >
                                        <FaPlay />
                                        {playingProject === p.id ? "Stop" : "Watch"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="contact" className="py-10 border-t border-gray-700">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-xl" />
                        <a
                            href="mailto:yazidkhoualdi5@gmail.com"
                            className="underline hover:text-purple-500 transition"
                            aria-label="Send email"
                        >
                            yazidkhoualdi5@gmail.com
                        </a>
                    </div>

                    {/* Phones */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-2">
                            <FaPhone />
                            <a href="tel:+213774392043" aria-label="Call +213774392043">
                                +213774392043
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone />
                            <a href="tel:+213557149150" aria-label="Call +213557149150">
                                +213557149150
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/yazid-khoualdi-5a4338370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-2xl hover:text-blue-500 transition"
                        >
                            <FaLinkedin />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/yazid.kh.927"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="text-2xl hover:text-blue-500 transition"
                        >
                            <FaFacebook />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/zizou_k25?igsh=Y3N3bmM5OTdiaHU1"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="text-2xl hover:text-pink-500 transition"
                        >
                            <FaInstagram />
                        </a>

                       
                        <a
                            href="https://wa.me/213774392043"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            className="text-2xl hover:text-green-500 transition"
                        >
                            <FaWhatsapp />
                        </a>

                     
                        <a
                            href="https://github.com/yazidDz06"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-2xl hover:text-gray-600 transition"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="max-w-6xl mx-auto px-6 text-center mt-6 text-sm text-gray-500">
                    © {new Date().getFullYear()} Khoualdi Lyazid. All rights reserved.
                </div>
            </section>

        </div>
    );
}



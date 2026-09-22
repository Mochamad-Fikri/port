"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  tech: string[];
  color: string;
  size: string;
  light?: boolean;
  image: string | null;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Arcadia Studio",
    category: "Web Design",
    year: "2025",
    tech: ["Next.js", "Framer"],
    color: "#C8D5B9",
    size: "large",
    image: null,
  },
  {
    id: 2,
    title: "Lumea App",
    category: "UI/UX",
    year: "2025",
    tech: ["React", "Tailwind"],
    color: "#B8C4D4",
    size: "tall",
    image: null,
  },
  {
    id: 3,
    title: "Volta Dashboard",
    category: "Dashboard",
    year: "2024",
    tech: ["Next.js", "Recharts"],
    color: "#2C2C2C",
    size: "normal",
    light: false,
    image: null,
  },
  {
    id: 4,
    title: "Hiraya Brand",
    category: "Branding",
    year: "2024",
    tech: ["Figma", "GSAP"],
    color: "#D4BEB8",
    size: "wide",
    image: null,
  },
  {
    id: 5,
    title: "Celeste Blog",
    category: "Web Dev",
    year: "2024",
    tech: ["Astro", "MDX"],
    color: "#B8D4C8",
    size: "normal",
    image: null,
  },
  {
    id: 6,
    title: "Orin Commerce",
    category: "E-Commerce",
    year: "2023",
    tech: ["Next.js", "Stripe"],
    color: "#1A1A2E",
    size: "normal",
    light: false,
    image: null,
  },
  {
    id: 7,
    title: "Fauna Docs",
    category: "Documentation",
    year: "2023",
    tech: ["Docusaurus", "TS"],
    color: "#D4D0B8",
    size: "normal",
    image: null,
  },
];

const gridConfig: Record<number, string> = {
  1: "col-span-2 row-span-2",
  2: "col-span-1 row-span-2",
  3: "col-span-1 row-span-1",
  4: "col-span-2 row-span-1",
  5: "col-span-1 row-span-1",
  6: "col-span-1 row-span-1",
  7: "col-span-1 row-span-1",
};

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const isLight = project.light !== false;
  const textColor = isLight ? "#111110" : "#F8F8F7";
  const subColor = isLight ? "rgba(17,17,16,0.5)" : "rgba(248,248,247,0.5)";

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${gridConfig[project.id]}`}
      style={{ backgroundColor: project.color, borderRadius: "4px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? `rgba(0,0,0,${hovered ? 0.08 : 0})`
            : `rgba(0,0,0,${hovered ? 0.3 : 0})`,
          transition: "background 0.4s ease",
        }}
      />

      {!project.image && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, ${isLight ? "#000" : "#fff"} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      )}

      <div
        className="absolute top-4 left-5 text-xs tracking-widest select-none"
        style={{
          color: subColor,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {String(project.id).padStart(2, "0")}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 p-5"
        style={{
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          opacity: hovered ? 1 : 0,
          transition:
            "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
        }}
      >
        <div className="flex items-end justify-between">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: subColor }}
            >
              {project.category} · {project.year}
            </p>
            <h3
              className="font-semibold leading-tight"
              style={{
                color: textColor,
                fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex gap-1 flex-wrap justify-end ml-3">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: isLight
                    ? "rgba(17,17,16,0.1)"
                    : "rgba(248,248,247,0.15)",
                  color: textColor,
                  backdropFilter: "blur(4px)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute top-4 right-5"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translate(0, 0)" : "translate(-4px, 4px)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 14L14 4M14 4H6M14 4V12"
            stroke={textColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen w-full relative"
        style={{
          backgroundColor: "#F8F8F7",
          fontFamily: "'Poppins', system-ui, sans-serif",
        }}
      >
        <div className="flex items-start min-h-screen">
          <div
            className="sticky top-0 h-screen flex flex-col justify-end pb-10 pl-10 pr-6 shrink-0 select-none"
            style={{ width: "38%" }}
          >
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: "rgba(17,17,16,0.4)" }}
            >
              Selected Works
            </p>
            <h1
              className="font-black leading-none"
              style={{
                fontSize: "clamp(4rem, 10vw, 8rem)",
                letterSpacing: "-0.04em",
                color: "#111110",
                lineHeight: 0.9,
              }}
            >
              works
            </h1>
            <p
              className="mt-5 text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(17,17,16,0.45)" }}
            >
              Proyek-proyek pilihan yang aku kerjakan — dari desain hingga
              development.
            </p>
            <p
              className="mt-8 text-xs tracking-widest"
              style={{ color: "rgba(17,17,16,0.3)" }}
            >
              {projects.length} projects
            </p>
          </div>

          <div
            className="flex-1 py-10 pr-10 pl-4"
            style={{ minHeight: "100vh" }}
          >
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                gridAutoRows: "220px",
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

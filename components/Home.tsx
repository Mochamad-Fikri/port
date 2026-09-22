"use client";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ backgroundColor: "#F8F8F7" }}
    >
      <div className="flex min-h-screen">
        {/* Left — sticky quote + large title at the bottom */}
        <div
          className="sticky top-0 h-screen flex flex-col justify-between py-10 pl-10 pr-6 shrink-0 select-none"
          style={{ width: "38%" }}
        >
          {/* Top quote */}
          <div>
            <span
              className="text-4xl font-serif leading-none"
              style={{ color: "rgba(17,17,16,0.2)" }}
            >
              &ldquo;
            </span>
            <p
              className="mt-1 text-lg font-medium leading-snug max-w-xs"
              style={{ color: "rgba(17,17,16,0.35)", letterSpacing: "-0.01em" }}
            >
              Minimal design, enhanced by details and materials
            </p>
            <p
              className="mt-3 text-xs font-mono tracking-widest uppercase"
              style={{ color: "rgba(17,17,16,0.25)" }}
            >
              Mochamad Fikri
            </p>
          </div>

          {/* Large title at the bottom */}
          <h1
            className="font-black leading-none"
            style={{
              fontSize: "clamp(4.5rem, 10vw, 8.5rem)",
              letterSpacing: "-0.04em",
              color: "#111110",
              lineHeight: 0.88,
            }}
          >
            about
          </h1>
        </div>

        {/* Right — scrollable content */}
        <div
          className="flex-1 py-14 pr-16 pl-8"
          style={{ borderLeft: "1px solid rgba(17,17,16,0.08)" }}
        >
          {/* Headline */}
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              letterSpacing: "-0.03em",
              color: "#111110",
              maxWidth: "520px",
            }}
          >
            Fullstack Developer based in Bandung, focused on crafting clean and
            meaningful web experiences .
          </h2>

          {/* Bio */}
          <p
            className="text-sm leading-relaxed mb-4 max-w-lg"
            style={{ color: "rgba(17,17,16,0.6)" }}
          >
            I believe great products are built with simplicity and purpose .
          </p>

          <p
            className="text-sm leading-relaxed mb-4 max-w-lg"
            style={{ color: "rgba(17,17,16,0.6)" }}
          >
            As a Fullstack Developer, I build web applications across the stack
            — from intuitive interfaces to reliable backend systems — with a
            focus on performance, scalability, and clean code .
          </p>

          <p
            className="text-sm leading-relaxed mb-12 max-w-lg"
            style={{ color: "rgba(17,17,16,0.6)" }}
          >
            Currently open to freelance projects and collaborations with
            startups, design studios, and personal brands .
          </p>

          {/* Photo */}
          <div
            className="mb-14 overflow-hidden"
            style={{
              maxWidth: "460px",
              aspectRatio: "4/5",
              borderRadius: "4px",
              background: "#E8E7E4",
            }}
          >
            {/* Replace src with your own photo */}
            {/* <img src="/images/photo.jpg" alt="Photo" className="w-full h-full object-cover" /> */}
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ color: "rgba(17,17,16,0.2)" }}
            >
              <div className="text-center">
                <div className="text-5xl mb-2">☻</div>
                <p className="text-xs font-mono tracking-widest uppercase">
                  Your Photo
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <section className="mb-14 max-w-lg">
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-8 font-mono"
              style={{ color: "rgba(17,17,16,0.35)" }}
            >
              Work Experience
            </h3>

            {[
              {
                company: "PT Digital Impact Nusantara",
                role: "Fullstack Developer",
                period: "2025 — Present",
                desc: "Developed end-to-end web solutions for clients across various industries, from responsive frontends to backend systems and integrations, using Next.js, Tailwind CSS, and modern web technologies .",
              },
              {
                company: "PT Jasamarga Toll Road Operator",
                role: "Customer Service Officer & Central Communication",
                period: "2023 — 2025",
                desc: "Assisted toll road customers, monitored transactions, and handled payment and shift reporting & Monitored toll road operations, coordinated patrols, and managed traffic and incident reporting .",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="mb-8 pb-8"
                style={{ borderBottom: "1px solid rgba(17,17,16,0.08)" }}
              >
                <div className="flex items-start justify-between mb-1">
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#111110" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="text-xs font-mono"
                    style={{ color: "rgba(17,17,16,0.35)" }}
                  >
                    {exp.period}
                  </p>
                </div>
                <p
                  className="text-xs font-mono mb-3"
                  style={{ color: "rgba(17,17,16,0.4)" }}
                >
                  {exp.role}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(17,17,16,0.55)" }}
                >
                  {exp.desc}
                </p>
              </div>
            ))}
          </section>

          {/* Skills — grouped by Frontend / Backend / CMS & Tools */}
          <section className="mb-14 max-w-lg">
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-8 font-mono"
              style={{ color: "rgba(17,17,16,0.35)" }}
            >
              Skills & Tools
            </h3>

            {[
              {
                label: "Frontend",
                items: [
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer",
                  "GSAP",
                ],
              },
              {
                label: "Backend",
                items: ["Node.js", "Express.js", "MongoDB", "Supabase"],
              },
              {
                label: "CMS & Tools",
                items: ["Wordpress", "Figma", "Git", "Docker", "Vercel"],
              },
            ].map((group) => (
              <div key={group.label} className="mb-6 last:mb-0">
                <p
                  className="text-xs font-mono tracking-widest uppercase mb-3"
                  style={{ color: "rgba(17,17,16,0.3)" }}
                >
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full font-mono"
                      style={{
                        background: "rgba(17,17,16,0.06)",
                        color: "rgba(17,17,16,0.6)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-16 max-w-lg">
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-8 font-mono"
              style={{ color: "rgba(17,17,16,0.35)" }}
            >
              Education
            </h3>
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: "#111110" }}
                >
                  Universitas Komputer Indonesia
                </p>
                <p
                  className="text-xs font-mono"
                  style={{ color: "rgba(17,17,16,0.4)" }}
                >
                  Informatics Engineering / Computer Science & Engineering
                </p>
              </div>
              <p
                className="text-xs font-mono"
                style={{ color: "rgba(17,17,16,0.35)" }}
              >
                2018 — 2022
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

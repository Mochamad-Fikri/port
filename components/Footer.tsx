"use client";
export default function Footer() {
  return (
    <div className="flex gap-6 pb-10">
      {["Instagram", "LinkedIn", "GitHub"].map((link) => (
        <a
          key={link}
          href="#"
          className="text-xs font-mono tracking-widest uppercase"
          style={{
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#111110")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(17,17,16,0.35)")
          }
        >
          {link}
        </a>
      ))}
    </div>
  );
}

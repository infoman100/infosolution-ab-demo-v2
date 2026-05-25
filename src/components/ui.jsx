import React from "react";

export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button({ children, active, variant = "default", className = "", ...props }) {
  const variants = {
    default: active
      ? "bg-[var(--theme-primary)] text-white"
      : "border border-[var(--theme-line)] bg-[var(--card-bg)] text-[var(--text-main)] hover:bg-[var(--card-soft)]",
    dark: active
      ? "bg-[var(--text-main)] text-[var(--page-bg)]"
      : "border border-[var(--theme-line)] bg-[var(--card-bg)] text-[var(--text-main)] hover:bg-[var(--card-soft)]",
    primary:
      "bg-[var(--theme-primary)] text-white hover:brightness-95",
    cyan:
      "bg-[var(--theme-accent)] text-slate-950 hover:brightness-105",
    outlineDark:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    ghost:
      "text-[var(--text-muted)] hover:bg-[var(--card-soft)] hover:text-[var(--text-main)]",
  };

  return (
    <button
      className={cx(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-black transition",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({ children, className = "" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-black",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={cx(
        "rounded-[1.6rem] border border-[var(--theme-line)] bg-[var(--card-bg)] shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, desc, align = "center", dark = false }) {
  return (
    <div className={cx("mb-10", align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-5xl")}>
      <p
        className={cx(
          "mb-3 text-xs font-black uppercase tracking-[0.25em]",
          dark ? "text-cyan-300" : "text-[var(--theme-primary)]"
        )}
      >
        {eyebrow}
      </p>

      <h2
        className={cx(
          "text-3xl font-black tracking-tight md:text-5xl",
          dark ? "text-white" : "text-[var(--text-main)]"
        )}
      >
        {title}
      </h2>

      {desc && (
        <p
          className={cx(
            "mt-5 text-base leading-8 md:text-lg",
            dark ? "text-slate-300" : "text-[var(--text-muted)]"
          )}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
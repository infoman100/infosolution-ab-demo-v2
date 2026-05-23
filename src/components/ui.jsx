import React from "react";

export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button({ children, active, variant = "default", className = "", ...props }) {
  const variants = {
    default: active
      ? "bg-blue-600 text-white"
      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 dark:bg-white/10 dark:text-slate-200 dark:border-white/10 dark:hover:bg-white/20",
    dark: active
      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 dark:bg-white/10 dark:text-slate-200 dark:border-white/10",
    primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400",
    cyan: "bg-cyan-300 text-slate-950 hover:bg-cyan-200",
    outlineDark: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
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
    <span className={cx("inline-flex items-center rounded-full px-3 py-1 text-xs font-black", className)}>
      {children}
    </span>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={cx(
      "rounded-[1.6rem] border border-slate-200 bg-white shadow-sm",
      "dark:border-white/10 dark:bg-slate-900",
      className
    )}>
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, desc, align = "center", dark = false }) {
  return (
    <div className={cx("mb-10", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <p className={cx(
        "mb-3 text-xs font-black uppercase tracking-[0.25em]",
        dark ? "text-cyan-300" : "text-blue-600 dark:text-cyan-300"
      )}>
        {eyebrow}
      </p>
      <h2 className={cx(
        "text-3xl font-black tracking-tight md:text-5xl",
        dark ? "text-white" : "text-slate-950 dark:text-white"
      )}>
        {title}
      </h2>
      {desc && (
        <p className={cx(
          "mt-5 text-base leading-8 md:text-lg",
          dark ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
        )}>
          {desc}
        </p>
      )}
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { Sun, Moon, Monitor, Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { cx } from "./components/ui.jsx";
import { company, solutionDetails, csrRows } from "./data/demoData.js";
import {
  BHome, BCompany, BBusiness, BSolutions, BSolutionDetail,
  BInfoPlus, BCsrList, BCsrCreate, BCsrDetail,
} from "./variants/B";

// ── 테마 훅 ──────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const apply = (isDark) => {
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
    };

    if (theme === "dark") {
      apply(true);
    } else if (theme === "light") {
      apply(false);
    } else {
      // system
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      apply(mq.matches);
      const handler = (e) => apply(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

// ── 테마 토글 버튼 ────────────────────────────────────
function ThemeToggle({ theme, setTheme }) {
  const options = [
    { key: "light", icon: Sun,     label: "라이트" },
    { key: "dark",  icon: Moon,    label: "다크"   },
    { key: "system",icon: Monitor, label: "시스템" },
  ];
  return (
    <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/10">
      {options.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          title={label}
          className={cx(
            "flex h-7 w-7 items-center justify-center rounded-lg transition",
            theme === key
              ? "bg-white text-blue-600 shadow-sm dark:bg-slate-800 dark:text-cyan-300"
              : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}

// ── 헤더 ─────────────────────────────────────────────
function Header({ setPage, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "회사소개",  page: "company"   },
    { label: "솔루션",    page: "solutions"  },
    { label: "고객지원",  page: "infoplus"  },
    { label: "기술지원",  page: "csrCustomer"},
    { label: "인재채용",  page: null         },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* 로고 */}
        <button
          onClick={() => setPage("home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white">
            IS
          </div>
          <div className="text-left">
            <div className="text-sm font-black leading-none text-slate-900 dark:text-white">
              INFO SOLUTION
            </div>
            <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              Manufacturing IT Partner
            </div>
          </div>
        </button>

        {/* 데스크톱 nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => page && setPage(page)}
              className="text-sm font-black text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* 우측: 테마 토글 + 모바일 메뉴 */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            className="md:hidden text-slate-600 dark:text-slate-300"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950 md:hidden">
          {nav.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => { page && setPage(page); setOpen(false); }}
              className="block w-full rounded-xl px-3 py-3 text-left text-sm font-black text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ── 푸터 ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-6 text-sm text-slate-500 dark:text-slate-400 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-lg font-black text-slate-900 dark:text-white">INFO SOLUTION</p>
          <p className="mt-3">주소: {company.address}</p>
          <p className="mt-1">대표전화: {company.phone} | FAX: {company.fax} | 대표메일: {company.email}</p>
        </div>
        <div className="grid gap-2 md:text-right">
          <p className="flex items-center gap-2 md:justify-end">
            <MapPin className="h-4 w-4" /> 4호선 안산역 2번 출구 도보 5분
          </p>
          <p className="flex items-center gap-2 md:justify-end">
            <Phone className="h-4 w-4" /> {company.phone}
          </p>
          <p className="flex items-center gap-2 md:justify-end">
            <Mail className="h-4 w-4" /> {company.email}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useTheme();
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <Header setPage={setPage} theme={theme} setTheme={setTheme} />
      <main>
        {page === "home"        && <BHome setPage={setPage} />}
        {page === "company"     && <BCompany />}
        {page === "business"    && <BBusiness setPage={setPage} />}
        {page === "solutions"   && <BSolutions setPage={setPage} />}
        {page === "mes"         && <BSolutionDetail detail={solutionDetails.mes} />}
        {page === "mobile"      && <BSolutionDetail detail={solutionDetails.mobile} />}
        {page === "erp"         && <BSolutionDetail detail={solutionDetails.erp} />}
        {page === "infoplus"    && <BInfoPlus setPage={setPage} />}
        {page === "csrCustomer" && <BCsrList role="customer" setPage={setPage} />}
        {page === "csrAdmin"    && <BCsrList role="admin"    setPage={setPage} />}
        {page === "csrCreate"   && <BCsrCreate setPage={setPage} />}
        {page === "csrDetail"   && <BCsrDetail row={csrRows[2]} />}
      </main>
      <Footer />
    </div>
  );
}
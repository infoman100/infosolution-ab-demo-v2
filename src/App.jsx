import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor, Menu, X, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { cx } from "./components/ui.jsx";
import { company, solutionDetails, csrRows } from "./data/demoData.js";
import {
  BHome, BCompany, BBusiness, BSolutions, BSolutionDetail,
  BInfoPlus, BCsrList, BCsrCreate, BCsrDetail,
  BHistory, BReferences, BContact,
  BNotice, BResources, BRemoteSupport,
  BLocation, BRecruitInfo, BRecruitPosts,
} from "./variants/B";

// ── 테마 훅 ──────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");
  useEffect(() => {
    const root = document.documentElement;
    const apply = (isDark) => isDark ? root.classList.add("dark") : root.classList.remove("dark");
    if (theme === "dark") { apply(true); }
    else if (theme === "light") { apply(false); }
    else {
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

// ── 테마 토글 ─────────────────────────────────────────
function ThemeToggle({ theme, setTheme }) {
  const options = [
    { key: "light", icon: Sun,     label: "라이트" },
    { key: "dark",  icon: Moon,    label: "다크"   },
    { key: "system",icon: Monitor, label: "시스템" },
  ];
  return (
    <div className="flex items-center gap-0.5 rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/10">
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

function ThemeCompareSwitch({ designMode, setDesignMode, theme, setTheme, variant = "desktop" }) {
  const presets = [
    { label: "기존 Light", design: "classic", theme: "light" },
    { label: "기존 Dark", design: "classic", theme: "dark" },
    { label: "신규 Light", design: "modern", theme: "light" },
    { label: "신규 Dark", design: "modern", theme: "dark" },
  ];

  if (variant === "mobile") {
    return (
      <div className="mb-3 overflow-hidden rounded-2xl border border-[var(--theme-line)] bg-[var(--card-bg)]">
        <p className="border-b border-[var(--theme-line)] px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
          디자인 모드
        </p>
        <div className="grid grid-cols-2 gap-1 p-1">
          {presets.map((item) => {
            const active = designMode === item.design && theme === item.theme;
            return (
              <button
                key={item.label}
                onClick={() => { setDesignMode(item.design); setTheme(item.theme); }}
                className={cx(
                  "rounded-xl px-3 py-2.5 text-xs font-black transition",
                  active
                    ? "bg-[var(--theme-primary)] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:bg-[var(--card-soft)] hover:text-[var(--text-main)]"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden items-center gap-1 rounded-2xl border border-[var(--theme-line)] bg-[var(--card-bg)] p-1 shadow-sm xl:flex">
      {presets.map((item) => {
        const active = designMode === item.design && theme === item.theme;

        return (
          <button
            key={item.label}
            onClick={() => {
              setDesignMode(item.design);
              setTheme(item.theme);
            }}
            className={cx(
              "rounded-xl px-3 py-1.5 text-xs font-black transition",
              active
                ? "bg-[var(--theme-primary)] text-white shadow-sm"
                : "text-[var(--text-muted)] hover:bg-[var(--card-soft)] hover:text-[var(--text-main)]"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

// ── C-1 로고 SVG ─────────────────────────────────────
function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center">
      <svg width="160" height="36" viewBox="0 0 160 36" role="img">
        <title>인포솔루션 로고</title>
        <rect x="0" y="0" width="28" height="28" rx="5" fill="#1d4ed8"/>
        <rect x="10" y="10" width="28" height="28" rx="5" fill="#0ea5e9"/>
        <text x="14" y="27" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill="#ffffff" letterSpacing="0.5">IS</text>
        <text x="46" y="14" fontFamily="sans-serif" fontSize="10" fontWeight="500" fill="#1d4ed8" letterSpacing="2">INFO</text>
        <text x="46" y="30" fontFamily="sans-serif" fontSize="10" fontWeight="500" fill="#64748b" letterSpacing="1">SOLUTION</text>
      </svg>
    </button>
  );
}

function LogoDark({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center">
      <svg width="160" height="36" viewBox="0 0 160 36" role="img">
        <title>인포솔루션 로고</title>
        <rect x="0" y="0" width="28" height="28" rx="5" fill="#2563eb"/>
        <rect x="10" y="10" width="28" height="28" rx="5" fill="#38bdf8"/>
        <text x="14" y="27" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill="#ffffff" letterSpacing="0.5">IS</text>
        <text x="46" y="14" fontFamily="sans-serif" fontSize="10" fontWeight="500" fill="#38bdf8" letterSpacing="2">INFO</text>
        <text x="46" y="30" fontFamily="sans-serif" fontSize="10" fontWeight="500" fill="rgba(255,255,255,0.5)" letterSpacing="1">SOLUTION</text>
      </svg>
    </button>
  );
}

// ================================================================
// src/App.jsx 에서 Header 함수 전체를 아래로 교체하세요
// (useTheme, ThemeToggle, Logo, LogoDark, navItems, Footer, App 은 그대로 유지)
// ================================================================

// ── 메가 메뉴 데이터 ─────────────────────────────────
const megaMenuData = {
  솔루션: {
    type: "solutions",
    items: [
      {
        code: "ERP",
        label: "FLEX ERP",
        desc: "전사 경영정보 통합관리",
        page: "erp",
        color: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-cyan-300",
      },
      {
        code: "MES",
        label: "FLEX MES",
        desc: "제조 실행 시스템",
        page: "mes",
        color: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
      },
      {
        code: "PLM",
        label: "FLEX PLM",
        desc: "제품 정보 관리",
        page: "solutions",
        color: "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
      },
      {
        code: "WMS",
        label: "Mobile / WMS",
        desc: "창고·물류 관리",
        page: "mobile",
        color: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      },
      {
        code: "SCM",
        label: "삼성SCM",
        desc: "공급망 관리 시스템",
        page: "solutions",
        color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      },
    ],
  },
  고객지원: {
    type: "list",
    items: [
      { label: "고객문의",      desc: "도입·견적 문의",        page: "contact"    },
      { label: "구축사례",      desc: "30개 이상 구축 레퍼런스", page: "references" },
      { label: "INFOPLUS 포털", desc: "고객 전용 지원 포털",    page: "infoplus"   },
      { label: "공지사항",      desc: "주요 공지 및 업데이트",  page: "notice"     },
      { label: "자료실",        desc: "자료 다운로드",          page: "resources"  },
      { label: "원격지원",      desc: "원격 기술지원",          page: "remote"     },
    ],
  },
  회사소개: {
    type: "list",
    items: [
      { label: "회사개요", desc: "비전·미션·주요 연혁",  page: "company"  },
      { label: "회사연혁", desc: "2002년~현재까지",      page: "history"  },
      { label: "사업영역", desc: "5대 핵심 사업영역",    page: "business" },
      { label: "오시는길", desc: "안산 리드 스마트스퀘어", page: "location" },
    ],
  },
  인재채용: {
    type: "list",
    items: [
      { label: "채용안내", desc: "인재상·복리후생", page: "recruitInfo" },
      { label: "채용공고", desc: "진행 중인 채용",  page: "recruitPosts" },
    ],
  },
};

const topNavItems = ["솔루션", "고객지원", "회사소개", "인재채용"];

// ── 헤더 ─────────────────────────────────────────────
function Header({ setPage, theme, setTheme, designMode, setDesignMode }) {
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);
  const headerRef = React.useRef(null);
  const closeTimer = React.useRef(null);

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const goPage = (page) => {
    if (page) setPage(page);
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  // 헤더 영역 전체 mouseLeave 시 딜레이 후 닫기
  const handleHeaderLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const handleHeaderEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleNavClick = (item) => {
    setActiveMenu(activeMenu === item ? null : item);
  };

  const handleSubClick = (page) => {
    goPage(page);
  };

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--theme-line)] bg-[var(--card-bg)]/90 backdrop-blur-xl"
      onMouseLeave={handleHeaderLeave}
      onMouseEnter={handleHeaderEnter}
    >
      {/* 메인 헤더 바 */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* 로고 */}
        {isDark ? (
          <LogoDark onClick={() => goPage("home")} />
        ) : (
          <Logo onClick={() => goPage("home")} />
        )}

        {/* 데스크톱 nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          onMouseEnter={() => setActiveMenu("ALL")}
          onMouseLeave={() => {}}
        >
          {topNavItems.map((item) => {
            const isActive = activeMenu === "ALL";

            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                onMouseEnter={() => setActiveMenu("ALL")}
                className={cx(
                  "flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-bold transition",
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-white/10 dark:text-cyan-300"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-300"
                )}
              >
                {item}
                <svg
                  className={cx(
                    "h-3.5 w-3.5 opacity-50 transition-transform",
                    isActive && "rotate-180"
                  )}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            );
          })}
        </nav>

        {/* 우측 */}
        <div className="flex items-center gap-2">
          {/* PC INFOPLUS 빠른 진입 버튼 */}
          <button
            onClick={() => goPage("infoplus")}
            className="hidden h-9 items-center rounded-xl bg-blue-600 px-4 text-sm font-black text-white shadow-sm transition hover:bg-blue-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300 md:inline-flex"
          >
            INFOPLUS
          </button>

          <ThemeCompareSwitch
            designMode={designMode}
            setDesignMode={setDesignMode}
            theme={theme}
            setTheme={setTheme}
          />

          <ThemeToggle theme={theme} setTheme={setTheme} />

          <button
            className="text-slate-600 dark:text-slate-300 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── 메가 메뉴 드롭다운 ── */}
       {/* ── 메가 메뉴 드롭다운 — 전체 컬럼 한번에 ── */}
      {activeMenu === "ALL" && (
        <div
          className="absolute left-0 right-0 top-full z-50 border-t border-slate-100 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950"
          onMouseEnter={handleHeaderEnter}
        >
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="grid grid-cols-4 gap-8">

              {/* 솔루션 컬럼 */}
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  솔루션
                </p>
                <div className="flex flex-col gap-1">
                  {megaMenuData["솔루션"].items.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleSubClick(item.page)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-50 dark:hover:bg-white/5"
                    >
                      <span className={cx(
                        "shrink-0 rounded-lg px-2 py-0.5 text-xs font-black",
                        item.color
                      )}>
                        {item.code}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-white">{item.label}</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleSubClick("solutions")}
                  className="mt-3 px-3 text-xs font-bold text-blue-600 hover:underline dark:text-cyan-300"
                >
                  전체 솔루션 보기 →
                </button>
              </div>

              {/* 고객지원 컬럼 */}
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  고객지원
                </p>
                <div className="flex flex-col gap-1">
                  {megaMenuData["고객지원"].items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSubClick(item.page)}
                      className={cx(
                        "flex flex-col rounded-xl px-3 py-2.5 text-left transition",
                        item.page
                          ? "hover:bg-slate-50 dark:hover:bg-white/5"
                          : "cursor-not-allowed opacity-40"
                      )}
                    >
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{item.label}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 회사소개 컬럼 */}
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  회사소개
                </p>
                <div className="flex flex-col gap-1">
                  {megaMenuData["회사소개"].items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSubClick(item.page)}
                      className={cx(
                        "flex flex-col rounded-xl px-3 py-2.5 text-left transition",
                        item.page
                          ? "hover:bg-slate-50 dark:hover:bg-white/5"
                          : "cursor-not-allowed opacity-40"
                      )}
                    >
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{item.label}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 인재채용 컬럼 */}
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  인재채용
                </p>
                <div className="flex flex-col gap-1">
                  {megaMenuData["인재채용"].items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSubClick(item.page)}
                      className={cx(
                        "flex flex-col rounded-xl px-3 py-2.5 text-left transition",
                        item.page
                          ? "hover:bg-slate-50 dark:hover:bg-white/5"
                          : "cursor-not-allowed opacity-40"
                      )}
                    >
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{item.label}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── 모바일 메뉴 ── */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 md:hidden">
          <div className="max-h-[70vh] overflow-y-auto px-4 py-3">
            {/* 모바일 INFOPLUS 빠른 진입 */}
            <button
              onClick={() => goPage("infoplus")}
              className="mb-3 flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-black text-white shadow-sm dark:bg-cyan-400 dark:text-slate-950"
            >
              INFOPLUS 포털 바로가기
            </button>
            
            {/* 모바일 디자인 모드 전환 */}
            <ThemeCompareSwitch
              designMode={designMode}
              setDesignMode={setDesignMode}
              theme={theme}
              setTheme={setTheme}
              variant="mobile"
            />


            {topNavItems.map((item) => {
              const isExpanded = mobileExpanded === item;

              return (
                <div
                  key={item}
                  className="border-b border-slate-100 last:border-none dark:border-white/5"
                >
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : item)}
                    className="flex w-full items-center justify-between px-2 py-3 text-sm font-bold text-slate-700 dark:text-slate-300"
                  >
                    {item}
                    <svg
                      className={cx(
                        "h-4 w-4 opacity-40 transition-transform",
                        isExpanded && "rotate-180"
                      )}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {isExpanded && megaMenuData[item] && (
                    <div className="mb-3 ml-3 space-y-1 border-l border-slate-100 pl-4 dark:border-white/10">
                      {megaMenuData[item].items.map((sub) => (
                        <button
                          key={sub.label || sub.code}
                          onClick={() => handleSubClick(sub.page)}
                          className={cx(
                            "block w-full rounded-xl px-3 py-2 text-left text-sm transition",
                            sub.page
                              ? "text-slate-600 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-cyan-300"
                              : "cursor-not-allowed text-slate-400 opacity-50 dark:text-slate-600"
                          )}
                        >
                          <span className="font-bold">{sub.label || sub.code}</span>
                          <span className="ml-2 text-xs text-slate-400">{sub.desc}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

// ── 푸터 ─────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr_1fr_1fr]">
          {/* 로고 + 회사정보 */}
          <div className="md:col-span-2">
            <svg width="140" height="32" viewBox="0 0 140 32" role="img">
              <title>인포솔루션</title>
              <rect x="0" y="0" width="22" height="22" rx="3.5" fill="#1d4ed8"/>
              <rect x="8" y="8" width="22" height="22" rx="3.5" fill="#0ea5e9"/>
              <text x="11" y="21" fontFamily="sans-serif" fontSize="9" fontWeight="500" fill="#fff">IS</text>
              <text x="36" y="20" fontFamily="sans-serif" fontSize="12" fontWeight="500" fill="#0f172a" className="dark:fill-white" letterSpacing="0.5">INFOSOLUTION</text>
            </svg>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
              현장을 이해하고 운영까지 책임지는 IT 파트너.<br />
              제조업에 특화된 ERP, MES, WMS, CMMS 솔루션을 제공합니다.
            </p>
            <div className="mt-4 space-y-1 text-xs text-slate-400 dark:text-slate-500">
              <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{company.address}</p>
              <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{company.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" />{company.email}</p>
            </div>
          </div>

          {/* 솔루션 */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">솔루션</p>
            {["ERP", "MES", "PLM", "Mobile / WMS", "삼성SCM"].map((s) => (
              <p key={s} className="py-1 text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300 cursor-pointer">{s}</p>
            ))}
          </div>

          {/* 회사 */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">회사</p>
            {[
              { label: "회사소개", page: "company" },
              { label: "회사연혁", page: "history" },
              { label: "구축사례", page: "references" },
              { label: "고객문의", page: "contact" },
              { label: "INFOPLUS", page: "infoplus" },
            ].map(({ label, page }) => (
              <p key={label} onClick={() => setPage(page)} className="cursor-pointer py-1 text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300">{label}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-white/5 dark:text-slate-600 sm:flex-row sm:justify-between">
          <p>© 2024 (주)인포솔루션. All rights reserved.</p>
          <p>사업자등록번호 134-86-43417 | 대표이사 신만재</p>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useTheme();
  const [designMode, setDesignMode] = useState(() => localStorage.getItem("designMode") || "classic");

  const getInitialPage = () => {
    if (typeof window === "undefined") return "home";

    const hashPage = window.location.hash.replace("#", "");
    return hashPage || window.history.state?.page || "home";
  };

  const resolvedTheme =
    theme === "dark"
      ? "dark"
      : theme === "light"
        ? "light"
        : typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

  useEffect(() => {
    localStorage.setItem("designMode", designMode);
  }, [designMode])

  const [page, setPageState] = useState(getInitialPage);
  const pageRef = useRef(page);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  // 페이지 이동 함수: 화면 전환 + 브라우저 히스토리 기록
  const setPage = React.useCallback((nextPage) => {
    if (!nextPage) return;

    if (pageRef.current === nextPage) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    window.history.pushState({ page: nextPage }, "", `#${nextPage}`);
    setPageState(nextPage);
  }, []);

  // 최초 진입 및 뒤로가기/앞으로가기 처리
  useEffect(() => {
    const initialPage = getInitialPage();

    if (!window.history.state?.page) {
      window.history.replaceState({ page: initialPage }, "", `#${initialPage}`);
    }

    const handlePopState = (event) => {
      const nextPage = event.state?.page || window.location.hash.replace("#", "") || "home";
      setPageState(nextPage);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 페이지 변경 시 항상 최상단으로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [page]);

  return (
    <div
      data-design={designMode}
      data-theme={resolvedTheme}
      className="theme-root min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text-main)] transition-colors duration-300"
    >
      <Header
        setPage={setPage}
        theme={theme}
        setTheme={setTheme}
        designMode={designMode}
        setDesignMode={setDesignMode}
      />

    <main className="pt-[72px]">
      {page === "home"        && <BHome setPage={setPage} />}
      {page === "company"     && <BCompany />}
      {page === "history"     && <BHistory />}
      {page === "business"    && <BBusiness setPage={setPage} />}
      {page === "location"    && <BLocation />}
      {page === "solutions"   && <BSolutions setPage={setPage} />}
      {page === "mes"         && <BSolutionDetail detail={solutionDetails.mes} setPage={setPage} />}
      {page === "mobile"      && <BSolutionDetail detail={solutionDetails.mobile} setPage={setPage} />}
      {page === "erp"         && <BSolutionDetail detail={solutionDetails.erp} setPage={setPage} />}
      {page === "references"  && <BReferences />}
      {page === "contact"     && <BContact />}
      {page === "notice"      && <BNotice />}
      {page === "resources"   && <BResources />}
      {page === "remote"      && <BRemoteSupport />}
      {page === "recruitInfo" && <BRecruitInfo />}
      {page === "recruitPosts" && <BRecruitPosts />}
      {page === "infoplus"    && <BInfoPlus setPage={setPage} />}
      {page === "csrCustomer" && <BCsrList role="customer" setPage={setPage} />}
      {page === "csrAdmin"    && <BCsrList role="admin" setPage={setPage} />}
      {page === "csrCreate"   && <BCsrCreate setPage={setPage} />}
      {page === "csrDetail"   && <BCsrDetail row={csrRows[2]} setPage={setPage} />}
    </main>

    <Footer setPage={setPage} />
  </div>
  );
}
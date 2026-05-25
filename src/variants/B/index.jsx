import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, LayoutDashboard, Cpu, ShieldCheck, Building2, MapPin,
  Search, Download, CheckCircle2, Clock3,
  Plus, Send, Lock, AlertTriangle, MessageCircle, Sparkles,
  Check, Bold, Italic, Underline, List, ListOrdered, Code,
  Image, Paperclip, ChevronDown, ChevronUp, FileText, X,
} from "lucide-react";
import { Button, Badge, Card, SectionTitle, cx } from "../../components/ui.jsx";
import {
  company,
  mainSolutions,
  businessDomains,
  assets,
  landingSections,
  references,
  companyHistory,
  referenceMarquee,
  referenceCategories,
  csrRows,
  statusColor,
} from "../../data/demoData.js";

/// ─────────────────────────────────────────
// BHome
// ─────────────────────────────────────────
export function BHome({ setPage }) {
  return (
    <div className="overflow-hidden">
      {/* Hero — 항상 다크 */}
      <section className="relative bg-slate-950 px-4 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.45),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.25),transparent_24%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
              Manufacturing IT Partner
            </Badge>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              현장을 이해하고<br />운영까지 책임지는 IT 파트너
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              ERP 기준정보부터 MES 현장 실행, WMS 물류 흐름, INFOPLUS 운영지원까지
              제조 데이터를 하나의 흐름으로 연결합니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="cyan" className="h-12 px-6" onClick={() => setPage("business")}>
                사업영역 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outlineDark" className="h-12 px-6" onClick={() => setPage("contact")}>
                도입 문의하기
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
            <HeroManufacturingDashboard setPage={setPage} />
          </motion.div>
        </div>
      </section>

      <HomeValueCards setPage={setPage} />
      <HomeOperationFlow setPage={setPage} />
      <HomeFeaturedSolutions setPage={setPage} />
      <HomeTrustSection setPage={setPage} />
      <HomeCTA setPage={setPage} />
    </div>
  );
}

function HeroManufacturingDashboard({ setPage }) {
  const systems = [
    {
      code: "ERP",
      title: "기준정보",
      desc: "수불 · 원가 · 구매",
      color: "from-blue-500/20 to-blue-400/5",
      page: "erp",
    },
    {
      code: "MES",
      title: "현장실행",
      desc: "작업지시 · 실적 · 품질",
      color: "from-cyan-400/20 to-cyan-300/5",
      page: "mes",
    },
    {
      code: "WMS",
      title: "물류/재고",
      desc: "입출고 · LOT · 위치",
      color: "from-violet-400/20 to-violet-300/5",
      page: "mobile",
    },
    {
      code: "PLUS",
      title: "운영지원",
      desc: "CSR · SLA · 이력관리",
      color: "from-emerald-400/20 to-emerald-300/5",
      page: "infoplus",
    },
  ];

  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative rounded-[1.2rem] border border-white/10 bg-slate-900/90 p-5">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-black text-cyan-300">
              Manufacturing Command Center
            </p>
            <p className="mt-1 text-2xl font-black">Connected Operation</p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
            <Cpu className="h-7 w-7" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {systems.map((item) => (
            <button
              key={item.code}
              onClick={() => setPage && setPage(item.page)}
              className={cx(
                "group rounded-2xl border border-white/10 bg-gradient-to-br p-4 text-left transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10",
                item.color
              )}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-black text-cyan-200 ring-1 ring-white/10">
                  {item.code}
                </span>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              </div>

              <p className="text-lg font-black">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{item.desc}</p>

              <p className="mt-3 inline-flex items-center text-[11px] font-black text-cyan-300 opacity-0 transition group-hover:opacity-100">
                바로가기 <ArrowRight className="ml-1 h-3 w-3" />
              </p>
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-2 text-[11px] font-black text-slate-400">
            {["ERP", "MES", "WMS", "INFOPLUS"].map((step, idx) => (
              <React.Fragment key={step}>
                <span className={idx === 3 ? "text-cyan-300" : "text-slate-300"}>
                  {step}
                </span>
                {idx < 3 && <span className="h-px flex-1 bg-white/10" />}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-400">
            기준정보, 현장 실행, 물류 흐름, 운영지원까지 하나의 제조 데이터 흐름으로 연결합니다.
          </p>
        </div>
      </div>
    </Card>
  );
}

function HomeValueCards({ setPage }) {
  const pageMap = {
    회사소개: "company",
    솔루션: "solutions",
    고객지원: "infoplus",
    사업영역: "business",
  };

  return (
    <section className="theme-page px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="WHAT WE CONNECT"
          title="제조 현장과 경영을 연결하는 핵심 영역"
          desc="회사소개, 솔루션, 고객지원, 도입 프로세스를 하나의 흐름으로 정리합니다."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {landingSections.map((item, idx) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              onClick={() => setPage(pageMap[item.title] || "company")}
              className="group text-left"
            >
              <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:hover:border-cyan-400">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 dark:bg-slate-800">
                  <span className="text-sm font-black">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>
                <p className="mt-5 inline-flex items-center text-sm font-black text-blue-600 dark:text-cyan-300">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </p>
              </Card>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeOperationFlow({ setPage }) {
  const flow = [
    {
      code: "ERP",
      title: "기준정보와 경영 데이터",
      desc: "구매, 영업, 수불, 원가, 회계 정보를 표준 기준으로 통합합니다.",
      page: "erp",
    },
    {
      code: "MES",
      title: "현장 실행과 실적 수집",
      desc: "작업지시, 공정 진행, 실적, 품질, 설비 이벤트를 현장에서 연결합니다.",
      page: "mes",
    },
    {
      code: "WMS",
      title: "물류와 재고 흐름",
      desc: "입출고, 로케이션, LOT 이력, PDA 기반 현장 처리를 지원합니다.",
      page: "mobile",
    },
    {
      code: "PLUS",
      title: "운영지원과 고도화",
      desc: "INFOPLUS 포털을 통해 요청, 처리 이력, 운영 대응을 지속 관리합니다.",
      page: "infoplus",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,.3),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(6,182,212,.18),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          dark
          eyebrow="MANUFACTURING FLOW"
          title="ERP에서 현장, 물류, 운영지원까지 하나의 흐름으로"
          desc="제조기업의 핵심 데이터가 부서와 시스템을 넘어 이어지도록 설계합니다."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {flow.map((item, idx) => (
            <button key={item.code} onClick={() => setPage(item.page)} className="group text-left">
              <div className="relative h-full rounded-[1.6rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
                <div className="mb-6 flex items-center justify-between">
                  <Badge className="bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/20">
                    {item.code}
                  </Badge>
                  <span className="text-xs font-black text-slate-500">STEP {idx + 1}</span>
                </div>

                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.desc}</p>

                {idx < flow.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-300 text-slate-950 lg:flex">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFeaturedSolutions({ setPage }) {
  const featured = [
    {
      code: "MES",
      page: "mes",
      label: "제조 실행 시스템",
      title: "현장 실적과 품질 데이터를 실시간으로 연결",
      desc: "작업지시, 실적, 재공, 품질, 설비 이벤트를 수집하여 제조 현장의 가시성을 높입니다.",
      points: ["작업지시/실적", "LOT 추적", "품질 데이터"],
    },
    {
      code: "WMS",
      page: "mobile",
      label: "Mobile / WMS",
      title: "PDA와 바코드 기반의 물류·재고 처리",
      desc: "입출고, 위치, LOT, 재고 반영을 현장에서 바로 처리할 수 있도록 지원합니다.",
      points: ["PDA 스캔", "입출고 처리", "재고 반영"],
    },
    {
      code: "ERP",
      page: "erp",
      label: "통합 경영관리",
      title: "기준정보와 경영 데이터를 하나의 체계로 통합",
      desc: "영업, 구매, 생산, 수불, 원가, 회계 흐름을 제조 기준정보와 함께 연결합니다.",
      points: ["기준정보", "수불/원가", "경영정보"],
    },
  ];

  return (
    <section className="theme-page px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            align="left"
            eyebrow="CORE SOLUTIONS"
            title="우선순위가 높은 대표 솔루션"
            desc="홈에서는 핵심 3개 솔루션을 먼저 보여주고, 전체 솔루션은 별도 페이지에서 확인하도록 구성합니다."
          />

          <Button variant="primary" className="h-12 shrink-0 px-6" onClick={() => setPage("solutions")}>
            전체 솔루션 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((item, idx) => (
            <motion.button
              key={item.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setPage(item.page)}
              className="group text-left"
            >
              <Card className="h-full overflow-hidden p-7 transition hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl dark:hover:border-cyan-400">
                <div className="mb-7 flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-300">
                    {item.code}
                  </Badge>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 dark:bg-slate-800">
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </div>

                <p className="text-sm font-black text-blue-600 dark:text-cyan-300">{item.label}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeTrustSection({ setPage }) {
  const majorRefs = references.slice(0, 10);

  return (
    <section className="theme-section px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-300">
              REFERENCES
            </Badge>
            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">
              다양한 제조 산업에서 검증된 구축 경험
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              전자부품, 자동차, 화학, 의료기기, 유통 등 다양한 제조 산업에서
              ERP, MES, WMS 구축과 운영 고도화를 수행해 왔습니다.
            </p>

            <Button variant="primary" className="mt-8 h-12 px-6" onClick={() => setPage("references")}>
              구축사례 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4">
              {[
                ["30+", "구축 고객사"],
                ["17개국", "해외 사이트"],
                ["20+", "년 제조 IT 경험"],
              ].map(([num, label]) => (
                <Card key={label} className="p-5 text-center">
                  <p className="text-3xl font-black text-blue-600 dark:text-cyan-300">{num}</p>
                  <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">{label}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-5 p-5">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                Major Customers
              </p>
              <div className="flex flex-wrap gap-2">
                {majorRefs.map((ref) => (
                  <span
                    key={ref.id}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {ref.name}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCTA({ setPage }) {
  return (
    <section className="theme-page px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.35),transparent_32%),radial-gradient(circle_at_90%_0%,rgba(6,182,212,.25),transparent_28%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                START WITH INFO SOLUTION
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                제조 현장의 흐름을<br className="hidden md:block" /> 디지털로 연결하고 싶으신가요?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                도입 문의부터 구축, 오픈 안정화, 운영지원까지 인포솔루션이 함께합니다.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button variant="cyan" className="h-12 px-6" onClick={() => setPage("contact")}>
                고객문의 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outlineDark" className="h-12 px-6" onClick={() => setPage("infoplus")}>
                INFOPLUS 포털
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModernSolutionGrid({ setPage }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {mainSolutions.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.button
            key={item.code}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
            onClick={() => setPage(
              item.code === "MES" ? "mes" :
              item.code === "ERP" ? "erp" :
              item.code === "WMS" ? "mobile" : "solutions"
            )}
            className="group min-w-0 text-left"
          >
            <Card className="h-full overflow-hidden p-7 transition hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl dark:hover:border-cyan-400">
              <div className="mb-8 flex items-start justify-between">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-300">
                  {item.code}
                </Badge>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 dark:bg-slate-800">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────
// BCompany
// ─────────────────────────────────────────
export function BCompany() {
  return (
    <section className="theme-page overflow-hidden">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,.32),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(6,182,212,.24),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
              ABOUT INFO SOLUTION
            </Badge>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-6xl">
              {company.message}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              {company.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["제조 IT", "ERP/MES/WMS", "해외 구축", "오픈 안정화", "운영 고도화"].map((tag) => (
                <Badge key={tag} className="bg-white/10 text-white ring-1 ring-white/10">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <CompanyHeroPanel />
        </div>
      </div>

      <CompanyStrengthCards />
      <CompanyOperatingPrinciples />
      <CompanyInfoPanel />
      <CompanyCTA />
    </section>
  );
}

function CompanyHeroPanel() {
  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative rounded-[1.2rem] border border-white/10 bg-slate-900/90 p-5">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-black text-cyan-300">Company Profile</p>
            <p className="mt-1 text-2xl font-black">Manufacturing IT Specialist</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
            <Building2 className="h-7 w-7" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["2002", "제조 IT 사업 시작"],
            ["ERP/MES", "제조 특화 솔루션"],
            ["Global", "해외 법인 구축"],
            ["INFOPLUS", "운영지원 포털"],
          ].map(([num, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-cyan-200">{num}</p>
              <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Core Message
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            인포솔루션은 단순 시스템 개발을 넘어 제조 현장의 업무 흐름을 이해하고,
            구축 이후 운영 안정화와 지속 고도화까지 함께하는 제조 IT 파트너입니다.
          </p>
        </div>
      </div>
    </Card>
  );
}

function CompanyStrengthCards() {
  const strengths = [
    {
      title: "제조 현장 이해",
      desc: "작업지시, 실적, 재공, 품질, 물류, 설비 흐름까지 제조 현장의 실제 업무를 기준으로 시스템을 설계합니다.",
      tags: ["MES", "POP", "품질", "LOT"],
    },
    {
      title: "통합 솔루션 구축",
      desc: "ERP, MES, WMS, CMMS, MPS/MRP를 단일 업무 흐름으로 연결하여 경영과 현장 데이터를 통합합니다.",
      tags: ["ERP", "MES", "WMS", "CMMS"],
    },
    {
      title: "운영 안정화와 고도화",
      desc: "오픈 이후 사용자 교육, 장애 대응, CSR 처리, 업무 개선까지 장기 운영 관점에서 지원합니다.",
      tags: ["INFOPLUS", "CSR", "SLA", "운영지원"],
    },
  ];

  return (
    <section className="bg-white px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="OUR STRENGTH"
          title="제조기업의 업무 흐름을 이해하는 IT 파트너"
          desc="인포솔루션은 솔루션 기능만 제공하는 것이 아니라, 현장 운영 구조와 데이터 흐름을 함께 설계합니다."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {strengths.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full p-7 transition hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl dark:hover:border-cyan-400">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 dark:bg-slate-800">
                  <span className="text-sm font-black">{String(idx + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-900/30 dark:text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyOperatingPrinciples() {
  const principles = [
    ["진단", "AS-IS 업무와 데이터 흐름을 분석합니다."],
    ["설계", "표준 프로세스와 시스템 적용 범위를 정의합니다."],
    ["구축", "ERP, MES, WMS 등 핵심 시스템을 단계적으로 적용합니다."],
    ["안정화", "오픈 이후 사용자 교육과 장애 대응을 지원합니다."],
    ["고도화", "운영 데이터를 기반으로 개선 과제를 지속 발굴합니다."],
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,.3),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(6,182,212,.18),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          dark
          eyebrow="OPERATING PRINCIPLE"
          title="도입부터 운영 고도화까지 이어지는 수행 방식"
          desc="시스템 구축은 오픈이 끝이 아니라 운영 안정화와 지속 개선까지 이어져야 합니다."
        />

        <div className="grid gap-4 md:grid-cols-5">
          {principles.map(([title, desc], idx) => (
            <div key={title} className="relative">
              <div className="h-full rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-black text-cyan-300">STEP {idx + 1}</p>
                <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
              </div>

              {idx < principles.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-300 text-slate-950 md:flex">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyInfoPanel() {
  const info = [
    ["회사명", company.koreanName],
    ["대표이사", company.ceo],
    ["설립일", company.founded],
    ["주소", company.address],
    ["대표전화", company.phone],
    ["FAX", company.fax],
    ["E-mail", company.email],
  ];

  return (
    <section className="bg-slate-50 px-4 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-300">
              COMPANY INFO
            </Badge>
            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">
              인포솔루션 기본정보
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              제조업에 특화된 IT 솔루션 구축과 운영 경험을 기반으로 고객사의 업무 흐름을 이해하고,
              안정적인 시스템 운영을 지원합니다.
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="divide-y divide-slate-100 dark:divide-white/10">
              {info.map(([label, value]) => (
                <div key={label} className="grid gap-2 px-6 py-4 sm:grid-cols-[140px_1fr]">
                  <p className="text-sm font-black text-slate-400 dark:text-slate-500">{label}</p>
                  <p className="break-keep text-sm font-bold leading-7 text-slate-700 dark:text-slate-300">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CompanyCTA() {
  return (
    <section className="bg-white px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.35),transparent_32%),radial-gradient(circle_at_90%_0%,rgba(6,182,212,.25),transparent_28%)]" />

          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              INFO SOLUTION
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              제조 현장의 데이터 흐름을<br className="hidden md:block" /> 함께 설계합니다.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              인포솔루션은 제조기업의 업무 흐름을 이해하고, 구축부터 운영지원까지 이어지는 실행 중심의 IT 파트너입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BBusiness
// ─────────────────────────────────────────
export function BBusiness({ setPage }) {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="CONNECTED BUSINESS MAP"
          title="제조 데이터를 중심으로 연결되는 5대 사업영역"
          desc="사업영역을 플랫폼 맵 형태로 시각화합니다."
        />
        <div className="relative mx-auto h-[560px] max-w-[760px]">
          <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] bg-slate-950 text-center text-white shadow-2xl dark:bg-slate-800">
            <Cpu className="mb-3 h-9 w-9 text-cyan-300" />
            <p className="text-2xl font-black">Manufacturing<br />Data Hub</p>
          </div>
          <div className="absolute inset-20 rounded-full border border-dashed border-blue-200 dark:border-blue-800" />
          {businessDomains.map((item, idx) => {
            const positions = [["50%", "6%"], ["88%", "34%"], ["74%", "82%"], ["26%", "82%"], ["12%", "34%"]];
            return (
              <button
                key={item.code}
                onClick={() => setPage(
                  item.code === "MES" ? "mes" :
                  item.code === "ERP" ? "erp" :
                  item.code === "WMS" ? "mobile" : "solutions"
                )}
                style={{ left: positions[idx][0], top: positions[idx][1] }}
                className="absolute flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-xl transition hover:-translate-y-[56%] hover:border-cyan-300 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400"
              >
                <p className="text-2xl font-black text-blue-600 dark:text-cyan-300">{item.code}</p>
                <p className="mt-2 text-sm font-black text-slate-800 dark:text-slate-200">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BSolutions
// ─────────────────────────────────────────
export function BSolutions({ setPage }) {
  return (
    <section className="bg-slate-950 px-4 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <SectionTitle dark eyebrow="SOLUTIONS" title="제품처럼 보이는 솔루션" desc="솔루션을 독립 제품 컴포넌트처럼 보여줍니다." />
        <ModernSolutionGrid setPage={setPage} />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BSolutionDetail
// ─────────────────────────────────────────
export function BSolutionDetail({ detail, setPage }) {
  return (
    <section className="theme-page overflow-hidden">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,.35),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(6,182,212,.24),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
              {detail.code}
            </Badge>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-6xl">
              {detail.title}
            </h1>

            <p className="mt-4 text-xl font-black leading-8 text-cyan-200">
              {detail.subtitle}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {detail.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="cyan" className="h-12 px-6" onClick={() => setPage && setPage("contact")}>
                도입 문의하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outlineDark" className="h-12 px-6" onClick={() => setPage && setPage("solutions")}>
                전체 솔루션 보기
              </Button>
            </div>
          </div>

          <SolutionHeroPanel detail={detail} />
        </div>
      </div>

      {/* 문제 / 가치 */}
      <SolutionValueCards detail={detail} />

      {/* 핵심 기능 */}
      <SolutionFeatureCards detail={detail} />

      {/* 업무 흐름 */}
      <SolutionProcessFlow detail={detail} />

      {/* 실제 화면 / 도식 */}
      <div className="bg-white px-4 pb-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <ModernAssets detail={detail} />
        </div>
      </div>

      {/* CTA */}
      <SolutionBottomCTA detail={detail} setPage={setPage} />
    </section>
  );
}

function getSolutionMeta(detail) {
  const key = detail.assetType;

  const common = {
    mes: {
      problems: [
        "현장 실적이 수기로 관리되어 데이터 반영이 늦어집니다.",
        "LOT, 재공, 품질 이력이 여러 화면과 엑셀에 흩어집니다.",
        "설비·공정 이상 발생 시 원인 파악과 대응이 지연됩니다.",
      ],
      values: [
        "작업지시부터 실적, 재공, 품질 데이터를 실시간으로 연결합니다.",
        "LOT 추적성과 공정 가시성을 높여 현장 대응 속도를 개선합니다.",
        "표준 프로세스를 기반으로 현장 운영 데이터를 축적합니다.",
      ],
      features: [
        ["작업지시 관리", "생산 계획과 현장 작업을 연결하고 작업 진행 상태를 추적합니다."],
        ["실적 수집", "작업자, 설비, 바코드 데이터를 기반으로 실적을 즉시 반영합니다."],
        ["LOT 추적", "원자재부터 완제품까지 LOT 흐름과 이력을 추적합니다."],
        ["품질 연계", "검사 결과와 불량 정보를 공정 데이터와 함께 관리합니다."],
        ["설비 인터페이스", "PLC, 설비, 현장 단말과 연계하여 데이터를 자동 수집합니다."],
        ["현장 모니터링", "공정 진행, 재공, 이상 상황을 한눈에 확인합니다."],
      ],
      stats: [
        ["Real-time", "현장 데이터"],
        ["LOT", "추적성"],
        ["Quality", "품질 연계"],
      ],
    },
    mobile: {
      problems: [
        "입출고와 재고 반영이 수기 처리되어 실제 재고와 시스템 재고가 다릅니다.",
        "LOT와 위치 정보 확인에 시간이 오래 걸리고 오류가 발생하기 쉽습니다.",
        "현장 작업 후 ERP/WMS 반영까지 지연이 발생합니다.",
      ],
      values: [
        "PDA와 바코드 기반으로 현장 처리와 시스템 반영을 동시에 수행합니다.",
        "입출고, LOT, Location, 재고 이력을 현장에서 즉시 확인합니다.",
        "수기 입력을 줄여 물류 처리 속도와 재고 정확도를 개선합니다.",
      ],
      features: [
        ["바코드 스캔", "자재, 제품, LOT 정보를 PDA로 즉시 인식합니다."],
        ["입고 처리", "구매 입고와 생산 입고를 현장에서 바로 등록합니다."],
        ["출고 처리", "출하, 생산 투입, 이동 출고를 모바일로 처리합니다."],
        ["Location 관리", "창고 위치와 보관 상태를 실시간으로 확인합니다."],
        ["재고 실사", "현장 재고를 스캔 기반으로 점검하고 차이를 줄입니다."],
        ["ERP/WMS 연계", "처리 결과를 기준 시스템의 재고 정보와 연결합니다."],
      ],
      stats: [
        ["PDA", "현장 처리"],
        ["LOT", "이력 추적"],
        ["WMS", "재고 정확도"],
      ],
    },
    diagram: {
      problems: [
        "영업, 구매, 생산, 품질, 회계 데이터가 부서별로 분리되어 관리됩니다.",
        "수불, 원가, 재고 흐름을 한눈에 파악하기 어렵습니다.",
        "기준정보가 표준화되지 않아 업무 처리 기준이 흔들립니다.",
      ],
      values: [
        "제조 기준정보를 중심으로 영업, 구매, 생산, 회계 흐름을 통합합니다.",
        "수불, 원가, 재고, 경영정보를 연결해 의사결정 데이터를 확보합니다.",
        "표준 프로세스를 기반으로 업무 일관성과 관리 수준을 높입니다.",
      ],
      features: [
        ["기준정보 관리", "품목, 거래처, BOM, Routing 등 제조 기준정보를 표준화합니다."],
        ["영업 관리", "수주, 출하, 매출 흐름을 생산과 재고 데이터에 연결합니다."],
        ["구매 관리", "발주, 입고, 매입 흐름을 자재 수급과 연계합니다."],
        ["생산/품질 연계", "생산 실적과 품질 데이터를 ERP 기준으로 연결합니다."],
        ["수불/원가", "자재 이동, 재고, 원가 흐름을 통합 관리합니다."],
        ["경영정보", "업무 데이터를 집계하여 경영 의사결정 정보를 제공합니다."],
      ],
      stats: [
        ["Master", "기준정보"],
        ["Cost", "원가/수불"],
        ["BI", "경영정보"],
      ],
    },
  };

  return common[key] || common.mes;
}

function SolutionHeroPanel({ detail }) {
  const meta = getSolutionMeta(detail);

  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur">
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative rounded-[1.2rem] border border-white/10 bg-slate-900/90 p-5">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-black text-cyan-300">Solution Overview</p>
            <p className="mt-1 text-2xl font-black">{detail.code} Operation Map</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
            <Cpu className="h-7 w-7" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {meta.stats.map(([num, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xl font-black text-cyan-200">{num}</p>
              <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-2 text-[11px] font-black text-slate-400">
            {detail.flow.map((step, idx) => (
              <React.Fragment key={step}>
                <span className={idx === detail.flow.length - 1 ? "text-cyan-300" : "text-slate-300"}>
                  {step}
                </span>
                {idx < detail.flow.length - 1 && <span className="h-px flex-1 bg-white/10" />}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            업무 흐름을 단계별로 연결해 현장 데이터와 관리 데이터를 하나의 운영 체계로 정리합니다.
          </p>
        </div>
      </div>
    </Card>
  );
}

function SolutionValueCards({ detail }) {
  const meta = getSolutionMeta(detail);

  return (
    <section className="bg-slate-50 px-4 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="VALUE POINT"
          title="기존 업무의 복잡함을 표준 운영 흐름으로 전환"
          desc={`${detail.title} 도입을 통해 현장과 관리 업무의 연결성을 높입니다.`}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="p-7">
            <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              Before
            </Badge>
            <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
              도입 전 주요 문제
            </h3>
            <div className="mt-6 space-y-3">
              {meta.problems.map((text) => (
                <div key={text} className="flex gap-3 rounded-2xl bg-slate-0 p-3 dark:bg-slate-800">
                  <AlertTriangle className="mt-0.5 h-6 w-5 shrink-0 text-rose-500" />
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-7">
            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              After
            </Badge>
            <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
              적용 후 기대 효과
            </h3>
            <div className="mt-6 space-y-3">
              {meta.values.map((text) => (
                <div key={text} className="flex gap-3 rounded-2xl bg-slate-0 p-3 dark:bg-slate-800">
                  <CheckCircle2 className="mt-0.5 h-6 w-5 shrink-0 text-emerald-500" />
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SolutionFeatureCards({ detail }) {
  const meta = getSolutionMeta(detail);

  return (
    <section className="bg-white px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="KEY FEATURES"
          title={`${detail.code} 핵심 기능`}
          desc="실제 제조 운영에 필요한 기능을 업무 단위로 분리해 제공합니다."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {meta.features.map(([title, desc], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
            >
              <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:hover:border-cyan-400">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 dark:bg-slate-800">
                  <span className="text-sm font-black">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionProcessFlow({ detail }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,.3),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(6,182,212,.18),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          dark
          eyebrow="PROCESS FLOW"
          title="업무 흐름을 단계별로 연결합니다"
          desc="업무 단계가 분리되지 않도록 기준정보, 현장 처리, 이력 데이터를 하나의 흐름으로 설계합니다."
        />

        <div className="grid gap-4 md:grid-cols-5">
          {detail.flow.map((step, idx) => (
            <div key={step} className="relative">
              <div className="h-full rounded-[1.6rem] border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-xs font-black text-cyan-300">STEP {idx + 1}</p>
                <p className="mt-4 break-keep text-lg font-black leading-6 text-white">{step}</p>
              </div>

              {idx < detail.flow.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-300 text-slate-950 md:flex">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionBottomCTA({ detail, setPage }) {
  return (
    <section className="bg-slate-50 px-4 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.35),transparent_32%),radial-gradient(circle_at_90%_0%,rgba(6,182,212,.25),transparent_28%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                {detail.code} CONSULTING
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                {detail.title} 도입을 검토하고 계신가요?
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                현재 업무 흐름을 기준으로 필요한 기능, 구축 범위, 단계별 도입 방향을 함께 검토해 드립니다.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button variant="cyan" className="h-12 px-6" onClick={() => setPage && setPage("contact")}>
                고객문의 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outlineDark" className="h-12 px-6" onClick={() => setPage && setPage("references")}>
                구축사례 보기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModernAssets({ detail }) {
  if (detail.assetType === "mes") {
    return (
      <section className="mt-14">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">Real Product Screens</p>
            <h3 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">MES / POP 실제 운영 화면</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              실제 현장에서 사용하는 POP 화면을 갤러리 형태로 보여주어, 운영 가능한 제품이라는 신뢰감을 전달합니다.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-cyan-300">
            현장 작업 · 실적 등록 · 모니터링
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {assets.mesScreens.map((src, idx) => (
            <Card key={src} className="group overflow-hidden p-3 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <img src={src} alt={`MES POP 실제 화면 ${idx + 1}`} className="h-60 w-full object-contain transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="px-2 py-4">
                <p className="text-sm font-black text-blue-700 dark:text-cyan-300">POP Screen {idx + 1}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">작업지시, 실적, 현장 데이터 확인을 위한 실제 운영 화면 예시</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  if (detail.assetType === "mobile") {
    return (
      <section className="mt-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="overflow-hidden p-3 shadow-xl">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
              <img src={assets.mobilePda} alt="WMS PDA 실제 사용 이미지" className="h-[420px] w-full object-contain" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-950/85 p-4 text-white backdrop-blur">
                <p className="text-sm font-black text-cyan-300">WMS PDA Field Operation</p>
                <p className="mt-1 text-xs leading-5 text-slate-200">입출고, LOT 확인, 재고 반영을 현장에서 바로 처리하는 모바일 물류 환경</p>
              </div>
            </div>
          </Card>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">Mobile WMS Scenario</p>
            <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white md:text-4xl">
              PDA 스캔부터 재고 반영까지,<br />현장 작업 흐름을 모바일로 연결
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              실제 PDA 사용 이미지의 신뢰감을 유지하면서, 현장 처리 프로세스를 카드형 시나리오로 정리합니다.
            </p>
            <div className="mt-8 space-y-3">
              {[
                ["01", "바코드 스캔", "자재, 제품, LOT 정보를 PDA로 즉시 인식합니다."],
                ["02", "LOT / Location 확인", "입출고 대상과 보관 위치를 현장에서 확인합니다."],
                ["03", "입출고 처리", "수기 입력 없이 현장 단말에서 바로 처리합니다."],
                ["04", "재고 자동 반영", "처리 결과가 WMS/ERP 재고 정보에 연결됩니다."],
              ].map(([num, title, desc]) => (
                <div key={num} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-cyan-300 dark:bg-slate-800">{num}</div>
                  <div>
                    <p className="font-black text-slate-950 dark:text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-14">
      <Card className="overflow-hidden p-8 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">Diagram Redesign</p>
            <h3 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">기존 도식을 현대적인 프로세스 맵으로 재구성</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              기존의 복잡한 원형/화살표 도식은 핵심 개념 중심의 프로세스 카드로 단순화합니다.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {detail.flow.map((step, idx) => (
              <div key={step} className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-5 text-center dark:from-blue-950/50 dark:to-cyan-950/50">
                <p className="text-xs font-black text-blue-400 dark:text-cyan-400">STEP {idx + 1}</p>
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}

// ─────────────────────────────────────────
// BInfoPlus
// ─────────────────────────────────────────
export function BInfoPlus({ setPage }) {
  return (
    <section className="theme-page overflow-hidden">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,.35),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(6,182,212,.24),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
              INFOPLUS PORTAL
            </Badge>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-6xl">
              고객 요청부터 처리 이력까지<br />하나의 포털로 관리합니다
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              INFOPLUS는 고객 요청 등록, 담당자 처리, Reply 이력, 공수 관리, 검수/완료 흐름을
              하나의 고객지원 경험으로 연결하는 운영지원 포털입니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="cyan" className="h-12 px-6" onClick={() => setPage("csrCustomer")}>
                고객 포털 데모 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outlineDark" className="h-12 px-6" onClick={() => setPage("csrAdmin")}>
                관리자 콘솔 데모
              </Button>
            </div>
          </div>

          <InfoPlusLoginPanel setPage={setPage} />
        </div>
      </div>

      <InfoPlusFlow />
      <InfoPlusFeatureCards />
      <InfoPlusRolePreview setPage={setPage} />
    </section>
  );
}

function InfoPlusLoginPanel({ setPage }) {
  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative rounded-[1.2rem] border border-white/10 bg-slate-900/90 p-5">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-black text-cyan-300">INFOPLUS Access</p>
            <p className="mt-1 text-2xl font-black">Support Portal</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
            <ShieldCheck className="h-7 w-7" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <input
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              placeholder="아이디"
            />
            <input
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              placeholder="비밀번호"
              type="password"
            />
            <Button variant="cyan" className="h-12 w-full" onClick={() => setPage("csrCustomer")}>
              포털 접속
            </Button>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => setPage("csrCustomer")}
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-left transition hover:bg-cyan-300/15"
          >
            <p className="text-sm font-black text-cyan-200">Customer Demo</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              고객 요청 등록과 처리 현황 확인
            </p>
          </button>

          <button
            onClick={() => setPage("csrAdmin")}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
          >
            <p className="text-sm font-black text-white">Admin Demo</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              요청 배정, 처리, 공수 관리
            </p>
          </button>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          ※ 실제 운영 시 관리자 데모 버튼은 권한에 따라 노출 여부를 제어할 수 있습니다.
        </p>
      </div>
    </Card>
  );
}

function InfoPlusFlow() {
  const flow = [
    {
      title: "요청 등록",
      desc: "고객이 오류, 개선, 사용 문의를 등록하고 이미지와 첨부파일을 함께 남깁니다.",
    },
    {
      title: "담당자 확인",
      desc: "관리자가 요청 유형과 업무구분을 확인하고 담당자와 처리 정보를 지정합니다.",
    },
    {
      title: "처리 답변",
      desc: "담당자는 Reply를 통해 처리 의견, 조치 내용, 추가 확인사항을 누적합니다.",
    },
    {
      title: "검수 / 완료",
      desc: "고객 검수 이후 요청을 완료 처리하고 처리 이력과 공수를 관리합니다.",
    },
  ];

  return (
    <section className="bg-white px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="CSR WORKFLOW"
          title="요청 접수부터 완료까지 이어지는 처리 흐름"
          desc="요청이 등록된 이후 담당자 배정, 처리 답변, 검수, 완료까지의 상태를 한눈에 확인할 수 있습니다."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {flow.map((item, idx) => (
            <div key={item.title} className="relative">
              <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:hover:border-cyan-400">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 dark:bg-slate-800">
                    <span className="text-sm font-black">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="text-xs font-black text-slate-400">STEP {idx + 1}</span>
                </div>

                <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>
              </Card>

              {idx < flow.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white lg:flex dark:bg-cyan-400 dark:text-slate-950">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoPlusFeatureCards() {
  const features = [
    {
      title: "CSR 요청 등록",
      desc: "장애, 사용 문의, 개선 요청을 유형별로 등록하고 화면 캡처와 파일을 함께 관리합니다.",
      tags: ["요청유형", "첨부파일", "이미지"],
    },
    {
      title: "처리 현황 대시보드",
      desc: "접수대기, 처리중, 검수요청, 완료 상태를 지표와 목록으로 확인합니다.",
      tags: ["상태관리", "검색필터", "Excel"],
    },
    {
      title: "Reply 이력 관리",
      desc: "고객과 담당자의 대화, 처리 의견, 첨부 자료를 요청 단위로 누적합니다.",
      tags: ["대화이력", "처리의견", "첨부"],
    },
    {
      title: "공수 / SLA 관리",
      desc: "적용공수, 작업공수, 완료예정일, 담당자 변경 이력을 함께 관리합니다.",
      tags: ["M/D", "SLA", "담당자"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,.3),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(6,182,212,.18),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          dark
          eyebrow="PORTAL FEATURES"
          title="고객지원 운영에 필요한 핵심 기능"
          desc="고객 요청을 단순 게시판이 아니라 상태, 담당자, 이력, 공수 중심으로 관리합니다."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="h-full rounded-[1.6rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                  <span className="text-sm font-black">{String(idx + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-200 ring-1 ring-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoPlusRolePreview({ setPage }) {
  return (
    <section className="bg-slate-50 px-4 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="bg-slate-950 p-6 text-white">
              <Badge className="bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/20">
                CUSTOMER
              </Badge>
              <h3 className="mt-5 text-3xl font-black">고객 포털</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                고객은 요청 등록, 처리 현황 확인, Reply 추가, 검수 상태 확인을 중심으로 사용합니다.
              </p>
            </div>

            <div className="p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["요청 등록", "오류/문의/개선 요청 작성"],
                  ["현황 조회", "상태와 담당자 확인"],
                  ["Reply 추가", "추가 문의와 보완 내용 등록"],
                  ["검수 확인", "검수요청/완료 흐름 확인"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                    <p className="font-black text-slate-950 dark:text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>

              <Button variant="primary" className="mt-6 h-12 w-full" onClick={() => setPage("csrCustomer")}>
                고객 포털 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-slate-950 p-6 text-white">
              <Badge className="bg-white/10 text-white ring-1 ring-white/10">
                ADMIN
              </Badge>
              <h3 className="mt-5 text-3xl font-black">관리자 콘솔</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                담당자는 요청 배정, 상태 변경, 처리 의견, 공수와 완료예정일을 관리합니다.
              </p>
            </div>

            <div className="p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["요청 배정", "담당자와 협업자 관리"],
                  ["상태 변경", "접수/처리/검수/완료"],
                  ["처리 정보", "공수와 완료예정일 관리"],
                  ["이력 관리", "상태/담당자 변경 기록"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                    <p className="font-black text-slate-950 dark:text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>

              <Button variant="dark" className="mt-6 h-12 w-full" onClick={() => setPage("csrAdmin")}>
                관리자 콘솔 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BCsrList
// ─────────────────────────────────────────
export function BCsrList({ role, setPage }) {
  const isAdmin = role === "admin";

  const columns = isAdmin
    ? [
        "요청번호",
        "거래처",
        "제목",
        "요청구분",
        "업무구분",
        "상태",
        "우선순위",
        "요청일자",
        "요청자",
        "담당자",
        "공수(M/D)",
        "완료예정일",
        "완료일",
      ]
    : [
        "요청번호",
        "제목",
        "요청구분",
        "업무구분",
        "상태",
        "우선순위",
        "요청일자",
        "요청자",
        "담당자",
        "공수(M/D)",
        "완료예정일",
        "완료일",
      ];

  const customerMetrics = [
    {
      label: "잔여공수",
      value: "-0.3",
      desc: "계약 기준 잔여 M/D",
      tone: "danger",
    },
    {
      label: "접수대기",
      value: "0",
      desc: "아직 접수되지 않은 요청",
      tone: "neutral",
    },
    {
      label: "진행중",
      value: "17",
      desc: "처리중 또는 검수요청",
      tone: "primary",
    },
    {
      label: "완료",
      value: "62",
      desc: "처리 완료된 요청",
      tone: "success",
    },
  ];

  const adminMetrics = [
    {
      label: "미완료",
      value: "3420",
      desc: "완료 전 전체 요청",
      tone: "primary",
    },
    {
      label: "접수대기",
      value: "206",
      desc: "담당자 확인 필요",
      tone: "neutral",
    },
    {
      label: "처리중",
      value: "561",
      desc: "담당자 처리 진행",
      tone: "warning",
    },
    {
      label: "검수요청",
      value: "1984",
      desc: "고객 검수 대기",
      tone: "violet",
    },
  ];

  const metricTone = {
    primary: "border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-900/20 dark:text-blue-300",
    success: "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-900/20 dark:text-emerald-300",
    warning: "border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-400/20 dark:bg-amber-900/20 dark:text-amber-300",
    danger: "border-red-100 bg-red-50 text-red-700 dark:border-red-400/20 dark:bg-red-900/20 dark:text-red-300",
    violet: "border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-400/20 dark:bg-violet-900/20 dark:text-violet-300",
    neutral: "border-slate-100 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300",
  };

  const metrics = isAdmin ? adminMetrics : customerMetrics;

  return (
    <section className="w-full overflow-x-hidden bg-slate-50 px-3 py-10 dark:bg-slate-950 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={isAdmin ? "ADMIN CSR" : "CUSTOMER CSR"}
          title={isAdmin ? "CSR Command Center" : "고객 요청 현황"}
          desc={
            isAdmin
              ? "접수, 처리, 검수요청, 완료까지 고객 요청의 진행 상태와 담당자 정보를 한눈에 관리합니다."
              : "등록한 요청의 처리 상태, 담당자, 완료예정일, Reply 이력을 확인할 수 있습니다."
          }
        />

        {/* 상단 액션 박스 */}
        <div className="mb-6 overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
          <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-300">
                  {isAdmin ? "관리자 콘솔" : "고객 포털"}
                </Badge>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                  INFOPLUS CSR
                </span>
              </div>

              <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">
                {isAdmin ? "고객 요청을 체계적으로 관리하세요" : "새로운 요청을 등록하고 처리 현황을 확인하세요"}
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                {isAdmin
                  ? "고객 요청의 상태, 담당자, 공수, 완료예정일을 확인하고 정상 처리 흐름에 따라 관리할 수 있습니다."
                  : "오류, 사용 문의, 개선 요청을 등록하고 접수부터 완료까지의 진행 상황을 확인할 수 있습니다."}
              </p>
            </div>

            {!isAdmin && (
              <Button
                variant="primary"
                className="h-12 shrink-0 px-6"
                onClick={() => setPage("csrCreate")}
              >
                <Plus className="mr-2 h-4 w-4" />
                요청 등록
              </Button>
            )}
          </div>
        </div>

        {/* 지표 카드 */}
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((item) => (
            <Card key={item.label} className="overflow-hidden">
              <div className={cx("border-b px-5 py-4", metricTone[item.tone])}>
                <p className="text-sm font-black">{item.label}</p>
                <p className="mt-2 text-3xl font-black">{item.value}</p>
              </div>
              <div className="px-5 py-3">
                <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* 검색 필터 */}
        <Card className="mt-6 p-4">
          <div className="flex min-w-0 flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="grid min-w-0 gap-2 sm:grid-cols-[120px_1fr_1fr] xl:w-auto">
              <select className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-white">
                <option>요청일자</option>
                <option>완료예정일</option>
                <option>완료일</option>
              </select>

              <input
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-white"
                value="2025-05-22"
                readOnly
              />

              <input
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-white"
                value="2026-05-22"
                readOnly
              />
            </div>

            <div className="grid min-w-0 gap-2 sm:grid-cols-[1fr_auto_auto] xl:w-[520px]">
              <input
                className="h-11 min-w-0 rounded-2xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                placeholder={isAdmin ? "거래처, 제목, 요청번호, 담당자 검색" : "제목, 요청번호, 담당자 검색"}
              />

              <Button variant="primary" className="h-11 shrink-0">
                <Search className="mr-2 h-4 w-4" />
                검색
              </Button>

              <Button className="h-11 shrink-0">
                <Download className="mr-2 h-4 w-4" />
                Excel
              </Button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {["전체", "접수대기", "접수완료", "처리중", "검수요청", "완료", "보류", "취소"].map((status, idx) => (
              <button
                key={status}
                className={cx(
                  "rounded-full px-3 py-1.5 text-xs font-bold transition",
                  idx === 0
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-cyan-300"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </Card>

        {/* PC 테이블 */}
        <div className="mt-6 hidden overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow dark:border-white/10 dark:bg-slate-900 lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1180px] border-collapse text-sm">
              <thead className="bg-slate-50 text-xs font-black text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                <tr>
                  {columns.map((c) => (
                    <th
                      key={c}
                      className="border-b border-slate-200 px-3 py-4 text-left dark:border-white/10"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {csrRows.map((row) => {
                  const isOverMd = Number(row.md.apply) < Number(row.md.work);

                  return (
                    <tr
                      key={row.id}
                      onClick={() => setPage("csrDetail")}
                      className="cursor-pointer border-b border-slate-100 text-slate-700 transition hover:bg-blue-50 dark:border-white/5 dark:text-slate-300 dark:hover:bg-blue-950/30"
                    >
                      <td className="whitespace-nowrap px-3 py-4">
                        <span className="font-black text-slate-800 dark:text-slate-200">
                          {row.id}
                        </span>
                      </td>

                      {isAdmin && (
                        <td className="whitespace-nowrap px-3 py-4">
                          <span className="font-bold text-blue-600 dark:text-cyan-400">
                            {row.company}
                          </span>
                        </td>
                      )}

                      <td className="max-w-[320px] px-3 py-4">
                        <p className="line-clamp-2 font-black leading-6 text-blue-700 dark:text-cyan-300">
                          {row.title}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4">{row.type}</td>
                      <td className="whitespace-nowrap px-3 py-4">{row.work}</td>

                      <td className="whitespace-nowrap px-3 py-4">
                        <Badge className={statusColor[row.status] || "bg-slate-100 text-slate-600"}>
                          {row.status}
                        </Badge>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4">
                        <span
                          className={cx(
                            "rounded-full px-2.5 py-1 text-xs font-bold",
                            row.priority === "긴급"
                              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                              : row.priority === "상"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                          )}
                        >
                          {row.priority}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4">{row.requestDate}</td>
                      <td className="whitespace-nowrap px-3 py-4">{row.requester}</td>
                      <td className="whitespace-nowrap px-3 py-4 font-bold">{row.manager}</td>

                      <td className="whitespace-nowrap px-3 py-4">
                        <div className="flex items-center gap-1.5">
                          <span className={cx("font-black", isOverMd ? "text-red-500" : "text-slate-700 dark:text-slate-300")}>
                            {row.md.apply}
                          </span>
                          <span className="text-slate-400">/</span>
                          <span className="text-slate-500 dark:text-slate-400">{row.md.work}</span>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4">
                        <span className={row.due ? "font-bold text-slate-700 dark:text-slate-300" : "text-slate-400"}>
                          {row.due || "-"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4">
                        <span className={row.done ? "font-bold text-emerald-600 dark:text-emerald-300" : "text-slate-400"}>
                          {row.done || "-"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 모바일 카드 */}
        <div className="mt-6 grid min-w-0 gap-4 lg:hidden">
          {csrRows.map((row) => {
            const isOverMd = Number(row.md.apply) < Number(row.md.work);

            return (
              <button
                key={row.id}
                onClick={() => setPage("csrDetail")}
                className="min-w-0 text-left"
              >
                <Card className="min-w-0 overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-slate-800">
                    <div className="min-w-0">
                      <p className="truncate text-xs font-black text-slate-400 dark:text-slate-500">
                        {isAdmin ? `${row.company} · ` : ""}{row.id}
                      </p>
                      <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                        {row.requestDate} · {row.requester}
                      </p>
                    </div>

                    <Badge className={statusColor[row.status] || "bg-slate-100 text-slate-600"}>
                      {row.status}
                    </Badge>
                  </div>

                  <div className="p-5">
                    <p className="break-words text-lg font-black leading-6 text-blue-700 dark:text-cyan-300">
                      {row.title}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {row.type}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {row.work}
                      </span>
                      <span
                        className={cx(
                          "rounded-full px-3 py-1 text-xs font-bold",
                          row.priority === "긴급"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                            : row.priority === "상"
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        )}
                      >
                        {row.priority}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                        <p className="text-slate-400 dark:text-slate-500">담당자</p>
                        <p className="mt-1 font-black text-slate-700 dark:text-slate-300">
                          {row.manager}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                        <p className="text-slate-400 dark:text-slate-500">공수(M/D)</p>
                        <p className="mt-1 font-black">
                          <span className={isOverMd ? "text-red-500" : "text-slate-700 dark:text-slate-300"}>
                            {row.md.apply}
                          </span>
                          <span className="mx-1 text-slate-400">/</span>
                          <span className="text-slate-500 dark:text-slate-400">
                            {row.md.work}
                          </span>
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                        <p className="text-slate-400 dark:text-slate-500">완료예정일</p>
                        <p className="mt-1 font-black text-slate-700 dark:text-slate-300">
                          {row.due || "-"}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                        <p className="text-slate-400 dark:text-slate-500">완료일</p>
                        <p className="mt-1 font-black text-emerald-600 dark:text-emerald-300">
                          {row.done || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BCsrDetail — 카드형 스레드
// ─────────────────────────────────────────
// ================================================================
// src/variants/B/index.jsx 에서 BCsrDetail 함수 전체를 교체하세요
// ================================================================

// 상태 흐름 정의
const STATUS_FLOW = ["접수대기", "접수완료", "처리중", "검수요청", "완료"];
const STATUS_EXCEPTION = ["취소", "보류", "검수반려"];

const statusFlowColor = {
  접수대기:  "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  접수완료:  "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  처리중:    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  검수요청:  "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  완료:      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  취소:      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  보류:      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  검수반려:  "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

export function BCsrDetail({ row = csrRows[2], setPage }) {
  const [viewMode, setViewMode] = useState("customer");
  const [showAll, setShowAll] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(row.status);
  const [currentManager, setCurrentManager] = useState(row.manager);
  const [applyMd, setApplyMd] = useState(row.md.apply);
  const [workMd, setWorkMd]   = useState(row.md.work);
  const [timeline, setTimeline] = useState(row.timeline || []);
  const [previousNormalStatus, setPreviousNormalStatus] = useState(
    STATUS_FLOW.includes(row.status) ? row.status : "처리중"
  );

  const isAdminView = viewMode === "admin";

  const PREVIEW_COUNT = 4;
  const visibleReplies = showAll ? row.replies : row.replies.slice(0, PREVIEW_COUNT);
  const hiddenCount = row.replies.length - PREVIEW_COUNT;

  const currentIdx = STATUS_FLOW.indexOf(currentStatus);
  const isException = STATUS_EXCEPTION.includes(currentStatus);
  const isCompleted = currentStatus === "완료";
  const isHoldStatus = currentStatus === "취소" || currentStatus === "보류";
  const canCustomerRequestException = !isAdminView && !isCompleted && !isException;
  const canRejectInspection = currentStatus === "검수요청";

  const getNowText = () => new Date().toLocaleString("ko-KR", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
  }).replace(/\. /g, "-").replace(".", "");

  // 상태 변경 핸들러
  const handleStatusChange = (newStatus) => {
    const now = getNowText();
    const isCustomerException = !isAdminView && STATUS_EXCEPTION.includes(newStatus);

    if (newStatus === "검수반려") {
      setPreviousNormalStatus("처리중");
      setCurrentStatus("처리중");
      setTimeline(prev => [
        ...prev,
        {
          step: "검수반려",
          date: now,
          actor: row.requester,
          note: "고객 검수 반려로 재처리를 요청했습니다.",
        },
        {
          step: "처리중",
          date: now,
          actor: "시스템",
          note: "검수반려로 인해 담당자 처리 단계로 되돌아갔습니다.",
        },
      ]);
      return;
    }

    if (newStatus === "취소" || newStatus === "보류") {
      if (STATUS_FLOW.includes(currentStatus)) {
        setPreviousNormalStatus(currentStatus);
      }
      setCurrentStatus(newStatus);
      setTimeline(prev => [...prev, {
        step: newStatus,
        date: now,
        actor: isCustomerException ? row.requester : currentManager,
        note: isCustomerException
          ? `고객 ${newStatus === "취소" ? "취소" : "보류"} 요청 · 정상 재개 시 ${STATUS_FLOW.includes(currentStatus) ? currentStatus : previousNormalStatus} 단계로 복귀`
          : `상태 변경 → ${newStatus}`,
      }]);
      return;
    }

    if (STATUS_FLOW.includes(newStatus)) {
      setPreviousNormalStatus(newStatus);
    }
    setCurrentStatus(newStatus);
    setTimeline(prev => [...prev, {
      step: newStatus,
      date: now,
      actor: currentManager,
      note: `상태 변경 → ${newStatus}`,
    }]);
  };

  const handleResumeNormalFlow = () => {
    const resumeStatus = previousNormalStatus && STATUS_FLOW.includes(previousNormalStatus)
      ? previousNormalStatus
      : "처리중";
    const now = getNowText();

    setCurrentStatus(resumeStatus);
    setPreviousNormalStatus(resumeStatus);
    setTimeline(prev => [
      ...prev,
      {
        step: "정상 재개",
        date: now,
        actor: isAdminView ? currentManager : row.requester,
        note: `${currentStatus} 상태에서 ${resumeStatus} 단계로 정상 재개`,
      },
      {
        step: resumeStatus,
        date: now,
        actor: "시스템",
        note: "홀딩 상태가 해제되어 정상 처리 흐름으로 복귀했습니다.",
      },
    ]);
  };

  const handleManagerChange = (e) => {
    const newManager = e.target.value;
    const prev = currentManager;
    setCurrentManager(newManager);
    const now = new Date().toLocaleString("ko-KR", {
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hour12: false,
    }).replace(/\. /g, "-").replace(".", "");
    if (newManager !== prev) {
      setTimeline(t => [...t, {
        step: "담당자 변경",
        date: now,
        actor: "관리자",
        note: `${prev} → ${newManager}`,
      }]);
    }
  };

  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-slate-50 px-3 py-10 dark:bg-slate-950 sm:px-4">
      <div className="mx-auto max-w-6xl">

        {/* ── 헤더 카드 ── */}
        <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-blue-100">
                  <span>{row.id}</span>
                  <span>·</span>
                  <span>{row.company}</span>
                  <span>·</span>
                  <span>{row.requester}</span>
                  <span>·</span>
                  <span>{row.requestDate}</span>
                </div>
                <h1 className="mt-2 break-words text-xl font-bold leading-snug text-white md:text-2xl">
                  {row.title}
                </h1>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={cx("rounded-full px-3 py-1 text-xs font-bold", statusFlowColor[currentStatus])}>
                    {currentStatus}
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                    {row.priority}
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                    {row.work}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2 self-start">
                <button
                  onClick={() => setPage ? setPage(isAdminView ? "csrAdmin" : "csrCustomer") : window.history.back()}
                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  목록으로
                </button>

                {/* 고객/관리자 토글 */}
                <div className="flex gap-1 rounded-xl border border-white/20 bg-white/10 p-1">
                  {["customer", "admin"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setViewMode(m)}
                      className={cx(
                        "rounded-lg px-3 py-1.5 text-xs font-bold transition",
                        viewMode === m
                          ? "bg-white text-blue-600"
                          : "text-white/70 hover:text-white"
                      )}
                    >
                      {m === "customer" ? "고객 보기" : "관리자/담당자"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* ── 메인 영역 ── */}
          <div className="min-w-0 space-y-4">

            {/* 원문 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-2.5 dark:border-white/10 dark:bg-slate-800">
                <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-300">
                  <FileText className="h-3.5 w-3.5" />
                  고객 요청 원문 · {row.requestDate}
                </span>
                <span className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-400">
                  <Lock className="h-2.5 w-2.5" />수정 불가
                </span>
              </div>
              <div className="whitespace-pre-wrap break-words px-5 py-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {row.body}
              </div>
              {row.attachments?.length > 0 && (
                <div className="flex flex-wrap gap-2 border-t border-slate-100 px-5 py-3 dark:border-white/10">
                  {row.attachments.map((f) => (
                    <span key={f.name} className="flex items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <Paperclip className="h-3 w-3" />{f.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 대화 스레드 */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                대화 내역 · 총 {row.replies.length}건
              </p>
              <div className="flex flex-col gap-3">
                {visibleReplies.map((reply, idx) => {
                  const isStaff = reply.role === "staff";
                  return (
                    <div key={idx} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
                      <div className={cx(
                        "flex flex-wrap items-center gap-2 border-b px-4 py-2.5",
                        isStaff
                          ? "border-blue-100 bg-blue-100 dark:border-blue-900/50 dark:bg-blue-950"
                          : "border-slate-100 bg-slate-50 dark:border-white/5 dark:bg-slate-800/50"
                      )}>
                        <div className={cx(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                          isStaff ? "bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200"
                                  : "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
                        )}>
                          {reply.author.slice(0, 1)}
                        </div>
                        <span className={cx("text-xs font-bold", isStaff ? "text-blue-700 dark:text-blue-300" : "text-indigo-700 dark:text-indigo-300")}>
                          {reply.author}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">{reply.org}</span>
                        <span className="ml-auto text-xs text-slate-400 dark:text-slate-500">{reply.date}</span>
                      </div>
                      <div className={cx(
                        "whitespace-pre-wrap break-words px-5 py-4 text-sm leading-7 text-slate-700 dark:text-slate-300",
                        isStaff ? "bg-blue-50/30 dark:bg-blue-950/10" : "bg-white dark:bg-slate-900"
                      )}>
                        {reply.text}
                      </div>
                      {reply.images?.length > 0 && (
                        <div className={cx("flex flex-wrap gap-2 border-t border-slate-100 px-5 py-3 dark:border-white/10", isStaff ? "bg-blue-50/30" : "bg-white dark:bg-slate-900")}>
                          {reply.images.map((img, i) => (
                            <div key={i} className="flex h-16 w-24 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                              <Image className="h-5 w-5 text-slate-400" />
                            </div>
                          ))}
                        </div>
                      )}
                      {reply.attachments?.length > 0 && (
                        <div className={cx("flex flex-wrap gap-2 border-t border-slate-100 px-5 py-3 dark:border-white/10", isStaff ? "bg-blue-50/30" : "bg-white dark:bg-slate-900")}>
                          {reply.attachments.map((f) => (
                            <span key={f.name} className="flex items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                              <Paperclip className="h-3 w-3" />{f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {hiddenCount > 0 && (
                <button
                  onClick={() => setShowAll(v => !v)}
                  className="mx-auto mt-3 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400"
                >
                  {showAll
                    ? <><ChevronUp className="h-3.5 w-3.5" />접기</>
                    : <><ChevronDown className="h-3.5 w-3.5" />이전 대화 {hiddenCount}건 더 보기</>}
                </button>
              )}
            </div>

            {/* Reply 입력 */}
            <div>
              <p className="mb-2 text-xs leading-6 text-slate-400 dark:text-slate-500">
                추가 문의나 처리 의견은 Reply로 남겨 이력을 보존합니다.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
              <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-slate-800">
                {[Bold, Italic].map((Icon, i) => (
                  <button key={i} className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}
                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10">
                  <List className="h-3.5 w-3.5" />
                </button>
                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-blue-400 hover:bg-blue-50 dark:hover:bg-cyan-400/10">
                  <Image className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-blue-400 hover:bg-blue-50 dark:hover:bg-cyan-400/10">
                  <Paperclip className="h-3.5 w-3.5" />
                </button>
                <span className="ml-auto text-xs text-slate-300 dark:text-slate-600">Ctrl+V 이미지 붙여넣기</span>
              </div>
              <textarea
                className="min-h-[90px] w-full resize-none border-none bg-white p-4 text-sm leading-7 text-slate-700 outline-none placeholder:text-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:placeholder:text-slate-600"
                placeholder={isAdminView ? "고객에게 전달할 처리 의견을 입력하세요." : "추가 문의나 보완 내용을 입력하세요."}
              />
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2.5 dark:border-white/10 dark:bg-slate-800">
                <span className="flex items-center gap-1.5 text-xs text-slate-300 dark:text-slate-600">
                  <Paperclip className="h-3.5 w-3.5" />이미지 드래그 가능
                </span>
                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
                  <Send className="h-3.5 w-3.5" />Reply 등록
                </button>
              </div>
              </div>
            </div>
          </div>

          {/* ── 사이드바 ── */}
          <aside className="min-w-0 space-y-4">

            {/* 상태 변경 패널 (관리자만) */}
            {isAdminView && (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-800">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">정상 처리 상태 변경</p>
                </div>
                <div className="p-4">
                  {/* 현재 상태 */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">현재</span>
                    <span className={cx("rounded-full px-3 py-1 text-xs font-bold", statusFlowColor[currentStatus])}>
                      {currentStatus}
                    </span>
                  </div>

                  <p className="mb-4 text-[11px] leading-5 text-slate-400 dark:text-slate-500">
                    담당자는 접수, 처리, 검수요청, 완료 등 정상 처리 흐름만 변경합니다.
                  </p>

                  {/* 순방향 흐름 버튼 */}
                  {!isException && (
                    <div className="flex flex-col gap-2">
                      {currentIdx > 0 && (
                        <button
                          onClick={() => handleStatusChange(STATUS_FLOW[currentIdx - 1])}
                          className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-500 transition hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-800 dark:text-slate-400"
                        >
                          <ChevronUp className="h-3.5 w-3.5" />
                          <span>{STATUS_FLOW[currentIdx - 1]}으로 변경</span>
                        </button>
                      )}
                      {currentIdx < STATUS_FLOW.length - 1 && (
                        <button
                          onClick={() => handleStatusChange(STATUS_FLOW[currentIdx + 1])}
                          className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-3 py-2.5 text-xs font-bold text-blue-600 transition hover:bg-blue-100 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300"
                        >
                          <span>{STATUS_FLOW[currentIdx + 1]}으로 변경</span>
                          <ChevronDown className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  )}

                  {isException && (
                    <div className="space-y-3 rounded-xl border border-orange-200 bg-orange-50 p-3 text-xs leading-6 text-orange-700 dark:border-orange-400/20 dark:bg-orange-900/10 dark:text-orange-300">
                      <p>
                        현재 요청은 고객 요청으로 홀딩된 상태입니다. 담당자는 예외 상태를 직접 선택하지 않고, 필요한 경우 정상 흐름으로 재개할 수 있습니다.
                      </p>
                      <button
                        onClick={handleResumeNormalFlow}
                        className="w-full rounded-xl bg-orange-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-orange-700 dark:bg-orange-400 dark:text-slate-950 dark:hover:bg-orange-300"
                      >
                        {previousNormalStatus || "처리중"} 단계로 정상 재개
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 처리 정보 (관리자) */}
            {isAdminView && (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-800">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">처리 정보</p>
                </div>
                <div className="space-y-3 p-4">
                  {/* 담당자 */}
                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-400 dark:text-slate-500">
                      주담당자
                      <span className="ml-1.5 text-[10px] font-normal text-slate-300 dark:text-slate-600">변경 시 자동 저장</span>
                    </label>
                    <select
                      value={currentManager}
                      onChange={handleManagerChange}
                      className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-white"
                    >
                      {["전원태", "최유정", "조광호", "안상현", "전용호", "배지혁", "이태훈"].map(m => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* 협업 담당자 */}
                  {row.coworkers?.length > 0 && (
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-400 dark:text-slate-500">
                        협업 담당자
                        <span className="ml-1.5 text-[10px] font-normal text-slate-300 dark:text-slate-600">Reply 작성 시 자동 등록</span>
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {row.coworkers.map(name => (
                          <span key={name} className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 공수 */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-400 dark:text-slate-500">공수 (M/D)</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="mb-1 text-[10px] font-bold text-red-500">적용 (차감)</p>
                        <input
                          type="number"
                          step="0.1"
                          value={applyMd}
                          onChange={e => setApplyMd(e.target.value)}
                          className="h-9 w-full rounded-xl border border-red-200 bg-red-50 px-3 text-sm font-bold text-red-600 outline-none dark:border-red-400/20 dark:bg-red-900/10 dark:text-red-400"
                        />
                      </div>
                      <div>
                        <p className="mb-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">작업 (이력)</p>
                        <input
                          type="number"
                          step="0.1"
                          value={workMd}
                          onChange={e => setWorkMd(e.target.value)}
                          className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-600 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-slate-300"
                        />
                      </div>
                    </div>
                    {Number(applyMd) < Number(workMd) && (
                      <p className="mt-1.5 text-[10px] text-amber-600 dark:text-amber-400">
                        ※ 적용공수가 작업공수보다 적습니다 (오류/면제 처리)
                      </p>
                    )}
                  </div>

                  {/* 완료예정일 / 완료일 */}
                  {[["완료예정일", row.due], ["완료일", row.done]].map(([label, val]) => (
                    <div key={label}>
                      <label className="mb-1 block text-xs font-bold text-slate-400 dark:text-slate-500">{label}</label>
                      <input
                        type="date"
                        defaultValue={val}
                        className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  ))}

                  <button className="h-9 w-full rounded-xl bg-blue-600 text-xs font-bold text-white transition hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
                    처리 정보 저장
                  </button>
                </div>
              </div>
            )}

            {/* 처리 타임라인 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
              <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-800">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">처리 타임라인</p>
              </div>
              <div className="p-4">
                <div className="flex flex-col">
                  {timeline.map((item, idx) => {
                    const isLast = idx === timeline.length - 1;
                    const isDone = true;
                    return (
                      <div key={idx} className="relative flex gap-3">
                        {!isLast && (
                          <div className="absolute left-[9px] top-5 h-full w-px bg-blue-100 dark:bg-blue-900/50" />
                        )}
                        <div className="relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-cyan-500 dark:text-slate-950">
                          <CheckCircle2 className="h-3 w-3" />
                        </div>
                        <div className="min-w-0 pb-4">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.step}</span>
                            {item.step === "담당자 배정" || item.step === "담당자 변경" ? (
                              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                                {item.note}
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">
                            {item.date} · {item.actor}
                          </p>
                          {item.note && item.step !== "담당자 배정" && item.step !== "담당자 변경" && (
                            <p className="mt-0.5 text-[10px] leading-4 text-slate-500 dark:text-slate-400">{item.note}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* 미완료 단계 */}
                  {!isException && currentIdx < STATUS_FLOW.length - 1 && (
                    STATUS_FLOW.slice(currentIdx + 1).map((step) => (
                      <div key={step} className="relative flex gap-3 opacity-30">
                        <div className="relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                          <Clock3 className="h-3 w-3 text-slate-400" />
                        </div>
                        <div className="pb-4">
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{step}</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500">대기 중</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* 고객 예외 요청 */}
            {!isAdminView && (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    요청 처리
                  </p>
                  <span className={cx(
                    "rounded-full px-2.5 py-1 text-[10px] font-bold",
                    isCompleted
                      ? "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                      : "bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300"
                  )}>
                    {isCompleted ? "완료됨" : "처리 가능"}
                  </span>
                </div>

                {isHoldStatus ? (
                  <div className="space-y-2">
                    <div className="rounded-xl bg-orange-50 p-3 text-xs leading-6 text-orange-700 dark:bg-orange-900/10 dark:text-orange-300">
                      현재 요청은 {currentStatus} 상태로 홀딩되어 있습니다. 정상 재개 시 {previousNormalStatus || "처리중"} 단계로 돌아갑니다.
                    </div>
                    <button
                      onClick={handleResumeNormalFlow}
                      className="w-full rounded-xl border border-blue-200 bg-blue-50 px-3 py-2.5 text-left text-xs font-bold text-blue-600 transition hover:bg-blue-100 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
                    >
                      정상 재개
                      <span className="mt-1 block text-[10px] font-normal leading-4 text-blue-500/80 dark:text-cyan-300/70">
                        홀딩을 해제하고 {previousNormalStatus || "처리중"} 단계부터 다시 진행합니다.
                      </span>
                    </button>
                  </div>
                ) : canCustomerRequestException ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => handleStatusChange("취소")}
                      className="w-full rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-left text-xs font-bold text-red-600 transition hover:bg-red-100 dark:border-red-400/20 dark:bg-red-900/10 dark:text-red-300"
                    >
                      요청 취소
                      <span className="mt-1 block text-[10px] font-normal leading-4 text-red-500/80 dark:text-red-300/70">
                        처리를 잠시 중단합니다. 필요 시 이전 단계로 정상 재개할 수 있습니다.
                      </span>
                    </button>

                    <button
                      onClick={() => handleStatusChange("보류")}
                      className="w-full rounded-xl border border-orange-200 bg-orange-50 px-3 py-2.5 text-left text-xs font-bold text-orange-600 transition hover:bg-orange-100 dark:border-orange-400/20 dark:bg-orange-900/10 dark:text-orange-300"
                    >
                      보류 요청
                      <span className="mt-1 block text-[10px] font-normal leading-4 text-orange-500/80 dark:text-orange-300/70">
                        고객 확인이나 내부 검토가 필요한 경우 홀딩합니다.
                      </span>
                    </button>

                    <button
                      disabled={!canRejectInspection}
                      onClick={() => canRejectInspection && handleStatusChange("검수반려")}
                      className={cx(
                        "w-full rounded-xl border px-3 py-2.5 text-left text-xs font-bold transition",
                        canRejectInspection
                          ? "border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100 dark:border-rose-400/20 dark:bg-rose-900/10 dark:text-rose-300"
                          : "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-300 dark:border-white/10 dark:bg-slate-800 dark:text-slate-600"
                      )}
                    >
                      검수반려
                      <span className="mt-1 block text-[10px] font-normal leading-4">
                        {canRejectInspection
                          ? "검수반려 이력을 남기고 요청을 처리중 단계로 되돌립니다."
                          : "검수요청 상태에서만 선택할 수 있습니다."}
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="rounded-xl bg-slate-50 p-3 text-xs leading-6 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                    완료된 요청은 취소, 보류, 검수반려 처리를 할 수 없습니다.
                  </div>
                )}
              </div>
            )}

            {/* 고객 안내 (고객 보기) */}
            {!isAdminView && (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">안내</p>
                <div className="space-y-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                  <p>요청 원문은 수정할 수 없습니다. 추가 문의는 Reply로 남겨주세요.</p>
                  <p>취소/보류 상태는 홀딩 상태이며, 필요 시 정상 재개할 수 있습니다.</p>
                  <p>검수반려 시 요청은 다시 처리중 단계로 돌아가고 반려 이력이 남습니다.</p>
                </div>
              </div>
            )}

            {/* 처리 정보 요약 (고객 보기) */}
            {!isAdminView && (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">처리 정보</p>
                {[
                  ["요청구분",   row.type],
                  ["업무구분",   row.work],
                  ["담당자",     currentManager],
                  ["완료예정일", row.due || "-"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-slate-100 py-2 text-xs last:border-none dark:border-white/5">
                    <span className="text-slate-400 dark:text-slate-500">{k}</span>
                    <span className="font-bold text-slate-600 dark:text-slate-300">{v}</span>
                  </div>
                ))}
                {/* 공수 표시 (고객용) */}
                <div className="mt-2 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                  <p className="mb-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">공수 (M/D)</p>
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="text-xs font-bold text-red-500">{applyMd}</p>
                      <p className="text-[10px] text-slate-400">적용</p>
                    </div>
                    <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />
                    <div className="text-center">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{workMd}</p>
                      <p className="text-[10px] text-slate-400">작업</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BCsrCreate — 요청 등록
// ─────────────────────────────────────────
export function BCsrCreate({ setPage }) {
  const [selectedType, setSelectedType] = useState("error");
  const [isPrivate, setIsPrivate] = useState(false);

  const types = [
    {
      key: "error",
      label: "장애 / 오류",
      desc: "시스템 오류, 접속 불가, 기능 이상 등 긴급 대응이 필요한 경우",
      guide: "오류 화면, 발생 조건, 재현 방법을 함께 남겨주세요.",
      icon: AlertTriangle,
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-950/30",
      border: "border-red-200 dark:border-red-400/30",
    },
    {
      key: "inquiry",
      label: "사용 문의",
      desc: "기능 사용 방법, 설정, 화면 조회 등 일반 문의",
      guide: "궁금한 메뉴, 화면명, 원하는 처리 방법을 함께 남겨주세요.",
      icon: MessageCircle,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-400/30",
    },
    {
      key: "improve",
      label: "개선 요청",
      desc: "기능 추가, 화면 변경, 프로세스 개선 등",
      guide: "현재 불편한 점과 원하는 개선 방향을 구체적으로 작성해 주세요.",
      icon: Sparkles,
      color: "text-violet-500",
      bg: "bg-violet-50 dark:bg-violet-950/30",
      border: "border-violet-200 dark:border-violet-400/30",
    },
  ];

  const selected = types.find((item) => item.key === selectedType) || types[0];

  return (
    <section className="overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,.32),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(6,182,212,.22),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
                INFOPLUS · CSR REQUEST
              </Badge>

              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                요청 내용을 등록해 주세요
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                장애, 사용 문의, 개선 요청을 유형별로 등록하고 처리 이력을 Reply로 누적합니다.
                화면 캡처와 재현 조건을 함께 남기면 더 빠르게 확인할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  ["01", "유형 선택"],
                  ["02", "내용 작성"],
                  ["03", "요청 등록"],
                ].map(([num, label]) => (
                  <div key={num} className="rounded-xl bg-white/5 px-4 py-3">
                    <p className="text-lg font-black text-cyan-300">{num}</p>
                    <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-4 md:py-14">
        {/* 유형 선택 */}
        <div className="mb-8">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">
                REQUEST TYPE
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                요청 유형 선택
              </h2>
            </div>
            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
              선택한 유형에 따라 담당자가 우선순위와 처리 방향을 빠르게 판단합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {types.map((t) => {
              const Icon = t.icon;
              const isSelected = selectedType === t.key;

              return (
                <button
                  key={t.key}
                  onClick={() => setSelectedType(t.key)}
                  className={cx(
                    "relative rounded-2xl border p-5 text-left transition",
                    isSelected
                      ? cx("bg-white shadow-xl ring-2 ring-blue-500/20 dark:bg-slate-900 dark:ring-cyan-400/20", t.border)
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/40"
                  )}
                >
                  {isSelected && (
                    <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 dark:bg-cyan-400">
                      <Check className="h-3 w-3 text-white dark:text-slate-950" />
                    </span>
                  )}

                  <div className={cx("mb-4 flex h-11 w-11 items-center justify-center rounded-2xl", t.bg)}>
                    <Icon className={cx("h-5 w-5", t.color)} />
                  </div>

                  <p className="text-base font-black text-slate-900 dark:text-white">{t.label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{t.desc}</p>

                  <div className="mt-4 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                    <p className="text-[11px] leading-5 text-slate-500 dark:text-slate-400">
                      {t.guide}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main form */}
          <div className="min-w-0 space-y-5">
            {/* 기본 정보 */}
            <Card className="overflow-hidden">
              <div className="border-b border-slate-100 bg-white px-5 py-4 dark:border-white/10 dark:bg-slate-900">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">
                      BASIC INFORMATION
                    </p>
                    <h2 className="mt-1 text-xl font-black text-slate-950 dark:text-white">
                      요청 기본 정보
                    </h2>
                  </div>

                  <Badge className={cx(selected.bg, selected.color)}>
                    {selected.label}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-5">
                  <label className="mb-1.5 block text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                    placeholder="요청 제목을 간결하게 입력하세요"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                      화면명
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                      placeholder="예: MES 작업지시 화면"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                      화면 ID
                    </label>
                    <input
                      type="text"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                      placeholder="예: MES_WO_001"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* 상세 내용 */}
            <Card className="overflow-hidden p-0">
              <div className="border-b border-slate-100 bg-white px-5 py-4 dark:border-white/10 dark:bg-slate-900">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">
                  DESCRIPTION
                </p>
                <h2 className="mt-1 text-xl font-black text-slate-950 dark:text-white">
                  상세 내용
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  문제 현상, 발생 조건, 원하는 개선 방향을 가능한 구체적으로 작성해 주세요.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-slate-800">
                {[Bold, Italic, Underline].map((Icon, i) => (
                  <button
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}

                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />

                {[List, ListOrdered].map((Icon, i) => (
                  <button
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 dark:hover:bg-white/10"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}

                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />

                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10">
                  <Code className="h-3.5 w-3.5" />
                </button>

                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />

                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-blue-400 hover:bg-blue-50 dark:hover:bg-cyan-400/10">
                  <Image className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-blue-400 hover:bg-blue-50 dark:hover:bg-cyan-400/10">
                  <Paperclip className="h-3.5 w-3.5" />
                </button>

                <span className="ml-auto hidden text-xs text-slate-300 dark:text-slate-600 sm:inline">
                  Ctrl+V 이미지 붙여넣기 가능
                </span>
              </div>

              <textarea
                className="min-h-[240px] w-full resize-y border-none bg-white p-5 text-sm leading-7 text-slate-700 outline-none placeholder:text-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:placeholder:text-slate-600"
                placeholder={`요청 내용을 입력해 주세요.

예)
1. 어떤 화면에서 문제가 발생했는지
2. 어떤 조건에서 재현되는지
3. 기대한 결과와 실제 결과가 어떻게 다른지
4. 첨부할 화면 캡처나 파일이 있는지`}
              />

              <div className="flex flex-wrap gap-2 border-t border-slate-100 px-4 py-3 dark:border-white/10 dark:bg-slate-900">
                <div className="relative flex h-16 w-24 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-800">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <span className="absolute bottom-0 left-0 right-0 truncate bg-black/40 px-1 py-0.5 text-center text-[9px] text-white">
                    screen_01.png
                  </span>
                  <button className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black/40 text-white">
                    <X className="h-2.5 w-2.5" />
                  </button>
                </div>

                <button className="flex h-16 w-24 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 text-slate-300 transition hover:border-blue-400 hover:text-blue-400 dark:border-white/20 dark:hover:border-cyan-400 dark:hover:text-cyan-400">
                  <Plus className="h-4 w-4" />
                  <span className="mt-0.5 text-[10px]">첨부 추가</span>
                </button>
              </div>

              <div className="flex items-center gap-2 border-t border-slate-100 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-800">
                <Paperclip className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600" />
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  이미지나 파일을 여기에 드래그하거나 클릭하여 선택할 수 있습니다.
                </span>
              </div>
            </Card>

            {/* 안내 */}
            <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
              <Lock className="mt-1 h-4 w-4 flex-shrink-0" />
              <span>
                등록된 요청 원문은 수정할 수 없습니다. 추가 문의나 보완 내용은 요청 상세 화면의 Reply로 남겨 이력을 누적해 주세요.
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                onClick={() => setPage && setPage("csrCustomer")}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-white/5"
              >
                취소
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
                <Send className="h-4 w-4" />
                요청 등록하기
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-4">
            <Card className="p-5">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                REQUEST CATEGORY
              </p>

              {[
                { label: "업무구분", options: ["선택", "MES", "ERP", "WMS", "생산관리", "품질관리", "시스템관리"] },
                { label: "사업부", options: ["선택", "FPCB", "SMT", "PKG", "조립", "공통"] },
                { label: "우선순위", options: ["중 (보통)", "긴급", "상", "하"] },
              ].map(({ label, options }) => (
                <div key={label} className="mb-4 last:mb-0">
                  <label className="mb-1.5 block text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                    {label}
                  </label>
                  <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white">
                    {options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}

              <label className="mt-4 flex cursor-pointer items-start gap-2 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                  className="mt-0.5 accent-blue-600 dark:accent-cyan-400"
                />
                <span>
                  사내 비공개 요청으로 등록
                  <span className="mt-1 block text-[10px] text-slate-400 dark:text-slate-500">
                    체크 시 고객에게 노출되지 않는 내부 요청으로 분류됩니다.
                  </span>
                </span>
              </label>
            </Card>

            <Card className="p-5">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                REQUESTER
              </p>

              {[
                ["요청번호", "260522-012"],
                ["회사명", "시노펙스(베트남)"],
                ["요청자", "김병준"],
                ["이메일", "andrew324600@synopex.com"],
                ["연락처", "0861751123"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 border-b border-slate-100 py-2 text-xs last:border-none dark:border-white/5">
                  <span className="shrink-0 text-slate-400 dark:text-slate-500">{k}</span>
                  <span className="break-all text-right font-bold text-slate-600 dark:text-slate-300">{v}</span>
                </div>
              ))}

              <div className="my-3 h-px bg-slate-100 dark:bg-white/5" />

              {[
                ["잔여공수(M/D)", "-0.3", "text-red-500"],
                ["요청일자", "2026-05-23", ""],
              ].map(([k, v, cls]) => (
                <div key={k} className="flex justify-between gap-3 border-b border-slate-100 py-2 text-xs last:border-none dark:border-white/5">
                  <span className="text-slate-400 dark:text-slate-500">{k}</span>
                  <span className={cx("font-bold", cls || "text-slate-600 dark:text-slate-300")}>{v}</span>
                </div>
              ))}
            </Card>

            <Card className="p-5">
              <p className="text-sm font-black text-blue-600 dark:text-cyan-300">
                작성 팁
              </p>

              <div className="mt-4 space-y-3 text-xs leading-6 text-slate-500 dark:text-slate-400">
                <p>오류 요청은 발생 화면, 재현 조건, 기대 결과를 함께 남겨주세요.</p>
                <p>개선 요청은 현재 불편한 점과 원하는 업무 흐름을 적어주시면 좋습니다.</p>
                <p>이미지를 첨부하면 담당자가 상황을 더 빠르게 파악할 수 있습니다.</p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BHistory — 회사연혁
// ─────────────────────────────────────────
export function BHistory() {
  return (
    <section className="theme-page overflow-hidden">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.32),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(6,182,212,.22),transparent_26%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
            COMPANY HISTORY
          </Badge>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            인포솔루션의 성장 흐름
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            2002년 제조 IT 사업을 시작한 이후, ERP, MES, WMS, SPC, MPS/MRP, INFOPLUS까지
            제조 운영 전반을 연결하는 솔루션을 확장해 왔습니다.
          </p>
        </div>
      </div>

      <HistoryMilestones />
      <HistoryTimeline />
    </section>
  );
}

function HistoryMilestones() {
  const milestones = [
    {
      year: "2002",
      title: "사업 시작",
      desc: "인포써미트 설립 및 Global ERP 구축 프로젝트 수행",
    },
    {
      year: "2014",
      title: "법인 전환",
      desc: "주식회사 인포솔루션 설립",
    },
    {
      year: "2016",
      title: "제품 기반 확장",
      desc: "기업부설연구소 설립 및 FLEX MES Manufacturing 출시",
    },
    {
      year: "2020",
      title: "운영지원 체계 구축",
      desc: "통합 유지보수 시스템 INFOPLUS 구축",
    },
    {
      year: "2024",
      title: "패키지 확장",
      desc: "FLEX MES Package 제조업 확장",
    },
  ];

  return (
    <section className="theme-section px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="MILESTONES"
          title="주요 성장 단계"
          desc="인포솔루션은 제조 IT 솔루션과 운영지원 체계를 단계적으로 확장해 왔습니다."
        />

        <div className="grid gap-4 md:grid-cols-5">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:hover:border-cyan-400">
                <p className="text-3xl font-black text-blue-600 dark:text-cyan-300">{item.year}</p>
                <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistoryTimeline() {
  return (
    <section className="theme-page px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-300">
            FULL HISTORY
          </p>
          <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
            회사연혁
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            인포솔루션은 전자부품, 자동차, 화학, 의료기기, 유통 등 다양한 제조 산업에 시스템을 구축해 왔습니다.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[88px] top-0 h-full w-px bg-slate-100 dark:bg-white/10 sm:left-[108px]" />

          <div className="flex flex-col gap-0">
            {companyHistory.map((item, idx) => (
              <div key={item.year} className="relative flex gap-6 pb-10 sm:gap-10">
                <div className="w-[72px] shrink-0 pt-1 text-right sm:w-[92px]">
                  <span
                    className={cx(
                      "text-lg font-black",
                      idx === 0
                        ? "text-blue-600 dark:text-cyan-300"
                        : "text-slate-400 dark:text-slate-600"
                    )}
                  >
                    {item.year}
                  </span>
                </div>

                <div className="relative flex-shrink-0">
                  <div
                    className={cx(
                      "mt-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2",
                      idx === 0
                        ? "border-blue-600 bg-blue-600 dark:border-cyan-300 dark:bg-cyan-300"
                        : "border-slate-200 bg-white dark:border-white/20 dark:bg-slate-950"
                    )}
                  >
                    {idx === 0 && (
                      <div className="h-2 w-2 rounded-full bg-white dark:bg-slate-950" />
                    )}
                  </div>
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <div
                    className={cx(
                      "rounded-[1.4rem] border p-5 sm:p-6",
                      idx === 0
                        ? "border-blue-100 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-950/20"
                        : "border-slate-100 bg-slate-50 dark:border-white/5 dark:bg-white/5"
                    )}
                  >
                    <ul className="space-y-2">
                      {item.items.map((text, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
                        >
                          <span
                            className={cx(
                              "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                              idx === 0 ? "bg-blue-500 dark:bg-cyan-400" : "bg-slate-400 dark:bg-slate-600"
                            )}
                          />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>

                    {item.image && (
                      <HistoryImageGrid
                        year={item.year}
                        images={Array.isArray(item.image) ? item.image : [item.image]}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function HistoryImageGrid({ year, images = [] }) {
  if (!images.length) return null;

  const isDocumentYear = ["2022", "2019", "2017", "2016"].includes(String(year));
  const imageClass = isDocumentYear
    ? "h-full w-full object-contain bg-white p-3"
    : "h-full w-full object-cover";

  if (images.length === 1) {
    return (
      <div className="mt-5 overflow-hidden rounded-2xl border border-white bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
        <div className="h-[280px] sm:h-[340px]">
          <img
            src={images[0]}
            alt={`${year} 연혁 이미지`}
            className={imageClass}
          />
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {images.map((src, idx) => (
          <div
            key={`${year}-${idx}`}
            className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <div className="h-[240px] sm:h-[300px]">
              <img
                src={src}
                alt={`${year} 연혁 이미지 ${idx + 1}`}
                className={imageClass}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-4">
      <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
        <div className="h-[300px] sm:h-[380px]">
          <img
            src={images[0]}
            alt={`${year} 연혁 이미지 1`}
            className={imageClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {images.slice(1).map((src, idx) => (
          <div
            key={`${year}-${idx + 1}`}
            className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <div className="h-[240px] sm:h-[300px]">
              <img
                src={src}
                alt={`${year} 연혁 이미지 ${idx + 2}`}
                className={imageClass}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// BReferences — 구축사례
// ─────────────────────────────────────────
export function BReferences() {
  const [activeCategory, setActiveCategory] = React.useState("전체");

  const filtered = activeCategory === "전체"
    ? references
    : references.filter((r) => r.category === activeCategory);

  const marqueeItems = [...referenceMarquee, ...referenceMarquee].map((item) => {
    return references.find((ref) => ref.id === item.id) || item;
  });


  return (
    <section className="theme-page min-h-screen">
      {/* 히어로 */}
      <div className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">REFERENCES</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">구축사례</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            전자부품, 자동차, 화학, 의료기기 등 다양한 제조 산업 분야에서
            30개 이상의 고객사와 함께하고 있습니다.
          </p>
          {/* 통계 */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-3 sm:gap-8">
            {[["30+", "구축 고객사"], ["17개국", "해외 사이트"], ["20+", "년의 경험"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black text-cyan-300">{n}</p>
                <p className="mt-1 text-sm text-slate-400">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 마퀴 — 흐르는 로고 */}
      <div className="theme-section overflow-hidden border-b border-[var(--theme-line)] py-6">
        <div className="flex animate-[marquee_14s_linear_infinite] gap-4 whitespace-nowrap sm:animate-[marquee_22s_linear_infinite] sm:gap-5 lg:animate-[marquee_30s_linear_infinite] lg:gap-6">
          {marqueeItems.map((r, idx) => (
            <div
              key={`${r.id}-${idx}`}
              className="inline-flex h-16 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-white/10 dark:bg-slate-800"
            >
              <ReferenceLogo item={r} size="marquee" />
              <span className="text-sm font-black text-slate-700 dark:text-slate-200">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <FeaturedReferenceCases />

      {/* 카테고리 필터 */}
      <div className="theme-page px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {referenceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-bold transition",
                  activeCategory === cat
                    ? "bg-blue-600 text-white dark:bg-cyan-500 dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-cyan-300"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 카드 그리드 */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((ref) => (
              <div
                key={ref.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
              >
                {/* 로고 영역 */}
                <div className="flex h-32 items-center justify-center border-b border-slate-100 bg-slate-50 px-5 dark:border-white/5 dark:bg-slate-800">
                  <ReferenceLogo item={ref} size="md" />
                </div>
                {/* 내용 */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-black text-slate-900 dark:text-white">{ref.name}</h3>
                    <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-900/30 dark:text-cyan-300">
                      {ref.category}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {ref.projects.slice(0, 2).map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400 dark:bg-cyan-500" />
                        {p}
                      </li>
                    ))}
                    {ref.projects.length > 2 && (
                      <li className="text-xs text-slate-400 dark:text-slate-500">+{ref.projects.length - 2}건 더보기</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferenceLogo({ item, size = "md", dark = false }) {
  const sizeClass = {
    marquee: "h-8 max-w-[120px]",
    sm: "h-9 max-w-[135px]",
    md: "h-12 max-w-[190px]",
    lg: "h-14 max-w-[210px]",
  };

  const boxClass = {
    marquee: "min-h-10 min-w-[92px] rounded-xl px-3 py-2",
    sm: "min-h-12 min-w-[112px] rounded-2xl px-4 py-3",
    md: "min-h-16 min-w-[150px] rounded-2xl px-5 py-3",
    lg: "min-h-20 min-w-[180px] rounded-2xl px-6 py-4",
  };

  if (item.logo) {
    return (
      <div
        className={cx(
          "flex items-center justify-center bg-white shadow-sm",
          boxClass[size] || boxClass.md,
          dark ? "ring-1 ring-white/10" : "border border-slate-100"
        )}
      >
        <img
          src={item.logo}
          alt={`${item.name} 로고`}
          className={cx("w-auto object-contain", sizeClass[size] || sizeClass.md)}
        />
      </div>
    );
  }

  return (
    <div
      className={cx(
        "flex items-center justify-center rounded-2xl font-black text-white shadow-xl",
        size === "marquee"
          ? "h-10 w-10 text-[10px]"
          : size === "md"
            ? "h-16 w-16 text-base"
            : size === "lg"
              ? "h-20 w-20 text-xl"
              : "h-12 w-12 text-xs"
      )}
      style={{ backgroundColor: item.color }}
    >
      {item.name.slice(0, 2)}
    </div>
  );
}

function FeaturedReferenceCases() {
  const featuredIds = ["bh", "shinsung", "doosan"];

  const featuredCases = references
    .filter((ref) => featuredIds.includes(ref.id))
    .sort((a, b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id));

  const caseMeta = {
    bh: {
      headline: "본사와 해외법인을 연결한 ERP+MES 통합 구축",
      summary:
        "BH 본사, 중국법인, 베트남법인을 대상으로 생산, 외주, 설비보전, 영업, 구매, 자재, WMS, 회계, 원가까지 제조 운영 전반을 통합한 대표 구축 사례입니다.",
      scope: ["ERP+MES", "본사/중국/베트남", "제조 운영 표준화"],
    },
    shinsung: {
      headline: "베트남·인도 생산거점으로 확장된 글로벌 제조 운영",
      summary:
        "신성 C&T 베트남법인과 인도법인을 대상으로 ERP+MES와 WMS for Android를 구축하여 해외 제조거점의 현장 실행과 물류 흐름을 연결한 사례입니다.",
      scope: ["ERP+MES", "Mobile WMS", "Global Site"],
    },
    doosan: {
      headline: "베트남 제조법인의 MES·WMS 중심 운영 체계 구축",
      summary:
        "두산전자 베트남법인의 생산, 품질, 영업, 구매, 자재, 재고, WMS, 설계 업무를 FLEX MES와 모바일 WMS 기반으로 연결한 구축 사례입니다.",
      scope: ["MES", "WMS for Android", "Vietnam Site"],
    },
  };

  return (
    <section className="theme-page px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="FEATURED REFERENCES"
          title="대표 구축사례"
          desc="전자부품 제조 분야에서 검증된 대표 고객사 사례를 먼저 보여줍니다."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredCases.map((ref, idx) => {
            const meta = caseMeta[ref.id];

            return (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Card className="group h-full overflow-hidden transition hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl dark:hover:border-cyan-400">
                  <div className="relative min-h-[270px] overflow-hidden bg-slate-950 p-6 text-white">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <Badge className="bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/20">
                          {ref.category}
                        </Badge>
                        <h3 className="mt-5 max-w-[190px] break-keep text-2xl font-black leading-tight md:text-[1.65rem]">
                          {ref.name}
                        </h3>
                      </div>

                      <div className="shrink-0">
                        <ReferenceLogo item={ref} size="sm" dark />
                      </div>
                    </div>

                    <p className="relative mt-6 min-h-[56px] text-base font-black leading-7 text-cyan-100 md:text-lg">
                      {meta.headline}
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {meta.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {meta.scope.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-900/30 dark:text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/10">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                        구축 범위
                      </p>

                      <ul className="space-y-2">
                        {ref.projects.slice(0, 3).map((project) => (
                          <li
                            key={project}
                            className="flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-cyan-400" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const privacyPolicyText = `'(주)인포솔루션'은 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
'(주)인포솔루션'은 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
'(주)인포솔루션'은 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
ο 본 방침은 : 2016년 3월 2일 부터 시행됩니다.

■ 수집하는 개인정보 항목

'(주)인포솔루션'은 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.

ο 수집항목 : 이름 , 성별 , 휴대전화번호 , 이메일 , 회사명 , 회사전화번호 , 신용카드 정보 , 은행계좌 정보 , 서비스 이용기록 , 접속 로그 , 접속 IP 정보 , 결제기록
ο 개인정보 수집방법 : 홈페이지(회원가입) , 서면양식

■ 개인정보의 수집 및 이용목적

'(주)인포솔루션'은 수집한 개인정보를 다음의 목적을 위해 활용합니다.

ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스
ο 회원 관리
회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 불만처리 등 민원처리 , 고지사항 전달
ο 마케팅 및 광고에 활용
신규 서비스(제품) 개발 및 특화

■ 개인정보의 보유 및 이용기간

'(주)인포솔루션'은 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.

■ 개인정보의 파기절차 및 방법

'(주)인포솔루션'은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.
파기절차 및 방법은 다음과 같습니다.

ο 파기절차
회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
ο 파기방법
- 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.

■ 개인정보 제공

'(주)인포솔루션'은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.

- 이용자들이 사전에 동의한 경우
- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우

■ 수집한 개인정보의 위탁

'(주)인포솔루션'은 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.

■ 이용자 및 법정대리인의 권리와 그 행사방법

이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
이용자 혹은 만 14세 미만 아동의 개인정보 조회·수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
'(주)인포솔루션'은 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 “'(주)인포솔루션'이 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.

■ 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항

쿠키 등 인터넷 서비스 이용 시 자동 생성되는 개인정보를 수집하는 장치를 운영하지 않습니다.

■ 개인정보에 관한 민원서비스

'(주)인포솔루션'은 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.

개인정보관리책임자 성명 : 이용규
전화번호 : 070-4799-9965
이메일 : leesys@infosolution.co.kr

귀하께서는 '(주)인포솔루션'의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.
'(주)인포솔루션'은 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.

기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.

----------------------------------------------------------------------------------------------------------------------------------------------

1. 개인정보침해신고센터 (www.1336.or.kr / 국번없이 118)
2. 정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-0533~4)
3. 대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr / 02-3480-3600)
4. 경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)`;

// ─────────────────────────────────────────
// BContact — 고객문의
// ─────────────────────────────────────────
export function BContact() {
  const [agreed, setAgreed] = React.useState(false);
  const [showPolicy, setShowPolicy] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState("solution");

  const inquiryTypes = [
    {
      key: "solution",
      title: "솔루션 도입 문의",
      desc: "ERP, MES, WMS, CMMS 등 제조 IT 솔루션 도입을 검토합니다.",
      tags: ["ERP", "MES", "WMS"],
    },
    {
      key: "operation",
      title: "운영지원 문의",
      desc: "INFOPLUS, CSR, 유지보수, 고도화 관련 상담을 요청합니다.",
      tags: ["INFOPLUS", "CSR", "SLA"],
    },
    {
      key: "estimate",
      title: "견적 / 기타 문의",
      desc: "프로젝트 범위, 일정, 비용, 기타 상담이 필요한 경우 선택합니다.",
      tags: ["견적", "컨설팅", "기타"],
    },
  ];

  return (
    <section className="theme-page overflow-hidden">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,.35),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(6,182,212,.24),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
              CONTACT
            </Badge>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-6xl">
              제조 IT 도입과 운영을<br />함께 검토합니다
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              ERP, MES, WMS 도입 문의부터 INFOPLUS 운영지원, 유지보수, 고도화 상담까지
              필요한 내용을 남겨주시면 담당자가 확인 후 연락드립니다.
            </p>
          </div>

          <Card className="relative overflow-hidden border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-[1.2rem] border border-white/10 bg-slate-900/90 p-5">
              <p className="text-sm font-black text-cyan-300">Contact Process</p>
              <p className="mt-1 text-2xl font-black">문의 접수 흐름</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "문의 등록"],
                  ["02", "담당자 확인"],
                  ["03", "상담 진행"],
                ].map(([num, label]) => (
                  <div key={num} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-black text-cyan-200">{num}</p>
                    <p className="mt-2 text-xs font-bold text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs leading-6 text-slate-400">
                  도입 범위가 명확하지 않아도 괜찮습니다. 현재 업무 흐름과 개선하고 싶은 부분을 중심으로 남겨주시면
                  적합한 솔루션과 진행 방향을 함께 검토합니다.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 문의 유형 */}
      <section className="bg-slate-50 px-4 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="INQUIRY TYPE"
            title="문의 유형을 선택해 주세요"
            desc="문의 유형을 먼저 선택하면 상담 내용을 더 빠르게 분류할 수 있습니다."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {inquiryTypes.map((item, idx) => (
              <button
                key={item.key}
                onClick={() => setSelectedType(item.key)}
                className="text-left"
              >
                <Card
                  className={cx(
                    "h-full p-6 transition hover:-translate-y-1 hover:shadow-xl",
                    selectedType === item.key
                      ? "border-blue-500 ring-2 ring-blue-500/20 dark:border-cyan-400 dark:ring-cyan-400/20"
                      : "hover:border-blue-300 dark:hover:border-cyan-400"
                  )}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 dark:bg-slate-800">
                      <span className="text-sm font-black">{String(idx + 1).padStart(2, "0")}</span>
                    </div>

                    {selectedType === item.key && (
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white dark:bg-cyan-400 dark:text-slate-950">
                        선택됨
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-900/30 dark:text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 폼 */}
      <section className="bg-white px-4 py-24 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <Card className="overflow-hidden shadow-xl">
            <div className="border-b border-slate-100 bg-slate-50 px-6 py-5 dark:border-white/10 dark:bg-slate-800">
              <p className="text-sm font-black text-blue-600 dark:text-cyan-300">CONTACT FORM</p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                문의 내용을 입력해 주세요
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                필수 항목을 작성하고 개인정보취급방침에 동의해 주세요.
              </p>
            </div>

            <div className="p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                    작성자 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                    회사명
                  </label>
                  <input
                    type="text"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                    placeholder="회사명을 입력하세요"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                    FAX
                  </label>
                  <input
                    type="tel"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                    placeholder="031-000-0000"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                    문의 유형
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="solution">솔루션 도입 문의</option>
                    <option value="operation">운영지원 문의</option>
                    <option value="estimate">견적 / 기타 문의</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                  제목
                </label>
                <input
                  type="text"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                  placeholder="문의 제목을 입력하세요"
                />
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-bold text-slate-500 dark:text-slate-400">
                  문의 내용
                </label>
                <textarea
                  rows={7}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                  placeholder="도입 검토 중인 솔루션, 현재 업무 문제, 예상 일정 등을 자유롭게 입력해 주세요."
                />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-800">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-slate-700 dark:text-slate-300">
                    개인정보취급방침
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowPolicy(!showPolicy)}
                    className="text-xs font-bold text-blue-600 underline dark:text-cyan-300"
                  >
                    {showPolicy ? "전문 접기" : "전문 보기"}
                  </button>
                </div>

                {showPolicy && (
                  <div className="mt-4 max-h-72 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 text-xs leading-6 text-slate-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400">
                    <pre className="whitespace-pre-wrap break-words font-sans">
                      {privacyPolicyText}
                    </pre>
                  </div>
                )}

                <label className="mt-4 flex cursor-pointer items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-blue-600 dark:accent-cyan-400"
                  />
                  <span>
                    개인정보취급방침에 동의합니다. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  disabled={!agreed}
                  className={cx(
                    "flex items-center gap-2 rounded-2xl px-10 py-3.5 text-sm font-bold transition",
                    agreed
                      ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                      : "cursor-not-allowed bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600"
                  )}
                >
                  문의 접수하기
                </button>
              </div>
            </div>
          </Card>

          {/* 우측 연락처 */}
          <div className="space-y-4">
            <Card className="p-6">
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-300">
                CONTACT INFO
              </Badge>
              <h3 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
                인포솔루션 연락처
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                문의 접수 후 담당자가 확인하여 연락드립니다.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  ["대표전화", company.phone],
                  ["FAX", company.fax],
                  ["E-mail", company.email],
                  ["주소", company.address],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                    <p className="text-xs font-black text-slate-400 dark:text-slate-500">{label}</p>
                    <p className="mt-1 break-keep text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-sm font-black text-blue-600 dark:text-cyan-300">
                안내
              </p>
              <div className="mt-4 space-y-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                <p>도입 범위가 정해지지 않았더라도 현재 업무 상황을 기준으로 문의하실 수 있습니다.</p>
                <p>기존 고객사는 INFOPLUS 포털을 통해 CSR 요청을 등록할 수 있습니다.</p>
                <p>개인정보취급방침 동의 후 문의 접수가 가능합니다.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
}

// ─────────────────────────────────────────
// SimplePageHero — 보조 Hero
// ─────────────────────────────────────────
function SimplePageHero({ eyebrow, title, desc }) {
  return (
    <div className="theme-hero relative overflow-hidden px-4 py-20 text-white">
      <div className="theme-hero-grid absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <Badge className="bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-300/20">
          {eyebrow}
        </Badge>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>

        {desc && (
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// BNotice — 공지사항
// ─────────────────────────────────────────
export function BNotice() {
  const notices = [
    {
      id: "NOTICE-2026-001",
      title: "INFOPLUS 고객지원 포털 이용 안내",
      date: "2026-05-01",
      writer: "관리자",
      views: 128,
      tag: "공지",
    },
    {
      id: "NOTICE-2026-002",
      title: "원격지원 서비스 이용 절차 안내",
      date: "2026-04-18",
      writer: "관리자",
      views: 94,
      tag: "기술지원",
    },
    {
      id: "NOTICE-2026-003",
      title: "FLEX MES / Mobile WMS 운영지원 접수 기준 안내",
      date: "2026-03-25",
      writer: "관리자",
      views: 156,
      tag: "운영지원",
    },
  ];

  return (
    <section className="theme-page min-h-screen">
      <SimplePageHero
        eyebrow="NOTICE"
        title="공지사항"
        desc="인포솔루션의 주요 공지, 서비스 안내, 운영지원 관련 소식을 확인할 수 있습니다."
      />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">
              SUPPORT NOTICE
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
              고객지원 공지
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
              기존 공지사항 게시판을 B안 디자인에 맞춰 리스트형으로 정리했습니다.
            </p>
          </div>

          <Card className="p-3">
            <div className="flex flex-col gap-2 sm:flex-row">
              <select className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-white">
                <option>제목</option>
                <option>작성자</option>
              </select>
              <input
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none placeholder:text-slate-400 focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                placeholder="검색어를 입력해 주세요."
              />
              <Button variant="primary" className="h-11">
                <Search className="mr-2 h-4 w-4" />
                검색
              </Button>
            </div>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <div className="hidden grid-cols-[140px_1fr_140px_120px_90px] border-b border-slate-100 bg-slate-50 px-5 py-4 text-sm font-black text-slate-500 dark:border-white/10 dark:bg-slate-800 dark:text-slate-400 lg:grid">
            <span>번호</span>
            <span>제목</span>
            <span>등록일</span>
            <span>작성자</span>
            <span className="text-right">조회</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-white/10">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="grid gap-3 px-5 py-5 transition hover:bg-blue-50/60 dark:hover:bg-blue-950/20 lg:grid-cols-[140px_1fr_140px_120px_90px] lg:items-center"
              >
                <p className="text-xs font-black text-slate-400 dark:text-slate-500">
                  {notice.id}
                </p>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-cyan-300">
                      {notice.tag}
                    </Badge>
                    <p className="text-base font-black text-slate-950 dark:text-white">
                      {notice.title}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400">{notice.date}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{notice.writer}</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 lg:text-right">
                  {notice.views}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-8 flex justify-center">
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white dark:bg-white dark:text-slate-950">
            1
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BResources — 자료실
// ─────────────────────────────────────────
export function BResources() {
  const resources = [
    {
      title: "인포솔루션 회사소개서",
      category: "Company",
      desc: "회사 개요, 주요 솔루션, 구축 경험을 요약한 소개 자료입니다.",
      file: "infosolution_company_profile.pdf",
      date: "2026-05-01",
    },
    {
      title: "FLEX MES 솔루션 브로슈어",
      category: "MES",
      desc: "제조 실행, 실적 수집, LOT 추적, 품질 연계 기능을 소개합니다.",
      file: "flex_mes_brochure.pdf",
      date: "2026-04-15",
    },
    {
      title: "Mobile WMS / PDA 운영 가이드",
      category: "WMS",
      desc: "입출고, LOT, Location, 재고 실사 등 모바일 물류 처리 흐름을 안내합니다.",
      file: "mobile_wms_guide.pdf",
      date: "2026-03-20",
    },
    {
      title: "INFOPLUS CSR 이용 가이드",
      category: "INFOPLUS",
      desc: "요청 등록, Reply 작성, 검수요청, 완료 처리 흐름을 안내합니다.",
      file: "infoplus_csr_guide.pdf",
      date: "2026-03-08",
    },
  ];

  return (
    <section className="theme-page min-h-screen">
      <SimplePageHero
        eyebrow="RESOURCES"
        title="자료실"
        desc="회사소개서, 솔루션 브로슈어, 운영지원 가이드 등 필요한 자료를 확인할 수 있습니다."
      />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="DOWNLOAD CENTER"
          title="자료 다운로드"
          desc="실제 파일 연동 전까지는 샘플 자료 목록으로 구성하고, 추후 다운로드 URL만 연결하면 됩니다."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((item, idx) => (
            <Card
              key={item.title}
              className="group overflow-hidden p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:hover:border-cyan-400"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-cyan-300">
                      {item.category}
                    </Badge>
                    <span className="text-xs font-bold text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>

                  <p className="mt-4 break-all rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {item.file}
                  </p>
                </div>

                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 transition group-hover:scale-105 dark:bg-slate-800">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900">
          <p className="text-sm font-black text-slate-950 dark:text-white">
            안내
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
            실제 운영 시에는 각 자료 카드의 다운로드 버튼에 파일 URL 또는 서버 다운로드 API를 연결하면 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BRemoteSupport — 원격지원
// ─────────────────────────────────────────
export function BRemoteSupport() {
  const steps = [
    {
      title: "상담 요청",
      desc: "고객센터 또는 INFOPLUS를 통해 원격지원이 필요한 내용을 접수합니다.",
    },
    {
      title: "상담원 안내",
      desc: "담당자가 증상과 접속 가능 시간을 확인한 뒤 원격지원 절차를 안내합니다.",
    },
    {
      title: "접속 프로그램 실행",
      desc: "고객접속프로그램을 실행하고 상담원에게 접속 정보를 전달합니다.",
    },
    {
      title: "원격 점검",
      desc: "담당자가 고객 PC 또는 시스템 화면을 확인하며 문제를 점검합니다.",
    },
  ];

  const actions = [
    {
      label: "새로고침",
      desc: "상담원 대기 상태를 다시 확인합니다.",
      icon: "F5",
    },
    {
      label: "즐겨찾기",
      desc: "원격지원 페이지를 즐겨찾기에 추가합니다.",
      icon: "★",
    },
    {
      label: "고객접속프로그램",
      desc: "원격지원을 위한 접속 프로그램을 실행합니다.",
      icon: "↓",
      highlight: true,
    },
    {
      label: "바이러스 검사",
      desc: "접속 전 보안 점검을 진행합니다.",
      icon: "◆",
    },
  ];

  return (
    <section className="theme-page min-h-screen">
      <SimplePageHero
        eyebrow="REMOTE SUPPORT"
        title="원격지원"
        desc="고객님의 지원 요청에 따라 인포솔루션 담당자가 직접 화면을 확인하며 문제 해결을 지원합니다."
      />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="border-b border-slate-100 bg-slate-50 px-6 py-5 dark:border-white/10 dark:bg-slate-800">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">
                  HOW TO USE
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                  서비스 이용방법
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  본 서비스는 고객님의 지원 요청에 따라 인포솔루션 직원이 직접 고객님의 PC에 접속하여 문제를 해결해드리는 서비스입니다.
                  먼저 고객지원센터로 연락하신 후 상담원의 안내에 따라 진행해 주세요.
                </p>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-4">
                {steps.map((step, idx) => (
                  <div key={step.title} className="relative">
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                      <p className="text-xs font-black text-blue-600 dark:text-cyan-300">
                        STEP {idx + 1}
                      </p>
                      <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs leading-6 text-slate-500 dark:text-slate-400">
                        {step.desc}
                      </p>
                    </div>

                    {idx < steps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white md:flex dark:bg-cyan-400 dark:text-slate-950">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {actions.map((item) => (
                <button
                  key={item.label}
                  className={cx(
                    "rounded-2xl border p-5 text-center transition hover:-translate-y-1 hover:shadow-xl",
                    item.highlight
                      ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300"
                      : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
                  )}
                >
                  <div
                    className={cx(
                      "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black",
                      item.highlight
                        ? "bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950"
                        : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    )}
                  >
                    {item.icon}
                  </div>
                  <p className="mt-4 text-sm font-black">{item.label}</p>
                  <p className="mt-2 text-xs leading-5 opacity-70">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <Card className="overflow-hidden">
              <div className="bg-slate-950 p-6 text-white">
                <Badge className="bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/20">
                  SUPPORT STATUS
                </Badge>
                <h3 className="mt-5 text-2xl font-black">
                  상담원 대기
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  현재 대기중인 상담원이 없을 수 있습니다. 고객센터 또는 INFOPLUS를 통해 먼저 접수해 주세요.
                </p>
              </div>

              <div className="p-6">
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-white/20 dark:bg-slate-800">
                  <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-slate-400" />
                  <p className="text-sm font-black text-slate-700 dark:text-slate-300">
                    대기중인 상담원이 없습니다.
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                    잠시만 기다려 주시거나 고객센터로 문의해 주세요.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-sm font-black text-blue-600 dark:text-cyan-300">
                고객센터
              </p>

              <div className="mt-4 space-y-3">
                {[
                  ["대표전화", company.phone],
                  ["FAX", company.fax],
                  ["E-mail", company.email],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                    <p className="text-xs font-black text-slate-400 dark:text-slate-500">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BLocation — 오시는길
// ─────────────────────────────────────────
export function BLocation() {
  const transport = [
    {
      title: "주변 지하철",
      desc: "4호선 안산역 2번출구 도보 5분",
    },
    {
      title: "주변 버스",
      desc: "일반 11, 52, 66, 101, 320, 707",
    },
  ];

  return (
    <section className="theme-page min-h-screen">
      <SimplePageHero
        eyebrow="LOCATION"
        title="오시는길"
        desc="인포솔루션 본사 위치와 교통편을 안내드립니다."
      />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative h-[420px] bg-slate-100 dark:bg-slate-900">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(15,23,42,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.08)_1px,transparent_1px)] [background-size:38px_38px] dark:opacity-20" />

                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="max-w-md rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950">
                      <MapPin className="h-8 w-8" />
                    </div>

                    <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
                      인포솔루션 본사
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      경기도 안산시 단원구 신길동 1229<br />
                      리드 스마트스퀘어 1367호 ~ 1369호
                    </p>

                    <p className="mt-5 rounded-xl bg-slate-100 px-4 py-3 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      실제 운영 시 카카오맵 또는 네이버 지도 API를 연결하면 됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {transport.map((item) => (
                <Card key={item.title} className="p-6">
                  <p className="text-sm font-black text-blue-600 dark:text-cyan-300">
                    {item.title}
                  </p>
                  <p className="mt-3 text-base font-bold leading-7 text-slate-700 dark:text-slate-300">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <Card className="p-6">
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-cyan-300">
                COMPANY LOCATION
              </Badge>

              <h2 className="mt-5 text-3xl font-black text-slate-950 dark:text-white">
                인포솔루션으로<br />찾아오시는 길
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                방문 전 담당자와 일정을 확인해 주시면 더 원활하게 안내받으실 수 있습니다.
              </p>
            </Card>

            <Card className="p-6">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                기본 정보
              </p>

              {[
                ["주소", company.address],
                ["대표전화", company.phone],
                ["FAX", company.fax],
                ["E-mail", company.email],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-slate-100 py-3 text-sm last:border-none dark:border-white/10">
                  <p className="text-xs font-black text-slate-400 dark:text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 break-keep font-bold leading-6 text-slate-700 dark:text-slate-300">
                    {value}
                  </p>
                </div>
              ))}
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BRecruitInfo — 채용안내
// ─────────────────────────────────────────
export function BRecruitInfo() {
  const people = [
    ["성과중심의 인사", "성과와 기여도를 기준으로 성장 기회를 제공합니다."],
    ["역량중심의 인사", "개인의 역량과 전문성을 중심으로 역할을 확장합니다."],
    ["현장중심의 인사", "고객과 제조 현장을 이해하는 실행력을 중요하게 봅니다."],
    ["직무중심의 인사", "직무 전문성과 책임을 기반으로 커리어를 설계합니다."],
  ];

  const systems = [
    ["직무체계", "업무의 특성 및 인사 운영전략에 기반한 직무체계"],
    ["직급체계", "역할 및 역량수준을 반영한 4단계 직급체계 운영"],
    ["평가체계", "지속적인 성과관리와 역량중심의 평가체계 구축"],
    ["보상체계", "성과에 따른 기본급 및 인센티브 자동 보상"],
  ];

  const benefits = [
    ["4대보험", "국민연금, 건강보험, 고용보험, 산재보험 등 법정 의무 보험 가입"],
    ["식비지원", "내근 및 외근시 식비 지원"],
    ["주 5일 근무제", "평일 9시 출근 ~ 18시 퇴근"],
    ["취미활동비 지원", "개인 취미활동비 매월 11만원 지원"],
    ["상품권 지급", "설, 추석, 생일 상품권 지급"],
    ["회식비 지원", "매월 회식비 지원"],
    ["자기개발비 지원", "도서구입, 강의신청 등 자기개발을 위한 비용 지원"],
    ["명절 상여금 지급", "개인 역량별 명절 상여금 지급"],
  ];

  return (
    <section className="theme-page min-h-screen">
      <SimplePageHero
        eyebrow="RECRUIT"
        title="채용안내"
        desc="열정과 도전정신으로 미래를 함께 만들어갈 인포솔루션의 가족을 기다립니다."
      />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="BEST PEOPLE"
          title="인포솔루션이 함께하고 싶은 사람"
          desc="성과, 역량, 현장, 직무 중심의 인사 원칙을 바탕으로 함께 성장합니다."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {people.map(([title, desc], idx) => (
            <Card key={title} className="p-6 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:hover:border-cyan-400">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-lg font-black text-blue-600 dark:bg-blue-900/30 dark:text-cyan-300">
                {idx + 1}
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-cyan-300">
              HR SYSTEM
            </Badge>
            <h2 className="mt-5 text-4xl font-black text-slate-950 dark:text-white">
              인사제도
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              직무와 역량을 중심으로 공정한 평가와 보상을 지향합니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {systems.map(([title, desc]) => (
              <Card key={title} className="p-5">
                <p className="text-sm font-black text-blue-600 dark:text-cyan-300">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            eyebrow="BENEFITS"
            title="복리후생"
            desc="구성원이 안정적으로 일하고 성장할 수 있도록 다양한 복리후생을 제공합니다."
          />

          <Card className="overflow-hidden">
            <div className="divide-y divide-slate-100 dark:divide-white/10">
              {benefits.map(([title, desc]) => (
                <div key={title} className="grid gap-2 px-6 py-4 md:grid-cols-[220px_1fr]">
                  <p className="font-black text-slate-950 dark:text-white">
                    {title}
                  </p>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BRecruitPosts — 채용공고
// ─────────────────────────────────────────
export function BRecruitPosts() {
  return (
    <section className="theme-page min-h-screen">
      <SimplePageHero
        eyebrow="RECRUIT POSTS"
        title="채용공고"
        desc="현재 진행 중인 채용공고와 향후 모집 정보를 확인할 수 있습니다."
      />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">
              OPEN POSITIONS
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
              채용공고
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
              기존 채용공고 게시판을 B안 디자인에 맞춰 정리했습니다.
            </p>
          </div>

          <Card className="p-3">
            <div className="flex flex-col gap-2 sm:flex-row">
              <select className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-white">
                <option>제목</option>
                <option>작성자</option>
              </select>
              <input
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none placeholder:text-slate-400 focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
                placeholder="검색어를 입력해 주세요."
              />
              <Button variant="primary" className="h-11">
                <Search className="mr-2 h-4 w-4" />
                검색
              </Button>
            </div>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <div className="hidden grid-cols-[120px_1fr_140px_120px_90px] border-b border-slate-100 bg-slate-50 px-5 py-4 text-sm font-black text-slate-500 dark:border-white/10 dark:bg-slate-800 dark:text-slate-400 lg:grid">
            <span>번호</span>
            <span>제목</span>
            <span>등록일</span>
            <span>작성자</span>
            <span className="text-right">조회</span>
          </div>

          <div className="flex min-h-[260px] flex-col items-center justify-center px-5 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
              <FileText className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">
              현재 진행중인 채용공고가 없습니다.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              신규 채용이 진행될 경우 본 페이지를 통해 안내드릴 예정입니다.
              인포솔루션과 함께 성장하고 싶은 분들의 많은 관심 바랍니다.
            </p>
          </div>
        </Card>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-black text-blue-600 dark:text-cyan-300">
              채용 문의
            </p>
            <h3 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
              인재풀 등록 또는 채용 관련 문의
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
              상시 채용이나 향후 채용 관련 문의는 대표 메일 또는 고객문의 페이지를 통해 남겨주세요.
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-black text-blue-600 dark:text-cyan-300">
              Contact
            </p>

            <div className="mt-4 space-y-3">
              {[
                ["대표전화", company.phone],
                ["E-mail", company.email],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="text-xs font-black text-slate-400 dark:text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white dark:bg-white dark:text-slate-950">
            1
          </button>
        </div>
      </div>
    </section>
  );
}
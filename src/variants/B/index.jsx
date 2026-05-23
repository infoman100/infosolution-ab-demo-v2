import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, LayoutDashboard, Cpu, ShieldCheck,
  Search, Download,
  Plus, Send, Lock, AlertTriangle, MessageCircle, Sparkles,
  Check, Bold, Italic, Underline, List, ListOrdered, Code,
  Image, Paperclip, ChevronDown, ChevronUp, FileText,
  CheckCircle2, Clock3, X,
} from "lucide-react";
import { Button, Badge, Card, SectionTitle, cx } from "../../components/ui.jsx";
import {
  company, mainSolutions, businessDomains, assets,
  csrRows, statusColor,
} from "../../data/demoData.js";

// ─────────────────────────────────────────
// 파일 타입 아이콘 헬퍼
// ─────────────────────────────────────────
function FileIcon({ type, className = "h-4 w-4" }) {
  return <FileText className={className} />;
}

export function BHome({ mode, setPage }) {
  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <section className="relative px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.45),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.25),transparent_24%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">B안 · Modern React Experience</Badge>
            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Manufacturing Data,<br />Moving as One.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              회사 홈페이지와 INFOPLUS/CSR 포털을 하나의 디지털 고객 경험으로 설계하는 React 현대화안입니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="cyan" className="h-12 px-6" onClick={() => setPage("business")}>사업영역 맵 보기 <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button variant="outlineDark" className="h-12 px-6" onClick={() => setPage("csrCustomer")}>CSR Command Center</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="relative border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur">
              <div className="rounded-[1.2rem] bg-slate-900 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black text-cyan-300">INFOPLUS Command Center</p>
                    <p className="mt-1 text-2xl font-black">Real-time CSR</p>
                  </div>
                  <LayoutDashboard className="h-9 w-9 text-cyan-300" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[["진행중", "17"], ["검수요청", "1,984"], ["완료", "6,690"], ["SLA", "98%"]].map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-slate-400">{k}</p>
                      <p className="mt-2 text-3xl font-black">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="SOLUTIONS" title="제품처럼 보이는 솔루션 컴포넌트" desc="카드, 상태, 흐름, CTA를 재사용 가능한 컴포넌트로 설계합니다." />
          <ModernSolutionGrid setPage={setPage} />
        </div>
      </section>
    </div>
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
            onClick={() => setPage(item.code === "MES" ? "mes" : item.code === "ERP" ? "erp" : item.code === "WMS" ? "mobile" : "solutions")}
            className="group min-w-0 text-left"
          >
            <Card className="h-full overflow-hidden p-7 transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl">
              <div className="mb-8 flex items-start justify-between">
                <Badge className="bg-blue-100 text-blue-700">{item.code}</Badge>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">{tag}</span>)}</div>
            </Card>
          </motion.button>
        );
      })}
    </div>
  );
}

export function BCompany() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,.28),transparent_26%),radial-gradient(circle_at_85%_0%,rgba(6,182,212,.22),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.86fr]">
        <div>
          <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">ABOUT INFO SOLUTION</Badge>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">{company.message}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">{company.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["인터페이스", "오픈 안정화", "다국어", "표준 프로세스", "기술지원센터"].map((tag) => <Badge key={tag} className="bg-white/10 text-white ring-1 ring-white/10">{tag}</Badge>)}
          </div>
        </div>
        <Card className="border-white/10 bg-white/10 p-6 text-white backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {[["20+", "업력"], ["ERP/MES", "제조 특화"], ["Global", "해외 구축"], ["CSR", "지원 포털"]].map(([num, label]) => (
              <div key={label} className="rounded-3xl bg-white/10 p-6">
                <p className="text-4xl font-black text-cyan-300">{num}</p>
                <p className="mt-2 font-black text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export function BBusiness({ setPage }) {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="CONNECTED BUSINESS MAP" title="제조 데이터를 중심으로 연결되는 5대 사업영역" desc="B안은 사업영역을 플랫폼 맵 형태로 시각화합니다." />
        <div className="relative mx-auto h-[560px] max-w-[760px]">
          <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] bg-slate-950 text-center text-white shadow-2xl">
            <Cpu className="mb-3 h-9 w-9 text-cyan-300" />
            <p className="text-2xl font-black">Manufacturing<br />Data Hub</p>
          </div>
          <div className="absolute inset-20 rounded-full border border-dashed border-blue-200" />
          {businessDomains.map((item, idx) => {
            const positions = [["50%", "6%"], ["88%", "34%"], ["74%", "82%"], ["26%", "82%"], ["12%", "34%"]];
            return (
              <button key={item.code} onClick={() => setPage(item.code === "MES" ? "mes" : item.code === "ERP" ? "erp" : item.code === "WMS" ? "mobile" : "solutions")} style={{ left: positions[idx][0], top: positions[idx][1] }} className="absolute flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-xl transition hover:-translate-y-[56%] hover:border-cyan-300 hover:shadow-2xl">
                <p className="text-2xl font-black text-blue-600">{item.code}</p>
                <p className="mt-2 text-sm font-black">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BSolutions({ setPage }) {
  return (
    <section className="bg-slate-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionTitle dark eyebrow="SOLUTIONS" title="제품처럼 보이는 솔루션" desc="B안은 솔루션을 독립 제품 컴포넌트처럼 보여줍니다." />
        <ModernSolutionGrid setPage={setPage} />
      </div>
    </section>
  );
}

export function BSolutionDetail({ detail }) {
  return (
    <section className="overflow-hidden bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge className="bg-blue-100 text-blue-700 ring-1 ring-blue-200">{detail.code}</Badge>
            <h1 className="mt-5 text-5xl font-black leading-tight">{detail.title}</h1>
            <p className="mt-4 text-xl font-black text-blue-700">{detail.subtitle}</p>
            <p className="mt-6 text-lg leading-9 text-slate-600">{detail.summary}</p>
          </div>
            <Card className="self-start p-6 shadow-xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Process Redesign
            </p>

            <div className="grid gap-3 md:grid-cols-5">
              {detail.flow.map((step, idx) => (
                <div
                  key={step}
                  className="min-h-[96px] rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 text-center"
                >
                  <p className="text-xs font-black text-blue-400">
                    STEP {idx + 1}
                  </p>
                  <p className="mt-3 break-keep text-sm font-black leading-5 text-slate-950">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <ModernAssets detail={detail} />
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Real Product Screens
            </p>
            <h3 className="mt-2 text-3xl font-black text-slate-950">
              MES / POP 실제 운영 화면
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              실제 현장에서 사용하는 POP 화면을 갤러리 형태로 보여주어,
              단순 도식이 아닌 운영 가능한 제품이라는 신뢰감을 전달합니다.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-cyan-300">
            현장 작업 · 실적 등록 · 모니터링
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {assets.mesScreens.map((src, idx) => (
            <Card
              key={src}
              className="group overflow-hidden border-slate-200 bg-white p-3 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={src}
                  alt={`MES POP 실제 화면 ${idx + 1}`}
                  className="h-60 w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-2 py-4">
                <p className="text-sm font-black text-blue-700">
                  POP Screen {idx + 1}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  작업지시, 실적, 현장 데이터 확인을 위한 실제 운영 화면 예시
                </p>
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
          <Card className="overflow-hidden border-slate-200 bg-white p-3 shadow-xl">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={assets.mobilePda}
                alt="WMS PDA 실제 사용 이미지"
                className="h-[420px] w-full object-contain"
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-950/85 p-4 text-white backdrop-blur">
                <p className="text-sm font-black text-cyan-300">
                  WMS PDA Field Operation
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-200">
                  입출고, LOT 확인, 재고 반영을 현장에서 바로 처리하는 모바일 물류 환경
                </p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Mobile WMS Scenario
            </p>
            <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              PDA 스캔부터 재고 반영까지,
              <br />
              현장 작업 흐름을 모바일로 연결
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Mobile/WMS 영역은 실제 PDA 사용 이미지의 신뢰감을 유지하면서,
              옆 영역에는 현장 처리 프로세스를 카드형 시나리오로 정리합니다.
            </p>

            <div className="mt-8 space-y-3">
              {[
                ["01", "바코드 스캔", "자재, 제품, LOT 정보를 PDA로 즉시 인식합니다."],
                ["02", "LOT / Location 확인", "입출고 대상과 보관 위치를 현장에서 확인합니다."],
                ["03", "입출고 처리", "수기 입력 없이 현장 단말에서 바로 처리합니다."],
                ["04", "재고 자동 반영", "처리 결과가 WMS/ERP 재고 정보에 연결됩니다."],
              ].map(([num, title, desc]) => (
                <div
                  key={num}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-cyan-300">
                    {num}
                  </div>
                  <div>
                    <p className="font-black text-slate-950">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {assets.mobilePhoto && (
          <Card className="mt-6 overflow-hidden border-slate-200 bg-white p-5 shadow-xl">
            <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={assets.mobilePhoto}
                  alt="모바일 물류 현장 참고 이미지"
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-black text-blue-700">
                  참고 이미지 / 추후 일러스트화 후보
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  이 이미지는 실제 현장성이 있지만 다소 투박해 보일 수 있어,
                  최종안에서는 도식화 또는 일러스트형 현장 프로세스 이미지로
                  교체하는 후보로 관리합니다.
                </p>
              </div>
            </div>
          </Card>
        )}
      </section>
    );
  }

  return (
    <section className="mt-14">
      <Card className="overflow-hidden border-slate-200 bg-white p-8 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Diagram Redesign
            </p>
            <h3 className="mt-3 text-3xl font-black text-slate-950">
              기존 도식을 현대적인 프로세스 맵으로 재구성
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              ERP, SCM, MFG, PLM, 삼성SCM 등 기존의 복잡한 원형/화살표
              도식은 핵심 개념 중심의 프로세스 카드로 단순화합니다.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {detail.flow.map((step, idx) => (
              <div
                key={step}
                className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-5 text-center"
              >
                <p className="text-xs font-black text-blue-400">
                  STEP {idx + 1}
                </p>
                <p className="mt-3 text-sm font-black text-slate-950">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}

export function BInfoPlus({ setPage }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(6,182,212,.2),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">INFOPLUS PORTAL</Badge>
          <h1 className="mt-6 text-5xl font-black leading-tight">고객 요청 흐름을<br />한눈에 확인하는 포털</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">요청 등록, 처리 현황, 답변 이력 확인을 하나의 고객지원 경험으로 제공합니다.</p>
        </div>
        <Card className="border-white/10 bg-white p-8 text-slate-950 shadow-2xl">
          <ShieldCheck className="mx-auto h-11 w-11 text-blue-600" />
          <h2 className="mt-4 text-center text-3xl font-black">INFOPLUS</h2>
          <div className="mt-8 space-y-3">
            <input className="h-12 w-full rounded-2xl border border-slate-200 px-4" placeholder="아이디" />
            <input className="h-12 w-full rounded-2xl border border-slate-200 px-4" placeholder="비밀번호" type="password" />
            <Button variant="primary" className="h-12 w-full" onClick={() => setPage("csrCustomer")}>포털 접속</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// BCsrCreate — 요청 등록
// ─────────────────────────────────────────
export function BCsrCreate({ setPage }) {
  const [selectedType, setSelectedType] = useState("error");
 
  const types = [
    {
      key: "error",
      label: "장애 / 오류",
      desc: "시스템 오류, 접속 불가, 기능 이상 등 긴급 대응이 필요한 경우",
      icon: AlertTriangle,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      key: "inquiry",
      label: "사용 문의",
      desc: "기능 사용 방법, 설정, 화면 조회 등 일반 문의",
      icon: MessageCircle,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      key: "improve",
      label: "개선 요청",
      desc: "기능 추가, 화면 변경, 프로세스 개선 등",
      icon: Sparkles,
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
  ];
 
  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-slate-50 px-3 py-10 dark:bg-slate-950 sm:px-4">
      <div className="mx-auto max-w-5xl">
 
        {/* 헤더 */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-300">
            INFOPLUS · CSR REQUEST
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">요청 등록</h1>
          <p className="mt-1 text-sm text-slate-400">
            유형을 먼저 선택하고, 화면 캡처와 내용을 함께 작성해 주세요.
          </p>
        </div>
 
        {/* 유형 선택 카드 */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {types.map((t) => {
            const Icon = t.icon;
            const isSelected = selectedType === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setSelectedType(t.key)}
                className={cx(
                  "relative rounded-2xl border p-4 text-left transition",
                  isSelected
                    ? "border-blue-600 bg-blue-50 dark:border-cyan-400 dark:bg-cyan-400/10"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/40"
                )}
              >
                {isSelected && (
                  <span className="absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 dark:bg-cyan-400">
                    <Check className="h-2.5 w-2.5 text-white dark:text-slate-950" />
                  </span>
                )}
                <div className={cx("mb-3 flex h-9 w-9 items-center justify-center rounded-xl", t.bg)}>
                  <Icon className={cx("h-5 w-5", t.color)} />
                </div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{t.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{t.desc}</p>
              </button>
            );
          })}
        </div>
 
        {/* 메인 폼 */}
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_256px]">
 
          {/* 좌측: 입력 영역 */}
          <div className="flex flex-col gap-4">
 
            {/* 제목 / 화면명 / 화면ID */}
            <Card className="p-5">
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                  제목 *
                </label>
                <input
                  type="text"
                  className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-400"
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
                    className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white"
                    placeholder="예: MES 작업지시 화면"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                    화면 ID
                  </label>
                  <input
                    type="text"
                    className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white"
                    placeholder="예: MES_WO_001"
                  />
                </div>
              </div>
            </Card>
 
            {/* 에디터 영역 */}
            <Card className="overflow-hidden p-0">
              {/* 툴바 */}
              <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-slate-800">
                {[Bold, Italic, Underline].map((Icon, i) => (
                  <button key={i} className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}
                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />
                {[List, ListOrdered].map((Icon, i) => (
                  <button key={i} className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}
                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 dark:hover:bg-white/10">
                  <Code className="h-3.5 w-3.5" />
                </button>
                <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10" />
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-cyan-400/10">
                  <Image className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-cyan-400/10">
                  <Paperclip className="h-3.5 w-3.5" />
                </button>
                <span className="ml-auto text-xs text-slate-300 dark:text-slate-600">
                  Ctrl+V 이미지 붙여넣기 가능
                </span>
              </div>
 
              {/* 텍스트 입력 */}
              <textarea
                className="min-h-[200px] w-full resize-y border-none bg-white p-4 text-sm leading-7 text-slate-700 outline-none placeholder:text-slate-300 dark:bg-slate-900 dark:text-slate-300"
                placeholder={`문제 현상, 발생 조건, 재현 방법 등을 상세히 입력해 주세요.\n\n이미지는 툴바 버튼이나 Ctrl+V로 바로 붙여넣을 수 있습니다.`}
              />
 
              {/* 첨부 미리보기 */}
              <div className="flex flex-wrap gap-2 border-t border-slate-100 px-4 py-3 dark:border-white/10 dark:bg-slate-900">
                <div className="relative flex h-14 w-20 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-800">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <span className="absolute bottom-0 left-0 right-0 truncate bg-black/40 px-1 py-0.5 text-center text-[9px] text-white">
                    screen_01.png
                  </span>
                  <button className="absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black/40 text-white">
                    <X className="h-2 w-2" />
                  </button>
                </div>
                <button className="flex h-14 w-20 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 text-slate-300 transition hover:border-blue-400 hover:text-blue-400 dark:border-white/20 dark:hover:border-cyan-400 dark:hover:text-cyan-400">
                  <Plus className="h-4 w-4" />
                  <span className="mt-0.5 text-[10px]">추가</span>
                </button>
              </div>
 
              {/* 드래그존 */}
              <div className="flex items-center gap-2 border-t border-slate-100 bg-slate-50 px-4 py-2.5 dark:border-white/10 dark:bg-slate-800">
                <Paperclip className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600" />
                <span className="text-xs text-slate-300 dark:text-slate-600">
                  이미지나 파일을 여기에 드래그하거나{" "}
                  <span className="text-blue-500 dark:text-cyan-400">클릭하여 선택</span>
                </span>
              </div>
            </Card>
 
            {/* 수정 불가 안내 */}
            <div className="flex gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
              <Lock className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
              <span>
                등록된 요청 원문은 수정할 수 없습니다. 추가 문의나 보완 내용은 Reply로 남겨 이력을 누적해 주세요.
              </span>
            </div>
 
            {/* 버튼 */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setPage && setPage("csrCustomer")}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-500 transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-white/5"
              >
                취소
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
                <Send className="h-4 w-4" />
                요청 등록하기
              </button>
            </div>
          </div>
 
          {/* 우측: 메타 패널 */}
          <div className="flex flex-col gap-4">
            <Card className="p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                요청 분류
              </p>
              {[
                { label: "업무구분", options: ["선택", "MES", "ERP", "WMS", "생산관리", "시스템관리"] },
                { label: "사업부",   options: ["선택", "FPCB", "SMT", "PKG", "조립"] },
                { label: "우선순위", options: ["중 (보통)", "긴급", "상", "하"] },
              ].map(({ label, options }) => (
                <div key={label} className="mb-3 last:mb-0">
                  <label className="mb-1.5 block text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                    {label}
                  </label>
                  <select className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-400 dark:border-white/10 dark:bg-slate-800 dark:text-white">
                    {options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <label className="mt-1 flex cursor-pointer items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <input type="checkbox" className="accent-blue-600 dark:accent-cyan-400" />
                사내 비공개 요청
              </label>
            </Card>
 
            <Card className="p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                요청자 정보
              </p>
              {[
                ["요청번호", "260522-012"],
                ["회사명",   "시노펙스(베트남)"],
                ["요청자",   "김병준"],
                ["이메일",   "andrew324600@synopex.com"],
                ["연락처",   "0861751123"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-slate-100 py-2 text-xs last:border-none dark:border-white/5">
                  <span className="text-slate-400">{k}</span>
                  <span className="break-all text-right font-bold text-slate-600 dark:text-slate-300">{v}</span>
                </div>
              ))}
              <div className="my-2 h-px bg-slate-100 dark:bg-white/5" />
              {[
                ["잔여공수(M/D)", "-0.3", "text-red-500"],
                ["요청일자",     "2026-05-23", ""],
              ].map(([k, v, cls]) => (
                <div key={k} className="flex justify-between border-b border-slate-100 py-2 text-xs last:border-none dark:border-white/5">
                  <span className="text-slate-400">{k}</span>
                  <span className={cx("font-bold", cls || "text-slate-600 dark:text-slate-300")}>{v}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// BCsrList 전체 교체
export function BCsrList({ role, setPage }) {
  const isAdmin = role === "admin";
  const columns = isAdmin
    ? ["요청번호", "거래처", "제목", "요청구분", "업무구분", "상태", "우선순위", "요청일자", "요청자", "담당자", "공수(M/D)", "완료예정일", "완료일"]
    : ["요청번호", "제목", "요청구분", "업무구분", "상태", "우선순위", "요청일자", "요청자", "담당자", "공수(M/D)", "완료예정일", "완료일"];
 
  return (
    <section className="w-full overflow-x-hidden bg-slate-50 px-3 py-10 dark:bg-slate-950 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={isAdmin ? "ADMIN CSR" : "CUSTOMER CSR"}
          title={isAdmin ? "CSR Command Center" : "고객 요청 현황"}
          desc="상단 대시보드와 필터는 현대적으로 구성하고, PC에서는 테이블/list형으로 한눈에 확인되게 구성합니다."
        />
 
        {/* 지표 카드 */}
        <div className="grid gap-4 md:grid-cols-4">
          {(isAdmin
            ? [["미완료", "3420"], ["접수대기", "206"], ["처리중", "561"], ["검수요청", "1984"]]
            : [["잔여공수", "-0.3"], ["접수대기", "0"], ["진행중", "17"], ["완료", "62"]]
          ).map(([k, v]) => (
            <Card key={k} className="p-5">
              <p className="text-sm font-black text-blue-600 dark:text-cyan-300">{k}</p>
              <p className="mt-2 text-3xl font-black text-slate-900 dark:text-white">{v}</p>
            </Card>
          ))}
        </div>
 
        {/* 검색 필터 */}
        <Card className="mt-6 p-4">
          <div className="flex min-w-0 flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
              <select className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-white">
                <option>요청일자</option>
              </select>
              <input className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm dark:border-white/10 dark:bg-slate-800 dark:text-white" value="2025-05-22" readOnly />
              <input className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm dark:border-white/10 dark:bg-slate-800 dark:text-white" value="2026-05-22" readOnly />
            </div>
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
              <input
                className="h-11 min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400 dark:border-white/10 dark:bg-slate-800 dark:text-white"
                placeholder="검색어를 입력하세요"
              />
              <Button variant="primary" className="h-11 shrink-0">
                <Search className="mr-2 h-4 w-4" />검색
              </Button>
              <Button className="h-11 shrink-0">
                <Download className="mr-2 h-4 w-4" />Excel
              </Button>
            </div>
          </div>
        </Card>
 
        {/* PC 테이블 */}
        <div className="mt-6 hidden overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow dark:border-white/10 dark:bg-slate-900 lg:block">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-50 text-xs font-black text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <tr>
                {columns.map((c) => (
                  <th key={c} className="border-b border-slate-200 px-3 py-4 text-left dark:border-white/10">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csrRows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => setPage("csrDetail")}
                  className="cursor-pointer border-b border-slate-100 text-slate-700 transition hover:bg-blue-50 dark:border-white/5 dark:text-slate-300 dark:hover:bg-blue-950/30"
                >
                  <td className="px-3 py-4 font-bold">{row.id}</td>
                  {isAdmin && <td className="px-3 py-4 font-bold text-blue-600 dark:text-cyan-400">{row.company}</td>}
                  <td className="max-w-[300px] px-3 py-4 font-bold text-blue-700 dark:text-cyan-300">{row.title}</td>
                  <td className="px-3 py-4">{row.type}</td>
                  <td className="px-3 py-4">{row.work}</td>
                  <td className="px-3 py-4"><Badge className={statusColor[row.status]}>{row.status}</Badge></td>
                  <td className="px-3 py-4">{row.priority}</td>
                  <td className="px-3 py-4">{row.requestDate}</td>
                  <td className="px-3 py-4">{row.requester}</td>
                  <td className="px-3 py-4">{row.manager}</td>
                  <td className="px-3 py-4 text-red-500">{row.md}</td>
                  <td className="px-3 py-4">{row.due || "-"}</td>
                  <td className="px-3 py-4">{row.done || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
        {/* 모바일 카드 */}
        <div className="mt-6 grid min-w-0 gap-4 lg:hidden">
          {csrRows.map((row) => (
            <button key={row.id} onClick={() => setPage("csrDetail")} className="min-w-0 text-left">
              <Card className="min-w-0 p-5">
                <div className="flex items-center justify-between gap-2">
                  <Badge className={statusColor[row.status]}>{row.status}</Badge>
                  <b className="shrink-0 text-sm text-slate-700 dark:text-slate-300">{row.priority}</b>
                </div>
                <p className="mt-3 break-words text-lg font-black leading-6 text-blue-700 dark:text-cyan-300">{row.title}</p>
                <p className="mt-2 break-words text-sm text-slate-500 dark:text-slate-400">
                  {isAdmin ? `${row.company} · ` : ""}{row.id} · {row.work} · {row.manager}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <span>요청일 {row.requestDate}</span>
                  <span>요청자 {row.requester}</span>
                  <span>공수 {row.md}</span>
                  <span>완료일 {row.done || "-"}</span>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
 
// ─────────────────────────────────────────
// BCsrDetail — 요청 상세 + 카드형 스레드
// ─────────────────────────────────────────
export function BCsrDetail({ row = csrRows[2] }) {
  const [viewMode, setViewMode] = useState("customer");
  const [showAll, setShowAll] = useState(false);
  const isAdminView = viewMode === "admin";
 
  const PREVIEW_COUNT = 4;
  const visibleReplies = showAll
    ? row.replies
    : row.replies.slice(0, PREVIEW_COUNT);
  const hiddenCount = row.replies.length - PREVIEW_COUNT;
 
  const progressSteps = ["접수", "담당자 배정", "처리중", "검수요청", "완료"];
  const doneIndex =
    row.status === "완료" ? 4
    : row.status === "검수요청" ? 3
    : row.status === "처리중" ? 2
    : row.status === "접수완료" ? 1
    : 0;
 
  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-slate-50 px-3 py-10 sm:px-4">
      <div className="mx-auto max-w-6xl">
 
        {/* 상단 헤더 카드 */}
        <Card className="mb-5 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="mb-1 flex flex-wrap gap-1.5 text-xs text-slate-400">
                <span>요청번호 · {row.id}</span>
                <span>·</span>
                <span>{row.company}</span>
                <span>·</span>
                <span>담당자 · {row.manager}</span>
              </div>
              <h1 className="break-words text-xl font-bold leading-snug text-slate-900">
                {row.title}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge className={statusColor[row.status]}>{row.status}</Badge>
                <Badge className="bg-red-50 text-red-700">{row.priority}</Badge>
                <Badge className="bg-blue-50 text-blue-700">{row.work}</Badge>
                <Badge className="bg-slate-100 text-slate-600">
                  공수 {row.md}
                </Badge>
                <Badge className="bg-amber-50 text-amber-700">
                  <Lock className="mr-1 h-3 w-3" />
                  원문 수정 불가
                </Badge>
              </div>
            </div>
 
            {/* 고객/관리자 토글 */}
            <div className="flex shrink-0 gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1">
              {["customer", "admin"].map((m) => (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  className={cx(
                    "rounded-lg px-3 py-1.5 text-xs font-bold transition",
                    viewMode === m
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  {m === "customer" ? "고객 보기" : "관리자/담당자"}
                </button>
              ))}
            </div>
          </div>
        </Card>
 
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px]">
          {/* 메인 */}
          <div className="min-w-0">
            {/* 원문 카드 */}
            <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-2.5">
                <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <FileText className="h-3.5 w-3.5" />
                  고객 요청 원문 · {row.requestDate}
                </span>
                <span className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700">
                  <Lock className="h-2.5 w-2.5" />
                  수정 불가
                </span>
              </div>
              <div className="whitespace-pre-wrap break-words px-5 py-4 text-sm leading-7 text-slate-700">
                {row.body}
              </div>
              {row.attachments?.length > 0 && (
                <div className="flex flex-wrap gap-2 border-t border-slate-100 px-5 py-3">
                  {row.attachments.map((f) => (
                    <span
                      key={f.name}
                      className="flex items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600"
                    >
                      <Paperclip className="h-3 w-3" />
                      {f.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
 
            {/* 스레드 헤더 */}
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                대화 내역 · 총 {row.replies.length}건
              </p>
            </div>
 
            {/* 스레드 목록 */}
            <div className="flex flex-col gap-3">
              {visibleReplies.map((reply, idx) => {
                const isStaff = reply.role === "staff";
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    {/* 메시지 헤더 */}
                    <div
                      className={cx(
                        "flex flex-wrap items-center gap-2 border-b px-4 py-2.5",
                        isStaff
                          ? "border-blue-100 bg-blue-50"
                          : "border-slate-100 bg-slate-50"
                      )}
                    >
                      {/* 아바타 */}
                      <div
                        className={cx(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                          isStaff
                            ? "bg-blue-200 text-blue-800"
                            : "bg-indigo-100 text-indigo-700"
                        )}
                      >
                        {reply.author.slice(0, 1)}
                      </div>
                      <span
                        className={cx(
                          "text-xs font-bold",
                          isStaff ? "text-blue-700" : "text-indigo-700"
                        )}
                      >
                        {reply.author}
                      </span>
                      <span className="text-xs text-slate-400">{reply.org}</span>
                      <span className="ml-auto text-xs text-slate-400">
                        {reply.date}
                      </span>
                    </div>
 
                    {/* 메시지 본문 */}
                    <div
                      className={cx(
                        "whitespace-pre-wrap break-words px-5 py-4 text-sm leading-7 text-slate-700",
                        isStaff ? "bg-blue-50/30" : "bg-white"
                      )}
                    >
                      {reply.text}
                    </div>
 
                    {/* 이미지 */}
                    {reply.images?.length > 0 && (
                      <div
                        className={cx(
                          "flex flex-wrap gap-2 border-t border-slate-100 px-5 py-3",
                          isStaff ? "bg-blue-50/30" : "bg-white"
                        )}
                      >
                        {reply.images.map((img, i) => (
                          <div
                            key={i}
                            className="flex h-16 w-24 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                          >
                            <Image className="h-5 w-5 text-slate-400" />
                          </div>
                        ))}
                      </div>
                    )}
 
                    {/* 첨부 파일 */}
                    {reply.attachments?.length > 0 && (
                      <div
                        className={cx(
                          "flex flex-wrap gap-2 border-t border-slate-100 px-5 py-3",
                          isStaff ? "bg-blue-50/30" : "bg-white"
                        )}
                      >
                        {reply.attachments.map((f) => (
                          <span
                            key={f.name}
                            className="flex items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600"
                          >
                            <Paperclip className="h-3 w-3" />
                            {f.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
 
            {/* 더 보기 버튼 */}
            {hiddenCount > 0 && (
              <button
                onClick={() => setShowAll((v) => !v)}
                className="mx-auto mt-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 transition hover:border-blue-300 hover:text-blue-600"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="h-3.5 w-3.5" /> 접기
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3.5 w-3.5" />
                    이전 대화 {hiddenCount}건 더 보기
                  </>
                )}
              </button>
            )}
 
            {/* Reply 입력 */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {/* 툴바 */}
              <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 bg-slate-50 px-3 py-2">
                {[Bold, Italic].map((Icon, i) => (
                  <button
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-600"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}
                <div className="mx-1 h-4 w-px bg-slate-200" />
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200">
                  <List className="h-3.5 w-3.5" />
                </button>
                <div className="mx-1 h-4 w-px bg-slate-200" />
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-blue-400 hover:bg-blue-50 hover:text-blue-600">
                  <Image className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-blue-400 hover:bg-blue-50 hover:text-blue-600">
                  <Paperclip className="h-3.5 w-3.5" />
                </button>
              </div>
 
              {/* 입력 */}
              <textarea
                className="min-h-[100px] w-full resize-none border-none bg-white p-4 text-sm leading-7 text-slate-700 outline-none placeholder:text-slate-300"
                placeholder={
                  isAdminView
                    ? "고객에게 전달할 처리 의견을 입력하세요. 이미지는 Ctrl+V로 붙여넣을 수 있습니다."
                    : "추가 문의나 보완 내용을 입력하세요. 이미지는 Ctrl+V로 붙여넣을 수 있습니다."
                }
              />
 
              {/* 푸터 */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2.5">
                <span className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Paperclip className="h-3.5 w-3.5" />
                  이미지 드래그 가능
                </span>
                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700">
                  <Send className="h-3.5 w-3.5" />
                  Reply 등록
                </button>
              </div>
            </div>
          </div>
 
          {/* 사이드바 */}
          <aside className="min-w-0 space-y-4">
            {/* 타임라인 */}
            <Card className="p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                처리 타임라인
              </p>
              <div className="flex flex-col">
                {progressSteps.map((step, idx) => {
                  const done = idx <= doneIndex;
                  return (
                    <div key={step} className="relative flex gap-3">
                      {idx < progressSteps.length - 1 && (
                        <div
                          className={cx(
                            "absolute left-[9px] top-5 h-full w-px",
                            done ? "bg-blue-200" : "bg-slate-100"
                          )}
                        />
                      )}
                      <div
                        className={cx(
                          "relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          done
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-400"
                        )}
                      >
                        {done ? (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        ) : (
                          <Clock3 className="h-3 w-3" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p
                          className={cx(
                            "text-sm font-bold",
                            done ? "text-slate-800" : "text-slate-400"
                          )}
                        >
                          {step}
                        </p>
                        <p className="text-xs text-slate-400">
                          {done ? "완료" : "대기 중"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
 
            {/* 관리자 패널 or 고객 안내 */}
            {isAdminView ? (
              <Card className="p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  관리자 처리 정보
                </p>
                <div className="space-y-3">
                  {[
                    { label: "상태", type: "select", options: ["접수대기", "접수완료", "처리중", "검수요청", "완료", "취소", "보류", "검수반려"], value: row.status },
                    { label: "담당자", type: "select", options: [row.manager, "이태훈", "안상현", "전용호", "배지혁"], value: row.manager },
                    { label: "우선순위", type: "select", options: ["긴급", "상", "중", "하"], value: row.priority },
                  ].map(({ label, type, options, value }) => (
                    <div key={label}>
                      <label className="mb-1 block text-xs font-bold text-slate-400">
                        {label}
                      </label>
                      <select
                        defaultValue={value}
                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm text-slate-700 outline-none"
                      >
                        {options.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-2">
                    {[["공수(M/D)", row.md], ["완료예정일", row.due]].map(([label, val]) => (
                      <div key={label}>
                        <label className="mb-1 block text-xs font-bold text-slate-400">
                          {label}
                        </label>
                        <input
                          defaultValue={val}
                          className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm text-slate-700 outline-none"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-400">
                      완료일
                    </label>
                    <input
                      type="date"
                      defaultValue={row.done}
                      className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm text-slate-700 outline-none"
                    />
                  </div>
                  <button className="h-10 w-full rounded-xl bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700">
                    처리 정보 저장
                  </button>
                </div>
              </Card>
            ) : (
              <Card className="p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                  고객 안내
                </p>
                <div className="space-y-2.5 text-xs leading-6 text-slate-500">
                  <p>요청 등록 후 원문은 수정할 수 없습니다. 추가 문의는 Reply로 남겨주세요.</p>
                  <p>검수요청 후 7일간 회신이 없을 경우 검수완료 처리될 수 있습니다.</p>
                  <p>기존 고객은 INFOPLUS에서 요청 등록 및 처리 현황을 확인할 수 있습니다.</p>
                </div>
              </Card>
            )}
 
            {/* 처리 정보 요약 */}
            <Card className="p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                처리 정보
              </p>
              {[
                ["요청구분", row.type],
                ["업무구분", row.work],
                ["공수(M/D)", row.md],
                ["완료예정일", row.due || "-"],
                ["완료일", row.done || "-"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between border-b border-slate-100 py-2 text-xs last:border-none"
                >
                  <span className="text-slate-400">{k}</span>
                  <span className="font-bold text-slate-600">{v}</span>
                </div>
              ))}
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
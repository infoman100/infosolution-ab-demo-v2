import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Cpu, ShieldCheck, Search, Download, CheckCircle2, Clock3, } from "lucide-react";
import { Button, Badge, Card, SectionTitle, cx } from "../../components/ui.jsx";
import { company, mainSolutions, businessDomains, assets, csrRows, statusColor, customerCreateFields } from "../../data/demoData.js";
import { ACsrCreate } from "../A";

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

export function BCsrList({ role, setPage }) {
  const isAdmin = role === "admin";
  const columns = isAdmin
    ? ["요청번호", "거래처", "제목", "요청구분", "업무구분", "상태", "우선순위", "요청일자", "요청자", "담당자", "공수(M/D)", "완료예정일", "완료일"]
    : ["요청번호", "제목", "요청구분", "업무구분", "상태", "우선순위", "요청일자", "요청자", "담당자", "공수(M/D)", "완료예정일", "완료일"];

  return (
    <section className="w-full overflow-x-hidden bg-slate-950 px-3 py-10 text-white sm:px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          dark
          eyebrow={isAdmin ? "ADMIN CSR" : "CUSTOMER CSR"}
          title={isAdmin ? "CSR Command Center" : "고객 요청 현황"}
          desc="B안은 상단 대시보드와 필터는 현대적으로 구성하고, PC에서는 테이블/list형으로 한눈에 확인되게 구성합니다."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {(isAdmin
            ? [["미완료", "3420"], ["접수대기", "206"], ["처리중", "561"], ["검수요청", "1984"]]
            : [["잔여공수", "-0.3"], ["접수대기", "0"], ["진행중", "17"], ["완료", "62"]]
          ).map(([k, v]) => (
            <Card key={k} className="border-white/10 bg-white/10 p-5 text-white">
              <p className="text-sm font-black text-cyan-200">{k}</p>
              <p className="mt-2 text-3xl font-black">{v}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-6 border-white/10 bg-white/10 p-4 text-white">
          <div className="flex min-w-0 flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
              <select className="h-11 rounded-2xl border border-white/10 bg-slate-900 px-4 text-sm text-white">
                <option>요청일자</option>
              </select>
              <input className="h-11 rounded-2xl border border-white/10 bg-slate-900 px-4 text-sm text-white" value="2025-05-22" readOnly />
              <input className="h-11 rounded-2xl border border-white/10 bg-slate-900 px-4 text-sm text-white" value="2026-05-22" readOnly />
            </div>
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
              <input className="h-11 min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-900 px-4 text-sm text-white placeholder:text-slate-400" placeholder="검색어를 입력하세요" />
              <Button variant="cyan" className="h-11 shrink-0"><Search className="mr-2 h-4 w-4" />검색</Button>
              <Button variant="outlineDark" className="h-11 shrink-0"><Download className="mr-2 h-4 w-4" />Excel</Button>
            </div>
          </div>
        </Card>

        {/* PC: table/list */}
        <div className="mt-6 hidden overflow-hidden rounded-[1.6rem] border border-white/10 bg-white shadow-2xl lg:block">
          <table className="w-full border-collapse text-sm text-slate-900">
            <thead className="bg-slate-100 text-xs font-black text-slate-500">
              <tr>
                {columns.map((c) => (
                  <th key={c} className="border-b border-slate-200 px-3 py-4 text-left">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csrRows.map((row) => (
                <tr key={row.id} onClick={() => setPage("csrDetail")} className="cursor-pointer border-b border-slate-100 transition hover:bg-blue-50">
                  <td className="px-3 py-4 font-bold">{row.id}</td>
                  {isAdmin && <td className="px-3 py-4 font-bold text-blue-600">{row.company}</td>}
                  <td className="max-w-[300px] px-3 py-4 font-bold text-blue-700">{row.title}</td>
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

        {/* Mobile: card */}
        <div className="mt-6 grid min-w-0 gap-4 lg:hidden">
          {csrRows.map((row) => (
            <button key={row.id} onClick={() => setPage("csrDetail")} className="min-w-0 text-left">
              <Card className="min-w-0 border-white/10 bg-white p-5 text-slate-950 shadow-xl">
                <div className="flex items-center justify-between gap-2">
                  <Badge className={statusColor[row.status]}>{row.status}</Badge>
                  <b className="shrink-0 text-sm">{row.priority}</b>
                </div>
                <p className="mt-3 break-words text-lg font-black leading-6 text-blue-700">{row.title}</p>
                <p className="mt-2 break-words text-sm text-slate-500">{isAdmin ? `${row.company} · ` : ""}{row.id} · {row.work} · {row.manager}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-slate-500">
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

export function BCsrDetail({ row = csrRows[0] }) {
  const [viewMode, setViewMode] = React.useState("customer");
  const isAdminView = viewMode === "admin";

  const progressSteps = ["접수", "담당자 배정", "처리중", "검수요청", "완료"];
  const doneIndex =
    row.status === "완료"
      ? 4
      : row.status === "검수요청"
      ? 3
      : row.status === "처리중"
      ? 2
      : row.status === "접수완료"
      ? 1
      : 0;

  return (
    <section className="w-full overflow-x-hidden bg-slate-950 px-3 py-10 text-white sm:px-4">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <Badge className="bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20">
              CSR DETAIL
            </Badge>
            <h1 className="mt-4 break-words text-3xl font-black leading-tight md:text-5xl">
              요청 상세 / 답변 내역
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              고객은 요청 원문과 답변 내역을 확인하고 Reply를 남길 수 있으며,
              담당자/관리자는 처리 상태와 공수, 일정 정보를 관리합니다.
            </p>
          </div>

          <div className="flex w-full gap-2 rounded-2xl border border-white/10 bg-white/10 p-1 lg:w-auto">
            <button
              onClick={() => setViewMode("customer")}
              className={`flex-1 rounded-xl px-4 py-2 text-sm font-black transition lg:flex-none ${
                viewMode === "customer"
                  ? "bg-cyan-300 text-slate-950"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              고객 보기
            </button>
            <button
              onClick={() => setViewMode("admin")}
              className={`flex-1 rounded-xl px-4 py-2 text-sm font-black transition lg:flex-none ${
                viewMode === "admin"
                  ? "bg-cyan-300 text-slate-950"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              관리자/담당자 보기
            </button>
          </div>
        </div>

        <div className="grid w-full min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Card className="min-w-0 overflow-hidden border-white/10 bg-white/10 text-white shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-black text-blue-50">
                    요청번호 · {row.id}
                  </p>
                  <h2 className="mt-2 break-words text-2xl font-black leading-8 md:text-3xl">
                    {row.title}
                  </h2>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Badge className={statusColor[row.status]}>
                    {row.status}
                  </Badge>
                  <Badge className="bg-rose-100 text-rose-700">
                    {row.priority}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {[
                  ["회사명", row.company],
                  ["요청구분", row.type],
                  ["업무구분", row.work],
                  ["요청일자", row.requestDate],
                  ["요청자", row.requester],
                  ["담당자", row.manager],
                  ["공수(M/D)", row.md],
                  ["완료일", row.done || "-"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="min-w-0 rounded-2xl bg-white/10 p-4"
                  >
                    <p className="text-xs font-black text-cyan-200">
                      {label}
                    </p>
                    <p className="mt-1 break-words text-sm font-bold text-white">
                      {value || "-"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm font-black text-blue-600">
                    고객 요청 원문
                  </p>
                  <Badge className="bg-amber-100 text-amber-800">
                    원문 수정 불가
                  </Badge>
                </div>
                <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-slate-700">
                  {row.body}
                </p>
                <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs font-bold leading-6 text-amber-800">
                  등록된 요청 원문은 수정할 수 없습니다. 추가 문의나 보완
                  내용은 Reply로 남겨 이력을 누적합니다.
                </p>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-black text-white">
                  고객/담당자 답변 내역
                </p>
                <div className="space-y-3">
                  {row.replies.map((reply, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl p-4 ${
                        reply.author === "담당자"
                          ? "bg-blue-50 text-slate-950"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <div className="flex flex-col gap-1 text-xs font-black sm:flex-row sm:items-center sm:justify-between">
                        <span
                          className={
                            reply.author === "담당자"
                              ? "text-blue-700"
                              : "text-cyan-200"
                          }
                        >
                          {reply.author}
                        </span>
                        <span className="text-slate-400">{reply.date}</span>
                      </div>
                      <p className="mt-2 break-words text-sm leading-7">
                        {reply.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-4">
                <p className="mb-2 text-sm font-black text-white">
                  Reply 작성
                </p>
                <textarea
                  className="h-28 w-full rounded-xl border border-white/10 bg-white p-3 text-sm text-slate-950 outline-none"
                  placeholder={
                    isAdminView
                      ? "고객에게 전달할 처리 의견을 입력하세요."
                      : "추가 문의 또는 보완 내용을 입력하세요."
                  }
                />
                <div className="mt-3 flex justify-end">
                  <Button variant="cyan">Reply 등록</Button>
                </div>
              </div>
            </div>
          </Card>

          <aside className="min-w-0 space-y-5">
            <Card className="border-white/10 bg-white/10 p-5 text-white">
              <p className="text-lg font-black">처리 진행 상태</p>
              <div className="mt-5 space-y-4">
                {progressSteps.map((step, idx) => {
                  const done = idx <= doneIndex;

                  return (
                    <div key={step} className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          done
                            ? "bg-cyan-300 text-slate-950"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {done ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Clock3 className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-black">{step}</p>
                        <p className="text-xs text-slate-400">
                          {done ? "진행 완료" : "대기 중"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {isAdminView ? (
              <Card className="border-white/10 bg-white p-5 text-slate-950 shadow-2xl">
                <div className="mb-5">
                  <p className="text-lg font-black">관리자 처리 정보</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    담당자/관리자는 처리 상태, 공수, 일정 정보를 관리합니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-black text-slate-500">
                      상태
                    </label>
                    <select
                      defaultValue={row.status}
                      className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                    >
                      <option>접수대기</option>
                      <option>접수완료</option>
                      <option>처리중</option>
                      <option>검수요청</option>
                      <option>완료</option>
                      <option>취소</option>
                      <option>보류</option>
                      <option>검수반려</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-black text-slate-500">
                      담당자
                    </label>
                    <select
                      defaultValue={row.manager}
                      className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                    >
                      <option>{row.manager}</option>
                      <option>이태훈</option>
                      <option>안상현</option>
                      <option>전용호</option>
                      <option>배지혁</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-black text-slate-500">
                        우선순위
                      </label>
                      <select
                        defaultValue={row.priority}
                        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                      >
                        <option>긴급</option>
                        <option>상</option>
                        <option>중</option>
                        <option>하</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-black text-slate-500">
                        공수(M/D)
                      </label>
                      <input
                        defaultValue={row.md}
                        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-black text-slate-500">
                      완료예정일
                    </label>
                    <input
                      type="date"
                      className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-black text-slate-500">
                      완료일
                    </label>
                    <input
                      type="date"
                      defaultValue={row.done || ""}
                      className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                    />
                  </div>

                  <Button variant="primary" className="h-11 w-full">
                    처리 정보 저장
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="border-white/10 bg-white p-5 text-slate-950 shadow-2xl">
                <p className="text-lg font-black">고객 안내</p>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <p>
                    요청 등록 후 원문은 수정할 수 없습니다. 추가 문의는
                    Reply로 남겨주세요.
                  </p>
                  <p>
                    검수요청 후 7일간 회신이 없을 경우 검수완료 처리될 수
                    있습니다.
                  </p>
                  <p>
                    기존 고객은 INFOPLUS에서 요청 등록 및 처리 현황을 확인할
                    수 있습니다.
                  </p>
                </div>
              </Card>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

export function BCsrCreate() {
  return <ACsrCreate />;
}

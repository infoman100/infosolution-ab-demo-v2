import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Cpu, ShieldCheck, Search, Download } from "lucide-react";
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
          <Card className="p-7 shadow-xl">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-blue-600">Process Redesign</p>
            <div className="grid gap-4 md:grid-cols-5">
              {detail.flow.map((step, idx) => (
                <div key={step} className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-5 text-center">
                  <p className="text-xs font-black text-blue-400">STEP {idx + 1}</p>
                  <p className="mt-3 font-black text-slate-950">{step}</p>
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
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {assets.mesScreens.map((src, idx) => <Card key={src} className="overflow-hidden p-3 shadow-xl"><img src={src} alt={`MES 화면 ${idx + 1}`} className="h-56 w-full rounded-2xl object-contain" /></Card>)}
      </div>
    );
  }
  if (detail.assetType === "mobile") {
    return (
      <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <Card className="overflow-hidden p-3 shadow-xl"><img src={assets.mobilePda} alt="WMS PDA" className="h-80 w-full rounded-2xl object-cover" /></Card>
        <Card className="p-8 shadow-xl">
          <h3 className="text-2xl font-black">현장 처리 흐름</h3>
          {["바코드 스캔", "LOT 확인", "입출고 처리", "재고 반영"].map((s, i) => <div key={s} className="mt-4 rounded-2xl bg-slate-50 p-4 font-black">{i + 1}. {s}</div>)}
        </Card>
      </div>
    );
  }
  return <Card className="mt-12 flex h-72 items-center justify-center bg-slate-50 p-6 text-center font-black text-slate-500 shadow-xl">Modern Diagram Redesign</Card>;
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
  return (
    <section className="w-full overflow-x-hidden bg-slate-950 px-3 py-10 text-white sm:px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle dark eyebrow={isAdmin ? "ADMIN CSR" : "CUSTOMER CSR"} title={isAdmin ? "CSR Command Center" : "고객 요청 현황"} desc="B안은 고객지원 목록을 대시보드와 모바일 카드 중심으로 재구성합니다." />
        <div className="grid gap-4 md:grid-cols-4">
          {(isAdmin ? [["미완료", "3420"], ["접수대기", "206"], ["처리중", "561"], ["검수요청", "1984"]] : [["잔여공수", "-0.3"], ["접수대기", "0"], ["진행중", "17"], ["완료", "62"]]).map(([k, v]) => <Card key={k} className="border-white/10 bg-white/10 p-5 text-white"><p className="text-sm font-black text-cyan-200">{k}</p><p className="mt-2 text-3xl font-black">{v}</p></Card>)}
        </div>
        <div className="mt-6 flex min-w-0 flex-col gap-2 sm:flex-row">
          <input className="h-12 min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/10 px-4 text-white placeholder:text-slate-400" placeholder="검색어를 입력하세요" />
          <Button variant="cyan" className="h-12"><Search className="mr-2 h-4 w-4" />검색</Button>
          <Button variant="outlineDark" className="h-12"><Download className="mr-2 h-4 w-4" />Excel</Button>
        </div>
        <div className="mt-6 grid gap-4">
          {csrRows.map((row) => <button key={row.id} onClick={() => setPage("csrDetail")} className="min-w-0 text-left"><Card className="min-w-0 border-white/10 bg-white p-5 text-slate-950 shadow-xl"><div className="flex items-center justify-between gap-2"><Badge className={statusColor[row.status]}>{row.status}</Badge><b>{row.priority}</b></div><p className="mt-3 break-words text-lg font-black text-blue-700">{row.title}</p><p className="mt-2 text-sm text-slate-500">{isAdmin ? `${row.company} · ` : ""}{row.id} · {row.work} · {row.manager}</p></Card></button>)}
        </div>
      </div>
    </section>
  );
}

export function BCsrDetail({ row = csrRows[0] }) {
  return (
    <section className="w-full overflow-x-hidden bg-slate-950 px-3 py-10 text-white sm:px-4">
      <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-6 lg:grid-cols-[1fr_360px]">
        <Card className="min-w-0 overflow-hidden border-white/10 bg-white/10 text-white">
          <div className="bg-blue-600 px-5 py-4">
            <p className="text-sm font-black opacity-80">요청상세 · {row.id}</p>
            <h1 className="mt-1 break-words text-2xl font-black leading-8">{row.title}</h1>
          </div>
          <div className="p-5">
            <div className="grid gap-3 md:grid-cols-2">
              {[["회사명", row.company], ["요청구분", row.type], ["업무구분", row.work], ["우선순위", row.priority], ["요청일자", row.requestDate], ["요청자", row.requester], ["담당자", row.manager], ["공수(M/D)", row.md]].map(([k, v]) => <div key={k} className="rounded-2xl bg-white/10 p-4 text-sm"><p className="font-black text-cyan-200">{k}</p><p className="mt-1 break-words font-bold">{v || "-"}</p></div>)}
            </div>
            <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950">
              <p className="text-sm font-black text-blue-600">고객 요청 원문</p>
              <p className="mt-3 break-words text-sm leading-7 text-slate-700">{row.body}</p>
            </div>
            <div className="mt-6 space-y-3">
              {row.replies.map((reply, idx) => <div key={idx} className={cx("rounded-2xl p-4", reply.author === "담당자" ? "bg-blue-50 text-slate-950" : "bg-white/10")}><div className="flex items-center justify-between text-xs font-black"><span>{reply.author}</span><span className="text-slate-400">{reply.date}</span></div><p className="mt-2 break-words text-sm leading-7">{reply.text}</p></div>)}
            </div>
          </div>
        </Card>
        <Card className="border-white/10 bg-white/10 p-5 text-white">
          <p className="text-lg font-black">처리 진행 상태</p>
          <div className="mt-5 space-y-4">
            {["접수", "담당자 배정", "처리중", "검수요청", "완료"].map((s, i) => <div key={s} className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-blue-600" /><div><p className="text-sm font-black">{s}</p><p className="text-xs text-slate-400">{i < 5 ? "진행 완료" : "대기 중"}</p></div></div>)}
          </div>
        </Card>
      </div>
    </section>
  );
}

export function BCsrCreate() {
  return <ACsrCreate />;
}

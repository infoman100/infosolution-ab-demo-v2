import React, { useState } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button, cx } from "./components/ui.jsx";
import { company, solutionDetails, csrRows } from "./data/demoData.js";
import { AHome, ACompany, ABusiness, ASolutions, ASolutionDetail, AInfoPlus, ACsrList, ACsrCreate, ACsrDetail } from "./variants/A";
import { BHome, BCompany, BBusiness, BSolutions, BSolutionDetail, BInfoPlus, BCsrList, BCsrCreate, BCsrDetail } from "./variants/B";

function Header({ variant }) {
  const [open, setOpen] = useState(false);
  const modern = variant === "b";
  const nav = ["회사소개", "솔루션", "고객지원", "기술지원", "인재채용"];

  return (
    <header className={cx("sticky top-0 z-50 border-b backdrop-blur", modern ? "border-white/10 bg-slate-950/80 text-white" : "border-slate-200 bg-white/90 text-slate-950")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">IS</div>
          <div>
            <div className="text-base font-black leading-none">INFO SOLUTION</div>
            <div className={cx("text-[11px] font-semibold", modern ? "text-cyan-200" : "text-slate-500")}>
              {variant === "a" ? "Static Landing React" : "Modern React Experience"}
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item} href="#" className={cx("text-sm font-black", modern ? "text-slate-200 hover:text-cyan-300" : "text-slate-700 hover:text-blue-600")}>{item}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className={cx("border-t px-4 py-3 md:hidden", modern ? "border-white/10 bg-slate-950" : "border-slate-200 bg-white")}>
          {nav.map((item) => <a key={item} href="#" className="block rounded-xl px-3 py-3 text-sm font-black">{item}</a>)}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 text-sm text-slate-500 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-lg font-black text-slate-950">INFO SOLUTION</p>
          <p className="mt-3">주소: {company.address}</p>
          <p className="mt-1">대표전화: {company.phone} | FAX: {company.fax} | 대표메일: {company.email}</p>
        </div>
        <div className="grid gap-2 md:text-right">
          <p className="flex items-center gap-2 md:justify-end"><MapPin className="h-4 w-4" /> 4호선 안산역 2번 출구 도보 5분</p>
          <p className="flex items-center gap-2 md:justify-end"><Phone className="h-4 w-4" /> {company.phone}</p>
          <p className="flex items-center gap-2 md:justify-end"><Mail className="h-4 w-4" /> {company.email}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [variant, setVariant] = useState("b");
  const [mode, setMode] = useState("prototype");
  const [page, setPage] = useState("home");

  const pages = [
    ["home", "메인"],
    ["company", "회사소개"],
    ["business", "사업영역"],
    ["solutions", "솔루션"],
    ["mes", "MES"],
    ["mobile", "Mobile"],
    ["erp", "ERP"],
    ["infoplus", "INFOPLUS"],
    ["csrCustomer", "고객 CSR"],
    ["csrAdmin", "관리자 CSR"],
    ["csrCreate", "요청등록"],
    ["csrDetail", "요청상세"],
  ];

  const V = variant === "a"
    ? {
        Home: AHome, Company: ACompany, Business: ABusiness, Solutions: ASolutions,
        SolutionDetail: ASolutionDetail, InfoPlus: AInfoPlus, CsrList: ACsrList,
        CsrCreate: ACsrCreate, CsrDetail: ACsrDetail
      }
    : {
        Home: BHome, Company: BCompany, Business: BBusiness, Solutions: BSolutions,
        SolutionDetail: BSolutionDetail, InfoPlus: BInfoPlus, CsrList: BCsrList,
        CsrCreate: BCsrCreate, CsrDetail: BCsrDetail
      };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <div className="sticky top-0 z-[60] border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">INFO SOLUTION RENEWAL DEMO</p>
            <h1 className="text-lg font-black">A안: 정적 랜딩 React형 / B안: Modern React형</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button active={variant === "a"} onClick={() => setVariant("a")} variant="dark">A안 랜딩형</Button>
            <Button active={variant === "b"} onClick={() => setVariant("b")} variant="dark">B안 Modern React형</Button>
            <Button active={mode === "prototype"} onClick={() => setMode("prototype")}>프로토타입</Button>
            <Button active={mode === "production"} onClick={() => setMode("production")}>개발형</Button>
          </div>
        </div>
        <div className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto pb-1">
          {pages.map(([key, label]) => (
            <button key={key} onClick={() => setPage(key)} className={cx("whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-black transition", page === key ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200")}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <Header variant={variant} />

      <main>
        {page === "home" && <V.Home mode={mode} setPage={setPage} />}
        {page === "company" && <V.Company />}
        {page === "business" && <V.Business setPage={setPage} />}
        {page === "solutions" && <V.Solutions setPage={setPage} />}
        {page === "mes" && <V.SolutionDetail detail={solutionDetails.mes} />}
        {page === "mobile" && <V.SolutionDetail detail={solutionDetails.mobile} />}
        {page === "erp" && <V.SolutionDetail detail={solutionDetails.erp} />}
        {page === "infoplus" && <V.InfoPlus setPage={setPage} />}
        {page === "csrCustomer" && <V.CsrList role="customer" setPage={setPage} />}
        {page === "csrAdmin" && <V.CsrList role="admin" setPage={setPage} />}
        {page === "csrCreate" && <V.CsrCreate />}
        {page === "csrDetail" && <V.CsrDetail row={csrRows[0]} />}
      </main>

      <Footer />
    </div>
  );
}

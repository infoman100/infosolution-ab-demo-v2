import React from "react";
import { ArrowRight, Search, Download, Plus, X, CheckCircle2, Clock3 } from "lucide-react";
import { Button, Badge, Card, SectionTitle, cx } from "../../components/ui.jsx";
import {
  company,
  landingSections,
  mainSolutions,
  businessDomains,
  csrRows,
  statusColor,
  customerCreateFields,
  assets,
} from "../../data/demoData.js";

function ASection({ title, desc }) {
  return (
    <Card className="p-7">
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
    </Card>
  );
}

export function AHome({ mode, setPage }) {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="bg-blue-100 text-blue-700">A안 · 정적 랜딩페이지 React 정리형</Badge>
            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              제조업의 모든 데이터를<br />
              하나의 흐름으로 연결합니다
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              수석님 개선안의 랜딩페이지 흐름을 기반으로, React 컴포넌트 구조와 반응형 UI를 적용한 안정적인 소개형 리뉴얼안입니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" className="h-12 px-6" onClick={() => setPage("solutions")}>
                솔루션 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="h-12 px-6" onClick={() => setPage("infoplus")}>INFOPLUS 접속</Button>
            </div>
          </div>
          <Card className="overflow-hidden shadow-soft">
            <div className="bg-blue-700 px-6 py-4 text-xl font-black text-white">Manufacturing IT Landing</div>
            <div className="grid gap-0 md:grid-cols-[1fr_180px]">
              <div className="flex min-h-[300px] items-center justify-center bg-white p-8 text-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">ERP · MES · WMS · CMMS</p>
                  <p className="mt-4 text-3xl font-black text-slate-950">제조 현장과 경영 정보를 연결</p>
                  <p className="mt-4 text-slate-500">표준 프로세스 · 현장 데이터 · 운영 고도화</p>
                </div>
              </div>
              <div className="bg-slate-950 p-5 text-white">
                <p className="font-black">고객지원</p>
                <p className="mt-2 text-sm text-slate-300">기존 고객은 INFOPLUS를 통해 요청을 등록하고 처리 현황을 확인합니다.</p>
                <Button className="mt-6 w-full bg-white text-slate-950" onClick={() => setPage("csrCustomer")}>CSR 보기</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="LANDING FLOW" title="정적 랜딩페이지 흐름을 깔끔하게 정리" desc="A안은 과한 모션보다 섹션 흐름, 카드 정리, 신뢰감 있는 B2B 톤을 우선합니다." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {landingSections.map((s) => <ASection key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="SOLUTIONS" title="주요 솔루션" desc="ERP, MES, POP, WMS, SPC, MPS/MRP, CMMS, Consulting, Operation을 카드형으로 정리합니다." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {mainSolutions.map((item) => {
              const Icon = item.icon;
              return (
                <button key={item.code} onClick={() => setPage(item.code === "MES" ? "mes" : item.code === "ERP" ? "erp" : item.code === "WMS" ? "mobile" : "solutions")} className="text-left">
                  <Card className="h-full p-6 transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-5 flex items-center justify-between">
                      <Badge className="bg-blue-50 text-blue-700">{item.code}</Badge>
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </Card>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ACompany() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="ABOUT" title={company.message} desc={company.description} />
        <Card className="mx-auto max-w-4xl overflow-hidden">
          {[["회사명", company.koreanName], ["대표이사", company.ceo], ["설립", company.founded], ["주소", company.address], ["대표전화", company.phone], ["대표메일", company.email]].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[120px_1fr] border-b border-slate-200 last:border-b-0">
              <div className="bg-slate-50 px-5 py-4 text-sm font-black text-slate-600">{k}</div>
              <div className="px-5 py-4 text-sm font-bold text-slate-800">{v}</div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}

export function ABusiness({ setPage }) {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="BUSINESS AREA" title="인포솔루션 사업영역" desc="기존 사업영역 도식의 의미를 살리되, 더 깔끔한 랜딩페이지 섹션으로 재구성합니다." />
        <Card className="p-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-blue-700 text-center text-xl font-black text-white shadow-lg">INFO<br />SOLUTION</div>
            <div className="grid w-full gap-4 md:grid-cols-5">
              {businessDomains.map((item) => (
                <button key={item.code} onClick={() => setPage(item.code === "MES" ? "mes" : item.code === "ERP" ? "erp" : item.code === "WMS" ? "mobile" : "solutions")} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:border-blue-400 hover:bg-blue-50">
                  <p className="text-2xl font-black text-blue-700">{item.code}</p>
                  <p className="mt-2 text-sm font-black">{item.title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function ASolutions({ setPage }) {
  return (
    <section className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="SOLUTIONS" title="솔루션 소개" desc="정적 랜딩페이지 형태로 주요 솔루션을 간결하게 보여줍니다." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mainSolutions.slice(0, 6).map((item) => (
            <button key={item.code} onClick={() => setPage(item.code === "MES" ? "mes" : item.code === "ERP" ? "erp" : item.code === "WMS" ? "mobile" : "solutions")} className="text-left">
              <Card className="h-full p-6">
                <p className="text-2xl font-black text-blue-700">{item.code}</p>
                <p className="mt-2 font-black">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ASolutionDetail({ detail }) {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={detail.code} title={detail.title} desc={detail.summary} />
        <Card className="p-8">
          <h3 className="text-2xl font-black">{detail.subtitle}</h3>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {detail.flow.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                <p className="text-xs font-black text-blue-500">STEP {idx + 1}</p>
                <p className="mt-2 font-black text-slate-950">{step}</p>
              </div>
            ))}
          </div>
        </Card>
        <AssetGallery detail={detail} compact />
      </div>
    </section>
  );
}

function AssetGallery({ detail }) {
  if (detail.assetType === "mes") {
    return (
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {assets.mesScreens.map((src, idx) => (
          <Card key={src} className="overflow-hidden p-3">
            <img src={src} alt={`MES POP 화면 ${idx + 1}`} className="h-56 w-full rounded-2xl object-contain" />
          </Card>
        ))}
      </div>
    );
  }
  if (detail.assetType === "mobile") {
    return (
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card className="overflow-hidden p-3"><img src={assets.mobilePda} alt="WMS PDA 사용 이미지" className="h-72 w-full rounded-2xl object-cover" /></Card>
        <Card className="overflow-hidden p-3"><img src={assets.mobilePhoto} alt="모바일 현장 이미지" className="h-72 w-full rounded-2xl object-cover" /></Card>
      </div>
    );
  }
  return <Card className="mt-8 flex h-64 items-center justify-center bg-slate-50 p-6 text-center font-black text-slate-500">리디자인 도식 영역</Card>;
}

export function AInfoPlus({ setPage }) {
  return (
    <section className="bg-slate-100 px-4 py-20">
      <div className="mx-auto max-w-md">
        <Card className="overflow-hidden">
          <div className="bg-blue-700 px-6 py-5 text-center text-2xl font-black text-white">INFOPLUS</div>
          <div className="p-7">
            <p className="text-center text-sm text-slate-500">고객지원 포털 로그인</p>
            <div className="mt-6 space-y-3">
              <input className="h-11 w-full rounded border border-slate-300 px-3" placeholder="아이디" />
              <input className="h-11 w-full rounded border border-slate-300 px-3" placeholder="비밀번호" type="password" />
              <Button variant="primary" className="h-11 w-full" onClick={() => setPage("csrCustomer")}>LOGIN</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function ACsrList({ role, setPage }) {
  const isAdmin = role === "admin";
  const columns = isAdmin
    ? ["요청번호", "거래처", "제목", "요청구분", "업무구분", "상태", "우선순위", "요청일자", "요청자", "담당자", "공수(M/D)", "완료예정일", "완료일"]
    : ["요청번호", "제목", "요청구분", "업무구분", "상태", "우선순위", "요청일자", "요청자", "담당자", "공수(M/D)", "완료예정일", "완료일"];
  return (
    <section className="w-full overflow-x-hidden bg-white px-3 py-10 sm:px-4">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="min-w-0">
          <Card className="p-5">
            <p className="text-sm font-black">{isAdmin ? "관리자 현황" : "시노펙스(베트남)"}</p>
            <div className="mt-5 space-y-3 text-sm">
              {(isAdmin ? [["미완료", "3420건"], ["접수대기", "206건"], ["처리중", "561건"], ["검수요청", "1984건"]] : [["잔여공수(M/D)", "-0.3"], ["접수대기", "0건"], ["진행중", "17건"], ["완료", "62건"]]).map(([k, v]) => <div key={k} className="flex justify-between"><span>{k}</span><b>{v}</b></div>)}
            </div>
          </Card>
          <div className="mt-4 space-y-2">
            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">요청 등록 매뉴얼</Button>
            <Button className="w-full">비밀번호 변경</Button>
            <Button className="w-full">LOGOUT</Button>
            <Button className="w-full" variant="primary" onClick={() => setPage("csrCreate")}>요청등록</Button>
          </div>
        </aside>
        <CsrTable isAdmin={isAdmin} columns={columns} setPage={setPage} />
      </div>
    </section>
  );
}

function CsrTable({ isAdmin, columns, setPage }) {
  return (
    <div className="min-w-0">
      <Card className="min-w-0 p-5">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap gap-2">
            <select className="h-10 rounded-xl border border-slate-200 px-3 text-sm"><option>요청일자</option></select>
            <input className="h-10 rounded-xl border border-slate-200 px-3 text-sm" value="2025-05-22" readOnly />
            <input className="h-10 rounded-xl border border-slate-200 px-3 text-sm" value="2026-05-22" readOnly />
          </div>
          <Button className="bg-green-600 text-white hover:bg-green-700"><Download className="mr-2 h-4 w-4" />엑셀 다운로드</Button>
        </div>
        <div className="mt-4 flex min-w-0 flex-col gap-2 sm:flex-row">
          <input className="h-10 min-w-0 flex-1 rounded-xl border border-slate-200 px-3 text-sm" placeholder="검색어를 입력하세요" />
          <Button variant="primary" className="shrink-0"><Search className="h-4 w-4" /></Button>
        </div>
      </Card>

      <div className="mt-5 hidden overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white lg:block">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-50 text-xs font-black text-slate-500"><tr>{columns.map((c) => <th key={c} className="border-b px-3 py-3 text-left">{c}</th>)}</tr></thead>
          <tbody>
            {csrRows.map((row) => (
              <tr key={row.id} onClick={() => setPage("csrDetail")} className="cursor-pointer border-b hover:bg-blue-50">
                <td className="px-3 py-3 font-bold">{row.id}</td>
                {isAdmin && <td className="px-3 py-3 text-blue-600">{row.company}</td>}
                <td className="max-w-[260px] px-3 py-3 text-blue-600">{row.title}</td>
                <td className="px-3 py-3">{row.type}</td>
                <td className="px-3 py-3">{row.work}</td>
                <td className="px-3 py-3"><Badge className={statusColor[row.status]}>{row.status}</Badge></td>
                <td className="px-3 py-3">{row.priority}</td>
                <td className="px-3 py-3">{row.requestDate}</td>
                <td className="px-3 py-3">{row.requester}</td>
                <td className="px-3 py-3">{row.manager}</td>
                <td className="px-3 py-3 text-red-500">{row.md}</td>
                <td className="px-3 py-3">{row.due}</td>
                <td className="px-3 py-3">{row.done}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid min-w-0 gap-3 lg:hidden">
        {csrRows.map((row) => (
          <button key={row.id} onClick={() => setPage("csrDetail")} className="min-w-0 text-left">
            <Card className="min-w-0 p-5">
              <div className="flex items-center justify-between gap-2">
                <Badge className={statusColor[row.status]}>{row.status}</Badge>
                <b className="shrink-0 text-sm">{row.priority}</b>
              </div>
              <p className="mt-3 break-words font-black leading-6 text-blue-600">{row.title}</p>
              <p className="mt-2 break-words text-sm text-slate-500">{row.id} · {row.work} · {row.manager}</p>
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
  );
}

export function ACsrDetail({ row = csrRows[0] }) {
  return <CsrDetailBase row={row} modern={false} />;
}
export function ACsrCreate() {
  return <CsrCreateBase />;
}

function CsrDetailBase({ row, modern }) {
  return (
    <section className={cx("w-full overflow-x-hidden px-3 py-10 sm:px-4", modern ? "bg-slate-950 text-white" : "bg-white text-slate-950")}>
      <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-6 lg:grid-cols-[1fr_360px]">
        <Card className={cx("min-w-0 overflow-hidden", modern ? "border-white/10 bg-white/10 text-white" : "")}>
          <div className={cx("px-5 py-4", modern ? "bg-blue-600" : "bg-blue-700 text-white")}>
            <p className="text-sm font-black opacity-80">요청상세 · {row.id}</p>
            <h1 className="mt-1 break-words text-2xl font-black leading-8">{row.title}</h1>
          </div>
          <div className="p-5">
            <div className="grid gap-3 md:grid-cols-2">
              {[["회사명", row.company], ["요청구분", row.type], ["업무구분", row.work], ["우선순위", row.priority], ["요청일자", row.requestDate], ["요청자", row.requester], ["담당자", row.manager], ["공수(M/D)", row.md]].map(([k, v]) => (
                <div key={k} className={cx("rounded-2xl p-4 text-sm", modern ? "bg-white/10" : "bg-slate-50")}>
                  <p className={cx("font-black", modern ? "text-cyan-200" : "text-slate-500")}>{k}</p>
                  <p className="mt-1 break-words font-bold">{v || "-"}</p>
                </div>
              ))}
            </div>
            <div className={cx("mt-5 rounded-2xl p-5", modern ? "bg-white text-slate-950" : "bg-slate-50")}>
              <p className="text-sm font-black text-blue-600">고객 요청 원문</p>
              <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-slate-700">{row.body}</p>
              <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs font-bold text-amber-800">등록된 요청 원문은 수정할 수 없으며, 추가 내용은 댓글/Reply로 누적됩니다.</p>
            </div>
            <div className="mt-6">
              <p className="mb-3 text-sm font-black">고객/담당자 답변 내역</p>
              <div className="space-y-3">
                {row.replies.map((reply, idx) => (
                  <div key={idx} className={cx("rounded-2xl p-4", reply.author === "담당자" ? "bg-blue-50 text-slate-950" : modern ? "bg-white/10" : "bg-slate-50")}>
                    <div className="flex items-center justify-between gap-2 text-xs font-black">
                      <span className={reply.author === "담당자" ? "text-blue-700" : modern ? "text-cyan-200" : "text-slate-600"}>{reply.author}</span>
                      <span className="text-slate-400">{reply.date}</span>
                    </div>
                    <p className="mt-2 break-words text-sm leading-7">{reply.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
        <aside className="min-w-0">
          <Card className={cx("p-5", modern ? "border-white/10 bg-white/10 text-white" : "")}>
            <p className="text-lg font-black">처리 진행 상태</p>
            <div className="mt-5 space-y-4">
              {["접수", "담당자 배정", "처리중", "검수요청", "완료"].map((step, idx) => {
                const doneIndex = row.status === "완료" ? 4 : row.status === "검수요청" ? 3 : row.status === "처리중" ? 2 : 1;
                const done = idx <= doneIndex;
                return (
                  <div key={step} className="flex items-center gap-3">
                    <div className={cx("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", done ? "bg-blue-600 text-white" : modern ? "bg-white/10 text-slate-400" : "bg-slate-100 text-slate-400")}>
                      {done ? <CheckCircle2 className="h-4 w-4" /> : <Clock3 className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-black">{step}</p>
                      <p className={cx("text-xs", modern ? "text-slate-400" : "text-slate-500")}>{done ? "진행 완료" : "대기 중"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </aside>
      </div>
    </section>
  );
}

function CsrCreateBase() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between bg-blue-700 px-6 py-4 text-white">
            <h1 className="text-2xl font-black">요청등록</h1>
            <X className="h-8 w-8 text-orange-500" />
          </div>
          <div className="p-6">
            <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-slate-700"><b className="text-blue-700">요구사항</b>을 자세히 등록해 주시면 신속하게 처리 됩니다.</div>
            <div className="grid gap-4 md:grid-cols-2">
              {customerCreateFields.map(([label, value, type]) => (
                <div key={label} className="grid grid-cols-[120px_1fr] items-center gap-3 text-sm">
                  <label className="font-black text-slate-600">{label}</label>
                  {type === "readonly" && <input className="h-10 min-w-0 rounded-xl border border-slate-200 bg-slate-100 px-3 text-slate-500" value={value} readOnly />}
                  {type === "input" && <input className="h-10 min-w-0 rounded-xl border border-slate-200 px-3" />}
                  {type === "select" && <select className="h-10 min-w-0 rounded-xl border border-slate-200 px-3"><option>{value}</option></select>}
                  {type === "checkbox" && <label className="flex items-center gap-2"><input type="checkbox" />{value}</label>}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-black text-slate-600">요청 내용</label>
              <textarea className="h-56 w-full rounded-2xl border border-slate-200 p-4" placeholder="요청 내용을 입력하세요" />
            </div>
            <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-800">등록된 요청 내용은 수정할 수 없으며, 추가 문의나 보완 내용은 댓글로 남길 수 있습니다.</div>
            <div className="mt-6 flex justify-center"><Button variant="primary" className="h-12 px-10"><Plus className="mr-2 h-4 w-4" />요청등록</Button></div>
          </div>
        </Card>
      </div>
    </section>
  );
}

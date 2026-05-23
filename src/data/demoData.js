import {
  Monitor,
  Building2,
  LayoutDashboard,
  Factory,
  Cpu,
  ClipboardList,
  CheckCircle2,
  Boxes,
  Wrench,
  Layers3,
} from "lucide-react";

export const assets = {
  logo: "/src/assets/ci.png",
  mesScreens: ["/src/assets/pop_01.png", "/src/assets/pop_02.png", "/src/assets/pop_03.png"],
  mobilePda: "/src/assets/mobile_img_03.jpg",
  mobilePhoto: "/src/assets/mobile_img_02.jpg",
};

export const company = {
  name: "INFO SOLUTION",
  koreanName: "주식회사 인포솔루션",
  ceo: "신만재",
  founded: "2002년 03월 01일",
  address: "경기도 안산시 단원구 신길동 1229 리드 스마트스퀘어 1367호 ~ 1369호",
  phone: "031-346-3700",
  fax: "031-346-3701",
  email: "pmo@infosolution.co.kr",
  message: "제조 현장을 이해하고 운영까지 책임지는 IT 파트너",
  description:
    "인포솔루션은 제조업에 특화된 ERP, MES, POP, WMS, SPC, MPS/MRP, CMMS 솔루션을 기반으로 표준 프로세스 수립, 현장 데이터 연결, 오픈 안정화와 운영 고도화까지 함께합니다.",
};

export const landingSections = [
  { title: "회사소개", desc: "제조업에 특화된 IT 솔루션 구축과 운영 경험을 기반으로 고객사의 업무 흐름을 이해합니다." },
  { title: "솔루션", desc: "ERP, MES, WMS, CMMS, PLM 등 제조 운영 전반을 연결하는 솔루션을 제공합니다." },
  { title: "고객지원", desc: "INFOPLUS/CSR 포털을 통해 요청 등록, 처리 현황, 답변 이력을 확인할 수 있습니다." },
  { title: "도입 프로세스", desc: "업무 진단, 요건 정의, 구축, 오픈 안정화, 운영 고도화까지 단계적으로 지원합니다." },
];

export const mainSolutions = [
  {
    code: "ERP",
    title: "통합 경영관리",
    desc: "인사·회계·원가·구매·영업까지 전사 자원을 단일 시스템으로 통합 관리합니다.",
    tags: ["재무/관리회계", "구매/영업", "인사/급여"],
    icon: LayoutDashboard,
  },
  {
    code: "MES",
    title: "제조 실행 시스템",
    desc: "작업지시·실적·재공·품질을 실시간 수집하여 공장 가시성과 통제력을 확보합니다.",
    tags: ["실적/재공", "로트/추적", "설비 인터페이스"],
    icon: Factory,
  },
  {
    code: "POP",
    title: "현장 정보 시스템",
    desc: "작업자·설비·바코드 단말로 현장의 이벤트를 즉시 수집·전송합니다.",
    tags: ["HMI/터치 단말", "바코드/RFID", "설비 PLC 연계"],
    icon: Monitor,
  },
  {
    code: "WMS",
    title: "창고/물류 관리",
    desc: "입출고·재고·로케이션·피킹까지 물류 흐름을 데이터 모델로 관리합니다.",
    tags: ["입출고/재고", "로케이션", "SCM 연계"],
    icon: Boxes,
  },
  {
    code: "SPC",
    title: "통계적 공정관리",
    desc: "관리도·공정능력 분석으로 품질 변동을 사전에 탐지하고 개선 포인트를 찾습니다.",
    tags: ["X-bar/R 관리도", "Cp/Cpk", "이상 알림"],
    icon: Cpu,
  },
  {
    code: "MPS/MRP",
    title: "생산계획 / 자재소요",
    desc: "수요·생산·자재를 동기화하여 결품과 과잉 없이 안정적인 납기를 달성합니다.",
    tags: ["판매계획 연계", "BOM/Routing", "능력 시뮬레이션"],
    icon: ClipboardList,
  },
  {
    code: "CMMS",
    title: "설비 보전 관리",
    desc: "예방·예지보전 계획으로 설비 가동률을 높이고 비계획 정지를 줄입니다.",
    tags: ["점검/이력", "예방보전", "스페어 관리"],
    icon: Wrench,
  },
  {
    code: "Consulting",
    title: "스마트팩토리 컨설팅",
    desc: "현황 진단·요건 정의·로드맵·변화관리까지 도입 성공률을 높이는 컨설팅을 제공합니다.",
    tags: ["AS-IS/TO-BE", "마스터플랜", "변화관리"],
    icon: Building2,
  },
  {
    code: "Operation",
    title: "운영 · 고도화",
    desc: "릴리스 후 안정화 지원, 사용자 교육, 지속적인 고도화로 ROI를 장기간 유지합니다.",
    tags: ["안정화 지원", "고도화 로드맵", "24/7 운영"],
    icon: CheckCircle2,
  },
];

export const businessDomains = [
  { code: "ERP", title: "통합 경영관리", desc: "전사 기준정보와 경영 데이터를 통합합니다.", icon: LayoutDashboard },
  { code: "MES", title: "제조 실행", desc: "작업지시부터 실적·품질까지 현장을 연결합니다.", icon: Factory },
  { code: "PLM", title: "제품정보 관리", desc: "제품 개발 전 과정의 정보를 표준화합니다.", icon: Layers3 },
  { code: "WMS", title: "창고/물류", desc: "재고와 물류 흐름을 실시간으로 추적합니다.", icon: Boxes },
  { code: "CMMS", title: "설비 보전", desc: "설비 점검과 보전 이력을 체계화합니다.", icon: Wrench },
];

export const solutionDetails = {
  mes: {
    code: "MES",
    title: "제조 실행 시스템",
    subtitle: "현장 작업과 실적 데이터를 실시간으로 연결하는 제조 운영 플랫폼",
    summary:
      "MES는 작업지시, 실적, 재공, 품질, 설비 이벤트를 실시간으로 수집하여 현장의 상태를 투명하게 보여주고, 공정 흐름을 표준화합니다.",
    flow: ["작업지시", "현장실적", "공정진행", "품질확인", "실시간 모니터링"],
    benefits: ["공정 데이터 실시간 확보", "재공·LOT 추적성 강화", "현장 이상 대응 속도 향상"],
    assetType: "mes",
  },
  mobile: {
    code: "Mobile",
    title: "Mobile / WMS",
    subtitle: "PDA와 바코드 기반으로 입출고·재고·LOT 이력을 현장에서 처리",
    summary:
      "모바일 WMS는 현장 작업자가 PDA와 바코드 리더를 활용해 자재 입출고, LOT 확인, 재고 반영을 즉시 처리하도록 지원합니다.",
    flow: ["바코드 스캔", "LOT 확인", "입출고 처리", "재고 반영", "이력 추적"],
    benefits: ["수기 입력 최소화", "재고 정확도 향상", "현장 처리 속도 개선"],
    assetType: "mobile",
  },
  erp: {
    code: "ERP",
    title: "FLEX ERP",
    subtitle: "제조 기준정보와 영업·구매·생산·회계 흐름을 통합하는 ERP",
    summary:
      "FLEX ERP는 FCM, SCM, MFG 영역을 중심으로 제조기업의 수불, 비용, 생산, 품질, 외주 흐름을 하나의 프로세스로 연결합니다.",
    flow: ["기준정보", "영업/구매", "생산/품질", "수불/원가", "회계/경영정보"],
    benefits: ["업무 표준화", "수불·비용 통합관리", "경영 의사결정 데이터 확보"],
    assetType: "diagram",
  },
};

export const csrRows = [
  {
    id: "260325-010",
    company: "시노펙스(베트남)",
    title: "본사에서 베트남 SMT MES 접속 불가의 건",
    type: "오류확인",
    work: "시스템관리",
    status: "완료",
    priority: "상",
    requestDate: "2026-03-25",
    requester: "tien.tm",
    manager: "전원태",
    md: "0 / 0",
    due: "",
    done: "2026-03-25",
    body: "본사에서 베트남 SMT MES 접속이 되지 않습니다. 서버 상태 및 네트워크 접속 가능 여부 확인 부탁드립니다.",
    attachments: [],
    replies: [
      {
        author: "tien.tm",
        role: "customer",
        org: "시노펙스(베트남) 전산팀",
        date: "2026-03-25 09:42",
        text: "본사 접속 테스트 시 화면이 열리지 않습니다. 확인 부탁드립니다.",
        images: [],
        attachments: [],
      },
      {
        author: "전원태",
        role: "staff",
        org: "인포솔루션 기술지원팀",
        date: "2026-03-25 10:18",
        text: "VPN 접속 경로와 방화벽 정책 확인 후 조치 완료했습니다. 재접속 확인 부탁드립니다.",
        images: [],
        attachments: [],
      },
      {
        author: "tien.tm",
        role: "customer",
        org: "시노펙스(베트남) 전산팀",
        date: "2026-03-25 10:35",
        text: "현재 접속 정상 확인했습니다.",
        images: [],
        attachments: [],
      },
    ],
  },
  {
    id: "260312-002",
    company: "시노펙스(베트남)",
    title: "routing 관련 문의",
    type: "문의",
    work: "생산관리",
    status: "처리중",
    priority: "상",
    requestDate: "2026-03-12",
    requester: "이용준",
    manager: "안상현",
    md: "0 / 0",
    due: "",
    done: "",
    body: "Routing 등록 및 제조 BOM 연계 기준에 대해 문의드립니다. 공정 순서 변경 시 반영 기준 확인 부탁드립니다.",
    attachments: [],
    replies: [
      {
        author: "이용준",
        role: "customer",
        org: "시노펙스(베트남) 생산팀",
        date: "2026-03-12 14:20",
        text: "Routing 순서 변경 후 일부 화면에서 기존 순서로 보입니다.",
        images: [],
        attachments: [],
      },
      {
        author: "안상현",
        role: "staff",
        org: "인포솔루션 MES1팀",
        date: "2026-03-12 15:05",
        text: "관련 기준정보와 화면 반영 로직 확인 중입니다. 확인 후 회신드리겠습니다.",
        images: [],
        attachments: [],
      },
    ],
  },
  {
    id: "251223-007",
    company: "우리이앤엘(베트남)",
    title: "신규 라벨 생성 및 라벨 발행 화면 개발 요청 건",
    type: "신규개발",
    work: "MES",
    status: "완료",
    priority: "긴급",
    requestDate: "2025-12-23",
    requester: "DANGCONG",
    manager: "최유정 / 조광호",
    md: "4 / 5.3",
    due: "2026-01-16",
    done: "2026-02-09",
    body: `신규 라벨 생성 및 라벨 발행 화면 개발 요청드립니다.
 
1. 라벨 양식 (사이즈 4cm × 7cm)
2. 신규 화면 개발
 
적용 공장 : PKG 공장
상세 요청 사항은 첨부 파일을 참고해 주시기 바랍니다.
개발 소요 시간과 예상 공수를 검토하신 후 회신 부탁드립니다.
추가로 문의 사항이 있으시면 언제든지 연락 주시면 감사하겠습니다.`,
    attachments: [
      { name: "라벨 양식.pptx", type: "pptx" },
    ],
    replies: [
      {
        author: "최유정",
        role: "staff",
        org: "인포솔루션 기술지원팀",
        date: "2025-12-24 14:22",
        text: "기존 PKG 출하 라벨 발행(INVF0160) 화면과 유사하게 보내주신 PPT처럼 새로운 화면/라벨을 개발하는 요청건이 맞는 지 확인 부탁드립니다.",
        images: [],
        attachments: [],
      },
      {
        author: "DANGCONG",
        role: "customer",
        org: "우리이앤엘(베트남) 전산팀",
        date: "2025-12-24 14:39",
        text: "넵 맞습니다",
        images: [],
        attachments: [],
      },
      {
        author: "최유정",
        role: "staff",
        org: "인포솔루션 기술지원팀",
        date: "2025-12-24 15:58",
        text: "개발 서버에 반영 해두었습니다. 요청하신 방향이 맞는 지 확인 부탁드립니다.",
        images: ["dev_screen_01.png", "dev_screen_02.png"],
        attachments: [],
      },
      {
        author: "DANGCONG",
        role: "customer",
        org: "우리이앤엘(베트남) 전산팀",
        date: "2025-12-26 12:22",
        text: `확인해보니 일부 사항이 잘못 표시되고 있습니다.
 
1. Part No 잘못 표시 — 현재 품목명으로 표시됨 → 모델명으로 변경 요청
2. Lot No 잘못 표시 — 현재 Mes LOT으로 표시 → ERP Lot No로 변경 요청
3. Rank No 잘못 표시 — 현재 Mes LOT번호로 표시됨 → 고객 랭크 정보로 수정 요청
 
추가 수정 부탁드립니다. 감사합니다.`,
        images: [],
        attachments: [],
      },
      {
        author: "최유정",
        role: "staff",
        org: "인포솔루션 기술지원팀",
        date: "2025-12-26 16:25",
        text: `고객 랭크 정보에 대한 문의가 있어 유선으로 통화한 내용입니다. 아래 내용으로 협의가 되어 개발을 진행하겠습니다.
 
1. 내부 관리 랭크
   - [PPMF0240 MODEL별 TH BIN RANK값 관리]에 등록된 3자리 랭크 데이터로 표기 예정
2. 고객 랭크
   - A1B, A2B → A1B / A3B, A4B → A2B / A5B, A6B → A3B
3. 라벨상 [MSL:2a] 값은 고정 값으로 표기`,
        images: [],
        attachments: [],
      },
      {
        author: "DANGCONG",
        role: "customer",
        org: "우리이앤엘(베트남) 전산팀",
        date: "2026-01-02 17:39",
        text: `확인 결과를 공유드립니다.
 
1. 원본 라벨에 비해 글자가 더 작습니다
   예: Part No 문구에서 'P' 글자의 높이 2.5mm 요청 → 실제 출력 2.0mm
2. 글자 폰트가 Arial 기준으로 적용됐는지 확인 필요
3. Lot No 정보 잘못 표시 — 내부 관리 랭크(A5B)로 표시됨
4. 고정값 잘못 표시 — MSL;2a → MSL:2a (; → :)
 
추가 수정 부탁드립니다. 감사합니다.`,
        images: [],
        attachments: [],
      },
      {
        author: "조광호",
        role: "staff",
        org: "인포솔루션 MES1팀",
        date: "2026-01-08 10:03",
        text: "유선상으로 말씀드린 확인내용 매뉴얼로 작성하여 첨부드립니다. 확인 후 회신 부탁드립니다.",
        images: [],
        attachments: [
          { name: "Zebra Printer 폰트 설치 매뉴얼.pptx", type: "pptx" },
          { name: "Arial.mmf", type: "file" },
        ],
      },
      {
        author: "DANGCONG",
        role: "customer",
        org: "우리이앤엘(베트남) 전산팀",
        date: "2026-01-14 15:17",
        text: `확인 결과 정상적으로 반영되지 않은 상태로 확인되었습니다.
이전에 제가 공유드린 디자인 기준과 동일하게 적용되도록 수정 요청드립니다.
아울러 전체적인 위치에 대한 재확인도 필요할 것 같습니다.`,
        images: [],
        attachments: [
          { name: "SH-WH2012HI(RRC)_rev2.nlbl", type: "file" },
        ],
      },
      {
        author: "최유정",
        role: "staff",
        org: "인포솔루션 기술지원팀",
        date: "2026-01-26 15:25",
        text: `RANK 값 조건 해제,
SEHWA COMMERCE 중앙 정렬,
15번 높이 조정,
9번 위치 조정 수정 반영 완료했습니다.
 
확인 부탁드립니다. 감사합니다.`,
        images: [],
        attachments: [],
      },
      {
        author: "DANGCONG",
        role: "customer",
        org: "우리이앤엘(베트남) 전산팀",
        date: "2026-02-09 09:35",
        text: "최종 확인 결과, 수정하지 않아도 됩니다. 업무가 혼동되어 죄송합니다. 감사합니다.",
        images: [],
        attachments: [],
      },
    ],
  },
];

export const statusColor = {
  접수대기: "bg-slate-100 text-slate-700",
  접수완료: "bg-blue-100 text-blue-700",
  처리중: "bg-amber-100 text-amber-700",
  검수요청: "bg-violet-100 text-violet-700",
  완료: "bg-emerald-100 text-emerald-700",
};

export const customerCreateFields = [
  ["잔여공수(M/D)", "-0.3", "readonly"],
  ["요청번호", "260522-012", "readonly"],
  ["회사명", "시노펙스(베트남)", "readonly"],
  ["요청부서", "-", "readonly"],
  ["연락처", "0861751123", "readonly"],
  ["요청구분", "선택", "select"],
  ["화면명", "", "input"],
  ["제목", "", "input"],
  ["우선순위", "선택", "select"],
  ["보안요청", "사내 비공개 요청", "checkbox"],
  ["요청일자", "2026-05-22", "readonly"],
  ["사업부", "FPCB", "select"],
  ["요청자", "김병준", "readonly"],
  ["이메일", "andrew324600@synopex.com", "readonly"],
  ["업무구분", "선택", "select"],
  ["화면ID", "", "input"],
];

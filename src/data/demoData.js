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

const asset = (path) => new URL(path, import.meta.url).href;

const referenceLogoMap = {
  bh: asset("../assets/logos/BH_LOGO.png"),
  bmevs: asset("../assets/logos/BH_EVS_LOGO.png"),
  doosan: asset("../assets/logos/DOOSAN_LOGO.png"),
  shinsung: asset("../assets/logos/gnb_logo.png"),

  hetn: asset("../assets/logos/HETN_LOGO.png"),
  daewonsanup: asset("../assets/logos/DAEWON_LOGO.png"),
  dkt: asset("../assets/logos/DKT_LOGO.png"),
  drhe: asset("../assets/logos/DR_LOGO.png"),
  eduen: asset("../assets/logos/EDUEN.png"),
  flexcom: asset("../assets/logos/FLEXCOM_LOGO.gif"),
  hando: asset("../assets/logos/HANDO_LOGO.png"),
  hyunwoo: asset("../assets/logos/HYUNWOO_LOGO.png"),
  ilshin: asset("../assets/logos/ILSHIN_LOGO.jpg"),
  interflex: asset("../assets/logos/INTERFLEX_LOGO.svg"),
  jinsung: asset("../assets/logos/JINSUNG_LOGO.png"),
  kijoo: asset("../assets/logos/KIJOO_LOGO.jpg"),
  kolmar: asset("../assets/logos/KOLMAR_LOGO.jpg"),
  kyungshin: asset("../assets/logos/KYUNGSHIN.jpg"),
  multitech: asset("../assets/logos/MULTITECH_LOGO.png"),
  neobiotech: asset("../assets/logos/NEO_LOGO.svg"),
  newflex: asset("../assets/logos/NEWFLEX_LOGO.png"),
  saeki: asset("../assets/logos/SAEKI_LOGO.png"),
  seil: asset("../assets/logos/SEIL_LOGO.png"),
  siflex: asset("../assets/logos/SI_LOGO.png"),
  synopex: asset("../assets/logos/SYNOPEX.png"),
  taiyo: asset("../assets/logos/TAIYO_LOGO.png"),
  tovix: asset("../assets/logos/TOVIX_LOGO.jpeg"),
  utronix: asset("../assets/logos/UTRONIX_LOGO.png"),
  wapion: asset("../assets/logos/WAPION_LOGO.png"),
  wooree: asset("../assets/logos/WOOREE.png"),
  worldtop: asset("../assets/logos/WTK_LOGO.png"),
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

// ================================================================
// src/data/demoData.js 에서 csrRows 전체를 아래로 교체하세요
// ================================================================

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
    managerList: ["전원태"],
    coworkers: ["전원태"],
    md: { apply: 0, work: 0 },
    due: "",
    done: "2026-03-25",
    body: "본사에서 베트남 SMT MES 접속이 되지 않습니다. 서버 상태 및 네트워크 접속 가능 여부 확인 부탁드립니다.",
    attachments: [],
    timeline: [
      { step: "접수",        date: "2026-03-25 09:40", actor: "tien.tm",  note: "고객 요청 등록" },
      { step: "담당자 배정", date: "2026-03-25 09:55", actor: "관리자",   note: "전원태 배정" },
      { step: "처리중",      date: "2026-03-25 10:10", actor: "전원태",   note: "VPN·방화벽 점검 시작" },
      { step: "검수요청",    date: "2026-03-25 10:20", actor: "전원태",   note: "고객 재접속 확인 요청" },
      { step: "완료",        date: "2026-03-25 10:35", actor: "tien.tm",  note: "정상 접속 확인 완료" },
    ],
    replies: [
      {
        author: "tien.tm", role: "customer", org: "시노펙스(베트남) 전산팀",
        date: "2026-03-25 09:42",
        text: "본사 접속 테스트 시 화면이 열리지 않습니다. 확인 부탁드립니다.",
        images: [], attachments: [],
      },
      {
        author: "전원태", role: "staff", org: "인포솔루션 기술지원팀",
        date: "2026-03-25 10:18",
        text: "VPN 접속 경로와 방화벽 정책 확인 후 조치 완료했습니다. 재접속 확인 부탁드립니다.",
        images: [], attachments: [],
      },
      {
        author: "tien.tm", role: "customer", org: "시노펙스(베트남) 전산팀",
        date: "2026-03-25 10:35",
        text: "현재 접속 정상 확인했습니다.",
        images: [], attachments: [],
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
    managerList: ["안상현"],
    coworkers: ["안상현"],
    md: { apply: 0, work: 0 },
    due: "2026-03-20",
    done: "",
    body: "Routing 등록 및 제조 BOM 연계 기준에 대해 문의드립니다. 공정 순서 변경 시 반영 기준 확인 부탁드립니다.",
    attachments: [],
    timeline: [
      { step: "접수",        date: "2026-03-12 14:10", actor: "이용준", note: "고객 요청 등록" },
      { step: "담당자 배정", date: "2026-03-12 14:30", actor: "관리자", note: "안상현 배정" },
      { step: "처리중",      date: "2026-03-12 15:05", actor: "안상현", note: "기준정보 및 로직 확인 중" },
    ],
    replies: [
      {
        author: "이용준", role: "customer", org: "시노펙스(베트남) 생산팀",
        date: "2026-03-12 14:20",
        text: "Routing 순서 변경 후 일부 화면에서 기존 순서로 보입니다.",
        images: [], attachments: [],
      },
      {
        author: "안상현", role: "staff", org: "인포솔루션 MES1팀",
        date: "2026-03-12 15:05",
        text: "관련 기준정보와 화면 반영 로직 확인 중입니다. 확인 후 회신드리겠습니다.",
        images: [], attachments: [],
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
    manager: "최유정",
    managerList: ["최유정", "조광호"],
    coworkers: ["최유정", "조광호"],
    md: { apply: 4, work: 5.3 },
    due: "2026-01-16",
    done: "2026-02-09",
    body: `신규 라벨 생성 및 라벨 발행 화면 개발 요청드립니다.

1. 라벨 양식 (사이즈 4cm × 7cm)
2. 신규 화면 개발

적용 공장 : PKG 공장
상세 요청 사항은 첨부 파일을 참고해 주시기 바랍니다.
개발 소요 시간과 예상 공수를 검토하신 후 회신 부탁드립니다.`,
    attachments: [{ name: "라벨 양식.pptx", type: "pptx" }],
    timeline: [
      { step: "접수",        date: "2025-12-23 14:30", actor: "DANGCONG", note: "고객 요청 등록" },
      { step: "담당자 배정", date: "2025-12-24 09:00", actor: "관리자",   note: "최유정 배정" },
      { step: "처리중",      date: "2025-12-24 14:22", actor: "최유정",   note: "개발 착수 — 조광호 협업 참여" },
      { step: "검수요청",    date: "2026-01-26 15:25", actor: "최유정",   note: "수정 반영 완료, 고객 확인 요청" },
      { step: "완료",        date: "2026-02-09 09:35", actor: "DANGCONG", note: "최종 확인 완료" },
    ],
    replies: [
      {
        author: "최유정", role: "staff", org: "인포솔루션 기술지원팀",
        date: "2025-12-24 14:22",
        text: "기존 PKG 출하 라벨 발행(INVF0160) 화면과 유사하게 새로운 화면/라벨을 개발하는 요청건이 맞는 지 확인 부탁드립니다.",
        images: [], attachments: [],
      },
      {
        author: "DANGCONG", role: "customer", org: "우리이앤엘(베트남) 전산팀",
        date: "2025-12-24 14:39",
        text: "넵 맞습니다",
        images: [], attachments: [],
      },
      {
        author: "최유정", role: "staff", org: "인포솔루션 기술지원팀",
        date: "2025-12-24 15:58",
        text: "개발 서버에 반영 해두었습니다. 요청하신 방향이 맞는 지 확인 부탁드립니다.",
        images: ["dev_screen_01.png"], attachments: [],
      },
      {
        author: "DANGCONG", role: "customer", org: "우리이앤엘(베트남) 전산팀",
        date: "2026-01-02 17:39",
        text: `확인 결과를 공유드립니다.

1. 원본 라벨에 비해 글자가 더 작습니다
2. 글자 폰트가 Arial 기준으로 적용됐는지 확인 필요
3. Lot No 정보 잘못 표시
4. 고정값 잘못 표시 — MSL;2a → MSL:2a

추가 수정 부탁드립니다.`,
        images: [], attachments: [],
      },
      {
        author: "조광호", role: "staff", org: "인포솔루션 MES1팀",
        date: "2026-01-08 10:03",
        text: "유선상으로 말씀드린 확인내용 매뉴얼로 작성하여 첨부드립니다. 확인 후 회신 부탁드립니다.",
        images: [],
        attachments: [
          { name: "Zebra Printer 폰트 설치 매뉴얼.pptx", type: "pptx" },
          { name: "Arial.mmf", type: "file" },
        ],
      },
      {
        author: "최유정", role: "staff", org: "인포솔루션 기술지원팀",
        date: "2026-01-26 15:25",
        text: "RANK 값 조건 해제, SEHWA COMMERCE 중앙 정렬, 15번 높이 조정, 9번 위치 조정 수정 반영 완료했습니다. 확인 부탁드립니다.",
        images: [], attachments: [],
      },
      {
        author: "DANGCONG", role: "customer", org: "우리이앤엘(베트남) 전산팀",
        date: "2026-02-09 09:35",
        text: "최종 확인 결과, 수정하지 않아도 됩니다. 업무가 혼동되어 죄송합니다. 감사합니다.",
        images: [], attachments: [],
      },
    ],
  },
];

// ================================================================
// src/data/demoData.js 맨 끝에 아래 내용 추가하세요
// ================================================================

// ── 회사연혁 ──────────────────────────────────────────────────
export const companyHistory = [
  {
    year: "2024",
    items: ["FLEX MES Package 제조업 확장 (자동차, 의료기기, 전자부품, 화학, 유통 업종)"],
    image: null,
  },
  {
    year: "2022",
    items: [
      "베트남, 중국, 인도, 미국, 러시아 등 해외 17개 사이트 구축",
      "이젠아카데미 산학 채용 협약 체결",
      "그린컴퓨터아카데미 산학 채용 협약 체결",
    ],
    image: [
      asset("../assets/history/ezen.jpg"),
      asset("../assets/history/green.jpg"),
    ],
  },
  {
    year: "2021",
    items: [
      "FLEX MES/ERP Package 제조업 스마트공장 정부지원사업 등 10개사 구축",
      "한양대학교(ERICA) 산학협력교육 협약 체결",
    ],
    image: [
      asset("../assets/history/ERICA2.jpg"),
    ],
  },
  {
    year: "2020",
    items: [
      "사무실 확장 이전 (안산 리드 스마트스퀘어)",
      "통합 유지보수 시스템 INFOPLUS 구축",
      "UI 고도화 (Filter, Sort, Multi Language 등 개선)",
    ],
    image: [
      asset("../assets/history/startsquare.png"),
    ],
  },
  {
    year: "2019",
    items: ["시스템 저작권 등록 (FLEX ERP, FLEX MES, FLEX EMS)"],
    image: [
      asset("../assets/history/FLEX_EMS.jpg"),
      asset("../assets/history/FLEX_ERP.jpg"),
      asset("../assets/history/Flex_Manufacturing.jpg"),
    ],
  },
  {
    year: "2018",
    items: ["설비보전(설비모니터링) System 출시", "MPS/MRP System 출시"],
    image: null,
  },
  {
    year: "2017",
    items: ["강소기업 선정", "SPC System 출시"],
    image: [
      asset("../assets/history/smallstrong.jpg"),
    ],
  },
  {
    year: "2016",
    items: [
      "기업부설연구소 설립",
      "FLEX MES Manufacturing 출시",
      "FLEX ERP Enterprise R3.0 버전 출시",
    ],
    image: [
      asset("../assets/history/subside.jpg"),
    ],
  },
  {
    year: "2015",
    items: ["FLEX WMS for Android 출시"],
    image: null,
  },
  {
    year: "2014",
    items: ["법인전환 (주)인포솔루션(Infosolution) 설립"],
    image: [
      asset("../assets/history/info.jpg"),
    ],
  },
  {
    year: "2010",
    items: ["FLEX ERP Enterprise 출시"],
    image: null,
  },
  {
    year: "2002",
    items: [
      "인포써미트(Infosummit) 설립",
      "Global ERP 구축 프로젝트 수행 (Oracle e-business suite)",
    ],
    image: null,
  },
];

// ── 구축사례 ──────────────────────────────────────────────────
export const references = [
  // 마퀴용 전체 고객사 목록
  {
    id: "bh", name: "BH (비에이치)", logo: null, color: "#1d4ed8",
    category: "전자부품",
    projects: [
      "BH FLEX ERP+MES 구축 (생산/외주/설비보전/영업/구매/자재/재고/WMS/설계/회계/원가/인사)",
      "BH 중국법인 FLEX ERP+MES 구축",
      "BH 베트남법인 FLEX ERP+MES 구축",
    ],
  },
  {
    id: "shinsung", name: "신성 C&T", logo: null, color: "#0369a1",
    category: "전자부품",
    projects: [
      "신성 C&T 베트남법인 FLEX ERP+MES 구축",
      "신성 C&T 베트남법인 WMS for Android 구축",
      "신성 C&T 인도법인 FLEX RP+MES 구축",
    ],
  },
  {
    id: "doosan", name: "두산전자 베트남", logo: null, color: "#dc2626",
    category: "전자부품",
    projects: [
      "두산전자 베트남법인 FLEX MES 구축 (생산/품질/영업/구매/자재/재고/WMS/설계)",
      "두산전자 베트남법인 WMS for Android 구축",
    ],
  },
  {
    id: "interflex", name: "인터플렉스", logo: null, color: "#059669",
    category: "전자부품",
    projects: [
      "인터플렉스 FLEX ERP+MES 구축",
      "인터플렉스 TOC/DBR 생산시스템 구축",
      "인터플렉스 Oracle E-Business Suite 구축",
      "인터플렉스 베트남법인 FLEX ERP+MES 구축",
    ],
  },
  {
    id: "siflex", name: "에스아이플렉스", logo: null, color: "#7c3aed",
    category: "전자부품",
    projects: [
      "에스아이플렉스 FLEX ERP+MES 구축",
      "에스아이플렉스 중국법인 FLEX ERP+MES 구축",
      "에스아이플렉스 베트남법인 FLEX ERP+MES 구축",
    ],
  },
  {
    id: "newflex", name: "뉴프렉스", logo: null, color: "#0891b2",
    category: "전자부품",
    projects: [
      "뉴프렉스 본사 FLEX ERP+MES 구축",
      "뉴프렉스 본사 WMS for Android 구축",
      "뉴프렉스 베트남법인 FLEX ERP+MES 구축",
    ],
  },
  {
    id: "synopex", name: "시노펙스", logo: null, color: "#0369a1",
    category: "전자부품",
    projects: ["시노펙스 베트남법인 FLEX ERP+MES 구축"],
  },
  {
    id: "seil", name: "세일전자", logo: null, color: "#1d4ed8",
    category: "전자부품",
    projects: ["세일전자 FLEX ERP+MES 구축"],
  },
  {
    id: "wooree", name: "우리이앤엘", logo: null, color: "#0891b2",
    category: "전자부품",
    projects: [
      "우리이앤엘 베트남법인 FLEX ERP+MES 구축",
      "우리이앤엘 베트남법인 WMS for Android 구축",
    ],
  },
  {
    id: "hyunwoo", name: "현우산업", logo: null, color: "#6d28d9",
    category: "자동차",
    projects: ["현우산업 FLEX ERP+MES 구축"],
  },
  {
    id: "bmevs", name: "BH EVS", logo: null, color: "#1d4ed8",
    category: "자동차",
    projects: ["BH EVS FLEX ERP+MES 구축", "BH EVS 미국법인/중국법인 구축"],
  },
  {
    id: "hetn", name: "HETN", logo: null, color: "#0369a1",
    category: "전자부품",
    projects: ["HETN FLEX ERP+MES 구축"],
  },
  {
    id: "utronix", name: "유트로닉스", logo: null, color: "#7c3aed",
    category: "전자부품",
    projects: ["유트로닉스 FLEX ERP+MES 구축"],
  },
  {
    id: "hando", name: "한도", logo: null, color: "#059669",
    category: "전자부품",
    projects: ["한도 FLEX ERP+MES 구축"],
  },
  {
    id: "taiyo", name: "타이요잉크코리아", logo: null, color: "#dc2626",
    category: "화학",
    projects: ["타이요잉크코리아 FLEX ERP+MES 구축"],
  },
  {
    id: "drhe", name: "두레", logo: null, color: "#0891b2",
    category: "유통",
    projects: ["두레 FLEX ERP+MES 구축"],
  },
  {
    id: "tovix", name: "토빅스", logo: null, color: "#1d4ed8",
    category: "전자부품",
    projects: ["토빅스 FLEX ERP+MES 구축"],
  },
  {
    id: "worldtop", name: "월탑자", logo: null, color: "#6d28d9",
    category: "자동차",
    projects: ["월탑자 FLEX ERP+MES 구축", "월탑자 베트남법인 FLEX ERP+MES 구축"],
  },
  {
    id: "kijoo", name: "기주엠씨", logo: null, color: "#059669",
    category: "자동차",
    projects: ["기주엠씨 FLEX ERP+MES 구축"],
  },
  {
    id: "daewonsanup", name: "대원산업", logo: null, color: "#dc2626",
    category: "자동차",
    projects: ["대원산업 ERP SAP 구축", "대원산업 자사 FLEX Manufacturing 구축"],
  },
  {
    id: "neobiotech", name: "네오바이오텍", logo: null, color: "#0891b2",
    category: "의료기기",
    projects: ["네오바이오텍 FLEX ERP+MES 구축"],
  },
  {
    id: "dkt", name: "디케이티", logo: null, color: "#1d4ed8",
    category: "전자부품",
    projects: ["디케이티 FLEX ERP 구축"],
  },
  {
    id: "saeki", name: "새키아이앤씨", logo: null, color: "#7c3aed",
    category: "전자부품",
    projects: ["새키아이앤씨 FLEX WMS 구축"],
  },
  {
    id: "wapion", name: "와피온", logo: null, color: "#059669",
    category: "전자부품",
    projects: ["와피온 FLEX ERP+MES 구축"],
  },
  {
    id: "eduen", name: "이듀엔", logo: null, color: "#0369a1",
    category: "전자부품",
    projects: ["이듀엔 FLEX ERP+MES 구축"],
  },
  {
    id: "jinsung", name: "진성전자", logo: null, color: "#dc2626",
    category: "전자부품",
    projects: ["진성전자 FLEX ERP 구축"],
  },
  {
    id: "kolmar", name: "콜마BNH", logo: null, color: "#0891b2",
    category: "화학",
    projects: ["콜마BNH FLEX ERP+MES 구축"],
  },
  {
    id: "ilshin", name: "일신전자", logo: null, color: "#1d4ed8",
    category: "전자부품",
    projects: ["일신전자 FLEX ERP 구축", "일신전자 베트남법인 FLEX ERP 구축"],
  },
  {
    id: "multitech", name: "멀티텍", logo: null, color: "#059669",
    category: "전자부품",
    projects: ["멀티텍 FLEX Manufacturing 구축"],
  },
  {
    id: "flexcom", name: "플렉스컴", logo: null, color: "#0369a1",
    category: "전자부품",
    projects: ["플렉스컴 FLEX ERP+MES 구축", "플렉스컴 베트남법인 FLEX ERP+MES 구축"],
  },
  {
    id: "kyungshin", name: "경신", logo: null, color: "#dc2626",
    category: "자동차",
    projects: ["경신 FLEX ERP+MES 구축"],
  },
].map((ref) => ({
  ...ref,
  logo: referenceLogoMap[ref.id] ?? ref.logo,
}));

// 마퀴용 전체 회사명 (로고 없이 텍스트로)
export const referenceMarquee = references.map(r => ({ id: r.id, name: r.name, color: r.color }));

// 상세 카드용 주요 고객사 (상위 12개)
export const referenceFeatured = references.slice(0, 12);

// 업종 카테고리
export const referenceCategories = ["전체", "전자부품", "자동차", "화학", "의료기기", "유통"];

export const statusColor = {
  접수대기:  "bg-slate-100 text-slate-700",
  접수완료:  "bg-blue-100 text-blue-700",
  처리중:    "bg-amber-100 text-amber-700",
  검수요청:  "bg-violet-100 text-violet-700",
  완료:      "bg-emerald-100 text-emerald-700",
  취소:      "bg-red-100 text-red-700",
  보류:      "bg-orange-100 text-orange-700",
  검수반려:  "bg-rose-100 text-rose-700",
};
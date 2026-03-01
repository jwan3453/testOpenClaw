import { useState } from "react";
import Head from "next/head";

// ── Icons ──────────────────────────────────────────────────────────────────
// Updated for feat/newUpdate branch

const HomeIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z"
      fill={active ? "#7B61FF" : "none"}
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const AssetsIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect
      x="3" y="3" width="8" height="8" rx="2"
      fill={active ? "#7B61FF" : "none"}
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
    />
    <rect
      x="13" y="3" width="8" height="8" rx="2"
      fill={active ? "rgba(123,97,255,0.3)" : "none"}
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
    />
    <rect
      x="3" y="13" width="8" height="8" rx="2"
      fill={active ? "rgba(123,97,255,0.3)" : "none"}
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
    />
    <rect
      x="13" y="13" width="8" height="8" rx="2"
      fill={active ? "rgba(123,97,255,0.1)" : "none"}
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
    />
  </svg>
);

const TradeIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 16V4M7 4L4 7M7 4L10 7"
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 8V20M17 20L14 17M17 20L20 17"
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HistoryIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12" cy="12" r="9"
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
    />
    <path
      d="M12 7V12L15.5 14.5"
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12" cy="12" r="3"
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
    />
    <path
      d="M19.4 15C19.1 15.6 19.3 16.4 19.8 16.9L19.9 17C20.3 17.4 20.3 18 19.9 18.4L18.4 19.9C18 20.3 17.4 20.3 17 19.9L16.9 19.8C16.4 19.3 15.6 19.1 15 19.4C14.4 19.7 14 20.3 14 21V21.2C14 21.7 13.6 22 13 22H11C10.4 22 10 21.7 10 21.2V21C10 20.3 9.6 19.7 9 19.4C8.4 19.1 7.6 19.3 7.1 19.8L7 19.9C6.6 20.3 6 20.3 5.6 19.9L4.1 18.4C3.7 18 3.7 17.4 4.1 17L4.2 16.9C4.7 16.4 4.9 15.6 4.6 15C4.3 14.4 3.7 14 3 14H2.8C2.3 14 2 13.6 2 13V11C2 10.4 2.3 10 2.8 10H3C3.7 10 4.3 9.6 4.6 9C4.9 8.4 4.7 7.6 4.2 7.1L4.1 7C3.7 6.6 3.7 6 4.1 5.6L5.6 4.1C6 3.7 6.6 3.7 7 4.1L7.1 4.2C7.6 4.7 8.4 4.9 9 4.6C9.6 4.3 10 3.7 10 3V2.8C10 2.3 10.4 2 11 2H13C13.6 2 14 2.3 14 2.8V3C14 3.7 14.4 4.3 15 4.6C15.6 4.9 16.4 4.7 16.9 4.2L17 4.1C17.4 3.7 18 3.7 18.4 4.1L19.9 5.6C20.3 6 20.3 6.6 19.9 7L19.8 7.1C19.3 7.6 19.1 8.4 19.4 9C19.7 9.6 20.3 10 21 10H21.2C21.7 10 22 10.4 22 11V13C22 13.6 21.7 14 21.2 14H21C20.3 14 19.7 14.4 19.4 15Z"
      stroke={active ? "#7B61FF" : "#8B8BAD"}
      strokeWidth="1.8"
    />
  </svg>
);

const SendIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 2L11 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReceiveIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5V19M12 19L5 12M12 19L19 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
    <path
      d="M12 7V17M9 10H13.5C14.33 10 15 10.67 15 11.5C15 12.33 14.33 13 13.5 13H10.5C9.67 13 9 13.67 9 14.5C9 15.33 9.67 16 10.5 16H15"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const SwapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M16 3L20 7L16 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 7H4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 21L4 17L8 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 17H20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BellIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
      stroke="#8B8BAD"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
      stroke="#8B8BAD"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="5" r="3" fill="#FF5252" />
  </svg>
);

const ScanIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H7"
      stroke="#8B8BAD"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M17 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V7"
      stroke="#8B8BAD"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17"
      stroke="#8B8BAD"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M7 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17"
      stroke="#8B8BAD"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line x1="3" y1="12" x2="21" y2="12" stroke="#8B8BAD" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 11V3M7 3L3.5 6.5M7 3L10.5 6.5" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 3V11M7 11L3.5 7.5M7 11L10.5 7.5" stroke="#FF5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 4L10 8L6 12" stroke="#8B8BAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────

const assets = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    amount: "0.8542",
    value: "$34,218.50",
    change: "+2.34%",
    positive: true,
    color: "#F7931A",
    bg: "rgba(247,147,26,0.15)",
    icon: "₿",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    amount: "4.2180",
    value: "$8,436.00",
    change: "+1.82%",
    positive: true,
    color: "#627EEA",
    bg: "rgba(98,126,234,0.15)",
    icon: "Ξ",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    amount: "52.300",
    value: "$5,230.00",
    change: "+5.67%",
    positive: true,
    color: "#9945FF",
    bg: "rgba(153,69,255,0.15)",
    icon: "◎",
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    amount: "12,500",
    value: "$3,750.00",
    change: "-1.23%",
    positive: false,
    color: "#0033AD",
    bg: "rgba(0,51,173,0.2)",
    icon: "₳",
  },
  {
    id: 5,
    name: "Polygon",
    symbol: "MATIC",
    amount: "3,800",
    value: "$2,128.00",
    change: "+3.45%",
    positive: true,
    color: "#8247E5",
    bg: "rgba(130,71,229,0.15)",
    icon: "⬡",
  },
];

const transactions = [
  {
    id: 1,
    type: "receive",
    asset: "Bitcoin",
    symbol: "BTC",
    amount: "+0.0532 BTC",
    value: "$2,128.50",
    time: "2 min ago",
    from: "0x4a2...8f3d",
    color: "#F7931A",
    bg: "rgba(247,147,26,0.15)",
    icon: "₿",
  },
  {
    id: 2,
    type: "send",
    asset: "Ethereum",
    symbol: "ETH",
    amount: "-0.5000 ETH",
    value: "$1,000.00",
    time: "1 hr ago",
    to: "0x9b1...2c7e",
    color: "#627EEA",
    bg: "rgba(98,126,234,0.15)",
    icon: "Ξ",
  },
  {
    id: 3,
    type: "swap",
    asset: "SOL → ADA",
    symbol: "SOL",
    amount: "5 SOL",
    value: "$500.00",
    time: "3 hr ago",
    color: "#9945FF",
    bg: "rgba(153,69,255,0.15)",
    icon: "⇄",
  },
  {
    id: 4,
    type: "receive",
    asset: "Polygon",
    symbol: "MATIC",
    amount: "+200 MATIC",
    value: "$112.00",
    time: "Yesterday",
    from: "0x7f4...1a9c",
    color: "#8247E5",
    bg: "rgba(130,71,229,0.15)",
    icon: "⬡",
  },
  {
    id: 5,
    type: "send",
    asset: "Bitcoin",
    symbol: "BTC",
    amount: "-0.0120 BTC",
    value: "$480.24",
    time: "2 days ago",
    to: "0x3d8...6b2f",
    color: "#F7931A",
    bg: "rgba(247,147,26,0.15)",
    icon: "₿",
  },
];

const navItems = [
  { id: "home", label: "Home", Icon: HomeIcon },
  { id: "assets", label: "Assets", Icon: AssetsIcon },
  { id: "trade", label: "Trade", Icon: TradeIcon },
  { id: "history", label: "History", Icon: HistoryIcon },
  { id: "settings", label: "Settings", Icon: SettingsIcon },
];

// ── Sub-components ──────────────────────────────────────────────────────────

function BalanceCard() {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className="relative mx-4 rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #5B3FE4 0%, #3B82C4 50%, #2DD4BF 100%)",
        boxShadow: "0 20px 60px rgba(91, 63, 228, 0.4)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
        style={{ background: "rgba(255,255,255,0.3)" }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15"
        style={{ background: "rgba(255,255,255,0.3)" }}
      />
      <div
        className="absolute top-16 -right-4 w-20 h-20 rounded-full opacity-10"
        style={{ background: "rgba(255,255,255,0.5)" }}
      />

      <div className="relative p-6 pt-5 pb-7">
        {/* Top row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-white/70 text-sm font-medium mb-0.5">Total Balance</p>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-xs bg-white/10 px-2 py-0.5 rounded-full">
                Portfolio
              </span>
            </div>
          </div>
          <button
            onClick={() => setHidden(!hidden)}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center"
          >
            {hidden ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20C7 20 2.73 16.39 1 12a10.07 10.07 0 012.73-4.27M6.53 6.53A9.54 9.54 0 0112 4c5 0 9.27 3.61 11 8a10.05 10.05 0 01-4.13 5.35M1 1L23 23" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M1 12C2.73 7.61 7 4 12 4s9.27 3.61 11 8c-1.73 4.39-6 8-11 8S2.73 16.39 1 12Z" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {/* Balance */}
        <div className="mb-5">
          <div className="flex items-end gap-2 mb-1">
            <span className="text-white text-5xl font-bold tracking-tight">
              {hidden ? "••••••" : "$53,762"}
            </span>
            <span className="text-white/70 text-lg mb-1">.85</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(0,230,118,0.2)", color: "#00E676" }}
            >
              ▲ +$1,240.32
            </span>
            <span className="text-white/60 text-xs">+2.36% today</span>
          </div>
        </div>

        {/* Wallet address */}
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-xs font-mono">0x4a2f...8f3d</span>
          <button className="ml-auto">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="9" width="13" height="13" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
              <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 4V5" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ActionButtons() {
  const actions = [
    { label: "Send", Icon: SendIcon, gradient: "linear-gradient(135deg, #7B61FF, #5A3FD4)" },
    { label: "Receive", Icon: ReceiveIcon, gradient: "linear-gradient(135deg, #00BCD4, #0097A7)" },
    { label: "Buy", Icon: BuyIcon, gradient: "linear-gradient(135deg, #4CAF50, #2E7D32)" },
    { label: "Swap", Icon: SwapIcon, gradient: "linear-gradient(135deg, #FF9800, #F57C00)" },
  ];

  return (
    <div className="flex justify-between px-4 mt-6">
      {actions.map(({ label, Icon, gradient }) => (
        <button
          key={label}
          className="flex flex-col items-center gap-2 group"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform active:scale-95"
            style={{ background: gradient }}
          >
            <Icon />
          </div>
          <span className="text-xs font-medium" style={{ color: "#8B8BAD" }}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

function PriceChart() {
  // Simple sparkline SVG path
  const points = [20, 45, 30, 60, 40, 70, 50, 80, 55, 65, 75, 60, 85, 70, 90];
  const w = 300;
  const h = 60;
  const step = w / (points.length - 1);
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min;

  const pathD = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaD =
    pathD +
    ` L ${(points.length - 1) * step} ${h} L 0 ${h} Z`;

  return (
    <div className="mx-4 mt-6 rounded-2xl p-4" style={{ background: "#13142B" }}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-sm">Portfolio Chart</h3>
          <p className="text-xs" style={{ color: "#8B8BAD" }}>Last 7 days</p>
        </div>
        <div className="flex gap-1">
          {["1D", "1W", "1M", "1Y"].map((t, i) => (
            <button
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all"
              style={
                i === 1
                  ? { background: "#7B61FF", color: "white" }
                  : { color: "#8B8BAD" }
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-16">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7B61FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#chartGrad)" />
          <path d={pathD} fill="none" stroke="#7B61FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Last point dot */}
          <circle
            cx={(points.length - 1) * step}
            cy={h - ((points[points.length - 1] - min) / range) * h}
            r="4"
            fill="#7B61FF"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function AssetItem({ asset }: { asset: typeof assets[0] }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all active:opacity-80"
      style={{ background: "#13142B" }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold flex-shrink-0"
        style={{ background: asset.bg, color: asset.color }}
      >
        {asset.icon}
      </div>

      {/* Name & amount */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold text-sm">{asset.name}</span>
          <span className="text-white font-semibold text-sm">{asset.value}</span>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <span className="text-xs" style={{ color: "#8B8BAD" }}>
            {asset.amount} {asset.symbol}
          </span>
          <span
            className="text-xs font-semibold flex items-center gap-0.5"
            style={{ color: asset.positive ? "#00E676" : "#FF5252" }}
          >
            {asset.positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {asset.change}
          </span>
        </div>
      </div>
    </div>
  );
}

function TransactionItem({ tx }: { tx: typeof transactions[0] }) {
  const isReceive = tx.type === "receive";
  const isSwap = tx.type === "swap";

  return (
    <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl" style={{ background: "#13142B" }}>
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 relative"
        style={{ background: tx.bg }}
      >
        <span style={{ color: tx.color, fontSize: isSwap ? "16px" : "20px", fontWeight: "bold" }}>
          {tx.icon}
        </span>
        {/* Type badge */}
        <div
          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2"
          style={{
            background: isReceive ? "#00E676" : isSwap ? "#7B61FF" : "#FF5252",
            borderColor: "#0B0C1E",
          }}
        >
          {isReceive ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 2V8M5 8L2 5M5 8L8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : isSwap ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 4L5 1L8 4M8 6L5 9L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 8V2M5 2L2 5M5 2L8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold text-sm">{tx.asset}</span>
          <span
            className="text-sm font-semibold"
            style={{ color: isReceive ? "#00E676" : isSwap ? "#8B8BAD" : "#FF5252" }}
          >
            {tx.amount}
          </span>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <span className="text-xs capitalize" style={{ color: "#8B8BAD" }}>
            {tx.type} · {tx.time}
          </span>
          <span className="text-xs" style={{ color: "#8B8BAD" }}>
            {tx.value}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeTab, setActiveTab] = useState<"assets" | "transactions">("assets");

  return (
    <>
      <Head>
        <title>Jacky Wallet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Crypto Wallet" />
      </Head>

      {/* Phone frame wrapper */}
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#060714" }}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            maxWidth: "390px",
            minHeight: "100vh",
            background: "#0B0C1E",
          }}
        >
          {/* Status bar */}
          <div
            className="flex items-center justify-between px-6 pt-3 pb-2"
            style={{ background: "#0B0C1E" }}
          >
            <span className="text-white text-sm font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              {/* Signal */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
                <rect x="0" y="8" width="3" height="4" rx="0.5" />
                <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
                <rect x="9" y="3" width="3" height="9" rx="0.5" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
              </svg>
              {/* WiFi */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1 4C3.67 1.67 7.33 0.5 8 0.5C8.67 0.5 12.33 1.67 15 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 6.5C4.67 5 6.33 4.25 8 4.25C9.67 4.25 11.33 5 13 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 9C6 8 7 7.5 8 7.5C9 7.5 10 8 11 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="11" r="1" fill="white" />
              </svg>
              {/* Battery */}
              <div className="flex items-center">
                <div className="border border-white/80 rounded-sm w-6 h-3 flex items-center px-0.5">
                  <div className="bg-white rounded-sm h-2 w-full" />
                </div>
                <div className="bg-white/80 w-0.5 h-1.5 rounded-r-sm ml-0.5" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl overflow-hidden flex items-center justify-center text-white font-bold"
                style={{
                  background: "linear-gradient(135deg, #7B61FF, #4FC3F7)",
                }}
              >
                J
              </div>
              <div>
                <p className="text-xs" style={{ color: "#8B8BAD" }}>
                  Welcome back,
                </p>
                <p className="text-white font-semibold text-sm">Jacky</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#13142B" }}>
                <ScanIcon />
              </button>
              <button className="w-9 h-9 rounded-xl flex items-center justify-center relative" style={{ background: "#13142B" }}>
                <BellIcon />
              </button>
            </div>
          </div>

          {/* Scrollable content */}
          <div
            className="overflow-y-auto"
            style={{ height: "calc(100vh - 130px)", paddingBottom: "90px" }}
          >
            {/* Balance Card */}
            <BalanceCard />

            {/* Action Buttons */}
            <ActionButtons />

            {/* Price Chart */}
            <PriceChart />

            {/* Assets / Transactions tabs */}
            <div className="mt-6 px-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 p-1 rounded-xl" style={{ background: "#13142B" }}>
                  <button
                    onClick={() => setActiveTab("assets")}
                    className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                    style={
                      activeTab === "assets"
                        ? { background: "#7B61FF", color: "white" }
                        : { color: "#8B8BAD" }
                    }
                  >
                    Assets
                  </button>
                  <button
                    onClick={() => setActiveTab("transactions")}
                    className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                    style={
                      activeTab === "transactions"
                        ? { background: "#7B61FF", color: "white" }
                        : { color: "#8B8BAD" }
                    }
                  >
                    Transactions
                  </button>
                </div>
                <button className="flex items-center gap-1 text-xs font-medium" style={{ color: "#7B61FF" }}>
                  See all <ChevronRight />
                </button>
              </div>

              {/* Asset list */}
              {activeTab === "assets" && (
                <div className="flex flex-col gap-2">
                  {assets.map((asset) => (
                    <AssetItem key={asset.id} asset={asset} />
                  ))}
                </div>
              )}

              {/* Transaction list */}
              {activeTab === "transactions" && (
                <div className="flex flex-col gap-2">
                  {transactions.map((tx) => (
                    <TransactionItem key={tx.id} tx={tx} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div
            className="absolute bottom-0 left-0 right-0 border-t"
            style={{
              background: "rgba(13,14,35,0.95)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center justify-around px-2 py-2 pb-5">
              {navItems.map(({ id, label, Icon }) => {
                const isActive = activeNav === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveNav(id)}
                    className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all relative"
                  >
                    {isActive && (
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                        style={{ background: "#7B61FF" }}
                      />
                    )}
                    <Icon active={isActive} />
                    <span
                      className="text-xs font-medium"
                      style={{ color: isActive ? "#7B61FF" : "#8B8BAD" }}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

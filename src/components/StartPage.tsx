import { RocketIcon, StoreIcon, CashIcon, ArrowRightIcon } from "./Icons";

interface StartPageProps {
  onHaveBusiness: () => void;
  onWantBusiness: () => void;
  onWantWork: () => void;
}

interface ChoiceCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  onClick: () => void;
  delay: string;
}

function ChoiceCard({ title, subtitle, icon, gradient, glowColor, onClick, delay }: ChoiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full max-w-sm animate-fade-in-up opacity-0 ${delay} overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:scale-[1.02]`}
      style={{ animationDelay: undefined }}
    >
      {/* Glow on hover */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowColor, filter: "blur(40px)", zIndex: -1 }}
      />
      {/* Top gradient line */}
      <div
        className="absolute left-0 top-0 h-px w-full opacity-50"
        style={{ background: gradient }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:ring-white/20">
          {icon}
        </div>

        {/* Title */}
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mb-6 text-sm leading-relaxed text-zinc-400">{subtitle}</p>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors duration-300 group-hover:text-white">
          <span>Get started</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Corner shimmer */}
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-20" style={{ background: gradient }} />
    </button>
  );
}

export default function StartPage({ onHaveBusiness, onWantBusiness, onWantWork }: StartPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in opacity-0">
          <div className="inline-flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
              <span className="text-xl font-black text-black">W</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">whop</span>
          </div>
        </div>

        {/* Rocket icon */}
        <div className="mb-6 animate-float">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 ring-1 ring-white/10">
            <RocketIcon className="h-12 w-12" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-4 max-w-2xl animate-fade-in-up text-balance text-4xl font-bold tracking-tight text-white opacity-0 delay-200 sm:text-5xl md:text-6xl">
          Welcome to Whop
        </h1>
        <p className="max-w-md animate-fade-in-up text-balance text-base leading-relaxed text-zinc-400 opacity-0 delay-300 sm:text-lg">
          Sell paid groups, get paid in USDC. The crypto-native marketplace for key opinion leaders. Choose your path to get started.
        </p>
      </div>

      {/* Choice cards */}
      <div className="flex w-full max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-center md:gap-5">
        <ChoiceCard
          title="I have a business"
          subtitle="Launch your paid group and start collecting USDC from your followers in minutes."
          icon={<StoreIcon className="h-10 w-10" />}
          gradient="linear-gradient(90deg, #10b981, #047857)"
          glowColor="rgba(16, 185, 129, 0.15)"
          onClick={onHaveBusiness}
          delay="delay-400"
        />
        <ChoiceCard
          title="I want a business"
          subtitle="Discover opportunities and start earning USDC with our AI-powered tools."
          icon={<CashIcon className="h-10 w-10" />}
          gradient="linear-gradient(90deg, #f59e0b, #d97706)"
          glowColor="rgba(245, 158, 11, 0.15)"
          onClick={onWantBusiness}
          delay="delay-500"
        />
        <ChoiceCard
          title="I want to work"
          subtitle="Find flexible gigs, freelance projects, and full-time roles that fit you."
          icon={<BriefcaseIconSmall />}
          gradient="linear-gradient(90deg, #3b82f6, #1e40af)"
          glowColor="rgba(59, 130, 246, 0.15)"
          onClick={onWantWork}
          delay="delay-600"
        />
      </div>

      {/* Footer */}
      <div className="mt-16 animate-fade-in opacity-0 delay-700">
        <p className="text-xs text-zinc-600">
          By continuing, you agree to Whop's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

function BriefcaseIconSmall() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="48" height="36" rx="4" stroke="white" strokeWidth="2" />
      <path d="M22 20V14C22 12 23 11 25 11H39C41 11 42 12 42 14V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 34H56" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="28" y="32" width="8" height="6" rx="1" fill="white" />
      <defs>
        <linearGradient id="briefGrad" x1="32" y1="11" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <rect x="8" y="20" width="48" height="36" rx="4" fill="url(#briefGrad)" opacity="0.2" />
    </svg>
  );
}

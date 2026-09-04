export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      {/* Radial gradient glow */}
      <div
        className="absolute left-1/2 top-[-20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(39,117,202,0.3) 0%, rgba(27,75,138,0.1) 50%, transparent 70%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Floating orbs */}
      <div
        className="absolute left-[10%] top-[30%] h-[300px] w-[300px] rounded-full opacity-20 blur-[100px] animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #2775ca, transparent)" }}
      />
      <div
        className="absolute right-[5%] top-[50%] h-[250px] w-[250px] rounded-full opacity-15 blur-[100px] animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, #10b981, transparent)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[40%] h-[200px] w-[200px] rounded-full opacity-15 blur-[80px] animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, #f59e0b, transparent)",
          animationDelay: "0.8s",
        }}
      />

      {/* Floating USDC coins */}
      <FloatingCoin className="left-[8%] top-[18%] h-12 w-12" delay="0s" duration="5s" />
      <FloatingCoin className="right-[12%] top-[25%] h-16 w-16" delay="1.2s" duration="6.5s" />
      <FloatingCoin className="left-[18%] bottom-[20%] h-10 w-10" delay="2s" duration="4.5s" />
      <FloatingCoin className="right-[8%] bottom-[15%] h-14 w-14" delay="0.5s" duration="7s" />
      <FloatingCoin className="left-[45%] top-[8%] h-8 w-8" delay="3s" duration="5.5s" />
      <FloatingCoin className="right-[30%] bottom-[30%] h-11 w-11" delay="1.8s" duration="6s" />
      <FloatingCoin className="left-[35%] bottom-[8%] h-9 w-9" delay="2.5s" duration="5s" />
      <FloatingCoin className="right-[20%] top-[60%] h-10 w-10" delay="0.8s" duration="6.5s" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.4) 70%, rgba(10,10,10,0.8) 100%)",
        }}
      />
    </div>
  );
}

interface FloatingCoinProps {
  className: string;
  delay: string;
  duration: string;
}

function FloatingCoin({ className, delay, duration }: FloatingCoinProps) {
  return (
    <div
      className={`absolute ${className} animate-float opacity-20`}
      style={{ animationDelay: delay, animationDuration: duration }}
    >
      <UsdcCoin />
    </div>
  );
}

function UsdcCoin() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full drop-shadow-[0_0_8px_rgba(39,117,202,0.4)]">
      {/* Outer ring */}
      <circle cx="32" cy="32" r="30" fill="#2775ca" />
      <circle cx="32" cy="32" r="30" stroke="#1b4b8a" strokeWidth="1" opacity="0.5" />
      {/* Inner circle */}
      <circle cx="32" cy="32" r="24" fill="#2775ca" />
      {/* Dollar sign */}
      <path
        d="M40 28C40 25 37 23 33 23H31C27 23 24 25 24 28C24 31 27 32 31 33H33C37 34 40 35 40 38C40 41 37 43 33 43H31C27 43 24 41 24 38"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M32 20V24M32 42V46" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      {/* Radial gradient glow */}
      <div
        className="absolute left-1/2 top-[-20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)",
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
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
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

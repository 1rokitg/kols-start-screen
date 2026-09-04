import { useState } from "react";
import PageHeader from "./PageHeader";
import { CheckIcon, CashIcon, ArrowRightIcon, SparkleIcon, StarIcon } from "./Icons";

interface WantBusinessProps {
  onBack: () => void;
}

const opportunities = [
  {
    title: "Reselling",
    desc: "Buy low, sell high. Start with digital arbitrage and scale up.",
    earning: "$500–$5K/mo",
    difficulty: "Beginner",
    tag: "Popular",
    gradient: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-500/20",
  },
  {
    title: "Content Creation",
    desc: "Build an audience and monetize through memberships and tips.",
    earning: "$1K–$50K/mo",
    difficulty: "Intermediate",
    tag: "Trending",
    gradient: "from-blue-500/20 to-cyan-600/20",
    border: "border-blue-500/20",
  },
  {
    title: "SaaS Builder",
    desc: "Create software tools and sell subscriptions to customers.",
    earning: "$2K–$100K/mo",
    difficulty: "Advanced",
    tag: "High earning",
    gradient: "from-green-500/20 to-emerald-600/20",
    border: "border-green-500/20",
  },
  {
    title: "Community Leader",
    desc: "Build a paid community around a niche you're passionate about.",
    earning: "$500–$20K/mo",
    difficulty: "Beginner",
    tag: "New",
    gradient: "from-pink-500/20 to-rose-600/20",
    border: "border-pink-500/20",
  },
];

export default function WantBusiness({ onBack }: WantBusinessProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="animate-scale-in opacity-0 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20 ring-1 ring-amber-500/30">
            <SparkleIcon className="h-10 w-10 text-amber-400" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Let's build it!</h1>
          <p className="mb-8 max-w-md text-zinc-400">
            You're starting your journey with <span className="font-semibold text-white">{selected}</span>. Our AI will generate a personalized plan to get you earning fast.
          </p>
          <button
            onClick={onBack}
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-zinc-100"
          >
            Back to start
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-20">
      <PageHeader
        onBack={onBack}
        step="Step 1 of 2"
        title="How do you want to earn?"
        subtitle="Pick a path and we'll give you a step-by-step plan to start making money."
      />

      {/* Opportunity cards */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {opportunities.map((opp, i) => (
          <button
            key={opp.title}
            onClick={() => setSelected(opp.title)}
            className={`group relative animate-fade-in-up overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 hover:scale-[1.02] opacity-0 ${
              delayClass(i)
            } ${
              selected === opp.title
                ? `${opp.border} bg-gradient-to-br ${opp.gradient} ring-1 ring-white/20`
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
            }`}
          >
            {/* Tag */}
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white">
                {opp.tag === "Popular" && <StarIcon className="h-3 w-3 text-amber-400" />}
                {opp.tag}
              </span>
              <span className="text-xs font-medium text-zinc-500">{opp.difficulty}</span>
            </div>

            <h3 className="mb-2 text-xl font-bold text-white">{opp.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400">{opp.desc}</p>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500">Earning potential</p>
                <p className="text-sm font-semibold text-white">{opp.earning}</p>
              </div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                  selected === opp.title ? "bg-white text-black" : "bg-white/10 text-white group-hover:bg-white/20"
                }`}
              >
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </div>

            {selected === opp.title && (
              <div className="absolute right-4 top-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <CheckIcon className="h-4 w-4 text-black" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 animate-fade-in-up opacity-0 delay-500">
        <button
          onClick={() => selected && setSubmitted(true)}
          disabled={!selected}
          className={`group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 ${
            selected
              ? "bg-white text-black hover:scale-105"
              : "cursor-not-allowed bg-white/10 text-zinc-500"
          }`}
        >
          <CashIcon className="h-5 w-5" />
          <span>Start earning</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function delayClass(index: number): string {
  const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
  return delays[index % delays.length];
}

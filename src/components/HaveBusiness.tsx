import { useState } from "react";
import PageHeader from "./PageHeader";
import {
  CheckIcon,
  StoreIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldIcon,
  GlobeIcon,
  ChartIcon,
} from "./Icons";
import { HaveBusinessProps } from "./business/lib/types";
import { categories, features } from "./business/lib/constants";

export default function HaveBusiness({ onBack }: HaveBusinessProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="animate-scale-in opacity-0 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-500/30">
            <CheckIcon className="h-10 w-10 text-green-400" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            You're all set!
          </h1>
          <p className="mb-8 max-w-md text-zinc-400">
            Your store for{" "}
            <span className="font-semibold text-white">{selected}</span> is
            being set up. We'll guide you through adding your first product.
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
        title="What do you sell?"
        subtitle="Tell us about your business so we can set up the right tools for you."
      />

      {/* Category grid */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setSelected(cat.name)}
            className={`group relative animate-fade-in-up opacity-0 rounded-2xl border p-5 text-left transition-all duration-300 hover:scale-[1.02] ${delayClass(
              i,
            )} ${
              selected === cat.name
                ? "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500/30"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
            }`}
          >
            <div className="mb-3 text-3xl">{cat.icon}</div>
            <h3 className="mb-1 text-base font-semibold text-white">
              {cat.name}
            </h3>
            <p className="text-xs leading-relaxed text-zinc-500">{cat.desc}</p>
            {selected === cat.name && (
              <div className="absolute right-4 top-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Features */}
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feat, i) => (
          <div
            key={feat.title}
            className={`animate-fade-in-up rounded-2xl border border-white/5 bg-white/[0.02] p-5 opacity-0 ${delayClass(i + 2)}`}
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-blue-400 ring-1 ring-white/10">
              {feat.icon}
            </div>
            <h4 className="mb-1 text-sm font-semibold text-white">
              {feat.title}
            </h4>
            <p className="text-xs leading-relaxed text-zinc-500">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 animate-fade-in-up opacity-0 delay-600">
        <button
          onClick={handleSubmit}
          disabled={!selected}
          className={`group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 ${
            selected
              ? "bg-white text-black hover:scale-105"
              : "cursor-not-allowed bg-white/10 text-zinc-500"
          }`}
        >
          <StoreIcon className="h-5 w-5" />
          <span>Set up my store</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function delayClass(index: number): string {
  const delays = [
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
    "delay-500",
    "delay-600",
  ];
  return delays[index % delays.length];
}

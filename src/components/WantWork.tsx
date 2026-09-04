import { useState } from "react";
import PageHeader from "./PageHeader";
import { CheckIcon, ArrowRightIcon, BriefcaseIcon, UsersIcon, GlobeIcon } from "./Icons";

interface WantWorkProps {
  onBack: () => void;
}

const roles = [
  { title: "Customer Support", type: "Full-time", remote: true, pay: "$40K–$70K" },
  { title: "Community Manager", type: "Full-time", remote: true, pay: "$50K–$90K" },
  { title: "Software Engineer", type: "Full-time", remote: true, pay: "$100K–$200K" },
  { title: "Marketing Specialist", type: "Contract", remote: true, pay: "$30–$80/hr" },
  { title: "Designer", type: "Freelance", remote: true, pay: "$40–$120/hr" },
  { title: "Sales Representative", type: "Full-time", remote: false, pay: "$50K–$120K" },
];

const benefits = [
  { icon: <BriefcaseIcon className="h-5 w-5" />, title: "Flexible roles", desc: "Full-time, contract, or freelance — your choice" },
  { icon: <UsersIcon className="h-5 w-5" />, title: "Top companies", desc: "Work with the best teams on Whop" },
  { icon: <GlobeIcon className="h-5 w-5" />, title: "Remote-first", desc: "Most roles are fully remote worldwide" },
];

export default function WantWork({ onBack }: WantWorkProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="animate-scale-in opacity-0 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 ring-1 ring-blue-500/30">
            <CheckIcon className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Applications coming your way!</h1>
          <p className="mb-8 max-w-md text-zinc-400">
            We've matched you with <span className="font-semibold text-white">{selected}</span> roles. Check your inbox for personalized job recommendations.
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
        title="What kind of work?"
        subtitle="Browse open roles and find the one that fits your skills and lifestyle."
      />

      {/* Role list */}
      <div className="w-full max-w-3xl space-y-3">
        {roles.map((role, i) => (
          <button
            key={role.title}
            onClick={() => setSelected(role.title)}
            className={`group flex w-full animate-fade-in-up items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 hover:scale-[1.01] opacity-0 ${
              delayClass(i)
            } ${
              selected === role.title
                ? "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500/30"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <BriefcaseIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{role.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-zinc-500">
                  <span>{role.type}</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span>{role.pay}</span>
                  {role.remote && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-zinc-600" />
                      <span className="text-green-400">Remote</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                selected === role.title
                  ? "bg-blue-500"
                  : "bg-white/5 group-hover:bg-white/10"
              }`}
            >
              {selected === role.title ? (
                <CheckIcon className="h-4 w-4 text-white" />
              ) : (
                <ArrowRightIcon className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Benefits */}
      <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className={`animate-fade-in-up rounded-2xl border border-white/5 bg-white/[0.02] p-5 opacity-0 ${delayClass(i + 2)}`}
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-blue-400 ring-1 ring-white/10">
              {b.icon}
            </div>
            <h4 className="mb-1 text-sm font-semibold text-white">{b.title}</h4>
            <p className="text-xs leading-relaxed text-zinc-500">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 animate-fade-in-up opacity-0 delay-600">
        <button
          onClick={() => selected && setSubmitted(true)}
          disabled={!selected}
          className={`group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 ${
            selected
              ? "bg-white text-black hover:scale-105"
              : "cursor-not-allowed bg-white/10 text-zinc-500"
          }`}
        >
          <BriefcaseIcon className="h-5 w-5" />
          <span>Apply now</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function delayClass(index: number): string {
  const delays = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600"];
  return delays[index % delays.length];
}

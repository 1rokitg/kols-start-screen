import { ArrowLeftIcon } from "./Icons";

interface PageHeaderProps {
  onBack: () => void;
  step: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ onBack, step, title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <button
        onClick={onBack}
        className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        <span>Back</span>
      </button>

      <div className="mb-3 animate-fade-in text-xs font-semibold uppercase tracking-widest text-blue-400 opacity-0">
        {step}
      </div>
      <h1 className="mb-3 max-w-2xl animate-fade-in-up text-balance text-3xl font-bold tracking-tight text-white opacity-0 delay-100 sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="max-w-lg animate-fade-in-up text-balance text-base leading-relaxed text-zinc-400 opacity-0 delay-200">
          {subtitle}
        </p>
      )}
    </div>
  );
}

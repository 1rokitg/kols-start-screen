import { ZapIcon, ShieldIcon, GlobeIcon, ChartIcon } from "../../Icons";

export const categories = [
  {
    name: "Digital Products",
    desc: "Ebooks, templates, presets, downloads",
    icon: "📦",
  },
  { name: "Communities", desc: "Discord, Slack, Telegram groups", icon: "💬" },
  { name: "SaaS & Software", desc: "Apps, tools, subscriptions", icon: "⚡" },
  {
    name: "Courses & Education",
    desc: "Online courses, coaching, tutorials",
    icon: "🎓",
  },
  {
    name: "Services & Consulting",
    desc: "Freelance, agencies, expert help",
    icon: "🤝",
  },
  {
    name: "Memberships",
    desc: "Premium content, recurring access",
    icon: "🔑",
  },
];

export const features = [
  {
    icon: <ZapIcon className="h-5 w-5" />,
    title: "Instant setup",
    desc: "Launch your store in minutes, not days",
  },
  {
    icon: <ShieldIcon className="h-5 w-5" />,
    title: "Secure payments",
    desc: "Built-in checkout with fraud protection",
  },
  {
    icon: <GlobeIcon className="h-5 w-5" />,
    title: "Global reach",
    desc: "Sell to anyone, anywhere in the world",
  },
  {
    icon: <ChartIcon className="h-5 w-5" />,
    title: "Real-time analytics",
    desc: "Track sales, revenue, and customers live",
  },
];

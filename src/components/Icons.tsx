interface IconProps {
  className?: string;
}

export function RocketIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4C40 8 46 16 46 28C46 36 42 44 32 52C22 44 18 36 18 28C18 16 24 8 32 4Z"
        fill="url(#rocketGrad)"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="26" r="5" fill="#0a0a0a" stroke="white" strokeWidth="1.5" />
      <path
        d="M18 36L10 44L18 42M46 36L54 44L46 42"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M28 48L32 56L36 48" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="rocketGrad" x1="32" y1="4" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1e40af" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StoreIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 24L12 10H52L56 24"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M8 24V28C8 31 10 34 14 34C18 34 20 31 20 28C20 31 22 34 26 34C30 34 32 31 32 28C32 31 34 34 38 34C42 34 44 31 44 28C44 31 46 34 50 34C54 34 56 31 56 28V24"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <rect x="12" y="36" width="40" height="20" rx="2" stroke="white" strokeWidth="2" />
      <path d="M28 56V44H36V56" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="storeGrad" x1="32" y1="10" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect x="12" y="36" width="40" height="20" rx="2" fill="url(#storeGrad)" opacity="0.3" />
    </svg>
  );
}

export function CashIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="16" width="52" height="32" rx="4" stroke="white" strokeWidth="2" />
      <circle cx="32" cy="32" r="8" stroke="white" strokeWidth="2" />
      <path d="M32 28V36M30 30H34M30 34H34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 22C12 22 14 24 14 26M54 42C52 42 50 40 50 38" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="cashGrad" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect x="6" y="16" width="52" height="32" rx="4" fill="url(#cashGrad)" opacity="0.15" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 6V5C9 4 10 3 11 3H13C14 3 15 4 15 5V6M3 8C3 7 4 6 5 6H19C20 6 21 7 21 8V18C21 19 20 20 19 20H5C4 20 3 19 3 18V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 11H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 11V13H14V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 13L9 17L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
        fill="currentColor"
      />
      <path d="M19 3L19.7 5.3L22 6L19.7 6.7L19 9L18.3 6.7L16 6L18.3 5.3L19 3Z" fill="currentColor" opacity="0.6" />
      <path d="M5 16L5.7 18.3L8 19L5.7 19.7L5 22L4.3 19.7L2 19L4.3 18.3L5 16Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function UsersIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 11C11.2 11 13 9.2 13 7C13 4.8 11.2 3 9 3C6.8 3 5 4.8 5 7C5 9.2 6.8 11 9 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3 21C3 17 5.5 14 9 14C12.5 14 15 17 15 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 3C18.2 3 20 4.8 20 7C20 9.2 18.2 11 16 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M16 14C19.5 14 22 17 22 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChartIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V4M4 20H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 16V12M12 16V8M16 16V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3C14.5 6 14.5 18 12 21M12 3C9.5 6 9.5 18 12 21"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ZapIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 2L4 14H11L9 22L20 10H13L13 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L4 6V12C4 17 7 20 12 21C17 20 20 17 20 12V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" />
    </svg>
  );
}

'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 48, text: 'text-xl' },
    lg: { icon: 64, text: 'text-2xl' },
    xl: { icon: 80, text: 'text-3xl' },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <circle cx="60" cy="60" r="56" stroke="url(#logoGradient)" strokeWidth="4" fill="none" />

        {/* Inner circle background */}
        <circle cx="60" cy="60" r="48" fill="white" />

        {/* Shield shape - representing protection */}
        <path
          d="M60 25
             C60 25 35 35 35 55
             C35 75 60 95 60 95
             C60 95 85 75 85 55
             C85 35 60 25 60 25Z"
          fill="url(#shieldGradient)"
          opacity="0.9"
        />

        {/* Plus/Cross medical symbol inside shield */}
        <rect x="55" y="40" width="10" height="35" rx="2" fill="white" />
        <rect x="45" y="52" width="30" height="10" rx="2" fill="white" />

        {/* Small heart at bottom of shield */}
        <path
          d="M60 82
             C60 82 52 76 52 72
             C52 69 54 67 57 67
             C59 67 60 69 60 69
             C60 69 61 67 63 67
             C66 67 68 69 68 72
             C68 76 60 82 60 82Z"
          fill="white"
        />

        {/* Decorative dots around - representing prevention/awareness */}
        <circle cx="60" cy="12" r="4" fill="#0ea5e9" />
        <circle cx="98" cy="35" r="3" fill="#8b5cf6" />
        <circle cx="98" cy="85" r="3" fill="#d946ef" />
        <circle cx="60" cy="108" r="4" fill="#10b981" />
        <circle cx="22" cy="85" r="3" fill="#f59e0b" />
        <circle cx="22" cy="35" r="3" fill="#0ea5e9" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${text} gradient-text`}>
            PrEP Saúde
          </span>
          <span className="text-xs text-slate-500 -mt-1">
            Prevenção Inteligente
          </span>
        </div>
      )}
    </div>
  );
}

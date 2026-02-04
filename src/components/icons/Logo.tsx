'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'default' | 'white';
}

export default function Logo({ className = '', size = 'md', showText = true, variant = 'default' }: LogoProps) {
  const sizes = {
    sm: { icon: 36, text: 'text-xl', tagline: 'text-[10px]' },
    md: { icon: 44, text: 'text-2xl', tagline: 'text-xs' },
    lg: { icon: 56, text: 'text-3xl', tagline: 'text-sm' },
    xl: { icon: 72, text: 'text-4xl', tagline: 'text-base' },
  };

  const { icon, text, tagline } = sizes[size];

  const textColor = variant === 'white' ? 'text-white' : 'text-[#1a1a2e]';
  const accentColor = variant === 'white' ? 'text-white/80' : 'text-[#e94560]';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Modern Shield Icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f969c" />
            <stop offset="100%" stopColor="#0d8287" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e94560" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>

        {/* Shield base */}
        <path
          d="M24 4L6 12V22C6 33.1 13.8 43.4 24 46C34.2 43.4 42 33.1 42 22V12L24 4Z"
          fill="url(#shieldGrad)"
        />

        {/* Inner shield highlight */}
        <path
          d="M24 8L10 14.5V22C10 31 16.5 39.5 24 42C31.5 39.5 38 31 38 22V14.5L24 8Z"
          fill="white"
          fillOpacity="0.15"
        />

        {/* Check mark / Protection symbol */}
        <path
          d="M20 24L23 27L28 20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small accent dot */}
        <circle cx="24" cy="35" r="2.5" fill="url(#accentGrad)" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-bold ${text} ${textColor} tracking-tight`}>
            PrEP<span className={accentColor}>ara</span>
          </span>
          <span className={`${tagline} ${variant === 'white' ? 'text-white/60' : 'text-gray-500'} font-medium tracking-wide`}>
            Prevenção sem tabu
          </span>
        </div>
      )}
    </div>
  );
}

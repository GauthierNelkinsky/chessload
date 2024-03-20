<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6667 13.3333L13.3333 13.3333L13.3333 26.6667L18.6667 32L32 32L32 18.6667L26.6667 13.3333Z" fill="#2D3436"/>
<path d="M13.3333 13.3333L13.3333 -8.13016e-07L-2.38419e-07 -1.39583e-06L-8.21237e-07 13.3333L13.3333 13.3333Z" fill="#2D3436"/>
<path d="M26.6667 13.3333L32 18.6667L32 5.33333L26.6667 -2.3229e-07L26.6667 13.3333Z" fill="#2D3436"/>
<path d="M18.6667 32L13.3333 26.6667L-1.40406e-06 26.6667L5.33333 32L18.6667 32Z" fill="#2D3436"/>
</svg>


import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
    size?: number;
    color?: string;
}

const Chessload = ({ className, size = 32}: IProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={cn(className)}
    >
        <path d="M26.6667 13.3333L13.3333 13.3333L13.3333 26.6667L18.6667 32L32 32L32 18.6667L26.6667 13.3333Z"/>
        <path d="M13.3333 13.3333L13.3333 -8.13016e-07L-2.38419e-07 -1.39583e-06L-8.21237e-07 13.3333L13.3333 13.3333Z"/>
        <path d="M26.6667 13.3333L32 18.6667L32 5.33333L26.6667 -2.3229e-07L26.6667 13.3333Z"/>
        <path d="M18.6667 32L13.3333 26.6667L-1.40406e-06 26.6667L5.33333 32L18.6667 32Z"/>
    </svg>
  );
};

export default Chessload;
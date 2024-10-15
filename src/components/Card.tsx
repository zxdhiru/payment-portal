import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white/30 backdrop-blur-lg rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}

import { ReactNode } from 'react';

interface CustomButtonProps {
    children: ReactNode;
    href: string;
    className?: string;
}

export default function CustomButton({ children, className, href }: CustomButtonProps) {
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
}

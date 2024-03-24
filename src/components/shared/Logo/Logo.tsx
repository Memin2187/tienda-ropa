import Link from 'next/link';
import type { FC } from 'react';
import { GiSpiderWeb } from 'react-icons/gi';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link
      className="flex cursor-pointer items-center gap-2 text-primary"
      href="/"
    >
      <GiSpiderWeb className="text-2xl" />
      <span className={`${className} text-2xl font-bold`}>Clo-mmerce</span>
    </Link>
  );
};



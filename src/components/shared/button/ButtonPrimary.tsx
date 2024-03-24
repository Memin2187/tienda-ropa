

import type { ButtonProps } from '@/components/shared/button/Button';
import Button from '@/components/shared/button/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  href?: any;
  textClassName?: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = '',
  textClassName = '',
  ...args
}) => {
  return (
    <Button
      className={`disabled:bg-opacity/70 rounded-full bg-gray-500 ${
        textClassName || 'text-white'
      } hover:bg-primary/80 hover:text-white ${className}`}
      {...args}
    />
  );
};



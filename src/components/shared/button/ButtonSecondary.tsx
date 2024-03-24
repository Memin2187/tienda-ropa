import type { ButtonProps } from '@/components/shared/button/Button';
import Button from '@/components/shared/button/Button'

export interface ButtonSecondaryProps extends ButtonProps {
  href?: any;
}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  ...args
}) => {
  return (
    <Button className={`bg-black text-white ${className}`} {...args} />
  );
};
 


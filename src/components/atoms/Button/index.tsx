import clsx from 'clsx';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger';
  outline?: boolean;
  disabled?: boolean;
}

type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  outline = false,
  disabled = false,
  ...props
}) => (
  <button
    onClick={onClick}
    className={clsx('dark:text-white text-gray-900 w-100 p-2 rounded', {
      'dark:bg-cyan-500 bg-cyan-600': variant === 'primary' && !outline,
      'dark:bg-gray-200 bg-gray-300': variant === 'secondary' && !outline,
      'dark:bg-gray-700 bg-gray-700': variant === 'tertiary' && !outline,
      'dark:bg-red-500 bg-red-600': variant === 'danger' && !outline,
      'dark:border-cyan-500 border-cyan-600': variant === 'primary' && outline,
      'dark:border-gray-200 border-gray-300': variant === 'secondary' && outline,
      'dark:border-gray-500 border-gray-600': variant === 'tertiary' && outline,
      'dark:border-red-500 border-red-600': variant === 'danger' && outline,
      'cursor-not-allowed opacity-50': disabled,
      'cursor-pointer': !disabled,
    })}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;

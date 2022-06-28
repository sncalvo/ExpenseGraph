import clsx from 'clsx';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
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
      'dark:bg-cyan-500 bg-cyan-600 hover:bg-cyan-300 dark:hover:bg-cyan-400':
        variant === 'primary' && !outline,
      'dark:bg-gray-200 bg-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100':
        variant === 'secondary' && !outline,
      'dark:bg-gray-700 bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500':
        variant === 'tertiary' && !outline,
      'dark:bg-red-500 bg-red-600 hover:bg-red-300 dark:hover:bg-red-400':
        variant === 'danger' && !outline,
      'dark:border-cyan-500 border-cyan-600 hover:border-cyan-300 dark:hover:border-cyan-400':
        variant === 'primary' && outline,
      'dark:border-gray-200 border-gray-300 hover:border-gray-50 dark:hover:border-gray-100':
        variant === 'secondary' && outline,
      'dark:border-gray-500 border-gray-600 hover:border-gray-500 dark:hover:border-gray-500':
        variant === 'tertiary' && outline,
      'dark:border-red-500 border-red-600 hover:border-red-300 dark:hover:border-red-400':
        variant === 'danger' && outline,
      'cursor-not-allowed opacity-50': disabled,
      'cursor-pointer': !disabled,
      'transition-all duration-200 ease-in-out': !disabled,
    })}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;

import clsx from 'clsx';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger';
  outline?: boolean;
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ onClick, children, variant, outline, size, disabled }) => (
  <button onClick={onClick} className={clsx({})} disabled={disabled}>
    {children}
  </button>
);

export default Button;

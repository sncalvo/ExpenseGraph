import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
}

type InputProps = Props & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const { register } = useFormContext();

  return (
    <input
      className={clsx(
        'w-full p-2 border-2 border-cyan-600 dark:border-cyan-500 rounded',
        'focus:dark:border-cyan-300 focus:border-cyan-600',
        'focus:dark:outline-cyan-300 focus:outline-cyan-600'
      )}
      {...register(name)}
      {...props}
    />
  );
};

export default Input;

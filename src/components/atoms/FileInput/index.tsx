import clsx from 'clsx';
import { useId, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  multiple?: boolean;
}

type FileinputProps = Props;

const Fileinput: React.FC<FileinputProps> = ({ name, multiple = false }) => {
  const { register } = useFormContext();

  return (
    <div>
      <input
        type="file"
        {...register(name)}
        className={clsx(
          'test-sm text-grey-500',
          'file:text-white file:mr-5 file:py-2 file:px-6 file:rounded file:border-0 file:text-sm',
          'file:font-medium dark:file:bg-cyan-500 file:bg-cyan-600',
          'hover:file:cursor-pointer hover:file:bg-cyan-200',
          'file:transition-all'
        )}
        multiple={multiple}
      />
    </div>
  );
};

export default Fileinput;

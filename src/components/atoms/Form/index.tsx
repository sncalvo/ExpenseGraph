import { DevTool } from '@hookform/devtools';
import { useYupValidationResolver } from '@hooks';
import { PropsWithChildren } from 'react';
import { DeepPartial, FormProvider, UnpackNestedValue, useForm } from 'react-hook-form';
import { SchemaOf } from 'yup';

interface Props<T> {
  onSubmit?: (values: T) => void;
  schema?: SchemaOf<T>;
  defaultValues?: DeepPartial<T> | undefined;
  onChange?: () => void;
  mode?: 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all';
}

const Form = <T,>({
  children,
  schema,
  onSubmit,
  defaultValues,
  onChange,
  mode = 'onSubmit',
}: PropsWithChildren<Props<T>>) => {
  const resolver = useYupValidationResolver(schema);
  const { control, ...methods } = useForm<T>({
    resolver: resolver,
    defaultValues,
    mode,
  });

  const handleSubmit = methods.handleSubmit((values) => {
    const castedValues = values as T;
    if (onSubmit) onSubmit(castedValues);
  });

  return (
    <>
      <FormProvider {...methods} control={control}>
        <form onSubmit={handleSubmit} className="h-100 w-100" onChange={() => onChange?.()}>
          {children}
        </form>
      </FormProvider>
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </>
  );
};
export default Form;

import { useCallback } from 'react';
import { ResolverResult } from 'react-hook-form';
import * as yup from 'yup';

const useYupValidationResolver = <T>(validationSchema?: yup.SchemaOf<T>) =>
  useCallback(
    async (data: T): Promise<ResolverResult<T>> => {
      if (!validationSchema) {
        return { values: data, errors: {} };
      }

      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        } as ResolverResult<T>;
      } catch (errors) {
        if (!(errors instanceof yup.ValidationError)) {
          return {
            values: data,
            errors: {},
          } as ResolverResult<T>;
        }

        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path ?? '']: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        } as ResolverResult<T>;
      }
    },
    [validationSchema]
  );

export default useYupValidationResolver;

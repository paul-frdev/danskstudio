import React, { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import '../../styles/UI/input.scss';
import cn from 'classnames';
import { FieldError } from 'react-hook-form';



interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder?: string;
  label?: string;
  error?: FieldError
}

export const Input = forwardRef(({ error, placeholder, label, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn('input__wrapper', className)}>
      <label>{label}</label>
      <input
        ref={ref}
        placeholder={placeholder}
        className={cn('input', {
          'input__error': error
        })}
        {...props}
      />
      {error &&
        <span className='error-message'>{error.message}</span>
      }
    </div>
  )
});

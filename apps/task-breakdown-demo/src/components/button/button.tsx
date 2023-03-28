import { ReactNode } from 'react';
import './button.scss';

export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className='button' type="button">
      {props.children}
    </button>
  );
}

export default Button;

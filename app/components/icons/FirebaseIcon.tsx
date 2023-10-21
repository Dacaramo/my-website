import * as React from 'react';
import { memo, SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 62 86'
    {...props}
  >
    <path
      fill={props.fill ?? 'currentColor'}
      d='m61.5 69.388-7.908-50.163c-.158-.928-.937-1.624-1.88-1.624-.525 0-.998.215-1.346.567L.5 69.388l27.593 15.867c.8.47 1.762.745 2.785.745 1.02 0 1.977-.276 2.802-.756L61.5 69.388ZM14.386 1.025A1.901 1.901 0 0 0 12.707 0c-.95 0-1.74.713-1.884 1.652L2.52 56.162l20.801-38.03-8.93-17.096-.005-.011Zm24.691 24.589-6.39-12.478A1.903 1.903 0 0 0 31 12.098c-.728 0-1.36.416-1.683 1.029l-.003.01-28.06 51.307 37.823-38.83Z'
    />
  </svg>
);
const FirebaseIcon = memo(SvgComponent);
export default FirebaseIcon;

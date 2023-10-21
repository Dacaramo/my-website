import * as React from 'react';
import { memo, SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 114 85'
    {...props}
  >
    <path
      fill={props.fill ?? 'currentColor'}
      d='M25.092 70.534H56.92L65.07 85H.5l22.67-39.614L32.673 28.8l8.16 14.252-15.74 27.483Zm11.865-49.237 7.839-13.691 44.329 77.39H73.427l-36.47-63.698ZM49.15 0H64.83l48.67 85H97.802L49.152 0Z'
    />
  </svg>
);
const AmplifyIcon = memo(SvgComponent);
export default AmplifyIcon;

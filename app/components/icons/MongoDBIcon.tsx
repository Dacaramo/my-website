import * as React from 'react';
import { memo, SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 39 85'
    {...props}
  >
    <path
      fill={props.fill ?? 'currentColor'}
      d='M37.803 33.84C33.348 14.079 22.816 7.584 21.685 5.1c-.987-1.395-1.868-3.379-2.59-5.1-.128 1.753-.195 2.426-1.844 4.193C14.703 6.198 1.609 17.233.544 39.681c-.994 20.938 15.05 33.416 17.229 35.006l.246.177c.454 3.37.841 6.75 1.163 10.136h1.696a101.305 101.305 0 0 1 1.797-10.873c1.47-1.048 2.129-1.64 2.996-2.454a40.168 40.168 0 0 0 9.578-13.621 40.337 40.337 0 0 0 3.248-16.356c.035-2.883-.363-5.886-.694-7.855ZM18.996 62.866s0-29.364.969-29.36c.75 0 1.727 37.877 1.727 37.877-1.343-.16-2.697-6.233-2.697-8.517Z'
    />
  </svg>
);
const MongoDBIcon = memo(SvgComponent);
export default MongoDBIcon;

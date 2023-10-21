'use client';

import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

import { PRUNE } from '@/app/constants/colors';
import useElementRect from '@/app/hooks/useElementRect';

export interface Option {
  key: string;
  value: string;
}

interface Props {
  id: string;
  label: string;
  placeholder: string;
  availableOptions: Array<Option>;
  isLabelVisible?: boolean;
  isNoneOptionAvailable?: boolean;
  className?: string;
  style?: CSSProperties;
  value: string;
  defaultValue?: string;
  backgroundColor?: string;
  onChange: (selectedOption: Option | null) => void;
}

const Select: FC<Props> = ({
  id,
  label,
  placeholder,
  availableOptions,
  isLabelVisible = false,
  isNoneOptionAvailable = false,
  className,
  style,
  value,
  defaultValue,
  backgroundColor = PRUNE,
  onChange: handleChange,
}) => {
  const [areOptionsVisible, setAreOptionsVisible] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const ulRect = useElementRect(ulRef);

  const liClasses =
    'p-2 text-paragraph text-pale-acid-green font-medium hover:text-acid-green cursor-pointer whitespace-nowrap';

  const getLiStyles = (i: number): CSSProperties => {
    const liStyles: CSSProperties = {
      backgroundColor,
    };
    const liBorderRadius = '0.5rem';

    if (i === 0) {
      liStyles.borderTopLeftRadius = liBorderRadius;
      liStyles.borderTopRightRadius = liBorderRadius;
    }
    if (i === availableOptions.length - 1) {
      liStyles.borderBottomLeftRadius = liBorderRadius;
      liStyles.borderBottomRightRadius = liBorderRadius;
    }

    return liStyles;
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!buttonRef.current || !ulRef.current) {
        return;
      }

      if (
        areOptionsVisible &&
        !buttonRef.current.contains(e.target as Node) &&
        !ulRef.current.contains(e.target as Node)
      ) {
        setAreOptionsVisible(false);
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [areOptionsVisible]);

  return (
    <div
      className={`relative min-w-[75px] flex justify-center items-center  ${
        className ?? ''
      }`}
      style={style}
    >
      <label
        htmlFor={id}
        hidden={!isLabelVisible}
      >
        {label}
      </label>
      <button
        type='button'
        id={id}
        ref={buttonRef}
        className='text-paragraph font-medium text-pale-acid-green hover:text-acid-green transition-all'
        onClick={() => setAreOptionsVisible((prev) => !prev)}
      >
        {value || defaultValue || placeholder}
      </button>
      <ul
        ref={ulRef}
        className='absolute right-0 z-10 flex flex-col items-stretch rounded-lg shadow-classic-hovered'
        style={{
          visibility: areOptionsVisible ? 'visible' : 'hidden',
          ...(ulRect ? { bottom: -ulRect.height - 10 } : {}),
        }}
      >
        {isNoneOptionAvailable && (
          <li
            className={`${liClasses}`}
            style={getLiStyles(0)}
            onClick={() => handleChange(null)}
          >
            {'None'}
          </li>
        )}
        {availableOptions.map((option, i) => {
          return (
            <li
              key={option.key}
              style={getLiStyles(isNoneOptionAvailable ? i + 1 : i)}
              className={`${liClasses}`}
              onClick={() => handleChange(option)}
            >
              {option.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;

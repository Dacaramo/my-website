'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  ACID_GREEN,
  BLACK,
  PALE_ACID_GREEN,
  WHITE,
} from '@/app/constants/colors';
import useElementRect from '@/app/hooks/useElementRect';

interface Props {
  groups: Record<string, Array<string>>;
  value: Array<string>;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const CheckboxGroup: FC<Props> = ({
  groups,
  value,
  disabled = false,
  onChange: handleChange,
}) => {
  const [isFloatingPanelVisible, setIsFloatingPanelVisible] =
    useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const t = useTranslations('blog-page.checkbox-group');
  const ulRect = useElementRect(ulRef);

  const handleClickOnButton = () => {
    setIsFloatingPanelVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (!ulRef.current || !buttonRef.current) {
        return;
      }

      if (
        isFloatingPanelVisible &&
        !ulRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsFloatingPanelVisible(false);
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isFloatingPanelVisible]);

  return (
    <div className='relative w-full sm:w-fit'>
      <button
        type='button'
        ref={buttonRef}
        className='px-[8px] py-[4px] w-full sm:w-max text-paragraph font-medium text-acid-green rounded-lg border border-acid-green hover:bg-acid-green hover:text-black transition-all'
        style={
          isFloatingPanelVisible
            ? { backgroundColor: ACID_GREEN, color: BLACK }
            : {}
        }
        disabled={disabled}
        onClick={handleClickOnButton}
      >
        {`${t('button-text')} (${value.length})`}
      </button>
      <ul
        ref={ulRef}
        className='absolute right-0 z-10 px-4 py-2 w-[280px] h-[560px] flex flex-col gap-2 bg-black rounded-lg shadow-classic overflow-y-auto'
        style={{
          visibility: isFloatingPanelVisible ? 'visible' : 'hidden',
          ...(ulRect ? { bottom: -ulRect.height - 10 } : {}),
        }}
      >
        {Object.keys(groups).map((key) => {
          return (
            <li
              key={key}
              className='flex flex-col gap-2'
            >
              <h3 className='text-subtitle font-medium text-acid-green'>
                {key}
              </h3>
              <ul className='flex flex-row flex-wrap gap-2'>
                {groups[key].map((checkboxText) => {
                  return (
                    <label
                      key={checkboxText}
                      className='flex flex-row gap-1 text-paragraph text-white hover:text-pale-acid-green font-light cursor-pointer'
                      style={{
                        color: value.includes(checkboxText)
                          ? PALE_ACID_GREEN
                          : '',
                      }}
                    >
                      <input
                        type='checkbox'
                        className='appearance-none cursor-pointer'
                        checked={value.includes(checkboxText)}
                        onChange={() => handleChange(checkboxText)}
                      />
                      {`#${checkboxText}`}
                    </label>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckboxGroup;

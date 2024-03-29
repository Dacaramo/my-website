import { CSSProperties, FC, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PALE_ACID_GREEN } from '@/app/constants/colors';

export interface CardProps {
  headingText: string;
  paragraphText: string;
  icon?: IconDefinition | ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const Card: FC<CardProps> = ({
  headingText,
  paragraphText,
  icon,
  style,
  onClick: handleClick,
}) => {
  let iconType: 'fontAwesome' | 'component' | 'none' = 'none';
  if (icon !== undefined) {
    if ('prefix' in (icon as IconDefinition)) {
      iconType = 'fontAwesome';
    } else {
      iconType = 'component';
    }
  }

  return (
    <li
      className='p-5 basis-[450px] flex-1 flex flex-col justify-between gap-5 items-center text-pale-acid-green bg-prune rounded-xl shadow-classic-hovered sm:shadow-classic hover:shadow-classic-hovered transition-all'
      style={{
        cursor: handleClick ? 'pointer' : 'default',
        ...style,
      }}
      onClick={handleClick}
    >
      <h3
        className='text-subtitle text-center font-bold text-acid-green'
        style={{ wordBreak: 'break-word' }}
      >
        {headingText}
      </h3>
      {iconType === 'component' && (icon as ReactNode)}
      {iconType === 'fontAwesome' && (
        <FontAwesomeIcon
          icon={icon as IconDefinition}
          style={{ fontSize: 85 }}
          color={PALE_ACID_GREEN}
        />
      )}
      <p className='text-paragraph text-center text-white'>{paragraphText}</p>
    </li>
  );
};

export default Card;

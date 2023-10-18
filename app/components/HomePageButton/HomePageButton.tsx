import { FC, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  text: string;
  icon?: IconDefinition | ReactNode;
  onClick: (e: ReactMouseEvent) => void;
}

const HomePageButton: FC<Props> = ({ text, icon, onClick: handleClick }) => {
  const iconSize = 20;
  let iconType: 'fontAwesome' | 'component' | 'none' = 'none';
  if (icon !== undefined) {
    if ('prefix' in (icon as IconDefinition)) {
      iconType = 'fontAwesome';
    } else {
      iconType = 'component';
    }
  }

  return (
    <button
      type='button'
      className='px-3 py-2 flex flex-row items-center gap-2 border rounded-lg border-acid-green font-medium text-paragraph text-acid-green hover:bg-acid-green hover:text-pale-black transition-all'
      onClick={handleClick}
    >
      {text}
      {iconType === 'component' && (icon as ReactNode)}
      {iconType === 'fontAwesome' && (
        <FontAwesomeIcon
          style={{ fontSize: iconSize }}
          icon={icon as IconDefinition}
        />
      )}
    </button>
  );
};

export default HomePageButton;

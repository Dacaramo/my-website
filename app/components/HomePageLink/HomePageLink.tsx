import { FC, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  text: string;
  icon?: IconDefinition | ReactNode;
  href: string;
}

const HomePageLink: FC<Props> = ({ text, icon, href }) => {
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
    <>
      <Link
        className='px-3 py-2 flex flex-row items-center gap-2 border rounded-lg border-acid-green font-medium text-paragraph text-acid-green hover:bg-acid-green hover:text-pale-black transition-all'
        href={href}
      >
        {text}
        {iconType === 'component' && (icon as ReactNode)}
        {iconType === 'fontAwesome' && (
          <FontAwesomeIcon
            style={{ fontSize: iconSize }}
            icon={icon as IconDefinition}
          />
        )}
      </Link>
    </>
  );
};

export default HomePageLink;

import { FC, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/dist/client/link';

import { ICON_SIZE } from '@/app/constants/sizes';

interface Props {
  href: string;
  icon: IconDefinition | ReactNode;
}

const QuickLink: FC<Props> = ({ href, icon }) => {
  let iconType: 'fontAwesome' | 'component' = 'fontAwesome';
  if (!('prefix' in (icon as IconDefinition))) {
    iconType = 'component';
  }

  return (
    <Link
      className='w-[35px] h-[35px] flex justify-center items-center text-center text-acid-green bg-prune rounded-md hover:text-prune hover:bg-acid-green transition-all'
      href={href}
      target='_blank'
    >
      {iconType === 'component' && (icon as ReactNode)}
      {iconType === 'fontAwesome' && (
        <FontAwesomeIcon
          icon={icon as IconDefinition}
          style={{ fontSize: ICON_SIZE }}
        />
      )}
    </Link>
  );
};

export default QuickLink;

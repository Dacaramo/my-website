import { FC, HTMLProps, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props extends HTMLProps<HTMLAnchorElement> {
  text: string;
  icon?: IconDefinition | ReactNode;
  isAnchorElement?: boolean;
  href: string;
}

const AboutPageLink: FC<Props> = (props) => {
  const { text, icon, isAnchorElement = false, href, ...anchorProps } = props;
  const iconSize = 20;
  const linkClasses =
    'px-3 py-2 w-full sm:w-fit flex-1 sm:flex-initial flex flex-row justify-center items-center gap-2 border rounded-lg border-white font-medium text-paragraph whitespace-nowrap text-white hover:bg-white hover:text-pale-black transition-all';
  let iconType: 'fontAwesome' | 'component' | 'none' = 'none';
  if (icon !== undefined) {
    if ('prefix' in (icon as IconDefinition)) {
      iconType = 'fontAwesome';
    } else {
      iconType = 'component';
    }
  }

  const innerComponentContent = (
    <>
      {text}
      {iconType === 'component' && (icon as ReactNode)}
      {iconType === 'fontAwesome' && (
        <FontAwesomeIcon
          style={{ fontSize: iconSize }}
          icon={icon as IconDefinition}
        />
      )}
    </>
  );

  return (
    <>
      {isAnchorElement ? (
        <a
          className={`${linkClasses}`}
          href={href}
          target='_blank'
          rel='noreferrer'
          {...anchorProps}
        >
          {innerComponentContent}
        </a>
      ) : (
        <>
          {/* @ts-ignore */}
          <Link
            className={`${linkClasses}`}
            href={href}
            target='_blank'
            rel='noreferrer'
            {...anchorProps}
          >
            {innerComponentContent}
          </Link>
        </>
      )}
    </>
  );
};

export default AboutPageLink;

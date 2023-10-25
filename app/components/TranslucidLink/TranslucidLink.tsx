import { CSSProperties, FC, HTMLProps, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props extends HTMLProps<HTMLAnchorElement> {
  text: string;
  icon?: IconDefinition | ReactNode;
  isAnchorElement?: boolean;
  style?: CSSProperties;
}

const TranslucidLink: FC<Props> = (props) => {
  const { text, icon, isAnchorElement = false, style, ...anchorProps } = props;

  const linkClasses =
    'w-full sm:w-auto px-3 py-2 flex flex-row justify-center items-center gap-2 text-center text-paragraph font-bold rounded-lg border border-acid-green bg-translucid-acid-green text-acid-green hover:text-black hover:bg-acid-green transition-all';
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
      {text.toUpperCase()}
      {iconType === 'component' && (icon as ReactNode)}
      {iconType === 'fontAwesome' && (
        <FontAwesomeIcon
          icon={icon as IconDefinition}
          style={{ fontSize: 30 }}
        />
      )}
    </>
  );

  return (
    <>
      {isAnchorElement ? (
        <a
          className={`${linkClasses}`}
          style={{ ...style }}
          {...anchorProps}
        >
          {innerComponentContent}
        </a>
      ) : (
        <>
          {/* @ts-ignore */}
          <Link
            className={`${linkClasses}`}
            style={{ ...style }}
            {...anchorProps}
          >
            {innerComponentContent}
          </Link>
        </>
      )}
    </>
  );
};

export default TranslucidLink;

import { FC, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ACID_GREEN, PALE_ACID_GREEN, PRUNE } from '@/app/constants/colors';

export interface PercentageInformerProps {
  legend: string;
  percentage: number;
  icon?: IconDefinition | ReactNode;
}

const PercentageInformer: FC<PercentageInformerProps> = ({
  legend,
  percentage,
  icon,
}) => {
  const percentageDegrees = (percentage * 360) / 100;
  let iconType: 'fontAwesome' | 'component' | 'none' = 'none';
  if (icon !== undefined) {
    if ('prefix' in (icon as IconDefinition)) {
      iconType = 'fontAwesome';
    } else {
      iconType = 'component';
    }
  }

  return (
    <div className='flex-1 flex flex-col items-center'>
      <div
        style={{
          background: `conic-gradient(${ACID_GREEN} ${percentageDegrees}deg, ${PRUNE} 0deg)`,
        }}
        className='w-[200px] h-[200px] flex justify-center items-center rounded-full'
      >
        <div className='w-[175px] h-[175px] flex justify-center items-center rounded-full bg-pale-prune'>
          {iconType === 'component' && (icon as ReactNode)}
          {iconType === 'fontAwesome' && (
            <FontAwesomeIcon
              icon={icon as IconDefinition}
              style={{ fontSize: 85 }}
              color={PALE_ACID_GREEN}
            />
          )}
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-subtitle'>{legend}</span>
        <span className='text-subtitle font-bold'>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default PercentageInformer;

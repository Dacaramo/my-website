import { FC } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
}

const CustomImage: FC<Props> = (props) => {
  const { priority = true, quality = 100 } = props;

  return (
    <div className='relative w-full h-full'>
      <Image
        className='rounded-[10px] w-full'
        priority={priority}
        quality={quality}
        width={1000}
        height={650}
        {...props}
      />
    </div>
  );
};

export default CustomImage;

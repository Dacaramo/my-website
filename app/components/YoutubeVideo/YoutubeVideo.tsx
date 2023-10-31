import { FC } from 'react';

interface Props {
  videoId: string;
}

const YoutubeVideo: FC<Props> = ({ videoId }) => {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        className='rounded-[10px]'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      />
    </div>
  );
};

export default YoutubeVideo;

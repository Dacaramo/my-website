import { FC } from 'react';

import Card, { CardProps } from '../Card/Card';

interface Props {
  cards: Array<CardProps>;
  desiredCardSize?: 'sm' | 'lg';
}

const CardGrid: FC<Props> = ({ cards, desiredCardSize = 'sm' }) => {
  let ulClasses = 'flex-1 grid gap-5 ';
  if (desiredCardSize === 'sm') {
    ulClasses +=
      'grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]';
  } else if (desiredCardSize === 'lg') {
    ulClasses +=
      'grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]';
  }

  return (
    <ul className={`${ulClasses}`}>
      {cards.map((card) => {
        return (
          <Card
            key={card.headingText}
            {...card}
          />
        );
      })}
    </ul>
  );
};

export default CardGrid;

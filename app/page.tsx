import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const Home: FC<Props> = () => {
  const horizontalFlexBoxClasses = 'flex flex-row gap-4 items-center';
  const linkClasses = 'text-pale-acid-green hover:text-acid-green';

  return (
    <>
      <header
        className={`w-full h-[60px] ${horizontalFlexBoxClasses} justify-end`}
      >
        <nav className={`h-full ${horizontalFlexBoxClasses} justify-center`}>
          <Link
            className={`${linkClasses}`}
            href={'/services'}
          >
            Services
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/'}
          >
            Home
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/portfolio'}
          >
            Portfolio
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/blog'}
          >
            Blog
          </Link>
          <Link
            className={`${linkClasses}`}
            href={'/about'}
          >
            About
          </Link>
        </nav>
        <div className='w-[1px] h-[40%] bg-pale-acid-green' />
      </header>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <p className='font-light'>Home Page</p>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;

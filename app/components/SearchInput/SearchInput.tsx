import { ChangeEvent as ReactChangeEvent, CSSProperties, FC } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ACID_GREEN } from '@/app/constants/colors';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  isLabelVisible?: boolean;
  value: string;
  style?: CSSProperties;
  onChange: (e: ReactChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<Props> = ({
  id,
  label,
  placeholder,
  isLabelVisible = false,
  value,
  style,
  onChange: handleChange,
}) => {
  return (
    <div
      className='relative flex-col items-start'
      style={{ ...style }}
    >
      <label
        htmlFor={id}
        className='h-[20px]'
        style={{
          display: isLabelVisible ? 'block' : 'none',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type='text'
        className='w-full min-h-[35px] py-[4px] pl-[8px] pr-[36px] bg-transparent rounded-lg text-acid-green border text-paragraph border-acid-green placeholder:text-pale-acid-green outline-none'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <FontAwesomeIcon
        className='absolute right-[8px] top-[7px]'
        icon={faSearch}
        style={{ fontSize: 20 }}
        color={ACID_GREEN}
      />
    </div>
  );
};

export default SearchInput;

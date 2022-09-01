import './search-box.styles.css';
import { ChangeEvent } from 'react';

type SearchBoxProps = {
    className: string;
    placeholder?: string | undefined;
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
    return (
        <input className={`search-box ${className}`}
            placeholder={placeholder}
            type='search'
            onChange={onChangeHandler} />
    )
}

export default SearchBox;

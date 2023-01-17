import { useCallback, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useAppDispatch } from "store/hooks";
import { setSearchValue } from "store/filter";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <GoSearch className={styles.icon} color="black" />
      <input
        className={styles.input}
        ref={inputRef}
        placeholder="Пошук..."
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <GrFormClose className={styles.clearIcon} onClick={onClickClear} />
      )}
    </div>
  );
};

import { memo } from "react";

type CategoriesProps = {
  valueCategory: number;
  onChangeCategory: (i: number) => void;
};

export const Categories = memo(
  ({ valueCategory, onChangeCategory }: CategoriesProps) => {
    const categories = [
      "Всі",
      "М'ясні",
      "Вегетаріанська",
      "Гриль",
      "Гострі",
      "Закриті",
    ];

    const onClickCategory = (idx: number) => {
      onChangeCategory(idx);
    };

    return (
      <div className="categories">
        <ul>
          {categories.map((item, idx) => (
            <li
              key={idx}
              onClick={() => onClickCategory(idx)}
              className={valueCategory === idx ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

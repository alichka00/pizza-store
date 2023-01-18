import { useEffect, useRef, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { useNavigate } from "react-router-dom";
import { fetchPizzas } from "store/pizza/asyncActions";
import { selectFilter } from "store/filter/selectors";
import { setCategoryId, setCurrentPage } from "store/filter";
import { selectPizzaData } from "store/pizza/selectors";
import {
  Categories,
  SortPopup,
  Skeleton,
  PizzaBlock,
  Pagination,
} from "components";
import { Pizza } from "store/pizza/types";

export const Home = () => {
  const { categoryId, sort, currentPage, searchValue } =
    useAppSelector(selectFilter);
  const { items, status } = useAppSelector(selectPizzaData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");

    const order = sort.sortProperty.includes("-") ? "asc" : "desc";

    const category = categoryId > 0 ? `category=${categoryId}` : "";

    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          valueCategory={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <SortPopup value={sort} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>На жаль, не вдалося отримати піци. Спробуйте пізніше</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
            : items.map((item: Pizza) => (
                <PizzaBlock key={item.id} {...item} />
              ))}
        </div>
      )}
      <Pagination currentPage={currentPage} onCgangePage={onChangePage} />
    </div>
  );
};

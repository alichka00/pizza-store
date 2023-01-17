export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface I_FilterState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}

import { lazy, Suspense } from "react";
import "scss/app.scss";
import { Home } from "pages/Home";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "layouts/MainLayout";

const Cart = lazy(() =>
  import(/* webpackChunkName: "Cart" */ "pages/Cart").then(({ Cart }) => ({
    default: Cart,
  }))
);
const FullPizza = lazy(() =>
  import(/* webpackChunkName: "FullPizza" */ "pages/FullPizza").then(
    ({ FullPizza }) => ({ default: FullPizza })
  )
);
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "pages/NotFound").then(
    ({ NotFound }) => ({ default: NotFound })
  )
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Завантаження...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Завантаження...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Завантаження...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

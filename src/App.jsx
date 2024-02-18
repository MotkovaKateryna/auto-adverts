import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navigation from 'modules/Navigation/Navigation';

import Loader from 'shared/Loader/Loader';
import { fetchAdverts } from './redux/adverts/advert-operations';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const appRoutes = [
  { path: '/', element: <HomePage />, exact: true },
  { path: '/catalog', element: <CatalogPage />, exact: true },
  { path: '/favorites', element: <FavoritesPage />, exact: true },
  { path: '*', element: <NotFoundPage /> },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element}>
              {' '}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

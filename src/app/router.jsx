import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout';

const createAppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import('./routes/home');
          return { Component: module.default };
        },
      },
      {
        path: 'productos',
        lazy: async () => {
          const module = await import('./routes/products');
          return { Component: module.default };
        },
      },
      {
        path: 'productos/crear',
        lazy: async () => {
          const module = await import('./routes/createProduct');
          return { Component: module.default };
        },
      },
      {
        path: 'registro',
        lazy: async () => {
          const module = await import('./routes/register');
          return { Component: module.default };
        },
      },
      {
        path: 'detalle/:id',
        lazy: async () => {
          const module = await import('./routes/detail');
          return { Component: module.default };
        },
      },
      {
        path: '*',
        lazy: async () => {
          const module = await import('./routes/not-found');
          return { Component: module.default };
        },
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={createAppRouter} />
    </Suspense>
  );
};

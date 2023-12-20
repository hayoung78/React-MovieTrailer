import RootLayout from 'layouts/layout';
import MovieDetailPage from 'pages/detail/movieDetail';
import MainPage from 'pages/main/mainPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <MainPage />,
            },
            {
                path: '/movie/:movie_id',
                element: <MovieDetailPage />,
            },
        ],
    },
]);
export default router;

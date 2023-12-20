import RootLayout from 'layouts/layout';
import MovieDetailPage from 'pages/detail/movieDetail';
import MainPage from 'pages/main/mainPage';
import NowPlayingPage from 'pages/nowPlaying/nowPlaying';
import TopRatedPage from 'pages/topRated/topRatedPage';
import UpcomingPage from 'pages/upcoming/upcoming';
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
            {
                path: '/movie/upcoming',
                element: <UpcomingPage />,
            },
            {
                path: '/movie/now_playing',
                element: <NowPlayingPage />,
            },
            {
                path: '/movie/top_rated',
                element: <TopRatedPage />,
            },
        ],
    },
]);
export default router;

import {
    nowPlayingApi,
    popularApi,
    searchApi,
    topRatedApi,
    upcomingApi,
} from 'apis/apiConfig';
import RootLayout from 'layouts/layout';
import MovieDetailPage from 'pages/detail/movieDetail';
import MainPage from 'pages/main/mainPage';
import SearchPage from 'pages/search/searchPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: (
                    <MainPage queryKey={['popularData']} dataApi={popularApi} />
                ),
            },
            {
                path: '/movie/:movie_id',
                element: <MovieDetailPage />,
            },
            {
                path: '/movie/upcoming',
                element: (
                    <MainPage
                        queryKey={['upcomingData']}
                        dataApi={upcomingApi}
                    />
                ),
            },
            {
                path: '/movie/now_playing',
                element: (
                    <MainPage
                        queryKey={['nowPlaying']}
                        dataApi={nowPlayingApi}
                    />
                ),
            },
            {
                path: '/movie/top_rated',
                element: (
                    <MainPage queryKey={['topRated']} dataApi={topRatedApi} />
                ),
            },
            {
                path: `/search/movie`,
                element: (
                    <SearchPage
                        queryKey={['searchData']}
                        dataApi={input => searchApi(input)}
                    />
                ),
            },
        ],
    },
]);
export default router;

import RootLayout from 'layouts/layout';
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
        ],
    },
]);
export default router;

import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from 'routes/route';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;

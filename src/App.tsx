import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <div className='App'>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />}></Route>;
              })}
            </Routes>
          </div>
        </QueryClientProvider>
      </RecoilRoot>
    </Router>
  );
}

export default App;

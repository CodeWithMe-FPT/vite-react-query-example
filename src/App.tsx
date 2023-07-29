import { QueryClientProvider, QueryClient } from 'react-query'
import LoginForm from './components/LoginForm'

const queryClient = new QueryClient()

function App() {
  // const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <LoginForm />
    </QueryClientProvider>
  )
}

export default App

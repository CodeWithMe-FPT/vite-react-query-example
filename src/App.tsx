import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App() {
  // const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <div className='text-3xl font-bold underline'>Hello World</div>
    </QueryClientProvider>
  )
}

export default App

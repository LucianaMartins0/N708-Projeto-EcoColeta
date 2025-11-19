import './App.css'
import Pages from '@/pages/index.jsx'
import { Toaster } from 'sonner' 

function App() {
  return (
    <>
      <Pages />
      <Toaster richColors /> {/* <-- NOVO COMPONENTE DO SONNER */}
    </>
  )
}

export default App
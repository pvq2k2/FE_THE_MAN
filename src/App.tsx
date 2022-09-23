import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ClientLayout } from './layouts'
import HomePage from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout><HomePage /></ClientLayout>} />
      </Routes>
    </>
  )
}

export default App

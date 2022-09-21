import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ClientLayout } from './layouts'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout><h1>Home page</h1></ClientLayout>} />
      </Routes>
    </>
  )
}

export default App

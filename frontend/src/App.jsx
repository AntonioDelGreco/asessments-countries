import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:countryCode' element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



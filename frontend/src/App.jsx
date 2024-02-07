import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/UI-components/SignUp'
import SignIn from './components/UI-components/SignIn'
import DashBoard from './components/UI-components/DashBoard'
import Send from './components/UI-components/Send'
import Welcome from './components/UI-components/Welcome'
import Tsuccess from './components/UI-components/Tsuccess'
import Tfail from './components/UI-components/Tfail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/send' element={<Send/>} />
          <Route path='/success' element={<Tsuccess/>} />
          <Route path='/fail' element={<Tfail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

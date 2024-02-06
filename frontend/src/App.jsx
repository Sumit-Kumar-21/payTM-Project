import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/UI-components/SignUp'
import SignIn from './components/UI-components/SignIn'
import DashBoard from './components/UI-components/DashBoard'
import Send from './components/UI-components/Send'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/send' element={<Send/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './UIcomponent/SignUp'
import SignIn from './UIcomponent/SignIn'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          {/* <Route path='/signup' element={<SignUp/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/send' element={<Send/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

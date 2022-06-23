import React from 'react'
import Home from '../pages/Home'
import { Main } from './main/Main'
import { Route, Routes , BrowserRouter} from 'react-router-dom'
import Searched from '../pages/Searched'


const Page = () => {
  return (
    <BrowserRouter>   <Routes>
      <Route path='/' element={ <Main/>} />
      <Route path='/searched/:search' element={ <Searched/>} />
   
    </Routes>
    </BrowserRouter>
 
  )
}

export default Page
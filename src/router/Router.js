import React from 'react'
import { Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Tours from "../Components/Tours";
import Toursbooking from '../Components/Toursbooking';

const Router = () => {
  return (
     <div>
        <BrowserRouter >
        <Routes>
            <Route path="/" element={<Navigate replace to="/tours" />} />
            <Route path='tours' element={<Tours/>} />
            <Route path='tours/id' element={<Toursbooking/>} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router

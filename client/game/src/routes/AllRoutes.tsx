import { Route,Routes } from 'react-router-dom';
import { Gamepage } from '../pages/Gamepage';



const AllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<h1>Home</h1>} /> {/* game page */}
            <Route path='/login' element={<h1>login</h1>} />  
            <Route path='/register' element={<h1>register</h1>} /> 
            
        </Routes>
    )
}

export default AllRoutes;
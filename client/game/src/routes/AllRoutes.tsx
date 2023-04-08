import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../components/signin';
import Signup from '../components/signupp';


const AllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<h1>home</h1>} /> {/* game page */}
            <Route path='/login' element={<Signin/>} />  
            <Route path='/register' element={<Signup/>} /> 
        </Routes>
    )
}

export default AllRoutes;
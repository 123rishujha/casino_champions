import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../components/signin';
import Signup from '../components/signupp';


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
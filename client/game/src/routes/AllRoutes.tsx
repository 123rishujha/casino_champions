import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../components/signin';
import Signup from '../components/signupp';
import { Gamepage } from '../pages/Gamepage';
import Score from '../pages/Score';



const AllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<h1>home</h1>} /> {/* game page */}
            <Route path='/login' element={<Signin/>} />  
            <Route path='/register' element={<Signup/>} /> 
            <Route path='/' element={<h1>Home</h1>} /> {/* game page */}
            <Route path='/login' element={<h1>login</h1>} />  
            <Route path='/register' element={<h1>register</h1>} /> 
            <Route path='/game' element={<Gamepage/>} />
            <Route path='/score' element={<Score/>}/>
        </Routes>
    )
}

export default AllRoutes;


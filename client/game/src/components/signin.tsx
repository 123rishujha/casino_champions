import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface LoginData {
  email: string;
  password: string;
}
interface MyObject {
  carts: Array<any>;
  count: Array<any>;
  cpassword: string;
  email: string;
  fname: string;
  mobile: string;
  password: string;
  tokens: Array<{ token: string; _id: string }>;
  __v: number;
  _id: string;
}

const Signin: React.FC = () => {
  const [logdata, setLogdata] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [account, setAccount] = useState<MyObject|null>(null);
  console.log(account)
 if(account){ console.log(account.count)}
 
// const navigate=useNavigate()
  const addData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogdata((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const sendData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = logdata;
    try {
      const res = await axios.post('http://localhost:8005/user/login', { email, password }, { headers: { 'Content-Type': 'application/json' } });
      console.log(res.data);
      if (res.status === 400 || !res.data) {
        console.log('invalid details');
        alert('Invalid Details 👎!');
      } else {
        setAccount(res.data);
        setLogdata({ email: '', password: '' });
        toast.success('Login Successfully done 😃!', {
          position: 'top-center',
        });
        // navigate('/')
      }
    } catch (error:any) {
      console.error(error.message);
      alert("Invalid details,Try again")
      // Handle the error here
    }
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gaming bg-center bg-cover">
        <div className="bg-glass rounded-lg p-8 space-y-4 shadow-glass" >
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <form style={{fontSize:"15px",border:"none",color:"brown",textDecoration:'none'}}>
            <div>
              <label htmlFor="email">Email</label>
              <input className="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="email" value={logdata.email} onChange={addData} type="text"  id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
              className="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                value={logdata.password}
                onChange={addData}
                placeholder="Atleast 6 characters"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button style={{width:"80px",height:"40px"}} className="px-2 py-1 my-5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold center" onClick={sendData}>
              Submit
            </button>
          </form>
          <ToastContainer />
          <div>
            <p style={{fontSize:"15px",border:"none",color:"brown",textDecoration:'none',marginBottom:"0"}}>New Member 👇 </p>
            <Link to="/register">
              <button style={{marginTop:"0",paddingTop:'0'}}>Create New Account</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;

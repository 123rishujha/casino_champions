import React, { useState } from 'react';
// import './Signup.css';
// import logo from '';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface UserData {
  fname: string;
  email: string;
  mobile: string;
  password: string;
  cpassword: string;
}

const Signup: React.FC = () => {
  const [udata, setUdata] = useState<UserData>({
    fname: '',
    email: '',
    mobile: '',
    password: '',
    cpassword: '',
  });
let navigate=useNavigate()
  const adddata = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(udata);
  };

  const senddata = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;
    try {
      const response = await axios.post(
        'http://localhost:8005/user/register',
        {
          fname,
          email,
          mobile,
          password,
          cpassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const res = response.data;
      // console.log("user signup details",res)
      if (res.status === 400 || !res) {
        alert('Invalid Details !');
      } else {
        setUdata({
          ...udata,
          fname: '',
          email: '',
          mobile: '',
          password: '',
          cpassword: '',
        });
        alert('Registration Successfully done 😃!');
        navigate("/login")

      }
    } catch (error) {
      console.log('error in signup', error);
      alert('Invalid details')
    }
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gaming bg-center bg-cover">
      
        <div  className="bg-glass rounded-lg p-10 space-y-4 shadow-glass"
        style={{ maxWidth: '25rem' }}>
            <h1 className="text-3xl font-bold text-center">Sign up</h1>
          <form style={{fontSize:"15px",border:"none",color:"brown",textDecoration:'none'}}>
          
            <div className="form_data">
              <label style={{fontSize:"15px",border:"none",color:"brown",textDecoration:'none'}} htmlFor="fname">Name</label>
              <input name="fname" onChange={adddata} type="text" value={udata.fname} id="fname" required className="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input className="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="email" onChange={adddata} type="text" value={udata.email} id="email" required />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile</label>
              <input className="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="mobile" onChange={adddata} type="text" value={udata.mobile} id="mobile" required />
            </div>
            <div className="form_data">
              <label htmlFor="Password">Password</label>
              <input className="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                name="password"
                onChange={adddata}
                type="password"
                value={udata.password}
                id="cpassword"
                placeholder="Atleast 6 characters"
                required
              />
            </div>
            <div className="form_data">
              <label htmlFor="Password"> Repeat Password</label>
              <input className="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="cpassword" onChange={adddata} type="password" value={udata.cpassword} id="password" required />
            </div>
            <button  style={{width:"80px",height:"40px"}} className="px-2 py-1 my-5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold center" onClick={senddata} >
              Submit
            </button>
          </form>
          <div className="signin_info">
  <Link to='/login'><p  style={{fontSize:"15px",border:"none",color:"brown",textDecoration:'none',marginBottom:"0"}}>Already have an account?</p></Link>
  
</div>
      </div>
    </section>
    </>
  )
}

export default Signup
import React from 'react';
import { siginwithGoogle, signinWithEmail } from '../../lib/firebaseAuthService';
import HomeNav from './Homenav';
import Loading from './Loading';
import './Form.css';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login =  () => {
    const [error, setError] = React.useState<string|null>(null);
    const [loading, setLoading] = React.useState(false);
    const history = useHistory();
    const auth = useAuth();
          
    const Submit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //@ts-ignore
      let email = e.target.elements.email.value;
      //@ts-ignore
      let password = e.target.elements.password.value;
      if(!email ||!password) return;
      try{
        setLoading(true);
        await signinWithEmail(email,password); 
        if(auth?.user){
          history.push('/');
        }
      }
      catch(e){
        setLoading(false);
        setError(e.message);
      }
    }
    const signinGoogle = async () => {
      try{
        setLoading(true);
        await siginwithGoogle();
        if(auth?.user){
        history.push('/');
        }
      }
      catch(e){
        setLoading(false);
        setError(e.message);
      }
      
    }
    return (
        <>
          {
            loading && <Loading/>
          }
            <HomeNav/>
            <div id="register-panel">
            <br/>
            <h1>Login Now</h1>
               <div id="google">
               <div onClick={signinGoogle} id="gbtn">Continue with Google</div>
               </div> 
               <div id="or">
                  <h3>OR</h3> 
               </div>

               <div id="mail">
               <form onSubmit={Submit}>
                <div className="formEle">
                  <input onChange={()=>setError(null)} placeholder="Email" id="email" type="email" className="input" spellCheck={false}/> 
                </div>
                <div className="formEle">
                  <input placeholder="Password" id="password" type="password" className="input" spellCheck={false}/> 
                </div>
                {
                  error && <p className="error">{error}</p> 
                }
                <button className="fbtn">Login</button>
                </form>
               </div>
            </div>
                <button onClick={()=>history.push('/')} className="cbtn cancel">Back</button>
        </>
    )
}
export default Login;
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Login = () => {
    const {signInUser}=useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth=getAuth(app)
    const navigate =useNavigate()
    const location =useLocation()
    const handleLogin= e =>{
  
        e.preventDefault()
        const form =e.target
      const email =form.email.value 
      const password=form.password.value 
      console.log(email,password)

     
      signInUser(email,password)
      .then(result=>{
        console.log(result.user)
        navigate(location?.state? location.state :'/')
      })
      .catch(error=>{
        console.error(error)
        swal("Sorry!", "You email and password is wrong!", "error");
        return
      })

    }
    const handleGoogleLogin =()=>{
      signInWithPopup(auth,googleProvider)
      .then(result=>{
       console.log(result.user)
       navigate('/')
      })
      .catch(error=>{
       console.error(error)
      })
      
   }
   const handleGithubLogin =()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
     console.log(result.user)
     navigate('/')
    })
    .catch(error=>{
     console.error(error)
    })
    
 }
    return (
        <div>
             <div className="text-center">
                <h2 className="text-4xl font-bold py-3">WELCOME TO OUR ELEMENTALCARS</h2>
                <h2 className="text-4xl font-bold py-3">LOGIN NOW</h2>
                
            </div>
            
            <form onSubmit={handleLogin}  className=" mx-auto md:w-3/4 lg:w-2/5">

       
       <div className="form-control ">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name="email"  required placeholder="Type your email" className="input input-bordered"  />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" required name="password" placeholder="Type your password" className="input input-bordered"  />
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary">Login</button>
       <div className="flex py-5 items-center mx-auto gap-2">
                 <div><button onClick={handleGoogleLogin} className="btn btn-primary px-2">Login with Google</button></div>
                <div>
                 <button onClick={handleGithubLogin} className="btn btn-primary px-2">Login with Github</button>
            </div>
            </div>
     </div>
       </form>
       <p className="text-center py-5">Already have an account?
       
       <Link to="/register" className="text-blue-600 font-bold">
          Register</Link>
          
          </p>
        </div>
    );
};

export default Login;
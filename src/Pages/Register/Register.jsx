import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Register = () => {
    const auth=getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
   const {createUser,user} = useContext(AuthContext)
   const navigate =useNavigate()
    const handleRegister =e=>{
        e.preventDefault()
        const form =e.target
        const name =form.name.value;
        const email =form.email.value;
        const photo =form.photo.value;
        const password=form.password.value 
        console.log(name,photo,email,password,)
         
        if(password.length<6){
            swal("Sorry!", "Your password should be at least 6 digit!", "error")
  
            return;
          }else if(!/[A-Z]/.test(password)){
            swal("Sorry!", "Your password should be at least uppercase ", "error")
            return
          }else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            swal("Sorry!", "Your password should be at least  special character!", "error")
            return
          }


        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate('/')
            
            updateProfile(result.user, {
              displayName: name,
               photoURL: photo
               
               
            })
            .then( res=> {
              console.log(res.user)
            })
            .catch((error) => {
              console.error(error)
            });
        })
        .catch(error=>{
            console.error(error)
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
           <h2 className="text-4xl font-bold py-3">REGISTER NOW</h2>
           
       </div>
       
       <form  onSubmit={handleRegister}  className=" mx-auto md:w-3/4 lg:w-2/5">

  
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input  type="text" name="name"  required placeholder="Type your Name" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="email" name="email"  required placeholder="Type your email" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Photo</span>
  </label>
  <input type="text" name="photo"  required placeholder="Type your photo url" className="input input-bordered"  />
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
  <button className="btn btn-primary">Register </button>
  <div className="flex py-5 items-center mx-auto gap-2">
            <div><button className="btn btn-primary px-2" onClick={handleGoogleLogin}>Register with Google</button></div>
           <div>
            <button onClick={handleGithubLogin} className="btn btn-primary px-2">Register with Github</button>
       </div>
       </div>
</div>
  </form>
  <p className="text-center py-5">Already have an account?
  
  <Link to="/login" className="text-blue-600 font-bold">
     Login</Link>
     
     </p>
   </div>
    );
};

export default Register;
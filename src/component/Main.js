import Header from "./Header.js";
import validator from "./validator.js";

import {useState,useRef} from "react";

const Main = () =>{

	const [isLogin,setIsLogin] = useState(true);
	const email = useRef(null);
	const pass = useRef(null);

	const [error,setError] = useState("");
	


	const handleAccount = () =>{
		setIsLogin(!isLogin);
	}

	const handleSubmit = (e) =>{
		e.preventDefault();

		const validationError = validator(email.current.value,pass.current.value);
		if(validationError){
			setError(validationError);
			return;
		}

		setError("");

	}

	return(
		<>
			<div className="relative">
				<Header />
				<div className="z-0">
					<img src="images/bg.jpg" className="" />

					<div className="border p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-1/2">
						<form className="w-[100%] p-8">
								<h2 className="text-white text-2xl text-center mb-5"> {isLogin ? "Login" : "SignUp"} </h2>
								{!isLogin ? <input type="text" placeholder="Name" className="p-2 mb-5 w-[100%]" /> : null } <br />
								<input type="text" ref={email} placeholder="Email" className="p-2 mb-5 w-[100%]"  /> <br />
								<input type="text" ref={pass} placeholder="Password" className="p-2 mb-5 w-[100%]"  /> <br />
								<p className="text-red-600 text-xl">{error}</p>
								<button className="w-full p-2 bg-red-500 text-white text-xl rounded" onClick={(e)=>handleSubmit(e)}>Submit</button>
								<p className="text-white cursor-pointer my-2" onClick={handleAccount}> {isLogin ? "Dont Have An Account ? SignUp Now" : "Have An Account ? Login Now"} </p>
						</form>
					</div>

				</div>
			</div>
		</>
	)
}

export default Main;
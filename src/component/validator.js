const validator = (email,pass) =>{

	const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
	const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);

	if(!isEmailValid){
		return "Email Wrong";
	}

	if(!isPasswordValid){
		return "Password Wrong";
	}

	return null;

}

export default validator;
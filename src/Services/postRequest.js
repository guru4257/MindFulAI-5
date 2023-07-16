import axios from 'axios';


const url = process.env.REACT_APP_BACKEND_API;
// post request for registration

export const register = async(data)=>{

    return await axios.post(url+"/inventory/user.register",data,{withCredentials:true});
}

// post request for login

export const Login = async(data)=>{

    return await axios.post(url+"/inventory/user/login",data,{withCredentials:true});
}

//post request for getting particular user's problems

export const getProblemNames = async(data)=>{

    return await axios.post(url+"/inventory/user/getproblemnames",data,{withCredentials:true});
}

//post request for approach a Investor

export const approachInvestor = async(data)=>{

    return await axios.post(url+"/inventory/user/approachinvestor",data,{withCredentials:true});
}

//post request for approach a Mentor

export const approachMentor = async(data)=>{

    return await axios.post(url+"/inventory/user/approachmentor",data,{withCredentials:true});
}

// post request for searchInvestors

export const searchInvestor = async(data)=>{

    return await axios.post(url+"/inventory/user/searchinventor",data,{withCredentials:true});
}

// post request for searchInvestors

export const searchMentors = async(data)=>{

    return await axios.post(url+"/inventory/user/searchmentors",data,{withCredentials:true});
}

// post request for searchSolvers

export const searchSolvers = async(data)=>{

    return await axios.post(url+"/inventory/user/searchsolvers",data,{withCredentials:true});
}
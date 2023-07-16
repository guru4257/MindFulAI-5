import axios from "axios";


const url = process.env.REACT_APP_BACKEND_API;
// get request for counts for homes

export const getCounts = async()=>{

    return await axios.get(url+"/inventory/home/counts",{withCredentials:true});
}

// get detail of mentor,investor,solver

export const getDetail = async()=>{

    return await axios.get(url+"/inventory/explore/details",{withCredentials:true});
}

// request for LogOut

export const LogOut = async()=>{

    return await axios.get(url+"/inventory/user/logout",{withCredentials:true});
}
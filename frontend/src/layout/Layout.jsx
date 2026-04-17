
import Loading from "../components/Loading"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import {Outlet} from "react-router-dom"

const Layout =()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Loading/>  
        <Footer/> 
        
        
        </>
    )
}
export default Layout


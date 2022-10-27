// import { useState } from "react";
// import "./Nav.scss";
// import menu from "../../assets/images/menu-icon.png";
// import NavMenu from "../../components/NavMenu/NavMenu";

// const Nav = (props) => {
//     const [showNav, setShowNav] = useState(false);

//     const toggleNav = () => {
//         setShowNav(!showNav);
//     }

//     return (
//         <div className="sidenav">
//             {showNav && <NavMenu toggleNav={toggleNav}/>}
//             <img
//                 src={menu} 
//                 alt="" 
//                 className="sidenav__menu"
//                 onClick={toggleNav}
//                 />
//         </div>
//     )
// }

// export default Nav;
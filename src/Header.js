import {NavLink} from "react-router-dom";
function Header() {
 
  return (
   <>
   <nav>
     <ul>
       <li>
         <NavLink to = "/">Main</NavLink>
       </li>
       <li>
         <NavLink to = "/about">About</NavLink>
       </li>
       <li>
         <NavLink to = "/users">Users</NavLink>
       </li>
     </ul>
   </nav>

   </>
  );
}

export default Header;

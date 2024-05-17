import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); // se hizo un estado para el menu esto es para que se abra y cierre el menu

  const toggleMenu = () => { 
    setMenuOpen(!menuOpen);
  }; // esto es para que se abra y cierre el menu mediante un toggle que sirve para cambiar el estado del menu

  return (
    <nav className="container_nav">
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`} // se hizo un div para el icono del menu
        onClick={toggleMenu} // esto es para que se abra y cierre el menu
      >
        <svg className='svg_icon' viewBox="0 0 150 80" width="40" height="40">
                    <rect width="80" height="15"></rect>
                    <rect y="30" width="80" height="15"></rect>
                    <rect y="60" width="80" height="15"></rect>
                </svg> 
      </div> 
     
   <img 
        className="logo_instituto"
        src="https://i.postimg.cc/Bbk4tTfs/logoLurin.png"
        alt=""
      />  
      
      <ul className={`cont-ul ${menuOpen ? "active" : ""}`}> 
         <li >Inicio</li>
        
          
       <li>Nosotros</li>
        
        <li className="develop">
          Carreras
          <ul className="ul-second">
            <ul className="front">

              
             <li>Diseño y Desarrollo Web</li>
              

               
            <li>Protesis</li>
              

               
            <li>Contabilidad</li>
            
              
            </ul>
          </ul>
        </li>
        <li className="develop">
          Admisión
          <ul className="ul-second">
            <ul className="front">
            
           <li>Exámen 2024</li>
              
              
            </ul>
          </ul>
        </li>
        <li className="develop">
            Noticias
            <ul className="ul-second">
            <ul className="front">

          
          <li>Blog</li>
              
              
            </ul>
          </ul>
            </li>

        <li className="develop">
           Contactanos <i className="fa-brands fa-whatsapp"></i>
           
            </li>
            
           
        <li className="develop">
           <i className="fa-solid fa-user-bounty-hunter"></i>
           
            </li>
           

      </ul>
    </nav>
  );
}

export default Nav;

import './Navbar.css';
import Item from '../Item/Item';
import SwitchMode from '../SwitchMode/SwitchMode';
import { useEffect, useState } from 'react';

function Navbar(){

  const itemsNavbar:  { name: string, icon: string }[] = [
    {
      name : 'inicio',
      icon : 'bx bx-home'
    },
    {
      name : 'Proyectos',
      icon : 'bx bxs-cube-alt'
    },
    {
      name : 'Servicios',
      icon : 'bx bx-check-square'
    },
    {
      name : 'Contacto',
      icon : 'bx bx-envelope'
    }
  ];

  const [shadowNavbar, setShadowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollDown = () => {
      if(window.scrollY > 30){
        setShadowNavbar(true);
      }else{
        setShadowNavbar(false);
      }
    };
  
    window.addEventListener('scroll', handleScrollDown);
  
    return () => window.removeEventListener('scroll', handleScrollDown);
  }, []);

  return(
    <>
      <header className="w-full fixed pt-4 px-20 top-0 z-50">
        <nav className={`w-full top flex justify-between items-center px-14 transition-all duration-150 bg-white/90 backdrop-blur-md   
        ${ shadowNavbar ? ' drop-shadow-xl ' : '' }
        rounded-full`}>
          <div>
            <img src="https://i.ibb.co/935JgLJ/mi.webp" alt="logo-perfil" className="logo-perfil hidden lg:block"/>
          </div>
          <ul className='flex justify-center gap-1 py-2 lg:py-0'>
            {itemsNavbar.map((item, index) => (
              <Item key={index} name={item.name} icon={item.icon}></Item>
            ))}
          </ul>
          <div className='flex items-center'>
            <SwitchMode></SwitchMode>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
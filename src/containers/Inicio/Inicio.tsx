import './Inicio.css';
import ItemSocial from '../../components/ItemSocial/ItemSocial';

function Inicio(){

  const itemsSocial: {name: string, icon: string, username: string, color: string, url: string}[] = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook',
      username: '@em.2801',
      color: '#0866FF',
      url: 'https://www.facebook.com/em.2801'
    },
    {
      name: 'X',
      icon: 'fa-brands fa-x-twitter',
      username: '@CoddiDv',
      color: '#15202B',
      url: 'https://x.com/CoddiDv'
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      username: '@ev28.jm',
      color: '#C90071',
      url: 'https://www.instagram.com/ev28.jm/'
    },
    {
      name: 'Linkedin',
      icon: 'fa-brands fa-linkedin',
      username: '@everjm01',
      color: '#0A66C2',
      url: 'https://www.linkedin.com/in/everjm01/'
    },
    {
      name: 'Github',
      icon: 'fa-brands fa-github',
      username: '@EverJM0101',
      color: '#1F2328',
      url: 'https://github.com/EverJM0101'
    }
  ];

  return(
    <>

<div className='relative h-screen overflow-hidden'>
  {/* Sección de formas (detrás) */}
  <div className='h-screen w-full max-w-full overflow-x-hidden z-10 absolute blur-lg opacity-10 box-border p-0 m-0'>
    {/* Forma 1 - circle */}
    <div className="animate-scaleUp w-32 h-32 bg-black rounded-full absolute" style={{ top: '20%', left: '15%' }}></div>
    {/* Forma 2 - rombo */}
    <div className="animate-bounce w-32 h-32 bg-black transform rotate-45 absolute" style={{ top: '70%', left: '25%' }}></div>
    {/* Forma 3 */}
    <div className="animate-moveDiagonal w-32 h-32 bg-black rounded-full absolute" style={{ top: '20%', left: '50%' }}></div>
    {/* Forma 4 */}
    <div className="animate-wiggle w-32 h-32 bg-black absolute" style={{ top: '60%', left: '10%' }}></div>
    {/* Forma 5 */}
    <div className="animate-wiggle animate-scaleUp w-32 h-32 bg-black transform rotate-45 absolute" style={{ top: '80%', left: '68%' }}></div>
  </div>

  <div className='flex flex-col h-screen z-20 relative'>
    {/* Sección de contenido */}
    <div className="flex flex-col lg:flex-row justify-between items-center h-screen animate-slideIn relative">
      <div className="flex flex-col gap-7 px-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold my-5 ">Ever Jesús Montero Minaya</h1>
          <span className="text-2xl font-semibold ">FullStack Developer</span>
        </div>
        <div className="flex flex-col gap-6">
          <p className='pe-10'>
            Bachiller en Ingeniería de Sistemas con experiencia en desarrollo Fullstack Web. Familiarizado con la
            creación y mantenimiento de aplicaciones web utilizando tecnologías front-end y back-end. Comprometido
            con el aprendizaje continuo y la aplicación de buenas prácticas de desarrollo para crear soluciones
            eficientes y escalables. Hábil en trabajar en equipo y en adaptarse a nuevas tecnologías y metodologías de
            desarrollo.
          </p>

          <div className="flex items-center gap-3 mt-5 transition-all duration-75 animate-fadeIn">
            {
              itemsSocial.map((item, index) => {
                return (
                  <ItemSocial key={index} url={item.url} icon={item.icon} username={item.username} color={item.color}></ItemSocial>
                );
              })
            }
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center '>
        <img src="https://i.ibb.co/FxQfhgD/foto-small.jpg" alt="perfil" className='foto rounded-3xl z-30' /> {/* Asegúrate de que tenga un z-index alto */}
      </div>
    </div>
    
    <div className='flex items-center justify-center pb-3 opacity-40'>
      <img src="/scroll-down.png" alt="" width={25} className='animate-bounce' />
    </div>
  </div>

  
</div>


<div className="w-full h-24 bg-black relative overflow-hidden">
  <div className="absolute bottom-0 left-0 w-full h-24">
    <svg
      className="absolute"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="white"
        d="M0,0 C600,100 840,100 1440,0 L1440,100 L0,100 Z"
      ></path>
    </svg>
  </div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-2xl text-white font-bold">Tu Banner Aquí</h1>
  </div>
</div>


      
      
      
    </>
  );
}

export default Inicio;
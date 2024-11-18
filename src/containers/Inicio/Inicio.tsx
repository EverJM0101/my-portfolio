import './Inicio.css';
import ItemSocial from '../../components/ItemSocial/ItemSocial';
import TitlePerfil from '../../components/TitlePerfil/TitlePerfil';

function Inicio(){

  const itemsSocial: {name: string, icon: string,  url: string}[] = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook',
      url: 'https://www.facebook.com/em.2801'
    },
    {
      name: 'X',
      icon: 'fa-brands fa-x-twitter',
      url: 'https://x.com/CoddiDv'
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com/ev28.jm/'
    },
    {
      name: 'Linkedin',
      icon: 'fa-brands fa-linkedin',
      url: 'https://www.linkedin.com/in/everjm01/'
    },
    {
      name: 'Github',
      icon: 'fa-brands fa-github',
      url: 'https://github.com/EverJM0101'
    }
  ];

  return(
    <>

      <div className='relative h-screen overflow-hidden'>
        {/* Sección de formas (detrás) */}
        <div className='h-screen w-full max-w-full overflow-x-hidden z-10 absolute blur-lg opacity-20 box-border p-0 m-0'>
          {/* Forma 1 - circle */}
          <div className="animate-scaleUp w-32 h-32 bg-black/40 rounded-full absolute" style={{ top: '20%', left: '15%' }}></div>
          {/* Forma 2 - rombo */}
          <div className="animate-moveDiagonal w-32 h-32 bg-black/40 transform rotate-45 absolute" style={{ top: '70%', left: '25%' }}></div>
          {/* Forma 3 */}
          <div className="animate-moveDiagonal2 w-32 h-32 bg-black/40 rounded-full absolute" style={{ top: '20%', left: '50%' }}></div>
          {/* Forma 4 */}
          <div className="animate-wiggle w-32 h-32 bg-black/40 absolute" style={{ top: '60%', left: '10%' }}></div>
          {/* Forma 5 */}
          <div className="animate-wiggle animate-scaleUp w-32 h-32 bg-black/40 transform rotate-45 absolute" style={{ top: '80%', left: '68%' }}></div>
        </div>

        <div className='flex flex-col h-screen z-20 relative items-center content-center'>
          {/* Sección de contenido */}
          <div className="flex flex-col lg:flex-row justify-between items-center h-screen animate-slideIn relative">
            <div className="flex flex-col gap-7 px-20">
              <div className="flex flex-col gap-5">
              <div className="relative inline-block">
                  <h1 className="text-5xl font-bold my-5">
                      Ever Jesús Montero Minaya
                      <span className="inline-block w-1 h-11 bg-black transition-opacity duration-300 ease-in-out ml-2 animate-animateCaret "></span>
                  </h1>
              </div>               
              <TitlePerfil></TitlePerfil>
              </div>
              <div className="flex flex-col gap-6">
                <p className='pe-40'>
                  Hola que tal✌️. Soy Ever, tengo con experiencia en desarrollo Frontend. Familiarizado con la
                  creación de aplicaciones web y con conocimientos en desarrollo de apps Android.
                </p>

                <div className="flex items-center gap-2 mt-5 transition-all duration-75 animate-fadeIn">
                  {
                    itemsSocial.map((item, index) => {
                      return (
                        <ItemSocial key={index} url={item.url} icon={item.icon} name={item.name}></ItemSocial>
                      );
                    })
                  }
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center pe-20'>
              <img src="https://i.ibb.co/FxQfhgD/foto-small.jpg" alt="perfil" className='foto rounded-3xl z-30 shadow-2xl' />
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
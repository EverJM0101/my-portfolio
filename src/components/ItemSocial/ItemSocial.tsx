import './ItemSocial.css';

function ItemSocial(props: {url: string, icon: string, name: string}) {
  // Definir los colores personalizados asociados a cada red social
  const colorMap: { [key: string]: string } = {
    Facebook: 'hover:text-[#0866FF]',     // Color personalizado de Facebook
    X: 'hover:text-[#15202B]',            // Color personalizado de X (Twitter)
    Instagram: 'hover:text-[#C90071]',    // Color personalizado de Instagram
    Linkedin: 'hover:text-[#0A66C2]',     // Color personalizado de Linkedin
    Github: 'hover:text-[#1F2328]',       // Color personalizado de Github
  };

  // Asignar la clase correspondiente al nombre de la red social o un color por defecto
  const colorClass = colorMap[props.name] || 'text-black';

  return (
    <>
      <a href={props.url} target='_blank' className={`group transition-all duration-100 p-0 m-0 
        hover:-translate-y-1 hover:scale-125 pe-8 text-glow
        ${colorClass}`}>
        <i className={`icon text-2xl transition-transform duration-100  ${props.icon}`}></i>
      </a>
    </>
  );
}

export default ItemSocial;

import './Item.css';

function Item(props: {icon: string, name: string}){
  return (
    <>
      <li className='text-xl flex items-center gap-1 cursor-pointer 
      px-5 py-3 rounded-2xl
    text-black/80 transition-all duration-75
    hover:bg-black/5 hover:-translate-y-1'>
        <i className={props.icon}></i><span>{props.name}</span>
      </li>
    </>
  );
}

export default Item;
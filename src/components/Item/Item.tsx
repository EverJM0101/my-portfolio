import './Item.css';

function Item(props: any){
  return (
    <>
      <li key={props.index} className='text-xl flex items-center gap-1 cursor-pointer 
      px-2.5 py-3 rounded-2xl
       text-black/80 transition-colors duration-75 hover:bg-slate-400/15  '>
        <i className={props.icon}></i><span>{props.name}</span>
      </li>
    </>
  );
}

export default Item;
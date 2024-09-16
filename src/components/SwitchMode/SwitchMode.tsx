import './SwitchMode.css';

function SwitchMode(){
  return(
    <>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-black/50 dark:bg-gray-700 "></div>
      <span className="absolute left-0 top-0 h-6 w-6 bg-white border
       border-gray-300 rounded-full transition-transform peer-checked:translate-x-full
       peer-checked:border-white peer-checked:bg-white"></span>
    </label>
    </>
  );
}

export default SwitchMode;
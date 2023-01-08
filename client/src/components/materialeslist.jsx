
function MaterialesList() {
  return (
    <div className="flex flex-row justify-around bg-slate-500 w-80 pt-3 pb-3 rounded-sm">
        <div className="flex-col">
           <div>Material:</div> 
           <div>Estado:</div> 
           <div>Comprado:</div>   
        </div>
        <div className="flex-col overflow-scroll">
           <div>nombre</div> 
           <div>Estad:</div> 
           <div>55</div>   
        </div>
        <div className="flex items-end"> ver mas +</div>
    </div>
  );
}

export default MaterialesList;

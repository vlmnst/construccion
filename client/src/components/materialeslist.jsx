import { useState } from "react";
function MaterialesList() {

  const [oculto, setOculto] = useState('hidden')

  return (
    <div className="flex flex-col  bg-slate-500  pt-3 pb-3 rounded-sm border border-gray-400 text-xs w-full">
      <div className="flex flex-row justify-around">
        <div className="flex-col justify-start">
           <div>Material:</div> 
           <div>Estado:</div> 
           <div>Comprado:</div>  
           <div className={`${oculto}`}>Comprar:</div> 
           <div className={`${oculto}`}>Faltante:</div> 
           <div className={`${oculto}`}>Medida:</div>   
           <div className={`${oculto}`}>Observaciones:</div>   
           <div className={`${oculto}`}>Proveedor:</div>   
           <div className={`${oculto}`}>Invertido:</div>   
        </div>
        <div className="flex-col ">
           <div>nombre</div> 
           <div>Flete</div> 
           <div>55</div>   
           <div className={`${oculto}`}>80</div> 
           <div className={`${oculto}`}>30</div> 
           <div className={`${oculto}`}>mts</div>   
           <div className={`${oculto}`}>Antes de 01/12</div>   
           <div className={`${oculto}`}>Pinterest</div>   
           <div className={`${oculto}`}>$150000</div>   
        </div>
      <div className="flex items-start flex-col"> 
        <button className="border border-gray-400 pl-2 pr-2 pb-1 rounded-md bg-gray-900 w-full"
                onClick={()=>setOculto(oculto === 'hidden' ? 'flex': 'hidden')}> 
                {
                  oculto === 'hidden' ? <span>Ver mas </span> : <span>Ocultar</span> 
                }
        
        </button>
        <button className="border border-gray-400 pl-2 pr-2 pb-1 rounded-md bg-gray-900 w-full"
                onClick={()=>setOculto(oculto === 'hidden' ? 'flex': 'hidden')}> 
                {
                  oculto === 'hidden' ? <span>Editar </span> : <span>Guardar </span> 
                }
        
        </button>
        </div>
      </div> 

    </div>
  );
}

export default MaterialesList;

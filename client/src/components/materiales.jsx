function MaterialesTable() {


    return (
      <div className="p-5 bg-slate-600 border border-slate-400 rounded-tl-md rounded-bl-md w-full "  >
            <div className="flex justify-around items-center mb-3">
                <span className="text-sm font-light md:text-lg md:font-normal ">Detalle de Materiales</span>
                <span className="text-sm font-light md:text-lg md:font-normal"> Categoria: <strong>pitureria</strong> </span>
            </div>
                
        <table className="table-auto border-collapse w-full ">

            <thead>    
                <tr className="text-xs font-mono md:text-sm md:font-normal border border-slate-400">
                    <th className="text-center"></th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">id</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3 ">Material</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Medida</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Estado</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Comprar</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Comprado</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Faltante</th>
                    <th className=" pr-1 pl-1 md:pr-3 md:pl-3 truncate block sm:w-10 lg:w-32 xl:w-48">Observaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-xs font-light md:text-sm md:font-normal">
                    <td className="text-center">+</td>
                    <td className="text-center">id</td>
                    <td className="truncate block sm:w-10 md:w-20 lg:w-32 xl:w-48" title="Rodillos de goma espuma">Rodillos de goma espuma</td>
                    <td className="text-center">Medida</td>
                    <td className="text-center">Estado</td>
                    <td className="text-center">Comprar</td>
                    <td className="text-center">Comprado</td>
                    <td className="text-center">Faltante</td>
                    <td className="truncate block sm:w-10 lg:w-32 xl:w-48" title="Rodillos de goma espuma">Observaciones</td>                    
                </tr>

            </tbody>
        </table>        
      </div>
    )
  }
  
  export default MaterialesTable;
  
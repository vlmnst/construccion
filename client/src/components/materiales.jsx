function MaterialesTable() {


    return (
      <div className="p-5 bg-slate-600 border border-slate-400 "  >
        <table className="table-auto border-collapse ">
            <thead>
                <tr>
                    <th >-</th>
                    <th ></th>
                    <th className="text-sm font-light md:text-lg md:font-normal ">Detalle de Materiales</th>
                </tr>
                <tr>

                <th >-</th>
                <th ></th>

                    <th className="text-sm font-light md:text-sm md:font-normal">Categoria: pitureria</th>
                </tr>
                <tr className="text-xs font-mono md:text-sm md:font-normal border border-slate-400">
                <td className="text-center"></td>
                    
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">id</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Material</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Medida</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Estado</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Comprar</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Comprado</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Faltante</th>
                    <th className="border border-slate-400 pr-1 pl-1 md:pr-3 md:pl-3">Observaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-xs font-light md:text-sm md:font-normal">
                    <td className="text-center">+</td>
                    <td className="text-center">id</td>
                    <td>Rodillos de goma espuma</td>
                    <td className="text-center">Medida</td>
                    <td className="text-center">Estado</td>
                    <td className="text-center">Comprar</td>
                    <td className="text-center">Comprado</td>
                    <td className="text-center">Faltante</td>
                    <td className="text-center">Observaciones</td>                    
                </tr>

            </tbody>
        </table>        
      </div>
    )
  }
  
  export default MaterialesTable;
  
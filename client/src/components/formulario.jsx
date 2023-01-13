function Formulario() {
  return (
    <div className="flex flex-col text-sm bg-slate-300 text-black w-10/12 p-5 rounded-sm ">
        <div className="flex justify-center mb-2">
      <span > <strong>Carga un nuevo material </strong> </span>

        </div>
      <form action="">
        <div className="flex  w-full justify-between items-center">
         
            <div>  
                <label htmlFor=""> <span>Categoria:</span> </label>
            </div>
            <div className="flex justify-end  w-11/12">
             <select className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-5 md:w-1/5 w-11/12">
              <option>Seleccione una categoria</option>
              <option value="todosCategoria">Todos</option>
              <option value="adicem">Adicem</option>
              <option value="pintureria">Pintureria</option>
              <option value="albañileria">Albañileria</option>
              <option value="techista">Techista</option>
              <option value="electricista">Electricista</option>
              <option value="plomeria">Plomeria</option>
              <option value="herreria">Herreria</option>
              <option value="hojalatero">Hojalatero</option>
            </select>  
            </div>
        </div>

        <div className="flex items-center ">
          <div><label htmlFor="">Material: </label></div>
          <div className="flex justify-end  w-full">
            <input 
                className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-5 md:w-1/5 w-10/12 "
                type="" id="" placeholder="Ingresa aqui el material nuevo" />
            </div>
        </div>

        <div className="flex flex-row items-center justify-between">
            <div>
                <label htmlFor="">
                Medida:
                </label>                
            </div>
            <div className="flex justify-end  w-28">
            <select type="" id="" className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-5 md:w-1/5 w-11/12">
              <option>Seleccione una medida</option>
              <option>unid</option>
              <option>camionada</option>
              <option>ml</option>
              <option>lts</option>
              <option>kg</option>
              <option>bolsa</option>
              <option>mts</option>
            </select>                
            </div> 
        </div>

        <div className="flex items-center justify-between">
            <div> 
                <label htmlFor="">
                Cantidad:
                </label>
            </div>
            <div className="flex justify-end w-32">
                  <input 
                  className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-5 md:w-1/5 w-10/12 "
                  type="" id="" placeholder="Ingresa aqui la cantidad" />    
            </div>
        </div>

        <div>
          <label htmlFor="">
            <span>Proveedor</span>
            <input type="" id="" placeholder="Ingresa aqui el Proveedor" />
          </label>
        </div>

        <div>
          <label htmlFor="">
            <span>Precio</span>
            <input type="" id="" placeholder="Ingresa aqui el precio" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Formulario;

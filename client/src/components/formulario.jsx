function Formulario() {
  return (
    <div className="flex flex-col text-sm bg-slate-300 text-black w-10/12 p-5 rounded-sm ">
        <div className="flex justify-center mb-2">
          <span > <strong>Carga un nuevo material </strong> </span>

        </div>
      <form action="" className="md:flex 2xl:flex-col md:justify-around 2xl:items-center 2xl:w-full ">

        <div className="flex w-full justify-between items-center md:flex-col  md:w-36 2xl:w-full 2xl:items-center">
            <div>  
                <label htmlFor=""> <span>Categoria:</span> </label>
            </div>

            <div className="flex justify-end  w-11/12 md:justify-start 2xl:justify-center 2xl:w-full">
             <select className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-2 md:w-full w-11/12">
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

        <div className="flex items-center md:flex-col md:w-48 justify-between 2xl:w-64 ">
            <div>
              <label htmlFor="">Material: </label>
            </div>
          <div className="flex justify-end  w-full   md:justify-center">
            <input 
                className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-2  w-10/12 "
                type="" id="" placeholder="Ingresa aqui el material nuevo" />
            </div>
        </div>

        <div className="flex w-full justify-between items-center md:flex-col  md:w-36 2xl:w-full 2xl:items-center">
            <div className="">
                <label htmlFor="">
                Medida:
                </label>                
            </div>
            <div className="flex justify-end  w-11/12 md:justify-start 2xl:justify-center 2xl:w-full">
            <select type="" id="" className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-2 md:w-full w-11/12">
            {/* <select type="" id="" className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-2 md:w-1/5 w-11/12"> */}
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

        <div className="flex items-center md:flex-col md:w-48 justify-between 2xl:w-60">
            <div> 
                <label htmlFor="">
                Cantidad:
                </label>
            </div>
            <div className="flex justify-end  w-full   md:justify-center">
                  <input 
                  className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-2 md:w-full w-10/12 "
                  type="" id="" placeholder="Ingresa aqui la cantidad" />    
            </div>
        </div>

        <div className="flex items-center md:flex-col md:w-48 justify-between 2xl:w-60">
            <div> 
                <label htmlFor="">
                Proveedor:
                </label>
            </div>
            <div className="flex justify-end  w-full   md:justify-center">
                  <input 
                  className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-2 md:w-full w-10/12 "
                  type="" id="" placeholder="Ingresa aqui el proveedor" />    
            </div>
        </div>

        <div className="flex items-center md:flex-col md:w-48 justify-between 2xl:w-60">
            <div> 
                <label htmlFor="">
                Precio:
                </label>
            </div>
            <div className="flex justify-end  w-full md:justify-center">
                  <input 
                  className=" bg-slate-400 p-1 rounded mt-1 mb-1 md:m-2 md:w-full w-10/12 "
                  type="" id="" placeholder="Ingresa aqui el precio" />    
            </div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;

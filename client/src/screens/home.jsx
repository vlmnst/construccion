import NavBar from "../components/navbar";
import MaterialesTable from "../components/materiales";
import MaterialesList from "../components/materialeslist";
import ProveedoresTable from "../components/proveedores";
import Formulario from "../components/formulario";
function Home() {
  return (
    <div className="flex flex-col w-full h-full sm:h-auto">
      <NavBar />
      <div className="flex flex-col 2xl:flex-row text-white items-center h-full  md:justify-center lg:justify-around    ">
        <div className="flex flex-col lg:flex-row  items-center w-10/12  md:justify-center mb-10 ">
          <div className="hidden sm:flex sm:mr-20 sm:ml-20 md:m-0 w-full">
            <MaterialesTable />
          </div>
          <div className=" sm:hidden w-full">
            <MaterialesList />
            <MaterialesList />
          </div>
          <div className="hidden sm:flex  sm:h-full lg:w-1/3 w-full ">
            <ProveedoresTable/>
          </div>
        </div>
        <div className="flex  w-full justify-center">
          <Formulario/>
          </div>
      </div>
    </div>
  );
}

export default Home;

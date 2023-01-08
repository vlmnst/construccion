import NavBar from "../components/navbar";
import MaterialesTable from "../components/materiales";
import MaterialesList from "../components/materialeslist";
import PresupuestoTable from "../components/presupuesto";
import Formulario from "../components/formulario";
function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col 2xl:flex-row text-white items-center lg:justify-around md:justify-center ">
        <div className="flex flex-col lg:flex-row  items-center w-9/12">
          <div className="hidden sm:flex sm:mr-20 sm:ml-20 md:m-0 w-full">
            <MaterialesTable />
          </div>
          <div className=" sm:hidden w-full">
            <MaterialesList />
            <MaterialesList />
          </div>
          <div className="hidden sm:flex sm:w-full sm:h-full lg:w-1/3">
            <PresupuestoTable/>
          </div>
        </div>
        <div><Formulario/></div>
      </div>
    </div>
  );
}

export default Home;

import NavBar from "../components/navbar";
import MaterialesTable from "../components/materiales";
import MaterialesList from "../components/materialeslist";
function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col lg:flex-row text-white items-center md:justify-around">
        <div className="flex flex-col md:flex-row  items-center">
          <div className="hidden sm:flex sm:mr-20 sm:ml-20 md:m-0">
            <MaterialesTable />
          </div>
          <div className=" sm:hidden">
            <MaterialesList />
          </div>
          <div className="hidden sm:flex">PRESUPUESTO</div>
        </div>
        <div>AQUI EL FORMULARIO</div>
      </div>
    </div>
  );
}

export default Home;

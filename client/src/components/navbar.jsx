function NavBar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center">
      <select className="text-sm bg-slate-600 text-white p-2 rounded mt-5 mb-5 w-3/4 md:m-5 md:w-1/5">
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

      <select className="text-sm bg-slate-600 text-white p-2 rounded mb-5 w-3/4 md:m-5  md:w-1/5">
        <option>Seleccione un estado</option>
        <option value="todosEstado">Todos</option>
        <option value="fletes">Fletes pendientes</option>
        <option value="compras">Compras pendientes</option>
        <option value="definiciones">Definiciones</option>
      </select>
    </nav>
  );
}

export default NavBar;

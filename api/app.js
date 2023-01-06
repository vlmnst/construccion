let mysql =  require('mysql')
let conexion = mysql.createConnection({
host: 'localhost',
database: 'tutorial',
user: 'root',
password: '1234'
})


conexion.connect( function (error) {
	if(error) {
  		throw error;
}else{
console.log('conexion exitosa')
	}
});

conexion.end();
let cursos = [{
	id:1,
	nombre:'Fundamentos de robótica',
	duracion:80,
	valor:800000
},
{
	id:2,
	nombre:'Seguridad web',
	duracion:120,
	valor:1200000
},
{
	id:3,
	nombre:'Criptografía básica',
	duracion:45,
	valor:40000
}];

let listarCursos = (cursos) => {
	for(i=0;i<cursos.length;i++){
		(function(i){
			setTimeout(function(){
				curso = cursos[i];
				console.log("El curso con el id " + curso.id  + " llamado " + curso.nombre + " tiene una duración de " + curso.duracion + " horas y un valor de " + curso.valor + " pesos.");
			}, 2000 * (i+1))
		})(i);
	}
}

module.exports = {
	cursos,
	listarCursos
};
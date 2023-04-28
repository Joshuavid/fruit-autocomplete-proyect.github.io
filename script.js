const input = document.querySelector('#fruit');//Tomamos el input que tenga como clase #fruit
const suggestions = document.querySelector('.suggestions ul');//Tomamos los ul de el elemento div con el ID Suggestions

//En este areglo guardareos todos los datos que pueden servir para autocompetado
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 
'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 
'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 
'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 
'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 
'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 
'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 
'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu', 'Joshua', 'Venecia', 'Leo', 'Marta', 'Michal', 'Tonito el polarizado', 'Tonito',
'Portillo', 'Alan'];


//Buscador / str argumento que pasaran strings
function search(str) {
	let results = []; //Aqui se almacenaran los resultados mas sercanos a lo que eh escrito

//Hacemos un bucle para iterr por completo el areglo de frutas
	for (let i = 0; i < fruit.length; i++) {
//Creamos una variable donde guardaremos los elementos de el areglo fruta pero le aplicamos el tolowercase que ara en minusculas todos los caracteres
	  let fruitName = fruit[i].toLowerCase();

//Si el areglo fruta contiene(Usamos el metodo incude de verificar si incluye lo de los parentes)
//Si tiene std parametro lo cual dice el caracteres que e escrito si lo tiene le aplica el metodo de hacerlo en minuscula
	  if (fruitName.includes(str.toLowerCase())) {
		results.push(fruit[i]); // Y lo pushamos dentro de el agraga de el areglo fruit el elemento encontrado a la matris results
	  }
	}

	return results;//Debuelve lo que esta en la matris result
}


//Esta funcion es un manejador de eventos que se activa cada vez que escribimos algo en la barra de busqueda
function searchHandler(e) {
	// TODO
	let inputVal = e.target.value;//esta variable guardara el valor de el argumento e
	let results = search(inputVal);//Esta variable ara uso de la funcion search donde usara la variable inptVal como parametro
	//Lo cual quiere decir que inputVal es lo que emos escrito nosostros en la barra y la funcion search ara su funcion con esa palabras.

	showSuggestions(results, inputVal);//Con estos datos invocaremos la funcion showSuggestions en este funcion lo cual se activara 
	//cada vez que usemos la barra de tareas por eso la invocamos aqui. Usara como parametros el resultado de la funcion search y lo que escribi.
}


//Esta funcion tiene dos parametros, results pasara por un matriz que contiene las sugerencias, y inputVal es lo que hay actualmente en la barra de busqueda
function showSuggestions(results, inputVal) {
	// TODO
	/*suggestion.inner tomara el texto de el elemento de html, lo igualaremos al result que es la variable que contiene ya unos elementos como areglos,
	Le agregaremos el metodo map de esta froma no tendremos que hacer una iterecion de bucle por que el metodo map toma todos los elementos y los hace en una nueva 
	areglo para el, dentro de los parentesis usamoes el parametro results y con una funcion de flecha contatenamos el elemento html con el valor de result.
	Agregamos el metodo .join() al final para contatenar todos los strings en un solo elemento y asi susesibamente en cada elemento en html.*/
		suggestions.innerHTML = results.map(result => `<li>${result}</li>`).join('');
		//Esta es la visibilidad de el elemento la pondremos en display ocea que aparecera con una condicion, si hay almenos un caracter en la barra de busqueda
		//se cumplira la condicion de que aparesca si no hay se quitara el diplay a none o block.
		suggestions.style.display = results.length > 0 ? 'block' : 'none';
}

//Esta funcion solamente tendra un parametro y se encargara de cuando agas clik a una sugerencia de busqueda esta lo autocomplete en la barra de busqueda
function useSuggestion(e) {
	// TODO
	//Si el parametro contiene un elemento de html de tipo li = LI se cumple la condicion.
	if (e.target.tagName === 'LI') {
		//Esta variable guardara el texto que tiene el elemento html li
		let suggestion = e.target.textContent;

		//En esta variable guardaremos los valores que cntenga suggestion es decir el caracteres que tenemos en sugerencias
		input.value = suggestion;

		//Finalmente la funcion oculta la lista de sugernecias una ves que seleccionemos una de estas.
		suggestions.style.display = 'none';
	  }
}

//ponemos un evento keyup se activa justamente despues de soltar el clik. Esta activa la funcion searHandler
input.addEventListener('keyup', searchHandler);
//Ponemos un evento de clik para poder seleccionar un sujeridor. y esta activa la funcion useSuggestion.
suggestions.addEventListener('click', useSuggestion);
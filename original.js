alert("Hello, I'm Joshua Hernandez, and this is a Springboard project aimed at implementing a search bar that provides suggestions based on what you type. Have a good day!                                                    Hola soy Joshua Hernandez y este es un proyecto de Springboard, trata de lograr implementar una barra de busqueda que extienda sugerencias deacuerdo con lo que escribas. Buen dia!!!")

//Tomamos el input que tenga como clase #fruit - We take the input that has class #fruit.
const input = document.querySelector('#fruit');
//Tomamos los ul de el elemento div con el ID Suggestions - We take the ul elements from the div element with ID Suggestions.
const suggestions = document.querySelector('.suggestions ul');

//En este areglo guardareos todos los datos que pueden servir para autocompetado - 
//In this array, we will store all the data that can be used for autocomplete.
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
//Search / str parameter what pases the strings 
function search(str) {
	//Aqui se almacenaran los resultados mas sercanos a lo que eh escrito - 
	//Here the results closest to what I have written will be stored.
	let results = []; 

//Hacemos un bucle para iterar por completo el areglo de frutas
//Loop for iterate the array of fruits
	for (let i = 0; i < fruit.length; i++) {
//Creamos una variable donde guardaremos los elementos de el areglo fruta pero le aplicamos el tolowercase que ara en minusculas todos los caracteres
//We create a variable where we will store the elements of the fruit array, but we apply the toLowerCase method that will make all the characters lowercase.
	  let fruitName = fruit[i].toLowerCase();

//Si el areglo fruta contiene(Usamos el metodo incude de verificar si incluye lo de los parentes)
//Si tiene std parametro lo cual dice el caracteres que e escrito si lo tiene le aplica el metodo de hacerlo en minuscula
// If the fruit array contains (we use the includes method to check if it includes what's inside the parentheses)
// If it has the "str" parameter, which is the characters that have been written, then it applies the method to make it lowercase.
	  if (fruitName.includes(str.toLowerCase())) {
		//Y lo pushamos dentro de el agraga de el areglo fruit el elemento encontrado a la matris results
		// And we push the found element into the "results" array within the "fruit" array.
		results.push(fruit[i]); 
	  }
	}

	return results;
}


//Esta funcion es un manejador de eventos que se activa cada vez que escribimos algo en la barra de busqueda
// This function is an event handler that is triggered every time we type something in the search bar.
function searchHandler(e) {
	// TODO
	let inputVal = e.target.value;//esta variable guardara el valor de el argumento e - This variable will store the value of the argument "e".
//Esta variable ara uso de la funcion search donde usara la variable inptVal como parametro
	//Lo cual quiere decir que inputVal es lo que emos escrito nosostros en la barra y la funcion search ara su funcion con esa palabras. - 
// This variable will be used by the "search" function, where it will use the "inptVal" variable as a parameter.
// This means that "inputVal" is what we have written in the search bar, and the "search" function will perform its function with those words.
	let results = search(inputVal);

	//Con estos datos invocaremos la funcion showSuggestions en este funcion lo cual se activara 
	//cada vez que usemos la barra de tareas por eso la invocamos aqui. Usara como parametros el resultado de la funcion search y lo que escribi.
// With this data, we will invoke the "showSuggestions" function. This function will be activated every time we use the search bar, 
 //that's why we invoke it here. It will use the result of the "search" function and what we wrote as parameters.
	showSuggestions(results, inputVal);
}


//Esta funcion tiene dos parametros, results pasara por un matriz que contiene las sugerencias, y inputVal es lo que hay actualmente en la barra de busqueda
//This function has two parameters: "results", which will go through an array that contains the suggestions, and "inputVal", which is what is currently in the search bar.
function showSuggestions(results, inputVal) {
// 	let html = '';
//   for (let i = 0; i < results.length; i++) {
//     html += `<li>${results[i]}</li>`;
//   }
//   suggestions.innerHTML = html;
//   if (results.length > 0) {
//     suggestions.style.display = 'block';
//   } else {
//     suggestions.style.display = 'none';
//   }
	// TODO
	
	/*suggestion.inner tomara el texto de el elemento de html, lo igualaremos al result que es la variable que contiene ya unos elementos como areglos,
	Le agregaremos el metodo map de esta froma no tendremos que hacer una iterecion de bucle por que el metodo map toma todos los elementos y los hace en una nueva 
	areglo para el, dentro de los parentesis usamoes el parametro results y con una funcion de flecha contatenamos el elemento html con el valor de result.
	Agregamos el metodo .join() al final para contatenar todos los strings en un solo elemento y asi susesibamente en cada elemento en html.*/

/*suggestion.inner will take the text from the html element, we will equal it to the result which is the variable that already contains some elements like arrays,
We will add the map method to avoid iterating through a loop because the map method takes all elements and puts them into a new array,
Inside the parentheses, we use the results parameter and with an arrow function, we concatenate the html element with the value of result.
We add the .join() method at the end to concatenate all the strings into a single element and so on for each element in html.*/
		suggestions.innerHTML = results.map(result => `<li>${result}</li>`).join('');
		//Esta es la visibilidad de el elemento la pondremos en display ocea que aparecera con una condicion, si hay almenos un caracter en la barra de busqueda
		//se cumplira la condicion de que aparesca si no hay se quitara el diplay a none o block.
		suggestions.style.display = results.length > 0 ? 'block' : 'none';
}

//Esta funcion solamente tendra un parametro y se encargara de cuando agas clik a una sugerencia de busqueda esta lo autocomplete en la barra de busqueda
//This function will only have one parameter and will be responsible for autocompleting the search bar when you click on a search suggestion.
function useSuggestion(e) {
	// TODO
	//Si el parametro contiene un elemento de html de tipo li = LI se cumple la condicion.
	//If the parameter contains an HTML element of type li = LI, the condition is met.
	if (e.target.tagName === 'LI') {
		//Esta variable guardara el texto que tiene el elemento html li
		// Trhis variable take th text what the element form html li have
		let suggestion = e.target.textContent;

		//En esta variable guardaremos los valores que cntenga suggestion es decir el caracteres que tenemos en sugerencias
		//In this variable we will store the values that suggestion contains, that is, the characters we have in suggestions.
		input.value = suggestion;

		//Finalmente la funcion oculta la lista de sugernecias una ves que seleccionemos una de estas.
		// Finally, the function hides the suggestion list once we select one of them.
		suggestions.style.display = 'none';
	  }
}

//ponemos un evento keyup se activa justamente despues de soltar el clik. Esta activa la funcion searHandler
//We put a keyup event that is triggered just after releasing the click. It activates the searchHandler function.
input.addEventListener('keyup', searchHandler);
//Ponemos un evento de clik para poder seleccionar un sujeridor. y esta activa la funcion useSuggestion.
//We add a click event in order to select a suggestion, and this triggers the useSuggestion function.
suggestions.addEventListener('click', useSuggestion);
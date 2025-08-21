//Declaración de lista vacía
var arrayAmigos = [];
const regexNombre = /^\s*\p{L}+(?:\s+\p{L}+)*\s*$/u;

const agregarAmigo = () => {
  //Se obtiene valor ingresado por usuario
  const nombreIngresado = document.getElementById("amigo").value;
  //Se obtiene elemento lista
  const listaAmigos = document.getElementById("listaAmigos");

  if (regexNombre.test(nombreIngresado)) {
    if (!arrayAmigos.filter((amigo) => amigo === nombreIngresado).length > 0) {
      arrayAmigos.push(nombreIngresado.trim());
    }
  listaAmigos.innerHTML ="";  
  arrayAmigos.forEach(amigo => {
    const newLi = document.createElement("li");
    newLi.textContent = amigo;
    listaAmigos.appendChild(newLi);
  })  

      
    
  } else {
    console.log("No");
  }
};

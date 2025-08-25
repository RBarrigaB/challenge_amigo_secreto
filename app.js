//Declaración de lista vacía
var arrayAmigos = [];
//Se obtiene elemento lista
const listaAmigos = document.getElementById("listaAmigos");
const amigoGanador = document.getElementById("resultado");
const amigoIngresado = document.getElementById("amigo");
const errMsg = document.getElementById("inputError");
const regexNombre = /^\s*\p{L}+(?:\s+\p{L}+)*\s*$/u;

const agregarAmigo = () => {
  //Se obtiene valor ingresado por usuario
  const nombreIngresado = amigoIngresado.value;
  if (!listaAmigos.getAttribute("hidden")) {
    listaAmigos.hidden = false;
  }
  if (regexNombre.test(nombreIngresado)) {
    if (!errMsg.getAttribute("hidden")) {
      errMsg.hidden = true;
    }
    if (!arrayAmigos.filter((amigo) => amigo === nombreIngresado).length > 0) {
      arrayAmigos.push(nombreIngresado.trim());
      amigoIngresado.value = "";
    } else {
      errMsg.innerHTML = "Nombre de amigo ya se encuentra registrado";
      errMsg.hidden = false;
    }
    listaAmigos.innerHTML = "";
    arrayAmigos.forEach((amigo) => {
      const newLi = document.createElement("li");
      newLi.textContent = amigo;
      listaAmigos.appendChild(newLi);
    });
  } else {
    errMsg.innerHTML = "Por favor, ingrese un nombre válido";
    errMsg.hidden = false;
  }
};

const sortearAmigo = () => {
  let amigoGanadorSorteo =
    arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
  amigoGanador.innerHTML = "";
  const li = document.createElement("li");
  if (!arrayAmigos.length > 0) {
    errMsg.innerHTML = "No existen amigos registrados para hacer un sorteo";
    errMsg.hidden = false;
  } else {
    li.textContent = "El amigo secreto sorteado es: " + amigoGanadorSorteo;
    amigoGanador.appendChild(li);
    listaAmigos.hidden = true;
    errMsg.hidden = true;
    amigoGanador.hidden = false;
    arrayAmigos = []
  }
};

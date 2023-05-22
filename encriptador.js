function tieneAcentos(texto) {
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === texto[i].trim().toUpperCase()) {
        return true;
      } else if (/[^a-z]/.test(texto[i].trim())) {
        return true;
      }
    }
    return false;
}
  
function encriptar(texto) {
    let letrasEncriptadas = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
      };
    
      let letraEncriptada = "";
      for (let i = 0; i < texto.length; i++) {
        const letraActual = texto[i];
        letraEncriptada += letrasEncriptadas[letraActual] || letraActual;
      }
      return letraEncriptada;
}

function desencriptar(texto){
    var palabraEncriptada = texto;
    
    let equivalencias = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
    };

    for (let palabra in equivalencias) {
        palabraEncriptada = palabraEncriptada.replace(new RegExp(palabra, "gi"), equivalencias[palabra]);
    }
    palabraDesencriptada = palabraEncriptada;

    return palabraDesencriptada;
 
}

function encriptarTexto() {
  const inputTexto = document.querySelector("#texto");
  const texto = document.querySelector("#texto").value;
  const tieneCaracteresEspeciales = tieneAcentos(texto);
  if (tieneCaracteresEspeciales) {
    //resultado.textContent = "Error: el texto ingresado contiene caracteres especiales o acentos";
    alert("Error: el texto ingresado contiene caracteres especiales o acentos");
    inputTexto.value="";
  } else {
    const textoEncriptado = encriptar(texto);
    resultado.textContent = textoEncriptado;
    inputTexto.value=""; 
  }
  
}

function desencriptarTexto() {
  const inputTexto = document.querySelector("#texto");
  const texto = document.querySelector("#texto").value;
  const tieneCaracteresEspeciales = tieneAcentos(texto);
  if (tieneCaracteresEspeciales) {
    //resultado.textContent = "Error: el texto ingresado contiene caracteres especiales o acentos";
    alert("Error: el texto ingresado contiene caracteres especiales o acentos");
    inputTexto.value="";
  } else {
    const textoDesencriptado = desencriptar(texto);
    resultado.textContent = textoDesencriptado;
    inputTexto.value="";
  }
}

function copiar(){
  const inputTexto = document.querySelector("#texto");
  inputTexto.value = resultado.textContent;
}

const botonEncriptar = document.querySelector("#botonEncriptar");
const botonDesencriptar = document.querySelector("#botonDesencriptar");
const botonCopiar = document.querySelector("#copiar");
const resultado = document.querySelector("#resultado");

botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiar;




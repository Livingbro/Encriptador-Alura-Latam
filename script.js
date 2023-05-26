///cambio atutomatico de tamaño cuando se agrega mucho texto///
function autoResize() {
    const textarea = document.getElementById("mensaje");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  const helpButton = document.getElementById("boton-info");
  const popupContainer = document.getElementById("popupContainer");
  const popupContent = document.getElementById("popupContent");
  const popupText = document.getElementById("popupText");
  
  helpButton.addEventListener("click", function () {
    popupText.textContent = "La clave es la palabra o mensaje que deseas procesar." +
      "\n\n" +
      "Instrucciones:\n\n" +
      "1.- Escribe o pega el mensaje en el área de texto.\n" +
      "2.- Presiona el botón 'Encriptar' o 'Desencriptar'.\n" +
      "3.- El mensaje aparecerá en la parte trasera de la tarjeta.\n" +
      "4.- Puedes copiar el mensaje con su botón.\n" +
      "La tarjeta volverá a su posición original, donde podrás escribir un nuevo mensaje o pegar el mensaje copiado anteriormente.\n" +
      "5.- El botón 'Girar!' voltea la tarjeta sin eliminar ningún texto.\n" +
      "6.- El icono de limpieza gira la tarjeta a su posición original y limpia todo texto."
  
    popupContainer.style.display = "block";
    setTimeout(function () {
      popupContent.style.transform = "translate(-50%, -50%) scale(1)";
    }, 10);
  });
  
  popupContainer.addEventListener("click", function (event) {
    if (event.target === popupContainer) {
      popupContent.style.transform = "translate(-50%, -50%) scale(0)";
      setTimeout(function () {
        popupContainer.style.display = "none";
      }, 200);
    }
  });
  
  
  const textarea = document.getElementById("mensaje");
  textarea.addEventListener("input", (event) => {
    const text = event.target.value;
    const lowercaseText = text.toLowerCase();
    event.target.value = lowercaseText;
  });
  
  function encriptarMensaje() {
    var mensaje = document.getElementById("mensaje").value.trim();
    if (mensaje !== "") {
      var regex = /^[a-zA-ZñÑ\s]+$/;
      if (!regex.test(mensaje)) {
  
  
        const copiado = document.createElement("div");
        copiado.textContent = "Signo especial detectado intente de nuevo.";
        copiado.style.position = "fixed";
        copiado.style.top = "50%";
        copiado.style.left = "50%";
        copiado.style.transform = "translate(-50%, -50%)";
        copiado.style.background = "rgba(0, 0, 0, 0.8)";
        copiado.style.color = "#fff";
        copiado.style.padding = "10px 20px";
        copiado.style.borderRadius = "5px";
        copiado.style.zIndex = "9999";
  
        document.body.appendChild(copiado);
  
        setTimeout(() => {
          copiado.parentNode.removeChild(copiado);
        }, 2000);
  
        return;
      }
  
      var card = document.getElementById("flip-card");
      card.style.transform = "perspective(800px) rotateY(180deg)";
  
      var card = document.getElementById("flip-button");
      card.style.transform = "perspective(800px) rotateY(180deg)";
  
      mensaje = mensaje.toLowerCase();
      mensaje = mensaje.replace(/e/g, "enter");
      mensaje = mensaje.replace(/i/g, "imes");
      mensaje = mensaje.replace(/a/g, "ai");
      mensaje = mensaje.replace(/o/g, "ober");
      mensaje = mensaje.replace(/u/g, "ufat");
      document.getElementById("resultado").value = mensaje;
    }
  }
  
  function desencriptarMensaje() {
    var mensaje = document.getElementById("mensaje").value.trim();
    if (mensaje !== "") {
      var card = document.getElementById("flip-card");
      card.style.transform = "perspective(800px) rotateY(180deg)";
  
      var card = document.getElementById("flip-button");
      card.style.transform = "perspective(800px) rotateY(180deg)";
      mensaje = mensaje.replace(/enter/g, "e");
      mensaje = mensaje.replace(/imes/g, "i");
      mensaje = mensaje.replace(/ai/g, "a");
      mensaje = mensaje.replace(/ober/g, "o");
      mensaje = mensaje.replace(/ufat/g, "u");
      document.getElementById("resultado").value = mensaje;
    }
  }
  
  function copiar() {
    // regresan la tarjeta y botones a su posicion original
    var card = document.getElementById("flip-card");
    card.style.transform = "perspective(800px) rotateY(0deg)";
  
    var card = document.getElementById("flip-button");
    card.style.transform = "perspective(800px) rotateY(0deg)";
  
    if (document.getElementById("resultado").value) {
      // selecciona resultado del textarea
      document.getElementById("resultado").select();
      document.getElementById("resultado").setSelectionRange(0, 99999);
      // copia el mensaje al portapapeles
      document.execCommand("copy");
  
      // pop up mensaje copiado.
      const copiado = document.createElement("div");
      copiado.textContent = "Mensaje Copiado";
      copiado.style.position = "fixed";
      copiado.style.top = "50%";
      copiado.style.left = "50%";
      copiado.style.transform = "translate(-50%, -50%)";
      copiado.style.background = "rgba(0, 0, 0, 0.8)";
      copiado.style.color = "#fff";
      copiado.style.padding = "10px 20px";
      copiado.style.borderRadius = "5px";
      copiado.style.zIndex = "9999";
  
      document.body.appendChild(copiado);
  
      setTimeout(() => {
        copiado.parentNode.removeChild(copiado);
      }, 1000);
  
      // elimina contenido de ambos lados de la tarjeta
      document.getElementById("mensaje").value = "";
      document.getElementById("resultado").value = "";
    }
  }
  
  function girar() {
    var card = document.getElementById("flip-card");
  
    if (card.style.transform == "perspective(800px) rotateY(180deg)") {
      card.style.transform = "perspective(800px) rotateY(0deg)";
    } else {
      card.style.transform = "perspective(800px) rotateY(180deg)";
    }
  
  }
  
  
  function limpiar() {
    var card = document.getElementById("flip-card");
    card.style.transform = "perspective(800px) rotateY(0deg)";
  
    var card = document.getElementById("flip-button");
    card.style.transform = "perspective(800px) rotateY(0deg)";
  
    document.getElementById("mensaje").value = "";
    document.getElementById("resultado").value = "";
  }
  

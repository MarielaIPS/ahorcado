let palabras;
let palabraSecreta = "";
let errores = 0;
let correctas = [];
var ganaste = false;
let letra;


//funcion para marcar un solo checkbox

function seleccionarOpcion(opcion) {
    const opciones = document.querySelectorAll('input[type="checkbox"]');
    for (const otraOpcion of opciones) {
      if (otraOpcion !== opcion) {
        otraOpcion.checked = false;
      }
    }
  }

  // Asigna la función al evento "change" de cada checkbox
  document.querySelectorAll('input[type="checkbox"]').forEach(opcion => {
    opcion.addEventListener('change', () => seleccionarOpcion(opcion));
  });


  function tipodejuego() {
    const tiposSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    // Recorre los "checkbox" seleccionados
    for (const tipo of tiposSeleccionados) {
      // Agrega las palabras según el valor del "checkbox"
      if (tipo.value === "animal") {
        palabras=["HIPOPOTAMO", "ELEFANTE", "ORCA", "BALLENA", "TIGRE", "ZORRINO", "TORTUGA", 'PERRO', 'GATO', 'LEON'];
        iniciarJuego()
      } else if (tipo.value === "provincia") {
        palabras=["BUENOS AIRES", "MENDOZA", "SAN JUAN", "LA RIOJA", "MISIONES", "TUCUMÁN", "SANTA FE", "TIERRA DEL FUEGO", "RÍO NEGRO", "LA PAMPA", "SAN LUIS", "CÓRDOBA", "ENTRE RÍOS", "CATAMARCA", "SANTIAGO DEL ESTERO", "CORRIENTES", "CHACO", "NEUQUÉN", "CHUBUT", "FORMOSA", "JUJUY", "SALTA"];
        iniciarJuego()
      } else if (tipo.value === "pais") {
        palabras=["ARGENTINA", "BOLIVIA", "BRASIL", "CHILE", "COLOMBIA", "ECUADOR", "GUYANA", "PARAGUAY", "PERÚ", "SURINAM", "URUGUAY", "VENEZUELA"];
        iniciarJuego()
      }
    }
  }


//funcion para escoger palabra secreta
function escogerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta)
}

    
   function iniciarJuego() {
    document.getElementById("caja_input").style.display = "none"; //desaparece toda la caja input
    document.getElementById("espacio").style.display="none";
    document.getElementById("tecladoVirtual").classList.toggle("oculta")//saco la clase oculta!
    document.getElementById("canvas").classList.toggle("oculta")//agrega el oculta
    document.getElementById("desaparece").classList.toggle("ocultar");//le saca el ocultar
    escogerPalabraSecreta()
    dibujarLinea()
    }


// para hacer un teclado virtual
boton_letras=document.querySelectorAll('#tecladoVirtual button')

for(let i=0; i < boton_letras.length ;i++){
    boton_letras[i].addEventListener('click',click_letras)
}

function click_letras(event){
    button=event.target;//es todo el boton
    button.disabled=true;
    letra=button.innerHTML;//contenido de la letra
    
        if ( palabraSecreta.includes(letra)) {
            errores=errores;
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    escribirLetraCorrecta(i)
                    correctas.push(letra)//guado la letra correcta
                }
                if (palabraSecreta.length === correctas.length) {
                    ganaste = true;
                    canvas.clearRect(0,0,700,500);
                    Swal.fire({
                        title: 'GANASTE!!',
                        // width: 600,
                        padding: '2em',
                        color: '#716add',
                        html: `
                        <div>
                          <h1>¡Felicidades!</h1>
                          <p>Has ganado el juego.</p>
                          <img src="img/gano.jpg" width="150px" />
                        </div>`
                    })
                    
                    break
                }
            }
        } else {
            errores++
            escribirLetraIncorrecta(letra,errores)
            ahorcar(errores)
        }

        }
    








function ahorcar(intentoErrado) {

    switch (intentoErrado) {
        case 1:
            canvas.drawImage(img, 400, 0); 
            break;
        case 2:
            canvas.drawImage(img2, 397, 208)
            break
        case 3:
            canvas.drawImage(img3, 397, 338)
            break;
        case 4:
            canvas.drawImage(img4, 200, 226)
            break;
    
        case 5:
            canvas.drawImage(img6, 199, 305)
            break;
        case 6:
                canvas.drawImage(img5, 199, -6)
                break;
       
        case 7:
            // canvas.clearRect(0,0,700,500);
            // canvas.drawImage(img7,50, 50)
            Swal.fire({
                icon: 'error',
                title: 'Tu has perdido!!!',
                // text: 'Lo has ahorcado, la palabra era: ' + palabraSecreta + ' sigue intentandolo! ',
                showCancelButton: true,
                confirmButtonText: 'Reiniciar',
                cancelButtonText: 'Cancelar',
                html: `
                    <h1>Bart ha muerto</h1>
                  <img src="img/bart_muerto.jpg" width="200px"/>
               `
            }).then((result) => {
                if (result.value) {
                    // reinicia la página
                    window.location.reload();
                }
            });

            break;
    }
}


function reiniciar(){
    window.location.reload();
}

 



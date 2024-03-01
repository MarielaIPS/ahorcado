let canvas = document.getElementById("canvas").getContext("2d");

var img = new Image();
img.src = "cabeza_homero.png"; 
var img2=new Image()
img2.src="cuerpo_homero.png"
var img3=new Image()
img3.src="pies_homero.png"
var img4=new Image()
img4.src="manos_homero.png"
var img5=new Image()
img5.src="cara_bart2.png"
var img6=new Image()
img6.src="pies_bart.png"
var img7=new Image()
img7.src="bart_muerto.jpg"
var img8=new Image()
img8.src="gano.jpg"



//dibuja las lineas de la palabra secreta
function dibujarLinea(){
    canvas.lineWidth = 6; 
    canvas.lineCap = "round"; 
    canvas.lineJoin = "round";
    canvas.fillStyle = "#f00000" ;
    canvas.strokeStyle ="#000000" ;

    let anchura = 900/palabraSecreta.length;

    for(let i = 0; i < palabraSecreta.length; i++){
        canvas.moveTo(100 + (anchura*i),590);//690
        canvas.lineTo(150 + (anchura*i),590);//690
    }
    canvas.stroke();
    canvas.closePath();
}


function escribirLetraCorrecta(index){
    canvas.font = "bold 52px Arial" ;
    canvas.lineWidth = 6 ;
    canvas.lineCap = "round" ;
    canvas.lineJoin = "round" ;
    canvas.fillStyle = "#000000";
    
    let anchura = 900/palabraSecreta.length;
    canvas.fillText(palabraSecreta[index],105 + (anchura*index), 585) //685
    canvas.stroke()

}


function escribirLetraIncorrecta(letra,errorsLeft){
    canvas.font = "bold 40px Arial" ;
    canvas.lineWidth = 6 ;
    canvas.lineCap = "round" ;
    canvas.lineJoin = "round" ;
    canvas.fillStyle = "#000000";
    canvas.fillText(letra,300+(40*(10+errorsLeft)),200,40)//500 -590
}

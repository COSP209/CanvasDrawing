var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibijoPorClick);

var d=document.getElementById("dibujito");
var ancho = d.width;

var lienzo=d.getContext("2d");
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xinicial,xfinal);
  lienzo.lineTo(yinicial,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
1
function dibijoPorClick()
{
var xxx =parseInt(texto.value);
var lineas=xxx;
var l=0;
var yi,yf;
var colorcito="#FAA";
var espacio = ancho /lineas;

while(l<lineas)
{
  yi=espacio*l;
  xf=espacio*(l+1);
  dibujarLinea(colorcito,0,yi,xf,300);
  console.log("Linea   "+1);
  l=l+1;
}
dibujarLinea(colorcito,1,1,1,300);
dibujarLinea(colorcito,1,299,299,299);


}

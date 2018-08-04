var numeroa;
var numerob;
var transaccion;



function init() {
    
    // www.youtube.com/watch?v=uGohVJhgSN8     
    
    var panelresultado = document.getElementById("panelresultado");
    var cero=document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var punto = document.getElementById("punto");
    var clear = document.getElementById("clear");
    var igual = document.getElementById("igual");
    
    
    
    uno.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "1";
    }
    dos.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "2";
    }
    tres.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "3";
    }
    cuatro.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "4";
    }
    cinco.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "5";
    }
    seis.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "6";
    }
    siete.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "7";
    }
    ocho.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "8";
    }
    nueve.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "9";
    }
    cero.onclick= function(e){
    panelresultado.textContent = panelresultado.textContent + "0";
    }
    clear.onclick= function(e){
    resetear();
    }
    igual.onclick= function(e)
    {
    numerob = panelresultado.textContent;
    resolver();
    }
    suma.onclick= function(e)
    {
    numeroa = panelresultado.textContent;
    transaccion = "+";
        limpiar();
    }
    
    resta.onclick= function(e)
    {
    numeroa = panelresultado.textContent;
    transaccion = "-";
    limpiar();
    }
        
    multiplicacion.onclick= function(e)
    {
    numeroa = panelresultado.textContent;
    transaccion = "X";
    limpiar();
    }
    
    division.onclick= function(e)
    {
    numeroa = panelresultado.textContent;
    transaccion = "/";
    limpiar();
    }
    function limpiar() 
    {
        panelresultado.textContent = "";
    }
    
    
      function resolver()
    {
        var res = 0;
        switch(transaccion){
                case "+":    
                res = parseInt(numeroa) + parseInt(numerob);
                break;
                 case "-":    
                res = parseInt(numeroa) - parseInt(numerob);
                break;
                 case "X":    
                res = parseInt(numeroa) * parseInt(numerob);
                break;
                 case "/":    
                res = parseInt(numeroa) / parseInt(numerob);
                break;
                
        }
                resetear();
                panelresultado.textContent = res;
    }
    function resetear() 
    {
        panelresultado.textContent = "";
        numeroa = 0;
        numerob = 0;
        transaccion = "";
    }    

}

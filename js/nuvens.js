

var Guarda = new Image();
var Gx = 400;
var Nuvem1 = new Image();
var Nuvem2 = new Image();
var Nuvem3 = new Image();
function criarNuvens()
{
 Nuvem1.src = "nv.png"
 Nuvem2.src = "nv.png"
 Nuvem3.src = "nv.png"
 Guarda.src = "gc.png";
 criar();

}
function criar() {
    
    requestAnimationFrame(criarNuvens);
    ctx.drawImage(Nuvem1, 100, -100, 600,500);
    ctx.drawImage(Nuvem2, 500, -100, 600,500);
    ctx.drawImage(Nuvem3, 1000, -100, 600,500);
    ctx.drawImage(Guarda, Gx, 800, 300, 300);
    
}
criarNuvens()

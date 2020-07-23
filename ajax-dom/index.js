import { Teste } from './components/teste.js';
import * as $ from './components/ajax.js';

var load = function() {
    var p = new Teste("#app");
    p.getData();
}

document.getElementById("btn").addEventListener("click", load);

/* *************************** */
/*
import { Teste } from './components/teste.js';
import * as $ from './components/ajax.js';

var p = new Teste("#app");

var load = function() {
    p.getData();
    setTimeout(()=>{console.log(p.data)}, 5000);
}

var load2 = function() {
    console.log(p.data);
}

document.getElementById("btn1").addEventListener("click", load);
document.getElementById("btn2").addEventListener("click", load2);
*/
/* *************************** */

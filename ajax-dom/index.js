import { Teste } from './components/teste.js';
import * as $ from './components/ajax.js';

var load = function() {
    var p = new Teste("#app");
    p.getData();
}

document.getElementById("btn").addEventListener("click", load);
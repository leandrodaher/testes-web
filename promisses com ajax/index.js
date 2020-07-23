import { Perfil } from './components/perfil.js';
import { Ajax } from './components/ajax.js';

/*
var p = new Ajax();
(async () => {
    let a = await p.doAjaxThings("http://worldtimeapi.org/api/timezone");
    alert(a);
})();
*/

var p = new Ajax();
(async function() {
    let a = await p.doAjaxThings("http://worldtimeapi.org/api/timezone");
    alert(a);
})();
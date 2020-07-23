import * as $ from './ajax.js';

export class Teste {
    constructor(container) {
        this.container = container;
    }

    getData() {
        document.querySelector(this.container).innerHTML = "Loading...";
        //atraso proposital 5s
        setTimeout(()=>{
            $.Ajax({
                url:"http://worldtimeapi.org/api/timezone",//request URL
                type:"GET",
                method: true,
                data:{
                
                },
                success: function(data) {
                    document.querySelector(this.container).innerHTML = data;
                }.bind(this) // para acessar a propiedade this.container
            })
        }, 3000)
    }

}
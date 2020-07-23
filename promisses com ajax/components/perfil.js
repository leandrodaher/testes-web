export class Perfil {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    /*getData() {
        let ret = 0;
        let time = 0;
        $.minAjax({
            url:"http://worldtimeapi.org/api/timezone",//request URL
            type:"GET",//Request type GET/POST
            method: true,
            //Send Data in form of GET/POST
            data:{
              
            },
            //CALLBACK FUNCTION with RESPONSE as argument
            success: function(data) {
                ret = data;
                //alert(ret);
            }
        });

        while (ret==0 && time<10000) {
            console.log(time);
            time++;
        }
        return ret;
    }*/

    /*document.addEventListener("DOMContentLoaded", function () {
        doAjaxThings();
        // create and manipulate your DOM here. doAjaxThings() will run asynchronously and not block your DOM rendering
        document.createElement("...");
        document.getElementById("...").addEventListener(...);
    });*/


}
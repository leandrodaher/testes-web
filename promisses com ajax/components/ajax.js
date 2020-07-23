export class Ajax {
    constructor() {}

    // https://stackoverflow.com/questions/48969495/in-javascript-how-do-i-should-i-use-async-await-with-xmlhttprequest
    makeRequest(method, url) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }

    async doAjaxThings(url) {
        // await code here
        let result = await this.makeRequest("GET", url);
        // code below here will only execute when await makeRequest() finished loading
        return result;
    }

    /*document.addEventListener("DOMContentLoaded", function () {
        doAjaxThings();
        // create and manipulate your DOM here. doAjaxThings() will run asynchronously and not block your DOM rendering
        document.createElement("...");
        document.getElementById("...").addEventListener(...);
    });*/

    
    /* Usando com função anonima e arrow function*/
    /*
    var p = new Ajax();
    (async () => {
        let a = await p.doAjaxThings("http://worldtimeapi.org/api/timezone");
        alert(a);
    })();
    */

    /* Usando com função anonima */
    /*
    var p = new Ajax();
    (async function() {
        let a = await p.doAjaxThings("http://worldtimeapi.org/api/timezone");
        alert(a);
    })();
   */
}


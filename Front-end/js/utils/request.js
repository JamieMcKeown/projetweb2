/**
 * @example
 * http_get("http://cours04api.localhost/api/messages").then(data => {
 * 
 * })
 * 
 */

export function http_get(url) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'GET',
            mode: 'cors',
        }
        fetch(url, options).then(resp => {
            resp.json().then(resolve)
        })
    })
}




/**
 * @example
 * http_post("http://cours04api.localhost/api/messages/new", {
 *   username: this.$route.params.username,
 *   message: this.texteMessage
 *   }).then(data => {
 *       console.log(data)
 *   })
 * 
 */

export function http_post(url, information) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(information)
        }
        fetch(url, options).then(resp => {
            resp.json().then(resolve)
        })
    })
}


//Restful is simple class that wrap all fetch API
//Reusable one
//All methods returns promises
class Restful {
    constructor() {

    }

    //Core method, this uses window.fetch
    fetchJson(url, options) {
        
        if (!options) {
            options = {}
        }

        if (localStorage.token) {
            options.headers = Object.assign({}, options.headers, 
                            {
                                "Authorization": "JWT " + localStorage.token
                            }
                        )
        }
        

        return window.fetch(url, options)
            .then ( response => {
                return response.json();
            })
    }
 
    getJson(url, options) {
        return this.fetchJson(url, options)
    }

    postJson(url, data, headers = undefined) {
        return this.fetchJson(url, {
            method: 'POST',
            headers: Object.assign({
                        'Content-Type': 'application/json'
                    }, headers),
            body: JSON.stringify(data)
        })
    }


    putJson(url, data, headers = undefined) {
        return this.fetchJson(url, {
            method: 'PUT',
            headers: Object.assign({
                        'Content-Type': 'application/json'
                    }, headers),
            body: JSON.stringify(data)
        })
    }


    deleteJson(url, data, headers = undefined) {
        return this.fetchJson(url, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify(data)
        })
    }
}


export default new Restful();



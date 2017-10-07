import {observable, 
        action,
        computed
    } from "mobx";

import restful from "../core/Restful";

// entire broser , sessionStorage per tab, no session timeout
let storage = window.localStorage;

class AuthState {
    
    constructor() {
        this.token = storage.token;
    }

    @observable token = '';
    @observable roles = [];

    @computed  get authenticated () {
            if (this.token)
                return true;

            return false;
    }

    @action setToken (token) {
        console.log("Token is ", token);
        this.token = token;
        if (token)
            storage.setItem("token", token)        
    }

    @action setRoles(roles) {
        this.roles = roles;
        storage.setItem("roles", JSON.stringify(roles))
    }

    @action setUser(user) {
        this.user = user;
        storage.setItem("user", JSON.stringify(user))        
    }

    @action login (username, password) {
        let user = {username, 
                    password};

        return restful.postJson("http://localhost:7070/oauth/token", user)
            .then((data) => {
                  console.log("Data is ", data);

                  this.setToken(data.token);
                  this.setRoles(data.identity.roles);
                  this.setUser({ 
                                  id: data.identity.id,
                                  name: data.identity.name
                                });
                  
 
                  alert(data.token);

                 return Promise.resolve(true);
      
                 //read from local storage
                 //redirect
          });
        };
    
      
      @action logout () {
         
           storage.removeItem("token");
           storage.removeItem("user");
           storage.removeItem("roles");

           this.token = "";
           this.roles = null;
           this.user = null;

      };
}


export default new AuthState();
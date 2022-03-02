import axios from "axios";

const ApiService = axios.create({
    baseURL: 
        'https://shrouded-shelf-01513.herokuapp.com/',

});

export function getUser(){

    ApiService.get("?username=francislene")
        .then(response => {
        const data = response.data
        console.warn(data)
    })
    .catch(error => console.log(error))

}
export function addUser(user){

    ApiService.post("",user)
    .then(response =>{
    const data = response.data  
    })
    .catch(error => console.warn(error))

}
export function deleteUser(id){

    api.delete(`/${id}`)
        .then(response => {
        const data = response.data
    })
    .catch(error => console.warn(error))

}

export default ApiService;
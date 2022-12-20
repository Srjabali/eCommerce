// const user = {
//     "name": "ryan",
//     "lastname": "ray"
// }


// let output=''

// output=`<li>${user.name}</li>`

// document.querySelector("[datos-productos]").innerHTML=output;

// console.log(JSON.stringify(output))

// const listaProductos = () => fetch("http://localhost:3000/producto")
//     .then(response => {
//         return response.json()
//     });
//     .then(data => {
//         console.log(data)
//         document.getElementById('content-productos').innerHTML=
//         `<p>${data.price}</p>`;
//     });

// const productoServices = {
//     listaProductos
// }

// const nuevoProducto = (name, price, imageUrl) => {
    
//     const card = document.createElement("div");
//     const contenido =`
//         <div>
//             <img src=${imageUrl}/>
//             <h3>${name}</h3>
//             <p>${price}</p>
//         </div>  
// `    
//     card.innerHTML = contenido;
//     card.classList.add("card")
//     return card
// }

// const producto = document.querySelector("[datos-productos]");

// const render = async () => {
//     try{
//         const listaProductos = await productoServices.listaProductos()
//         listaProductos.forEach(elemento => {
//             producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl))
//         });
//     }
//     catch(erro){
//         console.log(erro)
//     }
// }

// render()

// document.getElementById("registerIng__btn").addEventListener("click", "register__bt");

// function resgistro(){
//     document.getElementById('sale').style.display='none';
//     document.getElementById('content').style.display='none';
//     document.getElementById('register').style.display='flex';

// }

function login(){
    var user, pass;

    user = document.getElementById('name').value;
    pass = document.getElementById('email').value;

    if(user == "java" && pass == "java@li.cl"){
        window.location="registro.html";
    }
}


import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) => {
    
    const card = document.createElement("ul");
    const contenido =`
        <li>
            <a href="#"><img src=${imageUrl}/></a>
            <h3>${name}</h3>
            <p>${price}</p>
        </li>  
`    
    card.innerHTML = contenido;
    card.classList.add("card")
    return card
}

const producto = document.querySelector("[datos-productos]");

const render = async () => {
    try{
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl))
        });
    }
    catch(erro){
        console.log(erro)
    }
}

render()
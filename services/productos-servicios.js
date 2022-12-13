//GET

const listaProductos = () => fetch("http://localhost:3000/producto")
    .then(response => {
        return response.json()
    });

export const productoServices = {
    listaProductos
}


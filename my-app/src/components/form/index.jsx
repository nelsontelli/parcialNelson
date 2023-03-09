import React, {useState} from "react"

export const Form = ({ onSubmit, titulo }) => {

    const [libro, setLibro] = useState("")
    const [autor, setAutor] = useState("")

    const handelerChangeLibro = (e) => {
        if (e.target.value.length > 2) {
            console.log("handelerChange: ", e.target.value);
        }
        //aqui no permite que el formulario permita ingresar espacios en blanco
        setLibro(e.target.value.trim());
    }
    const handelerChangeAutor = (e) => {
        if (e.target.value.length > 5) {
            console.log("handelerChange: ", e.target.value);
        }
                
        setAutor(e.target.value);
    }
    const handelerSubmit = (e) => {
        e.preventDefault();

        const datos = {
            libro,
            autor
        }
        onSubmit(datos)
    }
    return (
        <form onSubmit={handelerSubmit}>
            <h3>{titulo}</h3>
            <input
                id="libro"
                type="text"
                name="libro"
                value={libro}
                onChange={handelerChangeLibro}
                placeholder="Ingresar Nombre Libro"
            />
            <input
                id="autor"
                type="text"
                name="autor"
                value={autor}
                onChange={handelerChangeAutor}
                placeholder="Ingresar Nombre del Autor"
            />
            <input
                type="submit"
            />
        </form>
    )
}
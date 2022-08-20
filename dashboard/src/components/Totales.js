export default function Total({titulo, valor}) {
    // cambiarFondo(){
    //     document.querySelector(".totales").style.backgroundColor = "grey"
    // }

    return (
        <>
        <div>
            <h3 className="totales" >Total de {titulo}: {valor}</h3>
        </div>

        </>
    )
}
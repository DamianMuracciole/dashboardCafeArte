import Total from "./Totales";

export default function TopBar(){
    return (
        <>
        <Total titulo="Productos" valor={40} />
        <Total titulo="usuarios" valor={20} />
        <Total titulo="categorias" valor={10} />
        </>
    )
}
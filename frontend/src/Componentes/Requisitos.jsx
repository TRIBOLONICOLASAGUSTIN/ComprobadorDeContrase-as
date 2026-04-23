function Requisitos({lista}){
    return(
        <section className="box">
            <h2>Checklist reactivo</h2>
            <ul>
                {lista.map((item)=>(
                    <li key ={item.id} className={item.ok ? "ok": "no"}>
                        {item.ok ? "Cumple: ": "Falta: "}{item.texto}
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Requisitos;
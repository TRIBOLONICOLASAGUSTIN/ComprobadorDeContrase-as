function MedidorFortaleza({etiqueta, nivel}){
    return(
        <section className="box">
            <h2>Fortaleza</h2>
            <p>
                Estado: <span className={nivel}>{etiqueta}</span>
            </p>
        </section>
    );
}
export default MedidorFortaleza;
function PanelCopia({contrasena, onCopiar}){
    return(
        <section className="box">
            <h2>Copiar clave</h2>
            <button type="button" onClick={onCopiar} disabled={!contrasena}>
                Copiar clave
            </button>
        </section>
    );
}
export default PanelCopia;
function EntradaContrasena({
    contrasena,
    mostrar,
    onCambiarContrasena,
    onToggleMostrar,
    error
}) {
    return(
        <section className="box">
            <h2> Ingresar clave</h2>
            <input 
            type={mostrar ? "text": "password"}
            value = {contrasena}
            onChange ={(e)=>onCambiarContrasena(e.target.value)}
            placeholder="Escribi tu contrasena"
            />
            <button type="button" onClick={onToggleMostrar}>
                {mostrar ? "Ocultar": "Mostrar"}
            </button>
            {error && <p className="no">{error}</p>}
        </section>
    )
}
export default EntradaContrasena;
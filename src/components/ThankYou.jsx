import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const { orderId } = useParams();
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    {orderId ? <div class="alert alert-warning text-center" role="alert"><h3>¡Gracias por su compra!</h3><p>Se generó su órden de compra con el ID: <b>{orderId}</b></p></div> : ""}
                    <Link to={"/"} class="btn btn-warning">Volver al menú principal.</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;
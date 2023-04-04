const Newsletter = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div>
                                    <h4>
                                        Suscribite a nuestro newsletter para conocer los últimos lanzamientos.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input-group news-input m-3">
                        <input type="text" class="form-control" placeholder="Email..." />
                        <button class="btn btn-dark btn-lg" type="button">
                            Suscribirse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;
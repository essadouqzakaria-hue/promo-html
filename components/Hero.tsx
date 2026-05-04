export default function Hero() {
    return (
        <section className="container my-5">
            <h1>Agence immobilière Marrakech</h1>

            <div className="row mt-4">
                <div className="col-md-3">
                    <select className="form-select">
                        <option>Type</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <select className="form-select">
                        <option>Ville</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <input className="form-control" placeholder="Référence" />
                </div>

                <div className="col-md-3">
                    <button className="btn btn-success w-100">
                        Rechercher
                    </button>
                </div>
            </div>
        </section>
    );
}
export default function Page() {
    return (
        <main>
            <section className="section-slide-pagecontact">
                <div className="overlay" />
                <div className="content">
                    <div className="container">
                        <h1>Contactez-nous</h1>
                    </div>
                </div>
            </section>
            <section className="section_breadcrumbs">
                <div className="container">
                    <ul>
                        <li>
                            <a itemProp="item" href="/">
                                <span>Accueil</span>
                            </a>
                        </li>
                        <li className="active">
                            <span itemProp="name">Contactez-nous</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="content">
                                <h2>Acheter ou louer votre logement</h2>
                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>*/}
                                <form action="" method="post" className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nom"
                                            placeholder="Nom"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="prenom"
                                            placeholder="Pénom"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tel"
                                            placeholder="Tél"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="" className="form-label">
                                            Vous voulez acheter ou louer ?
                                        </label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="acheter_louer"
                                                id="acheter"
                                                defaultValue="Je veux acheter"
                                            />
                                            <label className="form-check-label" htmlFor="acheter">
                                                Je veux acheter
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="acheter_louer"
                                                id="louer"
                                                defaultValue="Je veux louer"
                                            />
                                            <label className="form-check-label" htmlFor="louer">
                                                Je veux louer
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-3">
                                            <textarea
                                                className="form-control"
                                                rows={5}
                                                placeholder="Message"
                                                name="message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="float-right">
                                        <input
                                            type="hidden"
                                            name="recaptcha_token"
                                            id="recaptchaToken"
                                        />
                                        <button type="submit" className="btn btn_envoyer">
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 relative">
                            <div className="info">
                                <p>
                                    <i className="bi bi-geo-alt-fill" />
                                    35/36 bureau n°9 2ème étage, Gueliz 40 000 - Marrakech, Maroc
                                </p>
                                <p>
                                    <i className="bi bi-telephone-fill" />
                                    Tél : 06 61 82 53 59 <br />
                                    Fix : 05 24 44 93 36
                                </p>
                                <p>
                                    <i className="bi bi-envelope-fill" />
                                    contact@promoimmomarrakech.com
                                </p>
                                <p>
                                    <i className="bi bi-clock-history" />
                                    Ouvert 7j/7
                                    <br />
                                    du 8h30 à 18h30
                                </p>
                                <p>
                                    <a
                                        href="https://www.facebook.com/marrakesh.realestate/?_rdc=1&_rdr"
                                        target="_blank"
                                    >
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/marrakech_immobilier/"
                                        target="_blank"
                                    >
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a
                                        href="https://ma.linkedin.com/in/promo-immo-marrakech-87b2a582"
                                        target="_blank"
                                    >
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}
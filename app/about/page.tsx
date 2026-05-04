export default function Page() {
    return (
        <main>
            <section
                className="section-slide-page"
                style={{ backgroundImage: "url(asset/img/back-page.jpg)" }}
            >
                <div className="overlay" />
                <div className="content">
                    <div className="container">
                        <h1>Nous connaitre ?</h1>
                        <h2>Vous êtes le bienvenue</h2>
                    </div>
                </div>
            </section>
            <section className="section_breadcrumbs">
                <div className="container">
                    <ul>
                        <li>
                            <a href="/">
                                <span >Accueil</span>
                            </a>
                        </li>
                        <li className="active">
                            <span>Qui sommes nous ?</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section_quisomme">
                <div className="container">
                    <p>
                        <strong>Promo Immo Marrakech</strong> riche d’une Expérience d’une
                        dizaine d’années, dans le domaine de L’<strong>immobilier</strong> sur
                        Marrakech et sa Région...
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text1">
                                <strong>Promo Immo</strong> enrichie sans cesse son offre pour
                                répondre à vos attentes et vous propose des Prestations clefs en
                                Main.
                            </p>
                            <p className="text2">
                                Une équipe de professionnels expérimentés est à votre disposition
                                pour vous proposer un service haut de gamme et sur-mesure pour
                                répondre aux attentes de ses clients à la recherche de propriétés de
                                prestige sur Marrakech et ses régions … et pour vous aider à
                                réaliser votre prochaine acquisition, dans le cadre d’une recherche
                                en résidence secondaire, principale ou dans le cadre d’un
                                investissement locatif.
                            </p>
                            <p className="text2">
                                Une équipe à votre service, compétente et réactive; une intégrité et
                                une rigueur imposées par son gérant El Idrissi Jaouad ayant une
                                connaissance parfaite du contexte, acquise durant plus de10 ans de
                                relations commerciales, principalement à Marrakech grâce à un
                                excellent tissu relationnel.
                            </p>
                            <p className="text2">
                                Des engagements sélectionnés et systématiquement honorés.
                            </p>
                            <p className="text2">
                                Compromis de vente et signature chez notaire, pour votre plus grande
                                tranquillité, aucun encaissement au bénéfice de Promo Immo Marrakech
                                dans le cadre d'une acquisition, Promo Immo Marrakech est rémunérée
                                à la signature chez le notaire.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="asset/img/jamaa-lfna.jpg"
                                loading="lazy"
                                alt="Agence immobiliere Marrakech"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_quisomme2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="asset/img/photo-femme.jpg"
                                loading="lazy"
                                alt="Service client"
                            />
                        </div>
                        <div className="col-md-6">
                            <p>
                                Promo Immo Marrakech s'engage pour la plus grande satisfaction de
                                ses clients
                            </p>
                            <ul>
                                <li>Sélectionner ses produits</li>
                                <li>Contrôler au mieux les actes</li>
                                <li>
                                    Fournir une information précise par écrit et dans un bref délais
                                </li>
                                <li>Etre à votre écoute afin de bien cibler votre recherche</li>
                                <li>
                                    Ne proposer que des produits correspondant à votre recherche
                                </li>
                                <li>Rendre les visites fonctionnelles et efficaces</li>
                                <li>Vous éviter toute perte de temps lors de vos courts séjours</li>
                                <li>
                                    Accompagnement et suivi personnalisé de votre projet immobilier.
                                </li>
                                <li>
                                    Accompagnement active et précise de votre futur achat ou location.
                                </li>
                            </ul>
                            <p>
                                Promo Immo Marrakech est une agence immobilière à Marrakech qui vous
                                offre un service total:
                            </p>
                            <p>
                                Vous accueille du lundi au Samedi et propose de vous accompagner
                                dans vos projets :
                            </p>
                            <ul>
                                <li>Location Saisonnière.</li>
                                <li>Location longue durée.</li>
                                <li>Investissement personnel ou locatif</li>
                                <li>
                                    Achat – Vente de biens immobiliers au Maroc dont terrains, raids,
                                    maisons, appartements, villas, demeures de prestige, commerces,
                                    bureaux
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_quisomme3">
                <h2>Nos valeurs</h2>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="icone">
                                <img
                                    src="asset/img/expert-icone.png"
                                    loading="lazy"
                                    alt="Simplicité"
                                />
                            </div>
                            <h3>Simplicité</h3>
                            <div className="flechebas" />
                            <p>
                                Une expérience fluide dès les premiers instants de la recherche
                                immobilière, basée sur la pertinence des offres et la bonne mise en
                                relation entre utilisateurs et annonceurs.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="icone">
                                <img
                                    src="asset/img/invest-icone.png"
                                    loading="lazy"
                                    alt="Investissement immobiliere"
                                />
                            </div>
                            <h3>Sérénité</h3>
                            <div className="flechebas" />
                            <p>
                                Une expérience fluide dès les premiers instants de la recherche
                                immobilière, basée sur la pertinence des offres et la bonne mise en
                                relation entre utilisateurs et annonceurs.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="icone">
                                <img
                                    src="asset/img/estime-icone.png"
                                    loading="lazy"
                                    alt="Exigence"
                                />
                            </div>
                            <h3>Exigence</h3>
                            <div className="flechebas" />
                            <p>
                                Une expérience fluide dès les premiers instants de la recherche
                                immobilière, basée sur la pertinence des offres et la bonne mise en
                                relation entre utilisateurs et annonceurs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_partenaire">
                <h2>Nos Partenaires</h2>
                <hr />
                <div className="container-fluid">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img
                                            src="asset/img/partenaire-4.jpg"
                                            loading="lazy"
                                            alt="Project up"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <img
                                            src="asset/img/partenaire-1.jpg"
                                            loading="lazy"
                                            alt="River Palm"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <img
                                            src="asset/img/partenaire-2.jpg"
                                            loading="lazy"
                                            alt="Prestigia"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <img
                                            src="asset/img/partenaire-3.jpg"
                                            loading="lazy"
                                            alt="Habil Conseils"
                                        />{" "}
                                    </div>
                                    <div className="col-md-3">
                                        <img
                                            src="asset/img/partenaire-5.jpg"
                                            loading="lazy"
                                            alt="Mubaweb"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-slide-contact">
                <div className="overlay" />
                <div className="back" />
                <div className="content">
                    <div className="container">
                        <h2>
                            Vous avez un <strong>projet immobilier ?</strong>
                        </h2>
                        <h3>Nous vous accompagnons dans votre projet</h3>
                        <button type="button" className="btn btn-contact">
                            Contactez-nous{" "}
                        </button>
                    </div>
                </div>
            </section>
        </main>

    );
}

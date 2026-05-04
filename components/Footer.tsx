export default function Footer() {
    return (
        <>
            <footer>
                <div className="container newsletter">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="titre-news">Newsletter</h2>
                            <p className="parg-news">
                                Soyez informer sur nos nouveautés et nos actualités à jour
                            </p>
                        </div>
                        <div className="col-md-6">
                            <input
                                type="email"
                                className="form-control input-news"
                                id="email_news"
                                placeholder="Votre email ici"
                            />
                            <button type="button" className="btn btn-news">
                                Envoyer
                            </button>
                            <div className="result_news">
                                Vous êtes désormais inscrit à notre newsletter !
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container menu-footer">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="menu1">
                                <li>
                                    <a href="">
                                        Investir dans le neuf
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        estimer la valeur de mon bien
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Trouver un expert local
                                    </a>
                                </li>
                                <li>
                                    <a href="/liste">Vente</a>
                                </li>
                                <li>
                                    <a href="/liste">Location</a>
                                </li>
                                <li>
                                    <a href="/liste">Programme neuf</a>
                                </li>
                                <li>
                                    <a href="/liste">Prestiqge</a>
                                </li>
                                <li>
                                    <a href="/contact">Contactez-nous</a>
                                </li>
                                <li>
                                    <a href="/about">
                                        Notre agence immobilière
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="menu2">
                                <li>
                                    <a href="/liste">Louer un appartement</a>
                                </li>
                                <li>
                                    <a href="/liste">Louer une villa</a>
                                </li>
                                <li>
                                    <a href="/liste">Louer un bureau</a>
                                </li>
                                <li>
                                    <a href="/liste">Location commerce à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Louer un riad à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Location immeuble à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Location palais à Marrakech</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="menu2">
                                <li>
                                    <a href="/liste">Acheter villa à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Acheter maison à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Acheter appartement à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Acheter terrain à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Acheter commerce à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Acheter riad à Marrakech</a>
                                </li>
                                <li>
                                    <a href="/liste">Acheter magasin à Marrakech</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 reseau-sociaux">
                            <a
                                href="https://web.facebook.com/Promo.Immo.Marrakech.Maroc"
                                target="_blank"
                            >
                                <i className="bi bi-facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/promoimmomarrakech/"
                                target="_blank"
                            >
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="https://twitter.com/PromoImmobilier" target="_blank">
                                <i className="bi bi-twitter" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/promo-immo-marrakech-87b2a582/"
                                target="_blank"
                            >
                                <i className="bi bi-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <a
                href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                className="float-icon-whatsapp"
                target="_blank"
            >
                <i className="bi bi-whatsapp my-float-icon-whatsapp " />
            </a>
            <div className="contact-cta">
                <a href="tel:00212661825359">
                    <i className="bi bi-telephone-fill" />
                    <span>
                        Contactez-nous :<br />
                        <strong>+212-661-825-359</strong>
                    </span>
                </a>
                <a href="mailto:contact@promoimmomarrakech.com">
                    <i className="bi bi-envelope-fill" />
                    <span>
                        Contactez-nous :<br />
                        <strong>contact@promoimmomarrakech.com</strong>
                    </span>
                </a>
                <a href="estimation-immobiliere.html" data-mount="RedirectToEstimator">
                    <i className="bi bi-house-fill" />
                    <span>Estimez votre bien</span>
                </a>
            </div>
            <div id="CookieBanner" className="cookie-banner js-cookie-banner">
                <p>
                    {" "}
                    Promo Immo Marrakech utilise des 🍪cookies pour assurer le bon
                    fonctionnement de notre site. Ils nous permettent de vous proposer la
                    meilleure expérience de visite possible, de vous fournir des services et
                    des contenus adaptés à vos centres d'intérêt et de réaliser des
                    statistiques de visites. Vous pouvez gérer les cookies par catégorie, mais
                    vous pouvez également accepter ou refuser l'ensemble des cookies. Vous
                    pouvez changer d'avis à tout moment en cliquant sur le bouton « Préférence
                    cookie » en bas de notre site. Pour plus d'informations sur nos pratiques,
                    vous pouvez consulter notre <a href="">Politique de confidentialité</a>.
                </p>
                <button className="cookie-btn">Tout accepter!</button>
            </div>
        </>
    );
}
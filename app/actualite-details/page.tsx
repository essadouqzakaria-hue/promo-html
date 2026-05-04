export default function Page() {
    return (
        <main>
            <section className="section_breadcrumbs">
                <div className="container">
                    <ul>
                        <li>
                            <a itemProp="item" href="/">
                                <span itemProp="name">Accueil</span>{" "}
                            </a>
                        </li>
                        <li>
                            <a itemProp="item" href="/actualite">
                                <span>Actualités</span>
                            </a>
                        </li>
                        <li className="active" >
                            <span itemProp="name">
                                Avant-contrat et contrat de vente dans le secteur immobilier :
                                Éléments clés à connaître
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section-actua">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="article_details">
                                <header>
                                    <h1>
                                        Avant-contrat et contrat de vente dans le secteur immobilier :
                                        Éléments clés à connaître
                                    </h1>
                                </header>
                                <img
                                    src="asset/img/actualite/actualite-1.jpg"
                                    loading="lazy"
                                    alt=""
                                    title=""
                                />
                                <p>
                                    Le vendeur peut vous demander de signer un document préliminaire,
                                    appelé avant-contrat, avant de finaliser la vente chez le notaire.
                                    Ce document peut prendre la forme d'un compromis de vente ou d'une
                                    promesse de vente.
                                </p>
                                <p>
                                    Une promesse de vente est un compromis de vente, c'est-à-dire un
                                    engagement ferme. Il constitue un contrat formel par lequel
                                    l'acheteur et le vendeur s'engagent définitivement à acheter et à{" "}
                                    <a
                                        href="https://www.promoimmomarrakech.com/vente-immobiliere-marrakech.html"
                                        title="Immobiliere à vendre à Marrakech
"
                                        target="_blank"
                                    >
                                        vendre un bien immobilier
                                    </a>
                                    &nbsp;à un prix fixé par les deux parties. Le compromis de vente
                                    déclenche l'acte de vente, après quoi les deux parties disposent
                                    d'environ 3 mois pour préparer la signature du contrat de vente.
                                    Cependant, le vendeur et l'acheteur peuvent se réserver le droit
                                    de revenir sur leur engagement, en précisant les sommes dues à
                                    l'autre partie du fait de la rupture de leur engagement.
                                </p>
                                <p>
                                    La promesse de vente, comme son nom l'indique, engage le vendeur à
                                    vendre son bien à un acheteur et à personne d'autre pendant une
                                    durée fixée dans l'avant-contrat.&nbsp; En échange, le futur
                                    acquéreur est tenu de verser au vendeur une somme d'argent
                                    généralement égale à 10 % du prix d'achat du bien. Il s'agit d'une
                                    indemnité d'immobilisation qui sera versée si l'acheteur renonce
                                    dans ce délai.
                                </p>
                                <p>
                                    <b>
                                        Informations à transmettre à l'agent qui achètera un bien
                                        immobilier
                                    </b>
                                </p>
                                <p>
                                    L'avant-contrat, élément essentiel de toute transaction
                                    immobilière, établit la base juridique et financière de la future
                                    vente. Ce document détaillé doit comporter les coordonnées
                                    complètes du vendeur et de l'acheteur, ainsi que l'origine et
                                    l'adresse précise du bien concerné. Une description détaillée est
                                    également requise, y compris la superficie, les équipements et les
                                    annexes. Les aspects financiers tels que le montant des
                                    honoraires, le prix de vente et les modalités de paiement, y
                                    compris le recours éventuel à un prêt hypothécaire, doivent être
                                    clairement précisés. En outre, la promesse de vente doit indiquer
                                    sa durée de validité et la date limite de signature de l'acte
                                    définitif. Enfin, les conditions suspensives et la date limite de
                                    livraison du bien complètent ce cadre contractuel essentiel pour
                                    toutes les parties concernées.
                                </p>
                                <div className="partager">
                                    Partager :
                                    <a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.promoimmomarrakech.com//actualite/avant-contrat-et-contrat-de-vente-dans-le-secteur-immobilier-elements-cles-a-connaitre"
                                        target="_blank"
                                    >
                                        <i className="bi bi-facebook" />{" "}
                                    </a>
                                    <a
                                        href="https://api.whatsapp.com/send?text=https://www.promoimmomarrakech.com//actualite/avant-contrat-et-contrat-de-vente-dans-le-secteur-immobilier-elements-cles-a-connaitre"
                                        target="_blank"
                                    >
                                        <i className="bi bi-whatsapp" />
                                    </a>
                                    <a
                                        href="http://www.twitter.com/intent/tweet?url=https://www.promoimmomarrakech.com//actualite/avant-contrat-et-contrat-de-vente-dans-le-secteur-immobilier-elements-cles-a-connaitre"
                                        target="_blank"
                                    >
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <span className="print">
                                        Imprimer cet article :{" "}
                                        <a
                                            href="/actualite-print/avant-contrat-et-contrat-de-vente-dans-le-secteur-immobilier-elements-cles-a-connaitre"
                                            target="_blank"
                                        >
                                            <i className="bi bi-printer-fill" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="sticky_side">
                                <div className="recherche_bien_page">
                                    <h2>Recherche rapide</h2>
                                    <form method="post" action="/liste">
                                        <select
                                            className="form-select"
                                            name="typetransaction_bien"
                                            aria-label="Default select example"
                                            defaultValue="0"
                                        >
                                            <option value={0}>
                                                Type de transaction
                                            </option>
                                            <option value={1}>Vente </option>
                                            <option value={2}>Location </option>
                                            <option value={3}>Location séjour </option>
                                            <option value={4}>Programme neuf </option>
                                            <option value={5}>Prestige </option>
                                            <option value={6}>Location gérance </option>
                                        </select>
                                        <select
                                            className="form-select"
                                            name="type_bien"
                                            aria-label="Default select example"
                                            defaultValue="0"
                                        >
                                            <option value={0}>
                                                Type de bien
                                            </option>
                                            <option value={11}>Villa</option>
                                            <option value={1}>Appartement</option>
                                            <option value={5}>Magasin</option>
                                            <option value={3}>Terrain</option>
                                            <option value={7}>Bureau</option>
                                            <option value={9}>Riad</option>
                                            <option value={2}>Maison</option>
                                            <option value={4}>Commerce</option>
                                            <option value={6}>Immeuble</option>
                                            <option value={12}>Palais</option>
                                        </select>
                                        <select
                                            className="form-select"
                                            name="quartier"
                                            aria-label="Default select example"
                                            defaultValue="0"
                                        >
                                            <option value={0}>
                                                Quartier
                                            </option>
                                            <option value={1}>Guéliz</option>
                                            <option value={2}>Hivernage</option>
                                            <option value={3}>Palmeraie</option>
                                            <option value={4}>Medina</option>
                                            <option value={5}>Route de l'ourika</option>
                                            <option value={7}>Route Amezmiz</option>
                                            <option value={8}>Massira 1</option>
                                            <option value={9}>Mabrouka</option>
                                            <option value={10}>Majorelle</option>
                                            <option value={11}>Smlalia</option>
                                            <option value={12}>Massira 2</option>
                                            <option value={13}>Massira 3</option>
                                            <option value={14}>Rouidat</option>
                                            <option value={15}>Mhamid</option>
                                            <option value={16}>Daoudiat</option>
                                            <option value={17}>Sidi Ghanem</option>
                                            <option value={18}>Saada</option>
                                            <option value={19}>Prestigia</option>
                                            <option value={20}>Route Casablanca</option>
                                            <option value={24}>Allal El Fassi</option>
                                            <option value={25}>Targa</option>
                                            <option value={27}>Route De Fes</option>
                                            <option value={28}>Agdal</option>
                                            <option value={29}>Route de Ouarzazate</option>
                                            <option value={30}>Route De Safi</option>
                                            <option value={31}>Centre Ville</option>
                                            <option value={32}>Sokouma</option>
                                            <option value={33}>Azli</option>
                                            <option value={34}>Camp El Ghoul</option>
                                            <option value={35}>Victor Hugo</option>
                                            <option value={36}>Av Allal El Fassi</option>
                                            <option value={37}>Les Portes de Marrakech</option>
                                            <option value={38}>Bab Ighli</option>
                                            <option value={39}>Dwar Aasker</option>
                                            <option value={40}>Izdihar</option>
                                            <option value={42}>Av El Azhar</option>
                                            <option value={43}>Av Moulay Abdallah</option>
                                            <option value={44}>Route Sidi Abdellah Ghiat</option>
                                            <option value={45}>Sidi Abbad</option>
                                            <option value={46}>Hay Hassani</option>
                                            <option value={47}>Ain Itty</option>
                                            <option value={50}>Riad Salam</option>
                                            <option value={51}>Tamnsourt</option>
                                            <option value={52}>Amelkis</option>
                                            <option value={53}>Assif</option>
                                            <option value={56}>Bab Atlas</option>
                                            <option value={57}>Laksour</option>
                                            <option value={58}>Azzouzia</option>
                                            <option value={59}>Route Tahanaout</option>
                                            <option value={61}>Av Abdelkrim El Khatabi</option>
                                            <option value={63}>Route de Souihla</option>
                                            <option value={64}>Al Massar</option>
                                            <option value={65}>Chrifia</option>
                                            <option value={66}>Bab doukala</option>
                                            <option value={67}>Asni</option>
                                            <option value={68}>Bab Lkhmis</option>
                                            <option value={69}>Ain Mezouar</option>
                                            <option value={70}>Al Badiaa</option>
                                            <option value={71}>Tahanaout</option>
                                            <option value={72}>Ennakhil</option>
                                            <option value={73}>Inara</option>
                                            <option value={74}>Iziki</option>
                                            <option value={75}>Route Agadir</option>
                                            <option value={76}>Saada</option>
                                            <option value={77}>Najd </option>
                                            <option value={78}>Issil </option>
                                            <option value={79}>Mhamid 9</option>
                                            <option value={80}>Doha </option>
                                            <option value={81}>Al fadl </option>
                                            <option value={82}>Route Tamaslouht</option>
                                            <option value={83}>Kasbah</option>
                                            <option value={84}>Barima </option>
                                            <option value={85}>Kanaria </option>
                                            <option value={86}>Route Ait ourir </option>
                                            <option value={87}>Abwab Marrakech </option>
                                            <option value={88}>Hay Charaf</option>
                                            <option value={89}>Bab aylan </option>
                                            <option value={90}>kennaria</option>
                                            <option value={91}>derb dabachi</option>
                                            <option value={92}>Al masar</option>
                                            <option value={93}>al maadane </option>
                                            <option value={94}>golf argane </option>
                                            <option value={95}>royale palm</option>
                                            <option value={96}>Arset Sbai </option>
                                            <option value={97}>moulay al hassan</option>
                                            <option value={98}>Arset el hota</option>
                                            <option value={99}>derb sidi masaoud</option>
                                            <option value={100}>Moulay Abdellah </option>
                                            <option value={101}>Zaouiya Abbasiya </option>
                                            <option value={102}>Berrima</option>
                                            <option value={103}>riad zitoun jdid </option>
                                            <option value={104}>riad zitoun lakdim</option>
                                            <option value={105}>riad zitoun </option>
                                            <option value={106}>Mellah</option>
                                            <option value={107}>derb el kadi </option>
                                            <option value={108}>Assouel</option>
                                            <option value={109}>Mouassine</option>
                                            <option value={110}>Amerchich</option>
                                            <option value={111}>Sidi mimoun</option>
                                            <option value={112}>kariya siyahiya </option>
                                            <option value={114}>Bd al mokawama </option>
                                        </select>
                                        <select
                                            className="form-select"
                                            name="standing"
                                            aria-label="Default select example"
                                            defaultValue="0"
                                        >
                                            <option value={0}>
                                                Genre
                                            </option>
                                            <option value={1}>Grand ensemble</option>
                                            <option value={2}>Grand luxe</option>
                                            <option value={3}>Luxe</option>
                                            <option value={4}>Normal</option>
                                            <option value={5}>Standing</option>
                                            <option value={6}>Contemporain</option>
                                            <option value={7}>Maison d'hôtes</option>
                                            <option value={8}>Prestige</option>
                                            <option value={9}>Golfique</option>
                                        </select>
                                        <button type="submit" className="btn btn-search">
                                            Chercher <i className="bi bi-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="section_banner_page">
                                    <h2>
                                        <strong>Vendez</strong> ou Achetez
                                    </h2>
                                    <p>
                                        c’est facile avec
                                        <br />
                                        Promo Immo Marrakech
                                    </p>
                                    <img src="asset/img/deposer-bien-banner.jpg" loading="lazy" />
                                    <button type="button" className="btn btn-deposer">
                                        Deposer un bien
                                    </button>
                                </div>
                                <h2 className="titre_h2">Coup de coeurs :</h2>
                                <div className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-6.jpg"
                                        loading="lazy"
                                        alt="Superbe appartement à la location Meublé DE 3 PIECES "
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                Superbe appartement à la location Meublé DE 3 PIECES{" "}
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                                <div className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-7.jpg"
                                        loading="lazy"
                                        alt="superbe appartement meublée de 130m² en location au préstigia"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                superbe appartement meublée de 130m² en location au
                                                préstigia
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                                <div className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-8.jpg"
                                        loading="lazy"
                                        alt="APPARTEMENT MEUBLE  DE 2 PIECES A GUELIZ"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                APPARTEMENT MEUBLE DE 2 PIECES A GUELIZ
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                                <div className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-9.jpg"
                                        loading="lazy"
                                        alt="Villa d’Exception à Louer – Agdal Marrakech"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                Villa d’Exception à Louer – Agdal Marrakech
                                            </a>
                                        </h2>
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
export default function Page() {
    return (
        <main>
            <section className="slide-page">
                <div className="overlay" />
                <div className="content">
                    <div className="container">
                        <div className="recherche_tab">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="vente-slide">
                                    <button
                                        className="nav-link active"
                                        id="pills-vente-slide-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-vente-slide"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-vente-slide"
                                        aria-selected="true"
                                    >
                                        Vente
                                    </button>
                                </li>
                                <li className="nav-item" role="location-slide">
                                    <button
                                        className="nav-link"
                                        id="pills-location-slide-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-location-slide"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-location-slide"
                                        aria-selected="false"
                                    >
                                        Location
                                    </button>
                                </li>
                                <li className="nav-item" role="programme-neuf-slide">
                                    <button
                                        className="nav-link"
                                        id="pills-programme-neuf-slide-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-programme-neuf-slide"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-programme-neuf-slide"
                                        aria-selected="false"
                                    >
                                        Neuf
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                {/* Tab Vente Slide */}
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-vente-slide"
                                    role="tabpanel"
                                    aria-labelledby="pills-vente-slide-tab"
                                >
                                    <form method="post" className="row" action="/liste">
                                        <div className="col-md-2">
                                            <select className="form-select" name="type_bien">
                                                <option value={0}>Type bien</option>
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
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" name="quartier">
                                                <option value={0}>Secteur</option>
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
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" name="prix">
                                                <option >
                                                    Prix
                                                </option>
                                                <option value="prixvente1">250.000 à 500.000 dhs</option>
                                                <option value="prixvente2">500.000 à 1.000.000 dhs</option>
                                                <option value="prixvente3">
                                                    1.000.000 à 2.000.000 dhs
                                                </option>
                                                <option value="prixvente4">
                                                    2.000.000 à 3.000.000 dhs
                                                </option>
                                                <option value="prixvente5">
                                                    3.000.000 à 5.000.000 dhs
                                                </option>
                                                <option value="prixvente6">
                                                    5.000.000 à 10.000.000 dhs
                                                </option>
                                                <option value="prixvente7">
                                                    10.000.000 à 20.000.000 dhs
                                                </option>
                                                <option value="prixvente8">
                                                    20.000.000 à 30.000.000 dhs
                                                </option>
                                                <option value="prixvente9">
                                                    30.000.000 à 50.000.000 dhs
                                                </option>
                                                <option value="prixvente10">
                                                    50.000.000 à 100.000.000 dhs
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-md-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="reference"
                                                defaultValue=""
                                                placeholder="Réference produit"
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <button type="submit" className="btn btn-find">
                                                Chercher <i className="bi bi-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/* Tab Location Slide */}
                                <div
                                    className="tab-pane fade"
                                    id="pills-location-slide"
                                    role="tabpanel"
                                    aria-labelledby="pills-location-slide-tab"
                                >
                                    <form method="post" className="row" action="/liste">
                                        <div className="col-md-2">
                                            <select className="form-select" name="type_bien">
                                                <option value={0}>Type bien</option>
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
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" name="quartier">
                                                <option value={0}>Secteur</option>
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
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" name="prix" defaultValue="prixvente1">
                                                <option>
                                                    Prix
                                                </option>
                                                <option value="prixloc1">0 à 5.000 dhs</option>
                                                <option value="prixloc2">5.000 à 10.000 dhs</option>
                                                <option value="prixloc3">10.000 à 20.000 dhs</option>
                                                <option value="prixloc4">20.000 à 30.000 dhs</option>
                                            </select>
                                        </div>
                                        <div className="col-md-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="reference"
                                                placeholder="Réference produit"
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <button type="submit" className="btn btn-find">
                                                Chercher <i className="bi bi-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/* Tab Programme neuf Slide */}
                                <div
                                    className="tab-pane fade"
                                    id="pills-programme-neuf-slide"
                                    role="tabpanel"
                                    aria-labelledby="pills-programme-neuf-slide-tab"
                                >
                                    <form method="post" className="row" action="/liste">
                                        <div className=" col-md-2">
                                            <select className="form-select" name="type_bien" defaultValue="0">
                                                <option value={0}>Type bien</option>
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
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" name="quartier" defaultValue="0">
                                                <option value={0}>Secteur</option>
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
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" name="prix" defaultValue="prixvente1">
                                                <option>
                                                    Prix
                                                </option>
                                                <option value="prixvente1">250.000 à 500.000 dhs</option>
                                                <option value="prixvente2">500.000 à 1.000.000 dhs</option>
                                                <option value="prixvente3">
                                                    1.000.000 à 2.000.000 dhs
                                                </option>
                                                <option value="prixvente4">
                                                    2.000.000 à 3.000.000 dhs
                                                </option>
                                                <option value="prixvente5">
                                                    3.000.000 à 5.000.000 dhs
                                                </option>
                                                <option value="prixvente6">
                                                    5.000.000 à 10.000.000 dhs
                                                </option>
                                                <option value="prixvente7">
                                                    10.000.000 à 20.000.000 dhs
                                                </option>
                                                <option value="prixvente8">
                                                    20.000.000 à 30.000.000 dhs
                                                </option>
                                                <option value="prixvente9">
                                                    30.000.000 à 50.000.000 dhs
                                                </option>
                                                <option value="prixvente10">
                                                    50.000.000 à 100.000.000 dhs
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-md-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="reference"
                                                placeholder="Réference produit"
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <button type="submit" className="btn btn-find">
                                                Chercher <i className="bi bi-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_breadcrumbs">
                <div className="container">
                    <ul>
                        <li>
                            <a href="https://www.promoimmomarrakech.com/">
                                <span>Accueil</span>
                            </a>
                        </li>
                        <li className="active">
                            <span itemProp="name">
                                Appartement moderne de 64 m² avec balcon au cœur de Gueliz
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section_listing">
                <div className="container">
                    <h1>Appartement moderne de 64 m² avec balcon au cœur de Gueliz </h1>
                    <ul
                        className="nav nav-pills tab-produit-details mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className="nav-link active"
                                id="pills-description-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-description"
                                type="button"
                                role="tab"
                                aria-controls="pills-description"
                                aria-selected="true"
                            >
                                <i className="bi bi-file-earmark-richtext" /> Description
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                id="pills-galerie-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-galerie"
                                type="button"
                                role="tab"
                                aria-controls="pills-galerie"
                                aria-selected="false"
                            >
                                <i className="bi bi-camera" /> Galerie photos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                id="pills-carte-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-carte"
                                type="button"
                                role="tab"
                                aria-controls="pills-carte"
                                aria-selected="false"
                            >
                                <i className="bi bi-pin-map" /> Carte
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                id="pills-proposition-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-proposition"
                                type="button"
                                role="tab"
                                aria-controls="pills-proposition"
                                aria-selected="false"
                            >
                                <i className="bi bi-currency-exchange" /> Je veux faire une
                                proposition d'acchat
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                id="pills-visite-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-visite"
                                type="button"
                                role="tab"
                                aria-controls="pills-visite"
                                aria-selected="false"
                            >
                                <i className="bi bi-eye" /> Je veux le visiter
                            </button>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-9">
                            <article className="produit_details">
                                <header>
                                    <h2>Réference de produit : AVV-41-1</h2>
                                    <span>1200000 dhs </span>
                                    <h3>Guéliz</h3>
                                </header>
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-description"
                                        role="tabpanel"
                                        aria-labelledby="pills-description-tab"
                                    >
                                        <div
                                            id="carouselExampleIndicators"
                                            className="carousel slide"
                                            data-bs-ride="carousel"
                                        >
                                            <div className="carousel-indicators">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={0}
                                                    className="active"
                                                    aria-current="true"
                                                    aria-label="Slide 0"
                                                />
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={1}
                                                    className=""
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                />
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={2}
                                                    className=""
                                                    aria-current="true"
                                                    aria-label="Slide 2"
                                                />
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={3}
                                                    className=""
                                                    aria-current="true"
                                                    aria-label="Slide 3"
                                                />
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={4}
                                                    className=""
                                                    aria-current="true"
                                                    aria-label="Slide 4"
                                                />
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={5}
                                                    className=""
                                                    aria-current="true"
                                                    aria-label="Slide 5"
                                                />
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img
                                                        src="asset/img/produit/produit-5.jpg"
                                                        className="d-block w-100"
                                                        alt=""
                                                        title=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img
                                                        src="asset/img/produit/produit-6.jpg"
                                                        className="d-block w-100"
                                                        alt=""
                                                        title=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img
                                                        src="asset/img/produit/produit-7.jpg"
                                                        className="d-block w-100"
                                                        alt=""
                                                        title=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img
                                                        src="asset/img/produit/produit-8.jpg"
                                                        className="d-block w-100"
                                                        alt=""
                                                        title=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img
                                                        src="asset/img/produit/produit-9.jpg"
                                                        className="d-block w-100"
                                                        alt=""
                                                        title=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img
                                                        src="asset/img/produit/produit-10.jpg"
                                                        className="d-block w-100"
                                                        alt=""
                                                        title=""
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="prev"
                                            >
                                                <span
                                                    className="carousel-control-prev-icon"
                                                    aria-hidden="true"
                                                />
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="next"
                                            >
                                                <span
                                                    className="carousel-control-next-icon"
                                                    aria-hidden="true"
                                                />
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <h2>Vente Appartement à Marrakech Guéliz </h2>
                                        <ul className="list-info">
                                            <li className="localise">
                                                <strong>Localisation </strong>: Guéliz{" "}
                                            </li>
                                            <li className="surface">
                                                <strong>Surface </strong> : 64 m²{" "}
                                            </li>
                                            <li className="chambre">
                                                <strong>Nombre de chambre </strong>: 2{" "}
                                            </li>
                                            <li className="terrain">
                                                <strong>Terrain </strong>: m²{" "}
                                            </li>
                                        </ul>
                                        <p>
                                            Situé au cœur du très recherché quartier de Gueliz à
                                            Marrakech, cet appartement à vendre constitue une opportunité
                                            rare sur le marché immobilier. Niché au 1er étage d’une
                                            résidence récente et bien entretenue, il offre un cadre de vie
                                            confortable et moderne, idéal aussi bien pour une résidence
                                            principale que pour un investissement locatif à fort
                                            potentiel.D’une superficie de 64 m², ce bien est
                                            intelligemment agencé pour maximiser chaque espace. Il se
                                            compose de deux chambres spacieuses et élégantes, dotées de
                                            placards intégrés pour un rangement optimal. Vous y trouverez
                                            également une salle de bains contemporaine, alliant
                                            fonctionnalité et confort. Le salon, lumineux et accueillant,
                                            constitue un véritable espace de vie convivial, tandis que la
                                            cuisine semi-finie offre la possibilité de l’aménager selon
                                            vos goûts. Deux balcons vient compléter l’ensemble, apportant
                                            une touche supplémentaire d’aération et de luminosité.Grâce à
                                            son emplacement stratégique en plein centre de Guéliz, à
                                            proximité immédiate des commerces, des centres touristiques et
                                            de toutes les commodités, cet appartement répond parfaitement
                                            aux exigences d’un mode de vie urbain dynamique. Une belle
                                            opportunité à saisir sans tarder. Contactez-nous dès
                                            aujourd’hui pour organiser une visite et découvrir tout le
                                            potentiel de ce bien.
                                        </p>
                                        <h2>Prestations</h2>
                                        <ul className="list-info">
                                            <li className="ellipse">Double vitrage</li>
                                            <li className="ellipse">Internet</li>
                                            <li className="ellipse">Éclairage extérieur</li>
                                            <li className="ellipse">Balcon</li>
                                            <li className="ellipse">Ascenseur</li>
                                            <li className="ellipse">Porte blindée</li>
                                            <li className="ellipse">Vidéophone</li>
                                        </ul>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="partager">
                                                    Partager :
                                                    <a
                                                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.promoimmomarrakech.com/promoimmo/produit/avv-41-1/appartement-vente-marrakech-gueliz.html"
                                                        target="_blank"
                                                    >
                                                        <i className="bi bi-facebook" />{" "}
                                                    </a>
                                                    <a
                                                        href="https://api.whatsapp.com/send?text=https://www.promoimmomarrakech.com/promoimmo/produit/avv-41-1/appartement-vente-marrakech-gueliz.html"
                                                        target="_blank"
                                                    >
                                                        <i className="bi bi-whatsapp" />
                                                    </a>
                                                    <a
                                                        href="http://www.twitter.com/intent/tweet?url=https://www.promoimmomarrakech.com/promoimmo/produit/avv-41-1/appartement-vente-marrakech-gueliz.html"
                                                        target="_blank"
                                                    >
                                                        <i className="bi bi-twitter" />
                                                    </a>
                                                    <span className="print">
                                                        Imprimer cette annonce :{" "}
                                                        <a
                                                            href="/print/avv-41-1/appartement-vente-marrakech-gueliz.html"
                                                            target="_blank"
                                                        >
                                                            <i className="bi bi-printer-fill" />
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <a href="/contact" className="btn btn-contact2">
                                                    Contactez-nous{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-galerie"
                                        role="tabpanel"
                                        aria-labelledby="pills-galerie-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="overlay">
                                                    <a
                                                        href="asset/img/produit/produit-5.jpg"
                                                        data-lightbox="phot"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                                <img
                                                    src="asset/img/produit/produit-5.jpg"
                                                    alt=""
                                                    title=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="overlay">
                                                    <a
                                                        href="asset/img/produit/produit-6.jpg"
                                                        data-lightbox="phot"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                                <img
                                                    src="asset/img/produit/produit-6.jpg"
                                                    alt=""
                                                    title=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="overlay">
                                                    <a
                                                        href="asset/img/produit/produit-7.jpg"
                                                        data-lightbox="phot"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                                <img
                                                    src="asset/img/produit/produit-7.jpg"
                                                    alt=""
                                                    title=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="overlay">
                                                    <a
                                                        href="asset/img/produit/produit-8.jpg"
                                                        data-lightbox="phot"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                                <img
                                                    src="asset/img/produit/produit-8.jpg"
                                                    alt=""
                                                    title=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="overlay">
                                                    <a
                                                        href="asset/img/produit/produit-9.jpg"
                                                        data-lightbox="phot"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                                <img
                                                    src="asset/img/produit/produit-9.jpg"
                                                    alt=""
                                                    title=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="overlay">
                                                    <a
                                                        href="asset/img/produit/produit-10.jpg"
                                                        data-lightbox="phot"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                                <img
                                                    src="asset/img/produit/produit-10.jpg"
                                                    alt=""
                                                    title=""
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-carte"
                                        role="tabpanel"
                                        aria-labelledby="pills-carte-tab"
                                    >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76892.91752170083!2d-8.005450488542113!3d31.600459407539283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeef0ae36935f%3A0x7284e149693c38de!2sL'Hivernage%2C%20Marrakech!5e0!3m2!1sfr!2sma!4v1638742308078!5m2!1sfr!2sma"
                                            width={600}
                                            height={450}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-proposition"
                                        role="tabpanel"
                                        aria-labelledby="pills-proposition-tab"
                                    >
                                        <form action="" method="post">
                                            <input
                                                type="hidden"
                                                defaultValue="AVV-41-1"
                                                name="reference_produit"
                                                id="reference_produit"
                                            />
                                            <input
                                                type="hidden"
                                                name="recaptcha_token_proposer"
                                                id="recaptchaTokenProposer"
                                            />
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="nom"
                                                        id="proposition_nom"
                                                        placeholder="Nom"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="prenom"
                                                        id="proposition_prenom"
                                                        placeholder="Prénom"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="email"
                                                        id="proposition_email"
                                                        placeholder="Email"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="tel"
                                                        id="proposition_tel"
                                                        placeholder="Téléphone"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="adresse"
                                                        id="proposition_adresse"
                                                        placeholder="Adresse"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="ville"
                                                        id="proposition_ville"
                                                        placeholder="Ville"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">
                                                        DITES-NOUS EN PLUS SUR VOTRE PROJET :
                                                    </label>
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="type_projet"
                                                        id="proposition_type_projet"
                                                        placeholder="Type de projet"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="prix_finance"
                                                        id="proposition_prix_finance"
                                                        placeholder="Prix de financement"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <button
                                                        type="button"
                                                        className="btn btn-envoi"
                                                        id="btn_send_proposition"
                                                    >
                                                        Envoyer ma proposition
                                                    </button>
                                                </div>
                                                <div
                                                    id="result_proposition"
                                                    style={{ display: "none", marginTop: 20 }}
                                                >
                                                    <div className="alert alert-success" role="alert">
                                                        Votre demande a été envoyé
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-visite"
                                        role="tabpanel"
                                        aria-labelledby="pills-visite-tab"
                                    >
                                        <form action="" method="post">
                                            <input
                                                type="hidden"
                                                name="recaptcha_token_rdv"
                                                id="recaptchaTokenRdv"
                                            />
                                            <div className="form-group row">
                                                <label
                                                    htmlFor="staticEmail"
                                                    className="col-sm-2 col-form-label"
                                                >
                                                    Date et heure
                                                </label>
                                                <div className="col-sm-10" style={{ position: "relative" }}>
                                                    <i className="bi bi-calendar-week" />
                                                    <input
                                                        type="text"
                                                        className="form-control default"
                                                        name="date_heure"
                                                        id="date_heure"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="motif_rendezvous"
                                                        id="motif_rendezvous"
                                                        placeholder="Motif de rendez-vous"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="email_rendezvous"
                                                        id="email_rendezvous"
                                                        placeholder="Email"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="tel_rendezvous"
                                                        id="tel_rendezvous"
                                                        placeholder="Téléphone"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <button
                                                        type="button"
                                                        className="btn btn-envoi"
                                                        id="btn_rendezvous"
                                                    >
                                                        Envoyer
                                                    </button>
                                                </div>
                                                <div
                                                    id="result_rendezvous"
                                                    style={{ display: "none", marginTop: 20 }}
                                                >
                                                    <div className="alert alert-success" role="alert">
                                                        Votre demande a été envoyé
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <div className="sticky_side">
                                <h2 className="titre_h2 mb-3">Produits similaires :</h2>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-5.jpg"
                                        alt=""
                                        title=""
                                        loading="lazy"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Appartement moderne en vente </a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-6.jpg"
                                        alt=""
                                        title=""
                                        loading="lazy"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Superbe appartement en vente vide </a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-7.jpg"
                                        alt=""
                                        title=""
                                        loading="lazy"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">magnifique appartement pour la vente</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-8.jpg"
                                        alt=""
                                        title=""
                                        loading="lazy"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">
                                                Appartement 3 pièces à vendre au cœur de Gueliz
                                            </a>
                                        </h2>
                                    </div>
                                </article>
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
                                    <a href="/deposer-bien" className="btn btn-deposer">
                                        Deposer un bien
                                    </a>
                                </div>
                                <div className="section_banner_page">
                                    <h2>
                                        Voulez-vous <br />
                                        <strong>le visiter ?</strong>
                                    </h2>
                                    <p>Parlons ensemble de votre projet</p>
                                    <img className="img-logo" src="asset/img/logo-bien.jpg" />
                                    <a href="" className="link1">
                                        Localisez-nous &gt;
                                    </a>
                                    <a href="" className="link1">
                                        Applelez-nous &gt;
                                    </a>
                                    <a href="/contact" className="btn btn-deposer">
                                        Contactez-nous
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_bien_link">
                <h2>Immobiliers vente par secteur</h2>
                <hr />
                <div className="container">
                    <div className="bien_tab">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="vente-appartement">
                                <button
                                    className="nav-link active"
                                    id="pills-appartement-vente-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-appartement-vente"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-appartement-vente"
                                    aria-selected="true"
                                >
                                    Appartement
                                </button>
                            </li>
                            <li className="nav-item" role="vente-villa">
                                <button
                                    className="nav-link"
                                    id="pills-villa-vente-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-villa-vente"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-villa-vente"
                                    aria-selected="false"
                                >
                                    Villa
                                </button>
                            </li>
                            <li className="nav-item" role="vente-commerce">
                                <button
                                    className="nav-link"
                                    id="pills-commerce-vente-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-commerce-vente"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-commerce-vente"
                                    aria-selected="false"
                                >
                                    Commerce
                                </button>
                            </li>
                            <li className="nav-item" role="vente-terrain">
                                <button
                                    className="nav-link"
                                    id="pills-terrain-vente-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-terrain-vente"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-terrain-vente"
                                    aria-selected="false"
                                >
                                    Terrain
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-appartement-vente"
                                role="tabpanel"
                                aria-labelledby="pills-appartement-vente-tab"
                            >
                                <ul>
                                    <li>
                                        <a href="/liste">Vente appartement Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement Hivernage</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement palmeraie</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement Route Casablanca</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement Mabrouka</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement Izdihar</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement Bd Hassan 2</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement Camp El Ghoul</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente appartement Samlalia</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade show"
                                id="pills-villa-vente"
                                role="tabpanel"
                                aria-labelledby="pills-villa-vente-tab"
                            >
                                <ul>
                                    <li>
                                        <a href="/liste">Vente villa Targa</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa Route Ourika</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa La Palmeraie</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa Route Fés</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa Route Ouarzazate</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa Route Amezmiz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa Bab Atlas</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa Amelkis</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente villa Agdal</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade show"
                                id="pills-commerce-vente"
                                role="tabpanel"
                                aria-labelledby="pills-commerce-vente-tab"
                            >
                                <ul>
                                    <li>
                                        <a href="/liste">Vente commerce Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente bureau Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente magasin Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente commerce Hivernage</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente bureau Majorel</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente magasin Hivernage</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente magasin Alla El Fassi</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente magasin Sidi Ghanem</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente magasin Samlalia</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade show"
                                id="pills-terrain-vente"
                                role="tabpanel"
                                aria-labelledby="pills-terrain-vente-tab"
                            >
                                <ul>
                                    <li>
                                        <a href="/liste">Vente terrain Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Palmeraie</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Route Casablanca</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Hivernage</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Route Amezmiz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Route de l'ourika</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Targa</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Route Ouarzazate</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Vente terrain Route Tahanaout</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_bien_link">
                <h2>Immobiliers location par secteur</h2>
                <hr />
                <div className="container">
                    <div className="bien_tab">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="location-appartement">
                                <button
                                    className="nav-link active"
                                    id="pills-appartement-location-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-appartement-location"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-appartement-location"
                                    aria-selected="true"
                                >
                                    Appartement
                                </button>
                            </li>
                            <li className="nav-item" role="location-villa">
                                <button
                                    className="nav-link"
                                    id="pills-villa-location-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-villa-location"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-villa-location"
                                    aria-selected="false"
                                >
                                    Villa
                                </button>
                            </li>
                            <li className="nav-item" role="location-commerce">
                                <button
                                    className="nav-link"
                                    id="pills-commerce-location-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-commerce-location"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-commerce-location"
                                    aria-selected="false"
                                >
                                    Commerce
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-appartement-location"
                                role="tabpanel"
                                aria-labelledby="pills-appartement-location-tab"
                            >
                                <ul>
                                    <li>
                                        <a href="/liste">Location appartement Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Hivernage</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Victor Hugo</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Route Casablanca</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Prestigia</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Bd Hassan II</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Majorelle</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Palmeraie</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location appartement Smlalia</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade show"
                                id="pills-villa-location"
                                role="tabpanel"
                                aria-labelledby="pills-villa-location-tab"
                            >
                                <ul>
                                    <li>
                                        <a href="/liste">Location villa Targa</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Palmeraie</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Route Ourika</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Route Fés</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Route Amezmiz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Route Casablanca</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Bab Ighli</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Route Ouarzazate</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location villa Agdal</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane fade show"
                                id="pills-commerce-location"
                                role="tabpanel"
                                aria-labelledby="pills-maison-location-tab"
                            >
                                <ul>
                                    <li>
                                        <a href="/liste">Location commerce Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location magasin Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location magasin Sidi Ghanem</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location magasin Allal El Fassi</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location bureau Guéliz</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location bureau Sidi Ghanem</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location bureau Bd Hassan II</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location bureau Majorelle</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                    <li>
                                        <a href="/liste">Location bureau Bab doukala</a>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </li>
                                </ul>
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

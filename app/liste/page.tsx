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
                <div className="container-fluid">
                    <ul>
                        <li>
                            <a href="https://www.promoimmomarrakech.com/">
                                <span>Accueil</span>
                            </a>
                        </li>
                        <li className="active"
                        >
                            <span>Vente </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section_listing">
                <div className="container-fluid">
                    <h1>immobiliere à vendre à Marrakech</h1>
                    <div className="row">
                        <div className="col-md-2">
                            <h2 className="titre_h2">Recherche</h2>
                            <div className="filtre_bien">
                                <form method="post" className="row" action="/liste">
                                    <label className="label">Prix</label>
                                    <select className="form-select" name="prix_filtre" defaultValue="prixvente1">
                                        <option >
                                            Prix
                                        </option>
                                        <option value="prixvente1">250k-500K dhs</option>
                                        <option value="prixvente2">500K-1M dhs</option>
                                        <option value="prixvente3">1M-2M dhs</option>
                                        <option value="prixvente4">2M-3M dhs</option>
                                        <option value="prixvente5">3M-5M dhs</option>
                                        <option value="prixvente6">5M-10M dhs</option>
                                        <option value="prixvente7">10M-20M dhs</option>
                                        <option value="prixvente8">20M-30M dhs</option>
                                        <option value="prixvente9">30M-50M dhs</option>
                                        <option value="prixvente10">50M-100M dhs</option>
                                    </select>
                                    <label className="label">Chambre</label>
                                    <select className="form-select" name="chambre_filtre" defaultValue="1">
                                        <option>
                                            Chambre
                                        </option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                    </select>
                                    <label className="label">Type de bien</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_11"
                                            defaultValue={11}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Villa
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_1"
                                            defaultValue={1}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Appartement
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_5"
                                            defaultValue={5}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Magasin
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_3"
                                            defaultValue={3}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Terrain
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_7"
                                            defaultValue={7}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Bureau
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_9"
                                            defaultValue={9}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Riad
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_2"
                                            defaultValue={2}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Maison
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_4"
                                            defaultValue={4}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Commerce
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_6"
                                            defaultValue={6}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Immeuble
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="type_bien_filtre_12"
                                            defaultValue={12}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Palais
                                        </label>
                                    </div>
                                    <label className="label">Quartier</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="quartier_filtre_1"
                                            defaultValue={1}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Guéliz
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="quartier_filtre_2"
                                            defaultValue={2}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Hivernage
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="quartier_filtre_3"
                                            defaultValue={3}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Palmeraie
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="quartier_filtre_20"
                                            defaultValue={20}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Route Casablanca
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="quartier_filtre_25"
                                            defaultValue={25}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor={25}>
                                            Targa
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="quartier_filtre_5"
                                            defaultValue={5}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Route Ourika
                                        </label>
                                    </div>
                                    <label className="label">Standing</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_1"
                                            defaultValue={1}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Grand ensemble
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_2"
                                            defaultValue={2}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Grand luxe
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_3"
                                            defaultValue={3}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Luxe
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_4"
                                            defaultValue={4}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_5"
                                            defaultValue={5}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Standing
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_6"
                                            defaultValue={6}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Contemporain
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_7"
                                            defaultValue={7}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Maison d'hôtes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_8"
                                            defaultValue={8}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Prestige
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="standing_filtre_9"
                                            defaultValue={9}
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Golfique
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-search">
                                        Recherche <i className="bi bi-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="sticky_side">
                                <div className="filtre_bien">
                                    <h3 className="titre_h3">Vente</h3>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Villa
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Appartement
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Magasin
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Terrain
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Bureau
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Riad
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Maison
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Commerce
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Immeuble
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Palais
                                        </a>
                                    </div>
                                    <hr />
                                    <h3 className="titre_h3">Location</h3>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Villa
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Appartement
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Magasin
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Terrain
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Bureau
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Riad
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Maison
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Commerce
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Immeuble
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <i className="bi bi-arrow-right-short" />
                                        <a href="/liste" className="form-check-label">
                                            Palais
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div id="post-data">
                                <div className="row">
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-7.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            VILLA NEUF POUR LA VENTE VIDE{" "}
                                                        </a>
                                                    </h2>
                                                    {/*<p>L’Agence Promo Immo Marrakech vous
propose cette superbe villa en vente, située en route de Tahanout, s'étend sur 3 Niveaux.La villa se compose d’un sou sol qui contient &nbsp;une chambre spacieuse, &nbsp;avec salle de bain et dressing, 4 salles de
bains, une grande terrasse et une suite parentale. Le rez-de-chaussée dispose de deux &nbsp;</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Route Tahanaout
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : 430 m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 5
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            6500000 dhs <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-6.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            Appartement meublé à vendre –AZOUZIA
                                                        </a>
                                                    </h2>
                                                    {/*<p>Situé à Azouzia, dans un
environnement résidentiel calme et recherché, cet appartement représente une
excellente opportunité, que ce soit pour une résidence principale ou un
investissement locatif.Bénéficiant d’un emplacement
stratégique, il est à proximité immédiate de toutes les commodités (commerces,
transports, écoles…),</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Azzouzia
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 2
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            500000 dhs <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-5.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            Magnifique appartement detrois piece à vendre{" "}
                                                        </a>
                                                    </h2>
                                                    {/*<p>Dans
une résidence calme et sécurisé à Abowab Marrakech, proche de toutes commodités
(super marché, écoles, établissement public, mosquée….).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbs</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Abwab Marrakech{" "}
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : 74 m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 2
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            580000 dhs <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-4.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            Appartement moderne de 52 m² avec balcon au cœur de
                                                            Gueliz
                                                        </a>
                                                    </h2>
                                                    {/*<p>Situé au cœur du très recherché quartier de Gueliz
à Marrakech, cet appartement à vendre
constitue une opportunité rare sur le marché immobilier. Niché au 1er étage
d’une résidence récente et bien entretenue, il offre un cadre de vie
confortable et moderne, idéal aussi bien pour une résidence principale que pour
un investisseme</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Guéliz
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : 52 m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 2
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            970 000 dhs <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-8.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            Appartement moderne de 64 m² avec balcon au cœur de
                                                            Gueliz
                                                        </a>
                                                    </h2>
                                                    {/*<p>Situé au cœur du très recherché quartier de Gueliz
à Marrakech, cet appartement à vendre
constitue une opportunité rare sur le marché immobilier. Niché au 1er étage
d’une résidence récente et bien entretenue, il offre un cadre de vie
confortable et moderne, idéal aussi bien pour une résidence principale que pour
un investisseme</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Guéliz
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : 64 m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 2
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            1200000 dhs <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-9.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            Appartement moderne de 77 m² avec balcon au cœur de
                                                            Gueliz
                                                        </a>
                                                    </h2>
                                                    {/*<p>Situé au cœur du très recherché quartier de Gueliz
à Marrakech, cet appartement à vendre
constitue une opportunité rare sur le marché immobilier. Niché au 1er étage
d’une résidence récente et bien entretenue, il offre un cadre de vie
confortable et moderne, idéal aussi bien pour une résidence principale que pour
un investisseme</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Guéliz
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : 77 m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 2
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            1 460 000 € <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-11.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            Appartement 3 pièces à vendre 65 m² lumineux avec
                                                            balcon
                                                        </a>
                                                    </h2>
                                                    {/*<p>Promo Immo Marrakech vous propose à
la vente ce bel appartement de 3 pièces, idéalement situé sur l’Avenue Moulay
Abdellah, dans un quartier stratégique et très recherché de Marrakech, à
proximité immédiate du centre-ville, des commerces, des écoles et des
principales zones touristiques.D’une superficie de 65 m², ce bien
se tro</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Av Moulay Abdallah
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : 65 m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 2
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            1050000 dhs <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-6">
                                        <article className="produit_liste">
                                            <a href="/details">
                                                <img
                                                    src="asset/img/produit/produit-10.jpg"
                                                    loading="lazy"
                                                    alt=""
                                                    title=""
                                                />
                                            </a>
                                            <div className="content">
                                                <header>
                                                    <h2>
                                                        <a href="/details">
                                                            Superbe Appartement Meublé Lumineux à vendre 3 Pièces
                                                        </a>
                                                    </h2>
                                                    {/*<p>Appartement meublé de 62 m² proposé pour
la vente, idéalement situé avec ascenseur. Ce bien climatisé se compose d'un
salon moderne et lumineux doté d'un espace salle à manger chaleureux,
idéal pour partager vos repas en toute convivialité. La cuisine est
entièrement équipée avec tout l'électroménager nécessaire pour un quotidie</p>*/}
                                                </header>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <li className="localise">
                                                                <strong>Localisation </strong>: Route Casablanca
                                                            </li>
                                                            <li className="surface">
                                                                <strong>Surface habitable</strong> : 62 m²{" "}
                                                            </li>
                                                            <li className="chambre">
                                                                <strong>Nombre de chambre </strong>: 2
                                                            </li>
                                                            <li className="terrain">
                                                                <strong>Surface terrain </strong>: m²{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="prix">
                                                            1300000 dhs <small />
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="/details" className="btn btn-details">
                                                            Plus de détails{" "}
                                                            <i className="bi bi-arrow-right-short" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex bien-flow">
                                                <div className="flex-grow">
                                                    <a
                                                        href="mailto:contact@promoimmomarrakech.com"
                                                        className="btn btn-light tooltip-button text-primary border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Envoyez un email"
                                                    >
                                                        <i className="bi bi-envelope-fill" /> Email
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="tel:05 24 44 93 36"
                                                        className="btn btn-light tooltip-button text-danger border-end"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="05 24 44 93 36"
                                                    >
                                                        <i className="bi bi-telephone-fill" /> Téléphone
                                                    </a>
                                                </div>
                                                <div className="flex-grow">
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=+212661825359&text=Bonjour%21%20Laissez%20votre%20message."
                                                        className="btn btn-light tooltip-button text-success"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="+212-661-825-359"
                                                    >
                                                        <i className="bi bi-whatsapp" /> Whatsapp
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="charger_plus">
                                <img
                                    src="asset/img/loading.gif"
                                    className="img_loader"
                                    style={{ display: "none" }}
                                    loading="lazy"
                                />
                                <input type="hidden" id="pager" defaultValue={4} />
                                <button type="button" className="btn btn-charger" id="loader">
                                    Charger plus{" "}
                                </button>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="sticky_side">
                                <h2 className="titre_h2 mb-3">Coup de coeurs :</h2>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-11.jpg"
                                        loading="lazy"
                                        alt=""
                                        title=""
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                Vente villa meublé sur la route de fés
                                            </a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-10.jpg"
                                        loading="lazy"
                                        alt=""
                                        title=""
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                Jolie villa à la vente sur la Route d'Ourzazate
                                            </a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-9.jpg"
                                        loading="lazy"
                                        alt=""
                                        title=""
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                Ville luxe meublée à la vente sur la Route d'Ourzazate{" "}
                                            </a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/produit/produit-8.jpg"
                                        loading="lazy"
                                        alt=""
                                        title=""
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/details">
                                                Adorable villa meublée à vendre à la palmeraie{" "}
                                            </a>
                                        </h2>
                                    </div>
                                </article>
                                <h2 className="titre_h2 mt-4 mb-3">Genre :</h2>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/grand-ensemble.jpg"
                                        loading="lazy"
                                        alt="Grand ensemble"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Grand ensemble</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/grand-luxe.jpg"
                                        loading="lazy"
                                        alt="Grand luxe"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Grand luxe</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img src="asset/img/luxe.jpg" loading="lazy" alt="Luxe" />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Luxe</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/normal-immobilier.jpg"
                                        loading="lazy"
                                        alt="Normal"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Normal</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img src="asset/img/standing.jpg" loading="lazy" alt="Standing" />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Standing</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/contemporain.jpg"
                                        loading="lazy"
                                        alt="Contemporain"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Contemporain</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img src="asset/img/prestige.jpg" loading="lazy" alt="Prestige" />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Prestige</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img src="asset/img/golfique.jpg" loading="lazy" alt="Golfique" />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Golfique</a>
                                        </h2>
                                    </div>
                                </article>
                                <h2 className="titre_h2 mt-4 mb-3">Secteur :</h2>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/gueliz.jpg"
                                        loading="lazy"
                                        alt="Vente appartement à Guéliz"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente appartement à Guéliz</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/hivernage.jpg"
                                        loading="lazy"
                                        alt="Vente appartement à Hivernage"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente appartement à Hivernage</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/palmeraie.jpg"
                                        loading="lazy"
                                        alt="Vente appartement à Palmeraie"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente appartement à Palmeraie</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/route-casablanca.jpg"
                                        loading="lazy"
                                        alt="Vente appartement Route Casablanca"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente appartement Route Casablanca</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/targa.jpg"
                                        loading="lazy"
                                        alt="Vente villa à Targa"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente villa à Targa</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/route-ourika.jpg"
                                        loading="lazy"
                                        alt="Vente villa Route ourika"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente villa Route ourika</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/route-fes.jpg"
                                        loading="lazy"
                                        alt="Vente villa Route Fés"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente villa Route Fés</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/route-ouarzazate.jpg"
                                        loading="lazy"
                                        alt="Vente villa Route Ouarzazate"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente villa Route Ouarzazate</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/amelkis.jpg"
                                        loading="lazy"
                                        alt="Vente villa à Amelkis"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente villa à Amelkis</a>
                                        </h2>
                                    </div>
                                </article>
                                <article className="produit_aimer">
                                    <img
                                        src="asset/img/gueliz.jpg"
                                        loading="lazy"
                                        alt="Vente commerce à Guéliz"
                                    />
                                    <div className="content">
                                        <h2>
                                            <a href="/liste">Vente commerce à Guéliz</a>
                                        </h2>
                                    </div>
                                </article>
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
                        <a href="/contact" type="button" className="btn btn-contact">
                            Contactez-nous{" "}
                        </a>
                    </div>
                </div>
            </section>
        </main>

    );
}

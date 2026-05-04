export default function Page() {
  return (
    <>
      {/* Main page */}
      <main>
        <section className="section-slide">
          <div className="overlay" />
          <div className="content">
            <div className="container">
              <h1>Agence immobilière Marrakech</h1>
              <h2>
                Rien n’est plus important
                <br />
                que <strong>le bien de votre rêve</strong>
              </h2>
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
                    <form method="post" className="row" action="">
                      <div className="col-md-2">
                        <select className="form-select" name="type_bien" defaultValue="villa">
                          <option>
                            Type bien
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
                      </div>
                      <div className="col-md-3">
                        <select className="form-select" name="quartier" defaultValue="Guéliz">
                          <option>
                            Secteur
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
                      </div>
                      <div className="col-md-3">
                        <select className="form-select" name="prix" defaultValue="prixvente1">
                          <option>
                            Prix en dirham
                          </option>
                          <option value="prixvente1">250.000 à 500.000</option>
                          <option value="prixvente2">500.000 à 1.000.000</option>
                          <option value="prixvente3">1.000.000 à 2.000.000</option>
                          <option value="prixvente4">2.000.000 à 3.000.000</option>
                          <option value="prixvente5">3.000.000 à 5.000.000</option>
                          <option value="prixvente6">5.000.000 à 10.000.000</option>
                          <option value="prixvente7">
                            10.000.000 à 20.000.000
                          </option>
                          <option value="prixvente8">
                            20.000.000 à 30.000.000
                          </option>
                          <option value="prixvente9">
                            30.000.000 à 50.000.000
                          </option>
                          <option value="prixvente10">
                            50.000.000 à 100.000.000
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
                  {/* Tab Location Slide */}
                  <div
                    className="tab-pane fade"
                    id="pills-location-slide"
                    role="tabpanel"
                    aria-labelledby="pills-location-slide-tab"
                  >
                    <form method="post" className="row" action="">
                      <div className="col-md-2">
                        <select className="form-select" name="type_bien" defaultValue="11">
                          <option>
                            Type bien
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
                      </div>
                      <div className="col-md-3">
                        <select className="form-select" name="quartier" defaultValue="1">
                          <option>
                            Secteur
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
                      </div>
                      <div className="col-md-3">
                        <select className="form-select" name="prix" defaultValue="prixloc1">
                          <option>
                            Prix en dirham
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
                    <form method="post" className="row" action="">
                      <div className=" col-md-2">
                        <select className="form-select" name="type_bien" defaultValue="11">
                          <option>
                            Type bien
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
                      </div>
                      <div className="col-md-3">
                        <select className="form-select" name="quartier" defaultValue="1">
                          <option>
                            Secteur
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
                      </div>
                      <div className="col-md-3">
                        <select className="form-select" name="prix" defaultValue="prixvente1">
                          <option>
                            Prix en dirham
                          </option>
                          <option value="prixvente1">250.000 à 500.000 dhs</option>
                          <option value="prixvente2">
                            500.000 à 1.000.000 dhs
                          </option>
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
        </section >
        {/* Service immobilier */}
        < section className="section-service" >
          <h2>Notre Savoir Faire &amp; Expertise</h2>
          <hr />
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-card">
                  <div className="card-body">
                    <h3 className="estime-icone">
                      <a href="">
                        Proprietaires, liberez vous la vie{" "}
                      </a>
                    </h3>
                    <p>
                      <strong>Percevez vos loyers, on s’occupe du reste</strong>...{" "}
                      <strong>Gestion locative à Marrakech</strong> - Administration
                      de biens et gestion immobilière.Découvrez tous les avantages
                      de notre gestion locative !{" "}
                    </p>
                    <a
                      href=""
                      className="lien-service"
                    >
                      <i className="bi bi-plus-lg icone-plus" />{" "}
                      <span>Un bien à louer ?</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-card">
                  <div className="card-body">
                    <h3 className="invest-icone">
                      <a href="">
                        L'investissement à Marrakech
                      </a>
                    </h3>
                    <p>
                      <b>Promo immo</b> mis à la disposition des clients ce site va
                      vous guider dans votre recherche d'
                      <strong>investisement au Maroc</strong> en vous donnant les
                      clés qui doivent vous permettre de réussir...
                    </p>
                    <a
                      href=""
                      className="lien-service"
                    >
                      <i className="bi bi-plus-lg icone-plus" />{" "}
                      <span>Prêt à devenir investisseur immobilier? </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-card">
                  <div className="card-body">
                    <h3 className="expert-icone">
                      <a href="">
                        Une estimation immobiliere
                      </a>
                    </h3>
                    <p>
                      Une équipe de professionnels expérimentés est à votre
                      disposition pour vous proposer un service haut de gamme et
                      sur-mesure pour répondre aux attentes de ses clients{" "}
                    </p>
                    <a href="" className="lien-service">
                      <i className="bi bi-plus-lg icone-plus" />{" "}
                      <span>Estimez la valeur de votre bien immobilier?</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
        <section className="section-bien-home">
          <h2>
            Vente et Location
            <br />
            de Biens Immobiliers à Marrakech
          </h2>
          <hr size={3} />
          <div className="row">
            <div className="col-md-4">
              <div className="img-bien">
                <img
                  src="asset/img/produit/produit-1.jpg"
                  loading="lazy"
                  alt=""
                  title=""
                />
              </div>
              <div className="overflow">
                <div className="d-flex flex-column item">
                  <div className="p-1">
                    <h3>
                      <a href="/details">
                        Vente Villa à Marrakech <br /> Marrakech Route De Fes{" "}
                      </a>
                    </h3>
                  </div>
                  <div className="p-1 info">
                    <p>
                      400 m² &nbsp;&nbsp; 6 chambres
                      <span className="price">8500000 dhs</span>
                    </p>
                  </div>
                  <div className="p-1 dsp">
                    <p>
                      Surface terrain: 2000m²; surface habitable:400m²; 8pieces; 6
                      chambres; 2salons; 5SDB, une cuisine et piscine chaufé...
                    </p>
                  </div>
                  <div className="p-1 link1">
                    <a href="/details">
                      <i className="bi bi-plus-lg icone-plus" />
                      <span>Découvrir</span>
                    </a>
                  </div>
                </div>
              </div>
              <a href="/details" className="more">
                <i className="bi bi-three-dots" />
              </a>
            </div>
            <div className="col-md-4">
              <div className="img-bien">
                <img
                  src="asset/img/produit/produit-2.jpg"
                  loading="lazy"
                  alt=""
                  title=""
                />
              </div>
              <div className="overflow">
                <div className="d-flex flex-column item">
                  <div className="p-1">
                    <h3>
                      <a href="/details">
                        Vente Villa à Marrakech <br /> Marrakech Route de Ouarzazate{" "}
                      </a>
                    </h3>
                  </div>
                  <div className="p-1 info">
                    <p>
                      300 m² &nbsp;&nbsp; 3 chambres
                      <span className="price">10000000 dhs</span>
                    </p>
                  </div>
                  <div className="p-1 dsp">
                    <p>
                      Villa-Riad en route de ourzazate orienté vers la chaîne de
                      montagne de l'atlas Le Riad est entouré d'une pelouse de
                      2600m² , 3 chambres 1 salon , 3 salles de bain , hamam et une
                      terrasse ...
                    </p>
                  </div>
                  <div className="p-1 link1">
                    <a href="/details">
                      <i className="bi bi-plus-lg icone-plus" />
                      <span>Découvrir</span>
                    </a>
                  </div>
                </div>
              </div>
              <a href="/details" className="more">
                <i className="bi bi-three-dots" />
              </a>
            </div>
            <div className="col-md-4">
              <div className="img-bien">
                <img
                  src="asset/img/produit/produit-3.jpg"
                  loading="lazy"
                  alt=""
                  title=""
                />
              </div>
              <div className="overflow">
                <div className="d-flex flex-column item">
                  <div className="p-1">
                    <h3>
                      <a href="/details">
                        Vente Villa à Marrakech <br /> Marrakech Route de Ouarzazate{" "}
                      </a>
                    </h3>
                  </div>
                  <div className="p-1 info">
                    <p>
                      1000 m² &nbsp;&nbsp; 6 chambres
                      <span className="price">25000000 dhs</span>
                    </p>
                  </div>
                  <div className="p-1 dsp">
                    <p>
                      villa a vendre dans la route de warzazate 8 km de Marrakech
                      très chic et moderne de 10 pièces 6 chambres 4 salons 8 salle
                      de bain et une grand piscine entourer par une jardin bien
                      harmoniser ...
                    </p>
                  </div>
                  <div className="p-1 link1">
                    <a href="/details">
                      <i className="bi bi-plus-lg icone-plus" />
                      <span>Découvrir</span>
                    </a>
                  </div>
                </div>
              </div>
              <a href="/details" className="more">
                <i className="bi bi-three-dots" />
              </a>
            </div>
          </div>
        </section>
        <section className="section_trouve">
          <div className="container">
            <div className="content">
              <h3>
                Riad à la Vente <br />à Marrakech
              </h3>
              <hr />
              <p>
                PromoimmoMarrakech vous présente les plus beaux Ryad de la Ville
                Rouge et des alentours. Offrent
                <a href="/liste" title="Riads à vendre  Marrakech">
                  riads et maisons d'hôtes à vendre au cœur de la Médina de
                  Marrakech
                </a>
                . Parmi les logements disponibles à Marrakech, on retrouve les
                riads. Ce sont des habitations traditionnelles aménagées pour
                accueillir les visiteurs venus d’horizons divers. Une des choses les
                plus frappantes au niveau de ces habitations est la décoration en
                effet, on retrouve au niveau des riads, un confort occidental mêlé à
                une ambiance orientale.
              </p>
              <p>
                De plus, l’ambiance est agrémentée par le parfum des fleurs,
                l’assemblage de belles plantes, des lumières bien placées et une
                fontaine. Les meubles utilisés sont en même temps des objets de
                décoration et des supports sur lesquels vous pouvez vous asseoir
                confortablement. Pour ce qui est des chambres, elles disposent de
                tout le confort qu’on retrouve habituellement dans les grands
                hôtels.
              </p>
              <a href="/liste">
                <i className="bi bi-plus-lg icone-plus" />
                <span>Découvrir</span>
              </a>
            </div>
          </div>
        </section>
        <section className="section_info_home">
          <div className="container">
            <img
              src="asset/img/villas-vendre-marrakech.jpg"
              alt="Villas à vendre à Marrakech"
              title="Vente de villas de luxe Marrakech, Maroc"
            />
            <div className="content">
              <h3>
                Nouvelles Villas
                <br />à la Vente à Marrakech
              </h3>
              <hr />
              <p>
                <a href="/liste" title="Vente et achat villa Marrakech">
                  {" "}
                  Acheter votre villa
                </a>{" "}
                avec Promo Immo Marrakech votre spécialité en Achat immobilier.{" "}
              </p>
              <p>
                Promo Immo Marrakech{" "}
                <a
                  href=""
                  title="Agence immobiliere de luxe marrakech"
                >
                  Agence immobilière
                </a>{" "}
                spécialisée dans l'achat, la vente et la location des propriétés de
                luxe, villas privative ou résidentiels (jumelle ou mitoyenne)
                résidentiel ou sur golf et aussi ses régions.Magnifique ont
                également des maisons de luxe pour acquérir. Promo Immo Marrakech
                est un luxe immobilier spécialisé dans les propriétés de luxe et de
                prestige.
              </p>
              <p>
                Acheter désigne votre villa de rêvé avec des emplacements uniques,
                dans des domaines de prestige villas de luxe à louer et à vendre à
                l'air Prestige. Dites-nous vos préférences et nous trouverons le
                meilleur des villas golfique ou Prestige de luxe Marrakech.
              </p>
              <a href="/liste">
                <i className="bi bi-plus-lg icone-plus" />
                <span>Découvrir</span>
              </a>
            </div>
          </div>
        </section>
        <section className="section_annonce_recent">
          <h2>
            Annonces immobilières de professionnels
            <br />
            en immobilier à Marrakech
          </h2>
          <hr />
          <div className="container-fluid">
            <div className="annonce_tab">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="row carousel-item active">
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-4.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Vente Appartement à Marrakech <br />
                                Marrakech Azzouzia
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              80 m² &nbsp;&nbsp; 2 chambres
                              <span className="price">500000 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              Au cœur du prestigieux Four Seasons Marrakech, ce
                              somptueux penthouse incarne l’art de vivre le plus
                              exclusif.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-5.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Vente Appartement à Marrakech <br />
                                Marrakech Abwab Marrakech{" "}
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              74 m² &nbsp;&nbsp; 2 chambres
                              <span className="price">580000 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              À vendre dans la Palmeraie de Marrakech, au sein d’une
                              résidence privée avec piscine, beau duplex de 211 m²
                              idéalement situé en face du golf.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-6.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Vente Appartement à Marrakech <br />
                                Marrakech Guéliz
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              52 m² &nbsp;&nbsp; 2 chambres
                              <span className="price">970 000 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              Idéalement situé au cœur du très prisé quartier de
                              l’Hivernage à Marrakech, cet appartement de standing
                              développe une superficie habitable de 130 m²
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-7.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Vente Appartement à Marrakech <br />
                                Marrakech Guéliz
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              64 m² &nbsp;&nbsp; 2 chambres
                              <span className="price">1200000 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              Au cœur du très recherché quartier de Guéliz à
                              Marrakech, découvrez ce charmant appartement situé au
                              cinquième et dernier étage d’une résidence sécurisée
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                  </div>
                  <div className="row carousel-item">
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-8.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Location Appartement à Marrakech
                                <br /> Marrakech Route Casablanca
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              62 m² &nbsp;&nbsp; 2 chambres{" "}
                              <span className="price">9300 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              Situé au cœur du très prisé quartier de Hivernage à
                              Marrakech, découvrez ce superbe appartement de 112 m²,
                              niché au 4ᵉ étage d’une résidence prestigieuse
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-9.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Location Appartement à Marrakech
                                <br /> Marrakech Guéliz
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              100 m² &nbsp;&nbsp; 2 chambres{" "}
                              <span className="price">12000 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              Situé dans une résidence fermée et parfaitement
                              sécurisée, bénéficiant d’un environnement calme et
                              verdoyant, cet élégant appartement offre un cadre de
                              vie privilégié.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-10.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Location Appartement à Marrakech
                                <br /> Marrakech Route De Safi
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              84 m² &nbsp;&nbsp; 2 chambres{" "}
                              <span className="price">9000 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              Idéalement situé au cœur du très prisé quartier
                              Majorelle, cet appartement de 104 m² offre un cadre de
                              vie recherché, à proximité immédiate du Jardin
                              Majorelle
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <div className="img-bien">
                        <img
                          src="asset/img/produit/produit-11.jpg"
                          loading="lazy"
                          alt=""
                          title=""
                        />
                      </div>
                      <div className="overflow">
                        <div className="d-flex flex-column item">
                          <div className="p-1">
                            <h3>
                              <a href="/details">
                                Location Villa à Marrakech
                                <br /> Marrakech Route De Fes
                              </a>
                            </h3>
                          </div>
                          <div className="p-1 info">
                            <p>
                              80 m² &nbsp;&nbsp; 0 chambres{" "}
                              <span className="price">65000 dhs</span>
                            </p>
                          </div>
                          <div className="p-1 dsp">
                            <p>
                              Offrez-vous un cadre de vie exceptionnel au cœur du
                              prestigieux quartier de l’Hivernage, l’un des plus
                              prisés de Marrakech.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/details" className="more">
                        <i className="bi bi-three-dots" />
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <i className="bi bi-chevron-compact-left" />
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <i className="bi bi-chevron-compact-right" />
                </button>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_logement">
          <div className="container-fluid ">
            <div className="content">
              <h3>Notre agence immobillières</h3>
              <hr />
              <p>
                Promoimmomarrakech.com : Site d’annonces immobilières de diffusion
                de petites annonces en ligne à marrakech qu'il s'agisse d'un achat
                immobilier, d'une location immobilière ou de la vente d'un bien
                immobilier, notre agence immobilière a une solution pour vous.
                Consultez nos{" "}
                <a
                  href="/liste"
                  title="Annonces de vente et location d'appartement, villa, maison à Marrakech Maroc"
                >
                  annonces immobilières
                </a>{" "}
                en ligne pour l'achat de la maison de vos rêves ou pour l'achat de
                votre appartement.
              </p>
              <p>
                Recherche personnalisée, conseils, disponible 6 jours sur 7, nous
                sommes à votre disposition pour la vente ou l'achat de votre bien
                immobilier. Connue sous le nom de Promo Immo Marrakech »{" "}
              </p>
              <p>
                Consultez gratuitement les petites annonces en ligne chez
                www.promoimmomarrakech.com est bénéficier d’un service
                professionnel.
              </p>
              <a href="/about">
                <i className="bi bi-plus-lg icone-plus" />{" "}
                <span>En savoir plus</span>
              </a>
              <a href="/contact" className="btn">
                Contactez-nous
              </a>
            </div>
          </div>
        </section>
        <section className="section_camarche">
          <h2>Comment ça marche ?</h2>
          <hr />
          <div className="container">
            <div className="col-md-9">
              <div className="service">
                <h2 className="number1">
                  Trouvez le logement correspondant à vos critères
                </h2>
                <p>
                  Lorsque vous recherchez un bien immobilier Marrakech, il est
                  important d'envisager un certain nombre de critères de recherches.
                  Assurez-vous de trouver une agence immobilière qui vous suivra
                  tous au long de votre recherche d’acquisition de votre futur
                  logement et vous annoncez également quelques conseils pour vous
                  aider à trouver le bon logement qui répond à vos critères et
                  partageant le souci de vous trouverait la recherche correspondant
                  à vos critères.
                </p>
              </div>
              <div className="service">
                <h2 className="number2">
                  Créez votre alerte immobilière personnalisé
                </h2>
                <p>
                  Que vous soyez acheteur ou Loueur sur le marché immobilier pour
                  une nouvelle maison ou si vous souhaitez simplement suivre nos
                  transactions immobilières récentes sur Marrakech et sa région,
                  vous pouvez créer votre propre alerte immobilière personnalisée en
                  suivant quelques étapes simples. Tout d'abord, découvrez notre
                  vitrine immobilière qui vous permet de personnaliser votre
                  recherche grâce à notre e-mail. Une fois que vous inscrit, vous
                  pouvez être annoncé sur tous les biens immobiliers récents sur le
                  marché immobilier à Marrakech.
                </p>
              </div>
              <div className="service">
                <h2 className="number3">Déposez vos annonces immobilières</h2>
                <p>
                  La diffusion de vos annonces se fait par l’intermédiaire de notre
                  site internet et par l’envoi à nos clients potentiels.Vous êtes
                  assuré du maintien de votre annonce et de nos prestations durant
                  le temps qui vous convient ! Vos annonces peuvent être agrémentées
                  par une galerie de photos ou d’une vidéo ! Notre site est connu
                  par ses référencements et diverses publicités pour se loger
                </p>
              </div>
              <div className="service">
                <h2 className="number4">Contactez notre agence immobilière</h2>
                <p>
                  Avant de décider d'un agent immobilier, vous devez comprendre les
                  règles et règlements d'achat de biens au Maroc. Le processus
                  d'achat et de vente de biens au Maroc est spéciale Mais moins
                  coûteux au Maroc ou que vous vendiez votre maison actuelle, vous
                  devrez trouver un agent immobilier. Promo Immo et votre agence sur
                  Marrakech et ses régions avec plus de 11 ans de l'expérience si
                  vous prévoyez d'acheter ou louer
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Le logement de votre rêve est ici :</h3>
              <p>
                Appartement de prestige
                <br />
                Splondide appartement
                <br />
                Charmante appartement
                <br />
                Prestigieuse appartement
              </p>
              <a href="/deposer-bien">Déposer une annonce</a>
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
        <section className="section_actualite">
          <h2>Actualités &amp; Conseils</h2>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="actua">
                  <a href="/actualite">
                    <img
                      src="asset/img/actualite-info-immobilier.jpg"
                      loading="lazy"
                      alt="Info immobilier Marrakech 2022"
                      title="Promo Immo : Annonces, Actualités et Conseils immobilières 2022"
                    />
                    <div className="overlay">
                      <h3>
                        Infos de l'immobilier : <br />
                        Actualité et Conseil immobilier à Marrakech et au Maroc
                      </h3>
                      <p>
                        Découvrez tous nos conseils pratiques pour bien préparer
                        votre projet immobilier, que vous souhaitiez acheter, louer,
                        vendre, investir, financer votre acquisition ou déménager.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="actua">
                  <a href="/">
                    <img
                      src="asset/img/actualite-guides-immobilier.jpg"
                      loading="lazy"
                      alt="Guides et Conseils immobilières 2022"
                      title="Guides et conseils immobilières 2022 maroc"
                    />
                    <div className="overlay">
                      <h3>
                        Guides et conseils immoblier: Découvrez tous nos conseils
                        pratiques pour bien préparer votre projet immobilier
                      </h3>
                      <p>
                        Découvrez tous nos conseils pratiques pour bien préparer
                        votre projet immobilier, que vous souhaitiez acheter, louer,
                        vendre, investir, financer votre acquisition ou déménager.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="actua">
                  <a href="/actualite">
                    <img
                      src="asset/img/actualite-immobilier.jpg"
                      loading="lazy"
                      alt="L'actualité immobilière en 2022"
                      title="Actualités immobilier 2022 Marrakech, Maroc"
                    />
                    <div className="overlay">
                      <h3>
                        Actualité immobilier : découvrez les actus immo à Marrakech
                        et au Maroc
                      </h3>
                      <p>
                        Découvrez tous nos conseils pratiques pour bien préparer
                        votre projet immobilier, que vous souhaitiez acheter, louer,
                        vendre, investir, financer votre acquisition ou déménager.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >

    </>

  );
}
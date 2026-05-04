"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [hide, setHide] = useState(false);
    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleLoad = () => {
            setHide(true);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            <div className={`preload ${hide ? "fade-out" : ""}`}></div>
            <header>
                <div className="container">
                    <div className="row header1">
                        <div className="col-md-3">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        src="/asset/img/logo-promo-immo-marrakech.png"
                                        alt="Agence immobilière Marrakech"
                                        width={180}
                                        height={70}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-7 service-header">
                            <div className="d-flex">
                                <div className="flex-fill text-center">
                                    <i className="bi bi-phone-vibrate-fill" />
                                    <p className="service-head">
                                        Contactez-nous
                                        <br />
                                        <strong>
                                            <a href="https://wa.me/212661825359">
                                                +212-661-825-359
                                            </a>
                                        </strong>
                                    </p>
                                </div>

                                <div className="flex-fill text-center">
                                    <i className="bi bi-person-fill" />
                                    <p className="service-head">
                                        Rejoignez-nous
                                        <br />
                                        <strong>Accès client</strong>
                                    </p>
                                </div>

                                <div className="flex-fill text-center">
                                    <i className="bi bi-share-fill" />
                                    <p className="service-head">
                                        Suivez-nous
                                        <br />
                                        <span className="rs">
                                            <a
                                                href="https://web.facebook.com/Promo.Immo.Marrakech.Maroc"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-facebook" />
                                            </a>

                                            <a
                                                href="https://twitter.com/PromoImmobilier"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-twitter" />
                                            </a>

                                            <a
                                                href="https://www.instagram.com/promoimmomarrakech/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-instagram" />
                                            </a>

                                            <a
                                                href="https://www.linkedin.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 relative">
                            <Link
                                href="/deposer-bien"
                                className="btn btn_postuler"
                                title="Déposer une annonce immobiliere"
                            >
                                <b>Déposer</b>
                                <br />
                                une annonce
                            </Link>
                        </div>
                    </div>
                </div>
                <div onMouseLeave={() => setActiveMenuIndex(null)}>
                    {/* Navbar */}
                    <div className="bg-noir text-white">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-dark">
                                <div className="container-fluid d-flex justify-content-end">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarCollapse"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarCollapse">
                                        <ul className="navbar-nav nav-noir me-auto">
                                            <li className="nav-item" >
                                                <Link href="/" className="nav-link active">
                                                    Accueil
                                                </Link>
                                            </li>

                                            <li className="nav-item" onMouseEnter={() => setActiveMenuIndex(0)} >
                                                <Link href="/liste" className="nav-link">
                                                    Vente
                                                </Link>
                                            </li>

                                            <li className="nav-item" onMouseEnter={() => setActiveMenuIndex(1)}>
                                                <Link href="/liste" className="nav-link">
                                                    Location
                                                </Link>
                                            </li>

                                            <li className="nav-item" onMouseEnter={() => setActiveMenuIndex(2)}>
                                                <Link href="/liste" className="nav-link">
                                                    Programme neuf
                                                </Link>
                                            </li>

                                            <li className="nav-item" onMouseEnter={() => setActiveMenuIndex(3)}>
                                                <Link href="/liste" className="nav-link">
                                                    Prestige
                                                </Link>
                                            </li>

                                            <li className="nav-item" onMouseEnter={() => setActiveMenuIndex(4)}>
                                                <Link href="/liste" className="nav-link">
                                                    Séjour
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/actualite" className="nav-link">
                                                    Blog
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" className="nav-link">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="px-3 bg-gris text-white smnenu" style={{ display: activeMenuIndex === 0 ? 'block' : 'none' }}>
                        <div className="container">
                            <ul className="nav nav-gris  ">
                                <li>
                                    <a className="nav-link text-white" href="/liste">Villa</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Appartement</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Magasin</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Terrain</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Bureau</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Riad</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Maison</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Commerce</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Immeuble</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Palais</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="px-3 bg-gris text-white smnenu" style={{ display: activeMenuIndex === 1 ? 'block' : 'none' }}>
                        <div className="container">
                            <ul className="nav nav-gris  ">
                                <li>
                                    <a className="nav-link text-white" href="/liste">Villa</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Appartement</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Magasin</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Bureau</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Riad</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Maison</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Commerce</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Immeuble</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Palais</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-3 bg-gris text-white smnenu" style={{ display: activeMenuIndex === 2 ? 'block' : 'none' }}>
                        <div className="container">
                            <ul className="nav nav-gris  ">
                                <li>
                                    <a className="nav-link text-white" href="/liste">Villa</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Appartement</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Magasin</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Terrain</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Bureau</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Riad</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Maison</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Commerce</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Immeuble</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Palais</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-3 bg-gris text-white smnenu" style={{ display: activeMenuIndex === 3 ? 'block' : 'none' }}>
                        <div className="container">
                            <ul className="nav nav-gris  ">
                                <li>
                                    <a className="nav-link text-white" href="/liste">Villa</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Appartement</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Magasin</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Terrain</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Bureau</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Riad</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Maison</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Commerce</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Immeuble</a>
                                </li>
                                <li>
                                    <a className="nav-link text-white" href="/liste">Palais</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-3 bg-gris text-white smnenu" style={{ display: activeMenuIndex === 4 ? 'block' : 'none' }}>
                        <div className="container">
                            <ul className="nav nav-gris">
                                <li><a className="nav-link text-white" href="/liste">Sejour Marrakech</a>
                                </li>
                                <li><a className="nav-link text-white" href="/liste">Famille</a>
                                </li>
                                <li><a className="nav-link text-white" href="/liste">Adultes</a>
                                </li>
                                <li><a className="nav-link text-white" href="/liste">Voyages de noce</a>
                                </li>
                                <li><a className="nav-link text-white" href="/liste">Dernieres minutes</a>
                                </li>
                                <li><a className="nav-link text-white" href="/liste">Tous compris</a>
                                </li>
                                <li><a className="nav-link text-white" href="/liste">Bien être</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
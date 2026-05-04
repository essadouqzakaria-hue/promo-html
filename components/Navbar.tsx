import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/vente" className="nav-link">Vente</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/location" className="nav-link">Location</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/data/properties';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow card-hover">
                <div className="position-relative">
                    <Image
                        src={property.image}
                        alt={property.title}
                        width={400}
                        height={280}
                        className="card-img-top"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="text-muted small">{property.location}</p>

                    <div className="mt-auto">
                        <p className="fs-5 price mb-1">
                            {property.price.toLocaleString('fr-FR')} DH
                        </p>
                        <p className="small">
                            {property.surface} m² • {property.bedrooms} chambres
                        </p>
                    </div>

                    <Link href={`/details/${property.id}`} className="btn btn-outline-dark mt-3">
                        Voir détails
                    </Link>
                </div>
            </div>
        </div>
    );
}
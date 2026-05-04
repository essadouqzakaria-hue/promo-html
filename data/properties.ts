export type Property = {
    id: number;
    title: string;
    price: number;
    location: string;
    type: string;
    surface: number;
    bedrooms: number;
    image: string;
    category: 'vente' | 'location' | 'neuf';
    description?: string;
};

export const properties: Property[] = [
    {
        id: 1,
        title: "Villa Luxe Route de Fès",
        price: 8500000,
        location: "Route De Fes",
        type: "Villa",
        surface: 400,
        bedrooms: 6,
        image: "/asset/img/produit/produit-1.jpg",
        category: "vente",
        description: "Villa exceptionnelle avec piscine chauffée..."
    },
    // أضف باقي العقارات هنا (من HTML الأصلي)
];
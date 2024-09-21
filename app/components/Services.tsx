import React from "react";

interface Service {
    title: string;
    description: string;
}

const servicesData: Service[] = [
    {
        title: 'Mountain Hiking',
        description: 'Experience breathtaking hikes across the Pyrenees with an experienced guide.',
    },
    {
        title: 'Rock Climbing',
        description: 'For the adventure enthusiasts, we offer thrilling rock climbing expeditions.',
    },
    {
        title: 'Snowshoeing',
        description: 'Discover winter\'s beauty with our snowshoeing tours through the mountains.',
    },
];

const Services: React.FC = () => {
    return (
        <section id="#services" className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

interface Testimonial {
    quote: string;
    author: string;
}

const testimonialsData: Testimonial[] = [
    {
        quote: 'An amazing experience! The guide was knowledgeable and ensured a safe and enjoyable trip.',
        author: 'John D.',
    },
    {
        quote: 'A perfect adventure. The views were incredible, and the guide was fantastic!',
        author: 'Sarah L.',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id={"testimonials"} className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
                <div className="space-y-6">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <p className="text-lg italic">"{testimonial.quote}"</p>
                            <span className="block mt-4 font-semibold">- {testimonial.author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

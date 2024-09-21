const Hero: React.FC = () => {
    return (
        <section className="bg-cover bg-center h-[80vh] flex items-center justify-center" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
            <div className="text-center text-white max-w-lg">
                <h1 className="text-5xl font-bold mb-4">Explore the Pyrenees with a Certified Guide</h1>
                <p className="text-xl mb-6">Join us for unforgettable adventures in the heart of nature.</p>
                <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded transition duration-300">
                    Book Your Adventure
                </a>
            </div>
        </section>
    );
};

export default Hero;

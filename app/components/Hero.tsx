const Hero: React.FC = () => {
    return (
        <section id={"hero"} className="bg-cover bg-center h-[80vh] flex items-center justify-center text-black"
                 style={{ backgroundImage: 'url(/hero_background.webp)'}}>
            <div className="text-center max-w-lg">
                <h1 className="text-5xl font-bold mb-4">El puto amo</h1>
                <p className="text-xl mb-6">Descubre los pirineos con cantinflas</p>
                <a href="/contact" className="bg-slate-800 text-white hover:bg-yellow-600 font-semibold py-3 px-6 rounded transition duration-300">
                    Reserva tu aventura
                </a>
            </div>
        </section>
    );
};

export default Hero;

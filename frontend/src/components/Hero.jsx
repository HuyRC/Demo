function Hero({heading, description, buttonText,children}) {
    return (
        <section className="hero">
            <h2>{heading}</h2>
            <p>{description}</p>
            <button>{buttonText}</button>
            <div className="hero-children">
                {children}
            </div>
        </section>
    );
}
export default Hero;
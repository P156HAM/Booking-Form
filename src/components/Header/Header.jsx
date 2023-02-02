import './Header.css'

function Header() {
    return (
        <section>
            <article className='h1-container'>
                <h1 className='header-text'>ÅKA TÅG</h1>
            </article>
            <article className='header-distination'>
                <h3 className='first-city'>KARLSTAD</h3>
                <span className='header-arrow'>&#8594;</span>
                <h3 className='second-city'>GÖTEBORG</h3>
            </article>
        </section>
    )
}

export default Header
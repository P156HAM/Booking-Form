import './Form.css'

function Form() {

    const bookingsDetail = {
        class: '',
        numberOfTickets: '',
        title: '',
        firstName: '',
        lastName: '',
        acceptedTerms: ''
    }

    function logBookingsDetail() {
        console.log(bookingsDetail);
    }


    return (
        <section className='main'>
            <article className='checkbox-container'>
                <div className='class-container'>
                    <input type="radio" id='2' name="class" value="2" defaultChecked className='checkbox-round'
                    onChange={(event) => {bookingsDetail.class = event.target.value}} />
                    <label htmlFor='2'>2:a klass</label>
                </div>
                <div className='class-container'>
                    <input type="radio" id='1' name='class' value="1" className='checkbox-round'
                    onChange={(event) => {bookingsDetail.class = event.target.value}}/>
                    <label htmlFor='1' >1:a klass</label>
                </div>
            </article>
            <article className='main-container'>
                <div className='tickets-container'>
                    <label htmlFor="tickets">Antal biljetter</label>
                    <select name="tickets" id="tickets" className='tickets-dropdown'
                    onChange={(event) => {bookingsDetail.numberOfTickets = event.target.value}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='title-container'>
                    <label htmlFor="title">Title</label>
                    <select name="title" id="title" className='title-dropdown'
                    onChange={(event) => {bookingsDetail.title = event.target.value}}>
                        <option value="Ms">Ms.</option>
                        <option value="Mr">Mr.</option>
                    </select>
                </div>
            </article>
            <div className='input-label'>
                <label className='label-title' htmlFor="firstname">Förnamn</label>
                <br />
                <input className='name-input' type="text" placeholder='Greta' id='firstname'
                onChange={(event) => {bookingsDetail.firstName = event.target.value}}/>
            </div>
            <div className='input-label'>
                <label className='label-title' htmlFor="lastname">Efternamn</label>
                <br />
                <input className='name-input' type="text" placeholder='Thunberg' id='lastname'
                onChange={(event) => {bookingsDetail.lastName = event.target.value}}/>
            </div>
            <div className='terms-container'>
            <input className='checkbox' type="checkbox" id='terms'
            onChange={(event) => {bookingsDetail.acceptedTerms = event.target.value}}/> 
            <label htmlFor="terms">Godkänner villkoren</label>
            </div>
            <button className='booking-button'
            onClick={ logBookingsDetail }>Boka biljetter</button>
        </section>
    )
}

export default Form
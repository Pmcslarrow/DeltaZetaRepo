import NavBar from '../Navbar'
import FooterSection from '../Footer'


function Form()
{
    return (
        <>
        <NavBar title="Contact Form"/>

        <div className='centerDiv'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd_mkJwpHzAy78CC7Rv6EqBkJ4r_o_Lli7zc5bAv7VAnx3Zvg/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

        <FooterSection />
        </>
    )
}

export default Form

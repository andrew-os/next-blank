import { NextPage } from "next"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"

const Contact: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-1 flex-col container mx-auto my-10'>
                <h1>Contact Us</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
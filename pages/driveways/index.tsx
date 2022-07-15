import { NextPage } from "next"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const Driveways: NextPage = () => {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-1 flex-col container mx-auto my-10'>
                <h1>Test driveways</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Driveways
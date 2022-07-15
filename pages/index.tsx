import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import HeaderTitle from '../components/HeadingTitle/HeadingTitle'
import Footer from '../components/Footer/Footer'
import LinkButton from '../components/LinkButton/LinkButton'
import TextBody from '../components/TextBody/TextBody'

import { HomeBlurb } from '../utils/content'
import BlurbCard from '../components/BlurbCard/BlurbCard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dorset Driveways</title>
        <meta name="description" content="Landscaping Kaikoura and Otago" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='container'> 

        <section className="bg-red-700">      
          <HeaderTitle Size='h2' text="Get in touch, give us a call" />
          <div className="mt-8">
            <LinkButton text='027 777 6052' isPhone={true} phoneNumber="0277776052" />
          </div>
        </section>

        <section className="my-8">
          <div className="flex flex-col">
            {HomeBlurb.map(({title, text, link}) => (
              <BlurbCard key={title} titleText={title} bodyText={text} linkURL={link} linkText="Read More" />
            ))}
          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}

export default Home

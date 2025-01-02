import Footer from '@/components/Data/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
    return (
        <>
       <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-100">
        <Navbar/>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
        </>
    )
}
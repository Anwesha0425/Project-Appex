import Footer from "@/components/Data/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col ">
      {/* Navbar */}

      <Navbar />

      {/* Main Content */}
      <main >
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

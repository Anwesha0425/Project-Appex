import Footer from "@/components/Data/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [theme, settheme] = useState(true);
  let class__to__add = `${theme ? " bg-[#fff9e9] text-[black]" : " bg-[#000000] text-[white]"}`;
  return (
    
    <div className={"flex flex-col " + class__to__add}>
      {/* Navbar */}
      <Navbar theme={theme} settheme={settheme} />
      {/* Main Content */}
      <main className={"min-h-screen " + class__to__add}>
        <Component {...pageProps} theme={theme}/>
      </main>
      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}

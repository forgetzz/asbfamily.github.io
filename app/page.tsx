import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import { SokidList } from "@/components/kemitraan"; // Assuming this is correct
import Navbar from "@/components/navbar";
import Pengguna from "@/components/pengguna";
import ProductCards from "@/components/produk";
import SejarahKami from "@/components/sejarahKami";

export default function Home() {
  return (
    // We'll wrap everything in a div that sets the overall page background
    // and adds a bit of top padding to ensure content isn't right at the edge of the browser.
    <div className="bg-gray-50 min-h-screen">
      <Navbar /> {/* Navbar typically has its own styling */}
      
      <main> {/* Use <main> for semantic content */}
        {/* Each section component should ideally manage its own internal padding */}
        <HeroSection />
        
        {/* Adding margin between sections for visual separation */}
        <div className="mt-16"> {/* Adjust this margin as needed */}
          <Pengguna />
        </div>
        
        <div className="mt-16 px-1"> {/* Adjust this margin as needed */}
          <SejarahKami />
        </div>
        
        <div className="mt-16 px-5"> {/* Adjust this margin as needed */}
          <ProductCards />
        </div>
        
        <div className="mt-16 px-10"> {/* Adjust this margin as needed */}
          <SokidList />
        </div>
      </main>

      <Footer /> {/* Footer also typically has its own styling */}
    </div>
  );
}
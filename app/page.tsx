import Image from "next/image"; 
import { Button } from "@/components/ui/button"; 
import HeroSection from "@/components/Home/HomeHero";
import TheProblemSection from "@/components/Home/TheProblemSection";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/Home/TrustedBy";
import HowItWorks from "@/components/Home/HowItWorks";
import FeaturesGrid from "@/components/Home/FeaturesGrid";
import AIProposalDemo from "@/components/Home/AIProposalDemo";
import ComparisonMatrix from "@/components/Home/ComparisonMatrix";
import ClientDiscoveryDemo from "@/components/Home/ClientDiscoveryDemo";
import FAQ from "@/components/Home/Faq";
import FinalCTA from "@/components/Home/FinalCta";
import GigThinkChat from "@/components/GigThinkChat";
import Navbar from "@/components/Navigation";
export default function Home() { 
  return ( 
    <> 
    <Navbar/>
     <HeroSection/>
     <TrustedBy/>
     <AIProposalDemo/>
     <FeaturesGrid/>
     <ClientDiscoveryDemo/>
     <ComparisonMatrix/>
     <HowItWorks/>
     <TheProblemSection/>
     <FAQ/>
     <FinalCTA/>
     <GigThinkChat/>
     <Footer/>
    </> 
  ); 
}





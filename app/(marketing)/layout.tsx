import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      
      
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
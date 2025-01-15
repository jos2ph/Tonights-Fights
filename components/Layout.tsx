// components/Layout.tsx
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col text-center min-h-screen">
      <header>
        <h1 className="py-4 border-b cursor-pointer">
          <b>Something ChatBot -</b> Your Mobile ASE Certified Automotive Tech
          Assistant - Try it <b>FREE!</b>
        </h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

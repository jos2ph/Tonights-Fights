// components/Layout.tsx
import Nav from "./Nav";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

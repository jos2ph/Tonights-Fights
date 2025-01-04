// components/Layout.tsx
import Nav from "./Nav";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <header>
        <Nav />
      </header>
      <main className="flex-grow flex flex-col p-4">{children}</main>
      <div className="flex-grow">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

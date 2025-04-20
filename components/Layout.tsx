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
          <a href="mailto:tonightsfights@proton.me">
            <b>Need Advertising?</b> This space could be yours, reserve your
            adspace today -<b> Email Me!</b>
          </a>
        </h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

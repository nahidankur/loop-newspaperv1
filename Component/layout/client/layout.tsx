import { FC } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface PropsType {
  children: React.ReactNode;
}

const ClientLayout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;

import { FC } from "react";
import Footer from "./footer";

interface PropsType {
  children: React.ReactNode;
}

const ClientLayout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;


import "@/public/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ClientLayout from "@/Component/layout/client/layout";
import { PT_Serif, Work_Sans} from "next/font/google";

const PT__Serif = PT_Serif({
  weight:  [ "400", "700"],
  subsets: ["latin"],
});
const Work__Sans = Work_Sans({
  weight:  [ "400", "500", "600" ,"700", "800"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` ${PT__Serif.className} ${Work__Sans.className}`}>
      <ClientLayout>
      <Component {...pageProps} />
      </ClientLayout>
    </div>
  );
}
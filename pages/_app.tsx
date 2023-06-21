
import "@/public/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { League_Spartan, Roboto} from "next/font/google";
const spartan = League_Spartan({
  weight:  ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight:  ["400", "500"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${spartan.className} ${roboto.className}`}> 
        <Component {...pageProps} />
    </div>
  );
}
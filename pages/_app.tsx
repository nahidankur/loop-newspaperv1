
import "@/public/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { League_Spartan, Roboto, PT_Serif, Work_Sans} from "next/font/google";
const spartan = League_Spartan({
  weight:  ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight:  ["400", "500"],
  subsets: ["latin"],
});
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
    <div className={`${spartan.className} ${roboto.className} ${PT__Serif.className} ${Work__Sans.className}`}>
        <Component {...pageProps} />
    </div>
  );
}
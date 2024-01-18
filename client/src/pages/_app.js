import "@/styles/globals.css";
import { SharedDataProvider } from "@/hooks/context";
export default function App({ Component, pageProps }) {

  return (
    <SharedDataProvider>
        <Component {...pageProps} />
    </SharedDataProvider>
  )
}

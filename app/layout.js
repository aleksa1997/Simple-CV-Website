import "./global.css";
import Sidebar from "./components/Sidebar";
import { personalData } from "../data/page-data";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="p-16 gow-full w-full ml-auto sm:basis-2/3">
          {children}
        </main>
      </body>
    </html>
  );
}

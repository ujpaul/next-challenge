// layout.js (server component)
import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ClientProvider from "./components/ClientProvider";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body>
        {/* Pass the session to the client component */}
        <ClientProvider session={session}>{children}</ClientProvider>
      </body>
    </html>
  );
}

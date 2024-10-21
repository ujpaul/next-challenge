// ClientProvider.js (client component)
"use client"; // This is a client component

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Provider from "./SessionProvider";

export default function ClientProvider({ session, children }) {
  const queryClient = new QueryClient();

  return (
    <Provider session={session}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Page from "./components/Page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-slate-200">
        <Page />
      </main>
    </QueryClientProvider>
  );
}

export default App;

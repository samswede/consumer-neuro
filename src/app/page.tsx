import HomePage from "@/components/pages/home/homePage";
import client from "@/tina/__generated__/client";

export default async function Home() {
  const result = await client.queries.home({ relativePath: "Home.md"})
  return <HomePage 
            data={result.data} 
            query={result.query}
            variables={result.variables}
          />;
}

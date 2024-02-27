import DemoPage from "@/components/pages/demo/DemoPage";
import client from "@/tina/__generated__/client";

export default async function Demo() {
  //const result = await client.queries.global({ relativePath: "Global.md"})

  // Fetch tinaCMS data
  const result = await client.queries.global({ relativePath: "Global.md"})
  

  return <DemoPage 
    data={result.data} 
    query={result.query} 
    variables={result.variables}
  />;
}

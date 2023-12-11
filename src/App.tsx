import useStore from "./store";
import "semantic-ui-css/semantic.min.css";

import { Button } from "semantic-ui-react";

import Layout from "./componets/Layout";

function App() {
  const { count, increment } = useStore();

  return (
    <Layout>
      <Button onClick={increment} size="massive" toggle={false}>
        count is {count}
      </Button>
    </Layout>
  );
}

export default App;

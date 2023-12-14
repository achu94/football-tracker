import Layout from "./componets/Layout";
import "semantic-ui-css/semantic.min.css";
import InitDefaultStoreData from "./componets/utils/InitDefaultStoreData";

import Countries from "./sections/Countries";

function App() {
  return (
    <Layout>
      {/* Init default store data. */}
      <InitDefaultStoreData />

      <Countries />
    </Layout>
  );
}

export default App;

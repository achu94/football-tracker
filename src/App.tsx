import Layout from "./componets/Layout";
import "semantic-ui-css/semantic.min.css";
import InitDefaultStoreData from "./componets/utils/InitDefaultStoreData";

import Countries from "./sections/Countries";
import Leagues from "./sections/Leagues";

function App() {
  return (
    <Layout>
      {/* Init default store data. */}
      <InitDefaultStoreData />

      <Countries />
      <Leagues />
    </Layout>
  );
}

export default App;

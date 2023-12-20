import Layout from "./componets/Layout";
import "semantic-ui-css/semantic.min.css";
import InitDefaultStoreData from "./componets/hooks/InitDefaultStoreData";

import Countries from "./sections/Countries";
import Leagues from "./sections/Leagues";
import Home from "./sections/Home";

function App() {

  return (
    <Layout>
      {/* Init default store data. */}
      <InitDefaultStoreData />
      
      <Home />
      
      {/* <Countries /> */}
      {/* <Leagues /> */}
    </Layout>
  );
}

export default App;

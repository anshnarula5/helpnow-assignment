import { useEffect, useState } from "react";
import axios from "axios";
import LineBar from "./components/LineBar";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://api.openweathermap.org/data/2.5/forecast?q=bhopal&appid=73dee316d83fc8e4312e68d912a37b42"
      );
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      HI
      {data && <LineBar data={data} />}
    </div>
  );
}

export default App;

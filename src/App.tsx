import axios from "axios";
import { useEffect, useState } from "react";
interface AppType {
  _id: number;
  name: string;
}
const App = () => {
  const [value, setValue] = useState<string>("");
  const [product, setProduct] = useState<AppType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api-v2.elchocrud.pro/api/v1/3db5376e66f37d0627c2f6385688ced8/product`
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally{
      setLoading(false)
    }
  };
  const postData = async () => {
    try {
      const { data } = await axios.post(
        `https://api-v2.elchocrud.pro/api/v1/3db5376e66f37d0627c2f6385688ced8/product`,
        {
          name: value,
        }
      );
      setProduct(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    useEffect(() => {
      getData();
    }, []);
  };

  return (
    <div>
      <div>
        <button onClick={postData}>add</button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div className="">
            {product.map((el) => (
              <h1 key={el._id}>{el.name}</h1>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

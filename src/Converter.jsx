// const APIKEY = "24c9bb9596mshaa18d20dbc193dfp1abf1bjsn40ff951b25e3";
// const baseUrl = "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD"
import { useEffect, useState } from "react";



export default function Converter() {
    const [data, setData] = useState ('')
    useEffect(() => {
        getData();
      }, []);

  async function getData() {
    const url = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e8bde7a2camshe07cad7f393cbbfp1c9ed7jsn19acbc32ea6f',
		'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    setData (result)
} catch (error) {
	console.error(error);
}
  }

  return (
    <div>
      <input type="number" placeholder="amount" /><br/>
      <select>FROM</select><br/>
      <select>TO</select><br/>
<br />
      <button onClick={() => convert()}>GO!</button>
    </div>
  );
}

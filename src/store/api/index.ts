import axios from "axios"

export const getAllCryptoData = async () => {
  const res = await axios.get('https://rest.coinapi.io/v1/exchangerate', {
    headers: {
      'x-api-key': process.env.REACT_APP_COIN_API_KEY
    }
  });
  console.log(res.data);
}

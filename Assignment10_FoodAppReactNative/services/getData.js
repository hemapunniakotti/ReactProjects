const url = "http://localhost:7000/products"

/*export const getProduct = () => (
    fetch(url, {
      method: 'GET',
    })
  );*/


  import * as base from '../utils/base-service';
  
  const getProduct = () => base.get(url);
  
  export default getProduct;
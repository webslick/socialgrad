 import ProductsServices from '../../services/ProductsServices';  
import ActionTypes from '../constants'; 
  
export function set_category(products) {
  return {
    type: ActionTypes.CATEGORIES_SET,
    payload: products
  }
}
 
export async function getCategoriesProducts (categories,dispatch) {
  try {
    const response = await ProductsServices.getProducts(categories);
    // localStorage.setItem('token_pfds',response.data.accessToken);
    console.log(response.data.products)
    dispatch(set_category(response.data.user)); 
    return response
  } catch (error) {
    console.log(error.response?.data?.message)
    return {status:error.response?.status,msg:error.response?.data?.message};
  }
}


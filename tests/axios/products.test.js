import axios from "axios";

const productsUrl = 'http://localhost:8080/api/products'

//Fetch all products
const getProducts = async () => {
    try {
        const response = await axios.get(productsUrl);
        console.log('Status: ', response.status);
        console.log('All products: ', response.data);
    } catch (error) {
        console.error(error);
    }
}

//Fetch a single product
const getProduct = async (id) => {
    try {
        const response = await axios.get(`${productsUrl}/${id}`);
        console.log('Status: ', response.status);
        console.log('Single product: ', response.data);
    } catch (error) {
        console.error(error);
    }
}

//Posts a product
const postProduct = async (mockProduct) => {
    try {
        const response = await axios.post(productsUrl, mockProduct)
        console.log('Status: ', response.status);
        const responseID = response.data.product
        console.log('ID OF CREATED PRODUCT: ', responseID);
        return responseID
    } catch (error) {
        console.error(error);
    }
}

//Update product
const updateProduct = async (id, mockUpdateProduct) => {
    try {
        const beforeUpdate = await axios.get(`${productsUrl}/${id}`)
        console.log('Before update:', beforeUpdate.data);
        const response = await axios.put(`${productsUrl}/${id}`, mockUpdateProduct)
        console.log('Status: ', response.status);
        console.log(response.data);
        const afterUpdate = await axios.get(`${productsUrl}/${id}`)
        console.log('After update:', afterUpdate.data);
    } catch (error) {
        console.error(error);
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${productsUrl}/${id}`)
        console.log('Status: ', response.status);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export { getProducts, getProduct, postProduct, updateProduct, deleteProduct }
import { getProducts, getProduct, postProduct, updateProduct, deleteProduct } from './tests/axios/products.test.js'

//EDITABLE OBJECTS FOR TESTING
const mockPostProduct = {
    title: "Dying Light 1",
    description: "Use your agility and combat skills to survive, and change the fate of The City. Upgrade your Dying Light 2 Standard Edition to get the Deluxe content.",
    price: 60,
    stock: 5,
    code: "dsadas",
    category: "games",
    thumbnail: "https://i.imgur.com/zbjM3Ni.png"
};

const mockUpdateProduct = {
    title: "Dying Light 1",
    description: "Use your agility and combat skills to survive, and change the fate of The City. Upgrade your Dying Light 2 Standard Edition to get the Deluxe content.",
    price: 80,
    stock: 0,
    code: "dsadas",
    category: "games",
    thumbnail: "https://i.imgur.com/zbjM3Ni.png"
};

const runTestsAxios = async () => {
    try {
        //Fetch all products
        console.log('TEST 1: GET ALL PRODUCTS');
        await getProducts()

        //Fetch single product
        console.log('TEST 2: GET SINGLE PRODUCT');
        await getProduct('636bd97f8b94654de74ee252')

        //Post product
        console.log('TEST 3: POST PRODUCT');
        let newProduct = await postProduct(mockPostProduct)

        //Update product
        console.log('TEST 4: UPDATE PRODUCT');
        await updateProduct(newProduct, mockUpdateProduct)

        //Delete product
        console.log('TEST 5: DELETE PRODUCT');
        await deleteProduct(newProduct)
    } catch (error) {
        console.error(error);
    }
}

runTestsAxios()
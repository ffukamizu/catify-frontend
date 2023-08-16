import axios from 'axios';
axios.defaults.baseURL = `${import.meta.env.VITE_REACT_APP_API_URL}`;

function tokenProvider(auth) {
    return {
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    };
}

function postSignIn(obj, success, failure) {
    axios
        .post('/signin', obj)
        .then((res) => {
            success(res.data);
        })
        .catch((error) => {
            alert(error.response.data);
            failure();
        });
}

function postSignUp(obj, success, failure) {
    axios
        .post('/signup', obj)
        .then(() => {
            success();
        })
        .catch((error) => {
            alert(error.response.data);
            failure();
        });
}

function getProducts(success) {
    axios
        .get('/products')
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}

function getProductById(id, success) {
    axios
        .get(`/products/${id}`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}

function getPortifolio(id, success) {
    axios
        .get(`/products/${id}/list`)
        .then((response) => {
            success(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}

function postProducts(obj, success, failure, token) {
    axios
        .post('/products', tokenProvider(token), obj)
        .then((res) => {
            success(res.data);
        })
        .catch((error) => {
            failure();
            console.log(error.response.data);
        });
}

export { postSignIn, postSignUp, getProducts, postProducts, getPortifolio, getProductById };

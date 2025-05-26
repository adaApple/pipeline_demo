// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/produits';

export const getAllProducts = () => axios.get(API_URL);

export const createProduct = (product) => axios.post(API_URL, product);

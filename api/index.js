import { schemes, httpMethods, headers } from './staticEntries';

const scheme = schemes.HTTPS;
const host = 'e4772e04388b.ap.ngrok.io';
const basePath = '/api/v1';
const paths = {
    get: {
        orders: '/orders'
    },
    post: {
        orders: '/orders'
    }
};

function toQueryString(params) {
    if (typeof params !== 'object') return '';
    const keys = Object.keys(params);
    if (keys.length === 0) return '';
    return '?' + keys.map(key => `${key}=${encodeURIComponent(`${params[key]}`)}`).join('&');
};

function getApiPath(path, params = null) {
    let apiPath = scheme + host + basePath + path;
    if (params) {
        const type = typeof params;

        if (type === 'number' || type === 'string') {
            apiPath += `/${params}`;
        }

        if (type === 'object') {
            const queryString = toQueryString(params);
            apiPath += queryString;
        }
    }
    return apiPath;
}

function getConfigurations(method, data = null) {
    let configurations = {
        method,
        headers
    };
    if (data) {
        configurations.body = JSON.stringify(data);
    }
    return configurations;
}

export const fetchOrders = async params => {
    const apiPath = getApiPath(paths.get.orders, params);
    const configurations = getConfigurations(httpMethods.GET);
    const response = await fetch(apiPath, configurations);
    const data = await response.json();
    return data;
};

export const fetchOrder = async orderId => {
    const apiPath = getApiPath(paths.get.orders, orderId);
    const configurations = getConfigurations(httpMethods.GET);
    const response = await fetch(apiPath, configurations);
    const data = await response.json();
    return data;
};

export const updateOrder = async orderData => {
    const apiPath = getApiPath(paths.post.orders);
    const configurations = getConfigurations(httpMethods.PUT, orderData);
    const response = await fetch(apiPath, configurations);
    const data = await response.json();
    return data;
};

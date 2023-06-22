const axios = require('axios')

class RetailLoopSDK {
    constructor(apiKey, secretKey) {
        this.apiKey = apiKey
        this.secretKey = secretKey
        this.baseUrl = 'https://prodapi.retailloop.co/v1/'
    }

    async signUpUser(userData) {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}user/signup`,
            headers: {

            },
            data: userData,
        }
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async signInUser(userData) {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}user/signin`,
            headers: {

            },
            data: userData,
        }
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createCustomer(customerData) {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseUrl}customer/create`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${this.apiKey}`
            },
            data: customerData,
        }
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getCustomer(customerId) {
        const config = {
            method: 'get',
            url: `${this.baseURL}customers/${customerId}`,
            headers: {
                Authorization: `${this.apiKey}`,
                'Content-Type': 'application/json',
            },
            params: {
                apiKey: this.apiKey,
                secretKey: this.secretKey,
            }
        }
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateCustomer(customerId, customerData) {
        const config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `${this.baseURL}customers/edit/${customerId}`,
            headers: {
                Authorization: `${this.apiKey}`,
                'Content-Type': 'application/json',
            },
            data: customerData,
        }
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async searchCustomer(searchQuery) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}customers/search-customer/${searchQuery}`,
            headers: {
                Authorization: `${this.apiKey}`,
                'Content-Type': 'application/json',
            }
        }
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getPaginatedResults(pageNumber) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}customers/paginated-results/${pageNumber}`,
            headers: {
                Authorization: `${this.apiKey}`,
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async filterCustomers(filterValue) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}customers/filter-customer/${filterValue}`,
            headers: {
                Authorization: `${this.apiKey}`,
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async blockCustomer(customerId) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}customers/block/${customerId}`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async autoCreateCustomer() {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseURL}customers/auto-create`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async unblockCustomer(customerId) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}customers/unblock/${customerId}`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                api_key: `${this.apiKey}`,
                secret_key: `${this.secretKey}`,
            },
        };
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async autoCreateProduct() {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}product/auto-create`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                api_key: this.apiKey,
                secret_key: this.secretKey,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProductById(productId) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}product/${productId}`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                api_key: this.apiKey,
                secret_key: this.secretKey,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async searchProductsByName(name) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}product/search/`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                api_key: this.apiKey,
                secret_key: this.secretKey,
                name: name,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getPaginatedProducts(page) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}product/paginated/results/`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                api_key: this.apiKey,
                secret_key: this.secretKey,
                page: page,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createProduct(productData) {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseURL}product/create`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            data: productData,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getOrders(page, perPage) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}order/`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                page: page,
                perPage: perPage,
                api_key: this.apiKey,
                secret_key: this.secretKey,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createOrder(customerId, totalAmount, items) {
        const orderData = {
            customer_id: customerId,
            total_amount: totalAmount,
            items: items,
        };

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseURL}order/`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                api_key: this.apiKey,
                secret_key: this.secretKey,
            },
            data: orderData,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async filterOrdersByStatus(status) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}order/filter/`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                status: status,
                api_key: this.apiKey,
                secret_key: this.secretKey,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async searchOrdersByName(name) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}order/`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            params: {
                search: name,
                api_key: this.apiKey,
                secret_key: this.secretKey,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createDiscount(discountData) {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseURL}discounts`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            data: discountData,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async autoCreateDiscount() {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}discounts/auto-create`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getDiscount(discountId) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}discounts/${discountId}`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllDiscounts() {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}discounts`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateDiscount(discountId, updatedData) {
        const config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `${this.baseURL}discounts/${discountId}`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
            data: updatedData,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async filterDiscountsByStatus(status) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}discounts/filter/${status}`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async searchDiscountsByName(name) {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.baseURL}discounts/search/${name}`,
            headers: {
                Authorization: `${this.apiKey}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async generateAPIKeys() {
        try {
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${this.baseURL}developer/generate-keys/`,
                headers: {
                    Authorization: `${this.apiKey}`,
                },
            };

            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = RetailLoopSDK

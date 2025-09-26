const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
    constructor() {
        this.token = localStorage.getItem('auth_token');
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem('auth_token', token);
    }

    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'API request failed');
            }

            return data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    async login(email) {
        const data = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
        if (data.access_token) {
            this.setToken(data.access_token);
        }
        return data;
    }

    async adminLogin() {
        const data = await this.request('/auth/admin-login', {
            method: 'POST',
        });
        if (data.access_token) {
            this.setToken(data.access_token);
        }
        return data;
    }

    async getProducts(filters = {}) {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value) params.append(key, value);
        });
        
        return this.request(`/products?${params}`);
    }

    async getProduct(id) {
        return this.request(`/products/${id}`);
    }

    async getCategories() {
        return this.request('/categories');
    }

    async createOrder(orderData) {
        return this.request('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    }

    async getOrders() {
        return this.request('/orders');
    }

    async getAdminStats() {
        return this.request('/admin/stats');
    }

    async getAdminOrders() {
        return this.request('/admin/orders');
    }

    async initDemoData() {
        return this.request('/init-demo-data', {
            method: 'POST',
        });
    }
}

export const apiService = new ApiService();
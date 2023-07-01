const services = {

    async cars(token) {
        const headers = new Headers();
        headers.append('Authorization', 'Token ' + token)
        const request = await fetch('http://127.0.0.1:8000/api/v1/cars/', {
            method: 'GET',
            headers: headers
        });
        return request;
    },

    async addCar(make, price, image) {
        const data = new FormData();
        data.append('make', make);
        data.append('price', price);
        data.append('image', image);
        await fetch('http://127.0.0.1:8000/api/v1/cars/', {
            method: 'POST',
            body: data
        });
    },

    async getCar(id) {
        const request = await fetch('http://127.0.0.1:8000/api/v1/cars/' + id);
        return request;
    },

    async auth(username, password, email) {
        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        data.append('email', email);
        const request = await fetch('http://127.0.0.1:8000/api/v1/auth/users/', {
            method: 'POST',
            body: data
        });
        return request;
    },

    async login(username, password) {
        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        const request = await fetch('http://127.0.0.1:8000/auth/token/login/', {
            method: 'POST',
            body: data
        });
        return request;
    },

    async logout(username, password, token) {
        const headers = new Headers();
        headers.append('Authorization', 'Token ' + token);
        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        const request = await fetch('http://127.0.0.1:8000/auth/token/logout/', {
            method: 'POST',
            body: data,
            headers: headers
        })
        return request;
    }


};

export {services};
const services = {
    async cars() {
        const request = await fetch('http://127.0.0.1:8000/api/v1/cars/');
        return request;
    }
};

export {services};
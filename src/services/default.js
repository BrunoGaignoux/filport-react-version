import request from './request';

const login = (data) => {
    return request.post('/login', { cpf: data }, true);
}

const dashboard = () => {
    return request.get('/dash');
}

export default { login, dashboard };
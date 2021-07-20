import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiUri as api} from '../../app.json';

const get = async (url, param) => {
    const data = await AsyncStorage.getItem("@session");
    const session = JSON.parse(data);
    let query = '';

    if (param) {
        query = param.join('&');    
    }

    const response = await fetch(api + `${url}?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + session.token
        },
    });
    return await response.json();
}

const post = async (url, body, ignoreToken = false) => {
    const data = await AsyncStorage.getItem("@session");
    let session = { token: '' }

    if (!ignoreToken) {
        session = JSON.parse(data);
    }

    const response = await fetch(api + url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + session.token
        },
    });
    return await response.json();
}

const put = async (url, body) => {
    const data = await AsyncStorage.getItem("@session");
    const session = JSON.parse(data);

    const response = await fetch(api + url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + session.token
        },
    });
    return await response.json();
}

const remove = async (url, id) => {
    const data = await AsyncStorage.getItem("@session");
    const session = JSON.parse(data);

    const response = await fetch(api + `${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + session.token
        },
    });
    return await response.json();
}

export default {
    get,
    post,
    put,
    remove
}
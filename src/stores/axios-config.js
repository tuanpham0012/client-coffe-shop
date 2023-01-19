import axios from 'axios';

const instance = axios.create({});

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Accept'] = 'application/json';
if (localStorage.getItem('portal_id') != null) {
    instance.defaults.headers.common['portal-id'] = localStorage.getItem('portal_id');
}

export default instance;
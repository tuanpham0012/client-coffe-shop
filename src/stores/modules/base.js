import axios from '../axios-config';
import * as url from '../url-config';

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';

export default {
    namespaced: true,
    state () {
        return {
            loading: false,
            countries: null,
            cities: null,
            districts: null,
            ward: null,
        }
    },

    mutations: {
        SET_LOADING_STATE(state, payload){
            state.loading = payload;
        },
        SET_COUNTRIES_LIST(state, payload){
            state.countries = payload;
        },
        SET_CITIES_LIST(state, payload){
            state.cities = payload;
        },
        SET_DISTRICTS_LIST(state, payload){
            state.districts = payload;
        },
        SET_WARD_LIST(state, payload){
            state.ward = payload;
        }
    },

    actions: {
        async getListCountries({commit}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: 'http://tenant-api.test/api/v1/countries/get_all', //url.url_country.RESOURCE, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_COUNTRIES_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
              })
        },
        async getListCities({commit}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: 'http://tenant-api.test/api/v1/cities/get_all', //url.url_country.RESOURCE, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_COUNTRIES_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
             })
        },
        async getListDistricts({commit}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: 'http://tenant-api.test/api/v1/districts/get_all', //url.url_country.RESOURCE, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_COUNTRIES_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
              })
        },
        async getListWards({commit}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: 'http://tenant-api.test/api/v1/wards/get_all', //url.url_country.RESOURCE, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_COUNTRIES_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
              })
        }
    }
}
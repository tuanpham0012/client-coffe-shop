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
            wards: null,
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
        SET_WARDS_LIST(state, payload){
            state.wards = payload;
        }
    },

    actions: {
        async getListCountries({commit}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: url.url_location.COUNTRIES, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_COUNTRIES_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
                commit('SET_LOADING_STATE', false);
              })
        },
        async getListCities({commit},{country_id}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: url.url_location.CITIES + country_id, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_CITIES_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
                commit('SET_LOADING_STATE', false);
             })
        },
        async getListDistricts({commit},{city_id}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: url.url_location.DISTRICTS + city_id, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_DISTRICTS_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
                commit('SET_LOADING_STATE', false);
              })
        },
        async getListWards({commit}, {district_id}){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: url.url_location.WARDS + district_id, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_WARDS_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
                commit('SET_LOADING_STATE', false);
              })
        }
    }
}
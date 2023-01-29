import axios from '../axios-config';
import * as url from '../url-config';

export default {
    namespaced: true,
    state () {
        return {
            loading: true,
            token: null,
            portals: null,
            portal: null,
        }
    },

    mutations: {
        SET_LOADING_STATE(state, payload){
            state.loading = payload;
        },
        SET_PORTAL_LIST(state, payload){
            state.portals = payload;
        },
        SET_PORTAL_DETAIL(state, payload){
            state.portal = payload;
        }
    },

    actions: {
        async getListPortal({commit}, {search, page = 1, per_page = 30}){
            commit('base/SET_LOADING_STATE', true, { root: true });
            await axios({
                method: 'GET',
                url: url.url_portal.RESOURCE,
                params:{
                    search: search,
                    page: page,
                    per_page: per_page,
                }

            }).then(res => {
                console.log(res.data);
                commit('SET_PORTAL_LIST', res.data);
                commit('base/SET_LOADING_STATE', false, { root: true });
              }).catch(err => {
                console.log(err);
              })
        },

        async getPortal({commit}, {id}){
            commit('base/SET_LOADING_STATE', true);
            commit('SET_AUTHOR_DETAIL', null);
            console.log(id);
            await axios({
                method: 'GET',
                url: url.url_portal.RESOURCE + '/' + id,
            }).then(res => {
                console.log(res.data);
                commit('SET_PORTAL_DETAIL', res.data.data);
                commit('base/SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
              })
        },

        
    }
}
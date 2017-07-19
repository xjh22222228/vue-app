import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		usersInfo: {
			tel: '',
			id: '',
			money: 0,
			avatar: '/static/images/avatar2.jpg',
			tixian: [],
		},
		record: [],
	},
	mutations: {
		login (state, payload) {
			state.usersInfo = payload;
		},
		tixian (state, payload) {
			state.usersInfo.tixian.push(payload);
			state.usersInfo.money = (Number(state.usersInfo.money).toFixed(2) - payload.money).toFixed(2);
			state.record.record.push({
				tel: payload.tel,
				money: payload.money,
				time: payload.time,
			});
			localStorage.user = JSON.stringify(state.usersInfo);
		},
	},
	actions: {
		fetchGet ({state, commit}, url) {
			return new Promise((resolve, reject) => {
				axios.get(url)
				.then(data => {
					resolve(data.data);
				})
				.catch(err => {
					reject(err);
				})
			});
		},
		record ({dispatch, state}, payload) {
			dispatch('fetchGet', '/static/data/data.json')
			.then(data => {
				state.record = data.data;
			})
		}
	},
})
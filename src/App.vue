<template>
    <div id="app">
    	<el-loading :show="loading"></el-loading>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <el-footer></el-footer>
    </div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			loading: false
		}
	},
	created () {
		var user = localStorage.user;
		if( user && JSON.parse(user)) this.$store.commit('login', JSON.parse(user));
	},
	watch: {
		'$route' () {
			this.loading = true;
			setTimeout(() => this.loading = false, 500)
		}
	}
}
</script>


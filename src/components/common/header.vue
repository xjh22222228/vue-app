<template>
	<header>
		<router-link to="/home" class="iconfont left" v-if="show">&#xe616;</router-link>
		<h1>{{ title }}</h1>
		<a href="javascript:;" class="iconfont right" @click="logout">&#xe627;</a>
		<el-confirm-cancel :show.sync="confirmCancel"></el-confirm-cancel>
	</header>
</template>

<script>
export default {
	name: 'header',
	data () {
		return {
			confirmCancel: false,
		}
	},
	props: {
		title: {
			type: String,
			default: '超钻',
		},
		show: {
			type: Boolean,
			default: true,
		}
	},
	methods: {
		logout () {
			this.confirmCancel = true;
		}
	}
}
</script>
<template>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
</template>

<script>
export default {
	name: 'home',
	created () {
		this.$store.dispatch('record');
	},
}
</script>
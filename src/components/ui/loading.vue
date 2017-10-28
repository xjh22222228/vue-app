<template>
	<div class="loading" v-show="show">
		<div class="loading-box">
			<i></i>
			<i></i>
			<i></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loading',
	props: {
		show: {
			default: false,
			type: Boolean,
		}
	}
}
</script>
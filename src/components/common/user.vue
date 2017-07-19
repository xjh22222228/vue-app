<template>
	<div class="top">
		<div class="avatar">
			<img :src="usersInfo.avatar">
		</div>
		<div class="content">
			<p>{{ top }}</p>
			<p>{{ bottom }}</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'user',
	props: {
		top: {
			default: '',
		},
		bottom: {
			default: '',
		},
	},
	computed: {
		...mapState(['usersInfo'])
	}
}
</script>
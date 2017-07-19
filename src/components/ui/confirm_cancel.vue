<template>
	<div class="confirm-cancel" v-show="show">
		<transition enter-active-class="animated bounceIn">
			<div class="confirm-cancel-box" v-show="show">
				<div class="logout">确定退出吗？</div>
				<div class="bottom">
					<div @click="confirm">确定</div>
					<div @click="cancel">取消</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'confirm_cancel',
	props: {
		show: {
			default: true,
			type: Boolean,
		}
	},
	methods: {
		cancel () {
			this.$emit('update:show', false);
		},
		confirm () {
			localStorage.removeItem('login');
			this.$router.replace('/login');
			this.$emit('update:show', false);
		}
	}
}
</script>
<template>
	<footer>
		<router-link tag="div" to="/home/center">
			<i class="iconfont">&#xe611;</i>
			<p>个人中心</p>
		</router-link>

		<router-link tag="div" to="/home/withdraw">
			<i class="iconfont">&#xe64d;</i>
			<p>我要提现</p>
		</router-link>
		
		<router-link tag="div" to="/home/apprentice">
			<i class="iconfont">&#xe609;</i>
			<p>我要收徒</p>
		</router-link>
	</footer>
</template>

<script>
export default {
	name: 'footer',
}
</script>
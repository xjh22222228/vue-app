<template>
	<section class="wallet">
		<el-header title="我的钱包"></el-header>
		<el-user top="累计收徒：0" :bottom="`账号余额(￥)：${usersInfo.money}`"></el-user>

		<div class="wallet-center">
			<router-link tag="div" to="/home/fans" class="common">
				<span>粉丝收益</span>
				<i class="iconfont">&#xe62b;</i>
			</router-link>
			<router-link tag="div" to="/home/withdraw" class="common">
				<span>我要提现</span>
				<i class="iconfont">&#xe62b;</i>
			</router-link>
			<router-link tag="div" to="/home/withdrawals" class="common">
				<span>提现记录</span>
				<i class="iconfont">&#xe62b;</i>
			</router-link>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'wallet',
	computed: {
		...mapState(['usersInfo'])
	}
}
</script>
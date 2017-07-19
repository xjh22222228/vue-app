<template>
	<section class="withdrawals">
		<el-header title="提现记录"></el-header>

		<div class="top">
			<div class="balance">余额：<span>{{ usersInfo.money }}</span></div>
			<router-link to="/home/withdraw" tag="div" class="tx">
				<button>提现</button>
			</router-link>
		</div>

		<div class="money-info">
			<div class="money-title">
				<div>日期</div>
				<div>金额</div>
				<div>状态</div>
			</div>
			<div class="money-list">
				<ul>
					<li v-for="(item, index) of usersInfo.tixian">
						<span>{{ item.date }}</span>
						<span>{{ item.money }}</span>
						<span>成功</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'withdrawals',
	computed: {
		...mapState(['usersInfo'])
	}
}
</script>









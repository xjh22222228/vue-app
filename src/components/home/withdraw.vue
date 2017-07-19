<template>
	<section class="withdraw">
		<el-header title="我要提现"></el-header>
		<el-layer-top :show="show">{{ warn }}</el-layer-top>
		<el-correct :show="correct">提现成功</el-correct>
		<!-- 提现提交 begin -->
		<div class="form">
			<div class="property">
				<h2>余额 <span>{{ usersInfo.money }}</span> 元</h2>
			</div>
			<div class="account">支付宝提现</div>
			<div class="common">
				<label for="account">提现账号：</label>
				<input 
					type="text" 
					placeholder="支付宝账号" 
					id="account" 
					maxlength="20" 
					autocorrect="off" 
					autocomplete="off" 
					autofocus="autofocus"
					v-model.trim="account">
			</div>
			<div class="common">
				<label for="name">提现姓名：</label>
				<input 
					type="text" 
					placeholder="支付宝姓名" 
					id="name" 
					maxlength="5"
					v-model.trim="name">
			</div>
			<div class="common">
				<label for="money">提现金额：</label>
				<input 
					type="text" 
					placeholder="提现金额" 
					id="money" 
					maxlength="5"
					v-model.trim.number="money">
			</div>
			<div class="button" @click="submit">
				<button type="button">提交</button>
			</div>
		</div>
		<!-- 提现提交 end -->

		<div class="tip">
			<p>三个工作日内到账</p>
			<p>实名验证的支付宝才可以收到提现</p>
			<p>一经绑定不能修改。如有问题请联系客服</p>
			<h6>*工作时间：星期一至星期五早上09:00到下午17：00，周末提现周一处理。当天到账，15点之后星期一到账。谢谢！</h6>
			<p>为了保证用户的收益以及提现顺利到账，提现出现以下情况的用户 例如：失败、冻结、拒付 出现这些情况的用户请及时联系平台客服，为方便联系客服处理问题，请速加客服QQ:1941959693</p>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'withdraw',
	data () {
		return {
			account: '',
			name: '',
			money: '',
			correct: false,
			show: false,
			warn: '',
		}
	},
	computed: {
		...mapState(['usersInfo'])
	},
	methods: {
		submit () {
			if(!(/^[\u4e00-\u9fa5]+$/i.test(this.name)))
			{
				this.warn = '请输入合法的用户名';
				this.show = true;
				return;
			}
			if( isNaN(this.money) || this.money <= 0 || this.money == '' || this.money > this.usersInfo.money )
			{
				this.warn = '提现金额有误';
				this.show = true;
				return;
			}
			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth();
			var date = now.getDate();
			this.$store.commit('tixian', {
				money: this.money,
				account: this.account,
				date: `${year}-${month}-${date}`,
				tel: this.usersInfo.tel,
				time: now * 1,
			});
			this.correct = true;
			setTimeout(() => this.correct = false, 1333);
		}
	},
	watch: {
		show (val) {
			if( val )
			{
				setTimeout(() => {
					this.show = false;
				}, 1333)
			}
		}
	},
}
</script>










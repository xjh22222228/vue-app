<template>
	<section class="center">
		<el-header title="个人中心" :show="false"></el-header>

		<!-- 用户信息 begin -->
		<el-user :top="usersInfo.tel" :bottom="`ID:${usersInfo.id}`"></el-user>
		<!-- 用户信息 end -->
		
		<!-- 用户收益 begin -->
		<div class="profit">
			<div>
				<p>今日收入</p>
				<p>0</p>
			</div>
			<div>
				<p>账户余额</p>
				<p>{{ usersInfo.money }}</p>
			</div>
			<div>
				<p>今日收徒</p>
				<p>0</p>
			</div>
			<div>
				<p>累计收徒</p>
				<p>0</p>
			</div>
		</div>
		<!-- 用户收益 end -->

		<!-- 用户操作 begin -->
		<div class="operation">
			<router-link v-for="(item, index) of operation" :to="{path: item.link}" tag="div" :key="item.id">
				<i class="iconfont" v-html="item.icon"></i>
				<p>{{ item.name }}</p>
			</router-link>
		</div>
		<!-- 用户操作 end -->

		<!-- 提现记录 begin -->
		<div class="record">
			<div class="record-title">近期提现记录</div>
			<div class="record-center">
				<div>手机号码</div>
				<div>金额</div>
				<div>日期</div>
			</div>
			<div class="lately">
				<ul ref="ul">
					<li v-for="(item, index) of record">
						<span class="tel">{{ item.tel }}</span>
						<span class="money">{{ item.money }}</span>
						<span class="time">{{ item.time | formatDate }}</span>
					</li>
				</ul>
			</div>
		</div>
		<!-- 提现记录 end -->
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'center',
	data () {
		return {
			layerShow: false,
		}
	},
	computed: {
		...mapState({
			usersInfo: state => state.usersInfo,
			record: state => state.record.record,
			operation: state => state.record.operation,
		})
	},
	methods: {
		loop () {
			setInterval(() => {
				if ( this.record.length <= 0 && !(this.record.length > 0)) return;
				var firstChildH = this.$refs.ul.firstElementChild.offsetHeight;
				this.$refs.ul.style.transition = 'transform .5s linear';
				this.$refs.ul.style.transform = `translate3d(0, -${firstChildH}px, 0)`;
				setTimeout(() => {
					this.record.shift();
					this.$refs.ul.style.transition = 'none';
					this.$refs.ul.style.transform = 'translate3d(0, 0, 0)';
					this.record.push(this.record[0]);
				}, 500)
			}, 2000)
		}
	},
	filters: {
		formatDate (value) {
			var date = new Date(value);
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
			var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
			var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
			return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		}
	},
	mounted () {
		this.loop();
	},
}
</script>












<template>
	<section class="journal">
		<el-header title="收益日志"></el-header>
		<el-user top="今日文章转发收益:￥0" :bottom="`账户余额: ￥${usersInfo.money}`"></el-user>
		<div class="water">
			<div class="water-title">24小时内收益详情报告</div>
			<div class="water-cen">
				<div>流水号</div>
				<div>标题</div>
				<div>收益</div>
			</div>
			<div class="journal-water">
				<!-- <ul>
					<li>
						<span>123123</span>
						<span>123123</span>
						<span>123123</span>
					</li>
				</ul> -->
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'journal',
	computed: {
		...mapState(['usersInfo'])
	}
}
</script>
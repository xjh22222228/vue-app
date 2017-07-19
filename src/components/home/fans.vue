<template>
	<section class="fans">
		<el-header title="粉丝收益"></el-header>
		<el-user top="今日粉丝奖励收益:￥0.00" bottom="粉丝奖励总收益:￥0"></el-user>

		<div class="report">
			<div class="report-title">24小时内收益详情报告</div>
			<div class="report-info">
				<div>级别</div>
				<div>数量</div>
				<div>收益</div>
				<div>比例</div>
			</div>
			<div class="fans-report">
				<!-- 
				<ul>
					<li></li>
				</ul> -->
			</div>
		</div>

	</section>
</template>

<script>
export default {
	name: 'fans',
}
</script>
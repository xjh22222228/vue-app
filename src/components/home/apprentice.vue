<template>
	<section class="apprentice">
		<el-header title="我要收徒"></el-header>

		<div class="share">
			<div class="title">即日起，收徒奖励将在徒弟分享文章之后自动发放，谢谢！！！</div>
			<div class="link">
				您的推广链接: 
				<a href="#">{{ link }}</a>
				长按复制 
			</div>
			<div class="press">宣传语+推广链接组合,长按直接复制发到各大转发群中....</div>
		</div>
		
		<div class="tuiguang">收徒推广</div>

		<div class="propaganda">
			<div>
				<p>最新最给力平台【超钻】</p>
				<p>火爆上线，涨分飞快！点击0.20元！收徒0.5元(徒弟首次提现后发放)！</p>
				<p>徒弟15%提成，徒孙提成5%;</p>
				<p>10元起提现，玩转发必做平台 </p>
				<p>文章火爆，上分飞快，支持微信群，朋友圈，快快注册当元老! </p>
				<p>注册地址：{{ link }}</p>
			</div>
		</div>

		<div class="bottom">你可以根据推广链接自由组合宣传语.</div>
	</section>
</template>

<script>
export default {
	name: 'apprentice',
	computed: {
		link () {
			return window.location.href;
		}
	}
}
</script>
<template>
	<section class="make-money">
		<el-header title="我的徒弟"></el-header>

		<div class="image">
			<img src="/static/images/foot.jpg">
		</div>

		<div class="today">
			<div>
				<span>今日收入</span>
				<p>0</p>
			</div>
			<div>
				<span>累计收徒</span>
				<p>0</p>
			</div>
		</div>

		<router-link class="invitation" tag="div" to="/home/apprentice">立刻邀请</router-link>

		<div class="make-bottom">
			<h2>1、如何邀请徒弟？</h2>
			<p>把你的“马上收徒赚钱”链接分享出去，有用户完成注册，并分享一篇文章阅读后，即成为你的徒弟。</p>
			<h2>2、怎么招收更多徒弟？</h2>
			<p>在赚钱/兼职/学生等QQ群及社区论坛贴吧中发送您的收徒邀请链接。二三线城市的初高中，技校QQ群及赌赢的百度贴吧收徒效果非常好。自己建立QQ群拉徒弟加入，分享赚钱技巧，徒弟赚得越多你提成越多，双赢喔。</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'makeMoney'
}
</script>
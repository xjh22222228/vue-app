<template>
	<section class="login">
		<el-layer-top :show="show">账号或密码错误</el-layer-top>
		<el-correct :show="correct">登录成功</el-correct>
		<div class="login-box">
			<div class="logo">
				<img src="../../assets/images/logo.svg">
			</div>
			<!-- 容器 begin -->
			<div class="login-container">
				<!-- 手机号码 begin -->
				<div class="common">
					<label class="iconfont" for="tel">&#xe710;</label>
					<input 
						type="text" 
						id="tel" 
						autocorrect="off" 
						placeholder="请输入您的手机号码" 
						maxlength="11" 
						autofocus="autofocus" 
						v-model.trim="tel"
						@keyup.enter="submit">
				</div>
				<!-- 手机号码 end -->

				<!-- 密码 begin -->
				<div class="common">
					<label class="iconfont" for="password">&#xe678;</label>
					<input 
						type="password" 
						id="password" 
						placeholder="请输入密码" 
						maxlength="32" 
						v-model.trim="password"
						@keyup.enter="submit">
				</div>
				<!-- 密码 end -->

				<!-- link begin -->
				<div class="register-accout">
					<router-link to="/register">注册账号</router-link>
				</div>
				<!-- link begin -->

				<!-- submit begin -->
				<div class="login-submit">
					<button type="button" @click="submit">登录</button>
				</div>
				<!-- submit end -->
			</div>
			<!-- 容器 end -->
		</div>
	</section>
</template>


<script>
export default {
	name: 'login',
	data () {
		return {
			show: false,
			correct: false,
			tel: '',
			password: '',
		}
	},
	methods: {
		submit () {
			var local = localStorage.user;
			if( local && JSON.parse(localStorage.user))
			{
				var {tel, password} = JSON.parse(localStorage.user);
				if( this.tel == tel && this.password == password )
				{
					this.$store.commit('login', JSON.parse(localStorage.user));
					this.correct = true;
					this.success();
					return;
				}
			}
			this.show = true;
			setTimeout(() => this.show = false, 1300);
		},
		success () {
			this.correct = true;
			localStorage.login = true;
			setTimeout(() => {
				this.correct = false;
				this.$router.push('/home');
			}, 1300);
		}
	}
}
</script>













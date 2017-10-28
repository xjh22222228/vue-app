<template>
	<section class="login">
		<el-layer-top :show="show">{{ tip }}</el-layer-top>
		<el-correct :show="correct">注册成功</el-correct>
		<div class="login-box">
			<div class="logo">
				<img src="../../assets/images/logo.svg">
			</div>
			<!-- 容器 begin -->
			<div class="login-container">
				<!-- 手机号码 begin -->
				<div class="common">
					<label class="iconfont" for="tel">&#xe672;</label>
					<input 
						type="text" 
						id="tel" 
						autocorrect="off" 
						placeholder="请输入您的手机号码" 
						maxlength="11" 
						v-model.trim="tel" 
						autocomplete="off" 
						@keyup.enter="submit">
					<i class="iconfont" v-show="/^13[0-9]{9}$/.test(tel)">&#xe62d;</i>
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
						autocomplete="off" 
						@keyup.enter="submit">
					<i class="iconfont" v-show="password.length >= 6">&#xe62d;</i>
				</div>
				<!-- 密码 end -->

				<!-- 确认密码 begin -->
				<div class="common">
					<label class="iconfont" for="confirm">&#xe678;</label>
					<input 
						type="password" 
						id="confirm" 
						autocorrect="off" 
						placeholder="请确认密码" 
						maxlength="32" 
						v-model.trim="confirmPassword" 
						autocomplete="off" 
						@keyup.enter="submit">
					<i class="iconfont" v-show="confirmPassword.length >= 6 && password == confirmPassword">&#xe62d;</i>
				</div>
				<!-- 确认密码 end -->

				<!-- link begin -->
				<div class="register-accout">
					<router-link to="/login">已有账号</router-link>
				</div>
				<!-- link begin -->

				<!-- submit begin -->
				<div class="login-submit">
					<button type="button" @click="submit">注册</button>
				</div>
				<!-- submit end -->
			</div>
			<!-- 容器 end -->
		</div>
	</section>
</template>


<script>
export default {
	name: 'register',
	data () {
		return {
			show: false,
			correct: false,
			tel: '',
			password: '',
			confirmPassword: '',
			tip: '',
		}
	},
	methods: {
		submit () {
			if ( !(/^13[0-9]{9}$/.test(this.tel)) )
			{
				this.tip = '手机号码不符合要求';
				this.show = true;
				return;
			}
			if ( this.password.length < 6 )
			{
				this.tip = '密码至少6位';
				this.show = true;
				return;
			}
			if ( !(this.confirmPassword.length >= 6) && !(this.confirmPassword == this.password) )
			{
				this.tip = '请检查确认密码是否有误';
				this.show = true;
				return;
			}
			var avatar = [ 	// 注册随机分配头像
				'../../assets/images/avatar1.jpg',
				'../../assets/images/avatar2.jpg',
				'../../assets/images/avatar3.jpg',
				'../../assets/images/avatar4.jpg',
				'../../assets/images/avatar5.jpg',
				'../../assets/images/avatar6.jpg',
				'../../assets/images/avatar7.jpg',
				'../../assets/images/avatar8.jpg',
				'../../assets/images/avatar9.jpg',
			];
			var obj = {
				tel: this.tel,
				password: this.password,
				money: (Math.random() * 100).toFixed(2),
				id: Math.floor(Math.random() * 99999999) + 900000000,
				avatar: avatar[Math.floor(Math.random() * avatar.length)],
				tixian: [],
			};
			localStorage.user = JSON.stringify(obj);
			this.success();
		},
		success () {
			this.correct = true;
			setTimeout(() => this.$router.push('/login'), 1000)
		}
	},
	watch: {
		show (val) {
			if( val ) setTimeout(() => this.show = false, 1300);
		}
	},
}
</script>
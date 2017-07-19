import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/register/register'
import home from '@/components/home/index'
import personalCenter from '@/components/home/personalCenter'
import withdraw from '@/components/home/withdraw'
import apprentice from '@/components/home/apprentice'
import wallet from '@/components/home/myWallet'
import makeMoney from '@/components/home/makeMoney'
import withdrawals from '@/components/home/withdrawals'
import help from '@/components/home/help'
import fans from '@/components/home/fans'
import journal from '@/components/home/journal'
import share from '@/components/home/share'
import err from '@/components/common/404'
Vue.use(Router)

var route =  new Router({
	routes: [
		{	
			path: '/',
			redirect: '/home',
		},
		{	// login 登录
			path: '/login',
			component: login, 
		},
		{	// register 注册
			path: '/register',
			component: register,
		},
		{
			// home 
			path: '/home',
			component: home,
			beforeEnter (to, from, next) {
				if( !localStorage.login ) return next('/login');
				next();
			},
			children: [
				{	// 空重定向
					path: '',
					redirect: 'center'
				},
				{	// 我要提现
					path: 'withdraw',
					component: withdraw,
				},
				{	// 个人中心
					path: 'center',
					component: personalCenter
				},
				{	// 我要收徒
					path: 'apprentice',
					component: apprentice
				},
				{	// 我的钱包
					path: 'wallet',
					component: wallet
				},
				{
					// 收徒赚钱
					path: 'makemoney',
					component: makeMoney
				},
				{	// 提现记录
					path: 'withdrawals',
					component: withdrawals
				},
				{	// 新手指南
					path: 'help',
					component: help
				},
				{	// 粉丝收益
					path: 'fans',
					component: fans
				},
				{	// 收益日志
					path: 'journal',
					component: journal
				},
				{	// 分享赚钱
					path: 'share',
					component: share
				},
			]
		},
		{	// 404
			path: '*',
			component: err
		},
	]
});


export default route;

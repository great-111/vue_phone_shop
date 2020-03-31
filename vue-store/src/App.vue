<!--
 * @Description: 项目根组件
 * @Author: hahahah
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hahahah
 * @LastEditTime: 2020-03-12 19:30:36
 -->
<template>
	<div id="app" name="app">
		<el-container>
			<!-- 顶部导航栏 -->
			<div class="topbar">

				<div class="nav">
					<div class="topbar-nav">
						<a rel="nofollow" href="//www.mi.com/index.html">小米商城</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//www.miui.com/" target="_blank">MIUI</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//iot.mi.com/index.html" target="_blank">IoT</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//i.mi.com/" target="_blank">云服务</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//jr.mi.com?from=micom" target="_blank">金融</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//youpin.mi.com/" target="_blank">有品</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//xiaoai.mi.com/" target="_blank">小爱开放平台</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//qiye.mi.com/" target="_blank">企业团购</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//www.mi.com/aptitude/list/?id=41" target="_blank">资质证照</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//www.mi.com/aptitude/list/" target="_blank">协议规则</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="//www.mi.com/appdownload/" target="_blank">下载app</a>
						<span class="sep">|</span>
						<a rel="nofollow" href="javascript:;">Select Location</a>
					</div>
					<!-- 				</div> -->
					<ul>
						<li v-if="!this.$store.getters.getUser">
							<el-button type="text" @click="login">登录</el-button>
							<span class="sep">|</span>
							<el-button type="text" @click="register = true">注册</el-button>
						</li>
						<li v-else>
							欢迎
							<el-popover placement="top" width="180" v-model="visible">
								<p>确定退出登录吗？</p>
								<div style="text-align: right; margin: 10px 0 0">
									<el-button size="mini" type="text" @click="visible = false">取消</el-button>
									<el-button type="primary" size="mini" @click="logout">确定</el-button>
								</div>
								<el-button type="text" slot="reference">{{this.$store.getters.getUser.userName}}</el-button>
							</el-popover>
						</li>
						<li>
							<router-link to="/order">我的订单</router-link>
						</li>
						<li>
							<router-link to="/collect">我的收藏</router-link>
						</li>
						<li :class="getNum > 0 ? 'shopCart-full' : 'shopCart'">
							<router-link to="/shoppingCart">
								<i class="el-icon-shopping-cart-full"></i> 购物车
								<span class="num">({{getNum}})</span>
							</router-link>
						</li>
					</ul>

				</div>
			</div>
			<!-- 顶部导航栏END -->

			<!-- 顶栏容器 -->
			<el-header>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#409eff" router>
					<div class="logo">
						<router-link to="/">
							<img src="./assets/imgs/logo.png" alt />
						</router-link>
					</div>
					<el-menu-item index="/">首页</el-menu-item>
					<el-menu-item index="/goods">全部商品</el-menu-item>
					<el-menu-item index="/phone">小米手机</el-menu-item>
					<el-menu-item index="/television">小米电视</el-menu-item>
					<el-menu-item index="/notebook">笔记本</el-menu-item>
					<el-menu-item index="/about">关于我们</el-menu-item>
					<div class="so">
						<el-input placeholder="请输入搜索内容" v-model="search">
							<el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
						</el-input>
					</div>
				</el-menu>
			</el-header>
			<!-- 顶栏容器END -->

			<!-- 登录模块 -->
			<MyLogin></MyLogin>
			<!-- 注册模块 -->
			<MyRegister :register="register" @fromChild="isRegister"></MyRegister>

			<!-- 主要区域容器 -->
			<el-main>
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-main>
			<!-- 主要区域容器END -->

			<!-- 底栏容器 -->
			<el-footer>
				<div class="footer">
					<div class="footer-service">
						<ul class="list-service clearfix">
							<li><a rel="nofollow" href="//www.mi.com/static/fast/" target="_blank"><em class="iconfont-tool"></em>预约维修服务</a></li>
							<li><a rel="nofollow" href="//www.mi.com/service/exchange#back" target="_blank"><em class="iconfont-circle-7"></em>7天无理由退货</a></li>
							<li><a rel="nofollow" href="//www.mi.com/service/exchange#back" target="_blank"><em class="iconfont-circle-15"></em>15天免费换货</a></li>
							<li><a rel="nofollow" href="//www.mi.com/service/buy/Postal%20policy" target="_blank"><em class="iconfont-gift"></em>满99元包邮</a></li>
							<li><a rel="nofollow" href="//www.mi.com/static/maintainlocation/" target="_blank"><em class="iconfont-location"></em>520余家售后网点</a></li>
						</ul>
					</div>

					<div class="footer-links clearfix ">
						<dl class="col-links col-links-first"><dt>帮助中心</dt>
							<dd><a rel="nofollow" href="//www.mi.com/service/account/Account%20registration/">账户管理</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/service/buy/SalesTime/" target="_blank" >购物指南</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/service/order/sendprogress/" target="_blank">订单操作</a></dd>
						</dl>
						<dl class="col-links "><dt>服务支持</dt>
							<dd><a rel="nofollow" href="//www.mi.com/service/exchange" target="_blank" >售后政策</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/service/" target="_blank">自助服务</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/c/service/download/" target="_blank" >相关下载</a></dd>
						</dl>
						<dl class="col-links "><dt>线下门店</dt>
							<dd><a rel="nofollow" href="//www.mi.com/c/xiaomizhijia/">小米之家</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/static/maintainlocation/" target="_blank" >服务网点</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/static/familyLocation/" target="_blank">授权体验店</a></dd>
						</dl>
						<dl class="col-links "><dt>关于小米</dt>
							<dd><a rel="nofollow" href="//www.mi.com/about/" target="_blank">了解小米</a></dd>
							<dd><a rel="nofollow" href="//hr.xiaomi.com/" target="_blank" >加入小米</a></dd>
							<dd><a rel="nofollow" href="//company.mi.com/zh-cn/ir/indexContent/index.html" target="_blank">投资者关系</a></dd>
							<dd><a rel="nofollow" href="//integrity.mi.com/" target="_blank" >廉洁举报</a></dd>
						</dl>
						<dl class="col-links "><dt>关注我们</dt>
							<dd><a rel="nofollow" href="//weibo.com/xiaomishangcheng" target="_blank">新浪微博</a></dd>
							<dd><a rel="nofollow" href="javascript:void(0);">官方微信</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/about/contact/" >联系我们</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/foundation/index" target="_blank" >公益基金会</a></dd>
						</dl>
						<dl class="col-links "><dt>特色服务</dt>
							<dd><a rel="nofollow" href="//www.mi.com/order/fcode" target="_blank" >F码通道</a></dd>
							<dd><a rel="nofollow" href="//www.mi.com/order/giftcode" target="_blank" >礼物码</a></dd>
							<dd><a rel="nofollow" href="//order.mi.com/service/imei" target="_blank">防伪查询</a></dd>
						</dl>
						
					</div>
					<div class="slogan ir">探索黑科技，小米为发烧而生</div>
					<div class="Copyright">
						<p>探索黑科技，小米为发烧而生  © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</p>
						
					</div>

				</div>



			</el-footer>
			<!-- 底栏容器END -->
		</el-container>
	</div>
</template>

<script>
	import {
		mapActions
	} from "vuex";
	import {
		mapGetters
	} from "vuex";

	export default {
		beforeUpdate() {
			this.activeIndex = this.$route.path;
		},
		data() {
			return {
				activeIndex: "", // 头部导航栏选中的标签
				search: "", // 搜索条件
				register: false, // 是否显示注册组件
				visible: false // 是否退出登录
			};
		},
		created() {
			// 获取浏览器localStorage，判断用户是否已经登录
			if (localStorage.getItem("user")) {
				// 如果已经登录，设置vuex登录状态
				this.setUser(JSON.parse(localStorage.getItem("user")));
			}
			// window.setTimeout(() => {
			//   this.$message({
			//     duration: 0,
			//     showClose: true,
			//     message: `
			//     <p>如果觉得这个项目还不错，</p>
			//     <p style="padding:10px 0">您可以给项目源代码仓库点Star支持一下，谢谢！</p>
			//     <p><a href="" target="_blank">Github传送门</a></p>`,
			//     dangerouslyUseHTMLString: true,
			//     type: "success"
			//   });
			// }, 1000 * 60);
		},
		computed: {
			...mapGetters(["getUser", "getNum"])
		},
		watch: {
			// 获取vuex的登录状态
			getUser: function(val) {
				if (val === "") {
					// 用户没有登录
					this.setShoppingCart([]);
				} else {
					// 用户已经登录,获取该用户的购物车信息
					this.$axios
						.post("/api/user/shoppingCart/getShoppingCart", {
							user_id: val.user_id
						})
						.then(res => {
							if (res.data.code === "001") {
								// 001 为成功, 更新vuex购物车状态
								this.setShoppingCart(res.data.shoppingCartData);
							} else {
								// 提示失败信息
								this.notifyError(res.data.msg);
							}
						})
						.catch(err => {
							return Promise.reject(err);
						});
				}
			}
		},
		methods: {
			...mapActions(["setUser", "setShowLogin", "setShoppingCart"]),
			login() {
				// 点击登录按钮, 通过更改vuex的showLogin值显示登录组件
				this.setShowLogin(true);
			},
			// 退出登录
			logout() {
				this.visible = false;
				// 清空本地登录信息
				localStorage.setItem("user", "");
				// 清空vuex登录信息
				this.setUser("");
				this.notifySucceed("成功退出登录");
			},
			// 接收注册子组件传过来的数据
			isRegister(val) {
				this.register = val;
			},
			// 点击搜索按钮
			searchClick() {
				if (this.search != "") {
					// 跳转到全部商品页面,并传递搜索条件
					this.$router.push({
						path: "/goods",
						query: {
							search: this.search
						}
					});
					this.search = "";
				}
			}
		}
	};
</script>

<style>
	/* 全局CSS */
	* {
		padding: 0;
		margin: 0;
		border: 0;
		list-style: none;
	}

	.el-menu-demo {
		height: 60px;
	}

	.topbar-nav {
		float: left;
	}

	.topbar-nav span {
		margin: 0 .3em;
		color: #626262 !important;
	}

	.topbar-nav a {
		color: #b0b0b0;
		line-height: 40px;
		display: inline-block;
		font-size: 12px;
	}

	.logo img {
		margin-top: 5px;
		width: 55px;
		height: 55px;
		background: #FF6700;
	}

	#app .el-header {
		padding: 0;
	}

	#app .el-main {
		min-height: 300px;
		padding: 20px 0;
	}

	#app .el-footer {
		padding: 0;
	}

	a,
	a:hover {
		text-decoration: none;
	}

	/* 全局CSS END */

	/* 顶部导航栏CSS */
	.topbar {
		height: 40px;
		background-color: #3d3d3d;
		margin-bottom: 20px;
	}

	.topbar .nav {
		width: 1225px;
		margin: 0 auto;
	}


	.topbar .nav ul {
		float: right;
	}

	.topbar .nav li {
		float: left;
		height: 40px;
		color: #b0b0b0;
		font-size: 14px;
		text-align: center;
		line-height: 40px;
		margin-left: 20px;
	}

	.topbar .nav .sep {
		color: #b0b0b0;
		font-size: 12px;
		margin: 0 5px;
	}

	.topbar .nav li .el-button {
		color: #b0b0b0;
	}

	.topbar .nav .el-button:hover {
		color: #fff;
	}

	.topbar .nav li a {
		color: #b0b0b0;
	}

	.topbar .nav a:hover {
		color: #fff;
	}

	.topbar .nav .shopCart {
		width: 120px;
		background: #424242;
	}

	.topbar .nav .shopCart:hover {
		background: #fff;
	}

	.topbar .nav .shopCart:hover a {
		color: #ff6700;
	}

	.topbar .nav .shopCart-full {
		width: 120px;
		background: #ff6700;
	}

	.topbar .nav .shopCart-full a {
		color: white;
	}

	/* 顶部导航栏CSS END */

	/* 顶栏容器CSS */
	.el-header .el-menu {
		max-width: 1225px;
		margin: 0 auto;
	}

	.el-header .logo {
		height: 60px;
		width: 189px;
		float: left;
		/* 		margin-right: 50px; */
	}

	.el-header .so {
		margin-top: 10px;
		width: 300px;
		float: right;
	}

	/* 顶栏容器CSS END */

	/* 底栏容器CSS */



	.footer {
		width: 100%;
		text-align: center;
		background: #FFFFFF;
		padding-bottom: 20px;
	}

	.footer-service {
		padding: 0 0 20px 0;
		border-bottom: 1px solid #E0E0E0;
	}

	.list-service {
		margin: 0;
		padding-bottom: 25px;
		list-style-type: none;
	}

	.list-service li {
		float: left;
		width: 19.8%;
		height: 25px;
		border-left: 1px solid #e0e0e0;
		font-size: 16px;
		line-height: 25px;
		text-align: center;

	}

	.list-service a {
		color: #616161;
		display: block;
	}

	.list-service a:hover {
		color: #ff6700
	}

	.list-service li:first-child {
		border-left: 0;
	}
	.footer-links {
		padding: 40px 0;
		width: 1225px;
		margin: 0 auto;
		height: 116px;
	}
	.footer-links .col-links {
		float: left;
		width: 16.6%;
		height: 112px;
		margin: 0;
	}
.footer-links .col-links dt {
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
}
.footer-links .col-links dd {
    margin: 10px 0 0;
    font-size: 12px;
}
.footer-links .col-links a {
    color: #757575;
}
.footer-links .col-links a:hover{
	color: #ff6700
}
.slogan {
	clear: both;
	margin: 30px auto 0;
	width: 100%;
	height: 19px;
	background: url(//cnbj1.fds.api.xiaomi.com/staticsfile/global/slogan2020.png) no-repeat center 0;
}
.ir {
    display: block;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
}
.Copyright {
padding: 20px 0 10px 0;
}
.Copyright p{
	color: #666;
}
	/* 底栏容器CSS END */
</style>

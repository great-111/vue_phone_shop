<!--
 * @Description: 首页组件
 * @Author: hahahah
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hahahah
 * @LastEditTime: 2020-02-27 13:36:12
 -->
<template>
	<div class="home" id="home" name="home">
		<el-backtop target=".page-component__scroll .el-scrollbar__wrap">444</el-backtop>
		<!-- 轮播图 -->
		<!--    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
          <img style="height:460px;" :src="$target + item.imgPath" :alt="item.describes" />
        </el-carousel-item>
      </el-carousel>
    </div> -->

		<el-carousel arrow="always" type="card" height="500" :interval="4000" loop>
			<el-carousel-item v-for="item in carouselimg" :key="item" class="carouseimg">
				<img :src="item.img">
			</el-carousel-item>
		</el-carousel>
		<!-- 轮播图END -->
		<div class="main-box">
			<div class="main">
				<!-- 手机商品展示区域 -->
				<div class="phone">
					<div class="box-hd">
						<div class="title">手机</div>
					</div>
					<div class="box-bd">
						<div class="promo-list">
							<router-link to>
								<img :src="$target +'public/imgs/phone/phone.png'" />
							</router-link>
						</div>
						<div class="list">
							<MyList :list="phoneList" :isMore="true"></MyList>
						</div>
					</div>
				</div>
				<!-- 手机商品展示区域END -->


				<!-- 手机电视特惠展览 -->
				<div class="home-banner-box"><a href="https://www.mi.com/a/h/9819.html" target="_blank" ><img alt="test" width="1226" height="120" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&amp;"></a></div>
				<!-- 手机电视特惠展览end -->

				<!-- 家电商品展示区域 -->
				<div class="appliance" id="promo-menu">
					<div class="box-hd">
						<div class="title">家电</div>
						<div class="more" id="more">
							<MyMenu :val="2" @fromChild="getChildMsg">
								<span slot="1">热门</span>
								<span slot="2">电视影音</span>
							</MyMenu>
						</div>
					</div>
					<div class="box-bd">
						<div class="promo-list">
							<ul>
								<li>
									<img :src="$target +'public/imgs/appliance/appliance-promo1.png'" />
								</li>
								<li>
									<img :src="$target +'public/imgs/appliance/appliance-promo2.png'" />
								</li>
							</ul>
						</div>
						<div class="list"><!--  -->
							<MyList :list="applianceList" :isMore="true"></MyList>
						</div>
					</div>
				</div>
				<!-- 家电商品展示区域END -->

				<!-- 饮水机展览 -->
				<div class="home-banner-box"><a href="https://www.mi.com/a/h/9819.html" target="_blank" ><img alt="test" width="1226" height="120" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96d4b979584c5609339c884be09d4fdb.jpg?thumb=1&w=1226&h=120&f=webp&q=90"></a></div>
				<!-- 饮水机展览end -->
				<!-- 搭配商品展示区域 -->
				<div class="accessory" id="promo-menu">
					<div class="box-hd">
						<div class="title">搭配</div>
						<div class="more" id="more">
							<MyMenu :val="3" @fromChild="getChildMsg2">
								<span slot="1">热门</span>
								<span slot="2">保护套</span>
								<span slot="3">充电器</span>
							</MyMenu>
						</div>
					</div>
					<div class="box-bd">
						<div class="promo-list">
							<ul>
								<li>
									<img :src="$target +'public/imgs/accessory/accessory-promo1.png'" alt />
								</li>
								<li>
									<img :src="$target +'public/imgs/accessory/accessory-promo2.png'" alt />
								</li>
							</ul>
						</div>
						<div class="list">
							<MyList :list="accessoryList" :isMore="true"></MyList>
						</div>
					</div>
				</div>
				<!-- 搭配商品展示区域END -->
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				carouselimg: [{
						img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/759c2c61198142fabf65d56761a809c7.jpg?w=2452&h=920"
					},
					{
						img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25025f1ebb643fcf7f35aae636aa630.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
					},
					{
						img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/87d23fcece4a80cb868e1d833786bb28.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
					},
					{
						img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
					},
					{
						img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c409123c70dc6fa2250916cb1cf2a4b.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
					},
				],
				carousel: "", // 轮播图数据
				phoneList: "", // 手机商品列表
				miTvList: "", // 小米电视商品列表
				applianceList: "", // 家电商品列表
				applianceHotList: "", //热门家电商品列表
				accessoryList: "", //搭配商品列表
				accessoryHotList: "", //热门搭配商品列表
				protectingShellList: "", // 保护套商品列表
				chargerList: "", //充电器商品列表
				applianceActive: 1, // 家电当前选中的商品分类
				accessoryActive: 1 // 搭配当前选中的商品分类
			};
		},
		watch: {
			// 家电当前选中的商品分类，响应不同的商品数据
			applianceActive: function(val) {
				// 页面初始化的时候把applianceHotList(热门家电商品列表)直接赋值给applianceList(家电商品列表)
				// 所以在切换商品列表时判断applianceHotList是否为空,为空则是第一次切换,把applianceList赋值给applianceHotList
				if (this.applianceHotList == "") {
					this.applianceHotList = this.applianceList;
				}
				if (val == 1) {
					// 1为热门商品
					this.applianceList = this.applianceHotList;
					return;
				}
				if (val == 2) {
					// 2为电视商品
					this.applianceList = this.miTvList;
					return;
				}
			},
			accessoryActive: function(val) {
				// 页面初始化的时候把accessoryHotList(热门搭配商品列表)直接赋值给accessoryList(搭配商品列表)
				// 所以在切换商品列表时判断accessoryHotList是否为空,为空则是第一次切换,把accessoryList赋值给accessoryHotList
				if (this.accessoryHotList == "") {
					this.accessoryHotList = this.accessoryList;
				}
				if (val == 1) {
					// 1为热门商品
					this.accessoryList = this.accessoryHotList;
					return;
				}
				if (val == 2) {
					// 2为保护套商品
					this.accessoryList = this.protectingShellList;
					return;
				}
				if (val == 3) {
					//3 为充电器商品
					this.accessoryList = this.chargerList;
					return;
				}
			}
		},
		created() {
			// 获取轮播图数据
			this.$axios
				.post("/api/resources/carousel", {})
				.then(res => {
					console.log(res)
					this.carousel = res.data.carousel;
				})
				.catch(err => {
					return Promise.reject(err);
				});
			// 获取各类商品数据
			this.getPromo("手机", "phoneList");
			this.getPromo("电视机", "miTvList");
			this.getPromo("保护套", "protectingShellList");
			this.getPromo("充电器", "chargerList");
			this.getPromo(
				["电视机", "空调", "洗衣机"],
				"applianceList",
				"/api/product/getHotProduct"
			);
			this.getPromo(
				["保护套", "保护膜", "充电器", "充电宝"],
				"accessoryList",
				"/api/product/getHotProduct"
			);
		},
		methods: {
			// 获取家电模块子组件传过来的数据
			getChildMsg(val) {
				this.applianceActive = val;
			},
			// 获取搭配模块子组件传过来的数据
			getChildMsg2(val) {
				this.accessoryActive = val;
			},
			// 获取各类商品数据方法封装
			getPromo(categoryName, val, api) {
				api = api != undefined ? api : "/api/product/getPromoProduct";
				this.$axios
					.post(api, {
						categoryName
					})
					.then(res => {
						this[val] = res.data.Product;
					})
					.catch(err => {
						return Promise.reject(err);
					});
			}
		}
	};
</script>
<style scoped>
	@import "../assets/css/index.css";
</style>

#### 页面

- [ ] 首页
- [ ] 商品页
- [ ] 订单页
- [ ] 个人中心
- [ ] 商品页

#### 接口

- [ ] 获取商品列表
- [ ] 登录注册
- [ ] 获取订单列表
- [ ] 获取订单状态
- [ ] 获取地址列表

#### 功能点

- [ ] 回收废品

#### git步骤

git branch	//查看分支

git switch dev	//切换dev分支

git status	//查看有没有更新的代码

git add . 

git commit -m ""

git push origin dev

git switch master

git merge dev

git push

git switch dev 

// 如果远程仓库有其他人更新了代码，需要先拉取最新代码，处理完冲突后再提交代码
#### git拉取远程仓库最新代码

git stash save "储存本地变更"	//先储存本地修改

git pull origin dev		//拉取远程仓库最新代码

git stash apply stash@{0}	//取出本地修改

// <<<与===之间的内容是本地修改，===与>>>之间的内容是别人的修改,处理完冲突提交上传即可。

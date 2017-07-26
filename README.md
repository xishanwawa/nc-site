# nc-site

Using react with webpack:

git clone git@github.com:xishanwawa/nc-site.git

cd nc-site/

npm install

如果npm安装比较慢，用淘宝镜像。
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

然后安装
cnpm install

启动项目
npm run dev

# 开发流程

1， 目录：routes，定义一个路由，路由引用一个业务组件contaniner

2   目录：contaniner，定义业务组件绑定actions输出的方法与reduser输入的状态（自定义UI组件在）

3， 目录：actions，定义方法触发action

4， 目录：reduser，定义reduser, 根据 action.type 改变数据

# 开发规范

组件命名大写开始

组件目录与组件命名同名

actionTypes 全部大写

reduser 根据action.type修改 

contaniner 绑定state用两个$   例如$$stateHome: state.home
# Gulp Learning


### 特点

- 基于Node.js
- 自动化打包
- 流操作，随着思路走


### 链接

- [官方网址](http://gulpjs.com)
- [官方插件](http://gulpjs.com/plugins)
- [官方API](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
- [学习资源](http://www.ydcss.com/archives/18) - 非常感谢，以下内容有借鉴
- [学习资源](http://www.bluesdream.com/blog/gulp-frontend-automation-plugins-instructions.html) - 非常感谢，总结很全面


### 安装

- 基于node，安装node+npm+cnpm环境
```bash
    
   === 安装操作，此处不表 ===========================

    node -v
    npm -v 
    cnpm -v
    
   ===========================
```

- 全局安装gulp
```bash
     
   === 安装操作，此处不表 ===========================

    gulp -v
    
   ===========================
```

- 在项目文件中生成package.json文件（json文件不写注释）
```bash
    
    cnpm init

```

-  项目内部安装gulp以及gulp plugins
```bash
    
    === 常用的gulp plugins ===========================
    
    cnpm install gulp --save-dev

    gulp                    // 全局安装gulp是为了执行gulp任务，项目安装gulp则是为了调用gulp插件
    
    gulp-less               // less编译
    gulp-cache              // cache，有利有弊
    gulp-uglify             // js => min
    htgulp-htmlmin          // html => min
    gulp-imagemin           // image => min.image
    gulp-minify-css         // css => min
    gulp-postcss            // 集合多个插件对css进行一次处理
    postcss-px2rem          // px => rem
    gulp-autoprefixer       // css prefixer

    gulp-notify             // 报错通知
    gulp-plumber            // 错误不影响程序执行

    run-sequence            // 执行队列
    abc-gulp-rev            // 公司插件-缓存文件并生成缓存清单，依赖于"abc-rev-path"，可用gulp自带"gulp-rev"
    abc-gulp-rev-collector  // 公司插件-缓存文件并集成进html，可用gulp自带"gulp-rev-collector"

    ===========================
```

- 新建gulpfiles.js文件，可参考gulpfiles.js
- 运行gulp，在全局安装gulp之后，cmd/PowerShell中可直接运行，sublime中安装gulp插件也可直接运行


### 结构

```bash
    
    === "+" 指文件夹，"-" 指文件 ===============================

    + gulp
      + 20171127-init                                       - 某一个项目
        + dist                                              - build之后的编译文件
        + rev                                               - 资源文件与哈希文件的映射
        + src                                               - 开发者的源码
      + node_modules                                        - 相关依赖，不被上传，此处仅仅是做文件结构说明
      - .gitignore                                          - 需要git忽略的上传文件，不被上传，此处仅仅是做文件结构说明
      - entrance.json                                       - 管理当前开发的项目入口
      - gulpfiles.js                                        - 运行gulp的核心文件
      - package.json                                        - 安装相关依赖以及项目简要说明的文件
      - README.md                                           - 说明文档
    
    ===========================
```


### 扩展

- Togor老师的公用gulpfiles.js思路，每个小型项目使用的gulpfiles.js操作类似甚至相同的时候可以公用在外部。
- **想考虑对于公用的js/css/images这些资源，如何实现有效公用且合理打包？暂不知如何操作**


### 项目

- 20171127-init: Gulp Demo

---
Created By Huooo At 2017.11.30 19:30:00
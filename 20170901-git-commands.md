# Git Commands
 - 好记性不如烂笔头。
 - 我也实在是受不了我自己的记忆力了。旨在记录与学习。
 - [L] -> local; [R] -> remote



### 初步
 - **克隆**： git clone https://github.com/Huooo/demo-collections.git

### 分支
 - **查看**
    ```ruby
    [L] git branch 
    [R] git branch -a
    ```
 - **创建**： [L] git branch master / [R] git push origin master
 - **切换/检出**： git checkout develop
 - **新建并切换**： git checkout -b develop
 - **删除**： [L] git branch -d develop / [L] git branch -D develop / [R] git push origin --delete develop

### 日志
 - **普通**： git log
 - **数量**： git log -10
 - **日期**： git log --after="2017-8-31" / git log --before="2017-8-31" / git log --after="2017-8-30" --before="2017-8-31"
 - **作者**： git log --author="Huooo" / git log --author="Huooo\|Cici Hu"
 - **提交信息**： git log --grep="README"
 - **提交内容**： git log -S "Git Commands"
 - **提交范围**： git log master..develop
 - **文件**： git log -- README.md
 - **合并与否**： git log --merges / git log --no-merges
 - **一行**： git log --oneline
 - **分支标签**： git log --decorate
 - **行数差异**： git log --stat
 - **详情差异**： git log -p 
 - **作者**： git shortlog
 - **图形**： git log --graph
 - **自定义**： git log --pretty=format:"%cn committed %h on %cd"



# Appreciate
 - 非常感谢[Zhongyi Tong](https://github.com/geeeeeeeeek)的[git-recipes](https://github.com/geeeeeeeeek/git-recipes)。

---
Created By Huooo At 2017.09.01 17:30:00



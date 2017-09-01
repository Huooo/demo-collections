# Git Commands
 - 好记性不如烂笔头。
 - 我也实在是受不了我自己的记忆力了。有些命令用的少，一旦使用的时候总是去查。
 - 旨在记录与学习。

### 初步
 - **克隆** - git clone https://github.com/Huooo/demo-collections.git

### 分支
 - **查看** 
    - [*local*] git branch 
    - [*remote*] git branch -a
 - **创建** 
    - [*local*] git branch master 
    - [*remote*] git push origin master
 - **切换/检出** 
    - git checkout develop
 - **新建并切换** 
    - git checkout -b develop
 - **删除** 
    - [*local*] git branch -d develop 
    - [*local*] git branch -D develop 
    - [*remote*] git push origin --delete develop

### 日志
 - **普通** 
    - git log
 - **数量** 
    - git log -10
 - **一行** 
    - git log --oneline
 - **分支标签** 
    - git log --decorate



---
Created By Huooo At 2017.09.01 17:30:00



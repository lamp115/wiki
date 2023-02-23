# 系统总体架构
::: tip 
考虑以后系统要满足可快速提供服务，决定采用SaaS系统方案！
:::

## 基础业务流程图
![](http://doc.qinchao.site/server/index.php?s=/api/attachment/visitFile&sign=63b616214c4c5ffbc72984ac0d996be6)

## 技术架构图
![](http://doc.qinchao.site/server/index.php?s=/api/attachment/visitFile&sign=cfed371b4a81baa43c5c8f73444f7f3d)

## 数据存储方案
考虑到个人运维能力有限，采用共享数据库, 独立Schema！（MySql的不同schema）
独立数据库：即一个租户一个数据库 (Database)，这种方案的用户数据隔离级别较高，安全性较好。

优点：
- ➢ 为不同的租户提供独立的数据库，有助于简化数据模型的扩展设计，满足不同租户的独特需求；
- ➢ 如果出现故障，恢复数据相对比较简单。

![](http://doc.qinchao.site/server/index.php?s=/api/attachment/visitFile&sign=07d47300ae0a763195032d92b1c07784)

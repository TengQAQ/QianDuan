# MYSQL

## 数据库概念

DB：存储数据的仓库（容器）。它保存了一系列有组织的数据

DBMS：数据库管理系统。数据库是通过DBMS创建和操作的容器。Mysql、Oracal、DB2、SqlServer

SQL：结构化查询语言。专门用来与数据库通讯的语言，几乎所有的DBMS都支持SQL

### 常见命令

基础命令

```sql
show databases;
use 库名;
show tables;
show tables from 库名;
desc 表名;
```

### 常见函数

```text
1. 字符函数
concat 拼接
substr 截取字符串
upper/lower 转换大小写
```

## DQL语言

### 分组查询

查询结果数据集只能是**分组函数和分组筛选条件**

关键字：Group by				having

```sql
# WHERE 后面跟的只能是查询表中包含的列，对于分组函数获取的列之后使用having进行分组后筛选
SELECT COUNT(*) 员工个数, department_id FROM employees 
GROUP BY department_id
HAVING 员工个数>2;
# 查询每个部门每个工种平均工资
SELECT AVG(salary),job_id,department_id FROM employees 
GROUP BY department_id,job_id;
```



总结：分组查询筛选分为两类，能用分组前筛选尽量用分组前筛选

| 数据源       |            | 关键字 | 位置       |
| ------------ | ---------- | ------ | ---------- |
| 查询的原始表 | 分组前筛选 | where  | group by前 |
| 分组后数据集 | 分组后筛选 | having | group by后 |

### 连接查询(多表查询)

当查询的字段来自多个表时，就需要使用连接查询

#### 内连接

查询多表交集部分

|            | 格式                                              |
| ---------- | ------------------------------------------------- |
| 隐式内连接 | where 连接条件 AND 筛选条件                       |
| 显示内连接 | 表1 【inner】 join 表2 on 连接条件 where 筛选条件 |

多表查询推荐使用显示内连接，连接条件和筛选条件分离，可读性更强

```sql
# 查询员工领导的名字 使用where消除无用数据，解决笛卡尔积问题 （隐式内连接 sql92）
SELECT
	e1.employee_id,
	e1.last_name,
	e2.last_name 领导 
FROM
	employees e1,
	( SELECT employee_id, last_name, manager_id FROM employees ) e2 
WHERE
	e2.manager_id = e1.employee_id;
# 显示内连接 sql99
SELECT
	e1.employee_id,
	e1.last_name,
	e2.last_name 领导 
FROM
	employees e1 JOIN employees e2 ON e2.manager_id = e1.employee_id;
# 查询名字中包含e的员工名和工种名
SELECT e.last_name,e.job_id,j.job_title 
FROM employees e JOIN jobs j on e.job_id=j.job_id
WHERE last_name LIKE "%e%";
```

#### 外连接

查询一个表所有记录和其他表打交集部分

|          | 语法                               | 结果                         |
| -------- | ---------------------------------- | ---------------------------- |
| 左外连接 | 表1 left [outer] join 表2 on 条件  | 左表所有数据及和右表交集部分 |
| 右外连接 | 表1 right [outer] join 表2 on 条件 | 右表所有数据及和左表交集部分 |

### 子查询

sql语句中嵌套查询语句，称嵌套的查询为内查询或子查询

子查询结果集为单行单列（看作一个值）可用简单的比较符号判断

子查询结果集为单列多行（看作一个值集合）可以用in判断

| 子查询结果集类型 | 看作 | 比较方法                   |
| ---------------- | ---- | -------------------------- |
| **单行单列**     | 值   | > = < != ...               |
| **多行单列**     | 集合 | **in**、any                |
| 多行多列         | 表   | 当成表使用，参考自连接查询 |

**不同位置子查询要求**

1. 放在select后的子查询，**作为查询列，要求子查询结果集是单行单列**
2. 放在from后面的是作为虚拟表，需要对其起别名使用
3. 放在where/on后面 为筛选条件
4. 放在Exists 后面，相关查询。Exists语法 Exists(查询sql) sql有结果返回1，没有结果返回0

```sql
# 查询工资比Abel高的员工信息
SELECT * FROM employees 
WHERE salary > (SELECT salary FROM employees WHERE last_name='Abel');
# 查询每个部门信息的及员工个数 。select 后面的子查询子只支持单行单列的结果集（标列子查询）
SELECT d.*,(SELECT COUNT(*) FROM employees e WHERE e.department_id= d.department_id) 员工个数 FROM departments d;
```

### 分页查询

语法：limit offset,size  offset显示条目的起始索引0开始，size显示多少条

> 这里就很扯了，sql语法中索引是1开始，唯有分页这里索引是从0开始又和java一样了

```sql
select * from employees limit 0,5;
```

### 联合查询

关键词 ：union ；将多条查询语句的结果合并

特点：涉及到的联合查询查询列必须一致

## DML语言

操作表中数据

### 插入

```sql
# 支持批量插入多行
insert into 表名（列名...）
values（值1，值2，值3）;

insert into 表明 set 列名=值1,列名=值2,列名=值3;
```

### 修改

```sql
update 表名 set 列=值,列=值 where 筛选条件;
```

### 删除 

```sql
# delete
# 单表删除
delete from 表名 where 筛选条件;
# 多表删除 连接
delete 表1,表2 from 表1,表2 where 连接条件 and 筛选条件;
delete 表1,表2 from 表1 join 表2 on 连接条件 where 筛选条件；
# truncate
truncate table 表名;
```

两种删除方式区别

1. truncate效率较高
2. 自增长列的断点起始位置，truncate重置断点，delete续接断点
3. truncate没有返回值，delete有返回值
4. truncate删除不能回滚，delete可以回滚

## DDL语言

对库表的操作

### 常见约束

```sql
NOT NULL 非空
DEFAULT 默认值
PRIMARY KEY 主键
UNIQUE 唯一
CHECK 检查约束（MYSQL不支持，语法兼容）
FOREIGN 外键 用于限制两个表的关系(从表添加来自主表的外键约束表示从表的值来至主表的内容) 从表设置外键，主表的关联键必须是唯一键
```



### 库的管理

```sql
# 创建
CREATE DATABASE IF NOT EXIT 库名;
# 更改字符集
ALTER DATABASE 库名 CHARACTER SET 字符集;
# 删除
DROP DATABASE IF NOT EXIT 库名;
```

### 表的管理

```sql
# 创建 create
CREATE TABLE IF NOT EXISTS 表名(
	字段（列） 字段类型 约束,
	...
);

# 修改 alter
语法：ALTER TABLE 表名 ADD|MODIFY|DROP|CHANGE COLUMN 列名【列类型】; 添加/修改/删除

# 删除
DROP TABLE [IF EXISTS] 表名;

# 复制
# 仅结构
create table 表名 LIKE 目标表;
# 结构+ 数据
create table 表名 select * from 目标表
```

## 数据类型

### 整型

### 浮点型

浮点型：float、double 定点型：dec（M，D）、decimal（M，D）

(M,D)：M表示保留位数，D小数点后保留位数

### 字符型

char、varchar

### 枚举型

常用于状态字段

ENUM（'a','b','c'）;

### 日期型

DATATIME（和插入数据时的服务器的时区关联）、TIMESTAMP（和查询服务器的时区关联）

## TCL语言

### 事务的ACID属性

1. 原子性（Atomicity）：事务不可分割，最小单位，要么都执行，要么都回滚
2. 一致性（Consistency）：数据操作前后状态一致
3. 隔离型（Isolation）：多个事务之间操作同个数据时，不受其他事务干扰
4. 持久性（Durability）：事务被提交，数据持久化到本地

	1、开启事务
	取消自动提交事务的功能
	set autocomimit=0;
	[start transaction;]
	2、编写事务的一组逻辑操作单元（多条sql语句）
	
	3、提交事务或回滚事务
	commit;  rollback;
### 事务隔离级别

事务并发可能会发生的问题：脏读，不可重复读，幻读

避免事务并发导致的问题：设置隔离级别

```txt
1、READ UNCOMMITTED
2、READ COMMITTED 可以避免脏读
3、REPEATABLE READ 可以避免脏读、不可重复读和一部分幻读
4、SERIALIZABLE可以避免脏读、不可重复读和幻读
```

## 视图

> 虚拟表，当成普通表使用

|      | 使用方式           | 占用物理空间          |
| ---- | ------------------ | --------------------- |
| 视图 | 相同，一般只做查询 | 不占用，仅保存sql逻辑 |
| 表   | 相同               | 占用                  |

### 视图管理

```sql
# 创建
create view 视图名 as 查询语句;
# 使用视图CURD（同表完全相同）
select * from 视图名 where 筛选条件 
# 更新视图sql逻辑
create or replace view 视图名 as 查询语句;
alter view 视图名 as 查询语句;
# 删除视图
drop view 视图1,视图2,...;
```

> 视图做查询需求，大多数情况下不对视图做更新数据（视图大多数情况也不支持更新），防止和原始表数据冲突

总结：

	1. 提高了sql语句的重用性
 	2. 安全性，用户只能查询和修改能看到的数据
 	3. 逻辑上的独立性，屏蔽了真实表的结构带来的影响

## 变量的介绍

### 全局变量

```sql
# 查看所有全局变量
SHOW GLOBAL VARIABLES;
# 查看部分全局变量
SHOW GLOBAL VARIABLES LIKE '%char%';
# 查看指定的全局变量值
SELECT @@global.autocommit;
SELECT @@autocommit;
# 赋值
SET @@global.autocommit=0;
```



服务器重启会将所有全局变量初始化。可以跨连接（会话），不能跨重启。

### 会话变量

仅仅对当前连接（会话有效）

```sql
# 查看会话变量 【】可省略的意思
SHOW [SESSION] VARIABLES;
# 查看某个指定会话变量
SELECT @@session.tx_isolation;
SELECT @@tx_isolation;
# 赋值
SET @@[session.]tx_isolation='read-uncommitted';
SET SESSION tx_isolation='read-committed';
```

## 自定义变量

1. 用户变量：连接有效，同会话变量

```sql
# 声明初始化
SET @用户变量名=值;
SET @用户变量名:=值;
SELECT @用户变量名:=值;
# 赋值
# 方式一同声明初始化
# 方式二 查询结果必须为常量
SELECT 字段 INTO 变量名 FROM 表;
# 查询
SELECT @用户变量名;
```

2. 局部变量：仅在begin end 代码块中有效且放在第一句话

```sql
# 声明
DECLARE 变量名 类型;
DECLARE 变量名 类型 DEFAUIT 值;
# 赋值 同用户变量
```

|          | 作用域       | 区别                                                   |
| -------- | ------------ | ------------------------------------------------------ |
| 用户变量 | 当前会话连接 | 使用位置不同：会话任何地方；声明方式：SET、SELECT      |
| 局部变量 | begin end中  | 使用位置不同：begin end中的第一句话；声明方式：DECLARE |

## 存储过程和函数

类似java方法

### 储存过程

一组预先编译好的SQL语句集合，批量处理语句；

好处：

1. 提高代码重用性
2. 简化操作
3. 减少编译次数和数据库连接次数，提高效率

```
# 创建
CREATE PROCEDURE 储存过程名(参数列表)
BEGIN
	储存过程体(一组合法的SQL语句)
END;
参数列表包含：参数模式 参数名 参数类型
eg: IN stuname VARCHAR(20)
参数模式：IN：参数需要调用方传入值、OUT：参数可以作为返回值、INOUT
储存过程只有几句话，可以省略BEGIN END
储存过程体中的SQL语句的结尾要求必须加分号
储存过程结尾使用DELIMITER重新设置 如 DELIMITER $
# 调用
CALL 储存过程名（实参列表）
# 删除
drop procedure 存储过程名;
# 查看存储过程
show create procedure 存储过程名;
```

### 函数

|          | 区别                  | 使用                       |
| -------- | --------------------- | -------------------------- |
| 存储过程 | 可以有0个或多个返回值 | 多用于批量插入，更新       |
| 函数     | 有且只有一个返回值    | 适合处理数据后返回一个结果 |

```sql
# 创建
CREATE FUNCTION 函数名（参数列表）RETURNS 返回类型
begin
		函数体
end
参数列表：参数名 参数类型
函数体：必须要有返回值，即return
# 调用
SELECT 函数名（参数列表）;		参考mysql自带函数使用，如max，min，concat
# 查看
show create funcation 函数名;
```

## 流程控制结构

顺序结构：从上往下依次执行

分支结构：从多条路径中选择一条路径执行

```sql
# if函数
IF（表达式1，表达式2 ，表达式3） 如果表达式1成立，返回表达式2的值，否则返回表达式3的值
# case函数
case 变量｜表达式｜字段
WHEN 判断的值 THEN 返回内容;
WHEN 判断的值 THEN 返回内容;
...
ELSE 返回内容;
END case;
-------------------------
case 
WHEN 判断条件 THEN 返回内容;
...
ELSE 返回内容;
END case;
# if结构
if 条件1 then 语句1;
elseif 条件2 then 语句2;
...
end if;
```

循环结构：满足一定条件下，重复执行一段代码


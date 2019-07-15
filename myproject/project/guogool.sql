#设置文件编码
SET NAMES UTF8;
#丢弃并创建数据库设置编码
DROP DATABASE IF EXISTS guogool;
CREATE DATABASE guogool CHARSET=UTF8;
#进入数据库
USE guogool;

SET FOREIGN_KEY_CHECKS=0;
/**创建产品详情表**/
DROP TABLE IF EXISTS `guogool_product_details`;
CREATE TABLE `guogool_product_details` (
  `lid` int(11) PRIMARY KEY auto_increment,
  `lname` varchar(32) ,				#商品名称
  `titles` varchar(128),				#主标题
  
  `price` decimal(10,2),				#价格
  `img`	VARCHAR(128),						#图片路径
  `spec` VARCHAR(64),						#规格
  `sold_count` INT,						#已售出的数量
  `goods` VARCHAR(64)						#商品品类
  
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/**商品图片**/
CREATE TABLE `guogool_pics`(
 `pid` int(11) auto_increment PRIMARY KEY,		
  `lid` int(11),   #商品编号					
  `sm` varchar(128) ,	#小图片路径			
  `md` varchar(128) ,	#中图片路径			
  `lg` varchar(128) #大图片路径
) ENGINE=InnoDB AUTO_INCREMENT=297 DEFAULT CHARSET=utf8;


#插入产品详情数据
INSERT INTO `guogool_product_details` VALUES ('1', 'fzgb', '方砖果杯：明星主打', '259.00','images/Goodsinfo2imgs/Goods_img5.jpg', '明星主打', '1', '海南玉菇蜜瓜');
INSERT INTO `guogool_product_details` VALUES ('2', 'fzgb', '方砖果杯：明星主打', '15.00','images/Goodsinfo2imgs/Goods_img5.jpg', '明星主打', '1', '海南玉菇蜜瓜');
INSERT INTO `guogool_product_details` VALUES ('3', 'efgh', '二分果盒：明星主打', '16.00', 'images/Goodsinfo2imgs/Goods_img7.jpg', '明星主打', '1','海南玉菇蜜瓜+海南黑美人西瓜');
INSERT INTO `guogool_product_details` VALUES ('4', 'bzgh', '标准果杯：明星主打', '12.00', 'images/Goodsinfo2imgs/Goods_img8.jpg', '明星主打', '1','海南玉菇蜜瓜+海南黑美人西瓜');
INSERT INTO `guogool_product_details` VALUES ('5', 'zsgb', '钻石果杯：季节限定', '12.00', 'images/Goodsinfo2imgs/Goods_img9.jpg', '明星主打', '1','海南玉菇蜜瓜+海南黑美人西瓜');
INSERT INTO `guogool_product_details` VALUES ('6', 'llgh', '能量果花', '299.00', 'images/Goodsinfo2imgs/Goods_img10.jpg', '明星主打', '1','海南玉菇蜜瓜+海南黑美人西瓜');

#插入主图片数据
INSERT INTO `guogool_pics` VALUES ('1','1', 'images/Goodsinfoimgs/lg/goods_img1.jpg', 'images/Goodsinfoimgs/lg/goods_img1.jpg', 'images/Goodsinfoimgs/lg/goods_img1.jpg');
INSERT INTO `guogool_pics` VALUES ('2','1', 'images/Goodsinfoimgs/lg/goods_img2.jpg', 'images/Goodsinfoimgs/lg/goods_img2.jpg', 'images/Goodsinfoimgs/lg/goods_img2.jpg');
INSERT INTO `guogool_pics` VALUES ('3','1', 'images/Goodsinfoimgs/lg/goods_img3.jpg', 'images/Goodsinfoimgs/lg/goods_img3.jpg', 'images/Goodsinfoimgs/lg/goods_img3.jpg');

INSERT INTO `guogool_pics` VALUES ('4','2', 'images/Goodsinfoimgs/lg/goods_img8.jpg', 'images/Goodsinfoimgs/lg/goods_img8.jpg', 'images/Goodsinfoimgs/lg/goods_img8.jpg');
INSERT INTO `guogool_pics` VALUES ('5','2', 'images/Goodsinfoimgs/lg/goods_img9.jpg', 'images/Goodsinfoimgs/lg/goods_img9.jpg', 'images/Goodsinfoimgs/lg/goods_img9.jpg');
INSERT INTO `guogool_pics` VALUES ('6','2','images/Goodsinfoimgs/lg/goods_img10.jpg', 'images/Goodsinfoimgs/lg/goods_img10.jpg', 'images/Goodsinfoimgs/lg/goods_img10.jpg');
INSERT INTO `guogool_pics` VALUES ('7','2', 'images/Goodsinfoimgs/lg/goods_img11.jpg', 'images/Goodsinfoimgs/lg/goods_img11.jpg', 'images/Goodsinfoimgs/lg/goods_img11.jpg');

INSERT INTO `guogool_pics` VALUES ('8','3', 'images/Goodsinfoimgs/lg/goods_img21.jpg', 'images/Goodsinfoimgs/lg/goods_img21.jpg', 'images/Goodsinfoimgs/lg/goods_img21.jpg');
INSERT INTO `guogool_pics` VALUES ('9','3', 'images/Goodsinfoimgs/lg/goods_img22.jpg', 'images/Goodsinfoimgs/lg/goods_img22.jpg', 'images/Goodsinfoimgs/lg/goods_img22.jpg');
INSERT INTO `guogool_pics` VALUES ('10','3','images/Goodsinfoimgs/lg/goods_img23.jpg', 'images/Goodsinfoimgs/lg/goods_img23.jpg', 'images/Goodsinfoimgs/lg/goods_img23.jpg');
INSERT INTO `guogool_pics` VALUES ('11','3', 'images/Goodsinfoimgs/lg/goods_img20.jpg', 'images/Goodsinfoimgs/lg/goods_img20.jpg', 'images/Goodsinfoimgs/lg/goods_img20.jpg');

/**用户信息表**/
CREATE TABLE `guogool_login`(
 `id` int(11) auto_increment PRIMARY KEY,		
  `uname` VARCHAR(25),  				
  `upwd` VARCHAR(32)
) ENGINE=InnoDB AUTO_INCREMENT=297 DEFAULT CHARSET=utf8;
INSERT INTO `guogool_login` VALUES(null,'tom',md5('123'));
INSERT INTO `guogool_login` VALUES(null,'jerry',md5('123'));
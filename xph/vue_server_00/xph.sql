SET NAMES UTF8;
DROP DATABASE IF EXISTS xph;
CREATE DATABASE xph CHARSET=UTF8;
USE xph;
#商品页面
CREATE TABLE xph_apple(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img  VARCHAR(255),
 title1 VARCHAR(32),
 title2 VARCHAR(32),
 title3 VARCHAR(32),    
 title4 VARCHAR(32),                                  
 price DECIMAL(10,2)
 
);
INSERT INTO xph_apple  VALUES(null,'apple.jpg','有点含羞的苹果','品质水果','感恩节回馈价','限时特惠','1.6');
INSERT INTO xph_apple  VALUES(null,'lenmon.jpg','四川安宁柠檬','品质水果','感恩节回馈价','限时特惠','1.7');
INSERT INTO xph_apple  VALUES(null,'mango.jpg','金蜜香芒果','品质水果','感恩节回馈价','限时特惠','1.8');

CREATE TABLE xph_meat(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img  VARCHAR(255),
 title1 VARCHAR(32),
 title2 VARCHAR(32),
 title3 VARCHAR(32),    
 title4 VARCHAR(32),                                                                   
 price DECIMAL(10,2)
 
);
INSERT INTO xph_meat  VALUES(null,'lj.jpg','泰森冰鲜鸡里脊','品质肉禽','感恩节回馈价','限时特惠','1.40');
INSERT INTO xph_meat  VALUES(null,'njr.jpg','巴西牛腱肉','品质肉禽','感恩节回馈价','限时特惠','1.50');
INSERT INTO xph_meat  VALUES(null,'lg.jpg','崇明生态老鸽','品质肉禽','感恩节回馈价','限时特惠','1.00');

CREATE TABLE xph_fresh(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img  VARCHAR(255),
 title1 VARCHAR(32),
 title2 VARCHAR(32),
 title3 VARCHAR(32),    
 title4 VARCHAR(32),                                                                   
 price DECIMAL(10,2)
 
);
INSERT INTO xph_fresh  VALUES(null,'yy.jpg','精选银鱼','品质海鲜','感恩节回馈价','限时特惠','1.10');
INSERT INTO xph_fresh  VALUES(null,'sh.jpg','鲜活法国月亮生蚝','品质海鲜','感恩节回馈价','限时特惠','1.20');
INSERT INTO xph_fresh  VALUES(null,'swy.jpg','鲜冻三文鱼块','品质海鲜','感恩节回馈价','限时特惠','1.30');

CREATE TABLE xph_product(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img  VARCHAR(255),
 title1 VARCHAR(32), 
 num INT,                                                                  
 price DECIMAL(10,2)
);
INSERT INTO xph_product  VALUES(null,'yy.jpg','精选银鱼','2','1.10');
INSERT INTO xph_product  VALUES(null,'sh.jpg','鲜活法国生蚝','8','1.20');
INSERT INTO xph_product  VALUES(null,'swy.jpg','鲜冻三文鱼块','1','1.30');
INSERT INTO xph_product  VALUES(null,'lj.jpg','泰森冰鲜鸡里脊','1','1.40');
INSERT INTO xph_product  VALUES(null,'njr.jpg','巴西牛腱肉','4','1.40');
INSERT INTO xph_product  VALUES(null,'apple.jpg','有点害羞的苹果','1','1.60');
INSERT INTO xph_product  VALUES(null,'lenmon.jpg','四川安岳柠檬','0','1.70');
INSERT INTO xph_product  VALUES(null,'mango.jpg','金蜜香芒果','0','1.80');
INSERT INTO xph_product  VALUES(null,'lg.jpg','崇明生态老鸽','1','1.00');

CREATE TABLE xph_product2(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img  VARCHAR(255),
 title1 VARCHAR(32), 
 num INT,                                     
 price DECIMAL(10,2),
 count INT
);
INSERT INTO xph_product2  VALUES(null,'sh.jpg','鲜活法国生蚝','8','1.20','222');
INSERT INTO xph_product2  VALUES(null,'lj.jpg','泰森冰鲜鸡里脊','1','1.40','333');
INSERT INTO xph_product2  VALUES(null,'yy.jpg','精选银鱼','2','1.10','333');
INSERT INTO xph_product2  VALUES(null,'njr.jpg','巴西牛腱肉','4','1.40','444');
INSERT INTO xph_product2  VALUES(null,'swy.jpg','鲜冻三文鱼块','1','1.30','555');
INSERT INTO xph_product2  VALUES(null,'apple.jpg','有点害羞的苹果','1','1.60','666');
INSERT INTO xph_product2  VALUES(null,'lenmon.jpg','四川安岳柠檬','0','1.70','777');
INSERT INTO xph_product2  VALUES(null,'mango.jpg','金蜜香芒果','0','1.80','788');
INSERT INTO xph_product2 VALUES(null,'lg.jpg','崇明生态老鸽','1','1.00','999');
CREATE TABLE xph_login(
 id INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(25),
 upass VARCHAR(32),
 utel VARCHAR(16)
);
INSERT INTO xph_login VALUES(null,'xiaohuang',123456,'15237872343');
INSERT INTO xph_login VALUES(null,'lily',666666,'15200836903');

CREATE TABLE xph_proimg(
    id INT,
    img  VARCHAR(255)
);
INSERT INTO xph_proimg VALUES(1,'yy.jpg');
INSERT INTO xph_proimg VALUES(1,'yy1.jpg');
INSERT INTO xph_proimg VALUES(1,'yy3.jpg');
INSERT INTO xph_proimg VALUES(2,'sh.jpg');
INSERT INTO xph_proimg VALUES(2,'sh2.jpg');
INSERT INTO xph_proimg VALUES(2,'sh3.jpg');
INSERT INTO xph_proimg VALUES(3,'swy.jpg');
INSERT INTO xph_proimg VALUES(3,'swy2.jpg');
INSERT INTO xph_proimg VALUES(3,'swy3.jpg');
CREATE TABLE xph_proimg2(
    id INT,
    img  VARCHAR(255)
);
INSERT INTO xph_proimg2 VALUES(1,'yy5.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy6.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy7.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy8.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy9.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy10.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy11.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy12.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy13.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy14.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy15.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy16.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy17.gif');
INSERT INTO xph_proimg2 VALUES(1,'yy18.gif');
INSERT INTO xph_proimg2 VALUES(2,'sh4.jpg');
INSERT INTO xph_proimg2 VALUES(2,'sh5.jpg');
INSERT INTO xph_proimg2 VALUES(2,'sh6.jpg');
INSERT INTO xph_proimg2 VALUES(2,'sh7.jpg');
INSERT INTO xph_proimg2 VALUES(2,'sh8.jpg');
INSERT INTO xph_proimg2 VALUES(2,'7.jpg');
INSERT INTO xph_proimg2 VALUES(2,'8.jpg');
INSERT INTO xph_proimg2 VALUES(2,'9.jpg');
INSERT INTO xph_proimg2 VALUES(3,'swy4.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy5.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy6.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy7.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy8.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy9.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy10.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy11.gif');
INSERT INTO xph_proimg2 VALUES(3,'swy12.gif');
INSERT INTO xph_proimg2 VALUES(3,'7.jpg');
INSERT INTO xph_proimg2 VALUES(3,'8.jpg');
INSERT INTO xph_proimg2 VALUES(3,'9.jpg');





CREATE TABLE xph_proinfo(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img  VARCHAR(255),
 title1 VARCHAR(32), 
 num INT,                                     
 price DECIMAL(10,2),
 count INT
);
INSERT INTO xph_proinfo  VALUES(null,'yy.jpg','精选银鱼','2','1.10','999');
INSERT INTO xph_proinfo  VALUES(null,'sh.jpg','鲜活法国生蚝','8','1.20','999');
INSERT INTO xph_proinfo  VALUES(null,'swy.jpg','鲜冻三文鱼块','1','1.30','99');
INSERT INTO xph_proinfo  VALUES(null,'lj.jpg','泰森冰鲜鸡里脊','1','1.40','999');
INSERT INTO xph_proinfo  VALUES(null,'njr.jpg','巴西牛腱肉','4','1.40','999');
INSERT INTO xph_proinfo  VALUES(null,'apple.jpg','有点害羞的苹果','1','1.60','99');
INSERT INTO xph_proinfo  VALUES(null,'lenmon.jpg','四川安岳柠檬','0','1.70','99');
INSERT INTO xph_proinfo  VALUES(null,'mango.jpg','金蜜香芒果','0','1.80','99');
INSERT INTO xph_proinfo  VALUES(null,'lg.jpg','崇明生态老鸽','1','1.00','99');

CREATE TABLE xph_cart(
 id INT,
 img  VARCHAR(255),
 title1 VARCHAR(32), 
                                                                  
 price DECIMAL(10,2),
 count  INT
);

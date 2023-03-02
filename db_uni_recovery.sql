/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : db_uni_recovery

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 02/03/2023 14:31:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_activity
-- ----------------------------
DROP TABLE IF EXISTS `tb_activity`;
CREATE TABLE `tb_activity`  (
  `activity_id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `count` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`activity_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_activity
-- ----------------------------
INSERT INTO `tb_activity` VALUES (1, 'http://39.107.241.37:2020/static/images/activity/activity1.jpg', '植树造林', 123);
INSERT INTO `tb_activity` VALUES (2, 'http://39.107.241.37:2020/static/images/activity/activity2.jpg', '低碳生活节能减排', 55);
INSERT INTO `tb_activity` VALUES (3, 'http://39.107.241.37:2020/static/images/activity/activity3.jpg', '垃圾分类，我在行动', 44);
INSERT INTO `tb_activity` VALUES (4, 'http://39.107.241.37:2020/static/images/activity/activity4.jpg', '世界海洋日，一起关注海洋问题', 63);
INSERT INTO `tb_activity` VALUES (5, 'http://39.107.241.37:2020/static/images/activity/activity5.jpg', '公益跑 助力环保', 234);

-- ----------------------------
-- Table structure for tb_address
-- ----------------------------
DROP TABLE IF EXISTS `tb_address`;
CREATE TABLE `tb_address`  (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_phoneNumber` bigint(20) NULL DEFAULT NULL,
  `address_city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_information` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_default` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`address_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_address
-- ----------------------------
INSERT INTO `tb_address` VALUES (1, '1', '自己', 12345612312, '北京市海定区', '古北一号2栋', '1');
INSERT INTO `tb_address` VALUES (2, '1', '妈咪', 13467834563, '上海市安福路', '3号楼菜鸟驿站', '0');
INSERT INTO `tb_address` VALUES (3, '1', '汤臣一品业主', 2, '北京市-市辖区-西城区', '2', '0');
INSERT INTO `tb_address` VALUES (7, '1', '66', 6, '北京市-市辖区-西城区', '23', '0');
INSERT INTO `tb_address` VALUES (8, '1', '77', 7, '北京市-市辖区-西城区', '277', '0');
INSERT INTO `tb_address` VALUES (9, '1', 'ttw', 22, '北京市-市辖区-西城区', '221', '0');
INSERT INTO `tb_address` VALUES (10, '1', '213', 213, '北京市-市辖区-西城区', '2', '0');
INSERT INTO `tb_address` VALUES (11, '1', 'gg', 1, '北京市-市辖区-西城区', '2', '0');
INSERT INTO `tb_address` VALUES (12, '6', '00', 12345678912, '安徽省-滁州市-琅琊区', '二位各个地方合同', '0');

-- ----------------------------
-- Table structure for tb_business
-- ----------------------------
DROP TABLE IF EXISTS `tb_business`;
CREATE TABLE `tb_business`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cellphone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '密码',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '头像',
  `mername` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商家名字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_business
-- ----------------------------
INSERT INTO `tb_business` VALUES (1, 'zhang', '123', NULL, '00');

-- ----------------------------
-- Table structure for tb_goods
-- ----------------------------
DROP TABLE IF EXISTS `tb_goods`;
CREATE TABLE `tb_goods`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cateName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cateUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `catePrice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_goods
-- ----------------------------
INSERT INTO `tb_goods` VALUES (1, '可爱耳机', 'http://39.107.241.37:2020/static/advertise2.jpg', '200');
INSERT INTO `tb_goods` VALUES (2, '防疫口罩', 'http://39.107.241.37:2020/static/mask.jpg_.webp', '199');
INSERT INTO `tb_goods` VALUES (3, '环保购物袋', 'http://39.107.241.37:2020/static/bags.jpg', '19.9');
INSERT INTO `tb_goods` VALUES (4, '小夜灯', 'http://39.107.241.37:2020/static/night-light.jpg', '100');
INSERT INTO `tb_goods` VALUES (5, '印花抽纸', 'http://39.107.241.37:2020/static/tissue.jpg', '120');
INSERT INTO `tb_goods` VALUES (6, '水杯', 'http://39.107.241.37:2020/static/cup.jpg', '39');

-- ----------------------------
-- Table structure for tb_item
-- ----------------------------
DROP TABLE IF EXISTS `tb_item`;
CREATE TABLE `tb_item`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `background` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_item
-- ----------------------------
INSERT INTO `tb_item` VALUES (1, '纸品类', 'http://39.107.241.37:2020/static/images/avatar/box.jpg');
INSERT INTO `tb_item` VALUES (2, '衣物类', 'http://39.107.241.37:2020/static/images/avatar/cloth.jpg');
INSERT INTO `tb_item` VALUES (3, '塑料类', 'http://39.107.241.37:2020/static/images/avatar/plastic.jpg');
INSERT INTO `tb_item` VALUES (4, '金属类', 'http://39.107.241.37:2020/static/images/avatar/metal.jpg');
INSERT INTO `tb_item` VALUES (5, '家具类', 'http://39.107.241.37:2020/static/images/avatar/sofa.jpg');
INSERT INTO `tb_item` VALUES (6, '电器类', 'http://39.107.241.37:2020/static/images/avatar/electric.jpg');

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order`  (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `good_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_id` decimal(10, 0) NULL DEFAULT NULL,
  `order_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `isDelete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_order
-- ----------------------------
INSERT INTO `tb_order` VALUES (1, '2', '6', 2, '0', '1');
INSERT INTO `tb_order` VALUES (2, '1', '1', 2, '2', '1');
INSERT INTO `tb_order` VALUES (3, '1', '1', 1, '2', '1');
INSERT INTO `tb_order` VALUES (4, '1', '1', 3, '2', '1');
INSERT INTO `tb_order` VALUES (5, '2', '1', 2, '1', '1');
INSERT INTO `tb_order` VALUES (6, '3', '1', 3, '1', '1');
INSERT INTO `tb_order` VALUES (7, '1', '1', 2, '1', '1');
INSERT INTO `tb_order` VALUES (8, '3', '1', 2, '1', '1');
INSERT INTO `tb_order` VALUES (9, '2', '1', 1, '1', '1');
INSERT INTO `tb_order` VALUES (10, '3', '1', 3, '1', '1');
INSERT INTO `tb_order` VALUES (11, '3', '1', 1, '2', '1');
INSERT INTO `tb_order` VALUES (12, '3', '1', 2, '3', '0');
INSERT INTO `tb_order` VALUES (13, '3', '1', 7, '2', '1');
INSERT INTO `tb_order` VALUES (14, '3', '1', NULL, '0', '1');
INSERT INTO `tb_order` VALUES (15, '3', '1', 7, '0', '1');
INSERT INTO `tb_order` VALUES (16, '3', '1', NULL, '0', '0');
INSERT INTO `tb_order` VALUES (17, '1', '1', 8, '0', '1');
INSERT INTO `tb_order` VALUES (18, '1', '1', 1, '3', '0');
INSERT INTO `tb_order` VALUES (19, '1', '1', 7, '0', '1');
INSERT INTO `tb_order` VALUES (20, '1', '1', 8, '2', '0');
INSERT INTO `tb_order` VALUES (21, '2', '1', 3, '2', '0');
INSERT INTO `tb_order` VALUES (22, '1', '1', 3, '0', '1');
INSERT INTO `tb_order` VALUES (23, '1', '1', NULL, '0', '1');
INSERT INTO `tb_order` VALUES (24, '2', '1', 10, '2', '1');
INSERT INTO `tb_order` VALUES (25, '3', '1', 7, '2', '0');
INSERT INTO `tb_order` VALUES (26, '1', '1', 9, '2', '0');
INSERT INTO `tb_order` VALUES (27, '1', '1', 2, '1', '0');

-- ----------------------------
-- Table structure for tb_recycle
-- ----------------------------
DROP TABLE IF EXISTS `tb_recycle`;
CREATE TABLE `tb_recycle`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `item_price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_recycle
-- ----------------------------
INSERT INTO `tb_recycle` VALUES (1, '报纸', '1', 1.10);
INSERT INTO `tb_recycle` VALUES (2, '纸箱', '1', 0.80);
INSERT INTO `tb_recycle` VALUES (3, '书纸', '1', 0.80);
INSERT INTO `tb_recycle` VALUES (4, '铁', '4', 1.20);
INSERT INTO `tb_recycle` VALUES (5, '铝', '4', 4.00);
INSERT INTO `tb_recycle` VALUES (6, '不锈钢', '4', 1.60);
INSERT INTO `tb_recycle` VALUES (7, '统货', '2', 0.80);
INSERT INTO `tb_recycle` VALUES (8, '鞋子', '2', 0.80);
INSERT INTO `tb_recycle` VALUES (9, '棉被', '2', 0.80);
INSERT INTO `tb_recycle` VALUES (10, '饮料瓶（透明）', '3', 1.00);
INSERT INTO `tb_recycle` VALUES (11, '泡沫板', '3', 1.00);
INSERT INTO `tb_recycle` VALUES (12, '亚克力板', '3', 2.00);
INSERT INTO `tb_recycle` VALUES (13, '塑料制品', '3', 0.40);
INSERT INTO `tb_recycle` VALUES (14, '旧电器', '6', 0.00);
INSERT INTO `tb_recycle` VALUES (15, '旧家具', '5', 0.00);

-- ----------------------------
-- Table structure for tb_recycle_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_recycle_order`;
CREATE TABLE `tb_recycle_order`  (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '1,2,3,4,5,6',
  `estimated_weight` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0,0,0,0,0,0',
  `address_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `points` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `call_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `call_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `order_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  `order_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isDelete` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_recycle_order
-- ----------------------------
INSERT INTO `tb_recycle_order` VALUES (6, '1', '1,2,3,4,5,6', '10,2,30,0,0,0', '9', NULL, '2023-01-19', '09:01', '22', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (7, '1', '1,2,3,4,5,6', '01,0,04,0,0,0', '1', NULL, '2023-01-19', '00:00', '214', '3', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (8, '6', '1,2,3,4,5,6', '8,9,0,8,0,0', '12', NULL, '2023-05-31', '14:01', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (9, '6', '1,2,3,4,5,6', '9,8,0,0,0,0', '12', NULL, '2023-04-31', '11:03', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (10, '6', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (11, '1', '1,2,3,4,5,6', '10,0,0,0,0,0', '9', NULL, '2023-02-01', '00:00', '2', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (16, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', '9', NULL, 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (19, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, '20', 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (20, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (21, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (22, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (23, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (24, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (25, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (26, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (27, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (28, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', '2', NULL, 'null', 'null', 'null', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (29, '1', '1,2,3,4,5,6', '45,0,0,0,0,0', '7', NULL, '2023-02-25', '14:00', '', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (30, '1', '1,2,3,4,5,6', '23,0,0,0,0,0', NULL, NULL, '2023-02-23', '14:00', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (31, '1', '1,2,3,4,5,6', '56,0,546,45,0,0', '3', NULL, '2023-02-24', '16:01', 'null', '1', '2', '0');
INSERT INTO `tb_recycle_order` VALUES (32, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (33, '1', '1,2,3,4,5,6', '10,0,20,0,0,0', NULL, NULL, 'null', 'null', 'null', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (34, '1', '1,2,3,4,5,6', '80,0,0,0,0,0', NULL, '80', 'null', 'null', 'null', '1', '1', '0');
INSERT INTO `tb_recycle_order` VALUES (35, '1', '1,2,3,4,5,6', '0,0,0,0,0,0', NULL, NULL, NULL, NULL, NULL, '0', NULL, '0');

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `userId` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgSrc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phoneNum` varbinary(255) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES (1, '1', '1', '1', '1', 0x3132333435363738393132);
INSERT INTO `tb_user` VALUES (6, '11', '2', '123', '1', 0x3133333638323632333038);
INSERT INTO `tb_user` VALUES (7, '12', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (8, '13', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (9, '14', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (10, '15', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (12, '122', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (20, '112', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (23, '121', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (24, '2123', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (25, '142', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (26, '2121', '2', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (27, '333', '1', NULL, NULL, NULL);
INSERT INTO `tb_user` VALUES (28, '55', '5', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tb_video
-- ----------------------------
DROP TABLE IF EXISTS `tb_video`;
CREATE TABLE `tb_video`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cateName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cateUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `catePrice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_video
-- ----------------------------
INSERT INTO `tb_video` VALUES (1, 'diy口罩', 'http://39.107.241.37:2020/static/videos/video1.mp4', '200');
INSERT INTO `tb_video` VALUES (2, '传统小鱼灯', 'http://39.107.241.37:2020/static/videos/video2.mp4', '198');
INSERT INTO `tb_video` VALUES (3, '废水瓶做小火车', 'http://39.107.241.37:2020/static/videos/video3.mp4', '200');
INSERT INTO `tb_video` VALUES (4, '废水瓶和筷子做小花篮', 'http://39.107.241.37:2020/static/videos/video4.mp4', '200');
INSERT INTO `tb_video` VALUES (5, '废纸变饮水机', 'http://39.107.241.37:2020/static/videos/video5.mp4', NULL);
INSERT INTO `tb_video` VALUES (6, '废纸袋的妙用', 'http://39.107.241.37:2020/static/videos/video6.mp4', NULL);
INSERT INTO `tb_video` VALUES (7, '自制杂物盒', 'http://39.107.241.37:2020/static/videos/video7.mp4', NULL);

SET FOREIGN_KEY_CHECKS = 1;

/*
 Navicat Premium Data Transfer

 Source Server         : ttww
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : db_uni_recovery

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 10/01/2023 16:19:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_address
-- ----------------------------
DROP TABLE IF EXISTS `tb_address`;
CREATE TABLE `tb_address`  (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_phoneNumber` bigint NULL DEFAULT NULL,
  `address_city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_information` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_default` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`address_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_address
-- ----------------------------
INSERT INTO `tb_address` VALUES (1, '6', '自己', 12345612312, '北京市海定区', '古北一号2栋', '1');
INSERT INTO `tb_address` VALUES (2, '6', '妈咪', 13467834563, '上海市安福路', '3号楼菜鸟驿站', '0');
INSERT INTO `tb_address` VALUES (3, '1', '汤臣一品业主', 2, '北京市-市辖区-西城区', '2', '0');

-- ----------------------------
-- Table structure for tb_goods
-- ----------------------------
DROP TABLE IF EXISTS `tb_goods`;
CREATE TABLE `tb_goods`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `cateName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cateUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `catePrice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_goods
-- ----------------------------
INSERT INTO `tb_goods` VALUES (1, '学生电竞可爱猫耳发光耳机女生 送礼', '../static/advertise2.jpg', '200');
INSERT INTO `tb_goods` VALUES (2, '防疫口罩', '../static/advertise1.jpg', '199');
INSERT INTO `tb_goods` VALUES (3, '环保购物袋', '../static/advertise1.jpg', '19.9');

-- ----------------------------
-- Table structure for tb_item
-- ----------------------------
DROP TABLE IF EXISTS `tb_item`;
CREATE TABLE `tb_item`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_item
-- ----------------------------
INSERT INTO `tb_item` VALUES (1, '纸品类');
INSERT INTO `tb_item` VALUES (2, '衣物类');
INSERT INTO `tb_item` VALUES (3, '塑料类');
INSERT INTO `tb_item` VALUES (4, '金属类');
INSERT INTO `tb_item` VALUES (5, '家具类');
INSERT INTO `tb_item` VALUES (6, '电器类');

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order`  (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `good_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address_id` decimal(10, 0) NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_order
-- ----------------------------
INSERT INTO `tb_order` VALUES (1, '2', '6', 2);

-- ----------------------------
-- Table structure for tb_recycle
-- ----------------------------
DROP TABLE IF EXISTS `tb_recycle`;
CREATE TABLE `tb_recycle`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `item_price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `userId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgSrc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phoneNum` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE,
  UNIQUE INDEX `username`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES (1, '1', '1', '1', '1', '12345678912');
INSERT INTO `tb_user` VALUES (6, '11', '2', '123', '1', '13368262308');
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

-- ----------------------------
-- Table structure for tb_video
-- ----------------------------
DROP TABLE IF EXISTS `tb_video`;
CREATE TABLE `tb_video`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `cateName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cateUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `catePrice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_video
-- ----------------------------
INSERT INTO `tb_video` VALUES (1, '视频1', '../static/advertise2.jpg', '200');
INSERT INTO `tb_video` VALUES (2, '视频2', '../static/advertise1.jpg', '198');
INSERT INTO `tb_video` VALUES (3, '视频3', '../static/advertise2.jpg', '200');
INSERT INTO `tb_video` VALUES (4, '视频4', '../static/advertise2.jpg', '200');

SET FOREIGN_KEY_CHECKS = 1;

/*
 Navicat Premium Data Transfer

 Source Server         : caixie.top
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : caixie.top:3301
 Source Schema         : goodsms

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 12/04/2019 16:59:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickName` varchar(255) DEFAULT NULL COMMENT '昵称',
  `gender` int(11) DEFAULT '0' COMMENT '性别 0：未知、1：男、2：女',
  `openId` varchar(100) DEFAULT NULL COMMENT '微信OpenId',
  `avatarUrl` varchar(256) DEFAULT NULL COMMENT '头像',
  `country` varchar(50) DEFAULT NULL COMMENT '国家',
  `province` varchar(50) DEFAULT NULL COMMENT '省份',
  `city` varchar(100) DEFAULT NULL COMMENT '城市',
  `phoneNumber` varchar(20) DEFAULT NULL COMMENT '手机号码',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '用户状态: 0:禁用 1:正常',
  `createdAt` datetime DEFAULT NULL COMMENT '注册时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopName` varchar(100) DEFAULT NULL COMMENT '店铺名称',
  `address` varchar(255) DEFAULT NULL COMMENT '店铺地址',
  `contacts` varchar(60) DEFAULT NULL COMMENT '联系人',
  `phoneNumber` varchar(20) DEFAULT NULL COMMENT '联系电话',
  `expiredAt` bigint(20) DEFAULT '0' COMMENT '过期时间',
  `createdAt` datetime DEFAULT NULL COMMENT '注册时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='店铺表';

DROP TABLE IF EXISTS `user_shop_relation`;
CREATE TABLE `user_shop_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户ID',
  `shopId` int(11) NOT NULL COMMENT '店铺ID',
  `shopRole` varchar(20) DEFAULT NULL COMMENT '店铺角色 shopkeeper:店主 staff:店员',
	`createdAt` datetime DEFAULT NULL COMMENT '注册时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户店铺关系表';

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户ID',
  `shopId` int(11) NOT NULL COMMENT '店铺ID',
  `barCode` varchar(64) DEFAULT NULL COMMENT '条形码',
  `goodsName` varchar(100) DEFAULT NULL COMMENT '商品名称',
  `purchasePrice` decimal(24,2) NOT NULL DEFAULT '0.00' COMMENT '商品进价',
  `salePrice` decimal(24,2) NOT NULL DEFAULT '0.00' COMMENT '商品售价',
  `stockNum` int(11) NOT NULL DEFAULT '0' COMMENT '库存数量',
  `createdAt` datetime DEFAULT NULL COMMENT '注册时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COMMENT='商品表';

-- ----------------------------
-- Table structure for purchase_record
-- ----------------------------
DROP TABLE IF EXISTS `goods_purchase_record`;
CREATE TABLE `goods_purchase_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户ID',
  `shopId` int(11) NOT NULL COMMENT '店铺ID',
  `goodsId` int(11) NOT NULL COMMENT '商品ID',
  `quantity` int(11) NOT NULL DEFAULT '0' COMMENT '进货数量',
  `purchasePrice` decimal(24,2) NOT NULL DEFAULT '0.00' COMMENT '商品进价',
  `purchaseDate` date DEFAULT NULL COMMENT '进货日期',
  `createdAt` datetime DEFAULT NULL COMMENT '注册时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品进货记录表';

-- ----------------------------
-- Table structure for sale_record
-- ----------------------------
DROP TABLE IF EXISTS `goods_sale_record`;
CREATE TABLE `goods_sale_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户ID',
  `shopId` int(11) NOT NULL COMMENT '店铺Id',
  `goodsId` int(11) NOT NULL COMMENT '商品ID',
  `quantity` int(11) NOT NULL DEFAULT '0' COMMENT '售出数量',
  `purchasePrice` decimal(24,2) NOT NULL DEFAULT '0.00' COMMENT '商品进价',
  `salePrice` decimal(24,2) NOT NULL COMMENT '商品售价',
  `saleDate` date DEFAULT NULL COMMENT '售出日期',
  `createdAt` datetime DEFAULT NULL COMMENT '注册时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COMMENT='商品售出记录表';




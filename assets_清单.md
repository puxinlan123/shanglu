# 《商路大亨》资产清单与校验报告

- 校验目录：`C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\`
- 校验方式：PowerShell 列目录核对文件名（大小写敏感）+ Python 3 / PIL 13.0.0（`Image.open` + `verify` + `load`）逐文件打开并读取实际宽高。
- 尺寸判定规则：商品/坐骑/道具/罗盘/皮肤/掌柜/护卫/劫匪——短边 ≥ 720px；城市横幅/场景——宽 ≥ 1280px 且高 ≥ 720px。
- 校验时间：2026-10-22。
- 本次为只读校验：未修改、删除、重命名、移动任何已有图片；未触碰任何 .html/.js 文件；本清单为唯一新建文件。

## 一、逐项校验表（共 76 项）

| 类别 | 文件名 | 绝对路径 | 宽×高 | 字节数 | 尺寸是否达标 | 可打开 |
|---|---|---|---|---|---|---|
| 商品/藏品 | goods\wheat.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\wheat.png | 2048×2048 | 1783921 | 达标 | 是 |
| 商品/藏品 | goods\wood.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\wood.png | 2048×2048 | 1830428 | 达标 | 是 |
| 商品/藏品 | goods\salt.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\salt.png | 2048×2048 | 1567384 | 达标 | 是 |
| 商品/藏品 | goods\iron.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\iron.png | 2048×2048 | 1868897 | 达标 | 是 |
| 商品/藏品 | goods\hide.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\hide.png | 2048×2048 | 1737053 | 达标 | 是 |
| 商品/藏品 | goods\tea.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\tea.png | 2048×2048 | 1814419 | 达标 | 是 |
| 商品/藏品 | goods\silk.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\silk.png | 2048×2048 | 1983311 | 达标 | 是 |
| 商品/藏品 | goods\spice.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\spice.png | 2048×2048 | 2055958 | 达标 | 是 |
| 商品/藏品 | goods\porcelain.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\porcelain.png | 2048×2048 | 1493913 | 达标 | 是 |
| 商品/藏品 | goods\jewel.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\jewel.png | 2048×2048 | 1488917 | 达标 | 是 |
| 商品/藏品 | goods\amber.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\amber.png | 2048×2048 | 1631527 | 达标 | 是 |
| 商品/藏品 | goods\jade.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\jade.png | 2048×2048 | 1563221 | 达标 | 是 |
| 商品/藏品 | goods\herb.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\herb.png | 2048×2048 | 2104108 | 达标 | 是 |
| 商品/藏品 | goods\satin.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\satin.png | 2048×2048 | 1742523 | 达标 | 是 |
| 商品/藏品 | goods\bluewhite.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\bluewhite.png | 2048×2048 | 1750872 | 达标 | 是 |
| 商品/藏品 | goods\longjing.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\longjing.png | 2048×2048 | 1667381 | 达标 | 是 |
| 商品/藏品 | goods\lacquer.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\lacquer.png | 2048×2048 | 1939132 | 达标 | 是 |
| 商品/藏品 | goods\fan.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\fan.png | 2048×2048 | 1728481 | 达标 | 是 |
| 商品/藏品 | goods\inkstone.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\inkstone.png | 2048×2048 | 1687206 | 达标 | 是 |
| 商品/藏品 | goods\book.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\book.png | 2048×2048 | 1578527 | 达标 | 是 |
| 商品/藏品 | goods\silver.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\silver.png | 2048×2048 | 1865437 | 达标 | 是 |
| 商品/藏品 | goods\emerald.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\emerald.png | 2048×2048 | 6594233 | 达标 | 是 |
| 商品/藏品 | goods\agate.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\agate.png | 2048×2048 | 1665595 | 达标 | 是 |
| 商品/藏品 | goods\tianhuang.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\tianhuang.png | 2048×2048 | 6167196 | 达标 | 是 |
| 商品/藏品 | goods\huimo.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\huimo.png | 2048×2048 | 7120886 | 达标 | 是 |
| 商品/藏品 | goods\xuanpaper.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\xuanpaper.png | 2048×2048 | 1579973 | 达标 | 是 |
| 商品/藏品 | goods\zitan.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\zitan.png | 2048×2048 | 1755990 | 达标 | 是 |
| 商品/藏品 | goods\huali.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\huali.png | 2048×2048 | 1758354 | 达标 | 是 |
| 商品/藏品 | goods\sancai.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\sancai.png | 2048×2048 | 1626694 | 达标 | 是 |
| 商品/藏品 | goods\gold.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\gold.png | 2048×2048 | 1721055 | 达标 | 是 |
| 商品/藏品 | goods\ruyi.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\ruyi.png | 2048×2048 | 1439899 | 达标 | 是 |
| 商品/藏品 | goods\pearl.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\pearl.png | 2048×2048 | 1474554 | 达标 | 是 |
| 商品/藏品 | goods\tang.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\tang.png | 2048×2048 | 1678989 | 达标 | 是 |
| 商品/藏品 | goods\yu.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\yu.png | 2048×2048 | 1712237 | 达标 | 是 |
| 商品/藏品 | goods\buddha.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\goods\buddha.png | 2048×2048 | 1788181 | 达标 | 是 |
| 城市横幅 | city0.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city0.jpg | 2730×1536 | 889041 | 达标 | 是 |
| 城市横幅 | city1.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city1.jpg | 2730×1536 | 931788 | 达标 | 是 |
| 城市横幅 | city2.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city2.jpg | 2730×1536 | 962598 | 达标 | 是 |
| 城市横幅 | city3.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city3.jpg | 2730×1536 | 936394 | 达标 | 是 |
| 城市横幅 | city4.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city4.jpg | 2730×1536 | 1010983 | 达标 | 是 |
| 城市横幅 | city5.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city5.jpg | 2730×1536 | 989459 | 达标 | 是 |
| 城市横幅 | city6.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city6.jpg | 2730×1536 | 892549 | 达标 | 是 |
| 城市横幅 | city7.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city7.jpg | 2730×1536 | 1034426 | 达标 | 是 |
| 城市横幅 | city8.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city8.jpg | 2730×1536 | 982269 | 达标 | 是 |
| 城市横幅 | city9.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city9.jpg | 2730×1536 | 911660 | 达标 | 是 |
| 城市横幅 | city10.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city10.jpg | 2730×1536 | 1001064 | 达标 | 是 |
| 城市横幅 | city11.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city11.jpg | 2730×1536 | 1091747 | 达标 | 是 |
| 城市横幅 | city12.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city12.jpg | 2730×1536 | 1065616 | 达标 | 是 |
| 城市横幅 | city13.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city13.jpg | 2730×1536 | 1058345 | 达标 | 是 |
| 城市横幅 | city14.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city14.jpg | 2730×1536 | 1060588 | 达标 | 是 |
| 城市横幅 | city15.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\city15.jpg | 2730×1536 | 961256 | 达标 | 是 |
| 坐骑 | mount_donkey.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\mount_donkey.png | 2048×2048 | 1826810 | 达标 | 是 |
| 坐骑 | mount_horse.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\mount_horse.png | 2048×2048 | 1663914 | 达标 | 是 |
| 坐骑 | mount_steed.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\mount_steed.png | 2048×2048 | 1703194 | 达标 | 是 |
| 坐骑 | mount_qianli.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\mount_qianli.png | 2048×2048 | 1859009 | 达标 | 是 |
| 坐骑 | mount_longju.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\mount_longju.png | 2048×2048 | 1975622 | 达标 | 是 |
| 护卫 | guard_0.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\guard_0.png | 1672×2508 | 706509 | 达标 | 是 |
| 护卫 | guard_1.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\guard_1.png | 1672×2508 | 643851 | 达标 | 是 |
| 护卫 | guard_2.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\guard_2.png | 1672×2508 | 722928 | 达标 | 是 |
| 护卫 | guard_3.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\guard_3.png | 1672×2508 | 683662 | 达标 | 是 |
| 道具 | item_tips.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\item_tips.png | 2048×2048 | 1554781 | 达标 | 是 |
| 道具 | item_peek.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\item_peek.png | 2048×2048 | 1712782 | 达标 | 是 |
| 道具 | item_shield.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\item_shield.png | 2048×2048 | 1634437 | 达标 | 是 |
| 劫匪 | bandit.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\bandit.png | 1672×2508 | 730593 | 达标 | 是 |
| 掌柜 | merchant_t.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\merchant_t.png | 1672×2508 | 615087 | 达标 | 是 |
| 掌柜 | merchant_ft.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\merchant_ft.png | 1672×2508 | 626695 | 达标 | 是 |
| 皮肤 | skin_red.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\skin_red.png | 1672×2508 | 857328 | 达标 | 是 |
| 皮肤 | skin_purple.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\skin_purple.png | 1672×2508 | 737444 | 达标 | 是 |
| 皮肤 | skin_jade.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\skin_jade.png | 1672×2508 | 634952 | 达标 | 是 |
| 罗盘 | compass_bronze.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\compass_bronze.png | 2048×2048 | 2069439 | 达标 | 是 |
| 罗盘 | compass_silver.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\compass_silver.png | 2048×2048 | 1922048 | 达标 | 是 |
| 罗盘 | compass_gold.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\compass_gold.png | 2048×2048 | 2040677 | 达标 | 是 |
| 罗盘 | compass_jade.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\compass_jade.png | 2048×2048 | 1617391 | 达标 | 是 |
| 罗盘 | compass_dragon.png | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\compass_dragon.png | 2048×2048 | 2171466 | 达标 | 是 |
| 场景 | bg.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\bg.jpg | 2730×1536 | 653733 | 达标 | 是 |
| 场景 | caravan.jpg | C:\Users\Hetao\Doubao\chats\2026-10-17\new-chat-1\merchant-game\assets\caravan.jpg | 2896×1448 | 755299 | 达标 | 是 |

## 二、缺失/不合格项汇总

**76/76 全部通过。**

- 缺失文件：无（76 个必检文件全部存在，文件名与清单逐字一致，含大小写）。
- 不可打开文件：无。
- 尺寸不合格文件：无（人物类 1672×2508，短边 1672 ≥ 720；城市/场景类宽 ≥ 1280、高 ≥ 720，均满足）。

## 三、附注：清单外多余文件（不影响本次验收，仅备案）

assets\ 根目录下还存在以下不在 76 必检清单内的文件，本次未改动、未删除，仅列名备案：

- 根目录商品小图：wheat.png、wood.png、salt.png、iron.png、hide.png、tea.png、silk.png、spice.png、porcelain.png、jewel.png、amber.png
- 其他：mount.png、merchant.png、merchant_f.png、compass.png、caravan_horse.png、caravan_horse_t.png

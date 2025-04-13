---
title: 共通・Python式
---
|  |
| --- |
| 共通・数式 |
| メニューの場所 |
| *なし* |
| ワークベンチ |
| 全て |
| デフォルトのショートカット |
| *なし* |
| 導入バージョン |
| - |
| 参照 |
| *なし* |
|  |

## 概要

The **Std Expressions** command copies expression data to and from the Clipboard. The data references the names of objects and documents and can only be used in that context.

```
##@@ Height Unnamed#Cylinder.ExpressionEngine (Cylinder)
##@@
Box.Width

##@@ Radius Unnamed#Cylinder.ExpressionEngine (Cylinder)
##@@
Box.Length

```

Example Clipboard data

## 使い方

### Copy selected

1. Select one or more objects.
2. Select the **Expression actions → Copy selected** option from the [Tree view](/Tree_view "Tree view") context menu.
3. Expression data from the objects is copied to the Clipboard.

### Copy active document

1. Select the **Expression actions → Copy active document** option from the Tree view context menu.
2. Expression data from all objects in the active document is copied to the Clipboard.

### Copy all documents

1. Select the **Expression actions → Copy all documents** option from the Tree view context menu.
2. Expression data from all objects in all opened documents is copied to the Clipboard.

### Paste

1. Make sure appropriate Clipboard data is available by using one of the previous options first.
2. Select the **Expression actions → Paste** option from the Tree view context menu.
3. Expression data from the Clipboard is pasted.
4. The data is removed from the Clipboard.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Expressions/ja&oldid=1540324>"
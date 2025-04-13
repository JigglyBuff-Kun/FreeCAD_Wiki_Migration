---
title: 共通・変数セット
---
|  |
| --- |
| 共通・変数セット |
| メニューの場所 |
| *なし* |
| ワークベンチ |
| 全て |
| デフォルトのショートカット |
| *なし* |
| 導入バージョン |
| 1.0 |
| 参照 |
| [スプレッドシート・ワークベンチ](/Spreadsheet_Workbench/ja "Spreadsheet Workbench/ja"), [DynamicDataワークベンチ](/DynamicData_Workbench "DynamicData Workbench") |
|  |

## 概要

**共通・VarSet**コマンドでVarSetを作成できます。VarSetとは、[数式](/Expressions/ja "Expressions/ja")から変数として参照できるプロパティー（属性）の集合です。

![](/images/Std_VarSet_Dialog.png)

プロパティー（属性）を追加するためのダイアログボックス

## 使い方

1. 以下のいずれかで、新しいプロパティー（属性）の作成をします。
   * 新しい変数セットを作成するには、![](/images/Std_VarSet.svg) 変数セットを作成ボタンを押してください。
   * 既存の変数セットにプロパティーを追加するには、[ツリービュー](/Tree_view/ja "Tree view/ja")上で対象の変数セットをダブルクリックしてください。
2. **プロパティーを追加**ダイアログボックスが開きます。
3. **プロパティー名**を入力します。
   * 同一変数セット内でプロパティー名が重なってはいけません。
   * プロパティー名には英数字とアンダースコア（`A`〜`Z`、`a`〜`z`、`0`〜`9`、`_`）のみが使えます。
   * プロパティー名の最初の文字に数字は使えません。
   * FreeCADでは、プロパティー名に[アッパー・キャメルケース](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A3%E3%83%A1%E3%83%AB%E3%82%B1%E3%83%BC%E3%82%B9)流儀を使う慣習があります。つまり、各単語の先頭の文字を大文字にし、単語間には空白やアンダースコアは含めません。[プロパティー・エディター](/Property_editor/ja "Property editor/ja")では、属性名を読みやすくするために（キャメルケースで表現した）各単語間にスペースを入れて表示します。したがって、この慣習に従うことをおすすめします。
4. プロパティーの**型**をリストから選択します。利用できるほとんどの型については[主要なプロパティー（属性）の型](#Common_property_types)で説明します。
5. プロパティーの**値**を入力します。単位を持つ型を選択した場合、単位を入力しても構いません。
6. さらに別のプロパティーを続けて入力する場合は、**別のプロパティーを追加する**チェックボックスをチェックしてください。
7. 必要に応じて、プロパティーの**ツールチップ**を入力してください。
8. OKボタンを押してください。
9. **別のプロパティーを追加する**チェックボックスをチェックした場合は、再度ダイアログボックスが開き、別のプロパティーを続けて追加することができます。
10. 最後にキャンセルボタンを押してください。

## 主要なプロパティー（属性）の型

FreeCADでは多くのプロパティー（属性）の型を使うことができます。以下の表に主要なプロパティーの型を示します。詳細については[FeaturePythonカスタムプロパティー](/FeaturePython_Custom_Properties/ja "FeaturePython Custom Properties/ja")を参照してください。

| プロパティー型名 | デフォルトの単位（存在する場合） | コメント |
| --- | --- | --- |
| `App::PropertyAngle` | ° （または deg） |  |
| `App::PropertyBool` |  | `true`または`false`。[条件式](/Expressions/ja#Conditional_expressions "Expressions/ja")で使うことができます。 |
| `App::PropertyDistance` | mm |  |
| `App::PropertyFloat` |  | 浮動小数 |
| `App::PropertyInteger` |  | 整数 |
| `App::PropertyLength` | mm | `App::PropertyDistance`と似ているが、負にはならない。 |
| `App::PropertyString` |  | 文字列 |

## 補足

* [数式エディター](/Expressions/ja "Expressions/ja")の**変数セットを表示する**チェックボックスをチェックして既存のVarSetを表示し、そこから新しいプロパティーを追加することもできます。
* [プロパティー・エディター](/Property_editor/ja "Property editor/ja")の[コンテキストメニュー](/Property_editor/ja#Context_menu "Property editor/ja")を使って、プロパティーを変数セットから削除できます。
* 上記コンテキストメニューから、グループ名を変更できます。
* 現時点では、プロパティーを追加する際、`App::PropertyEnumeration`型として取りうる要素の一覧をセットすることができません。要素の一覧をセットするには、[Pythonコード](/FeaturePython_Custom_Properties#App::PropertyEnumeration "FeaturePython Custom Properties")またはプロパティー・エディターから行ってください。プロパティー・エディターから行う場合の手順は以下のとおりです。
  1. プロパティー・エディターのコンテキストメニューで**隠し項目を表示**を選択する。
  2. 列挙型プロパティーを展開する
  3. **列挙型**フィールドをクリックする
  4. 表示される...ボタンを押す
  5. 開かれる**List**ダイアログボックスに値を入力する
  6. OKボタンを押す。

## スクリプト処理

```
import FreeCAD as App

doc = App.ActiveDocument

var_set = doc.addObject("App::VarSet", "VarSetName")
var_set.addProperty("App::PropertyInteger", "MyNumber")  # Property is added to the Base group.
var_set.MyNumber = 123
var_set.addProperty("App::PropertyString", "MyText", group="SomeGroup", doc="Some tooltip information")
var_set.MyText = "Abc"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_VarSet/ja&oldid=1542894>"
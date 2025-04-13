---
title: Drawing Workbench/ja
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

Drawing workbench icon

## Introduction

ドローイングモジュールを使うと 3D 作業物を紙の上に移すことができます。つまりモデルのビューを 2D ウィンドウに表示し、図面にそのウィンドウを挿入するということです。例えば枠線、タイトル、ロゴマークが入ったシートに挿入し、最終的にそのシートを印刷することができます。ドローイングモジュールは現在も製作中で多かれ少なかれ技術面でのテスト段階にあります！

![](/images/Drawing_extraction.png)

## GUI ツール

2D 図面を作成、設定、エキスポートするためのツールです。

- ![](/images/Drawing_New.png) [スケーラブルベクターグラフィックを開く](/index.php?title=Drawing_Open_SVG/jp&action=edit&redlink=1 "Drawing Open SVG/jp (page does not exist)"): SVG ファイルとして保存されている図面を開きます

- ![](/images/Drawing_Landscape_A3.png) [A3 図面の新規作成](/index.php?title=Drawing_Landscape_A3/jp&action=edit&redlink=1 "Drawing Landscape A3/jp (page does not exist)"): FreeCAD のデフォルトの A3 テンプレートから新しい図面を作成します

- ![](/images/Drawing_View.png) [ビューの挿入](/index.php?title=Drawing_View/jp&action=edit&redlink=1 "Drawing View/jp (page does not exist)"): アクティブな図面上に選択されたオブジェクトのビューを挿入します

- ![](/images/Drawing_Annotation.png) [Annotation](/Drawing_Annotation "Drawing Annotation"): Adds an annotation to the current drawing sheet

- ![](/images/Drawing_Clip.png) [Clip](/Drawing_Clip "Drawing Clip"): Adds a clip group to the current drawing sheet

- ![](/images/Drawing_Openbrowser.png) [Open Browser](/Drawing_Openbrowser "Drawing Openbrowser"): Opens a preview of the current sheet in the browser

- ![](/images/Drawing_Orthoviews.png) [Ortho Views](/Drawing_Orthoviews "Drawing Orthoviews"): Automatically creates orthographic views of an object on the current drawing sheet

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol "Drawing Symbol"): Adds the contents of a SVG file as a symbol on the current drawing sheet

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing "Draft Drawing"): Inserts a special Draft view of the selected object in the current drawing sheet

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Inserts a view of a selected spreadsheet in the current drawing sheet

- ![](/images/Drawing_Save.png) [図面の保存](/index.php?title=Drawing_Save/jp&action=edit&redlink=1 "Drawing Save/jp (page does not exist)"): 現在の図面を SVG ファイルとして保存します

* [Project Shape](/Drawing_ProjectShape "Drawing ProjectShape"): Creates a projection of the selected object (Source) in the 3D view.

* _Note:_ the [Draft Drawing](/Draft_Drawing "Draft Drawing") tool is used with [Draft objects](/Draft_Workbench "Draft Workbench"). It has some additional capabilities over the Drawing tools, and supports specific objects like [Draft dimensions](/Draft_Dimension "Draft Dimension").

## Workflow

この画像を見るとドローイングモジュールの主要なコンセプトが見て取れます。ドキュメントには図面に引用したい形状オブジェクト（Schenkel）が入っています。さらに"Page"が作成されています。ページはテンプレートに基づいてインスタンス化されます。今回のケースでは"A3_Landscape"テンプレートです。テンプレートには[SVG](/SVG "SVG") ドキュメントであなたが普段使っているページ枠、ロゴ、標準のプレゼンテーション資料規格を使うことができます。

このページには複数のビューを挿入することができます。各ビューはページ上での位置（X、Y プロパティ）、拡大率（スケールプロパティ）などをはじめとした属性情報を持っています。ページ、ビュー、参照しているオブジェクトが変化するとそのたびにページが再生成され、ページの表示が更新されます。

## スクリプト処理

今のところエンドユーザー用の（GUI）ワークフローは非常に限定されたものしか用意されていません。API はもっと充実しています。以下ではドローイングモジュールのスクリプト処理用 API をどう使うかの例を挙げていきます。

See the [Drawing API example](/Drawing_API_example "Drawing API example") page for a description of the functions used to create drawing pages and views.

## Extending the Drawing Module

Some notes on the programming side of the drawing module will be added to the [Drawing Documentation](/Drawing_Documentation "Drawing Documentation") page. This is to help quickly understand how the drawing module works, enabling programmers to rapidly start programming for it.

## External links

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/ja&oldid=1462053>"

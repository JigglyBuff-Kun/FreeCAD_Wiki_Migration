---
title: ワークベンチ
---

[Revit](http://en.wikipedia.org/wiki/Revit "wikipedia:Revit")や[Catia](http://en.wikipedia.org/wiki/CATIA "wikipedia:CATIA")といった多くの現代的なデザインのためのアプリケーションと同様、FreeCAD は[ワークベンチ](http://en.wikipedia.org/wiki/Workbench "wikipedia:Workbench")というコンセプトを基盤にしています。ワークベンチとは言うなれば特定の作業のために特別に編成されたツールのセットです。伝統的な家具工房では木材を扱う者のための作業台や金属部品を扱う者のための作業台があり、恐らくは全ての部品を一つに組み立てる者のための作業台もあったことでしょう。

FreeCAD では同じ考え方を採用しています。関係する作業に従ってツールはワークベンチにグループ化されているのです。

あるワークベンチから別のワークベンチに切り替えると、そのインタフェースで利用できるツールが変わります。ツールバー、コマンドバー、さらにはインターフェイスの他の部分も新しいワークベンチに切り替わりますが、シーンの内容は変わりません。例えば製図ワークベンチで 2D 形状を描画し、さらにパートワークベンチを使ってそこから作業を続けるといったことが可能です。

ワークベンチは「モジュール」と呼ばれることがあります。ただし、ワークベンチとモジュールは別のものです。モジュールは FreeCAD を拡張するものですが、ワークベンチはツールバーやメニューといった GUI 要素を持つ特別な種類のモジュールです。

## 標準のワークベンチ

### 最新版

以下のワークベンチは全ての FreeCAD で利用可能です。

- ![](/images/Freecad.svg) [共通ツール](/Std_Base/ja "Std Base/ja")は実際はワークベンチではありません。全てのワークベンチで使える「標準」のコマンドとツール群です。

- ![](/images/Workbench_Assembly.svg) [アセンブリーワークベンチ](/Assembly_Workbench/ja "Assembly Workbench/ja")（Assembly）は機械的な部品の組み立てを構成し、拘束条件を解決するのためのワークベンチです。 [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) [BIM ワークベンチ](/BIM_Workbench/ja "BIM Workbench/ja")は建築の部材を操作し、[BIM（Building Information Modeling、建築情報モデル）](https://ja.wikipedia.org/wiki/BIM)を作成するためのものです。これは、Arch ワークベンチと、以前に BIM ワークベンチと呼ばれていた外部ワークベンチを統合したものです。0.21 and below.

- ![](/images/Workbench_CAM.svg) [CAM ワークベンチ](/CAM_Workbench/ja "CAM Workbench/ja")は G コードを生成するためのものです。このワークベンチは、以前は「パスワークベンチ」と呼ばれていました 0.21 and below。

- ![](/images/Workbench_Draft.svg) [ドラフトワークベンチ](/Draft_Workbench "Draft Workbench")（Draft）には 2D 用のツールと、基本的な 2D および 3D 操作のツールがあります。

- ![](/images/Workbench_FEM.svg) [FEM ワークベンチ](/FEM_Workbench/ja "FEM Workbench/ja")を使って有限要素解析（Finite Element Analysis、FEA）を行うことができます。

- ![](/images/Workbench_Inspection.svg) The [Inspection Workbench](/Inspection_Workbench "Inspection Workbench") is made to give you specific tools for examination of shapes. Still in the early stages of development.

- ![](/images/Workbench_Material.svg) [マテリアルワークベンチ](/Material_Workbench "Material Workbench")（Material）は FreeCAD のマテリアルシステムを操作します。

- ![](/images/Workbench_Mesh.svg) [メッシュワークベンチ](/Mesh_Workbench/ja "Mesh Workbench/ja")（Mesh）は三角形のメッシュで構成されるオブジェクトを扱うためのものです。

- ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD ワークベンチ](/OpenSCAD_Workbench/ja "OpenSCAD Workbench/ja")は OpenSCAD との相互運用性と、[構造的ソリッド幾何学](/Constructive_solid_geometry "Constructive solid geometry")（CSG）モデル履歴の修復のためのものです。

- ![](/images/Workbench_Part.svg) [パートワークベンチ](/Part_Workbench/ja "Part Workbench/ja")（Part）はプリミティブ図形とブーリアン変換による作業を行うためのワークベンチです。

- ![](/images/Workbench_PartDesign.svg) [パートデザインワークベンチ](/PartDesign_Workbench/ja "PartDesign Workbench/ja")（PartDesign）はスケッチをベースに部品を作成するためのワークベンチです。

- ![](/images/Workbench_Points.svg) [ポイント・ワークベンチ](/Points_Workbench/ja "Points Workbench/ja")（Points）は点群データーを扱うためのものです。

- ![](/images/Workbench_Reverse_Engineering.svg) The [Reverse Engineering Workbench](/Reverse_Engineering_Workbench "Reverse Engineering Workbench") is intended to provide specific tools to convert shapes/solids/meshes into parametric FreeCAD-compatible features.

- ![](/images/Workbench_Robot.svg) The [Robot Workbench](/Robot_Workbench "Robot Workbench") for studying robot movements. Currently unmaintained.

- ![](/images/Workbench_Sketcher.svg) [スケッチャーワークベンチ](/Sketcher_Workbench/ja "Sketcher Workbench/ja")（Sketcher）はスケッチを拘束条件によって作成するためのワークベンチです。

- ![](/images/Workbench_Spreadsheet.svg)[スプレッドシートワークベンチ](/Spreadsheet_Workbench/ja "Spreadsheet Workbench/ja")（Spreadsheet）はスプレッドシートを作成しデーターを管理するためのワークベンチです。

- ![](/images/Workbench_Surface.svg) The [Surface Workbench](/Surface_Workbench "Surface Workbench") provides tools to create and modify surfaces. It is similar to the [Part Builder](/Part_Builder "Part Builder") Face from edges option.

- ![](/images/Workbench_TechDraw.svg) [テックドローワークベンチ](/TechDraw_Workbench/ja "TechDraw Workbench/ja")（TechDraw）は 3D モデルから技術図面を作成するためのものです。[Drawing ワークベンチ](/Drawing_Workbench "Drawing Workbench")の後継です。

- ![](/images/Workbench_Test.svg) The [Test Framework Workbench](/Testing "Testing") is for debugging FreeCAD.

### 廃止されたワークベンチ

以下のワークベンチは、第 0.21 版以降廃止になったものです。

- ![](/images/Workbench_Start.svg) The [Start ワークベンチ](/Start_Workbench "Start Workbench")は、ここからよく使われるワークベンチを簡単に開くためのものでしが、[ヘルプメニュー](/Std_Help_Menu/ja "Std Help Menu/ja")からアクセスできる Start ページで置き換えられました。

- ![](/images/Workbench_Web.svg) The [Web Workbench](/Web_Workbench "Web Workbench") provides you with a browser window instead of the [3D view](/3D_view "3D view") within FreeCAD.

以下のワークベンチは、第 0.20 版以降廃止になったものです。

- ![](/images/Workbench_Drawing.svg) [Drawing ワークベンチ](/Drawing_Workbench "Drawing Workbench")は技術製図のためのものでしたが、より高機能な[TechDraw ワークベンチ](/TechDraw_Workbench/ja "TechDraw Workbench/ja")で置き換えられました。

- ![](/images/Workbench_Image.svg) [Image ワークベンチ](/Image_Workbench "Image Workbench")はビットマップ画像を扱うためのものでしたが、その機能は[共通ツール](/Std_Base/ja "Std Base/ja")に移行しました。詳細は[共通ツール・インポート](/Std_Import/ja "Std Import/ja")および[共通ツール・画像を読み込み](/Std_ViewLoadImage/ja "Std ViewLoadImage/ja")を参照してください。

- ![](/images/Workbench_Raytracing.svg) [Raytracing ワークベンチ](/Raytracing_Workbench "Raytracing Workbench")はレイトレーシング（レンダリング）のためのものでした。Raytracing ワークベンチの代わりに、外部ワークベンチの[Render ワークベンチ](https://github.com/FreeCAD/FreeCAD-render)を使ってください。

## 外部ワークベンチ

FreeCAD ワークベンチは[Python](/Python/ja "Python/ja")で簡単にプログラムできるため、FreeCAD の公式開発範囲外で、多くの人が追加のワークベンチを開発しています。

[外部ワークベンチ](/External_workbenches/ja "External workbenches/ja")ページに、コミュニティーが把握している外部ワークベンチの一覧があります。この内のほとんどは、**ツール → ![](/images/Std_AddonMgr.svg) 拡張機能の管理**でアクセスできる[拡張機能の管理](/Std_AddonMgr/ja "Std AddonMgr/ja")を使って簡単にインストールすることができます。

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/ja&oldid=1544486>"

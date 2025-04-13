---
title: ユーザー向けハブ
---

![](/images/User_hub.png)

---

ここには FreeCAD の初心者に役立つ情報が集まっています。

FreeCAD は継続して開発が続いています。したがって、情報が欠けていたり古くなっているかもしれません。もし必要な情報を見つけられない場合は、躊躇せず[FreeCAD フォーラム](https://forum.freecad.org)で聞いてみてください。

もし FreeCAD に貢献いただけるなら、ぜひ[寄付](/Donate/ja "Donate/ja")をお願いします。それ以外の貢献の方法は、[FreeCAD への貢献](/Help_FreeCAD/ja "Help FreeCAD/ja")を参照ください。もしこの wiki を編集いただけるのであれば、編集権限のあるアカウントを[フォーラムで](https://forum.freecad.org/viewtopic.php?f=21&t=6830)申請してください。[WikiPages](/WikiPages "WikiPages")に、編集する際あなたが守るべき全般的なガイドラインがあります。

もしあなたが FreeCAD プロジェクトがどのように始まったのかに関心があるのならば、[歴史](/History "History")ページを参照ください。

## FreeCAD を使う

### 概要

- [FreeCAD について](/About_FreeCAD/ja "About FreeCAD/ja")：FreeCAD の一般的な概要。
- FreeCAD のインストール：[Windows](/Installing_on_Windows/ja "Installing on Windows/ja")、[Linux](/Installing_on_Linux/ja "Installing on Linux/ja")、[Mac](/Installing_on_Mac/ja "Installing on Mac/ja")
- [ヘルプファイルのインストール](/Installing_Helpfile "Installing Helpfile")：この wiki から作られたオフラインドキュメントのインストール方法。
- [付加機能のインストール](/Installing_additional_components/ja "Installing additional components/ja")：FreeCAD 上で動作する第三者が作成した付加機能のインストール方法。
- [はじめてみよう](/Getting_started/ja "Getting started/ja")：利用可能なツールの簡単な概要
- [FAQ](/Frequently_asked_questions "Frequently asked questions")：よくある質問
- [チュートリアル](/Tutorials "Tutorials")：FreeCAD の異なる応用について説明しています。

#### 他の CAD ソフトウェアから乗り換えるには

- [Workarounds](/Workarounds "Workarounds")
- [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
- [Migrating to FreeCAD from OnShape](/Migrating_to_FreeCAD_from_OnShape "Migrating to FreeCAD from OnShape")
- [Migrating to FreeCAD from SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks "Migrating to FreeCAD from SolidWorks")
- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](/BIM_application_compatibility_table "BIM application compatibility table")

### アプリケーションの基本

- [ユーザー・インタフェース](/Interface/ja "Interface/ja")：FreeCAD の画面は、[3D ビュー](/3D_view "3D view")、[ツリー・ビュー](/Tree_view "Tree view")、[プロパティー・エディター](/Property_editor/ja "Property editor/ja")、[タスク・パネル](/Task_panel "Task panel")、[Python コンソール](/Python_console "Python console")、といったいくつかの要素で構成されています。
- [マウス・ナビゲーション](/Mouse_navigation/ja "Mouse navigation/ja")：3D ビューを操作するためのマウスやトラックパッドの使い方。
- [オブジェクトの選択方法](/Selection_methods/ja "Selection methods/ja")：オブジェクトを選択するための様々な方法。
- [オブジェクトの名前](/Object_name/ja "Object name/ja")：FreeCAD 上のオブジェクトには、オブジェクトをユニークに識別できる変更不可の`Name`と、変更可能な`Label`があります。
- [設定](/Preferences_Editor/ja "Preferences Editor/ja")：FreeCAD のベース・システムと個々のワークベンチについて様々な設定が可能です。
- [ファイルフォーマット](/Import_Export/ja "Import Export/ja")：FreeCAD が取り扱うことのできるファイルフォーマットの一覧。

### ワークベンチ

[ワークベンチ](/Workbenches "Workbenches")とは、ある特定の作業のためのツール集です。ここでは、FreeCAD 付属の、どの環境でも利用可能なワークベンチについて説明します。

- ![](/images/Freecad.svg) [共通ツール](/Std_Base/ja "Std Base/ja")にあるコマンドとツールは、どのワークベンチでも使えるものです。

- ![](/images/Workbench_Assembly.svg) [アセンブリーワークベンチ](/Assembly_Workbench/ja "Assembly Workbench/ja")（Assembly）は機械的な部品の組み立てを構成し、拘束条件を解決するのためのワークベンチです。 [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) [BIM ワークベンチ](/BIM_Workbench/ja "BIM Workbench/ja")は、建築の部材を操作し、[BIM（Building Information Modeling、建築情報モデル）](https://ja.wikipedia.org/wiki/BIM)を作成するためのものです。これは、Arch ワークベンチと、以前に BIM ワークベンチと呼ばれていた外部ワークベンチを統合したものです。0.21 and below.

- ![](/images/Workbench_CAM.svg) [CAM ワークベンチ](/CAM_Workbench/ja "CAM Workbench/ja")は、G コードを生成するためのものです。このワークベンチは、以前は「パスワークベンチ」と呼ばれていました 0.21 and below。

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

- ![](/images/Workbench_TechDraw.svg)[テックドローワークベンチ](/TechDraw_Workbench/ja "TechDraw Workbench/ja")（TechDraw）は 3D モデルから技術的図面を作成するためのワークベンチです。

- ![](/images/Workbench_Test.svg) The [Test Framework Workbench](/Testing "Testing") is for debugging FreeCAD.

### マクロ

[マクロ](/Macros/ja "Macros/ja")とは、FreeCAD の基本システムには含まれていない、さまざまな処理を行う比較的小規模な[Python](/Python/ja "Python/ja")コードのことです。

FreeCAD の機能を強化するために、パワユーザーがさまざまな[マクロ](/Macros/ja "Macros/ja")を書いてきました。

FreeCAD 0.17 版以降では、[アドオンマネージャー](/Std_AddonMgr/ja "Std AddonMgr/ja")を使って多くのマクロをインストールできるようになりました。マクロの一覧については、[マクロ集](/index.php?title=Macros_recipes/ja&action=edit&redlink=1 "Macros recipes/ja (page does not exist)")を参照してください。マクロを手動でインストールする方法は、[マクロのインストール方法](/How_to_install_macros/ja "How to install macros/ja")を参照してください。

### 外部ワークベンチ

When many macros or functions are developed together, and are organized in toolbars and menus, they can become a new workbench.

[External workbenches](/External_workbenches "External workbenches") are collections of functions that are not part of the base FreeCAD system, usually developed by experienced users, and targeting a particular need.

FreeCAD 0.17 版以降では、[アドオンマネージャー](/Std_AddonMgr "Std AddonMgr")を使って多くのワークベンチをインストールできるようになりました。ワークベンチを手動でインストールする方法は、[ワークベンチのインストール方法](/How_to_install_additional_workbenches "How to install additional workbenches")を参照してください。

## リファレンス

- [コマンドリファレンス](/List_of_Commands "List of Commands")：使用可能な FreeCAD コマンドの完全なリストです。

## オンラインヘルプ

これは FreeCAD の公式なオンラインヘルプです。オンラインヘルプシステム全体が、現在書き直し中なので注意してください。オンラインヘルプは、FreeCAD バイナリパッケージと一緒に配布される CHM ファイルの生成に使用されます。オンラインヘルプは、その時点での、この wiki の中の最も完全なセクションの一部をまとめたものです。

- [オンラインヘルプ目次](/Online_Help_Toc/ja "Online Help Toc/ja")

## さらに

- FreeCAD のより高度な使用方法は[パワーユーザー向けハブ](/Power_users_hub/ja "Power users hub/ja")を参照してください。
- [FreeCAD コミュニティポータル](/index.php?title=FreeCAD_Community_Portal/ja&action=edit&redlink=1 "FreeCAD Community Portal/ja (page does not exist)")に FreeCAD メンバーのコミュニティによって行われたプロジェクトの一覧があります。
- FreeCAD で使われる用語がわからない場合は[用語集](/index.php?title=Glossary/ja&action=edit&redlink=1 "Glossary/ja (page does not exist)")を参照してください。 page.

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/ja&oldid=1559532>"

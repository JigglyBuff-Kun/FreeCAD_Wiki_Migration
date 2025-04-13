---
title: はじめてみよう
---
## はじめに

FreeCADは、3Dの[パラメトリックモデリングアプリケーション](/About_FreeCAD/ja "About FreeCAD/ja")です。もともとは機械設計のために作られましたが、モデリングの履歴をコントロールながら精密な3Dオブジェクトを作成したい多くのユーザーの役にも立ちます。

FreeCADの開発は2002年から続けられており、多くの[機能](/Feature_list/ja "Feature list/ja")を提供しています。まだ欠けている機能もありますが、趣味や小規模な工務店での使用には十分な機能を持っています。熱心なユーザーからなる急速に成長しつつあるコミュニティがあり、[FreeCADフォーラム](http://forum.freecad.org/index.php)で積極的に参加できます。また、FreeCADで開発された高品質なプロジェクトの[多くの例](https://forum.freecad.org/viewforum.php?f=24)があります。

多くのフリー・ソフトウェアと同じく、FreeCADの成長、機能追加、バグ修正にはコミュニティーの支援が不可欠です。もしFreeCADを気に入ったのならば、[寄付](/Donate/ja "Donate/ja")やドキュメンテーション作成、翻訳などを通じて[FreeCADに貢献](/Help_FreeCAD/ja "Help FreeCAD/ja")してください。

参考

* [Fusion360からの移行](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
* [どのワークベンチを利用すべきか？](/Which_workbench_should_I_choose "Which workbench should I choose")
* [チュートリアル](/Tutorials/ja "Tutorials/ja")
* [動画のチュートリアル](/Video_tutorials "Video tutorials")

## インストール

まず最初にFreeCADをダウンロードしインストールします。最新版の情報と更新情報については[ダウンロード](/Download/ja "Download/ja")ページを参照してください。インストールについては各オペレーティングシステムのインストール方法（[Windows](/Installing_on_Windows/ja "Installing on Windows/ja")、[Linux](/Installing_on_Linux/ja "Installing on Linux/ja")、[macOS](/Installing_on_Mac/ja "Installing on Mac/ja")）を参照してください。多くのLinuxディストリビューションではFreeCADが標準でインストール可能です。FreeCADはオープンソースなので、ソースコードを取得し自分で[コンパイル](/index.php?title=Compiling/ja&action=edit&redlink=1 "Compiling/ja (page does not exist)")することも可能です。

## FreeCADを試してみる

![](/images/FreeCAD_interface_base_divisions.svg)

FreeCADの標準インタフェース

*詳細な説明が[ユーザー・インタフェース](/Interface/ja "Interface/ja")にあります。*

:   1. [メインビュー領域](/index.php?title=Main_view_area/ja&action=edit&redlink=1 "Main view area/ja (page does not exist)")には、主に[3Dビュー](/3D_view/ja "3D view/ja")などの、複数のタブ付きウィンドウがあります。
:   2. [3D view](/3D_view/ja "3D view/ja")にドキュメント内の幾何学的図形を表示します。
:   3. [ツリービュー](/Tree_view/ja "Tree view/ja")（[コンボビュー](/Combo_view/ja "Combo view/ja")の一部）に、ドキュメント内のオブジェクトの階層と構造の履歴を表示します。また、アクティブなコマンドに対する[タスクパネル](/index.php?title=Task_panel/ja&action=edit&redlink=1 "Task panel/ja (page does not exist)")も表示します。
:   4. [プロパティーエディター](/Property_editor/ja "Property editor/ja")（[コンボビュー](/Combo_view/ja "Combo view/ja")の一部）で、選択したオブジェクトのプロパティーを表示・編集できます。
:   5. [選択ビュー](/index.php?title=Selection_view/ja&action=edit&redlink=1 "Selection view/ja (page does not exist)")に選択したオブジェクトまたはオブジェクトの子要素（頂点、辺、面）を表示します。
:   6. The [レポートビュー](/index.php?title=Report_view/ja&action=edit&redlink=1 "Report view/ja (page does not exist)")（または出力ウィンドウ）に、メッセージ、警告、エラーを表示します。
:   7. The [Pythonコンソール](/index.php?title=Python_console/ja&action=edit&redlink=1 "Python console/ja (page does not exist)")に、実行されたコマンドを表示します。また、ここの[Python](/Python/ja "Python/ja")コードを入力することもできます。
:   8. [ステータスバー](/Status_bar/ja "Status bar/ja")に、メッセージやツールチップを表示します。
:   9. ツールバー領域は、ツールバーがドッキングされる領域です。
:   10. The [ワークベンチ選択](/index.php?title=Std_Workbench/ja&action=edit&redlink=1 "Std Workbench/ja (page does not exist)")で、アクティブな[ワークベンチ](/index.php?title=Workbenche/ja&action=edit&redlink=1 "Workbenche/ja (page does not exist)")を選択できます。
:   11. [標準メニュー](/Standard_Menu "Standard Menu")に、プログラムの基本的な操作があります。

FreeCADのインターフェイスの基本的な概念は、複数の[ワークベンチ](/Workbenches/ja "Workbenches/ja")に分かれていることです。ワークベンチとは、特定の作業に適したツール集です。例えば[メッシュ](/Mesh_Workbench/ja "Mesh Workbench/ja")を扱うもの、[2Dオブジェクト](/Draft_Workbench/ja "Draft Workbench/ja")を描くもの、[拘束されたスケッチ](/Sketcher_Workbench/ja "Sketcher Workbench/ja")を作成したりするためのもの等です。[ワークベンチ選択メニュー](/index.php?title=Std_Workbenc/ja&action=edit&redlink=1 "Std Workbenc/ja (page does not exist)")で、利用しているワークベンチを切り替えることができます。また、[インターフェースのカスタマイズ](/Interface_Customization/ja "Interface Customization/ja")で、各ワークベンチに含まれるツールを変更したり、他のワークベンチのツールや自分で作成したツール（[マクロ](/Macros/ja "Macros/ja")と呼びます）を追加したりすることもできます。作業の最初によく使われるワークベンチは[PartDesignワークベンチ](/PartDesign_Workbench/ja "PartDesign Workbench/ja")や[パートワークベンチ](/Part_Workbench/ja "Part Workbench/ja")です。

FreeCADを起動すると、スタートページが表示されます。以下は第0.19版のスタートページの例です。

![](/images/Start_center_0.19_screenshot.png)

スタートページからは、よく使うワークベンチに素早くアクセスしたり、最近使ったファイルを開いたり、FreeCADの最新の情報を確認したりできます。[設定](/Preferences_Editor/ja "Preferences Editor/ja")でデフォルトのワークベンチを変更できます。

## 3次元空間での操作

FreeCADには、複数の[ナビゲーションモード](/Mouse_navigation/ja "Mouse navigation/ja")があり、3Dビューやその中のオブジェクトをどのようにマウスで操作するのかを変更することができます。ナビゲーションモードの1つは、中央ボタンが使えない[タッチパッド](/Mouse_navigation/ja#Touchpad_navigation "Mouse navigation/ja")のためのものです。デフォルトのナビゲーションモードは[CADナビゲーション](/Mouse_navigation/ja#CAD_navigation "Mouse navigation/ja")です。ナビゲーションモードは、[ステータスバー](/Status_bar/ja "Status bar/ja")の![](/images/NavigationCAD_dark.svg)ボタンを押すか、[3Dビュー](/3D_view/ja "3D view/ja")の空白部分で右クリックをすることで簡単に変更できます。

また、ビューメニュー、ビューツールバー、あるいは数字キーのショートカット（1、2、等々）から、（上面図や前面図などの）プリセットのビューを切り替えることができます。3Dビュー内のオブジェクト上や空白部分で右クリックすることで、特定のビューの設定や、ツリービュー内でのオブジェクトの検索などのよく使う操作に素早くアクセスできます。

## FreeCADを使い始める

FreeCADは高精度な3Dモデルを作成し、モデルの履歴をさかのぼってパラメターを変更できるようにすることで、モデルを細かく管理できるように設計されています。最終的には、3D印刷、CNC加工、建築工事などに活用できることを想定しています。そのため、アニメーション制作やゲーム開発などのための3Dアプリケーションとは大きく異なっています。特に3Dモデリングが初めての人には学習のハードルが高く感じられるかもしれません。どこかでつまずいたとしても、[FreeCADフォーラム](http://forum.freecad.org/index.php)の親切なコミュニティーに相談すればすぐに解決策が見つかるかもしれません。

あなたの作業内容に応じて、FreeCADのどのワークベンチから作業を始めればいいのかは変わります。 もし機械的なモデルや、一般的に小さなオブジェクトを作成するのであれば、おそらく[PartDesignワークベンチ](/PartDesign_Workbench/ja "PartDesign Workbench/ja")を試してみるのがいいでしょう。もし2D図面を作成したいのであれば、[基本設計ワークベンチ](/Draft_Workbench/ja "Draft Workbench/ja")です。もし拘束を使って2Dのデーターを作成したいなら[スケッチ・ワークベンチ](/Sketcher_Workbench/ja "Sketcher Workbench/ja")です。BIMを行いたい場合は、[BIMワークベンチ](/BIM_Workbench/ja "BIM Workbench/ja")を起動してください。もしOpenSCADを使っていたのならば、[OpenSCADワークベンチ](/OpenSCAD_Workbench/ja "OpenSCAD Workbench/ja")を試してみてください。さらに、コミュニティーで開発されたたくさんの[外部ワークベンチ](/External_workbenches/ja "External workbenches/ja")もあります。

ワークベンチはいつでも切り替えることができます。また、[インタフェースのカスタマイズ](/Interface_Customization/ja "Interface Customization/ja")で、他のワークベンチからツールを追加することもできます。

## パートデザインとスケッチャーワークベンチを使う

[パートデザイン（PartDesign、部品設計）ワークベンチ](/PartDesign_Workbench/ja "PartDesign Workbench/ja")は、簡単な形状から複雑なオブジェクトを作成するためのワークベンチです。部品（「フィーチャー」または「特徴」と呼びます）を追加したり削除したりして、最終的なオブジェクトを作り上げます。モデリングの過程で適用したすべての特徴は、ドキュメント内の他のオブジェクトと共に[ツリービュー](/Document_structure/ja "Document structure/ja")に保存されます。パートデザイン・オブジェクトは、前の操作の結果に次々に操作を適用していく一連の処理の集まりと考えることができます。ツリービューでは最終的なオブジェクトを確認でき、展開してすべての前の状態を確認できます。前の状態のパラメーターを変更すると、その変更が最終オブジェクトに自動的に反映されます。

パートデザインワークベンチは、別の[スケッチャー（Sketcher）ワークベンチ](/Sketcher_Workbench/ja "Sketcher Workbench/ja")を多用します。スケッチャーワークベンチは、2D形状に拘束条件を適用する方法で、2Dの形状を描画するためのツールです。たとえば長方形を描き、辺の1つに長さ拘束を適用してそのサイズを設定することができます。その辺は（拘束条件を変更しない限り）長さを変更できなくなります。

スケッチャーワークベンチで作成した2D形状は、パートデザインワークベンチで多用します。例えば、2D形状から3Dボリュームを作成したり、オブジェクトの面に2D形状を描いて、その部分をオブジェクトからくり抜くといった操作です。以下はパートデザインにおける典型的な操作の一例です。

1. 新いスケッチを作成します
2. 閉じた形状を作成します（全ての点がつながっていることを確認してください）
3. スケッチの編集を終了します
4. 押し出しツールを使って、スケッチから3Dソリッドを作成します
5. ソリッドの1つの面を選択します
6. 2番目のスケッチを作成します（今回は選択した面に描画します）
7. 閉じた形状を作成します
8. スケッチの編集を終了します
9. ポケットツールを使い、最初のオブジェクトから2つ目のスケッチの形状の穴をくり抜きます。

以上の結果として下記のようなオブジェクトができます。

![](/images/Partdesign_example.jpg)

いつでも、元のスケッチを選択し変更したり、押し出しの長さやポケットの長さを変更したりできあす。これらの変更は最終的な形状に反映されます。

## ドラフトとBIMワークベンチを使う

[ドラフト（Draft、草稿・基本設計）ワークベンチ](/Draft_Workbench/ja "Draft Workbench/ja")と[BIMワークベンチ](/BIM_Workbench/ja "BIM Workbench/ja")は、他のワークベンチとは少し動作が異なりますが、FreeCAD全体に共通するルールには従っています。簡単に言えば、スケッチャーとパートデザインが主に単一の部品を設計するためのものであるのに対して、ドラフトとBIMは複数の単純なオブジェクトの扱いを簡単にするためのものです。

[ドラフトワークベンチ](/Draft_Workbench/ja "Draft Workbench/ja")は、[AutoCAD](https://ja.wikipedia.org/wiki/AutoCAD)のような伝統的な2D CAアプリケーションと似た2D製図の機能を提供しています。しかし、2D製図はFreeCADの主な用途の対象外であるため、2D製図専用のアプリケーションに見られるような豊富な機能があるとは期待しないでください。ドラフトワークベンチのほとんどのツールは、[作業平面](/index.php?title=Draft_SelectPlane/ja&action=edit&redlink=1 "Draft SelectPlane/ja (page does not exist)")や[オブジェクトのスナップ](/index.php?title=Draft_Snap/ja&action=edit&redlink=1 "Draft Snap/ja (page does not exist)")といった補助システムを利用することで、xy平面上のオブジェクトだけでなく、3D空間上の任意の平面上のオブジェクトにも対応します。

[BIMワークベンチ](/BIM_Workbench/ja "BIM Workbench/ja")によって、FreeCADで[BIM](https://ja.wikipedia.org/wiki/BIM)の機能が使えるようになります。これによって、パラメトリックなオブジェクトからなる建築のモデリングが可能になります。BIMワークベンチでは、ドラフトやスケッチャーワークベンチといった他のモジュールの機能を多用します。ドラフトワークベンチの全てのツールはBIMワークベンチから利用可能です。また、BIMワークベンチのほとんどのツールはドラフトワークベンチの補助システムを利用しています。

BIMおよびドラフトワークベンチでの典型的な作業フローは下記のようなものです。

1. ドラフトラインツールでいくつか線を描きます。
2. 線を選択してから壁ツールを使い、それぞれの線の上に壁を作成します。
3. 壁を選択してからBIM追加ツールを使い、壁を接合します。
4. 床オブジェクトを作成してから、ツリービュー上で壁のオブジェクトをその床オブジェクトにドラッグします。
5. 建物オブジェクトを作成してから、ツリービュー上で（壁を含む）床オブジェクトをその建物オブジェクトにドラッグします。
6. 窓ツールをクリックしパネルからプリセットの窓を選択してから壁の面をクリックし、窓を作成します。
7. 必要に応じて作業平面を設定し、その後ドラフト寸法ツールを使って寸法を追加します。

以上の結果として下記ができます。

![](/images/Arch_workflow_example.jpg)

詳細は[チュートリアル](/Tutorials/ja "Tutorials/ja")を参照してください。

## アドオン

誰でもFreeCADの新しい機能を開発し、[アドオン](/Addon/ja "Addon/ja")としてFreeCADコミュニティーに共有できます。

アドオンには3種類あります。

* [マクロ](/Macros/ja "Macros/ja")は、新しいツールや機能を提供する[Python](/Python/ja "Python/ja")コードで、`.FCMacro`という拡張子をもつ単一のファイルに含まれています。
* [ワークベンチ](/External_workbenches/ja "External workbenches/ja")は特定の目的のための[GUIコマンド](/Gui_Command/ja "Gui Command/ja")（またはツール）を提供する複数のPythonファイルをまとめたものです。
* [設定パック](/Preference_Packs/ja "Preference Packs/ja")は、ユーザー設定集をまとめて配布・共有するものです。

## スクリプト処理

最後は、FreeCADの最も強力な機能の一つである[スクリプト](/Power_users_hub/ja#Scripting_in_FreeCAD "Power users hub/ja")環境です。統合されたPythonコンソールから（あるいは外部のPythonスクリプトから）、FreeCADのほとんど全ての機能をアクセスできます。ジオメトリの作成や修正、3Dシーンでのオブジェクトの表示方法の変更、FreeCADインターフェースへのアクセスや変更が可能です。Pythonスクリプトはまた[マクロ](/Macros/ja "Macros/ja")としても使用でき、カスタムコマンドを簡単に作成することができます。

## 新着情報 ﻿

* 詳細の機能一覧は[リリース・ノート](/Feature_list/ja#Release_notes "Feature list/ja")を参照してください。

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/ja&oldid=1556144>"
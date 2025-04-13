---
title: アドオン
---
## 概要

FreeCADと本ドキュメンテーションにおいてアドオンとは、基本インストールには含まれないが後から追加することが可能なコンポーネントのことを言います。

## アドオンの種類

アドオンには3種類あります。

* [マクロ](/Macros/ja "Macros/ja")は、新しいツールや機能を提供する[Python](/Python/ja "Python/ja")コードで、`.FCMacro`という拡張子をもつ単一のファイルに含まれています。
* [ワークベンチ](/External_workbenches/ja "External workbenches/ja")は特定の目的のための[GUIコマンド](/Gui_Command/ja "Gui Command/ja")（またはツール）を提供する複数のPythonファイルをまとめたものです。例えば、棚を設計するためのツール、建築設計をするためのツール、ボートを設計するためのツール、などです。ワークベンチは、通常は[コマンド](/index.php?title=Gui_command/ja&action=edit&redlink=1 "Gui command/ja (page does not exist)")のボタンが並んだ新しいツールバーを提供します。
* [設定パック](/Preference_Packs/ja "Preference Packs/ja")は、ユーザー設定集をまとめて配布・共有するものです。[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## インストール

アドオンをインストール際は、![](/images/Std_AddonMgr.svg) [アドオンマネージャー](/Std_AddonMgr/ja "Std AddonMgr/ja")を利用するのがおすすめです。

マクロやワークベンチは、手動でインストールすることも可能です。

* [マクロのインストール方法](/How_to_install_macros/ja "How to install macros/ja")
* [ワークベンチのインストール方法](/Installing_more_workbenches/ja "Installing more workbenches/ja")

## 開発者のための情報

If you have developed a macro or workbench, and want to see it included in the Addon manager, read how to do so on the repository pages: ([FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) and [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/)). If you add your macro to the [Macros recipes](/Macros_recipes "Macros recipes") page, there is nothing else to do, it will automatically be picked up by the Addon manager.

参考

* [Pythonワークベンチの追加](/Workbench_creation/ja#Distribution "Workbench creation/ja")
* [C++ワークベンチの追加](/Workbench_creation/ja#Distribution_2 "Workbench creation/ja")

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/ja&oldid=1544360>"
---
title: Macへのインストール
---
インストーラーを使って1ステップでFreeCADをMac OS Xにインストールすることができます。

If you would like to download a development version, which may be unstable, see the [Weekly builds download](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds) page.

You can also use a package manager such as HomeBrew to keep your software updated. Instructions to install HomeBrew can be seen [here](https://brew.sh/). When HomeBrew installed you can simply install FreeCAD through your bash terminal with

```
brew install --cask freecad

```

and to use the latest version available on HomeBrew you may run

```
brew install freecad

```

If there are any issues with the HomeBrew Cask or Formula you may report them to [here](https://github.com/FreeCAD/homebrew-freecad).

このページではFreeCADインストーラーの使い方と機能を説明しています。またアンインストール方法も記載されています。
インストールが終わると[使い始めることができます](/index.php?title=Getting_started/jp&action=edit&redlink=1 "Getting started/jp (page does not exist)")！

### 簡単なインストール

FreeCADインストーラーはディスクイメージファイルに収められたインストールパッケージ（.mpkg）として提供されています。

The FreeCAD installer is provided as a app package (.app) enclosed in a disk image file.

最新のインストーラーは[ダウンロードページ](/Download "Download")からダウンロードすることができます。ファイルをダウンロードしたらディスクイメージをマウントして**Install FreeCAD**パッケージを実行してください。

![](/images/Mac_installer_1.png)

インストールされるパッケージのリストが記載された**Customize Installation**画面をインストーラーが表示します。もし既にこれらのパッケージのどれかがインストールされている場合はチェックボックスを使ってインストール選択を外すことができます。インストールされているかどうかわからない場合は全てのアイテムにチェックをいれたままにしておいてください。

![](/images/Mac_installer_2.png)

### アンインストール

今のところFreeCADにはアンインストーラーがありません。FreeCADとインストールされた全てのコンポーネントを完全に取り除きたい場合は以下のファイルとフォルダをごみ箱にドラッグしてください。

* /Applications内：
  + FreeCAD

これで終わりです。

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Mac/ja&oldid=1530999>"
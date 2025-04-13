---
title: PySide/ja
---
## 概要

PySideライブラリを使うと、[Python](/Python/ja "Python/ja")から、クロスプラットフォームのGUIツールキットのQtにアクセスできます。QtはC++のライブラリ集ですが、PySideを使うことで、[Python](/Python/ja "Python/ja")からもQtの機能を活用することができます。C++で作れるユーザーインタフェースは、同じようにPythonでも作成したり変更したりできます。ソースコードをコンパイルせずに開発とテストをその場で行うことができるのが、Pythonを使ってQtを用いたインタフェースを作成する利点の1つです。

FreeCADをインストールすると、QtとPySideも同梱されているはずです。自分で[コンパイル](/index.php?title=Compiling/ja&action=edit&redlink=1 "Compiling/ja (page does not exist)")した場合は、これら2つのライブラリがインストールされているか確認してください。FreeCADを正しく動作させるためにはこれらが必要です。もちろん、QtがないとPySideは動作しません。

FreeCADの過去のバージョンでは、PythonからQtを利用するためにPyQtを使っていましたが、2013年（[commit 1dc122dc9a](https://github.com/FreeCAD/FreeCAD/commit/1dc122dc9a)）に、より寛容な[ライセンス](/License/ja "License/ja")のPySideに移行しました。

詳細は以下を参照してください。

* [Wikipedia:PySide](https://ja.wikipedia.org/wiki/PySide)
* [PySideとPyQtの相違点](https://wiki.qt.io/Differences_Between_PySide_and_PyQt)

![](/images/PySideScreenSnapshot1.jpg) ![](/images/PySideScreenSnapshot2.jpg)

PySideを使って作成したユーザーインタフェースの例。左：単純なダイアログの例。右：グラフを含む複雑なダイアログの例。

## PySide in FreeCAD with Qt5

FreeCAD was developed to be used with Python 2 and Qt4. As these two libraries became obsolete, FreeCAD transitioned to Python 3 and Qt5. In most cases this transition was done without needing to break backwards compatibility.

Normally, the `PySide` module provides support for Qt4, while `PySide2` provides support for Qt5. However, in FreeCAD there is no need to use `PySide2` directly, as a special `PySide` module is included to handle Qt5.

This `PySide` module is located in the `Ext/` directory of an installation of FreeCAD compiled for Qt5.

```
/usr/share/freecad/Ext/PySide

```

This module just imports the necessary classes from `PySide2`, and places them in the `PySide` namespace. This means that in most cases the same code can be used with both Qt4 and Qt5, as long as we use the single `PySide` module.

```
PySide2.QtCore -> PySide.QtCore
PySide2.QtGui -> PySide.QtGui
PySide2.QtSvg -> PySide.QtSvg
PySide2.QtUiTools -> PySide.QtUiTools

```

The only unusual aspect is that the `PySide2.QtWidgets` classes are placed in the `PySide.QtGui` namespace.

```
PySide2.QtWidgets.QCheckBox -> PySide.QtGui.QCheckBox

```

[Top](#top)

## Examples of PySide use

* [Beginner PySide Examples](/PySide_Beginner_Examples "PySide Beginner Examples") （ Hello World、お知らせ、テキストを入力、番号を入力
* [PySide Intermediate Examples](/PySide_Intermediate_Examples "PySide Intermediate Examples") （ウィンドウのサイズ変更、ウィジェットの非表示、ポップアップメニュー、マウスの位置、マウスイベント）
* [Advanced PySide Examples](/PySide_Advanced_Examples "PySide Advanced Examples") (ウィジェットなど)

彼らは主題を3つの部分に分け、PySide、PythonそしてFreeCAD内部への露出のレベルによって区別しました。最初のページには概要と背景資料があり、PySideとそのまとめ方について説明していますが、2ページ目と3ページ目は、ほとんどが異なるレベルのコード例です。

その意図は、問題に取り組むユーザがコードを簡単にコピーして自分の作業に貼り付け、必要に応じてそれを修正し、FreeCADによる問題解決に戻ることができるように、関連ページがPySideを実行する単純なPythonコードを提供することです。うまくいけば、彼らはPySideの質問に対する答えを探すためにインターネットを越えて追いかけに行く必要はありません。同時にこのページは、Web上で利用可能なさまざまな包括的なPySideチュートリアルと参照サイトを置き換えることを意図していません。

[Top](#top)

## Documentation

There are some differences in handling of widgets in Qt4 (PySide) and Qt5 (PySide2). The programmer should be aware of these incompatibilities, and should consult the official documentation if something doesn't seem to work as expected on a given platform. Nevertheless, Qt4 is considered obsolete, so most development should target Qt5 and Python 3.

The PySide documentation refers to the Python-style classes; however, since Qt is originally a C++ library, the same information should be available in the corresponding C++ reference.

* [Qt Modules](https://doc.qt.io/qtforpython/modules.html) available from PySide2 (Qt5).
* [All Qt classes by module](https://doc.qt.io/qt-5/modules-cpp.html) in Qt5 for C++.
* [Qt Modules](https://deptinfo-ensip.univ-poitiers.fr/ENS/pyside-docs/index.html) available from PySide (Qt4).

[Top](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=PySide/ja&oldid=1556778>"
---
title: OpenSCAD AddOpenSCADElement
---
|  |
| --- |
| OpenSCAD\_AddOpenSCADElement |
| メニューの場所 |
| OpenSCAD -> Add OpenSCAD Element |
| ワークベンチ |
| [OpenSCAD](/OpenSCAD_Module "OpenSCAD Module") |
| デフォルトのショートカット |
| *なし* |
| 導入バージョン |
| - |
| 参照 |
| *なし* |
|  |

## Description

#### 説明

タスクパネルにOpenSCADのコードを入力し、OpenSCADバイナリを実行することでOpenSCADのエレメントを追加します（OpenSCADが必要です）。

'as mesh'が選択されている場合、OpenSCADはメッシュをレンダリングします。

Addが押されるたびにOpenSCADのコードが実行されエレメントがインポートされます。

この機能はOpenSCADの出力で表示される以上の文法チェック、エラーは出力しません。
エレメントが見つからない場合はuse<>ステートメントやinclude<>ステートメントで指定したパスが間違っている可能性があります。

通常の場合と同様、ライブラリはアクセス可能でなければなりません。下記のように書くとサンプルにアクセス可能です。

```
include <../examples/example001.scad>;
```

上記ではOpenSCADアイコンとしても知られる最初のサンプルをインクルードしています。

Libraries should be accessible as usual, whereas example can be reached as stated below.

```
include <../examples/example001.scad>;

```

would include the first examples also known as the OpenSCAD icon

## Setup OpenSCAD within FreeCAD

#### Initial set up from within FreeCAD

* OpenSCAD needs to be installed on your computer before FreeCAD will have this functionality
  + install OpenSCAD in the appropriate manner for your operating system. See [the OpenSCAD web site](http://www.openscad.org/) for more information
* FreeCAD needs to be told where to find the OpenSCAD executable
  + Switch to the OpenSCAD Workbench Menu -> View Workbench -> OpenSCAD
  + Open the preferences dialog Menu -> Edit -> Preferences
  + Click on "OpenSCAD" on the left plane
  + Click on the button labled "..." in General Settings -> General OpenSCAD Settings -> OpenSCAD executable to browser the directory or enter the path (e.g. Ubuntu based Linux distributions /usr/bin/openscad) directly into the line input right to the button
  + close and restart FreeCAD, a new OpenSCAD icon will appear on the tool bar, and in the OpenSCAD menu, in the FreeCAD OpenSCAD workbench
* It is also possible to add another optional Parameter which controls the maximum sides of a polygon before it is considered a circle (fn).

FreeCAD needs to be told where to find the OpenSCAD executable:

* Switch to the ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") via **View → Workbench → OpenSCAD**
* Open the preferences dialog **Edit → Preferences**
* Click on "OpenSCAD" on the left plane
* Click on the button labled ... in **General Settings → General OpenSCAD Settings → OpenSCAD executable** to browse the directory or enter the path (e.g. Ubuntu based Linux distributions `/usr/bin/openscad`) directly into the line input right to the button
* Close and restart FreeCAD

:   **Result:** A new OpenSCAD icon will appear on the tool bar, and in the OpenSCAD menu, in the FreeCAD OpenSCAD workbench.

Note: It is also possible to add another optional Parameter which controls the maximum sides of a polygon before it is considered a circle (fn).

FreeCADバージョン0.14以降、上記の設定が空の場合、FreeCADはOpenSCAD実行可能ファイルを検索します。

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_AddOpenSCADElement/ja&oldid=1216583>"
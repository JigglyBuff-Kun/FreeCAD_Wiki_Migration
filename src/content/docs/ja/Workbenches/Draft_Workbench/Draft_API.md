---
title: Draft API
---
これらの関数はDraftモジュールの一部であり、Draftモジュールをインポートすることでスクリプト、マクロ、Pythonインタプリタから使用することができます。

These functions are part of the [Draft Workbench](/Draft_Workbench "Draft Workbench") and can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console once the `Draft` module has been imported.

例:

```
import FreeCAD, Draft

myrect = Draft.makeRectangle(4, 3)
mydistance = FreeCAD.Vector(2, 2, 0)
Draft.move(myrect, mydistance)

```

![](/images/Method.png) **cut(***FreeCAD.Object, FreeCAD.Object***)**

**Description**: 与えられた2つのオブジェクトの差分から作成されたカットオブジェクトを返します。元のオブジェクトは非表示になります。

**Returns**: 新しく作成されたオブジェクト

![](/images/Method.png) **extrude(***FreeCAD.Object, Vector***)**

**Description**: 与えられたオブジェクトをベクトルによって指定された方向に押し出します。元のオブジェクトは非表示になります。

**Returns**: 新しく作成されたオブジェクト

![](/images/Method.png) **formatObject(***FreeCAD.Object, [FreeCAD.Object]***)**

**Description**: 与えられたターゲットオブジェクトに対してDraftツールバーに現在設定されているプロパティ（線の色と太さ）を適用します。ただし二番目のオブジェクトが与えられている場合はそのプロパティをコピーします。またコンストラクションボタンが押されている場合はオブジェクトをコンストラクショングループに配置します。

**Returns**: なし

![](/images/Method.png) **fuse(***FreeCAD.Object, FreeCAD.Object***)**

**Description**:
与えられた2つのオブジェクトの結合から作成されたオブジェクトを返します。もしオブジェクトが同一平面上にある場合は特殊なDraftワイヤーが使用され、そうでない場合は最終的なオブジェクトは標準的なPartの結合物になります。

**Returns**: 新しく作成されたオブジェクト

![](/images/Method.png) **getDraftPath(***[string]***)**

**Description**: Draftモジュールが実行されているユーザーまたはシステムパスを返します。サブパス、またはファイル名が与えられた場合はDraftモザユール内部のサブパスのフルパスが返されます。

**Returns**: ファイルパス

![](/images/Method.png) **getGroupContents(***list***)**

**Description**: グループに対して与えられたリストを再帰的にスキャンします。グループが見つかった場合、その内容がリストに追加されます。

**Returns**: FreeCADオブジェクトのリスト

![](/images/Method.png) **getRealName(***string***)**

**Description**: オブジェクト名から末尾の数字を取り除きます。

**Returns**: 取り除いた後のオブジェクト名

![](/images/Method.png) **getSelection(****)**

**Description**: 現在のFreeCADで選択物を返します。

**Returns**: 現在のFreeCADで選択物

![](/images/Method.png) **makeCircle(***radius, [placement], [facemode], [startangle], [endangle]***)**

**Description**: 与えられた半径（radius）の円オブジェクトを作成します。位置（placement）が指定された場合にはそれが使用されます。facemodeがFalseの場合には円はワイヤーフレームで表示されます。それ以外の場合は面として表示されます。startangleとendangleが（単位、°で）与えられた場合はそれが使用されオブジェクトは円弧となって表示されます。

**Returns**: 新しく作成されたオブジェクト.

![](/images/Method.png) **makeDimension(***Vector, Vector, [Vector] または FreeCAD.Object, int, int, [Vector]***)**

**Description**: 一つ目と二つ目のベクトル間の距離を測る寸法オブジェクトを作成します。三番目のベクトルが与えられた場合にはそこを通る寸法線が付与されます。Draftツールバーの現在の線の色と幅が使用されます。2つのベクトルの代わりにFreeCADオブジェクトと二つの整数（、さらにオプションで寸法線が通過するベクトル）を渡すことも可能です。その場合には寸法はオブジェクトに関連付けられ与えられた二つの数字で表される二頂点の間の距離が計測されます。

**Returns**: 新しく作成されたオブジェクト.

![](/images/Method.png) **makeLine(***Vector, Vector***)**

**Description**: 与えられた二つのベクトル間に引かれた線を作成します。Draftツールバーの現在の線の色と幅が使用されます。

**Returns**: 新しく作成されたオブジェクト.

![](/images/Method.png) **makeRectangle(***length, width, [placement], [facemode]***)**

**Description**: X方向にlength、Y方向にheightの大きさの長方形オブジェクトを作成します。位置（placement）が指定された場合にはそれが使用されます。facemodeがFalseの場合には円はワイヤーフレームで表示されます。それ以外の場合は面として表示されます。Draftツールバーの現在の線の色と幅が使用されます。

**Returns**: 新しく作成されたオブジェクト.

![](/images/Method.png) **makeText(***string または list, [Vector], [screenmode]***)**

**Description**:
テキストオブジェクトを作成します。ベクトルが与えられている場合にはその点に文字列またはリストで与えられた複数の文字列が一行に一文字列ずつ配置されます。Draftツールバーの現在の色とユーザー設定で指定されたテキストの高さ、フォントが使用されます。screenmodeがTrueの場合、テキストは常にビュー方向を向き、そうでない場合はXY平面上に配置されます。

**Returns**: 新しく作成されたオブジェクト.

![](/images/Method.png) **makeWire(***list または Part.Wire, [closed], [placement], [facemode]***)**

**Description**: 与えられたベクトルのリストまたは与えられたワイヤーからワイヤーオブジェクトを作成します。closedがTrue、または最初と最後の点が一致している場合はワイヤーが閉じます。facemodeがTrue（またはワイヤーが閉じている）の場合にはワイヤーは塗りつぶされた状態で表示されます。 Draftツールバーの現在の線の色と幅が使用されます。

**Returns**: 新しく作成されたオブジェクト.

![](/images/Method.png) **move(***FreeCAD.Object または list, Vector, [copymode]***)**

**Description**: 与えられたオブジェクトまたは与えられたリストに入っているオブジェクトを与えられたベクトルによって表される方向と距離に移動させます。copymodeがTrueの場合、実際のオブジェクトは動かされず、代わりにコピーが作成されます。

**Returns**: オブジェクト（copymodeがTrueの場合はオブジェクトのコピー）

![](/images/Method.png) **precision(****)**

**Description**: Draftのユーザー設定から精度の値を返します

**Returns**: 整数

![](/images/Method.png) **rotate(***FreeCAD.Object または list, angle, [center], [axis] ,[copymode]***)**

**Description**:
与えられたオブジェクトまたは与えられたリストに入っているオブジェクトを与えられた角度だけ回転させます。centerが与えられている場合にはaxisを回転軸として使用してcenterを中心に回転させます。axisが省略されている場合にはZ軸垂直方向の周りに回転させます。copymodeがTrueの場合、実際のオブジェクトは動かされず、代わりにコピーが作成されます。

**Returns**: オブジェクト（またはそのコピー）

![](/images/Method.png) **scale(***FreeCAD.Object または list, vector, [center], [copymode]***)**

**Description**:
与えられたオブジェクトまたは与えられたリストに入っているオブジェクトを与えられたベクトルで（X、Y、Z方向に）定義される拡大縮小率で拡大縮小します。centerが与えられている場合にはその周りに拡大縮小します。copymodeがTrueの場合、実際のオブジェクトは動かされず、代わりにコピーが作成されます。

**Returns**: オブジェクト（またはそのコピー）

![](/images/Method.png) **select(***FreeCAD.Object***)**

**Description**: 全ての選択を解除し、渡されたオブジェクトのみを選択します。

**Returns**: なし

![](/images/Method.png) **shapify(***FreeCAD.Object***)**

**Description**: パラメトリックな形状オブジェクトを非パラメトリックなものに変換します。

**Returns**: 新しいオブジェクト

![](/images/Method.png) **draftify(***FreeCAD.Object または list***)**

**Description**: 与えられたオブジェクトまたは与えられたリストの各オブジェクトをDraftのパラメトリックワイヤーに変えます。

**Returns**: なし

![](/images/Method.png) **getSVG(***FreeCAD.Object, [linemodifier], [textmodifier], [(u,v)]***)**

**Description**:
与えられたオブジェクトのSVG表現を作成します。linemodifier属性はライン幅の（パーセント単位の）拡大縮小率で、textmodifierはテキストサイズ用です。またオプションで投影面を定義するベクトルのタプルを指定できますが、指定しない場合はジオメトリーはXY平面に投影されます。

**Returns**: 与えられたオブジェクトのSVG表現が入った文字列

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_API/ja&oldid=1067822>"
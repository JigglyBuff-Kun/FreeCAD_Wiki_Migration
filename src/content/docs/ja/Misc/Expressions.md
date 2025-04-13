---
title: 数式
---
## 概要

オブジェクトのプロパティーを数式で定義することが可能です。GUIでは、プロパティーを表す数値調整ボックスまたは入力フィールドを選択すると、青いアイコン![](/images/Bound-expression.svg)が表示されます。アイコンをクリックするか等号記号=をキーボードから入力すると、そのプロパティーの数式エディターが開きます。もしインプットフィールドに青いアイコンではなく...ボタンが表示されている場合は、プロパティーを右クリックし、コンテキスト・メニューから**数式...**を選択すると数式エディターが開きます。

FreeCADにおける数式は、以下で説明する[演算子](#Supported_operators)、[関数](#Supported_functions)、[定義済み定数](#Supported_constants)を組み合わせた数式です。これらに加えて、他のオブジェクト・プロパティー（の値）を参照したり、[条件式](#Conditional_expressions)も使えます。数式における数値に[単位](#Units)を与えることも可能です。

数値の整数部分と小数部分を分けるには、コンマ`,`または小数点`.`のどちらも使えます。小数点（または小数コンマ）がある場合、*少なくとも1桁以上*の小数が必須です。したがって、`1. + 2.`や`1, + 2,`は正しい数式ではありませんが、`1.0 + 2.0`や`1,0 + 2,0`は正しい数式です。

もし単位が与えられた場合、演算子や関数は単位が正しく揃っていることを要求します。例えば、`2mm + 4mm`は正しい数式ですが、`2mm + 4`は正しい数式ではありません。これは他のオブジェクト・プロパティーを参照するときにも適用されます。オブジェクトプロパティーが長さを表している場合、`Pad001.Length + 1`は、長さと無次元数を加算しようとしているので、正しい数式ではありません。これは、`Pad001.Length + 1mm`のように書かなければなりません。

単位に関連するエラーは直感的でない場合があります。式が拒否されたり、式の結果の単位が設定するプロパティの単位と一致しないことがあります。以下にいくつかの例を示します：

`1/2mm`は0.5ミリメートルになりません。これは`1/(2mm)`と解釈された結果、`0.5 mm^-1`になります。

`sqrt(2)mm`は正しい数式ではありません。なぜなら、関数（sqrt）は数ではないためです（訳注：単位の前は数でなければならない）。したがって`sqrt(2) * 1mm`のように記述する必要があります。

### 関数の引数

関数に複数の引数を与える場合、各引数は、セミコロン`;`またはコンマ*+空白*`,` で区切る必要があります。後者の場合、コンマは入力後セミコロンに置き換えられます。セミコロンを使う場合、その後に空白をつける必要はありません。

スプレッドシートのセルを引数として使うこともできます。セルの参照は、`A1`のように大文字の列名に行番号をつなげて表した形で参照できます。あるいは、セルに別名が定義されている場合、`Spreadsheet.MyPartWidth`のように別名でも参照できます。

### オブジェクトの参照

既に上で例を示したとおり、オブジェクトをデータ**Name**（名前）あるいはデータ**Label**（ラベル）で参照できます。データ**Label**で参照する場合、ラベル名を`<<`と`>>`で括り、`<<ラベル>>`のようにしなければなりません。

オブジェクトのプロパティーも参照できます。例えば、円柱（Cylinder）の高さ（Height）は、`Cylinder.Height`あるいは`<<Cylinderのラベル>>.Height`で参照できます。

It is possible to add [custom properties](/Property_editor#Context_menu "Property editor") to objects and use those in expressions. To reference constraints in sketches it is advisable to [name](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench") them.

オブジェクトの参照の詳細については、[CADデーターの参照](#Reference_to_CAD_data)を参照してください。

[Top](#top)

## 定義済み定数

以下が定義済みの定数です。

| 定数 | 説明 |
| --- | --- |
| **e** | [ネイピア数（自然対数の底）](https://ja.wikipedia.org/wiki/%E3%83%8D%E3%82%A4%E3%83%94%E3%82%A2%E6%95%B0) |
| **pi** | [円周率（π）](https://ja.wikipedia.org/wiki/%E5%86%86%E5%91%A8%E7%8E%87) |

[Top](#top)

## 演算子

以下の演算子を使えます。

| 演算子 | 説明 |
| --- | --- |
| **+** | [加算](https://ja.wikipedia.org/wiki/%E5%8A%A0%E6%B3%95) |
| **-** | [減算](https://ja.wikipedia.org/wiki/%E6%B8%9B%E6%B3%95) |
| **\*** | [乗算](https://ja.wikipedia.org/wiki/%E4%B9%97%E6%B3%95) |
| **/** | 浮動小数点の[除算](https://ja.wikipedia.org/wiki/%E9%99%A4%E6%B3%95) |
| **%** | [剰余](https://ja.wikipedia.org/wiki/%E5%89%B0%E4%BD%99) |
| **^** | [べき算（指数）](https://ja.wikipedia.org/wiki/%E5%86%AA%E4%B9%97) |

[Top](#top)

## 関数

### 数学関数

以下の数学関数を使えます。

#### 三角関数

[三角関数](https://ja.wikipedia.org/wiki/%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0)はデフォルトで度を単位として使います。もしラジアンを使いたい場合は、*最初の引数*の後に`rad`を続けてください。例えば、`cos(45)`と`cos(pi rad / 4)`は同じです。数式が度であることを表すには、例えば`360deg - atan2(3; 4)` or `360° - atan2(3; 4)`のように、`deg`または`°`をつけてください。もし数式が無次元数で、度またはラジアンに変換したい場合は、例えば`(360 - X) * 1deg`、`(360 - X) * 1°`、`(0.5 + pi / 2) * 1rad`のように、`1deg`、`1°`、あるいは`1rad`を乗じてください。

| 関数 | 説明 | 入力の定義域 |
| --- | --- | --- |
| `acos(x)` | [逆余弦（arccosine）](https://ja.wikipedia.org/wiki/逆三角関数) | -1 <= x <= 1 |
| `asin(x)` | [逆正弦（arcsine）](https://ja.wikipedia.org/wiki/逆三角関数) | -1 <= x <= 1 |
| `atan(x)` | [逆正接（arctangent）](https://ja.wikipedia.org/wiki/逆三角関数)、-90° < 返り値 < 90° | すべて |
| `atan2(y; x)` | *y/x*の[逆正接（arctangent）](https://ja.wikipedia.org/wiki/逆三角関数)、象限によって-180° < 返り値 <= 180° | すべて、ただし無効入力である x = y = 0 の場合は0を返す |
| `cos(x)` | [余弦（cos）](https://ja.wikipedia.org/wiki/%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0) | すべて |
| `cosh(x)` | [双曲線余弦関数（cosh）](https://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0) | すべて |
| `sin(x)` | [正弦（sin）](https://ja.wikipedia.org/wiki/%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0) | すべて |
| `sinh(x)` | [双曲線正弦（sinh）](https://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0) | すべて |
| `tan(x)` | [正接（tan）](https://ja.wikipedia.org/wiki/%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0) | all, except x = n\*90 with n = odd integer |
| `tanh(x)` | [双曲線正接（tanh）](https://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0) | すべて |
| `hypot(x; y)` | [ピタゴラス和](https://en.wikipedia.org/wiki/Pythagorean_addition)、       x  2 +  y  2 {\displaystyle {\sqrt {x^{2}+y^{2}}}} {\displaystyle {\sqrt {x^{2}+y^{2}}}}（訳注：関数名は斜辺（hypotensue）から）、例えば hypot(4; 3) = 5 | x >=0 かつ y >= 0 |
| `cath(x; y)` | 直角三角形の斜辺と一辺が与えられたとき、残る一辺を返す。例えば cath(5; 3) = 4 | x >= y >= 0 |

#### 指数関数・対数関数

| 関数 | 説明 | 入力の定義域 |
| --- | --- | --- |
| `exp(x)` | [指数関数](https://ja.wikipedia.org/wiki/%E5%BA%95%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%8C%87%E6%95%B0%E5%87%BD%E6%95%B0) | すべて |
| `log(x)` | [自然対数（eを底とする対数）](https://ja.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E5%AF%BE%E6%95%B0) | x > 0 |
| `log10(x)` | [常用対数（10を底とする対数）](https://ja.wikipedia.org/wiki/%E5%B8%B8%E7%94%A8%E5%AF%BE%E6%95%B0) | x > 0 |
| `pow(x; y)` | [べき乗](https://ja.wikipedia.org/wiki/%E5%86%AA%E4%B9%97) | すべて |
| `sqrt(x)` | [平方根](https://ja.wikipedia.org/wiki/%E5%B9%B3%E6%96%B9%E6%A0%B9) | x >= 0 |
| `cbrt(x)` [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | [立方根](https://ja.wikipedia.org/wiki/%E7%AB%8B%E6%96%B9%E6%A0%B9) | すべて |

#### 端数処理関数・剰余関数

| 関数 | 説明 | 入力の値域 |
| --- | --- | --- |
| `abs(x)` | [絶対値](https://ja.wikipedia.org/wiki/%E7%B5%B6%E5%AF%BE%E5%80%A4) | すべて |
| `ceil(x)` | [切り上げ](https://ja.wikipedia.org/wiki/%E5%BA%8A%E9%96%A2%E6%95%B0%E3%81%A8%E5%A4%A9%E4%BA%95%E9%96%A2%E6%95%B0)、xと同じかそれよりも大きい最小の整数 | すべて |
| `floor(x)` | [切り捨て](https://ja.wikipedia.org/wiki/%E5%BA%8A%E9%96%A2%E6%95%B0%E3%81%A8%E5%A4%A9%E4%BA%95%E9%96%A2%E6%95%B0)、xと同じかそれよりも小さい最大の整数 | すべて |
| `mod(x; y)` | [剰余](https://ja.wikipedia.org/wiki/剰余)、xをyで割ったときの余り。結果の符号は、被除数（x）の符号と一致。 | y = 0 以外 |
| `round(x)` | [四捨五入](https://ja.wikipedia.org/wiki/%E7%AB%AF%E6%95%B0%E5%87%A6%E7%90%86)、もっとも近い整数。 | すべて |
| `trunc(x)` | [0への丸め](https://ja.wikipedia.org/wiki/%E7%AB%AF%E6%95%B0%E5%87%A6%E7%90%86)、0の方向にも最も近い整数。 | すべて |

[Top](#top)

### 統計関数・集約関数

[集約関数](https://en.wikipedia.org/wiki/Aggregate_function)は1または複数の引数を取ります。

集約関数の個々の引数には、セルのレンジ（範囲）を指定することができます。セルのレンジは、2つのセルを`:`でつなげたもので、例えば`average(B1:B8)`や`sum(A1:A4; B1:B4)`という形をしています。 `average(StartTemp:EndTemp)`のように、セルの参照は別名でも可能です。

以下の集約関数を使うことができます。

| 関数 | 説明 | 入力の定義域 |
| --- | --- | --- |
| `average(a; b; c; ...)` | 引数の値の[平均](https://ja.wikipedia.org/wiki/%E7%AE%97%E8%A1%93%E5%B9%B3%E5%9D%87)、sum(a; b; c; ...) / count(a; b; c; ...) と同じ。 | すべて |
| `count(a; b; c; ...)` | [計数](https://en.wikipedia.org/wiki/Counting)、すなわち引数の個数。セルのレンジとともに使われることが多い。 | すべて |
| `max(a; b; c; ...)` | 引数の中の[最大値](https://ja.wikipedia.org/wiki/%E6%A5%B5%E5%80%A4)。 | すべて |
| `min(a; b; c; ...)` | 引数の中の[最小値](https://ja.wikipedia.org/wiki/%E6%A5%B5%E5%80%A4)。 | すべて |
| `stddev(a; b; c; ...)` | 引数の[標準偏差](https://ja.wikipedia.org/wiki/%E6%A8%99%E6%BA%96%E5%81%8F%E5%B7%AE)。 | すべて |
| `sum(a; b; c; ...)` | 引数すべての[合計](https://ja.wikipedia.org/wiki/%E7%B7%8F%E5%92%8C)。セルのレンジとともに使われることが多い。 | すべて |

[Top](#top)

### 文字列操作

#### 文字列の定義

数式中の文字列は、ラベルと同じように、`<<`と`>>`で括る必要があります。

以下の例では、`<<TEXT>>`は文字列「TEXT」の意味です。

#### 文字列の連結

文字列は「+」を使って連結することができます。

`<<MY>> + <<TEXT>>`は「MYTEXT」という文字列になります。

#### 文字列への変換

数値は`str`関数を使って文字列に変換できます。

`str(Box.Length.Value)`

#### 文字列の整形

Pythonの（旧式の）%スタイル整形（フォーマッティング）をサポートしています。

すべての%指定子は、[Pythonドキュメンテーション](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)に定義されています。

例として、「Box」という名前の、一辺が10mmの立方体があるとします。式`<<Cube length : %s>> % Box.Length`は「Cube length : 10.0 mm」になります。

一つ以上の%指定子を使う場合、次のようにしてください：`<<Cube length is %s and width is %s>> % tuple(Box.Length; Box.Width)`。あるいは連結を使ってください：`<<Cube length is %s>> % Box.Length + << and width is %s>> % Box.Width`。どちらも、「Cube length is 10.0 mm and width is 10.0 mm」になります。

文字列の整形を使ったFreeCADのサンプルファイルが[フォーラム](https://forum.freecadweb.org/viewtopic.php?f=8&t=58657)にあります。

[Top](#top)

### オブジェクト生成関数

以下のオブジェクトは、数式の中で下記の関数を使って生成することが可能です。

| 型 | 関数 | 説明 |
| --- | --- | --- |
| `Tuple` | `tuple(a; b; ...)` | 例：`tuple(2; 1; 2)` |
| `List` | `list(a; b; ...)` | 例：`list(2; 1; 2)` |
| [`Vector`](/Vector_API "Vector API") | `vector(x; y; z)` | 3つの無次元数または`長さ`の単位を持つ数でベクトルを生成する。 例：`vector(2; 1; 3)` |
| `create(<<vector>>; x; y; z)` |
| [`Matrix`](/Matrix_API "Matrix API") | ``` matrix(   a11; a12; a13; a14;   a21; a22; a23; a24;   a31; a32; a33; a34;   a41; a42; a43; a44 )  ``` | 4行4列の行列を[行優先順](https://en.wikipedia.org/wiki/Row-_and_column-major_order)で作成: [     a  11   a  12   a  13   a  14    a  21   a  22   a  23   a  24    a  31   a  32   a  33   a  34    a  41   a  42   a  43   a  44 ] {\displaystyle {\begin{bmatrix}a\_{11}&a\_{12}&a\_{13}&a\_{14}\\a\_{21}&a\_{22}&a\_{23}&a\_{24}\\a\_{31}&a\_{32}&a\_{33}&a\_{34}\\a\_{41}&a\_{42}&a\_{43}&a\_{44}\\\end{bmatrix}}} {\displaystyle {\begin{bmatrix}a_{11}&a_{12}&a_{13}&a_{14}\\a_{21}&a_{22}&a_{23}&a_{24}\\a_{31}&a_{32}&a_{33}&a_{34}\\a_{41}&a_{42}&a_{43}&a_{44}\\\end{bmatrix}}}  `matrix(1)`のように引数を1つだけ与えることもできます。これは恒等行列（訳注：`((1,0,0,0)(0,1,0,0)(0,0,1,0)(0,0,0,1))`）を作成します。  例： `matrix(1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14; 15; 16)` |
| `create(<<matrix>>; a11; a12; ...; a44)` |
| `Rotation` （回転） | `rotation(axis; angle)` | `Rotation`を、その軸`axis`（`ベクトル`）と角度`angle` （`角度`の単位または無次元数）、あるいは3つのオイラー角`α`、`β`、`γ`を与えて生成。 例：   * `rotation(vector(0; 1; 0); 45)` * `create(<<rotation>>; 30; 30; 30)` |
| `rotation(α; β; γ)` |
| `create(<<rotation>>; axis; angle)` |
| `create(<<rotation>>; α; β; γ)` |
| [`Placement`](/Placement_API "Placement API") （配置 = 位置 + 回転） | `placement(base; rotation)` | `Placement`を、以下のようなパラメターから生成します。  * `base`: ベース位置（`Vector`） * `center`: 中心位置（`Vector`） * `rotation`: `Rotation` * `axis`: Rotation（回転）軸（`Vector`） * `angle`: Rotation（回転）角（無次元数または`角度`の単位付きの値） * `matrix`: `Matrix`   例：   * `placement(vector(2; 1; 3); rotation(vector(0; 0; 1); 45))` * `create(<<placement>>; create(<<vector>>; 2; 1; 2); create(<<rotation>>; create(<<vector>>; 0; 1; 0); 45))` |
| `placement(base; rotation; center)` |
| `placement(base; axis; angle)` |
| `placement(matrix)` |
| `create(<<placement>>; ...)` |

[Top](#top)

### ベクトル関数

以下のベクトル関数[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")を使えます。

| 関数・演算子 | 説明 |
| --- | --- |
| `v1 + v2` | 2つのベクトルの加算。 |
| `v1 - v2` | 2つのベクトルの減産。 |
| `v * s` | ベクトルを`s`倍一様に拡大縮小する。 |
| `vangle(v1; v2)` | 2つのベクトルの間の角度（度）。 |
| `vcross(v1; v2)` | 2つのベクトルの外積     v  1 ×  v  2 {\displaystyle v\_{1}\times v\_{2}} {\displaystyle v_{1}\times v_{2}}。 |
| `v1 * v2` | 2つのベクトルの内積     v  1 ⋅  v  2 {\displaystyle v\_{1}\cdot v\_{2}} {\displaystyle v_{1}\cdot v_{2}}。 |
| `vdot(v1; v2)` |
| `vlinedist(v1; v2; v3)` | ベクトル`v1`（で表される点）と、ベクトル`v2`（で表される点）を通り方向がベクトル`v3`である直線との距離を求める。 |
| `vlinesegdist(v1; v2; v3)` | ベクトル`v1`（で表される点）と、ベクトル`v2`（で表される点）とベクトル`v3`（で表される点）を結んだ線分上の最も近い点との距離を求める。 |
| `vlineproj(v1; v2; v3)` | ベクトル`v1`（で表される点）を、ベクトル`v2`（で表される点）を通り向きがベクトル`v3`である直線に投影する（訳注：直線上`v1`に最も近い点を求める）。 |
| `vnormalize(v)` | ベクトルを単位ベクトル（長さ1のベクトル）に正規化する。 |
| `vplanedist(v1)` | ベクトル`v1`（で表される点）と、ベクトル`v2`で表される点を通り法線の方向がベクトル`v3`である平面との距離を求める。 |
| `vplaneproj(v1)` | ベクトル`v1`（で表される点）を、ベクトル`v2`で表される点を通り法線の方向がベクトル`v3`である平面に投影する（訳注：平面上`v1`に最も近い点を求める）。 |
| `vscale(v; sx; sy; sz)` | x軸方向へ`sx`倍、y軸方向へ`sy`倍、z軸方向へ`sz`倍拡大縮小する。 |
| `vscalex(v; sx)` |
| `vscaley(v; sy)` |
| `vscalez(v; sz)` |

[Top](#top)

### 行列関数

`Rotation`と`Placement`は`Matrix`（行列）として表現できます。以下の関数は、すべて`Matrix`、`Rotation`、または`Placement`を最初の引数に取ります。この最初の引数を、以下では`m`と表しています。返されるオブジェクトの型は、最初の引数として渡されたオブジェクトの型と同じですが、例外として、`Rotation`に対して`mtranslate`を使用した場合は`Placement`が返されます。

| 関数 | 説明 |
| --- | --- |
| `minvert(m)` | [逆行列](https://ja.wikipedia.org/wiki/%E6%AD%A3%E5%89%87%E8%A1%8C%E5%88%97)を計算。 |
| `mrotate(m; rotation)` | 下記のいずれかで[回転](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2)  * `Rotation` * 軸（`Vector`）と角度（`Angle` 単位付きまたは無次元数） * 3つのオイラー角 `α`、`β`、`γ` |
| `mrotate(m; axis; angle)` |
| `mrotate(m; α; β; γ)` |
| `mrotatex(m; angle)` | x軸回りの[回転](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2) |
| `mrotatey(m; angle)` | y軸回りの[回転](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2) |
| `mrotatez(m; angle)` | z軸回りの[回転](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2) |
| `mtranslate(m; vector)` | `vector` (`Vector`) またはX、Y、Z値に基づく[平行移動](https://ja.wikipedia.org/wiki/%E5%B9%B3%E8%A1%8C%E7%A7%BB%E5%8B%95)。`Rotation`を平行移動すると、返り値は`Placement`になる。 |
| `mtranslate(m; x; y; z)` |
| `mscale(m; vector)` | `vector` (`Vector`) またはX、Y、Z値に基づく[拡大縮小](https://en.wikipedia.org/wiki/Scaling_(geometry)#Matrix_representation) |
| `mscale(m; x; y; z)` |

[Top](#top)

## 条件式

条件式は`条件 ? 真の場合の結果 : 偽の場合の結果`という形式です。条件部分も数式で定義します。`0`は偽、0以外は真と解釈します。

ブール型プロパティを条件の式に入れる場合、`VarSet.MyBool == 1 ? 10 mm : 15 mm`のように書く必要があることに注意してください。

以下の[関係演算子](https://ja.wikipedia.org/wiki/%E9%96%A2%E4%BF%82%E6%BC%94%E7%AE%97%E5%AD%90#%E6%A8%99%E6%BA%96%E7%9A%84%E3%81%AA%E9%96%A2%E4%BF%82%E6%BC%94%E7%AE%97%E5%AD%90)が定義されています。

| 演算子 | 説明 |
| --- | --- |
| **==** | 等しい |
| **!=** | 等しくない |
| **>** | 大きい |
| **<** | 小さい |
| **>=** | 以上 |
| **<=** | 以下 |

[Top](#top)

## 単位

単位は数式中に直接書くことができます。数式パーザーは、直前の値に単位を与えます。例えば、`2mm`や`2 mm`は正しい数式ですが、`mm`は単位の前に値がないので正しくありません。

すべての値は単位を持っていなければいけません。したがって、一般的にはスプレッドシートに値を書くときは単位も指定すべきです。  
単位を指定しなくても動く場合もあります。例えば、スプレッドシートのセルB1に無次元数`1.5`があったとして、押し出しの高さとしてそれを参照する場合です。この場合、押し出しの高さは単位`mm`が事前に定義されているので、単位がない場合それが使われて動きます。しかし、例えば`Sketch1.Constraints.Width - Spreadsheet.B1`を押し出しの高さに使うと失敗します。`Sketch1.Constraints.Width`は単位を持っているのに対して`Spreadsheet.B1`は無次元数だからです。

単位のべき乗は直接入力できます。例えば、`mm^3` はmm³、`m^3`はm³として解釈されます。

もし変数の名前が単位と同じ場合、誤って単位と解釈されないように、変数名を`<< >>`で括る必要があります。たとえば、寸法を表す`Sketch.Constraints.A`があった場合、電流のアンペア（A）に誤認されないよう、`Sketch.Constraints.<<A>>`と書かなければなりません。

数式パーザーは、以下を単位として認識します。

### 物質量

| 単位 | 説明 |
| --- | --- |
| mmol | Milli[ミリ・モル](https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%AB) |
| mol | [モル](https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%AB) |

### 角度

| 単位 | 説明 |
| --- | --- |
| ° | [度（°）](https://ja.wikipedia.org/wiki/%E5%BA%A6_(%E8%A7%92%E5%BA%A6)) 単位degの別名 |
| deg | [度（°）](https://ja.wikipedia.org/wiki/%E5%BA%A6_(%E8%A7%92%E5%BA%A6)) 単位°の別名 |
| rad | [ラジアン](https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%B8%E3%82%A2%E3%83%B3) |
| gon | [グラジアン](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%BC%E3%83%89_(%E5%8D%98%E4%BD%8D)) |
| M | [角度の分（1/60度）](https://en.wikipedia.org/wiki/Minute_and_second_of_arc) 単位 ′ の別名 |
| ′ | [角度の分（1/60度）](https://en.wikipedia.org/wiki/Minute_and_second_of_arc) これはプライム記号（U+2032）で単位Mの別名。 |
| S | [角度の秒（1/3600度）](https://en.wikipedia.org/wiki/Minute_and_second_of_arc) **動作しない**。単位 ″ の別名。 |
| ″ | [角度の秒（1/3600度）](https://en.wikipedia.org/wiki/Minute_and_second_of_arc) これはダブル・プライム記号（U+2033）で単位 Sの別名。 |

### 電流

| 単位 | 説明 |
| --- | --- |
| mA | ミリ[アンペア](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%9A%E3%82%A2) |
| A | [アンペア](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%9A%E3%82%A2) |
| kA | キロ[アンペア](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%9A%E3%82%A2) |
| MA | メガ[アンペア](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%9A%E3%82%A2) |

### 静電容量

| 単位 | 説明 |
| --- | --- |
| pF | ピコ[ファラッド](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%A9%E3%83%89) |
| nF | ナノ[ファラッド](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%A9%E3%83%89) |
| uF | マイクロ[ファラッド](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%A9%E3%83%89) 単位µFの別名 |
| µF | マイクロ[ファラッド](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%A9%E3%83%89) 単位uFの別名 |
| mF | ミリ[ファラッド](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%A9%E3%83%89) |
| F | [ファラッド](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%A9%E3%83%89) 1 F = 1 s4·A2/m2/kg |

### 電荷

| 単位 | 説明 |
| --- | --- |
| C | [クーロン](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%BC%E3%83%AD%E3%83%B3) 1 C = 1 A\*s |

### コンダクタンス

| 単位 | 説明 |
| --- | --- |
| uS | マイクロ[ジーメンス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%B9) 単位µSの別名 |
| µS | マイクロ[ジーメンス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%B9) 単位uSの別名 |
| mS | ミリ[ジーメンス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%B9) |
| S | [ジーメンス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%B9) 1 S = 1 s3·A2/kg/m2 |
| kS | キロ[ジーメンス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%B9) |
| MS | メガ[ジーメンス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%B9) |

### インダクタンス

| 単位 | 説明 |
| --- | --- |
| nH | ナノ[ヘンリー](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%B3%E3%83%AA%E3%83%BC_(%E5%8D%98%E4%BD%8D)) |
| uH | マイクロ[ヘンリー](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%B3%E3%83%AA%E3%83%BC_(%E5%8D%98%E4%BD%8D)) 単位µHの別名 |
| µH | マイクロ[ヘンリー](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%B3%E3%83%AA%E3%83%BC_(%E5%8D%98%E4%BD%8D)) 単位uHの別名 |
| mH | ミリ[ヘンリー](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%B3%E3%83%AA%E3%83%BC_(%E5%8D%98%E4%BD%8D)) |
| H | [ヘンリー](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%B3%E3%83%AA%E3%83%BC_(%E5%8D%98%E4%BD%8D)) 1 H = 1 kg·m2/s2/A2 |

### 電圧

| 単位 | 説明 |
| --- | --- |
| mV | ミリ[ボルト](https://ja.wikipedia.org/wiki/%E3%83%9C%E3%83%AB%E3%83%88_(%E5%8D%98%E4%BD%8D)) |
| V | [ボルト](https://ja.wikipedia.org/wiki/%E3%83%9C%E3%83%AB%E3%83%88_(%E5%8D%98%E4%BD%8D)) |
| kV | キロ[ボルト](https://ja.wikipedia.org/wiki/%E3%83%9C%E3%83%AB%E3%83%88_(%E5%8D%98%E4%BD%8D)) |

### 電気抵抗

| 単位 | 説明 |
| --- | --- |
| Ohm | [オーム（Ω）](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%83%A0) 1Ω = 1 kg·m2/s3/A2 |
| kOhm | キロ[オーム（Ω）](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%83%A0) |
| MOhm | メガ[オーム（Ω）](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%83%A0) |

### エネルギー・仕事

| 単位 | 説明 |
| --- | --- |
| mJ | ミリ[ジュール（J）](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB) |
| J | [ジュール（J）](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB) |
| kJ | キロ[ジュール（J）](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB) |
| eV | [電子ボルト（eV）](https://ja.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E3%83%9C%E3%83%AB%E3%83%88) 1 eV = 1.602176634e-19 J |
| keV | キロ[電子ボルト（eV）](https://ja.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E3%83%9C%E3%83%AB%E3%83%88) |
| MeV | メガ[電子ボルト（eV）](https://ja.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E3%83%9C%E3%83%AB%E3%83%88) |
| kWh | [キロワット時](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%AD%E3%83%AF%E3%83%83%E3%83%88%E6%99%82) 1 kWh = 3.6e6 J |
| Ws | [ワット秒](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB) 単位Jの別名 |
| VAs | [VA秒](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB) 単位Jの別名 |
| CV | [クーロン・ボルト](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB) 単位Jの別名 |
| cal | [カロリー（cal）](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AD%E3%83%AA%E3%83%BC) 1 cal = 4.184 J |
| kcal | キロ[カロリー（cal）](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AD%E3%83%AA%E3%83%BC) |

### 力

| 単位 | 説明 |
| --- | --- |
| mN | ミリ[ニュートン（N）](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3_(%E5%8D%98%E4%BD%8D)) |
| N | [ニュートン（N）](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3_(%E5%8D%98%E4%BD%8D)) |
| kN | キロ[ニュートン（N）](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3_(%E5%8D%98%E4%BD%8D)) |
| MN | メガ[ニュートン（N）](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3_(%E5%8D%98%E4%BD%8D)) |
| lbf | [Pound of force](https://en.wikipedia.org/wiki/Pound_(force)) |

### 長さ

| 単位 | 説明 |
| --- | --- |
| nm | ナノ（10-9）[メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB) |
| um | マイクロ（10-6）[メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB) 単位 µmの別名 |
| µm | マイクロ（10-6）[メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB) 単位 um の別名 |
| mm | ミリ（10-3）[メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB) |
| cm | センチ（10-2）[メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB) |
| dm | デシ（10-1）[メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB) |
| m | [メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB) |
| km | キロ（103）[メートル](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB)[meter](https://en.wikipedia.org/wiki/Metre) |
| mil | [1/1000インチ](https://en.wikipedia.org/wiki/Thousandth_of_an_inch) 単位 thou の別名 |
| thou | [1/1000インチ](https://en.wikipedia.org/wiki/Thousandth_of_an_inch) 単位 mil の別名 |
| in | [インチ](https://en.wikipedia.org/wiki/Inch) 単位 " の別名 |
| " | [インチ](https://en.wikipedia.org/wiki/Inch) 単位 in の別名 |
| ft | [フィート](https://en.wikipedia.org/wiki/Foot_(unit)) 単位 ' の別名 |
| ' | [フィート](https://en.wikipedia.org/wiki/Foot_(unit)) 単位 ft の別名 |
| yd | [ヤード](https://en.wikipedia.org/wiki/Yard) |
| mi | [マイル](https://en.wikipedia.org/wiki/Mile) |

### 光度

| 単位 | 説明 |
| --- | --- |
| cd | [カンデラ](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%B3%E3%83%87%E3%83%A9) |

### 磁束

| 単位 | 説明 |
| --- | --- |
| Wb | [ウェーバー](https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A7%E3%83%BC%E3%83%90) 1 Wb = 1 kg\*m2/s2/A |

### 磁束密度

| 単位 | 説明 |
| --- | --- |
| G | [ガウス](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%82%A6%E3%82%B9_(%E5%8D%98%E4%BD%8D)) 1 G = 10-4 T |
| T | [テスラ](https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%B9%E3%83%A9_(%E5%8D%98%E4%BD%8D)) 1 T = 1 kg/s2/A |

### 質量

| 単位 | 説明 |
| --- | --- |
| ug | マイクロ[グラム](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%A0) 単位µgの別名 |
| µg | マイクロ[グラム](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%A0) 単位ugの別名 |
| mg | ミリ[グラム](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%A0) |
| g | [グラム](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%A0) |
| kg | キロ（103）[グラム](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%A0) |
| t | [トン](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%B3) |
| oz | [Ounce](https://en.wikipedia.org/wiki/Ounce) |
| lb | [Pound](https://en.wikipedia.org/wiki/Pound_(mass)); alternative to the unit lbm |
| lbm | [Pound](https://en.wikipedia.org/wiki/Pound_(mass)); alternative to the unit lb |
| st | [Stone](https://en.wikipedia.org/wiki/Stone_(weight)) |
| cwt | [Hundredweight](https://en.wikipedia.org/wiki/Hundredweight) |

### 仕事率

| 単位 | 説明 |
| --- | --- |
| W | [ワット](https://ja.wikipedia.org/wiki/%E3%83%AF%E3%83%83%E3%83%88) |
| kW | キロ[ワット](https://ja.wikipedia.org/wiki/%E3%83%AF%E3%83%83%E3%83%88) |

### 圧力

| 単位 | 説明 |
| --- | --- |
| Pa | [パスカル](https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%B9%E3%82%AB%E3%83%AB_(%E5%8D%98%E4%BD%8D)) |
| kPa | キロ[パスカル](https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%B9%E3%82%AB%E3%83%AB_(%E5%8D%98%E4%BD%8D)) |
| MPa | メガ[パスカル](https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%B9%E3%82%AB%E3%83%AB_(%E5%8D%98%E4%BD%8D)) |
| GPa | ギガ[パスカル](https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%B9%E3%82%AB%E3%83%AB_(%E5%8D%98%E4%BD%8D)) |
| uTorr | マイクロ[トル](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AB)。単位µTorrの別名。 |
| µTorr | マイクロ[トル](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AB)。単位uTorrの別名 |
| mTorr | ミリ[トル](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AB) |
| Torr | [トル](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AB)。1 Torr = 101325/760 Pa |
| psi | [Pound-force per square inch](https://en.wikipedia.org/wiki/Pounds_per_square_inch); 1 psi = 6.895 kPa |
| ksi | Kilo[pound-force per square inch](https://en.wikipedia.org/wiki/Pounds_per_square_inch) |

### 温度

| 単位 | 説明 |
| --- | --- |
| uK | マイクロ[ケルビン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%AB%E3%83%93%E3%83%B3)。単位 µK の別名 |
| µK | マイクロ[ケルビン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%AB%E3%83%93%E3%83%B3)。単位 uK の別名 |
| mK | ミリ[ケルビン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%AB%E3%83%93%E3%83%B3) |
| K | [ケルビン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%AB%E3%83%93%E3%83%B3) |

### 時間

| 単位 | 説明 |
| --- | --- |
| s | [秒](https://ja.wikipedia.org/wiki/%E7%A7%92) |
| min | [分](https://ja.wikipedia.org/wiki/%E5%88%86) |
| h | [時](https://ja.wikipedia.org/wiki/%E6%99%82%E9%96%93_(%E5%8D%98%E4%BD%8D)) |
| Hz | [ヘルツ](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%AB%E3%83%84) s-1 |
| kHz | キロ[ヘルツ](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%AB%E3%83%84) |
| MHz | メガ[ヘルツ](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%AB%E3%83%84) |
| GHz | ギガ[ヘルツ](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%AB%E3%83%84) |
| THz | テラ[ヘルツ](https://ja.wikipedia.org/wiki/%E3%83%98%E3%83%AB%E3%83%84) |

### 容積

| 単位 | 説明 |
| --- | --- |
| ml | ミリ[リットル](https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%83%E3%83%88%E3%83%AB) |
| l | [リットル](https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%83%E3%83%88%E3%83%AB) |
| cft | Cubic[foot](https://en.wikipedia.org/wiki/Foot_(unit)) |

### その他のヤード・ポンド法の単位

| 単位 | 説明 |
| --- | --- |
| mph | [マイル毎時](https://en.wikipedia.org/wiki/Miles_per_hour) |
| sqft | [平方フィート](https://en.wikipedia.org/wiki/Square_foot) |

### サポート外の単位

以下は、よく使われるが現時点ではサポートされない単位です。代替も提示しています。

| 単位 | 説明 | 代替 |
| --- | --- | --- |
| °C | [セルシウス温度](https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%AB%E3%82%B7%E3%82%A6%E3%82%B9%E5%BA%A6) | [°C] + 273.15 K |
| °F | [Fahrenheit](https://en.wikipedia.org/wiki/Fahrenheit); | ([°F] + 459.67) × ​5/9 |
| u | [統一原子質量単位](https://ja.wikipedia.org/wiki/%E7%B5%B1%E4%B8%80%E5%8E%9F%E5%AD%90%E8%B3%AA%E9%87%8F%E5%8D%98%E4%BD%8D)。単位Daの別名。 | 1.66053906660e-27 kg |
| Da | [ダルトン](https://ja.wikipedia.org/wiki/%E7%B5%B1%E4%B8%80%E5%8E%9F%E5%AD%90%E8%B3%AA%E9%87%8F%E5%8D%98%E4%BD%8D)。単位uの別名。 | 1.66053906660e-27 kg |
| sr | [Steradian](https://en.wikipedia.org/wiki/Steradian) | 直接的な代替はない |
| lm | [ルーメン](https://ja.wikipedia.org/wiki/%E3%83%AB%E3%83%BC%E3%83%A1%E3%83%B3) | 直接的な代替はない |
| lx | [ルクス](https://ja.wikipedia.org/wiki/%E3%83%AB%E3%82%AF%E3%82%B9) | 直接的な代替はない |
| px | [ピクセル](https://ja.wikipedia.org/wiki/%E3%83%94%E3%82%AF%E3%82%BB%E3%83%AB) | 直接的な代替はないy |

[Top](#top)

## 使えない文字や名前

数式は非常に強力である反面、いくつかの文字の使用に制約があります。これに対応するため、FreeCADではオブジェクトの名前よりもラベルを使用することを推奨しています。ラベルには、ほとんどすべての特殊文字を使えます。

ラベルを使えない局面、例えばスケッチの拘束条件の名前などでは、使えない文字について注意する必要があります。

### ラベル

[ラベル](/Object_name/ja#Label "Object name/ja")では、使えない文字はないですが、いくつかの文字はエスケープする必要があります。

| 文字 | 説明 |
| --- | --- |
| `'`, `\`, `"` | これらの文字の前には`\`をつけてエスケープする必要があります。 |

例えば、`Sketch\002`というラベルを参照するには`<<Sketch\\002>>`と表記する必要があります。

### 名前

寸法、スケッチといったオブジェクトの[名前](/Object_name/ja#Name "Object name/ja")に、以下の文字を含めると不正な名前になってしまう。

| 文字 / 文字列 | 説明 |
| --- | --- |
| **+**, **-**, **\***, **/**, **^**, **\_**, **<**, **>**, **(**, **)**, **{**, **}**, **[**, **]**, **.**, **,**, **=** | 演算子や数式の構成要素に使われる文字 |
| **A**, **kA**, **mA**, **MA**, **J**, **K**,  **'** ,  **ft** , **°**, その他 | 単位に使われる文字列（詳細は[単位](#Units)を参照） |
| **#**, **!**, **?**, **§**, **$**, **%**, **&**, **:**, **;**, **\**, **|**, **~**, **∆**, **¿**, その他 | 特別な操作や意味をもつ文字 |
| **pi**, **e** | 数学定数 |
| **´**, **`**,  **'** , **"** | アクセント文字 |
| 空白 | 空白は名前の終わりを意味しているため、名前の一部には含められません |

例えば次の名前は正しい名前である：`<<Sketch>>.Constraints.T2üßµ@`。次の名前は不正な名前である： `<<Sketch>>.Constraints.test\result_2` （\rは「復回」の意味にある）、`<<Sketch>>.Constraints.mol`（molは単位である）。

短い名前（特に1文字、2文字の名前）は不正な名前になりやすいので、長い名前をつけるなど、適切な命名規則を採用することを検討してください。

### セルの別名

[スプレッドシートのSetAlias](/Spreadsheet_SetAlias#Usage "Spreadsheet SetAlias")を参照してください。

[Top](#top)

## CADデーターの参照

数式の中から、モデル自身のデーターを参照することができます。プロパティーを参照するには、`object_name.property`または`<<object_label>>.property`と記述してください。ラベルは`<<`と`>>`で括る必要があります。ラベルを使う場合、ラベルはユニーク（別のものに同じラベルを与えない）である必要があります。

以下の例はすべてオブジェクトを名前で参照しています、常にラベルを使うことも可能です。

もしプロパティーが複合フィールドの場合、個々のフィールドは`object_name.property.field`で参照することができます。

リストを参照するには、`object_name.list[list_index]`としてください。スケッチの拘束条件を参照するには、`Sketch.Constraints[16]`のようにしてください。同じスケッチ内であれば、名前を省略して`Constraints[16]`で参照できます。インデックス（添字）は0から始まることに注意してください。したがって、Constraint17は`Constraints[16]`で参照できます。

オブジェクト自身を参照するには、`_self`擬プロパティーを使って、`object_name._self`のようにしてください。

以下のテーブルに、いくつか例を示します。

| CADデーター | 数式での参照 | 結果 |
| --- | --- | --- |
| [Part Box](/Part_Box "Part Box")の長さ | `Box.Length` | 長さ（mm） |
| Boxの体積 | `Box.Shape.Volume` | mm³単位の体積（単位はなし） |
| Boxの形状タイプ | `Box.Shape.ShapeType` | 文字列「Solid」 |
| Boxのラベル | `Box.Label` | 文字列「Label」 |
| Boxの質量中心のx座標 | `Box.Shape.CenterOfMass.x` | mm単位のx座標（単位はなし） |
| Box位置のx座標 | `Box.Placement.Base.x` | x座標（mm） |
| Box位置の回転軸のx座標成分 | `Box.Placement.Rotation.Axis.x` | 単位ベクトルのmm単位のx座標成分（単位なし） |
| Box位置の回転角 | `Box.Placement.Rotation.Angle` | 回転角（deg） |
| Boxオブジェクト全体 | `Box._self` | <Part::PartFeature>型のオブジェクト |
| スケッチの拘束条件の値 | `Constraints.Width` | もし式がスケッチの中で使われた場合、同じスケッチの中の名前が`Width`という拘束条件の値 |
| スケッチの拘束条件の値 | `MySketch.Constraints.Width` | もし式がスケッチの外で使われた場合、`MySketch`の中の名前が`Width`という拘束条件の値 |
| スプレッドシート別名の値 | `Spreadsheet.Depth` | `Spreadsheet`という名前のスプレッドシートの`Depth`という名前の別名の値 |
| ローカルなプロパティーの値 | `Length` | ある（たとえば押し出し）オブジェクトのデータ**Length**という名前のプロパティーの値。同じオブジェクトの別のプロパティー（例えばデータ**Length2**）の数式から呼び出す場合。 |

### 循環参照

FreeCAD は、依存関係をプロパティではなくオブジェクト間の関係に基づいてチェックします。したがって、あるオブジェクトにデータを提供し、その同じオブジェクトから結果を取得することはできないことを意味します。プロパティ自体に循環依存が存在しない場合でも、スプレッドシートから寸法を取得するオブジェクトを作成し、そのオブジェクトの体積を同じスプレッドシートに表示することはできません。この場合、モデルを制御するスプレッドシートと、結果を報告するスプレッドシートの2つを使用する必要があります。

回避策として、[セルバインディング](/Spreadsheet_Workbench#Cell_binding "Spreadsheet Workbench")を使用し、**バインディングの依存関係を非表示**オプションを有効にすることで、2つ目のスプレッドシートのセル範囲を1つ目のスプレッドシートに（またはその逆に）表示することが可能です。

循環依存関係を回避する別の方法として、個々の式で`href`や`hiddenref`関数を使用して参照を非表示にする方法があります。例えば、`href(Box.Length)`のように記述します。

なお、これらの回避策はいずれも慎重に使用する必要があります。報告されるプロパティが同じスプレッドシート内の寸法に基づいている場合、これらの方法は機能しないことに注意してください。

[Top](#top)

## ドキュメント全体からアクセス可能なグローバル変数

現時点では、FreeCADにはグローバル変数はありません。変わりに、このような変数を[スプレッドシート・ワークベンチ](/Spreadsheet_Workbench "Spreadsheet Workbench")を使ったスプレッドシートのセルとして定義できます。そのセルに（セル上を右クリックして）別名を与えます。この別名は、おコアのオブジェクトのプロパティーと同じように、ドキュメント中のすべての数式から参照可能です。

[Top](#top)

## ドキュメントをまたがった参照

あるドキュメント中のオブジェクトのプロパティーを、数式から別のドキュメント（".FCstd" file）中のオブジェクトのプロパティーを参照して定義するのは、（制約はあるが）可能である。例えば、あるファイル中のスプレッドシートのセルやPart直方体のデータ**Length**、といったものを定義するために、別のファイル中のオブジェクトの位置のx座標の値やその他のプロパティーの値を数式から参照して使うことができます。

ドキュメントは、ファイル名で参照できます。初めてセーブするときは、デフォルトの「Unnamed1」のようなものとは違う名前をファイル名として指定すると思います。マスタードキュメントの名前がセーブの時に変わってしまってリンクが破損するのを防ぐために、まず最初にマスターファイルを作成し、スプレッドシートを作成し、まずセーブするようにしてください。その後で、ファイルの中身やスプレッドシートを編集してもいいのですが、ファイル名は変えないようにしてください。

一旦スプレッドシートを含むマスタードキュメントを作成し、名前をつけて保存すれば、それを参照するドキュメントは安全に作れます。例えば、マスタードキュメントの名前が`master`で、その中のスプレッドシートが`modelConstants`、セルの別名が`Length`だったとします。この値は次のようにして参照できます。

`master#modelConstants.Length`

それを参照するドキュメントから値を取得できるよう、マスタードキュメントを開いておく（ロードしておく）必要があることに注意してください。

何かを修正したい時に、後でそれを参照するドキュメントを読み込むかどうかはあなた次第です（訳注：マスタードキュメントを変更するだけでは、それを参照する子ドキュメントが自動的に更新されることはありません）。

[Top](#top)

## 既知の問題・残課題

* 現在のFreeCADには、組み込みの数式マネージャーはありません。数式マネージャーとは、ドキュメント中のすべての数式をリストアップし、一元的に数式を作成、削除、検索等ができる機能です。これを行えるアドオンがあります：[fcxref数式マネージャー](https://github.com/gbroques/fcxref)。
* 数式に関するバグやチケットは[GitHub](https://github.com/FreeCAD/FreeCAD/labels/Topic%3A%20Expressions)で参照できます。

[Top](#top)

## スクリプトからの利用

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")
cyl = doc.addObject("Part::Cylinder", "Cylinder")
cyl_name = cyl.Name

box.setExpression("Height", f"{cyl_name}.Height / 2")
box.setExpression("Length", f"{cyl_name}.Radius * 2")
box.setExpression("Width", "Length")

doc.recompute()

# Expressions are stored in the ExpressionEngine property:
for prop, exp in box.ExpressionEngine:
    val = getattr(box, prop)
    print(f"Property: '{prop}' -- Expression: '{exp}' -- Current value: {val}")

```

[Top](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Expressions/ja&oldid=1549428>"
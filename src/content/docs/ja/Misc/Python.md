---
title: Python
---
## 概要

[Python](https://www.python.org) is a general purpose, high level programming language that is very commonly used in large applications to automate some tasks by creating scripts or [macros](/Macros "Macros").

In FreeCAD, Python code can be used to create various elements programmatically, without needing to click on the graphical user interface. Additionally, many tools and workbenches of FreeCAD are programmed in Python.

See [Introduction to Python](/Introduction_to_Python "Introduction to Python") to learn about the Python programming language, and then [Python scripting tutorial](/Python_scripting_tutorial "Python scripting tutorial") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") to start scripting in FreeCAD.

## 可読性

Readability of Python code is one of the most important aspects of this language. Using a clear and consistent style within the Python community facilitates contributions by different developers, as most experienced Python programmers expect the code to be formatted in a certain way and to follow certain rules. When writing Python code, it is advisable to follow [PEP8: Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) and [PEP257: Docstring Conventions](https://www.python.org/dev/peps/pep-0257/).

These documents present explanations in a more user-friendly way:

* [How to Write Beautiful Python Code With PEP 8](https://realpython.com/python-pep8/)
* [Documenting Python Code: A Complete Guide](https://realpython.com/documenting-python-code/).

## コーディング規約

このドキュメントでは、Pythonの例に関していくつかの規約が定められています。

以下は関数シグネチャの典型的な例です。

```
Wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)

```

* Arguments with key-value pairs are optional, with the default value indicated in the signature. This means that the following calls are equivalent:

```
Wire = make_wire(pointslist, False, None, None, None)
Wire = make_wire(pointslist, False, None, None)
Wire = make_wire(pointslist, False, None)
Wire = make_wire(pointslist, False)
Wire = make_wire(pointslist)

```

:   In this example the first argument doesn't have a default value so it should always be included.

* When the arguments are given with the explicit key, the optional arguments can be given in any order. This means that the following calls are equivalent:

```
Wire = make_wire(pointslist, closed=False, placement=None, face=None)
Wire = make_wire(pointslist, closed=False, face=None, placement=None)
Wire = make_wire(pointslist, placement=None, closed=False, face=None)
Wire = make_wire(pointslist, support=None, closed=False, placement=None, face=None)

```

* Pythonのガイドラインでは、コードの可読性が重視されます。特に、関数名の直後に括弧を書くこと、コンマの後には空白を入れることなどです。

```
p1 = Vector(0, 0, 0)
p2 = Vector(1, 1, 0)
p3 = Vector(2, 0, 0)
Wire = make_wire([p1, p2, p3], closed=True)

```

* もしコードが複数行にまたがるときは、大括弧（ブラケット）または括弧内のコンマ位置で改行し、2行目は前の行と揃えて記述します。

```
a_list = [1, 2, 3,
          2, 4, 5]

Wire = make_wire(pointslist,
                False, None,
                None, None)

```

* ある関数が、さらに別の描画処理の（関数を適用する）ためのオブジェクトを返すことがあります。

```
Wire = make_wire(pointslist, closed=True, face=True)
Window = make_window(Wire, name="Big window")

```

## Imports

Pythonの関数はモジュールと呼ばれるファイルに収められています。あるモジュールの関数を呼び出す前に、`import`文をつかってドキュメントにそのモジュールをインポートする必要があります。

モジュールをインポートすると、`module.function()`のようにモジュール名を前置した関数呼び出しができるようになります。これによって、異なるモジュールに同名の関数があっても名前の衝突を防ぐことができます。
例えば、2つの関数`Arch.make_window()`と`myModule.make_window()`とは何の問題もなく共存できます。

Full examples should include the necessary imports and the prefixed functions.

```
import FreeCAD as App
import Draft

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1, 1, 0)
p3 = App.Vector(2, 0, 0)
Wire = Draft.make_wire([p1, p2, p3], closed=True)

```

```
import FreeCAD as App
import Draft
import Arch

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1, 0, 0)
p3 = App.Vector(1, 1, 0)
p4 = App.Vector(0, 2, 0)
pointslist = [p1, p2, p3, p4]

Wire = Draft.make_wire(pointslist, closed=True, face=True)
Structure = Arch.make_structure(Wire, name="Big pillar")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Python/ja&oldid=1543502>"
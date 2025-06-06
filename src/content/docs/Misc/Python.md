---
title: Python
---
## Description

[Python](https://www.python.org) is a general purpose, high level programming language that is very commonly used in large applications to automate some tasks by creating scripts or [macros](/Macros "Macros").

In FreeCAD, Python code can be used to create various elements programmatically, without needing to click on the graphical user interface. Additionally, many tools and workbenches of FreeCAD are programmed in Python.

See [Introduction to Python](/Introduction_to_Python "Introduction to Python") to learn about the Python programming language, and then [Python scripting tutorial](/Python_scripting_tutorial "Python scripting tutorial") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") to start scripting in FreeCAD.

## Readability

Readability of Python code is one of the most important aspects of this language. Using a clear and consistent style within the Python community facilitates contributions by different developers, as most experienced Python programmers expect the code to be formatted in a certain way and to follow certain rules. When writing Python code, it is advisable to follow [PEP8: Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) and [PEP257: Docstring Conventions](https://www.python.org/dev/peps/pep-0257/).

These documents present explanations in a more user-friendly way:

* [How to Write Beautiful Python Code With PEP 8](https://realpython.com/python-pep8/)
* [Documenting Python Code: A Complete Guide](https://realpython.com/documenting-python-code/).

## Conventions

In this documentation, some conventions for Python examples should be followed.

This is a typical function signature

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

* Python's guidelines stress readability of code; in particular, parentheses should immediately follow the function name, and a space should follow a comma.

```
p1 = Vector(0, 0, 0)
p2 = Vector(1, 1, 0)
p3 = Vector(2, 0, 0)
Wire = make_wire([p1, p2, p3], closed=True)

```

* If code needs to be broken over several lines, this should be done at a comma inside brackets or parentheses; the second line should be aligned with the previous one.

```
a_list = [1, 2, 3,
          2, 4, 5]

Wire = make_wire(pointslist,
                False, None,
                None, None)

```

* Functions may return an object that can be used as the base of another drawing function.

```
Wire = make_wire(pointslist, closed=True, face=True)
Window = make_window(Wire, name="Big window")

```

## Imports

Python functions are stored in files called modules. Before using any function in that module, the module must be included in the document with the `import` instruction.

This creates prefixed functions, that is, `module.function()`. This system prevents name clashes with functions that are named the same but that come from different modules.
For example, the two functions `Arch.make_window()` and `myModule.make_window()` may coexist without problem.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Python/en&oldid=1461225>"
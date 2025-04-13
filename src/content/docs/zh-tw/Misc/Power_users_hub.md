---
title: 進階用戶區
---
![](/images/Power_user_hub.png)

---

這是一個讓你更加深入了解FreeCAD的地方。在這裡你可以學習如何為你的需求客製化FreeCAD。

FreeCAD有一個最棒的特色就是你可以藉由腳本來擴充功能並且幾乎沒有限制，而且你並不需要接觸到FreeCAD本身的原始碼或是編譯任何東西。所有的腳本都是由[Python](http://en.wikipedia.org/wiki/Python_(programming_language))這個簡單但是強大的程式語言寫成的。藉由Python你幾乎可以使用FreeCAD的各種功能。舉例來說，你可以:

* **創造和修改模型**:你有一些特殊的模型是FreeCAD的預設安裝中沒有的嗎?你可以容易地創造出一個物件型態，不論是從scratch 或是藉由adapting an existing type。

* **製作客製化工具以及命令**: 目前為止FreeCAD已經擁有許多功能，但還沒有足夠多方便的功能給終端使用者。不過他已經可以容易的製作出你自己的工具組。
* **修改介面**: FreeCAD的使用者介面現階段依然十分的基本。不過你可以擴展任何你需要的東西。例如，創建一個工具列並將你的工具放入，建立特別的控制面板來和你的工具互動等等。
* **修改場景表現**: FreeCAD有separate processes 來建立與計算幾何模型，並且將它顯示在你的螢幕。你可以全方位的控制展現在你螢幕上的東西，因此你可以改變他的展現方式，與場景互動或是增加各種客製化的動作和螢幕小工具，例如顯示目前資訊、拖拉圖案、anchors 、或者暫時的實體。

這個頁面還在早期開發階段。如果你找不到你所需要的資訊，或是你在其他地方找到有用的資訊，請在[論壇](http://forum.freecadweb.org/)上留言，或者何不 [直接由你來幫忙增加本頁面的內容!](/Help_FreeCAD "Help FreeCAD")

## 客製化 FreeCAD

* [客製化介面](/Interface_Customization "Interface Customization"): Starting with the beginning: Toolbars and shortcuts
* [使用Marco](/Macros "Macros"): Easily record often repeated tasks or Python code
* [Macros 範例](/Macros_recipes "Macros recipes")
* [客製化工具列](/Customize_Toolbars "Customize Toolbars")
* [安裝更多的workbench](/Installing_more_workbenches "Installing more workbenches")
* [外掛程式載入器](http://forum.freecadweb.org/viewtopic.php?t=10556)
* [Addons installer.FCMacro](https://github.com/FreeCAD/FreeCAD-addons)

在FreeCAD撰寫腳本

### General

### 一般主題

* [介紹 Python](/Introduction_to_Python "Introduction to Python") - See also other Python tutorials at the bottom of this page
* [FreeCAD 腳本撰寫教學](/Python_scripting_tutorial "Python scripting tutorial") - A general look at python scripting in FreeCAD
* [FreeCAD腳本基礎篇](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics"): Well, the basics...
* [人機介面命令](/Gui_Command "Gui Command") : Adding custom commands to the GUI
* Using mixed [Units](/Units "Units") in FreeCAD

### 模組

The functionality of FreeCAD is separated in Modules which deal with special data types and applications. FreeCAD has built-in modules and Extension Modules (plug-ins). Once plugin modules are installed, they become availible to you as easily as the built-in modules. The modules described below are the default modules, includeed in every FreeCAD installation.

* The [內建模組](/Builtin_modules "Builtin modules") are the principal FreeCAD modules. They contain tools for manipulating general FreeCAD configurations, documents and their contents.
* [創造Workbench](/Workbench_creation "Workbench creation") shows you how to create your own workbench

#### Working with Meshes

* [Mesh Scripting](/Mesh_Scripting "Mesh Scripting"): How to interact with the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench")

#### Working with Parts

### Working with Parts

* [零件模組](/Part_Workbench "Part Workbench"): How [Open CASCADE Technology](http://en.wikipedia.org/wiki/Open_CASCADE) tools and structure is used in FreeCAD
* [寫腳本來操作拓樸資料](/Topological_data_scripting "Topological data scripting"): How to interact with the Part Workbench
* [PythonOCC](/PythonOCC "PythonOCC"): How to unleash the whole Open CASCADE power
* [從mesh檔到零件檔](/Mesh_to_Part "Mesh to Part"): Converting between object types

#### Accessing the Coin scenegraph

* [The Coin/Inventor scenegraph](/Scenegraph "Scenegraph"): How the FreeCAD scene representation works
* [Pivy](/Pivy "Pivy"): How to access and modify the scenegraph

### Controlling the Qt interface

### 控制Qt介面

* [PySide](/PySide "PySide"): How to access the interface, and modify its contents
* [Using the FreeCAD GUI](/Embedding_FreeCADGui "Embedding FreeCADGui") in another Qt application with PyQt

### Working with parametric objects

* [Scripted objects](/Scripted_objects "Scripted objects"): How to make 100% Python-scripted objects in FreeCAD
* [工程圖模組](/Drawing_Workbench "Drawing Workbench"): Automating the 3D-to-2D process

* [Scripted objects](/Scripted_objects "Scripted objects"): how to make 100% Python-scripted objects.
  + [Scripted objects with attachment](/Scripted_objects_with_attachment "Scripted objects with attachment"): how to make scripted objects attachable to other objects.
  + [Scripted objects saving attributes](/Scripted_objects_saving_attributes "Scripted objects saving attributes"): how to save and restore attributes of the proxy class with `dumps` and `loads`.
  + [Scripted objects migration](/Scripted_objects_migration "Scripted objects migration"): how to migrate old scripted objects to a new class.

### Examples

### Examples

* [範例小程式](/Code_snippets "Code snippets") : A collection of pieces of FreeCAD Python code, to serve as ingredients in your scripts...
* [Line drawing function](/Line_drawing_function "Line drawing function"): How to build a simple tool to draw lines
* [Dialog creation](/Dialog_creation "Dialog creation"): How to construct dialogs with Qt designer, and use them in FreeCAD
* [Embedding FreeCAD](/Embedding_FreeCAD "Embedding FreeCAD"): How to import FreeCAD as a Python module in other applications
* The [Draft Workbench](/Draft_Workbench "Draft Workbench") adds basic 2d drawing functions to freecad. It is written entirely in Python, so it can be a good example if you want to write your own modules.
* [FreeCAD vector math library](/FreeCAD_vector_math_library "FreeCAD vector math library") : A couple of handy functions to manipulate FreeCAD vectors. This library is also included in the Draft module.

## API Functions

The complete API documentation of FreeCAD is located at <http://www.freecadweb.org/api/> . It contains both C++ and Python APIs, and is not totally well formatted yet, which can be confusing when looking for python-only code. An easier to browse version can be found [here](/Category:API "Category:API"). Note that it can be incomplete, since it is updated manually. For more accurate information, browse the modules directly from FreeCAD's Python console.

Related: [Exposing C++ to Python](/Exposing_C%2B%2B_to_Python "Exposing C++ to Python")

## Advanced modification

* [Start up and Configuration](/Start_up_and_Configuration "Start up and Configuration"): Startup and command line options
* [Installing on Windows](/Installing_on_Windows "Installing on Windows"): Using the windows installer
* [Compiling FreeCAD on Windows](/Compile_on_Windows "Compile on Windows") and [Compiling FreeCAD on Linux](/Compile_on_Linux "Compile on Linux")
* [Branding](/Branding "Branding"): Simple modifications you can do to the source code to change some aspects of FreeCAD
* [Extra python modules](/Extra_python_modules "Extra python modules") : Extend the FreeCAD python interpreter with these powerful modules!

## Python tutorials

These are good generic tutorials, not specific to FreeCAD, that might interest you if you are totally new to python.

**Python**

* [Official python tutorial](https://docs.python.org/3/tutorial/index.html) - A very complete tutorial for discovering python
* [Non-programmer tutorial for python](https://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python_3) - an excellent wikibook
* [Python for newbies](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - one big tutorial covering all the basics

**PySide** - How to create and manage FreeCAD's Qt UI interface from python

* [PySide tutorial](http://zetcode.com/gui/pysidetutorial/) : A platform-agnostic tutorial showing the usage of PySide with examples
* [PySide/PyQt tutorial](http://www.pythoncentral.io/series/python-pyside-pyqt-tutorial/) : A easy to read tutorial that covers PySide and PyQt with examples
* [PySide documentation](http://qt-project.org/wiki/PySideDocumentation) : from the Qt Project (the people who wrote it all)
* [Using QtCreator in PySide](http://qt-project.org/wiki/QtCreator_and_PySide) : also from the Qt Project
* [PySide reference](http://srinikom.github.io/pyside-docs/index.html) : endless detail on the minutiae of PySide and Qt, a reliable reference source
* [PySide code snippets](http://nullege.com/codes/search?cq=PySide) : a searchable database of PySide code snippets

The following two references are PyQt specific (not PySide) but may offer some information of use:

* [Basic PyQt tutorial](http://www.cs.usfca.edu/~afedosov/qttut/) : A simple and short linux-based tutorial that will explain how to work with PyQt and Qt Designer
* [Programming Qt applications in python](http://vizzzion.org/?id=pyqt) : A more in-depth tutorial covering all the process of working with qt and python

**Pivy** - How to interact with FreeCAD's 3D scenes

* [Pivy - Embedding a Dynamic Scripting Language into a Scene Graph Library](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.947&rep=rep1&type=pdf) : Thesis that explains Pivy in detail
* [High Level 3D Graphics Programming in Python](http://ftp.ntua.gr/mirror/python/pycon/dc2004/papers/47/) : Pivy example from Pycon 2004
* [Introducing Pivy into studierstube](https://www.semanticscholar.org/paper/Integrating-Pivy-into-Studierstube-4.2-Gruber/08c9a89c8326c87f81c2d83428029fbfb6c2ae64) [(Mirror)](https://www.researchgate.net/publication/228737136_Integrating_Pivy_into_Studierstube_42) : A paper that is not really a tutorial, but that illustrates well how Pivy works (requires an academic account)

## Community projects

On the [Community portal](/FreeCAD_Community_Portal "FreeCAD Community Portal"), you can find other FreeCAD-based projects run by the FreeCAD users community. If you are starting a new FreeCAD project, be sure to list it there! We also have a page with things you can do if you would like to [Help FreeCAD](/Help_FreeCAD "Help FreeCAD").

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/zh-tw&oldid=1463667>"
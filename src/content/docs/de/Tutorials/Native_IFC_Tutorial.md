---
title: Anleitung Native-IFC
---
|  |
| --- |
| Tutorium |
| Thema |
| Anleitung Native-IFC |
| Niveau |
| Zwischenstufe/Fortgeschritten |
| Zeit zum Abschluss |
| 60 Minuten |
| Autoren |
| yorik |
| FreeCAD-Version |
| 1.0 |
| Beispieldateien |
|  |
| Siehe auch |
| *None* |
|  |

## FreeCAD and native IFC tutorial

![](/images/Nativeifc-tutorial-01.jpg)

[FreeCAD](https://freecad.org), a Free and Open-Source (FOSS) 3D CAD modeling platform, offers [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) tools since many years with the Arch workbench. Starting from version 1.0, released in November 2024, the Arch tools have been extended and renamed to become the [BIM workbench](/BIM_Workbench "BIM Workbench"), and extended with a new native IFC system. This tutorial will walk you through the different concepts used in native IFC, and how to apply them working on an example model.

### Das IFC-Format

One cannot start talking of native IFC without a word first about the [Industry Foundation Classes](https://en.wikipedia.org/wiki/Industry_Foundation_Classes), better known as IFC. IFC is a file format, but also and more fundamentally a data format. It is a standard (it is a registered ISO norm) that specifies how the different components of a building should be represented digitally, what properties each of them should have, what relationship they can or should have with other elements. etc. In short, it is a recipe to describe a building digitally.

The IFC format has many interesting features. First of all, it is open and public (it is maintained by a consortium, like the HTML format), it derives from the STEP format, a well-known, rock-solid 3D geometry format widely used in the mechanical industry, it is human-readable (you can open it with a text editor), and the data can be written in not only one, but several file formats, and even be used as a database.

These features make the format geometrically reliable, thanks to its STEP (grand)father, but also a very wise choice to trust your data to, because in 50 years from now you will still be able to open IFC files and recover the data, even if your BIM application has disappeared. IFC files are also increasingly becoming the preferred file format requested by authorities when delivering building permits.

Up to now, though, the IFC format has mostly been used as an *export* format. Designers would still save their projects using the native file format of their BIM application, and would export IFC files when needed. This is good enough to show your work around, but pretty bad if other people need to work with that model too, because there is a lot of data loss and the data is entirely rewritten on each export, so using a new version of the model is often a headache for other people.

With native IFC, we aim to change that.

### Das Native-IFC-Konzept

The idea comes from a [paper by Bruno Postle](https://github.com/brunopostle/ifcmerge/blob/main/docs/whitepaper.rst) that describes how the IFC format could be used not only as an export format, but also as a main project file, instead of the (usually proprietary) formats used by BIM applications. To achieve that, it is essential that BIM applications treat the IFC format natively, that is, instead of converting their own content from their internal format to IFC each time, they should directly manipulate IFC data.

![](/images/Nativeifc-tutorial-02.jpg)

image from Bruno Postle's paper

Concretely, in FreeCAD, you can open or create IFC models, explore them, modify their contents, and each change will be clearly registered, locatable, identifiable, undoable. Changes done by others while you were working can be merged together, even if they are working with other (native IFC) applications.

![](/images/Nativeifc-tutorial-03.jpg)

The image above shows a compact and limited change to a file when adding a new wall

The work on native IFC in FreeCAD is not finished, but it is already totally usable 'for real work'. If you already know the FreeCAD BIM tools, there is very little to learn, as most of the workflow uses the same tools.

### Do I need IFC?

The decision is yours. IFC is a strict format, where each element (a wall, a storey, a window) has very strict attributes and features, that cannot be modified. This standardization ensures its compatibility and reliability. It also means 'you cannot do whatever you want' with IFC. You need to respect what the format defines. This is welcome and excellent when working with others, as that's exactly what we ask of a *standard*. There are guarantees about what you will find when opening an IFC file, but this can also obviously limit creativity.

One of the axioms of the BIM workbench in FreeCAD is not to limit creativity. Anything is possible, any geometric shape is possible, any parametric relationship is possible. When working with the BIM workbench without native IFC, this freedom is at your fingertips. When enabling native IFC, this freedom becomes restricted. Is that good of bad for your project? It depends.

I would personally recommend working without IFC when you are working alone and still developing concepts, so you benefit from maximum freedom. When your project has stabilized, and other people get involved, that might be the moment to switch to native IFC, to benefit from standardization. Remember, you can switch anytime, or even export your non-native IFC project to IFC anytime. It is rarely necessary to start with native IFC immediately.

## Opening and creating IFC models

### Finding and viewing IFC models

If you have never worked with IFC before, you might want to start by having a good look at a few example models. Being an open format, fortunately, example models are very easy to find on the internet. A simple 'example IFC models' search will get you far. I would suggest for example this [canonical example house](https://github.com/buildingSMART/Sample-Test-Files/tree/main/PCERT-Sample-Scene/IFC%204.0.2.1%20(IFC%204)) kept by the IFC consortium, but several websites have gathered collections of example files, such as [this one on BIMPlot](https://bimplot.com/free-ifc-project-samples-for-architects-and-bim-enthusists/).

![](/images/Nativeifc-tutorial-04.jpg)

There are many applications to view IFC files. Some are free of charge, and some are even Free and Open-Source (FOSS). Among proprietary but free IFC viewers, good ones are [BIMVision](https://bimvision.eu/) or the [ODA IFC viewer](https://openifcviewer.com/) (which runs on Win/Mac/Linux). Among FOSS viewer, a simple one I use a lot is [IFC++](http://www.ifcquery.com/), which is included in the Debian/Ubuntu repositories. Both [FreeCAD](https://freecad.org) and [Bonsai](https://bonsaibim.org) are also good and fast IFC viewers.

Being able to open and view your IFC files in another application is fundamental when working with IFC files, as it allows you to double-check that what you are sending to your coworkers or your clients has everything it needs to have.

### What makes a good IFC model

The IFC format is complex, and BIM applications, even the most expensive commercial ones, are notoriously bad or very bad at handling IFC files. So your mileage might vary, the IFC files you encounter might be of very bad quality and full of junk, sometimes to the point where they are hardly usable. This has often been used by advocates of proprietary BIM applications to discredit the IFC format and try to demonstrate its inefficiency.

It is not hard to create quality IFC models, though. But one needs an application that treats the format seriously and leaves the user in control of what is exported and how.

The things that you should know are few:

* As inherited from the STEP format, an IFC file is **a text file**, where each line represents an element, and starts with an ID number. For example:

  ```
  #66=IFCWALL('3JmWkr',$,'MyWall',$,$,(#71),$,$,$,.SOLIDWALL.);
  ```

  The above line defines an element of class **IfcWall**, with ID 66. the things inside the parentheses are its attributes. More about attributes below.

  The important piece is the **class** (as in 'Industry Foundation Classes'). Each element has a class, that defines the type of element: A wall, a window, but also a floor, a space, or even a line, a circle, a point in the 3D space or even concepts like a moment in time, or a task to do. Most useful IFC classes for building elements are derived from the [IfcBuildingElement](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifcproductextension/lexical/ifcbuildingelement.htm) class.
* IFC models usually follow a **strict structure**: In each file there should be one and only one **IfcProject**. The [IfcProject](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcProject.htm) is the root of all objects inside an IFC model. Under the IfcProject, there is usually at least one **IfcSite**, that can contain one or more **IfcBuildings**, which in turn are divided in **IfcBuildingStoreys**. These can be further divided into **IfcZones** and **IfcSpaces**.
* Building elements, such as **IfcWalls** or **IfcWindows** are then **related** to one of the structures above, usually an IfcBuildingStorey, but they can also be related to another building element, so one element can be composed of several others. These relations are always explicitly stated in the IFC files, they are never automatic or implicit.
* IFC elements, be they building elements such as walls or windows, or structure elements such as sites and storeys, or any of the many other [element classes](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/annex-b1.html) offered by the IFC format, all have a predefined set of **attributes**. Attributes are things like name, position in space, or unique ID number, that are defined in the format. All entities of the same class must have the same attributes. Elements can also have **properties**. Contrary to attributes, properties are not defined by the IFC format, and can be defined freely by the user (or the BIM application). Think of them as custom attributes. The IFC format also proposes default sets of properties for many element classes. For example, for beams, there is a set called [BimCommon](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/Pset_BeamCommon.htm) that holds a series of properties that are typical for beams.
* The **geometry** of IFC elements is defined in separate elements, that are attached to each wall, window, door, etc. It can also be shared by several elements. There are many, many ways to define geometry, and that's where many problems begin. Building elements can have both a 3D geometry and a 2D geometry (for example a plan view or footprint), and also for example a linear geometry (that is useful for stability studies). Good geometry is usually well-defined and sensibly constructed. For example, the geometry of a simple wall would be defined by a rectangle on the ground, with width and length, that is then extruded vertically by a given height to produce the wall shape. This is 3 lines in the IFC file: The rectangle, the extrusion, and the position of the final object. It is recognizable by other BIM applications, and the parameters can be changed, for example the width of the base rectangle.
* In some IFC files you might receive, this logical information might be completely lost, and the wall geometry defined as a bunch of triangular facets. This is often the cases with files that have been converted to IFC from another format. There might be further problems such as incomplete relationships, etc. Suffices to say, the IFC format allows for a huge range of ways to define geometry, from the 'dumbest' ones (triangular facets) to the 'smartest' ones (NURBS-based objects), with a big focus on well-defined solids (such as our extruded rectangle). Fortunately for us, that is FreeCAD's specialty.

### Opening, creating and converting IFC models

In FreeCAD, opening an IFC file is done like any other file, via menu **File → Open**. By default, IFC files will load with only one element appearing in the **Tree view**. That is the fastest way to import, and you can usually import a 100Mb model in seconds.

![](/images/Nativeifc-tutorial-05.jpg)

You can change the native IFC import preferences under **Edit → Preferences → BIM → Native IFC**. You can have for example the whole building structure revealed on import, or being asked each time.

Creating a new IFC model simply starts with creating a new IFC project under menu **3D/BIM**.

Converting a non-IFC FreeCAD model to native IFC can be done simply by exporting it to IFC, using menu **File → Export** or using the lock button (more about that below).

## Exploring the model

### Expanding model contents

By default, opening IFC files will show only the first, outer element of the file. Usually the IfcSite. To view the contents of that element, and of the subsequent ones, you need to **expand** it. Expanding is done by **double-clicking the element in the Tree view** or, alternatively, via the **Utils → IFC expand** menu option. This command can be [customized](/Interface_Customization "Interface Customization") and be assigned a keyboard shortcut, so it's possible to navigate the Tree view with the arrow keys and expand your model where needed entirely using the keyboard.

![](/images/Nativeifc-tutorial-06.jpg)

Double-clicking an element in the Tree view will, the first time, reveal its children, and, the second time, or if there are no more children to reveal, **load its full properties, material and shape**.

This allows to load a model as quickly as possible, and expand/define elements as needed. You can change this behavior under **Edit → Preferences → BIM → Native IFC**.

### Locking and unlocking

When an IFC model is loaded in FreeCAD, it can be locked or unlocked. By default, opening IFC files will lock them, while importing them (using **File → Import**) will leave them unlocked.

Locking or unlocking is simply done using the lock button in the FreeCAD status bar:

![](/images/Nativeifc-tutorial-07.jpg)

* **Locked mode** means that the FreeCAD document IS the IFC file. You don't see the IfcProject (it is the FreeCAD document itself in the Tree view), and anything you do in that document is automatically, transparently and immediately done in the IFC data itself. Adding a wall will modify the IFC file, as well as adding a line or a dimension, everything is done in IFC. you cannot have any FreeCAD element in the document that is not part of the IFC file. You can convert any FreeCAD model (BIM or not) to IFC by clicking the lock button.
* **Unlocked mode**, also called hybrid mode, means the IFC project resides inside a **project** object. You can still have normal, non-IFC FreeCAD objects besides the IFC elements. To add an element to the IFC project, you must add it yourself to it by dragging it onto the project or one of the sub-elements of the project. You can create a new, blank IFC project using menu **3D/BIM → Project**.
* **Working with no IFC project at all**: Remember you don't need to create an IFC project to start a BIM project (that can be done anytime later if needed). You can simply start building walls, adding floors and roofs, without defining an IFC structure or even caring about IFC.

Locked mode means careful mode: When opening a file by somebody else, you don't want to break anything, you want to explore the file, and maybe fix something or do a few localized changes. You want to make sure the changes you did are strictly located and traceable.

In all other cases, there is no real need or advantage to lock your model. In fact, you can change the default behavior to open IFC models as unlocked if you prefer, under **Edit → Preferences → BIM → Native IFC**.

When changing to an IFC model, you often want to verify **what you have changed in the IFC data** since the last save. This is done using **Utils → IFC Diff**. The changes are presented in the [diff format](https://en.wikipedia.org/wiki/Diff), with sections highlighted in red and green. This format is also understandable by computer systems like Git, which are able to track large change sets, and therefore turn your IFC files first-class citizens under such systems.

![](/images/Nativeifc-tutorial-08.jpg)

### Model structure

As seen above, most IFC files use a standard **Site → Building → Storey** structure. This is so common that it is often considered mandatory, although it is not expressly stated in the IFC standard. You could very well have all your elements directly related to the IfcProject. However, since standardization works when everybody decides to use the same system, it is advisable to have at least one site, one building and one storey (called **Level** in FreeCAD) in your model.

![](/images/Nativeifc-tutorial-09.jpg)

In FreeCAD, it is possible to use **Groups** to organize your objects further under a level. For example, inside your first floor, you could create a 'Walls' group to add all your walls, a 'Carpentry' group to add your wooden beams, etc. Groups are supported by IFC, however it is not standard to put groups inside a building structure element like a storey. For this reason, groups by default are written as **IfcBuildingElementAssemblies** instead of IfcGroups. At FreeCAD, though, we believe such behavior is useful and should be permitted. So there is a preference option to allow it. Most BIM applications will happily open files with groups inside other elements. That preference option is there to help spread our vision and possibly convince people.

So, hands on, let's start breaking our model…

## Adding and modifying elements

### Modifying attributes and properties

Once we have opened a model, we can start modifying its contents. Be aware that at the moment I'm writing this tutorial, there is **no graphical geometry editor** for IFC elements (this is on the roadmap and should land pretty soon, though). The way to modify the geometry of elements is by modifying their **geometric properties**.

When IFC elements are loaded from the file, their attributes are rendered in the [properties editor](/Property_editor "Property editor") under the **IFC** group. There, you can change things like name, description or even the class of elements.

When double-clicking an element in the Tree view, you will first reveal the child elements of that element. When double-clicking it a second time, you will load additional data such as **property sets**, **custom properties**, **materials** and **shape data**. It will additionally create a set of **geometry properties** that will allow you to modify the geometry of that element. These geometry properties also form the foundations of the future graphical editor.

![](/images/Nativeifc-tutorial-10.jpg)

All these additional properties can be changed directly, and new custom properties can be added using the two buttons under the properties editor.

### Modifying geometry

You can change the position of any element by changing its **Placement** property (or using the [Move](/Draft_Move "Draft Move") or [Rotate](/Draft_Rotate "Draft Rotate") tools).

To modify the geometry, such as the width of a wall, you need first to double-click twice to reveal its **geometry properties**. If that wall was constructed the standard way, as an extruded rectangle, you will see the width and length of the rectangle, as well as the extrusion height, among those properties.

Of course, everything depends on how the wall was defined in the IFC file. It might not be an extruded rectangle. In that case, fewer or other geometry properties might be available.

### Adding new BIM objects

How you add new objects depends on the current mode: locked or unlocked. When locked, anything you draw, such as a wall or a column, is automatically created in the IFC file itself. You might need to put it under the right level or building after creation, which is done simply by dragging the new wall under the right level in the Tree view.

In unlocked mode, your new wall will not be an IFC element yet. You always need to drag the wall yourself to the right place after creation.

### Types

In IFC, any element can be defined by a [type](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifckernel/lexical/ifctypeproduct.htm). A type (ex. IfcWallType, IfcWindowType) is an IFC element that can hold common characteristics, properties or even geometry, that will automatically be used by all objects of that type. In some BIM applications, this is sometimes referred to as families.

In FreeCAD, in non-IFC BIM projects, we used to do this using cloning. In native IFC, there is full support for types. To define a type, the easiest way is to build an object of a desired class, for example a wall, then right-click it in the tree view and choose **IFC → Convert to type**.

When an object is converted to a type, it is moved to a special *Types* group under the project. It can then be referenced by any other wall in the project.

![](/images/Nativeifc-tutorial-11.jpg)

The above image shows our wall that is now using the 'My Wall Type' as its type

### Adding downloadable contents

In a BIM project, one often needs to add downloadable contents, such as pieces of furniture, appliances or elements such as prefabricated window frames. These elements are typically downloaded from manufacturers websites, or BIM library websites.

In all those cases, the quality and format of the elements you download, are of importance. You should care (in that order) about using a file format well supported by FreeCAD, getting models with good geometric quality, and enough metadata (color, materials, manufacturer info, etc…). Some good ideas are:

* STEP files from [GrabCAD](https://grabcad.com/library?page=1&time=this_month&sort=popular&softwares=step-slash-iges): STEP files are very well supported by FreeCAD and usually always contain high-quality geometry, as it is a favorite engineering format. They usually convert very well to IFC too.
* IFC files from model libraries like [BIMObject](https://bimobject.com): While using the IFC format might sound interesting, the IFC files made available by these website are often converted automatically from other (proprietary) formats, and the quality can be very low.
* Exporting models from BIM proprietary applications such as Revit or ArchiCAD to the SAT format, and open these in FreeCAD using the [Inventor Loader](https://github.com/jmplonka/InventorLoader) addon (installable from the [Addon manager](/Std_AddonMgr "Std AddonMgr")). While these applications will allow to export parts and elements to IFC, they will often degrade the geometry. Exporting types and families to SAT format often gives a similar quality as STEP files. The Inventor Loader, though, is a work in progress and might not work with each and every file.

### Saving and handling files

A FreeCAD file containing a native IFC project, be it locked or unlocked, will always have an attached IFC file, where the IFC data is stored. When you create a new project, and you did not save the file yet, the IFC contents lives in the memory. As soon as you save the file, a companion IFC file is created and from now on attached to the FreeCAD file.

In **locked mode**, the FreeCAD document contains in its *IFC File Path* property the path to the companion IFC file. Since everything that happens in FreeCAD happens directly in the IFC file, there is no more need of the FreeCAD file anymore. The 'Save' and 'Save as' entries in the FreeCAD file menu are replaced with 'Save file IFC' and 'Save IFC file as'. When you save the file, you will be saving the IFC file, and no FreeCAD file is written. Literally, you only work with the IFC file.

In **unlocked mode**, a *project* object exists in the FreeCAD document, that also has a *IFC file Path* property that points to its companion IFC file. If you distribute your file to someone else, you will need to give them the IFC file too. If you move the IFC file, you will need to fix the *IFC File Path* property of the project object.

It is possible to distribute the FreeCAD file without the IFC file, though: Set the *Shape Mode* property of all objects to 'Shape'. This will make the FreeCAD file retain the shape of all objects, and open correctly even if the IFC file is not present. The objects, however, will not be editable in that case.

## Creating output

### Creating views and 2D content

2D views, to be put on [TechDraw sheets](/TechDraw_Workbench "TechDraw Workbench"), can still be created the [same way as before](/BIM_Workbench "BIM Workbench"): Adding [section planes](/Arch_SectionPlane "Arch SectionPlane"), creating [2D views](/BIM_Shape2DView "BIM Shape2DView"), filling them with annotations, then [placing them](/BIM_TDView "BIM TDView") on [sheets](/BIM_TDPage "BIM TDPage"). The process is exactly the same with non-IFC BIM models as with native IFC models.

By default, though, native IFC objects are loaded without their shape (their *Shape Mode* property is set to 'Coin'). This saves a lot of time when loading. But the cutting algorithms used to generate 2D views need the full shape, so when including native IFC objects in a section plane, their Shape Mode will automatically be set to 'Shape'.

While the final sheet itself cannot currently be saved to the IFC file, the 2D views, section planes and their annotations can. When adding (by drag and dropping in unlocked mode, or automatically in locked mode) a section plane to a project, a group will automatically be created under the project. That group represents a 2D view (its *Object Type* property is set to 'DRAWING'), and everything you add to that group will be part of that 2D view.

![Screenshot of a 2D view created from an IFC project](/images/Nativeifc-tutorial-12.jpg)

### Creating sheets

At the moment, sheets are not saved in the IFC file. So in case of locked files, the sheets will need to be recreated.

### Creating schedules

Schedules and all kinds of queries can be created the same way for native IFC as for non-IFC projects, using the [Schedule tool](/Arch_Schedule "Arch Schedule"). Schedules can also be added to a native IFC project. In that case, their companion spreadsheet is not saved in the IFC file and must be re-created when opening the file.

## Python scripting

### IfcOpenShell

[IfcOpenShell](https://ifcopenshell.org/) is the software component used in all IFC-related operations in FreeCAD. The BIM workbench can function without it, but in that case all IFC operations are disabled. IfcOpenShell is responsible for creating and modifying IFC files and IFC objects, as well as producing BREP geometry for the FreeCAD objects that represent IFC elements. FreeCAD currently uses IfcOpenShell only via its Python interface.

IfcOpenShell offers a [broad documentation](https://docs.ifcopenshell.org/) that explains in detail how to use it.

You can also use both IfcOpenShell and ifc\_tools to manipulate IFC data directly. Below is a short example of how to use IfcOpenShell to open an IFC file and analyze its contents:

```
import ifcopenshell
my_ifc_file = ifcopenshell.open("/path/to/some/file.ifc")
walls = my_ifc_file.by_type("IfcWall") # get a list of all IfcWalls
some_specific_object = my_ifc_file[66] # get an object by its ID
some_specific_object = my_ifc_file.by_id(66) # alternative way
print(some_specific_object.Name) # you can access attributes that way

```

IfcOpenShell itself has no specific FreeCAD functionality (yet), so you would use it basically to do non-FreeCAD operations on objects, for example retrieve or modify objects and attributes, modify attributes, or even directly add objects. Be sure to have a look at the [IfcOpenShell Python documentation](https://docs.ifcopenshell.org/ifcopenshell-python.html) to know more.

In FreeCAD, once you load an IFC file, an IfcOpenShell file object is created and attached to the project (the project object for unlocked files or the FreeCAD document itself for locked projects). Everything you do in FreeCAD actually manipulates that object. You can easily get access and manipulate the IfcOpenShell file object of a FreeCAD native IFC project. For example, in locked mode, you do:

```
import FreeCAD
my_doc = FreeCAD.loadFile("/path/to/some/file.ifc")
my_ifc_file = my_doc.Proxy.ifcfile

```

In unlocked mode, each project object also has a `Proxy.ifcfile` member.

### The ifc\_tools module

The [ifc\_tools](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/nativeifc/ifc_tools.py) module is the main tool to use IfcOpenShell in FreeCAD's BIM module. It contains many tools and functions to do everything FreeCAD needs to do with IFC files and objects, such as creating new files, opening files, creating elements, modifying attributes, etc.

When working with FreeCAD objects, using ifc\_tools is much more convenient as it handles for you all the relationship between the FreeCAD object and the IFC object it represents. For example:

```
from nativeifc import ifc_tools
selection = FreeCADGui.Selection.getSelection()
my_obj = selection[0] # just get the first selected object
project = ifc_tools.get_project(my_obj)
ifcfile = ifc_tools.get_ifcfile(project)
ifc_elem = ifc_tools.get_ifc_element(my_obj)
my_obj.LongName = "Changed long name" # this updates the IFC data too
print(ifc_elem.LongName)

```

There is much more in ifc\_tools, such as utilities to create and modify FreeCAD objects (and their underlying IFC elements). Below are a few simple examples to get you started:

#### Load the shape of selected objects

By default, opening an IFC file will only load a lightweight 3D representation of each element. To do more serious work with them, we might need to load their full shape:

```
for obj in FreeCADGui.Selection.getSelection():
    obj.ShapeMode = "Shape"
FreeCAD.ActiveDocument.recompute()

```

#### Load the property sets of selected objects

Property sets and their included properties are rendered as object properties in FreeCAD. Once they are loaded, you can simply manipulate the values through the properties editor in FreeCAD (or via Python):

```
from nativeifc import ifc_psets
for obj in FreeCADGui.Selection.getSelection():
    ifc_psets.show_psets(obj)
my_object.FireResistanceClass = "1B" # manipulate properties once loaded

```

#### Saving an IFC file

```
ifc_tools.save(project)

```

#### Add a new IFC document

Use the **Project** tool from the [BIM workbench](/BIM_Workbench "BIM Workbench") to produce a native IFC project object. It is not mandatory to save your new IFC project immediately, but it is a good practice anyway. If you forget to do so, you will get notified and be able to do it when saving the FreeCAD document.

```
doc = FreeCAD.ActiveDocument
new_project = ifc_tools.create_document(doc)
ifc_tools.save(new_project, "/path/for/our/new/file.ifc")

```

#### Modifying the IFC class of an object

Changing the class is very easy, one can simply select another one in the object's **class** property. Be warned, this might also change the predefined attributes of that object, so some attributes might vanish.

```
my_object.Class = "IfcWall"

```

#### Aggregate (and convert) any FreeCAD object to an IFC project

Suppose we built a new wall, and we need to add it to an IFC project. We can do that graphically by dragging it and dropping it onto the project in the tree view, but it is as easy in Python:

```
import Arch
my_new_wall = Arch.makeWall(None, 200, 20, 300)
ifc_tools.aggregate(my_new_wall, project)

```

#### Add a new model structure

When creating a new project, you can also have a basic structure automatically created for you by answering 'yes' on the dialog that will pop up. But you can also easily do that in Python:

```
import Arch
doc = FreeCAD.ActiveDocument
project = ifc_tools.create_document(doc)
site = Arch.makeSite()
site = ifc_tools.aggregate(site, project)
building = Arch.makeBuilding()
building = ifc_tools.aggregate(building, site)
level = Arch.makeFloor()
level = ifc_tools.aggregate(floor, building)

```

#### Change the schema of an IFC document

Simply change the 'Schema' property of the project. Be warned, this can have deep consequences (some object types might have changed in the new schema version), so use with care and check your data afterwards.

```
project.Schema = "IFC4"

```

There is much more to explore, as more functionality is available through the different [native IFC submodules](https://github.com/FreeCAD/FreeCAD/tree/main/src/Mod/BIM/nativeifc), each one provides tools to deal with a certain aspect of IFC (property sets, geometry, layers…). Be sure to explore them if needed!

I hope you now have a good idea of where to start and what can be done with native IFC in FreeCAD. Be sure to head to the [BIM section on the FreeCAD forum](https://forum.freecad.org/viewforum.php?f=23) if you need some help!

Retrieved from "<http://wiki.freecad.org/index.php?title=Native_IFC_Tutorial/de&oldid=1545911>"
---
title: Makrodefinicja Wersja podstawowa generatora listy właściwości obiektów Wiki
---

|                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Generic macro icon. Create your personal icon with the same name of the macro](/File:Text-x-python.png "Generic macro icon. Create your personal icon with the same name of the macro") Wiki List Generator of Object Properties |
| Description                                                                                                                                                                                                                       |
| This macro generate properties list of selected object. List presented in wiki format into Python report view. Macro version: 0.1 Last modified: 2021-09 Author: Evgeniy                                                          |
| Author                                                                                                                                                                                                                            |
| [Evgeniy](/User:Evgeniy "User:Evgeniy")                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                            |
| Links                                                                                                                                                                                                                             |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                  |
| Macro Version                                                                                                                                                                                                                     |
| 0.1                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                |
| 2021-09                                                                                                                                                                                                                           |
| FreeCAD Version(s)                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                            |
| See also                                                                                                                                                                                                                          |
| [Macro Wiki Object Properties List Generator](/Macro_Wiki_Object_Properties_List_Generator "Macro Wiki Object Properties List Generator")                                                                                         |
|                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                   |

## Description

This simple macro generate properties list of selected object. The parameters list is printed to the [Report view](/Report_view "Report view") of FreeCAD. This example is more educational in nature and is not applicable for use without editing after generate, since it includes absolutely all the parameters of the object. The lists of properties that are published in this wiki contain, as a rule, only unique parameters. The parameters inherited from the parents objects are not published.

## Usage

- Preparing:
  - Copy code of Macro from this page and place it in a new \*.FCMacro file.
  - Save FCMacro file, and place it in the FreeCAD Macros folder.
  - Disable **Include a timecode for each entry** checkbox in Preferences -> General -> Output window (Tab).
- First using:
  - Select (or create and select) object the type of you need in tree view.
  - Select Macro -> Macros... item in main menu.
  - In opened window find \*.FCMacro file what you save letter and press **Execute** Button.
- How to use again:
  - To quickly run this macro again, you can use keyboard shortcut **Shift+Ctrl+1** (on Windows) it will launch the last run macro.

## Recommendations

Do not delete spaces between lines. This is necessary to simplify the translation. Each line separated by a space will be considered a separate part for translation. When creating texts, always remember that large monolithic fragments of text are difficult for translators to translate.

## Example of using

- For example open the Arch Workbench
- Create a Structure object.
- Select the created Structure object.
- Run the macro.
- Copy the text from the report view and paste it in a wiki page and check the result.

## Results of using

The results may look like this:

## Properties

### View

- WIDOK**Proxy** (`PythonObject`):

Component

- WIDOK**UseMaterialColor** (`Bool`): Use the material color as this object's shape color, if available

Display Options

- WIDOK**BoundingBox** (`Bool`): Display object bounding box

- WIDOK**DisplayMode** (`Enumeration`): Set the display mode

- WIDOK**ShowInTree** (`Bool`): Show the object in the tree view

- WIDOK**Visibility** (`Bool`): Show the object in the 3d view

Nodes

- WIDOK**NodeColor** (`Color`): The color of the nodes line

- WIDOK**NodeLine** (`Float`): The width of the nodes line

- WIDOK**NodeSize** (`Float`): The size of the node points

- WIDOK**NodeType** (`Enumeration`): The type of structural node

- WIDOK**ShowNodes** (`Bool`): If the nodes are visible or not

Object Style

- WIDOK**AngularDeflection** (`Angle`): Specify how finely to generate the mesh for rendering on screen or when exporting.

The default value is 28.5 degrees, or 0.5 radians. The smaller the value
the smoother the appearance in the 3D view, and the finer the mesh that will be exported.

- WIDOK**Deviation** (`FloatConstraint`): Sets the accuracy of the polygonal representation of the model

in the 3D view (tessellation). Lower values indicate better quality.
The value is in percent of object's size.

- WIDOK**DiffuseColor** (`ColorList`): Object diffuse color.

- WIDOK**DrawStyle** (`Enumeration`): Defines the style of the edges in the 3D view.

- WIDOK**Lighting** (`Enumeration`): Set object lighting.

- WIDOK**LineColor** (`Color`): Set object line color.

- WIDOK**LineColorArray** (`ColorList`): Object line color array.

- WIDOK**LineMaterial** (`Material`): Object line material.

- WIDOK**LineWidth** (`FloatConstraint`): Set object line width.

- WIDOK**PointColor** (`Color`): Set object point color

- WIDOK**PointColorArray** (`ColorList`): Object point color array.

- WIDOK**PointMaterial** (`Material`): Object point material.

- WIDOK**PointSize** (`FloatConstraint`): Set object point size.

- WIDOK**ShapeColor** (`Color`): Set shape color

- WIDOK**ShapeMaterial** (`Material`): Shape material

- WIDOK**Transparency** (`Percent`): Set object transparency

Selection

- WIDOK**OnTopWhenSelected** (`Enumeration`): Enabled: Display the object on top of any other object when selected

Object: On top only if the whole object is selected
Element: On top only if some sub-element of the object is selected

- WIDOK**Selectable** (`Bool`): Set if the object is selectable in the 3d view

- WIDOK**SelectionStyle** (`Enumeration`): Set the object selection style

### Data

- DANE**Placement** (`Placement`):

- DANE**Proxy** (`PythonObject`):

- DANE**Shape** (`Part::PropertyPartShape`):

- DANE**Visibility** (`Bool`):

Base

- DANE (Hidden)**ExpressionEngine** (`ExpressionEngine`): Property expressions

- DANE**Label** (`String`): User name of the object (UTF8)

- DANE (Hidden)**Label2** (`String`): User description of the object (UTF8)

Component

- DANE**Additions** (`LinkList`): Other shapes that are appended to this object

- DANE**Axis** (`Link`): An optional axis or axis system on which this object should be duplicated

- DANE**Base** (`Link`): The base object this component is built upon

- DANE**CloneOf** (`Link`): The object this component is cloning

- DANE**HiRes** (`Link`): An optional higher-resolution mesh or shape for this object

- DANE**HorizontalArea** (`Area`): The area of the projection of this object onto the XY plane

- DANE**Material** (`Link`): A material for this object

- DANE**MoveBase** (`Bool`): Specifies if moving this object moves its base instead

- DANE**MoveWithHost** (`Bool`): Specifies if this object must move together when its host is moved

- DANE**PerimeterLength** (`Length`): The perimeter length of the horizontal area

- DANE**StandardCode** (`String`): An optional standard (OmniClass, etc...) code for this component

- DANE**Subtractions** (`LinkList`): Other shapes that are subtracted from this object

- DANE**VerticalArea** (`Area`): The area of all vertical faces of this object

IFC

- DANE**IfcData** (`Map`): IFC data

- DANE**IfcProperties** (`Map`): IFC properties of this object

- DANE**IfcType** (`Enumeration`): The type of this object

IFC Attributes

- DANE**Description** (`String`): Description of IFC attributes are not yet implemented

- DANE**GlobalId** (`String`): Description of IFC attributes are not yet implemented

- DANE**ObjectType** (`String`): Description of IFC attributes are not yet implemented

- DANE**PredefinedType** (`Enumeration`): Description of IFC attributes are not yet implemented

- DANE**Tag** (`String`): Description of IFC attributes are not yet implemented

Structure

- DANE**FaceMaker** (`Enumeration`): The facemaker type to use to build the profile of this object

- DANE**Height** (`Length`): The height or extrusion depth of this element. Keep 0 for automatic

- DANE**Length** (`Length`): The length of this element, if not based on a profile

- DANE**Nodes** (`VectorList`): The structural nodes of this element

- DANE**NodesOffset** (`Distance`): Offset distance between the centerline and the nodes line

- DANE**Normal** (`Vector`): The normal extrusion direction of this object (keep (0,0,0) for automatic normal)

- DANE**Profile** (`String`): A description of the standard profile this element is based upon

- DANE**Tool** (`Link`): An optional extrusion path for this element

- DANE**Width** (`Length`): The width of this element, if not based on a profile

## Script

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 <Evgeniy> LG
from FreeCAD import Qt

def print_obj_properties(obj,typ):
   prop={}
   i=1
   for pr in obj.PropertiesList:
      tp = obj.getTypeIdOfProperty(pr) or ""
      atr = obj.getTypeOfProperty(pr) or ("")
      # Wiki template supports only Hidden type of property. But it can be as: Hidden,Output,Readonly etc...
      if atr != "" and atr[0] == "Hidden":
         atr = "|"+atr[0]
      else:
         atr = ""
      prop[str(i)] = pr,obj.getGroupOfProperty(pr),tp.replace("App::Property",""),obj.getDocumentationOfProperty(pr),atr
      i+=1
   sorted_prop = sorted(prop.items(), key=lambda x: x[1][1])

   title=""
   for pr in sorted_prop:
      if title != pr[1][1]:
         title = pr[1][1]
         print("\n"+"{{TitleProperty{"+title+"}}")
      print("\n"+"* {{Property"+typ+"{"+pr[1][0]+"{"+pr[1][2]+pr[1][4]+"}}: "+pr[1][3])

print("\n"+"==Properties==")
print("\n"+"===View===")
obj = Gui.activeDocument().ActiveObject
print_obj_properties(obj,"View")
print("\n"+"===Data===")
obj = FreeCAD.activeDocument().ActiveObject
print_obj_properties(obj,"Data")

```

## Links

The discussion on the forum: <https://forum.freecadweb.org/viewtopic.php?f=21&t=61998>

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Wiki_Object_Properties_List_Generator_Basic_Version/pl&oldid=1273926>"

---
title: Align View to Face
---

|                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align View to Face                                                                                                                                                                                                                                                           |
| Beschreibung                                                                                                                                                                                                                                                                       |
| Dieses Makro richtet die aktuelle Ansicht zu einer ausgewählten Fläche aus Versionsmakro : 3.1 Datum der letzten Änderung : 2023/11/12 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d7/Macro_Align_View_to_Face.png) Autor: Rockn |
| Autor                                                                                                                                                                                                                                                                              |
| [Rockn](/User:Rockn "User:Rockn")                                                                                                                                                                                                                                                  |
| Herunterladen                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d7/Macro_Align_View_to_Face.png)                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                              |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                       |
| Macro-Version                                                                                                                                                                                                                                                                      |
| 3.1                                                                                                                                                                                                                                                                                |
| Datum der letzten Änderung                                                                                                                                                                                                                                                         |
| 2023/11/12                                                                                                                                                                                                                                                                         |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                 |
| All                                                                                                                                                                                                                                                                                |
| Standardverknüpfung                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                             |
| Siehe auch                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                    |

## Beschreibung

Dieses Makro dreht die aktuelle Ansicht, um senkrecht auf eine ausgewählte Fläche eines vorhandenen Objekts zu zeigen.

## Anwendung

1. Wähle eine Fläche auf einem Objekt aus
2. Führe das Makro aus

## Skript

Werkzeugleiste Icon ![](/images/Macro_Align_View_to_Face.png)

**Macro_Align_View_to_Face.FCMacro**

```
# -*- coding: utf-8 -*-
# Set the current view perpendicular to the selected line
# Place la vue perpendiculairement a la line selectionnee
# 2013 Jonathan Wiedemann,
# 2016 Werner Mayer,
# 2022 tchernomax, https://forum.freecadweb.org/viewtopic.php?p=630019#p630019
# 2023 FreeCutter, modifications towards linked objects like in workbench Assembly 4 , https://forum.freecad.org/viewtopic.php?p=718516#p718516
#
__title__   = "Align_View_to_Face"
__author__  = "Jonathan Wiedemann (Rockn)"
__url__     = "https://www.freecadweb.org/"
__Wiki__    = "https://wiki.freecadweb.org/Macro_Align_View_to_Face"
__version__ = "3.1"
__date__    = "2023/11/12"  #YYYY/MM/DD

from pivy import coin

import FreeCAD as app
import FreeCADGui as gui

def pointAt(normal, up):
    z = normal
    y = up
    x = y.cross(z)
    y = z.cross(x)

    rot = App.Matrix()
    rot.A11 = x.x
    rot.A21 = x.y
    rot.A31 = x.z

    rot.A12 = y.x
    rot.A22 = y.y
    rot.A32 = y.z

    rot.A13 = z.x
    rot.A23 = z.y
    rot.A33 = z.z

    return App.Placement(rot).Rotation

def get_selection_and_turn_view():
	doc = app.activeDocument()
	if doc is None:
		app.Console.PrintWarning('Align_view_to_face: No file open, nothing to do\n')
		return

	selection = gui.Selection.getSelectionEx('', 0) # Returns a vector of selection objects

	if not selection:
		app.Console.PrintWarning('Align_view_to_face: Nothing selected, nothing to do\n')
		return

	cam = FreeCADGui.ActiveDocument.ActiveView.getCameraNode()

	''' used to understand the 'getSelection' results
	for selection_object in selection:
		object_ = selection_object.Object
		sub_fullpaths = selection_object.SubElementNames
		if not sub_fullpaths:
			# An object is selected, not a face, edge, vertex.
			print(object_.Name)
		for sub_fullpath in sub_fullpaths:
			# One or more subelements are selected.
			print(object_.Name, sub_fullpath)
	'''

	sel = selection[0]
	face = sel.SubObjects[0]
	if face.Area == 0:			# trying to avoid errors due to wrong selected objects
		app.Console.PrintWarning('Align_view_to_face: Please select a face - not an edge or vertex\n')
		return
	dir = face.normalAt(0,0)

	if dir.z == 1 :
	    rot = pointAt(dir, App.Vector(0.0,1.0,0.0))
	elif dir.z == -1 :
	    rot = pointAt(dir, App.Vector(0.0,1.0,0.0))
	else :
	    rot = pointAt(dir, App.Vector(0.0,0.0,1.0))

	cam.orientation.setValue(rot.Q)
	gui.SendMsgToActiveView("ViewSelection")
	app.Console.PrintWarning('Align_view_to_face: Done\n')

if __name__ == '__main__':
	get_selection_and_turn_view()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_View_to_Face/de&oldid=1335684>"

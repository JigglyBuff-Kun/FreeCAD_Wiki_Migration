---
title: PartDesign Racordarea de muchii/Fillet
---
|  |
| --- |
| PartDesign Fillet |
| Menu location |
| PartDesign → Fillet |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), Complete |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Part Fillet](/Part_Fillet "Part Fillet") |
|  |

## Descriere

Acest instrument creează racordări/rotunjiri pe muchiile selectate al unui obiect. O nouă separată intrare Fillet (urmată de un număr secvențial dacă sunt deja racordări/rotunjiri existent în document) este creată în arborescența Project.

## Cum se folosește

### Add a fillet

* Select a single or multiple edges or a face on an object, then start the tool either by clicking its icon or going into the menu. In case you selected a face all its edges are respected for filleting.
* In Fillet parameters in the TaskPanel, set the fillet radius either by entering the value, or by clicking on the up/down arrows. The applied fillet is shown in real time.
* If you want to add more edges or faces click first the **Add ref** button and then select the edge or the face.
* If you want to remove edges or faces click the **Remove ref** button. All edges and faces being previously selected are highlighted in purple. Select the edge or the face to be removed.
* Click pe OK pentru validare.
* Pentru un lanț de muchii tangențial una cu celălaltă, poate fi selectată o singură margine; rotunjirea se va propaga de-a lungul lanțului.
* Pentru a edita rotunjirea după validarea funcției, fie faceți dublu clic pe eticheta Fillet din arborescența Project, fie faceți clic dreapta pe el și selectați **Edit Fillet**.

### Edit a fillet

1. Do one of the following:
   * Double-click the Fillet object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Fillet object in the [Tree view](/Tree_view "Tree view") and select **Edit Fillet** from the context menu.
2. The **Fillet parameters** [task panel](/Task_panel "Task panel") opens.See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

* To add edges do one of the following:
  + Press the Add button to start selecting edges and/or faces in the [3D view](/3D_view "3D view").
  + To select all remaining edges do the following:
    1. If required press the Add button.
    2. Use the Ctrl+Shift+A keyboard shortcut, or right-click the list and select **Add all edges** from the context menu.
* To remove edges do one of the following:
  + Press the Remove button to start deselecting edges and/or faces in the [3D view](/3D_view "3D view"). Selected elements are highlighted in purple.
  + Select one or more elements in the list and press the Del key, or right-click the list and select **Remove** from the context menu.
* Set the **Radius** of the fillet.
* Check the **Use all edges** checkbox to select all edges of the previous feature. This deactivates the selection list and the related buttons.

## Notes

* PartDesign Fillet should not be confused with [Part Fillet](/Part_Fillet "Part Fillet"). Unless you know what you are doing, [Part Fillet](/Part_Fillet "Part Fillet") should not be used on a PartDesign Body. See [Part and PartDesign](/Part_and_PartDesign "Part and PartDesign").
* Fillets cannot completely consume the adjacent faces.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Fillet object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Date**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if Date**Use All Edges** is `true`.
* Date**Support Transform** (`Bool`): If `true` the filleted shape of the additive/subtractive parent feature will be used when the fillet object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the fillet itself will be used. The default is `false`.
* Date (hidden)**Add Sub Shape** (`PartShape`)
* Date (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Date (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Fillet

* Date**Radius** (`QuantityConstraint`): The fillet radius. The default is `1 mm`.
* Date**Use All Edges** (`Bool`): If `true` all edges of the feature are filleted, and the edges specified by Date**Base** are ignored. The default is `false`.

Part Design

* Date**Refine** (`Bool`): If `true` redundant edges are removed from the result of the operation. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

## Probleme cunoscute

* Rotunjirile care nu reușesc cu raze implicite de 1 mm pot provoca căderea programului, salvați-vă piesa înainte de a utiliza rontjirea pentru a fi siguri
  + This is due to issue in OCC kernel
* Edge numbers are not stable so you should finish all design work before filleting your part otherwise filleted edges will change and likely become invalid
  + This is due to topological naming issues

If run from the terminal, FreeCAD may output a log like this one after the crash:

```
#1  0x7fff63d660ba in BRep_Tool::Curve(TopoDS_Edge const&, TopLoc_Location&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x2a
#2  0x7fff63d69546 in BRep_Tool::Curve(TopoDS_Edge const&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x46
#3  0x7fff71f4fef5 in ChFi3d_Builder::PerformIntersectionAtEnd(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x3b05
#4  0x7fff71f58307 in ChFi3d_Builder::PerformOneCorner(int, bool) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x1097
#5  0x7fff71ef6218 in ChFi3d_Builder::PerformFilletOnVertex(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x4e8
#6  0x7fff71ef71d1 in ChFi3d_Builder::Compute() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0xe31
#7  0x7fff720ad7c3 in BRepFilletAPI_MakeChamfer::Build() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x33
#8  0x7fff723be48e in PartDesign::Chamfer::execute() from /usr/lib/freecad-daily/lib/_PartDesign.so+0x60e
...

```

```
#1  0x7fff63d660ba in BRep_Tool::Curve(TopoDS_Edge const&, TopLoc_Location&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x2a
#2  0x7fff63d69546 in BRep_Tool::Curve(TopoDS_Edge const&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x46
#3  0x7fff71f4fef5 in ChFi3d_Builder::PerformIntersectionAtEnd(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x3b05
#4  0x7fff71f58307 in ChFi3d_Builder::PerformOneCorner(int, bool) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x1097
#5  0x7fff71ef6218 in ChFi3d_Builder::PerformFilletOnVertex(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x4e8
#6  0x7fff71ef71d1 in ChFi3d_Builder::Compute() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0xe31
#7  0x7fff720ad7c3 in BRepFilletAPI_MakeChamfer::Build() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x33
#8  0x7fff723be48e in PartDesign::Chamfer::execute() from /usr/lib/freecad-daily/lib/_PartDesign.so+0x60e
...

```

This output references functions located in `libTKBRep.so`, `libTKFillet.so`, etc., which are OCC libraries. If these type of crashes occur, the problem may need to be reported and solved in OCC rather than in FreeCAD.

See the forum threads for more information:

* [Bug Chamfer bigger than 2mm crashes freecad](https://forum.freecadweb.org/viewtopic.php?p=263818#p263818)
* [Segfault when using part desgin fillet](https://forum.freecadweb.org/viewtopic.php?p=264827#p264827)

### Topological naming

### Topological naming

Numerele de margine nu sunt complet stabile, prin urmare este recomandat să finalizați lucrarea principală de proiectare a corpului dvs solid înainte de a aplica funcții cum ar fi racordări și șanfren, în caz contrar arginile ar putea schimba numele și margini racordate ar deveni probabil nevalabile.

Read more in [topological naming problem](/Topological_naming_problem "Topological naming problem").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Fillet/ro&oldid=1515570>"
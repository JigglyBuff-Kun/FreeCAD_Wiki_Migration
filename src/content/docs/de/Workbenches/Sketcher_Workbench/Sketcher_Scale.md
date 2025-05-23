---
title: Sketcher Scale/de
---

|                                                      |
| ---------------------------------------------------- |
| Sketcher Scale                                       |
| Menu location                                        |
| Sketch → Sketcher tools → Scale transform            |
| Workbenches                                          |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut                                     |
| Z P S                                                |
| Introduced in version                                |
| 1.0                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Beschreibung

The ![](/images/Sketcher_Scale.svg) [Sketcher Scale](/Sketcher_Scale "Sketcher Scale") tool scales or optionally creates scaled copies of selected elements.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung).  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung).

1. Select one or more edges and/or [Point objects](/Sketcher_CreatePoint "Sketcher CreatePoint"). Constraints restricted to the selected elements are also processed. If the original elements are scaled, any other constraints associated with them will be deleted.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale") button.
   - Select the **Sketch → Sketcher tools → ![](/images/Sketcher_Scale.svg) Scale transform** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_Scale.svg) Scale transform** option from the context menu.
   - Use the keyboard shortcut: Z then P, then S.
3. The cursor changes to a cross with the tool icon.
4. The **Scale parameters** section is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Optionally press the U key or check the **Keep original geometries** checkbox to create scaled copies of the selected elements.
6. Pick the base point for the scale operation. Or with Pos-OVP: enter its X and/or Y coordinate.
7. Pick the end point of the first auxiliary line. Its angle and length are arbitrary.
8. Pick the end point of the second auxiliary line. Its angle is also arbitrary. Its length relative to the length of the first auxiliary line defines the scale factor. Or with Dim-OVP: enter the scale factor.
9. The original elements are scaled or scaled copies are created. No Pos-OVP or Dim-OVP based constraints are added.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Scale/de&oldid=1409578>"

---
title: FEM Netzbereich
---
|  |
| --- |
| FEM Netzbereich |
| Menüeintrag |
| Netz → FEM mesh refinement |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| Alle |

## Beschreibung

Enables the user to set a localized set of meshing parameters by selecting a set of elements (vertex, edge, face) and applying the parameters to it. It is especially useful for refining meshes in areas of interest or areas where the solver will generate a stronger gradient of a variable. For example, it can be used to refine the mesh around stress-risers (sharp edges, holes, notches, ...) in mechanical analysis, or at areas of contraction in a fluid flow.

Refining the mesh has the advantage of enabling accurate simulation where needed, while allowing coarser mesh in the wider domain, thus drastically optimizing the computation time while maintaining meaningful solutions output.

## Anwendung

1. To enable the command a ![](/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") or (1.1 and above) ![](/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") must be provided first.
2. Select the Mesh object in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   * Press the ![](/images/FEM_MeshRegion.svg) [FEM mesh refinement](/FEM_MeshRegion "FEM MeshRegion") button.
   * Select the **Mesh → ![](/images/FEM_MeshRegion.svg) FEM mesh refinement** option from the menu.
4. Press the Add button and select one or more of either *faces*, *edges* or *vertices* in the [3D view](/3D_view "3D view") to apply the mesh refinement to. The selected items will appear in the list of geometrical objects. The selection mode can be also set to *Solid*.
5. Enter the maximum element size for the region.
6. Click the OK button.
7. Close the task.

   :   Result: You now should see a new `FEMMeshRegion` object under the `FEMMeshGmsh` or (1.1 and above) `FEMMeshNetgen` object (see example #3 below) in your active analysis container.
8. Double-click on the `FEMMeshGmsh` or (1.1 and above) `FEMMeshNetgen` parent object in your Model Tree and press Apply to force a mesh recalculation.
9. Close the task.

Nachdem das Netz erstellt wurde, können seine Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") angepasst werden. Nach dem Ändern einer Eigenschaft, muss der Dialog zum Vernetzen erneut geöffnet und die Schaltfläche Anwenden gedrückt werden (der Dialog kann geöffnet bleiben, während weitere Eigenschaften geändert werden).

Es können so viele unterschiedliche Netzbereiche wie nötig erstellt werden.

## Visual examples

![](/images/FEMMeshRegion_Example1.png)

Beispiel 1: Das grobe Start-NetzGmshAusForm

![](/images/FEMMeshRegion_Example2.png)

Example 2: After applying a Mesh refinement using two FEM Mesh Region objects, the large hole is refined to a maximum element size of 3 mm, the smaller hole is refined to 1 mm

![](/images/FEMMeshRegion_Example3.png)

Beispiel 3: Ein einfaches Beispiel des entstehenden Modellbaums

## Hinweise

* The order in which the regions are shown in [Tree view](/Tree_view "Tree view") can change the mesh result. See this [forum thread](https://forum.freecadweb.org/viewtopic.php?f=18&t=41955).

## Related

* "Mesh Regions for a Better Analysis" - Video Tutorial by Joko Engineering ([link](https://www.youtube.com/watch?v=X5RVe2SDPvw))

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshRegion/de&oldid=1568888>"
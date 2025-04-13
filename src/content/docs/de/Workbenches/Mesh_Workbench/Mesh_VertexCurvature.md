---
title: Netz KnotenKrümmung
---

|                                                                |
| -------------------------------------------------------------- |
| Mesh VertexCurvature                                           |
| Menu location                                                  |
| Meshes → Curvature plot                                        |
| Workbenches                                                    |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                       |
| Default shortcut                                               |
| _None_                                                         |
| Introduced in version                                          |
| -                                                              |
| See also                                                       |
| [Mesh CurvatureInfo](/Mesh_CurvatureInfo "Mesh CurvatureInfo") |
|                                                                |

## Beschreibung

Der Befehl **Mesh Knotenkrümmumg** erstellt Mesh-Krümmumgsobjekte (\*\_Curvature objects) für Mesh-Objekte (Netzobjekte). Ein Krümmumgsobjekt stellt die Krümmung eines Netzes dar und setzt unterschiedliche Farben für konvexe, ebene und konkave Bereiche ein.

![](/src/assets/images/Mesh_VertexCurvature_example.png)

Beispiel eines Mesh-Krümmungsobjekts

## Anwendung

1. Select one or more mesh objects.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Mesh_VertexCurvature.svg) [Curvature plot](/Mesh_VertexCurvature "Mesh VertexCurvature") button.
   - Select the **Meshes → ![](/src/assets/images/Mesh_VertexCurvature.svg) Curvature plot** option from the menu.
   - Select the **![](/src/assets/images/Mesh_VertexCurvature.svg) Curvature plot** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.

## Eigenschaften

For a Mesh Curvature object the following properties are available in the [Property editor](/Property_editor "Property editor"). Select the **Show hidden** option from the Property editor context menu to display the hidden properties.

### Daten

Base

- Daten**Label** (`String`): a user editable name for the object, an arbitrary UTF8 string.
- Daten**Source** (`Link`): a link to the mesh object.

#### Data hidden

Base

- Daten**Curv Info** (`CurvatureList`): a list of curvature information.
- Daten**Expression Engine** (`ExpressionEngine`): a list of expressions.
- Daten**Label2** (`String`): a user editable description for the object, an arbitrary UTF8 string that may include newlines.
- Daten**Visibility** (`Bool`): if set to `true`, the object appears in the [3D view](/3D_view "3D view").

### View

Base

- Ansicht**Display Mode** (`Enumeration`): `Absolute curvature` (default), `Mean curvature`, `Gaussian curvature`, `Maximum curvature`, `Minimum curvature`.
- Ansicht**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
- Ansicht**Selection Style** (`Enumeration`): `Shape`, `BoundBox` (default).
- Ansicht**Show In Tree** (`Bool`): if set to `true`, the object appears in the [Tree view](/Tree_view "Tree view").
- Ansicht**Visibility** (`Bool`): if set to `true`, the object appears in the [3D view](/3D_view "3D view").

#### View hidden

Base

- Ansicht**Texture Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with the object.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_VertexCurvature/de&oldid=1560761>"

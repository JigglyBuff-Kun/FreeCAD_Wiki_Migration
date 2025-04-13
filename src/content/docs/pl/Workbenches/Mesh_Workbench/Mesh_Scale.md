---
title: Siatka Skaluj
---
|  |
| --- |
| Siatka Skaluj |
| Lokalizacja w menu |
| Siatki → Skaluj ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Skaluj** skaluje obiekty siatkowe.

## Użycie

1. Wybierz jeden lub więcej obiektów siatki.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_Scale.svg) **Skaluj**.
   * Wybierz z menu opcję**Siatki → ![](/images/Mesh_Scale.svg) Skaluj ...**.
3. Otworzy się okno dialogowe **Skaluj**.
4. Określ współczynnik skalowania, wartość musi być większa niż `0`.
5. Naciśnij przycisk OK, aby zakończyć polecenie.

## Tworzenie skryptów

Zobacz również: [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby skalować siatkę użyj jej metody `transformGeometry`.

```
import FreeCAD as App
import Mesh

# Create a non-parametric box-shaped mesh:
msh = App.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = Mesh.createBox(10, 10, 10)
msh.ViewObject.DisplayMode = "Flat Lines"

# Create and scale a matrix:
mat = App.Matrix()
mat.scale(2.0, 3.0, 4.0) # Unequal scaling.

# We need to work on a copy of the msh.Mesh object:
new_msh = msh.Mesh.copy()

# Transform that copy:
new_msh.transformGeometry(mat)

# Update msh.Mesh:
msh.Mesh = new_msh

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Scale/pl&oldid=1333188>"
---
title: Siatka Przytnij
---
|  |
| --- |
| Siatka Przytnij |
| Lokalizacja w menu |
| Siatki → Cięcie → Przytnij siatkę |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Przetnij](/Mesh_PolyCut/pl "Mesh PolyCut/pl"), [Przytnij siatkę płaszczyzną](/Mesh_TrimByPlane/pl "Mesh TrimByPlane/pl") |
|  |

## Opis

Polecenie **Przytnij siatkę** przycina ściany i części ścian z obiektów siatkowych.

## Użycie

1. Podczas wykonywania polecenia nie można zmienić [widoku 3D](/3D_view "3D view"). Wskazane jest, aby najpierw prawidłowo ustawić widok 3D.
2. Wybierz jeden lub więcej obiektów siatkowych.
3. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_PolyTrim.svg) **Przytnij siatkę**.
   * Wybierz z menu opcję **Siatki → Cięcie → ![](/images/Mesh_PolyTrim.svg) Przytnij siatkę**.
4. Zdefiniuj wielokąt wybierając punkty w oknie widoku 3D.
5. Wybierz opcję z menu kontekstowego widoku 3D:
   * **Wewnętrzny**: usuwa ściany i części ścian znajdujące się wewnątrz wielokąta.
   * **Zewnętrzny**: usuwa ściany i części ścian, które znajdują się poza wielokątem.
   * **Rozdziel**: usuwa ściany i części ścian znajdujące się poza wielokątem i tworzy zawierający je nowy obiekt siatki.
   * **Anuluj**: anuluje polecenie.

## Tworzenie skryptów

Zobacz również: [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby przyciąć siatkę za pomocą wielokąta użyj jej metody `trim`.

```
import FreeCAD as App
import Mesh

# Create a non-parametric box-shaped mesh:
msh = App.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = Mesh.createBox(30, 40, 50)
msh.ViewObject.DisplayMode = "Flat Lines"

# Define some points:
p1 = App.Vector(0, 0, 0)
p2 = App.Vector(60, 0, 0)
p3 = App.Vector(60, 60, 0)

# We need to work on a copy of the msh.Mesh object:
new_msh = msh.Mesh.copy()

# Trim that copy:
new_msh.trim([p1, p2, p3], 0) # 2nd argument: 0=inner, 1=outer.

# Update msh.Mesh:
msh.Mesh = new_msh

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_PolyTrim/pl&oldid=1333182>"
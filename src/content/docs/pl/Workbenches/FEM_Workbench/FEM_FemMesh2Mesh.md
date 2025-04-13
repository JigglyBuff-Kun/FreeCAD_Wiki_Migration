---
title: MES Siatka MES do siatki
---

|                                                    |
| -------------------------------------------------- |
| FEM FemMesh2Mesh                                   |
| Menu location                                      |
| Siatka → Siatka MES do siatki                      |
| Workbenches                                        |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Default shortcut                                   |
| _None_                                             |
| Introduced in version                              |
| -                                                  |
| See also                                           |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

To narzędzie przekształca powierzchnie elementów 3D lub całe elementy 2D wybranej siatki MES na [obiekt środowiska Siatka](/Mesh_MeshObject/pl "Mesh MeshObject/pl"). Wewnętrznie, wybiera ono ścianki elementów siatki MES, które są unikatowe _(nie są dzielone przez dwa elementy)_ i używa ich do stworzenia ścianek siatki powierzchniowej. Opcjonalnie, może być użyte do zapisania zdeformowanej siatki. Robi się to poprzez dodanie przemieszczenia z wyników analizy MES do węzłów siatki _(skala przemieszczenia może być ustawiona przy pomocy skryptu w Python)_.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): To narzędzie tworzy też obiekt _Mesh2Fem_, który jest trójkątną siatką MES wygenerowaną z siatki powierzchniowej.

## Użycie

1. Zaznacz obiekt siatki MES.
2. Opcjonalnie, zaznacz też wyniki analizy MES.
3. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_FemMesh2Mesh.svg) Siatka MES do siatki.
   - Wybierz opcję **Siatka → ![](/images/FEM_FemMesh2Mesh.svg) Siatka MES do siatki** z menu.

## Tworzenie skryptów

**Uwaga**: Parametr _scale_ - [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"). W przypadku starszych wersji programu należy go pominąć.

Przykład belki wspornikowej, w programie FreeCAD w wersji 1.0:

```
from os.path import join
import FreeCAD as App
import Mesh
from femmesh import femmesh2mesh

path = join(App.getResourceDir(), "examples", "FEMExample.FCStd")
doc = App.openDocument(path)
fem_mesh = doc.FEMMeshGmsh.FemMesh
result = doc.CCX_Results
scale = 10  # displacement scale factor
out_mesh = femmesh2mesh.femmesh_2_mesh(fem_mesh, result, scale)
Mesh.show(Mesh.Mesh(out_mesh))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_FemMesh2Mesh/pl&oldid=1542283>"

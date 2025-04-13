---
title: Architektura Przetnij płaszczyzną
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Przetnij płaszczyzną |
| Lokalizacja w menu |
| Modyfikacja → Przetnij płaszczyzną |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Przytnij płaszczyzną** tnie bryłę obiektu Architektury, taką jak [ścianę](/Arch_Wall/pl "Arch Wall/pl") lub [konstrukcję](/Arch_Structure/pl "Arch Structure/pl") za pomocą płaskiej płaszczyzny.

![](/images/Arch_CutPlane_example.jpg)

Po lewej: Przed zastosowaniem narzędzia Przetnij płaszczyzną. Środek: wynikowa ściana po zakończeniu cięcia. Po prawej: kolejny opcjonalny wynik.

## Użycie

1. Jeśli płaszczyzna cięcia ma być wyprowadzona z krawędzi prostej ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) opcjonalnie wyrównaj [płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl"):
   * Wybrana krawędź nie może być równoległa do normalnej płaszczyzny roboczej.
   * Wygenerowana powierzchnia cięcia będzie prostopadła do płaszczyzny roboczej.
2. Wybierz obiekt do wycięcia.
3. Wykonaj jedną z następujących czynności:
   * Wybierz obiekt z pojedynczą płaską powierzchnią. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
   * Wybierz płaską powierzchnię w [widoku 3D](/3D_view/pl "3D view/pl").
   * Wybierz obiekt z pojedynczą prostą krawędzią. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
   * Wybierz prostą krawędź w [widoku 3D](/3D_view/pl "3D view/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
4. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Arch_CutPlane.svg) **Przetnij płaszczyzną**.
   * Wybierz z menu opcję **Modyfikacja → ![](/images/Arch_CutPlane.svg) Przetnij płaszczyzną**.
5. Wybierz **Za** lub **Przed**, aby wskazać, po której stronie powierzchni cięcia materiał ma zostać usunięty.
6. Naciśnij przycisk OK.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Przetnij płaszczyzną może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
cutObj = cutComponentwithPlane(archObject, cutPlane, sideFace)

```

* Tworzy obiekt `cutObj` z podanego `archObject`, który jest przecinany przez `cutPlane`, która jest powierzchnią innego obiektu.
  + `archObject` powinien być `SelectionObject` uzyskanym z `FreeCADGui.Selection.SelectionEx()[0]`.
  + `cutPlane` powinien być `FaceObject` uzyskanym z `FreeCADGui.Selection.SelectionEx()[0].SubObjects[0]`.
* `sideFace` określa, po której stronie `FaceObject` zostanie utworzona objętość; objętość ta zostanie następnie użyta do odjęcia od `archObject`. Jeśli `sideFace` to `0`, zostanie utworzona objętość z tyłu obiektu, w przeciwnym razie zostanie ona utworzona z przodu obiektu.

Przykład:

```
import FreeCAD, FreeCADGui, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select the Wall
main_object = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall2
selection = FreeCADGui.Selection.getSelectionEx()[0]
cut_face = selection.SubObjects[0]

cutObj = Arch.cutComponentwithPlane(main_object, cut_face, 0)
FreeCAD.ActiveDocument.recompute()

Wall3 = Draft.move(Wall, FreeCAD.Vector(-4000, 0, 0), copy=True)
Wall4 = Draft.move(Wall2, FreeCAD.Vector(-4000, 0, 0), copy=True)
FreeCAD.ActiveDocument.recompute()

# Select the Wall3
main_object2 = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall4
selection2 = FreeCADGui.Selection.getSelectionEx()[0]
cut_face2 = selection2.SubObjects[0]

cutObj2 = Arch.cutComponentwithPlane(main_object2, cut_face2, 1)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutPlane/pl&oldid=1434406>"
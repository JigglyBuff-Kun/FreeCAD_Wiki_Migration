---
title: FreeCAD i import siatek
---
## Po imporcie

Po zaimportowaniu model jest *(dla FreeCAD)* tylko zbiorem ścian. Możesz chcieć przekonwertować model na kształt, który FreeCAD może rozpoznać i który można później edytować w programie FreeCAD.

Aby to zrobić:

1. Przełącz się do środowiska pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl")
2. Wybierz siatkę i przejdź do **Część → [Utwórz kształt z siatki](/Part_ShapeFromMesh/pl "Part ShapeFromMesh/pl")** lub naciśnij przycisk ![](/images/Part_ShapeFromMesh.svg) [Utwórz kształt z siatki](/Part_ShapeFromMesh/pl "Part ShapeFromMesh/pl").
3. Kliknij OK w oknie dialogowym
4. Wybierz nowo utworzony kształt
5. Przejdź do **Część → [Przekształć na bryłę](/Part_MakeSolid/pl "Part MakeSolid/pl")**.
6. Wybierz nowo utworzoną bryłę
7. Przejdź do **Część → Utwórz kopię → [Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl")** lub naciśnij przycisk ![](/images/Part_RefineShape.svg) [Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl").

**Uwaga:** Ostatni krok nie jest konieczny, ale oczyści bryłę z większości krawędzi na powierzchniach płaskich i cylindrycznych.

## Błędy

### "nie można przekonwertować, ponieważ kształt nie jest powłoką"

Cóż, twoja powłoka wydaje się mieć błędy, być może nie jest zamknięta *(ma dziury)*. Ponieważ możliwości środowiska pracy Siatka w FreeCAD są obecnie nieco ograniczone, możesz spróbować sprawdzić i naprawić swój model za pomocą oprogramowania zewnętrznego. Następnie możesz spróbować ponownie zaimportować i przekonwertować model.

## Programy zewnętrzne

* [MeshLab](https://www.meshlab.net/),
  + Licencja: Open Source *(GPL V2)*,
  + Działa w systemach Windows 32/64 bit, Linux i macOS.
* [Meshmixer](https://meshmixer.com/),
  + Licencja: Freeware,
  + Działa na Windows 64-bit.

## Poradniki

* [Importowanie plików STL lub OBJ](/Import_from_STL_or_OBJ/pl "Import from STL or OBJ/pl")
* [Eksport do formatu STL lub OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ")

## Powiązane

* [FreeCAD Jak importować eksportować](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_Mesh_Import/pl&oldid=1460981>"
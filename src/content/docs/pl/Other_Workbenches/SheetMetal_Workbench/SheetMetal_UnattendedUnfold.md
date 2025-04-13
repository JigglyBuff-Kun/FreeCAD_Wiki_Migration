---
title: Arkusz Blachy Rozwiń bez nadzoru
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Arkusz Blachy: Rozwiń bez nadzoru |
| Lokalizacja w menu |
| SheetMetal → Rozwiń bez nadzoru |
| Środowisko pracy |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót |
| U |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl") |
|  |

## Opis

Polecenie ![](/images/SheetMetal_UnattendedUnfold.svg) Rozwiń bez nadzoru rozwija obiekt z blachy.

Polecenie to nie jest dostępne domyślnie, zobacz [Uwagi](#Uwagi).

Jeśli bryła nadrzędna wybranej powierzchni płaskiej została wcześniej poddana rozkładaniu, narzędzie to pominie menu w panelu zadań. W przeciwnym razie zostanie wyświetlony komunikat o błędzie z prośbą o "ustawienie współczynnika K" lub "użycie arkusza definicji materiału".

Przy pierwszym użyciu komendy ![](/images/SheetMetal_Unfold.svg) [Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl") etykieta Zawartości nadrzędnej otrzymała przyrostek *(taki jak **\_material\_0.5din**)* i po tym jest gotowa do użycia z tym narzędziem.

## Użycie

1. Wybierz jedną płaską powierzchnię części z blachy.
2. To polecenie można wywołać na kilka sposobów:
   * Wciśnij przycisk ![](/images/SheetMetal_UnattendedUnfold.svg) **Rozwiń bez nadzoru**.
   * Wybierz opcję **Sheet Metal → ![](/images/SheetMetal_UnattendedUnfold.svg) Rozwiń bez nadzoru** z menu.
   * Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Sheet Metal → ![](/images/SheetMetal_UnattendedUnfold.svg) Rozwiń bez nadzoru** z menu kontekstowego.
   * Użyj skrótu klawiaturowego: U.
3. Utworzony zostanie obiekt **Unfold**.
4. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Uwagi

Aby udostępnić to polecenie, należy najpierw włączyć tryb inżynieryjny w preferencjach. Przejdź do **Edycja → Preferencje ... → SheetMetal → Ustawienie ogólne** i ustaw **Tryb UX inżynierski** na `Właczone`. Zmiana tej preferencji wymaga ponownego uruchomienia FreeCAD.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Rozwiń bez nadzoru** środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

## Ograniczenia

Zapoznaj się także z informacjami na stronie ![](/images/SheetMetal_Unfold.svg) [Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl") gdzie znajdziesz informację o ograniczeniach.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_UnattendedUnfold/pl&oldid=1544969>"
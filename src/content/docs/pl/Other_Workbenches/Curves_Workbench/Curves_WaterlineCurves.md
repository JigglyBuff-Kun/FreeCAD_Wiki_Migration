---
title: Krzywe Krzywe waterline
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Krzywe waterline |
| Lokalizacja w menu |
| Surfaces → WaterLine |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Curves_WaterlineCurves.svg) **Curves WaterlineCurves** tworzy krzywe waterline na wybranych ścianach.

## Użycie

1. Wybierz jedną lub więcej ścian i/lub obiektów.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_WaterlineCurves.svg) WaterLine.
   * Wybierz opcję **Surfaces → ![](/images/Curves_WaterlineCurves.svg) WaterLine** z menu.
3. Utworzony zostanie jeden zbiorczy obiekt **Waterline**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby zmienić liczbę krzywych waterline i dostosować ich orientację (zobacz Właściwości poniżej).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Waterline** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Ustawienia

* DANE**Direction** (`Vector`): Oś płaszczyzn tnących
* DANE**Number** (`Integer`): Liczba krzywych waterline

Źródło

* DANE**Source** (`LinkSubList`): Źródłowa ściana lub obiekt

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_WaterlineCurves/pl&oldid=1569663>"
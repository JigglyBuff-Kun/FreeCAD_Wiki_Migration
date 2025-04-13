---
title: Arkusz Blachy Dodaj wycięcie
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Arkusz Blachy: Dodaj wycięcie |
| Lokalizacja w menu |
| SheetMetal → Dodaj wycięcie |
| Środowisko pracy |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót |
| E C |
| Wprowadzono w wersji |
| 0.5.04 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/SheetMetal_AddCutout.svg) Dodaj wycięcie tworzy wyciągnięte wycięcie z wyciągnięcia szkicu.

Różnica między 'normalnym' wycięciem i wyciągniętym wycięciem polega na tym, że w tym drugim przypadku krawędzie są prostopadłe do wskazanej ściany obiektu arkusza blachy. Efekt polecenia jest widoczny tylko gdy szkic nie jest prostopadły do ściany.

![](/images/SheetMetal_AddCutout_Example.png)

Wyciągnięte wycięcie oparte o szkic okręgu

## Użycie

1. Wybierz płaską ścianę i szkic z zamkniętym profilem (w dowolnej kolejności).
2. To polecenie można wywołać na kilka sposobów:
   * Wciśnij przycisk ![](/images/SheetMetal_AddCutout.svg) Dodaj wycięcie.
   * Wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddCutout.svg) Dodaj wycięcie** z menu.
   * Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddCutout.svg) Dodaj wycięcie** z menu kontekstowego.
   * Użyj skrótu klawiszowego: E a następnie C.
3. Otwarty zostanie [panel zadań](/Task_panel/pl "Task panel/pl") **Extruded Cutout properties**.
4. Opcjonalnie wciśnij przycisk Ściana aby ponownie wybrać płaską ścianę.
5. Opcjonalnie wciśnij przycisk Szkic aby ponownie wybrać szkic.
6. Opcjonalnie dostosuj parametry w panelu zadań.
7. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
8. Utworzony zostanie obiekt **ExtrudedCutout** składający się z jednego lub większej liczby otworów w linii przez obiekt.
9. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt SheetMetal ExtrudedCutout wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Extruded Cutout

* DANE**Cut Side** (`Enumeration`): Domyślna wartość to `Inside`. Strona wycięcia.
* DANE**Cut Type** (`Enumeration`): Domyślna wartość to `Through everything both sides`. Typ wycięcia.
* DANE (hidden)**Extrusion Length1** (`Length`): Domyślna wartość to `500.0 mm`. Długość kierunku wyciągnięcia 1.
* DANE (hidden)**Extrusion Length2** (`Length`): Domyślna wartość to `500.0 mm`. Długość kierunku wyciągnięcia 2.
* DANE**Selected Face** (`LinkSub`): Wskazany obiekt i ściana.
* DANE**Sketch** (`Link`): Szkic do wycięcia.

Extruded Cutout Improvements

* DANE**Improve Cut** (`Bool`): Domyślna wartość to `False`. Ulepsza geometrię wycięcia jeśli wchodzi ona w obszar cięcia. Wybierz `True` tylko jeśli cięcie wymaga poprawki, bo może to być wolne.
* DANE (hidden)**Improve Level** (`IntegerConstraint`): Domyślna wartość to `4`. Poziom jakości ulepszenia wycięcia. Więcej niż 10 może skutkować bardzo długim czasem.
* DANE**Refine** (`Bool`): Domyślna wartość to `False`. Ulepsza geometrię.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCutout/pl&oldid=1545473>"
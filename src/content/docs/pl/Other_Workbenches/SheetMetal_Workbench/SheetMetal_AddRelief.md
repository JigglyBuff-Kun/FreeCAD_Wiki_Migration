---
title: Arkusz Blachy Wykonaj podcięcie
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arkusz Blachy: Wykonaj podcięcie                                                                                                                 |
| Lokalizacja w menu                                                                                                                               |
| SheetMetal → Wykonaj podcięcie                                                                                                                   |
| Środowisko pracy                                                                                                                                 |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl")                                                                              |
| Domyślny skrót                                                                                                                                   |
| S R                                                                                                                                              |
| Wprowadzono w wersji                                                                                                                             |
| -                                                                                                                                                |
| Zobacz także                                                                                                                                     |
| [Wykonaj połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl"), [Wykonaj zagięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl") |
|                                                                                                                                                  |

## Opis

Polecenie ![](/images/SheetMetal_AddRelief.svg) **Wykonaj podcięcie** tworzy narożne odciążenia, wycięcia, w punktach, w których spotykają się trzy sekcje _(płyta podstawowa / ściany / kołnierze)_ obiektu wykonanego z blachy. Bez tych wycięć obiekt nie będzie mógł zostać rozłożony.

To polecenie jest pierwszym z trzech kroków konwersji obiektu powłoki wykonanego za pomocą środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl") lub [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") na rozkładany obiekt z blachy:

1. Wykonaj podcięcie
2. [Wykonaj połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl")
3. [Wykonaj zagięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl")

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Wykonaj podcięcie - odcięte rogi.

## Użycie

1. Wybierz jedną lub więcej krawędzi.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/SheetMetal_AddRelief.svg) Wykonaj podcięcie.
   - Wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddRelief.svg) Wykonaj podcięcie** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Sheet Metal → ![](/images/SheetMetal_AddRelief.svg) Wykonaj podcięcie** z menu kontekstowego.
   - Użyj skrótu klawiaturowego: S + R.
3. Otwarty zostanie [panel zadań](/Task_panel/pl "Task panel/pl") **Corner relief on solid parameters** (wprowadzony w wersji 0.5.00).
4. Opcjonalnie wciśnij przycisk Wybierz aby dodać więcej wierzchołków.
   - Wciśnij przycisk Podgląd aby zakończyć wybór i wyświetlić zmiany.
5. Opcjonalnie dostosuj parametry w panelu zadań.
6. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
7. Utworzony zostanie obiekt **CornerRelief** składający się z jednego nowego podcięcia dla każdego wskazanego wierzhołka.
8. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

![](/images/SheetMetal_ConvertShellObject-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-06.png)

## Uwagi

Polecenia ![](/images/SheetMetal_AddRelief.svg) **Wykonaj podcięcie**, ![](/images/SheetMetal_AddJunction.svg) **[Wykonaj połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl")** i ![](/images/SheetMetal_AddBend.svg) **[Wykonaj zagięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl")** działają najlepiej z obiektami typu "wydrążony" prostopadłościan o stałej grubości i kątach 90° między ścianami.

Obiekty powłoki mogą być tworzone za pomocą poleceń środowisk pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") lub ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Aby utworzyć półfabrykat za pomocą środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl"):

1. Utwórz bryłę za pomocą poleceń:
   - ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").
   - ![](/images/Part_Extrude.svg) [Wyciągnięcie ...](/Part_Extrude/pl "Part Extrude/pl") z:
     - ![](/images/Draft_Rectangle.svg) [Prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl") środowiska Rysunek Roboczy.
     - ![](/images/Draft_Wire.svg) [Polilinia](/Draft_Wire/pl "Draft Wire/pl") środowiska Rysunek Roboczy.
     - ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") środowiska Szkicownik.
2. Użyj narzędzia ![](/images/Part_Thickness.svg) [Grubość](/Part_Thickness/pl "Part Thickness/pl") środowiska Część, aby utworzyć obiekt powłoki z bryły _(zazwyczaj używając wartości grubości blachy)_.

Aby utworzyć półfabrykat za pomocą środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"):

1. Utwórz bryłę używając poleceń:
   - ![](/images/PartDesign_AdditiveBox.svg) [Addytywny prostopadłościan](/PartDesign_AdditiveBox/pl "PartDesign AdditiveBox/pl").
   - ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl") ze ![](/images/Sketcher_NewSketch.svg) [szkicu](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl").
2. Użyj narzędzia ![](/images/PartDesign_Thickness.svg) [Grubość](/PartDesign_Thickness/pl "PartDesign Thickness/pl"), aby utworzyć obiekt powłoki z bryły _(zazwyczaj używając wartości grubości blachy)_.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Podcięcie środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**Obiekt bazowy** (`LinkSub`): _Obiekt bazowy_. Łącza do narożnych wierzchołków definiujących pozycje podcięcia.
- DANE**Podcięcie** (`Length`): _Rozmiar podcięcia_. Wartość domyślna: `2,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddRelief/pl&oldid=1546086>"

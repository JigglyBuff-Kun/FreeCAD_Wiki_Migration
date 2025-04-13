---
title: Arkusz Blachy Kształt Bazowy
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Arkusz blachy: Dodaj kształt bazowy |
| Lokalizacja w menu |
| Arkusz blachy → Dodaj kształt bazowy |
| Środowisko pracy |
| [Arkusz blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót |
| H |
| Wprowadzono w wersji |
| 0.3.10 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/SheetMetal_BaseShape.svg) **Dodaj kształt Bazowy** tworzy parametryczny obiekt Kształt Bazowy Arkusza Blachy.

![](/images/SheetMetal_BaseShape-01.png)

Pięć dostępnych kształtów bazowych: Kształt L, Kształt U, Kształt wanny, Kształt kapelusza i Kształt prostopadłościanu

Prostokątny szósty kształt o nazwie Flat został wprowadzony w wersji 0.4.10.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/SheetMetal_BaseShape.svg) **Dodaj kształt bazowy**.
   * Wybierz opcję **Arkusz blachy → ![](/images/SheetMetal_BaseShape.svg) Dodaj kształt bazowy** z menu.
   * Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **SheetMetal → ![](/images/SheetMetal_BaseShape.svg) Dodaj kształt bazowy** z menu kontekstowego.
   * Użyj skrótu klawiaturowego: H.
2. Otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Właściwości kształtu bazowego**.
3. Wybierz żądany kształt z opcji **Typ kształtu bazowego**.
4. Wybierz położenie początkowe w widżecie **Lokalizacja punktu bazowego części**.
5. Opcjonalnie dostosuj parametry w panelu zadań.
6. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
7. Utworzony zostanie obiekt **BaseShape**.
8. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Kształt bazowy** środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

* DANE**Wypełnij szczeliny** (`Bool`): Rozszerza boki i kołnierze, aby zamknąć wszystkie szczeliny. Domyślnie: `PRAWDA`.
* DANE**szerokośćKołnierza** (`Length`): Szerokość górnego kołnierza. Wartość domyślna: `5,00 mm`.
* DANE**wysokość** (`Length`): Wysokość kształtu. Wartość domyślna: `10,00 mm`.
* DANE**długość** (`Length`): Długość kształtu. Wartość domyślna: `30,00 mm`.
* DANE**origin Loc** (`Enumeration`): Lokalizacja punktu odniesienie położenia.

  :   `-X,-Y`, `-X,0`, `-X,+Y`, `0,-Y`, `0,0` *(domyślnie)*, `0,+Y`, `+X,-Y`, `+X,0` i `+X,+Y`.
* DANE**promień** (`Length`): Promień zgięcia. Wartość domyślna: `1,00 mm`.
* DANE**Typ kształtu** (`Enumeration`): Typ kształtu bazowego.

  :   `Flat` *(wprowadzona w wersji 0.4.10)*, `L-Shape` (domyślnie), `U-Shape`, `Tub`, `Hat` i `Box`.
* DANE**grubość** (`Length`): Grubość blachy. Wartość domyślna: `1,00 mm`.
* DANE**width** (`Length`): Szerokość kształtu. Wartość domyślna: `20,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_BaseShape/pl&oldid=1545091>"
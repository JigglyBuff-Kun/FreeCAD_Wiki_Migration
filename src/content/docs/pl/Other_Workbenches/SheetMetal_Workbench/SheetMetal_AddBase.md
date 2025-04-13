---
title: Arkusz Blachy Utwórz element bazowy
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                     |
| ------------------------------------------------------------------- |
| Arkusz Blachy: Utwórz element bazowy                                |
| Lokalizacja w menu                                                  |
| SheetMetal → Utwórz element bazowy                                  |
| Środowisko pracy                                                    |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót                                                      |
| C B                                                                 |
| Wprowadzono w wersji                                                |
| -                                                                   |
| Zobacz także                                                        |
| _brak_                                                              |
|                                                                     |

## Opis

![](/images/SheetMetal_AddBase.svg) **Utwórz element bazowy** tworzy obiekt bazowy środowiska pracy Arkusz Blachy ze szkicu profilu.

Z otwartego konturu tworzy przestrzenny _profil_:

![](/images/SheetMetal_AddBase-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-02.png)

Z zamkniętego konturu tworzy bazową _(pustą)_ _płytę_:

![](/images/SheetMetal_AddBase-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-04.png)

## Użycie

### Profil

1. Wybierz ![](/images/Workbench_Sketcher.svg) [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl") _otwartego konturu_.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/SheetMetal_AddBase.svg) Dodaj element bazowy na pasku narzędzi.
   - Wybierz opcję **Arkusz Blachy → ![](/images/SheetMetal_AddBase.svg) Dodaj element bazowy** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Arkusz Blachy → ![](/images/SheetMetal_AddBase.svg) Dodaj element bazowy** z menu kontekstowego.
   - Użyj skrótu klawiszowego: C a następnie B.
3. Utworzony zostanie obiekt **BaseBend** i otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Właściwości szkicowanego elementu bazowego**.

   : Narożniki wzdłuż konturu będą automatycznie przekształcone w zagięcia cylindryczne.

4. Opcjonalnie wciśnij przycisk Szkic i wybierz inny szkic.
5. Ustaw parametry profilu w panelu zadań.
6. Wciśnij przycisk OK aby zamknąć panel zadań i zakończyć działanie polecenia.
7. Opcjonalnie dostosuj parametry profilu w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

### Płyta

1. Wybierz ![](/images/Workbench_Sketcher.svg) [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl") _zamkniętego konturu_.![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench").
2. Aktywuj polecenie jak opisano wyżej.
3. Utworzony zostanie obiekt **BaseBend** i otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Generate Sheet Metal base shape**.
4. Opcjonalnie wciśnij przycisk Szkic i wybierz inny szkic.
5. Ustaw parametry płyty w panelu zadań.
6. Wciśnij przycisk OK aby zamknąć panel zadań i zakończyć działanie polecenia.
7. Opcjonalnie dostosuj parametry płyty w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Panel zadań

Panel zadań został wprowadzony w wersji 0.6.01

Dwukrotnie kliknij na istniejącym obiekcie BaseBend w [Widoku drzewa](/Tree_view/pl "Tree view/pl") aby ponownie otworzyć panel zadań i edytować parametry.

![](/images/SheetMetal_AddBase-Task.png)

- Sketch: Łączy inny Szkic z właściwością **Bend Sketch**.
- **Bend Plane**: Ustawia właściwość **Bend Side**.
- **Radius**: Ustawia właściwość **Radius**.
- **Thickness**: Ustawia właściwość **Thickness**.
- **Length**: Ustawia właściwość **Length**.
- **Symmetric**: Przełącza właściwość **Mid Plane**.
- **Reverse Direction**: Przełącza właściwość **Reverse**. (ukryta jeśli właściwość **Symmetric** jest zaznaczona)

Ostatnie wprowadzone wartości dla Promienia i Grubości będą zapisane jako domyślne wartości dla następnych nowych obiektów BaseBend.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt bazowy wygięcia środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**Strona wygięcia** (`Enumeration`): "Płaszczyzna wygięcia", definiuje do której strony krzywej profilu ma zastosowanie grubość. `Na zewnątrz` _(domyślnie)_, `Do wewnątrz`, `Pośrodku`. (nieużywane dla płyt)
- DANE**Szkic wygięcia** (`Link`): "Obiekt szkicu ściany". Link do profilu / szkicu konturu.
- DANE**Długość** (`Length`): Długość wyciągnięcia profilu. Domyślnie: `100,00 mm`. (nieużywane dla płyt)
- DANE**Płaszczyzna środkowa** (`Bool`): "Wyciągnięcie symetrycznie do płaszczyzny". Długość profilu lub grubość płyty dochodzi do jednej strony płaszczyzny szkicu jeśli `FAŁSZ` (domyślne) lub symetrycznie do obu stron jeśli `PRAWDA`.
- DANE**Promień** (`Length`): Promień wewnętrzny automatycznie dodanych zagięć. Domyślnie: `1,00 mm`. (nieużywane dla płyt)
- DANE**Odwrócony** (`Bool`): Odwraca kierunek wyciągnięcia profilu lub grubości płyty. Domyślnie: `FAŁSZ`.
- DANE**Grubość** (`Length`): Grubość ścianki profilu blachy lub płyty. Domyślnie: `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBase/pl&oldid=1545469>"

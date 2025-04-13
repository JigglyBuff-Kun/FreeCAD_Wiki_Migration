---
title: Kreślenie Projekt rysunku
---
:::caution
To polecenie jest nieaktualneZarówno polecenie, jak i środowisko pracyKreślenie, z którym współpracuje, nie są dostępne wwersja 0.21 i powyżej. Zamiast nich należy użyć środowiska pracyRysunek TechnicznyiWstaw obiekt środowiska Rysunek Roboczy.
:::

|  |
| --- |
| Kreślenie: Projekt rysunku |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| [Kreślenie](/Drawing_Workbench/pl "Drawing Workbench/pl"), [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw widok rysunku](/TechDraw_DraftView/pl "TechDraw DraftView/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Drawing.svg) **Kreślenie** wstawia widoki wybranych obiektów do strony [Rysunek Roboczy](/Drawing_Workbench/pl "Drawing Workbench/pl").

To polecenie jest podobne do polecenia [Widok](/Drawing_View/pl "Drawing View/pl"), ale jest zoptymalizowane dla obiektów środowiska [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"). W przeciwieństwie do tego polecenia, może ono obsługiwać określone obiekty, takie jak [Wymiar](/Draft_Dimension/pl "Draft Dimension/pl") i [Tekst](/Draft_Text/pl "Draft Text/pl"), a także może renderować ściany.

To polecenie jest już przestarzałe. Zamiast niego należy użyć środowiska pracy [Rysunek Roboczy](/TechDraw_Workbench/pl "TechDraw Workbench/pl") i polecenia [Wstaw obiekt środowiska Rysunek Roboczy](/TechDraw_DraftView/pl "TechDraw DraftView/pl").

![](/images/Draft_drawing_example.jpg)

Po lewej wybrane obiekty szkicu. Po prawej stronie znajdują się utworzone widoki rysunku.

## Użycie

1. Aby użyć tego polecenia w FreeCAD w wersji 0.19 i nowszych, należy dodać przycisk do niestandardowego paska narzędzi. Zapoznaj się z informacjami zawartymi na stronie [Dostosowywanie interfejsu użytkownika do własnych potrzeb](/Interface_Customization/pl "Interface Customization/pl").
2. Wybierz jeden lub więcej obiektów. Dla każdego obiektu zostanie utworzony osobny widok.
3. Opcjonalnie dodaj stronę środowiska pracy [Kreślenie](/Drawing_Workbench/pl "Drawing Workbench/pl") do zaznaczenia. Jeśli tego nie zrobisz, widok zostanie wstawiony do pierwszej strony w dokumencie. Jeśli w dokumencie nie ma stron, najpierw tworzona jest nowa strona.
4. Naciśnij przycisk ![](/images/Draft_Drawing.svg) Kreślenie: Projekt rysunku.
5. W wersji FreeCAD 0.19 występuje błąd w poleceniu. Początkowa wartość właściwości DANE**Kierunek** to `[0, 0, 0]`, co jest niedozwolone. W przypadku obiektów na płaszczyźnie równoległej do płaszczyzny XY globalnego układu współrzędnych należy ją zmienić na `[0, 0, 1]`. Po zmianie tej właściwości strona i widok mogą wymagać [przeliczenia](/Std_Refresh/pl "Std Refresh/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Drawing/pl&oldid=1332281>"
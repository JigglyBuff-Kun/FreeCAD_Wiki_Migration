---
title: Rysunek Roboczy Przyciągnij specjalnie
---

|                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- |
| Rysunek Roboczy: Przyciągnij specjalnie                                                                           |
| Lokalizacja w menu                                                                                                |
| Przyciąganie → Przyciągnij specjalnie                                                                             |
| Środowisko pracy                                                                                                  |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl")          |
| Domyślny skrót                                                                                                    |
| _brak_                                                                                                            |
| Wprowadzono w wersji                                                                                              |
| 0.17                                                                                                              |
| Zobacz także                                                                                                      |
| [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl"), [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl") |
|                                                                                                                   |

## Opis

Polecenie ![](/images/Draft_Snap_Special.svg) **Draft Snap Special** przyciąga do [punktów specjalnych](#Obsługiwane_punkty_specjalne) zdefiniowanych przez obiekt. Obsługiwane obiekty to [Architektura: Ściana](/Arch_Wall/pl "Arch Wall/pl"), [Architektura: Konstrukcja](/Arch_Structure/pl "Arch Structure/pl") i [Architektura: Wyposażenie](/Arch_Equipment/pl "Arch Equipment/pl").

![](/images/Draft_Snap_Special_example.png)

Przyciąganie drugiego punktu linii do specjalnego punktu ściany, który jest wierzchołkiem obiektu bazowego.

## Użycie

Ogólne informacje na temat przyciągania można znaleźć na stronie [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl").

1. Upewnij się, że przyciąganie jest włączone. Zobacz stronę ![](/images/Draft_Snap_Lock.svg) [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl").
2. Jeśli opcja **Przyciągnij specjalnie** nie jest aktywna, wykonaj jedną z poniższych czynności:
   - Naciśnij przycisk ![](/images/Draft_Snap_Special.svg) Przyciągnij specjalnie na pasku narzędzi przyciągania.
   - [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Przytrzymaj przycisk ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) na pasku narzędzi [Widżet przyciągania](/Draft_snap_widget/pl "Draft snap widget/pl") i w otwartym menu wybierz opcję **![](/images/Draft_Snap_Special.svg) Przyciągnij specjalnie**.
   - [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Przyciąganie → ![](/images/Draft_Snap_Special.svg) Przyciągnij specjalnie** z menu lub menu kontekstowego [widoku 3D](/3D_view/pl "3D view/pl").
3. Wybierz polecenie środowiska Rysunek Roboczy lub BIM, aby utworzyć geometrię.
4. Uwaga: opcje przyciągania można również zmieniać, gdy polecenie jest aktywne.
5. Przesuń kursor nad obsługiwany obiekt.
6. Obiekt zostanie podświetlony.
7. Jeśli znaleziony zostanie punkt specjalny, zostanie on zaznaczony, a w pobliżu kursora wyświetlona zostanie ikona ![](/images/Draft_Snap_Special.svg).
8. Jeśli obiekt ma wiele punktów specjalnych: opcjonalnie przesuń kursor bliżej innego punktu specjalnego.
9. Kliknij, aby potwierdzić punkt.

## Obsługiwane punkty specjalne

- Wierzchołki obiektu DANE\*_Bazy_- ![](/images/Arch_Wall.svg) [Architektura: Ściana](/Arch_Wall/pl "Arch Wall/pl").
- Punkt DANE**Umiejscowienia** obiektu ![](/images/Arch_Structure.svg) [Architektura: Konstrukcja](/Arch_Structure/pl "Arch Structure/pl").
- DANE\*_Punkt przyciągania_- ![](/images/Arch_Equipment.svg) [Architektura: Wyposażenie](/Arch_Equipment/pl "Arch Equipment/pl").

## Ustawienia

Zobacz stronę [Przyciąganie](/Draft_Snap/pl#Ustawienia "Draft Snap/pl") aby uzyskać więcej informacji.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Special/pl&oldid=1473593>"

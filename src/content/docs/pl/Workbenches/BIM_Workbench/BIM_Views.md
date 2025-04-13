---
title: BIM Widoki
---

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
| BIM Views                                                                                                                 |
| Położenie w menu                                                                                                          |
| Zarządzaj → Widoki                                                                                                        |
| Środowisko pracy                                                                                                          |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl")                                                                               |
| Skrót klawiszowy                                                                                                          |
| Brak                                                                                                                      |
| Warto zobaczyć                                                                                                            |
| Brak informacji                                                                                                           |
|                                                                                                                           |
| To polecenie jest częścią **Dodatku {{{Addon}}}**, który może być zainstalowany poprzez menu Przybory → Menadżer dodatków |
|                                                                                                                           |

## Opis

**Menedżer widoków i poziomów BIM** to dokowalne okno, które otwiera się poniżej normalnego widoku drzewa i zawiera wszystkie [części budowli](/Arch_BuildingPart/pl "Arch BuildingPart/pl") i [pośrednie płaszczyzny robocze](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl") modelu.

Celem tego okna jest umożliwienie szybkiego dostępu do poziomów i konfiguracji płaszczyzny roboczej, bez konieczności nawigowania po drzewie w celu ich znalezienia.

![](/images/BIM_views_screenshot.png)

Menedżer widoków i poziomów BIM

## Użycie

Menedżer widoków BIM pokaże wszystkie poziomy _(części budynku)_ i pośrednie płaszczyzny robocze dokumentu. Można go zadokować w dowolnym miejscu interfejsu FreeCAD lub pozostawić w samodzielnym oknie. Części budynku pokażą również swój poziom _(współrzędną Z ich położenia)_.

- Naciśnięcie kombinacji klawiszy Ctrl + 9 lub kliknięcie przycisku Widoki BIM na pasku statusu powoduje wyświetlenie lub ukrycie menedżera widoków BIM.
- Kliknięcie dowolnego wpisu powoduje wybranie odpowiedniego obiektu
- Dwukrotne kliknięcie wysokości poziomu umożliwia jego edycję.
- Dwukrotne kliknięcie nazwy dowolnego obiektu ustawia na nim płaszczyznę roboczą, a jeśli właściwość **Przywróć widok** obiektu jest ustawiona na Prawda i zapisano w nim konfigurację widoku, ten punkt widzenia jest również przywracany.
- Menedżer widoków BIM posiada menu kontekstowe dostępne po kliknięciu prawym przyciskiem myszy i zawierające poniższe opcje:
  - Dodaj poziom tworzy nowy [poziom](/Arch_BuildingPart/pl "Arch BuildingPart/pl").
  - Dodaj nową pośrednią płaszczyznę roboczą tworzy nową [pośrednią płaszczyznę roboczą](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl").
- Usuń usuwa wybrany element.
- Włącz / wyłącz włącza/wyłącza wybrany poziom (tak samo jak Spacja)
- Izoluj wyłącza wszystkie poziomy z wyjątkiem wybranego.
- Zapisz ujęcie widoku zapisuje bieżące ustawienia widoku w wybranym obiekcie, umożliwiając ich przywrócenie, jeśli jego właściwość Przywróć widok jest ustawiona na wartość Prawda
- Zmień nazwę umożliwia zmianę nazwy wybranego obiektu.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Views/pl&oldid=1474154>"

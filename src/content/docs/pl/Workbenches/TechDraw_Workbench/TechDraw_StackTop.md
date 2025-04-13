---
title: Rysunek Techniczny Przesuń poziom na górę
---
|  |
| --- |
| Rysunek Techniczny: Przesuń poziom na górę |
| Lokalizacja w menu |
| Rysunek Techniczny → Sortowanie → Przesuń poziom na górę |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.21 |
| Zobacz także |
| [Przesuń poziom na dół](/TechDraw_StackBottom/pl "TechDraw StackBottom/pl"), [Przesuń poziom w górę](/TechDraw_StackUp/pl "TechDraw StackUp/pl"), [Przesuń poziom w dół](/TechDraw_StackDown/pl "TechDraw StackDown/pl"). |
|  |

## Opis

Narzędzie **Przesuń poziom na górę** przenosi widoki na górę porządku układania. Kolejność układania kontroluje widoczną głębokość widoków na stronie.

## Użycie

1. Wybierz jeden lub więcej widoków na [stronie](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl") lub w oknie [widoku Drzewa](/Tree_view/pl "Tree view/pl"). W przypadku tego narzędzia oraz [Przesuń poziom na dół](/TechDraw_StackBottom/pl "TechDraw StackBottom/pl"), kolejność wyboru jest istotna.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Nacisnąć przycisk ![](/images/TechDraw_StackTop.svg) **Przesuń poziom na górę**.
   * Wybierz z menu **Rysunek Techniczny → Sortowanie → ![](/images/TechDraw_StackTop.svg) Przesuń poziom na górę**.
3. Właściwość WIDOK**Kolejność sortowania** widoków jest zmieniana.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Kolejność układania można zmienić w skryptach poprzez zmianę właściwości `StackOrder` obiektu `ViewObject` widoku.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_StackTop/pl&oldid=1486453>"
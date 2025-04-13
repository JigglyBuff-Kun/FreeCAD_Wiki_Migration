---
title: BIM Różnica IFC
---

|                                             |
| ------------------------------------------- |
| BIM: Różnica IFC                            |
| Lokalizacja w menu                          |
| Narzędzia → Różnica IFC                     |
| Środowisko pracy                            |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót                              |
| _brak_                                      |
| Wprowadzono w wersji                        |
| -                                           |
| Zobacz także                                |
| _brak_                                      |
|                                             |

## Opis

Narzędzie **Różnica IFC** tworzy wizualną różnicę między dwoma otwartymi dokumentami FreeCAD.

"diff" w programowaniu oznacza narzędzie, które podświetla linie różniące się między dwoma dokumentami tekstowymi. Zwykle zaznacza usunięte linie na czerwono a dodane na zielono. Głównym jego celem jest szybkie wykrycie zmian w dwóch różnych wersjach tego samego dokumentu.

To narzędzie robi to samo, ale graficznie. Otwiera nowy dokument, pokazuje zawartość pliku B, ale podświetla:

![](/images/BIM_Diff_example.jpg)

To narzędzie jest głównie przeznaczone do plików IFC, ponieważ korzysta z IFC Global ID do upewnienia się, że jeden obiekt w jednym pliku jest nadal taki sam w drugim pliku. Ale działa również z plikami programu FreeCAD bez IFC.

## Użycie

1. Otwórz dokument we FreeCAD.
2. Otwórz drugi dokument we FreeCAD, który chcesz porównać z pierwszym.
3. Wybierz opcję **Narzędzia → ![](/images/BIM_Diff.svg) Różnica IFC** z menu.

## Opcje

- na **czerwono** wszystkie elementy pliku A, których nie ma w pliku B
- na **zielono** wszystkie elementy, które są w pliku B, ale nie w pliku A
- na **żółto** wszystkie elementy, które były w pliku A i nadal są w pliku B, ale ich geometria uległa zmianie
- na **pomarańczowo** wszystkie elementy, które były w pliku A i nadal są w pliku B, ich geometria jest taka sama, ale właściwości uległy zmianie

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Diff/pl&oldid=1498943>"

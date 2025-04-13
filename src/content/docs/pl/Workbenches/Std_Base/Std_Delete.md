---
title: Std Usuń
---
|  |
| --- |
| Std: Usuń |
| Lokalizacja w menu |
| Edycja → Usuń |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Del |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Usuń** usuwa wybrane obiekty.

## Użycie

1. Wybierz jeden lub więcej obiektów.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wybierz opcję z menu **Edycja → ![](/images/Std_Delete.svg) Usuń**.
   * Wybierz opcję **![](/images/Std_Delete.svg) Usuń** z menu kontekstowego [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widoku 3D](/3D_view/pl "3D view/pl").
   * Użyj skrótu klawiaturowego: Del.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby usunąć obiekt, należy użyć metody `removeObject` obiektu *document*.

```
import FreeCAD

FreeCAD.ActiveDocument.removeObject("myObjectName")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Delete/pl&oldid=1462344>"
---
title: Std Przełącz możliwość zaznaczenia obiektu
---
|  |
| --- |
| Std: Przełącz możliwość zaznaczenia |
| Lokalizacja w menu |
| Widok → Widoczność → Przełącz możliwość zaznaczenia |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Przełącz możliwość zaznaczenia** przełącza możliwość wyboru obiektów w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie

1. Wybierz jeden lub więcej obiektów.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wybierz z opcję menu **Widok → Widoczność → ![](/images/Std_ToggleSelectability.svg) Przełącz możliwość zaznaczenia**.
   * Wybierz opcję **![](/images/Std_ToggleSelectability.svg) Przełącz możliwość zaznaczenia** z menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl") lub widoku 3D.

## Uwagi

* Wybieralność obiektu można również zmienić poprzez jego powiązaną właściwość DANE**Selectable** w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Właściwość `Selectable` obiektu określa jego możliwość zaznaczenia.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

obj.Selectable = not obj.Selectable

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleSelectability/pl&oldid=1468575>"
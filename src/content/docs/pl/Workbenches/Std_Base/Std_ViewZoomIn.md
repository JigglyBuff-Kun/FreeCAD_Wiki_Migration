---
title: Std Przybliż widok
---
|  |
| --- |
| Std: Przybliż widok |
| Lokalizacja w menu |
| Widok → Powiększenie → Przybliż |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Ctrl + + |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Oddal](/Std_ViewZoomOut/pl "Std ViewZoomOut/pl"), [Powiększ obszar](/Std_ViewBoxZoom/pl "Std ViewBoxZoom/pl") |
|  |

## Opis

Polecenie **Przybliż** powoduje powiększenie aktywnego widoku w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie

1. Istnieje kilka sposobów wywołania tego polecenia:
   * Wybierz z menu opcję **Widok → Powiększenie → ![](/images/Std_ViewZoomIn.svg) Przybliż**.
   * Użyj skrótu klawiaturowego: Ctrl + +.

## Uwagi

* W prawie wszystkich [stylach nawigacji](/Mouse_navigation/pl "Mouse navigation/pl") istnieje również możliwość powiększania / pomniejszenia obrazu za pomocą kółka przewijania myszy.

## Ustawienia

Zobacz też: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

* Współczynnik powiększenia można zmienić w preferencjach: **Edycja → Preferencje ... → Wyświetlanie → Nawigacja → Krok powiększenia**. To ustawienie ma również wpływ na powiększanie za pomocą kółka przewijania.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby powiększyć obraz, użyj metody `zoomIn` obiektu View. Jest też dostępna metoda `zoomOut`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.zoomIn()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewZoomIn/pl&oldid=1468700>"
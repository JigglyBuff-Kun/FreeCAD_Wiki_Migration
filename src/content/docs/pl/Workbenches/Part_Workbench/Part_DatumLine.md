---
title: Część Linia odniesienia
---
|  |
| --- |
| Część: Linia odniesienia |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| Wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.1 |
| Zobacz także |
| [Część: Układ współrzędnych](/Part_CoordinateSystem/pl "Part CoordinateSystem/pl"), [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl "Part DatumPlane/pl"), [Część: Punkt odniesienia](/Part_DatumPoint/pl "Part DatumPoint/pl") |
|  |

## Opis

Polecenie **Część: Linia odniesienia** tworzy obiekt linii odniesienia, który może być dołączony do innych obiektów. Linia odniesienia jest jednym z kilku [obiektów odniesienia](/Std_Base/pl#Utwórz_geometrie_odniesienia "Std Base/pl"). Obiekt odniesienia jest zwykle używany do dołączania do niego wielu innych obiektów. Jeśli położenie lub orientacja obiektu odniesienia ulegnie zmianie, wszystkie obiekty do niego dołączone za nim podążą.

Obiekt odniesienia może też stanowić geometryczne odniesienie dla cechy lub operacji. W zależności od jego typu, może być np. użyty jako wektor kierunku, oś obrotu lub płaszczyzna odbicia lustrzanego.

## Użycie

Zobacz [Część: Układ współrzędnych](/Part_CoordinateSystem/pl#Użycie "Part CoordinateSystem/pl").

## Uwagi

Zobacz [Część: Układ współrzędnych](/Part_CoordinateSystem/pl#Uwagi "Part CoordinateSystem/pl").

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt `Part::DatumLine` wywodzi się z obiektu `App::Line`. Dziedziczy wszystkie jego właściwości oprócz tych wymienionych jako Dołączenie.

### Dane

Zobacz [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl#Dane "Part DatumPlane/pl").

### Widok

Zobacz [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl#Widok "Part DatumPlane/pl").

## Tworzenie skryptów

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumLine", "DatumLine")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumLine/pl&oldid=1538086>"
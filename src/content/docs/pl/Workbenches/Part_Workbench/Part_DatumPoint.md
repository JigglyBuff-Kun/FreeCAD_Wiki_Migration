---
title: Część Punkt odniesienia
---
|  |
| --- |
| Część: Punkt odniesienia |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| Wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.1 |
| Zobacz także |
| [Część: Układ współrzędnych](/Part_CoordinateSystem/pl "Part CoordinateSystem/pl"), [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl "Part DatumPlane/pl"), [Część: Linia odniesienia](/Part_DatumLine/pl "Part DatumLine/pl") |
|  |

## Opis

Polecenie **Część: Punkt odniesienia** tworzy obiekt punktu odniesienia, który może być dołączony do innych obiektów. Punkt odniesienia jest jednym z kilku [obiektów odniesienia](/Std_Base/pl#Utwórz_geometrie_odniesienia "Std Base/pl"). Obiekt odniesienia jest zwykle używany do dołączenia do niego wielu innych obiektów. Jeśli położenie lub orientacja obiektu odniesienia ulegnie zmianie, wszystkie obiekty do niego dołączone za nim podążą.

## Użycie

Zobacz [Część: Układ współrzędnych](/Part_CoordinateSystem/pl#Użycie "Part CoordinateSystem/pl").

## Uwagi

Zobacz [Część: Układ współrzędnych](/Part_CoordinateSystem/pl#Uwagi "Part CoordinateSystem/pl").

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt `Part::DatumPoint` wywodzi się z obiektu `App::Point`. Dziedziczy wszystkie jego właściwości oprócz tych wymienionych jako Dołączenie.

### Dane

Zobacz [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl#Dane "Part DatumPlane/pl").

### Widok

Zobacz [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl#Widok "Part DatumPlane/pl").

## Tworzenie skryptów

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPoint", "DatumPoint")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPoint/pl&oldid=1537378>"
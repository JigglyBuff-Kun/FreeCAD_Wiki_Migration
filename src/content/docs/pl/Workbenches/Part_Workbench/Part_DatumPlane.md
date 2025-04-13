---
title: Część Płaszczyzna odniesienia
---
|  |
| --- |
| Część: Płaszczyzna odniesienia |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| Wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.1 |
| Zobacz także |
| [Część: Układ współrzędnych](/Part_CoordinateSystem/pl "Part CoordinateSystem/pl"), [Część: Linia odniesienia](/Part_DatumLine/pl "Part DatumLine/pl"), [Część: Punkt odniesienia](/Part_DatumPoint/pl "Part DatumPoint/pl") |
|  |

## Opis

Polecenie **Część: Płaszczyzna odniesienia** tworzy obiekt płaszczyzny odniesienia, który może być dołączany do innych obiektów. Płaszczyzna odniesienia jest jednym z kilku [obiektów odniesienia](/Std_Base/pl#Utwórz_geometrie_odniesienia "Std Base/pl"). Obiekt odniesienia jest zwykle używany do dołączania do niego wielu innych obiektów. Jeśli położenie lub orientacja obiektu odniesienia ulegnie zmianie, wszystkie obiekty do niego dołączone za nim podążą.

Obiekt odniesienia może też stanowić geometryczne odniesienie dla cechy lub operacji. W zależności od jego typu, może być np. użyty jako wektor kierunku, oś obrotu lub płaszczyzna odbicia lustrzanego.

## Użycie

Zobacz [Część: Układ współrzędnych](/Part_CoordinateSystem/pl#Użycie "Part CoordinateSystem/pl").

## Uwagi

Zobacz [Część: Układ współrzędnych](/Part_CoordinateSystem/pl#Uwagi "Part CoordinateSystem/pl").

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt `Part::DatumPlane` wywodzi się z obiektu `App::Plane`. Dziedziczy wszystkie jego właściwości oprócz tych wymienionych jako Dołączenie.

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Podstawowe

* DANE**Rola** (`String`): Rola obiektu odniesienia w układzie współrzędnych.
* DANE**Umiejscowienie** (`Placement`): Zobacz [Część: Cecha](/Part_Feature/pl#Dane "Part Feature/pl").
* DANE**Etykieta** (`String`): To samo.
* DANE (hidden)**Etykieta2** (`String`): To samo.
* DANE (hidden)**Silnik wyrażeń** (`ExpressionEngine`): To samo.
* DANE (hidden)**Widoczność** (`Bool`): To samo.

### Widok

Opcje wyświetlania

* WIDOK**Ramka otaczająca** (`Bool`): Zobacz [Część: Cecha](/Part_Feature/pl#Widok "Part Feature/pl").
* WIDOK**Tryb wyświetlania** (`Enumeration`): To samo.
* WIDOK**Pokaż w drzewie** (`Bool`): To samo.
* WIDOK**Widoczność** (`Bool`): To samo.

Styl obiektu

* WIDOK**Wygląd kształtu** (`MaterialList`): Zobacz [Część: Cecha](/Part_Feature/pl#Widok "Part Feature/pl").
* WIDOK**Przezroczystość** (`Percent`): To samo.

Wybór

* WIDOK**Na wierzchu gdy wybrane** (`Enumeration`): Zobacz [Część: Cecha](/Part_Feature/pl#Widok "Part Feature/pl").
* WIDOK**Wybieralne** (`Bool`): To samo.
* WIDOK**Styl wybierania** (`Enumeration`): To samo.

## Tworzenie skryptów

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPlane", "DatumPlane")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPlane/pl&oldid=1538082>"
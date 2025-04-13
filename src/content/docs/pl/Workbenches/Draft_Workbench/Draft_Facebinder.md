---
title: Rysunek Roboczy Łącznik kształtu
---
|  |
| --- |
| Rysunek Roboczy: Łącznik kształtu |
| Lokalizacja w menu |
| Kreślenie → Łącznik kształtu 3D/BIM → Ogólne narzędzia 3D → Łącznik kształtu |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| Rysunek Roboczy: F F |
| Wprowadzono w wersji |
| 0.14 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Draft_Facebinder.svg) **Łącznik kształtu** tworzy obiekt powierzchniowy z wybranych ścian. Łącznik kształtu jest parametryczny, będzie się aktualizował jeśli zmodyfikujesz jego obiekt źródłowy *(lub obiekty źródłowe)*.

Można go użyć do utworzenia wyciągnięcia z kolekcji powierzchni. Takie wytłoczenie może na przykład reprezentować wykończenie ściany w projekcie architektonicznym.

![](/images/Draft_facebinder_example.jpg)

Łącznik kształtu stworzony z powierzchni ścian

## Użycie

1. Wybierz jedną lub więcej ścian.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Draft_Facebinder.svg) Tworzy obiekt powiązania ścian ....
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Facebinder.svg) Łącznik kształtu**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **3D/BIM → Ogólne narzędzia 3D → ![](/images/Draft_Facebinder.svg) Łącznik kształtu** z menu.
   * Rysunek Roboczy: Użyj skrótu klawiaturowego: F, a następnie F.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

![](/images/Draft_Facebinder_Corners.png)

:   Po lewej stronie pokazany jest łącznik kształtu z zamkniętymi narożnikami (różowy),

po prawej stronie łącznik kształtu z otwartymi narożnikami (pomarańczowy).

Zamknięte narożniki są cechą dodaną w wersji V1.1.

Obiekt Łącznik kształtu wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Powierzchnia**: (tylko do odczytu): określa całkowitą powierzchnię połączonych powierzchni w elemencie wiążącym.
* DANE**Wyciągnięcie**: określa grubość wyciągnięcia w elemencie wiążącym. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): Jeśli łącznik kształtu ma połączone ściany i właściwość DANE**Sew** ustawioną na `PRAWDA`, podejmowana jest próba zamknięcia narożników wyciągnięcia. Jeśli nie jest to możliwe, ściany są wyciągane osobno.
* DANE**Ściany**: określa grubość wyciągnięć w elemencie wiążącym.
* DANE**Odsunięcie**: określa odległość, jaka ma być zastosowana między elementem łączącym a oryginalnymi powierzchniami przed wyciągnięciem.
* DANE**Usuń rozdzielenie**: Określa, czy usuwać linie podziału, które dzielą współpłaszczyznowe powierzchnie.
* DANE**Zszyj**: Określa, czy wykonywać operację zespolenia topologicznego na elemencie wiążącym.

### Widok

Rysunek Roboczy

* WIDOK**Wzór**: określa [wzór](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma być wypełniona powierzchnia w elemencie wiążącym. Ta właściwość działa tylko wtedy, gdy DANE**Utwórz ścianę** ma wartość `true` i gdy WIDOK**Tryb wyświetlania** ma wartość `Linie płaskie`.
* WIDOK**Rozmiar wzoru**: określa rozmiar [wzoru](/Draft_Pattern/pl "Draft Pattern/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Łącznik kształtu użyj metody `make_facebinder` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeFacebinder`.

```
facebinder = make_facebinder(selectionset)

```

* Tworzy obiekt `facebinder` z podanego `selectionset`, który jest listą `SelectionObject` zwróconą przez `FreeCADGui.Selection.getSelectionEx()`. Pod uwagę brane są tylko wybrane powierzchnie.
  + `selectionset` może być również `PropertyLinkSubList`.

Lista `PropertyLinkSubList` jest listą krotek; każda krotka zawiera jako pierwszy element `object`, a jako drugi element listę (lub krotkę) łańcuchów; łańcuchy te wskazują nazwy elementów podrzędnych (powierzchni) tego obiektu.

```
PropertyLinkSubList = [tuple1, tuple2, tuple3, ...]
PropertyLinkSubList = [(object1, list1), (object2, list2), (object3, list3), ...]
PropertyLinkSubList = [(object1, ['Face1', 'Face4', 'Face6']), ...]
PropertyLinkSubList = [(object1, ('Face1', 'Face4', 'Face6')), ...]

```

Grubość obiektu Łącznika kształtu może być dodana poprzez nadpisanie jego atrybutu `Extrusion`, wartość jest wprowadzana w milimetrach.

Umiejscowienie elementu Łącznika kształtu można zmienić, nadpisując jego atrybut `Placement` lub indywidualnie nadpisując jego atrybuty `Placement.Base` i `Placement.Rotation`.

Przykład:

```
import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

# Insert a solid box
box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

# selection = Gui.Selection.getSelectionEx()
selection = [(box, ("Face1", "Face6"))]
facebinder = Draft.make_facebinder(selection)
facebinder.Extrusion = 50

doc.recompute()

facebinder.Placement.Base = App.Vector(1000, -1000, 100)
facebinder.ViewObject.ShapeColor = (0.99, 0.99, 0.4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Facebinder/pl&oldid=1551516>"
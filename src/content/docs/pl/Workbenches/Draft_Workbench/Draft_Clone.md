---
title: Rysunek Roboczy Klonuj
---
|  |
| --- |
| Draft: Klonuj |
| Lokalizacja w menu |
| Modyfikacja → Klonuj |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| C L |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Skaluj](/Draft_Scale/pl "Draft Scale/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Clone.svg) **Klonuj** tworzy połączone kopie, klony, wybranych obiektów. Kształt klona jest parametryczny, będzie aktualizowany, jeśli zmieni się jego obiekt źródłowy. Ale klon ma swoją własną pozycję, obrót i skalę oraz własne [właściwości widoku](/Property_editor/pl "Property editor/pl"). Dla obiektów [BIM](/BIM_Workbench/pl "BIM Workbench/pl") polecenie tworzy specjalny typ klonu: klon Arch.

Polecenie może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale także na wielu obiektach 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl"). Klony obiektów 2D mogą być używane w [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części.

![](/images/Draft_Clone_example.jpg)

Klon obok obiektu źródłowego.

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Clone.svg) **Klonuj**.
   * Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Clone.svg) Klonuj**.
   * Użyj skrótu klawiaturowego: C, a następnie L.
3. Jeśli nie wybrałeś jeszcze żadnego obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Uwagi

* Skalę klona środowiska pracy Rysunek Roboczy można zmienić w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") lub [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl") poprzez dwukrotne kliknięcie na nim w [Widoku drzewa](/Tree_view/pl "Tree view/pl") i wprowadzenie nowych wartości w panelu zadań, który zostanie otwarty. Ta druga opcja jest bardziej wydajna.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt utworzony za pomocą polecenia Klon środowiska Rysunek Roboczy wywodzi się z [Część: Część na obiekt 2D](/Part_Part2DObject/pl "Part Part2DObject/pl"), obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli tworzony jest Arch Clone, z typu obiektu źródłowego. Dziedziczy on wszystkie właściwości z tego obiektu. Klon pochodzący z jednego z dwóch pierwszych obiektów ma również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Połącz** (`Bool`): określa, czy nakładające się kształty w klonie są łączone, czy nie.
* DANE**Obiekty** (`LinkListGlobal`): określa obiekty, które są klonowane.
* DANE**Skala** (`Vector`): określa współczynniki skali X, Y i Z.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Klona użyj metody `make_clone` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `clone`.

```
cloned_object = make_clone(obj, delta=None, forcedraft=False)

```

* `obj` zawiera obiekty do sklonowania. Jest to pojedynczy obiekt lub lista obiektów.
* `delta` to wektor przesunięcia, które zostanie zastosowane do klona.
* Jeśli `forcedraft` ma wartość `Fałsz` i `obj` zawiera pojedynczy obiekt [BIM](/BIM_Workbench/pl "BIM Workbench/pl"), tworzony jest klon Arch. Ustaw właściwość `forcedraft` na wartość `Prawda`, aby zamiast tego utworzyć Klona środowiska Rysunek Roboczy.
* `cloned_object` jest zwracany wraz z obiektem klona.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(App.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

vector = App.Vector(2600, 500, 0)
cloned_object = Draft.clone([polygon1, polygon2], delta=vector)

cloned_object.Fuse = True

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Clone/pl&oldid=1550630>"
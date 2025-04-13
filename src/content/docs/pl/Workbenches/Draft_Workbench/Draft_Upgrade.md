---
title: Rysunek Roboczy Ulepsz kształt
---
|  |
| --- |
| Draft: Ulepsz kształt |
| Lokalizacja w menu |
| Modyfikacja → Ulepsz kształt |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| U P |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Upgrade.svg) **Ulepsz kształt** ulepsza wybrane obiekty. Wynik zależy od liczby wybranych obiektów i ich typu. Polecenie może na przykład łączyć elementy i tworzyć ściany. Warto spróbować uaktualnić wybrane obiekty kilka razy, aby zobaczyć czy można uzyskać lepszy rezultat. Zobacz przykład na obrazku. Należy pamiętać, że nie wszystkie obiekty można uaktualnić. To polecenie jest odpowiednikiem polecenia środowiska pracy Rysunek Roboczy [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl").

![](/images/Draft_Upgrade_example.jpg)

Otwarta nieedytowalna linia łamana jest przekształcana w linię zamkniętą, a następnie w ścianę. Zamknięta, nieedytowalna, kwadratowa linia jest również przekształcana w ścianę. Dwie ściany są następnie ulepszane, aby utworzyć złożenie, które jest ostatecznie ulepszane do pojedynczego edytowalnego szkicu polilinii.

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Upgrade.svg) **Ulepsz kształt**,
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Z menu wybierz opcję **Modyfikacja → ![](/images/Draft_Upgrade.svg) Ulepsz kształt**
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Upgrade.svg) Ulepsz kształt** z menu.
   * Użyj skrótu klawiszowego U, a następnie P,
3. Jeśli nie wybrałeś jeszcze obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Uwagi

* elementy środowiska pracy Rysunek Roboczy takie jak [linia](/Draft_Line/pl "Draft Line/pl") i [polilinia](/Draft_Wire/pl "Draft Wire/pl") można łączyć za pomocą tego polecenia, ale także za pomocą polecenia [Połącz](/Draft_Join/pl "Draft Join/pl") lub [Polilinia](/Draft_Wire/pl "Draft Wire/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Do ulepszania obiektów obiektów służy metoda `upgrade` środowiska Rysunek Roboczy.

```
upgrade_list = upgrade(objects, delete=False, force=None)

```

* `objects` zawiera obiekty, które mają zostać zaktualizowane. Może to być pojedynczy obiekt lub lista obiektów.
* Jeśli `delete` ma wartość `True`, to obiekty źródłowe zostaną usunięte.
* `force` wymusza określony sposób aktualizacji poprzez wywołanie określonej funkcji wewnętrznej. Może to być: `"makeCompound"`, `"closeGroupWires"`, `"makeSolid"`, `"closeWire"`, `"turnToParts"`, `"makeFusion"`, `"makeShell"`, `"makeFaces"`, `"draftify"`, `"joinFaces"`, `"makeSketchFace"`, `"makeWires"` lub `"turnToLine"`.
* Zwracana jest lista `upgrade_list`. Jest to lista zawierająca dwie listy: listę nowych obiektów i listę obiektów do usunięcia. Jeśli `delete` ma wartość `True`, to druga lista jest pusta.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=False)

line1 = Draft.make_line(App.Vector(2000, 0, 0), App.Vector(2500, 1500, 0))
line2 = Draft.make_line(App.Vector(2500, 1500, 0), App.Vector(3000, -1000, 0))
doc.recompute()

add_list2, delete_list2 = Draft.upgrade([line1, line2], delete=False)

simple_wire = add_list2[0]
add_list3, delete_list3 = Draft.upgrade(simple_wire, delete=False)

closed_wire = add_list3[0]
add_list4, delete_list4 = Draft.upgrade(closed_wire, delete=False)

face = add_list4[0]
add_list5, delete_list5 = Draft.upgrade(face, delete=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Upgrade/pl&oldid=1473994>"
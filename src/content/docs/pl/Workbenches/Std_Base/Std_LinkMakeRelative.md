---
title: Std Utwórz łącze względne
---
|  |
| --- |
| Std: Utwórz łącze względne |
| Lokalizacja w menu |
| brak |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Część](/Std_Part/pl "Std Part/pl"), [Grupa](/Std_Group/pl "Std Group/pl"), [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl") |
|  |

## Opis

Narzędzie ![](/images/Std_LinkMakeRelative.svg) **Utwórz łącze względne** tworzy [App Łącze](/App_Link/pl "App Link/pl") (klasa `App::Link`), podobnie jak narzędzie ![](/images/Std_LinkMake.svg) [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl"), ale najpierw działa na wybranych elementach podrzędnych i ustawia parametr DANE**Przekształć łącze** na wartość `PRAWDA`.

## Użycie

Przy użyciu zaznaczenia:

1. Wybierz element podrzędny w oknie [widoku 3D](/3D_view/pl "3D view/pl"), oznacza to wierzchołek, krawędź lub ścianę, lub dowolną ich kombinację. Te elementy podrzędne muszą należeć do jednego obiektu.
2. Naciśnij przycisk ![](/images/Std_LinkMakeRelative.svg) **Utwórz łącze względne**. Utworzony obiekt ma taką samą ikonę jak oryginalny obiekt, ale posiada dwie strzałki wskazujące, że jest to link względny.

Bez zaznaczenia:

* Jeśli żaden obiekt nie jest zaznaczony, to polecenie nic nie robi.
* Jeśli obiekt jest zaznaczony tylko w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"), ale żaden element podrzędny nie jest zaznaczony w oknie [Widoku 3D](/3D_view/pl "3D view/pl"), to polecenie również nic nie robi.

![](/images/Std_Link_tree_sublink_example.png) ![](/images/Std_Link_sublink_example.png)

Oryginalna Zawartość i trzy linki utworzone z jej elementów podrzędnych, w tym krawędzi i ścian.

## Właściwości

Polecenie to tworzy nowy obiekt [App: Łącze](/App_Link/pl "App Link/pl"). Jego właściwości opisane są na stronie ![](/images/Std_LinkMake.svg) [Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

W szczególności właściwość DANE**Przekształć łącze** jest ustawione na wartość `PRAWDA`, więc właściwość DANE**Umiejscowienie** staje się ukryte, a zamiast tego DANE**Umiejscowienie łącza** kontroluje pozycję linku w odniesieniu do pozycji DANE**Obiekt połączony**.

## Tworzenie skryptów

Informacje ogólne znajdują się na stronie [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl").

Obiekt App Łącze jest tworzony za pomocą metody `addObject()` dokumentu. Aby zdefiniować łącze względne, jego metoda `setLink` jest używana do wybrania obiektu źródłowego i jednego lub więcej jego elementów podrzędnych. Następnie atrybut `LinkTransform` jest ustawiany na wartość `Prawda`.

```
import FreeCAD as App

doc = App.newDocument()
body = App.ActiveDocument.addObject("Part::Box", "Box")

obj = App.ActiveDocument.addObject("App::Link", "Link")
obj.setLink(body, '', ['Edge1', 'Edge6', 'Edge7', 'Edge10', 'Face2', 'Face3'])
obj.LinkTransform = True
obj.LinkPlacement.Base = App.Vector(20, 20, 0)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMakeRelative/pl&oldid=1270210>"
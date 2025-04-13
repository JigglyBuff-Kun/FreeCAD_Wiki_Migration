---
title: Rysunek Roboczy Przesuń
---
|  |
| --- |
| Rysunek Roboczy: Przesuń |
| Lokalizacja w menu |
| Modyfikacja → Przesuń |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| M V |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| [Podświetl element podrzędny](/Draft_SubelementHighlight/pl "Draft SubelementHighlight/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Move.svg) **Przesuń** - przesuwa lub kopiuje wybrane obiekty z jednego punktu do drugiego. W trybie elementu podrzędnego polecenie przesuwa wybrane punkty i krawędzie, lub kopiuje wybrane krawędzie [Linii](/Draft_Line/pl "Draft Line/pl") i [Polilinii](/Draft_Wire/pl "Draft Wire/pl").

Narzędzie Przesuń może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może być również używane dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_Move_example.jpg)

Przemieszczanie obiektu z jednego punktu do innego.

## Użycie

Zobacz także strony: [Rysunek Roboczy: Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") i [Rysunek Roboczy: Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Opcjonalnie wybierz jeden lub więcej obiektów, albo jeden lub więcej elementów podrzędnych typu [linia](/Draft_Line/pl "Draft Line/pl") lub [polilinia](/Draft_Wire/pl "Draft Wire/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Move.svg) **Przesuń**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Move.svg) Przesuń**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Move.svg) Przesuń** z menu.
   * Użyj skrótu klawiaturowego: M, a następnie V.
3. Jeśli nie zaznaczyłeś jeszcze żadnego obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Otworzy się panel zadań **Przesuń**. Zobacz [Opcje](#Opcje), aby uzyskać więcej informacji.
5. Jeśli zostały wybrane elementy podrzędne: zaznacz pole wyboru **Modyfikuj elementy podrzędne**, aby włączyć tryb elementów podrzędnych.
6. Wybierz pierwszy punkt, punkt bazowy, w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
7. Wybierz drugi punkt, punkt docelowy, w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź składowe X, Y i Z, i naciśnij klawisz Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor poza okno [widoku 3D](/3D_view/pl "3D view/pl").
* Aby użyć współrzędnych biegunowych, wprowadź wartość dla **Długość** i wartość w polu **Kąt**, a następnie naciśnij klawisz Enter po każdym z nich.
* Zaznacz pole wyboru **Kąt**, aby ograniczyć kursor do określonego kąta.
* Naciśnij L, aby zmienić aktywność z pola wprowadzania **X** na pole wprowadzania **Długość** i z powrotem. W zależności od pola wejściowego, które jest aktywne, pole wyboru **Kąt** jest zaznaczane lub odznaczane.
* Naciśnij klawisz R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne drugiego punktu są zależne od pierwszego punktu, w przeciwnym razie są odniesione do początku układu współrzędnych.
* Naciśnij klawisz G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są odniesione do globalnego układu współrzędnych, w przeciwnym razie są one odniesione do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz N lub kliknij pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie zostanie uruchomione ponownie po zakończeniu. Ten tryb naprawdę ma sens tylko wtedy, gdy włączony jest tryb kopiowania. W zależności od preferencji **Zaznacz obiekty bazowe po skopiowaniu**, albo oryginalne obiekty są wybierane do następnego wywołania polecenia, albo kopie, które zostały utworzone jako ostatnie. Zobacz [Preferencje](#Preferencje).
* Naciśnij klawisz C lub kliknij pole wyboru **Kopiuj**, aby przełączyć tryb kopiowania. Jeśli tryb kopiowania jest włączony, polecenie utworzy przeniesione kopie zamiast przenoszenia oryginalnych obiektów.
* Naciśnij przycisk B lub kliknij pole wyboru **Modyfikuj elementy podrzędne**, aby przełączyć tryb elementów podrzędnych. Jeśli tryb elementów podrzędnych jest włączony, polecenie będzie używać wybranych elementów podrzędnych zamiast całych obiektów. Elementy podrzędne muszą należeć do [linii](/Draft_Line/pl "Draft Line/pl") lub [polilinii](/Draft_Wire/pl "Draft Wire/pl").
* Jeśli tryb kopiowania i tryb elementów podrzędnych są włączone, a krawędzie [polilinii](/Draft_Wire/pl "Draft Wire/pl") są zaznaczone, nowe linie zostaną utworzone z tych krawędzi.
* Przytrzymanie klawisza Alt po wybraniu punktu bazowego spowoduje również przełączenie trybu kopiowania. Gdy trzymasz klawisz Alt wciśnięty, możesz wybrać wiele punktów docelowych. Puść klawisz Alt, aby zakończyć polecenie i zobaczyć utworzone kopie.
* Naciśnij S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij klawisz Esc lub przycisk Zamknij, aby przerwać wykonywanie polecenia.

## Uwagi

* Obiekt, który jest [umocowany](/Part_EditAttachment/pl "Part EditAttachment/pl") nie może być przeniesiony za pomocą polecenia Przesuń. Aby go przesunąć, należy przesunąć jego obiekt DANE**podparcia** lub zmienić jego DANE**przesunięcie umocowania**.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Aby zmienić początkową aktywność z panelu zadań na pole wprowadzania **Długość**: **Edycja → Preferencje ... → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Ustaw aktywność na pole Długość zamiast na współrzędną X**. Należy pamiętać, że aby zmiana zaczęła obowiązywać, należy przesunąć kursor w oknie [widoku 3D](/3D_view/pl "3D view/pl").
* Aby ponownie wybrać obiekty bazowe po skopiowaniu obiektów: **Edycja → Preferencje → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Zaznacz obiekty bazowe po skopiowaniu**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Do przesuwania obiektów służy metoda `move` środowiska Rysunek Roboczy.

```
moved_list = move(objectslist, vector, copy=False)

```

* `objectslist` zawiera obiekty, które mają zostać przeniesione. Może to być pojedynczy obiekt lub lista obiektów.
* `vector` wskazuje przemieszczenie.
* Jeśli `copy` ma wartość `Prawda`, to zamiast przesuwania oryginalnych obiektów tworzone są ich kopie.
* Lista `moved_list` jest zwracana z oryginalnymi przeniesionymi obiektami lub z nowymi kopiami. Jest to albo pojedynczy obiekt, albo lista obiektów, w zależności od `objectslist`.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon2, App.Vector(1000, -1000, 0))
Draft.move(polygon3, App.Vector(-500, -500, 0))

list1 = [polygon1, polygon2, polygon3]

vector = App.Vector(-2000, -2000, 0)
list2 = Draft.move(list1, vector, copy=True)
list3 = Draft.move(list1, -2*vector, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Move/pl&oldid=1513671>"
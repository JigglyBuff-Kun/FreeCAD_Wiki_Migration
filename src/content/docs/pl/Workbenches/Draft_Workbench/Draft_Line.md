---
title: Rysunek Roboczy Linia
---
|  |
| --- |
| Rysunek Roboczy: Linia |
| Lokalizacja w menu |
| Kreślenie → Linia Kreślenie 2D → Linia |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| L I |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| [Polilinia](/Draft_Wire/pl "Draft Wire/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Line.svg) **Linia** środowiska Rysunek Roboczy, tworzy linię prostą.

Linia środowiska Rysunek Roboczy jest w rzeczywistości [polilinią](/Draft_Wire/pl "Draft Wire/pl") z tylko dwoma punktami.

![](/images/Draft_Line_example.jpg)

Linia utworzona przez dwa punkty

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Line.svg) **Linia**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Line.svg) Linia** opcję z menu.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Line.svg) Linia** z menu.
   * Użyj skrótu klawiaturowego: L, a następnie I.
2. Otworzy się panel zadań **Linia**. Aby uzyskać więcej informacji, zobacz [Opcje](#Opcje).
3. Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
4. Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź składowe X, Y i Z, i naciśnij klawisz Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor poza okno [widoku 3D](/3D_view/pl "3D view/pl").
* Aby użyć współrzędnych biegunowych, wprowadź wartość dla **Długości** i wartość dla **Kąta**, a następnie naciśnij klawisz Enter po każdej z nich.
* Zaznacz pole wyboru **kąt**, aby związać kursor do określonego kąta. Aby funkcja działała, pole wejściowe **Długość** musi przyjmować wartość niezerową.
* Naciśnij klawisz L, aby zmienić aktywność z pola wprowadzania **X** na pole wprowadzania **Długość** i z powrotem. W zależności od pola wejściowego, które otrzymuje aktywność, pole wyboru **Kąt** jest zaznaczane lub odznaczane.
* Naciśnij klawisz R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne drugiego punktu odnoszą się do pierwszego punktu, w przeciwnym razie odnoszą się do początku układu współrzędnych.
* Naciśnij klawisz G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do głównego układu współrzędnych, w przeciwnym razie do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz N lub kliknij pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po zakończeniu, pozwalając Ci kontynuować tworzenie linii.
* Naciśnij klawisz S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij klawisz Esc lub przycisk Zamknij, aby przerwać polecenie.

## Uwagi

* Linia może być edytowana za pomocą polecenia [Edytuj aktywny obiekt](/Draft_Edit "Draft Edit").
* Linie środowiska Rysunek Roboczy oraz [polilinie](/Draft_Wire/pl "Draft Wire/pl") można łączyć za pomocą polecenia [Utwórz wielopunktowa linię ...](/Draft_Wire/pl "Draft Wire/pl"), polecenia [Połącz zaznaczone linie](/Draft_Join/pl "Draft Join/pl") lub polecenia [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl").

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Aby zmienić początkową aktywność panelu zadań na pole wprowadzania **Długość**: **Edycja → Preferencje... → Rysunek Roboczy → Ogólne → Ustaw aktywność na pole Długość zamiast na współrzędną X**. Pamiętaj, że musisz przesunąć wskaźnik w oknie [widoku 3D](/3D_view/pl "3D view/pl"), aby zmiana odniosła skutek.
* Jeśli opcja **Edycja → Preferencje → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Używaj elementów pierwotnych, gdy jest to możliwe** jest zaznaczona, polecenie utworzy [Linia](/Part_Line/pl "Part Line/pl") środowiska Część, zamiast środowiska Rysunek Roboczy.

## Właściwości

Zobacz stronę [polilinia](/Draft_Wire/pl#W.C5.82a.C5.9Bciwo.C5.9Bci "Draft Wire/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć linię użyj metody `make_line` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeLine`.

```
line = make_line(p1, p2)
line = make_line(LineSegment)
line = make_line(Shape)

```

* Tworzy obiekt `Line` pomiędzy punktami `p1` oraz `p2`, każdy zdefiniowany przez jego `FreeCAD.Vector`, z jednostkami w milimetrach.
* Tworzy obiekt `Line` z `Part.LineSegment`.
* Tworzy obiekt `Line` od pierwszego do ostatniego wierzchołka danego `Shape`.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 500, 0)
p3 = App.Vector(-250, -500, 0)
p4 = App.Vector(500, 1000, 0)

line1 = Draft.make_line(p1, p2)
line2 = Draft.make_line(p3, p4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Line/pl&oldid=1513665>"
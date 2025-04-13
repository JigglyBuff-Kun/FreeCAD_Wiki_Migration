---
title: Rysunek Roboczy Łuk
---
|  |
| --- |
| Rysunek Roboczy: Łuk |
| Lokalizacja w menu |
| Kreślenie → Narzędzia łuku → Łuk Kreślenie 2D → Łuk |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| A R |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| [Okrąg](/Draft_Circle/pl "Draft Circle/pl"), [Łuk przez trzy punkty](/Draft_Arc_3Points/pl "Draft Arc 3Points/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Arc.svg) **Tworzy różne rodzaje łuków** utworzy łuk kołowy w bieżącej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl") ze środka, promienia, kąta początkowego i kąta wierzchołkowego. Promień i kąty mogą być zdefiniowane przez wybranie punktów.

Łuk jest w rzeczywistości obiektem typu [okrąg](/Draft_Circle/pl "Draft Circle/pl") z DANE**kątem pierwszym**, który nie jest taki sam jak jego DANE**kąt drugi**.

![](/images/Draft_Arc_example.jpg)

Łuk zdefiniowany za pomocą czterech punktów, środka, promienia, punkty początku i końca łuku.

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Arc.svg) Tworzy różne rodzaje łuków ....
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → Narzędzia łuku → ![](/images/Draft_Arc.svg) Łuk**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Arc.svg) Łuk** z menu.
   * Użyj skrótu klawiaturowego: A, a następnie R.
2. Otworzy się panel zadań **Łuk**. Zobacz rozdział [Opcje](#Opcje), aby uzyskać więcej informacji.
3. Wybierz pierwszy punkt - środek łuku, w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
4. Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz wartość **Promienia**.
5. Wybierz trzeci punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz wartość **Kąta rozpoczęcia**.
6. Wybierz czwarty punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz wartość **Kąta otwarcia**.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne środka, wprowadź składowe X, Y i Z, a następnie naciśnij klawisz Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już wybrane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor poza okno [widoku 3D](/3D_view/pl "3D view/pl").
* Naciśnij przycisk G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są odniesione do globalnego układu współrzędnych, w przeciwnym razie są one odniesione do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz N lub kliknij na pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po zakończeniu pracy, pozwalając na dalsze tworzenie łuków.
* Wciśnij klawisz S by włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij klawisz Esc lub przycisk Zamknij, aby zakończyć działanie polecenia.

## Uwagi

* Szkic łuku można edytować za pomocą polecenia [Edycja](/Draft_Edit/pl "Draft Edit/pl").

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Jeśli w oknie ustawień opcja **Edycja → Preferencje → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Używaj elementów pierwotnych, gdy jest to możliwe** jest zaznaczona, polecenie utworzy [okrąg](/Part_Circle/pl "Part Circle/pl") środowiska Część, zamiast okręgu Rysunku Roboczego.

## Właściwości

Zobacz stronę [Rysunek Roboczy: Okrąg](/Draft_Circle/pl#W.C5.82a.C5.9Bciwo.C5.9Bci "Draft Circle/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć łuk użyj metody `make_circle` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeCircle`.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

arc1 = Draft.make_circle(200, startangle=0, endangle=90)
arc2 = Draft.make_circle(500, startangle=20, endangle=160)
arc3 = Draft.make_circle(750, startangle=-30, endangle=-150)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc/pl&oldid=1513721>"
---
title: Rysunek Roboczy Skaluj
---
|  |
| --- |
| Rysunek Roboczy: Skaluj |
| Lokalizacja w menu |
| Modyfikacja → Skaluj |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| S C |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Podświetl element podrzędny](/Draft_SubelementHighlight/pl "Draft SubelementHighlight/pl"), [Klonuj](/Draft_Clone/pl "Draft Clone/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Scale.svg) **Skaluj** - skaluje lub kopiuje wybrane obiekty wokół punktu bazowego. W trybie elementu podrzędnego polecenie zmienia skalę wybranych krawędzi, [linii](/Draft_Line/pl "Draft Line/pl") i [polilinii](/Draft_Wire/pl "Draft Wire/pl").

Narzędzie Przesuń może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może być również używane dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_Scale_example.png)

Skalowanie obiektu przy użyciu punktu środkowego.

## Użycie

Zobacz także strony: [Rysunek Roboczy: Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") i [Rysunek Roboczy: Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Opcjonalnie wybierz jeden lub więcej obiektów, albo jeden lub więcej elementów podrzędnych [linii](/Draft_Line/pl "Draft Line/pl") lub [polilinii](/Draft_Wire/pl "Draft Wire/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Scale.svg) **Skaluj**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Scale.svg) Skala**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Scale.svg) Skaluj** z menu.
   * Użyj skrótu klawiaturowego: S, a następnie C.
3. Jeśli nie wybrałeś jeszcze obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Otworzy się panel zadań **Skala**. Zobacz [Opcje](#Opcje), aby uzyskać więcej informacji.
5. Jeśli zostały wybrane elementy podrzędne: zaznacz pole wyboru **Modyfikuj elementy podrzędne**, aby włączyć tryb elementów podrzędnych.
6. Wybierz punkt bazowy w [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
7. Wprowadź współczynniki skali X, Y i Z.
8. Naciśnij przycisk Enter lub przycisk OK, aby zakończyć działanie polecenia.

## Opcje

### Pierwszy panel zadań

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi.

* Aby ręcznie wprowadzić współrzędne punktu bazowego, wprowadź składowe X, Y i Z, a następnie naciśnij klawisz Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor myszki poza okno [widoku 3D](/3D_view "3D view").
* Naciśnij klawisz G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są odniesione do globalnego układu współrzędnych, w przeciwnym razie są one odniesione do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij przycisk Zamknij, aby przerwać wykonywanie polecenia.

### Drugi panel zadań

* Wprowadź współrzędne X, Y i Z, aby zdefiniować przeskalowanie. Wartości te muszą być większe od zera.
* Zaznacz pole wyboru **Jednolite skalowanie**, aby zablokować współczynniki X, Y i Z do tej samej wartości.
* Jeśli pole wyboru **Orientacja płaszczyzny roboczej** jest zaznaczone, współczynniki skali są odniesione do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), w przeciwnym razie są one odniesione do globalnego układu współrzędnych.
* Jeśli pole wyboru **Kopia** jest zaznaczone, tworzona jest skalowana kopia oryginalnego obiektu. Działa to tylko dla obiektów typu Rysunek Roboczy, które posiadają właściwość DANE**Punkty**, takich jak [polininie](/Draft_Wire/pl "Draft Wire/pl").
* Jeśli pole wyboru **Modyfikuj elementy podrzędne** jest zaznaczone, polecenie użyje wybranych elementów podrzędnych zamiast całych obiektów. Elementy podrzędne muszą należeć do [linii](/Draft_Line/pl "Draft Line/pl") lub [polininii](/Draft_Wire/pl "Draft Wire/pl").
* Jeśli pole wyboru **Utwórz klona** jest zaznaczone, tworzone są skalowane [klony](/Draft_Clone/pl "Draft Clone/pl") oryginalnych obiektów. Działa to dla wszystkich typów obiektów. Dla obiektów, które nie są typu Rysunek Roboczy, lub dla obiektów Rysunku Roboczego, które nie mają właściwości DANE**Punkty**, opcja *Musi* być wybrana.
* Naciśnij przycisk Wybierz z / do punktów i wybierz dwa dodatkowe punkty w oknie [widoku 3D](/3D_view/pl "3D view/pl"), aby obliczyć współczynniki skali. Spowoduje to automatyczne zaznaczenie pola wyboru **Jednolite skalowanie**. Współczynniki skali X, Y i Z będą zatem równe i zostaną ustawione jako odległość między punktem bazowym a punktem *od*, podzielona przez odległość między punktem bazowym a punktem *do*.
* Naciśnij przycisk Esc lub przycisk Anuluj, aby przerwać wykonywanie polecenia.

## Uwagi

* Polecenie może również skalować [Płaszczyznę obrazu](/Image_CreateImagePlane/pl "Image CreateImagePlane/pl"), ale nie w trybie klonowania.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Aby ponownie wybrać obiekty bazowe po skopiowaniu obiektów: **Edycja → Preferencje → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Zaznacz obiekty bazowe po skopiowaniu**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Do skalowania obiektów służy metoda `scale` środowiska Rysunek Roboczy.

```
scaled_list = scale(objectslist, scale=Vector(1,1,1), center=Vector(0,0,0), copy=False)

```

* `objectslist` zawiera obiekty, które mają zostać obrócone. Może to być pojedynczy obiekt lub lista obiektów.
* `skala` to wektor określający współczynniki skalowania X, Y i Z.
* `środek` to punkt środkowy operacji skalowania.
* Jeśli `kopia` ma wartość `Prawda`, to zamiast skalowania oryginalnych obiektów tworzone są ich kopie.
* Lista `lista_skalowana` jest zwracana z oryginalnymi przeskalowanymi obiektami lub z nowymi kopiami. Jest to albo pojedynczy obiekt, albo lista obiektów, w zależności od właściwości `lista obiektów`.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pts = [App.Vector(0, 0, 0), App.Vector(500, 500, 0), App.Vector(600, 0, 0)]
wire1 = Draft.make_wire(pts, closed=True)
doc.recompute()

scale1 = App.Vector(2.3, 0.75, 0)
wire2 = Draft.scale(wire1, scale1, copy=True)
doc.recompute()

scale2 = App.Vector(-2, -1.5, 0)
wires = Draft.scale([wire1, wire2], scale2, copy=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Scale/pl&oldid=1513663>"
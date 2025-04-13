---
title: Rysunek Roboczy Szyk ortogonalny
---
|  |
| --- |
| Rysunek Roboczy: Szyk ortogonalny |
| Lokalizacja w menu |
| Modyfikacja → Narzędzia szyku → Szyk ortogonalny Modyfikacja → Szyk ortogonalny |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl"), [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"), [Szyk po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl"), [Szyk powiązań po ścieżce](/Draft_PathLinkArray/pl "Draft PathLinkArray/pl"), [Szyk z punktów](/Draft_PointArray/pl "Draft PointArray/pl"), [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_OrthoArray.svg) **Szyk ortogonalny** tworzy prostokątny *(3-osiowy)* szyk z wybranego obiektu. Polecenie może opcjonalnie utworzyć szyk [Łączy](/App_Link/pl "App Link/pl"), który jest bardziej wydajny niż zwykły szyk.

Narzędzie Przesuń może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może być również używane dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_Array_example.png)

Szyk ortogonalny.

## Użycie

1. Opcjonalnie wybierz jeden obiekt.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_OrthoArray.svg) **Szyk ortogonalny**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → Narzędzia szyku → ![](/images/Draft_OrthoArray.svg) Szyk ortogonalny**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_OrthoArray.svg) Szyk ortogonalny** z menu.
3. Otworzy się panel zadań **Szyk prostokątny**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
4. Jeśli nie wybrano jeszcze żadnego obiektu: wybierz jeden obiekt.
5. Wprowadź wymagane parametry w panelu zadań.
6. Aby zakończyć polecenie, wykonaj jedną z następujących czynności:
   * Kliknij w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Naciśnij Enter.
   * Naciśnij przycisk OK.

## Opcje

* Wprowadź **Liczbe elementów** dla kierunków X, Y i Z. Liczba ta musi wynosić co najmniej `1` dla każdego kierunku.
* Wprowadź **odstęp X**, aby określić przemieszczenie elementów w kierunku X. W przypadku tablicy prostokątnej wartości Y i Z muszą być równe `0`.
* Wprowadź **odstęp Y**, aby określić przemieszczenie elementów w kierunku Y. W przypadku tablicy prostokątnej wartości X i Z muszą mieć wartość `0`.
* Wprowadź **odstęp Z**, aby określić przemieszczenie elementów w kierunku Z. W przypadku tablicy prostokątnej wartości X i Y muszą mieć wartość `0`.
* Naciśnij przycisk **Reset X, Y or Z**, aby zresetować przemieszczenie w danym kierunku do wartości domyślnych.
* Jeśli pole wyboru **Scal** jest zaznaczone, nakładające się elementy w tablicy są łączone.
* Jeśli pole wyboru **Szyk łączy** jest zaznaczone, tworzony jest szyk Łączy zamiast zwykłego szyku. Szyk łączy jest bardziej wydajny, ponieważ jego elementami są obiekty [App: Łącze](/App_Link/pl "App Link/pl").
* Naciśnij Esc lub przycisk Anuluj, aby przerwać polecenie.

## Uwagi

* Szyk ortogonalny może zostać przekształcony w [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl") lub [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl") poprzez zmianę jego właściwości DANE**Typ szyku**.
* Szyk łączy nie może zostać przekształcony w zwykły szyk lub odwrotnie. Typ szyku musi być określony w czasie tworzenia.
* Scalone szyki łączy nie są wyświetlane poprawnie, w widoku 3D ich elementy zawsze wyglądają na niescalone.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Polecenia Szyk ortogonalny, [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl") i [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl") tworzą ten sam obiekt. Obiekt ten jest pochodną obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości *(z wyjątkiem niektórych właściwości widoku, które nie są dziedziczone przez szyki łączy)*. Poniższe właściwości są dodatkowe, chyba że zaznaczono inaczej:

### Dane

Łącze

Właściwości w tej grupie są dostępne tylko dla szyków łączy. Więcej informacji można znaleźć na stronie [Std: Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

* DANE**Skala** (`Float`)
* DANE (Ukryte)**Wektor skali** (`Vector`).
* DANE**Lista skali** (`VectorList`)
* DANE (Ukryte)**Lista widoczności** (`BoolList`)
* DANE (Ukryte)**Lista umiejscowienia** (`PlacementList`)
* DANE (Ukryte)**Lista elementów** (`LinkList`)
* DANE (Ukryte)**\_ Link Touched** (`Bool`)
* DANE (Ukryte)**\_ Child Cache** (`LinkList`)
* DANE (Hidden)**\_ Link Owner** (`Integer`)
* DANE (Ukryte)**Elementy kolorowe** (`LinkSubHidden`)
* DANE**Link Copy On Change** (`Enumeration`)
* DANE**Przekształcenie łącza** (`Bool`)

Szyk kołowy

Właściwości w tej grupie są ukryte dla tablic ortogonalnych i biegunowych.

* DANE**Liczba okręgów** (`Integer`): określa liczbę okrągłych warstw. Musi wynosić co najmniej `2`.
* DANE**Odległość promieniowa** (`Odległość`): określa odległość między okrągłymi warstwami.
* DANE**Symetria** (`Integer`): określa liczbę linii symetrii. Liczba ta zmienia rozmieszczenie elementów w tablicy.
* DANE**Odległość styczna** (`Distance`): określa odległość między elementami w tej samej warstwie kołowej. Musi być większa od zera.

Draft

* DANE**Always Sync Placement** (`Bool`)

Obiekty

* DANE**Typ szyku** (`Enumeration`): określa typ szyku, który może być `ortho`, `polar` lub `circular`.
* DANE**Oś odniesienia** (`LinkGlobal`): określa obiekt i krawędź, które mają być używane zamiast właściwości DANE**Axis** i DANE**Center**. Nie używane dla tablic ortogonalnych.
* DANE**Baza** (`Link`): określa obiekt do powielenia w tablicy.
* DANE**Ilość** (`Integer`): *(tylko do odczytu)* określa całkowitą liczbę elementów w tablicy.
* DANE**Rozwiń szyk** (`Bool`): określa, czy rozwinąć szyk w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"), aby umożliwić wybór jego poszczególnych elementów. Dostępne tylko dla szyków typu Link.
* DANE**Połącz** (`Bool`): określa, czy nakładające się elementy w tablicy mają być łączone, czy nie.
* DANE**Placement List** (`PlacementList`): umiejscowienie każdego elementu. Pojawia się w grupie Link dla szyków łączy. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

Szyk ortogonalny

Właściwości w tej grupie są ukryte dla tablic kołowych i biegunowych.

* DANE**Odstęp X** (`VectorDistance`): określa odstęp między elementami w kierunku X.
* DANE**Odstęp Y** (`VectorDistance`): określa odstęp między elementami w kierunku Y.
* DANE**Odstęp Z** (`VectorDistance`): określa odstęp między elementami w kierunku Z.
* DANE**Ilość X** (`Integer`): określa liczbę elementów w kierunku X. Musi wynosić co najmniej `1`.
* DANE**Ilość Y** (`Integer`): określa liczbę elementów w kierunku Y. Musi mieć wartość co najmniej `1`.
* DANE**Ilość Z** (`Integer`): określa liczbę elementów w kierunku Z. Musi mieć wartość co najmniej `1`.

Szyk biegunowy

Właściwości w tej grupie są ukryte dla szyków kołowych i szyków ortogonalnych.

* DANE**Kąt** (`Angle`): określa aperturę łuku kołowego. Użyj `360°` dla pełnego okręgu.
* DANE**Odstęp osi** (`VectorDistance`): określa odstęp między elementami w kierunku DANE**Axis**.
* DANE**Ilość Polar** (`Integer`): określa liczbę elementów w kierunku biegunowym.

Układ biegunowy / kołowy

Właściwości w tej grupie są ukryte dla szyków ortogonalnych.

* DANE**Oś** (`Vector`): określa kierunek osi tablicy.
* DANE**Środek** (`VectorDistance`): określa punkt środkowy tablicy. Oś tablicy przechodzi przez ten punkt. W przypadku tablic kołowych jest to przesunięcie od DANE**Umiejscowienia** obiektu DANE**Baza**.

### Widok

Łącze

Właściwości w tej grupie, z wyjątkiem właściwości dziedziczonej, są dostępne tylko dla szyków łączy. Więcej informacji można znaleźć na stronie [Std: Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

* WIDOK**Styl kreślenia** (`Enumeration`)
* WIDOK**Szerokość linii** (`FloatConstraint`)
* WIDOK**Nadpisanie materiału** (`Bool`)
* WIDOK**Rozmiar punktu** (`FloatConstraint`)
* WIDOK**Wybieralny** (`Bool`): jest to właściwość dziedziczona, która pojawia się w grupie "Wybór" dla innych szyków.
* WIDOK**Kształt materiału** (`Material`).

Podstawa

Właściwości w tej grupie, z wyjątkiem właściwości dziedziczonej, są dostępne tylko dla szyków łączy. Więcej informacji można znaleźć na stronie [Std: Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

* WIDOK (Ukryte)**Dostawca widoku elementu podrzędnego** (`PersistentObject`).
* WIDOK (Ukryte)**Lista materiałów** (`MaterialList`)
* WIDOK (Ukryte)**Zastąp listę kolorów** (`ColorList`)
* WIDOK (Ukryte)**Zastąp listę materiałów** (`BoolList`)
* WIDOK (Ukryte)**Proxy** (`PythonObject`): jest to właściwość dziedziczona.

Opcje wyświetlania

Właściwości w tej grupie są dziedziczone. Więcej informacji można znaleźć na stronie [Część: Cecha](/Part_Feature/pl#Własności "Part Feature/pl").

* WIDOK**Ramka otaczająca** (`Bool`): ta właściwość nie jest dziedziczona przez szyk łączy.
* WIDOK**Tryb wyświetlania** (`Enumeration`): dla szyku Łączy może to być `Link` lub `ChildView`. Dla innych szyków może to być: `Cieniowany z krawędziami`, `Cieniowany`, `Szkieletowy` lub `Punkty`.
* WIDOK**Pokaż w drzewie** (`Bool`)
* WIDOK**Widoczność** (`Bool`)

Rysunek Roboczy

* WIDOK**Wzór** (`Enumeration`): niewykorzystane.
* WIDOK**Rozmiar wzoru** (`Float`): niewykorzystane.

Styl obiektu

Właściwości w tej grupie nie są dziedziczone przez szyk łączy.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

### Szyk parametryczny

Aby utworzyć parametryczną tablicę ortogonalną, należy użyć metody `make_array` *([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl"))* modułu Rysunek Roboczy. Metoda ta zastępuje przestarzałą metodę `makeArray`. Metoda `make_array` może tworzyć obiekty OrthoArrays środowiska Rysunek Roboczy, [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl") i [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"). Dla każdego typu szyku dostępny jest jeden lub więcej elementów opakowujących.

Metoda podstawowa:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

Opakowaniem dla szyków ortogonalnych są:

```
array = make_ortho_array(base_object,
                         v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0), v_z=App.Vector(0, 0, 10),
                         n_x=2, n_y=2, n_z=1,
                         use_link=True)

```

```
array = make_ortho_array2d(base_object,
                           v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0),
                           n_x=2, n_y=2,
                           use_link=True)

```

Opakowaniem dla szyków prostokątnych są:

```
array = make_rect_array(base_object,
                        d_x=10, d_y=10, d_z=10,
                        n_x=2, n_y=2, n_z=1,
                        use_link=True)

```

```
array = make_rect_array2d(base_object,
                          d_x=10, d_y=10,
                          n_x=2, n_y=2,
                          use_link=True)

```

* `base_object` jest obiektem, który ma być tablicowany. Może to być również `Etykieta` *(ciąg znaków)* obiektu w bieżącym dokumencie.
* `v_x`, `v_y` i `v_z` są wektorami pomiędzy punktami bazowymi elementów w odpowiednich kierunkach.
* `d_x`, `d_y` i `d_z` to odległości między punktami bazowymi elementów w odpowiednich kierunkach.
* `n_x`, `n_y` i `n_z` są liczbami elementów w odpowiednich kierunkach.
* Jeśli `use_link` ma wartość `Prawda`, utworzone elementy są [łącza](/App_Link/pl "App Link/pl") zamiast zwykłych kopii.
* `szyk` jest zwracany wraz z utworzonym obiektem szyku.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

array = Draft.make_ortho_array2d(rect, v_x, v_y, 3, 4)
doc.recompute()

```

### Szyk nieparametryczny

Aby utworzyć nieparametryczny szyk ortogonalny, należy użyć metody `array` modułu Rysunek Roboczy. Metoda ta zwraca `Brak`.

```
array(objectslist, xvector, yvector, xnum, ynum)
array(objectslist, xvector, yvector, zvector, xnum, ynum, znum)

```

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

Draft.array(rect, v_x, v_y, 3, 4)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OrthoArray/pl&oldid=1557880>"
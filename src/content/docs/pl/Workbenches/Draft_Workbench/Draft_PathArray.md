---
title: Rysunek Roboczy Szyk po ścieżce
---
|  |
| --- |
| Rysunek Roboczy: Szyk po ścieżce |
| Lokalizacja w menu |
| Modyfikacja → Narzędzia szyku → Szyk po ścieżce Modyfikacja → Szyk po ścieżce |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.14 |
| Zobacz także |
| [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl"), [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"), [Szyk powiązań po ścieżce](/Draft_PathLinkArray/pl "Draft PathLinkArray/pl"), [Szyk z punktów](/Draft_PointArray/pl "Draft PointArray/pl"), [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_PathArray.svg) **Szyk po ścieżce** tworzy zwykły szyk z wybranego obiektu przez umieszczenie kopii wzdłuż ścieżki. Zamiast tego użyj polecenia [Szyk powiązań po ścieżce](/Draft_PathLinkArray/pl "Draft PathLinkArray/pl"), aby utworzyć bardziej wydajny szyk [powiązań](/App_Link "App Link"). Z wyjątkiem typu utworzonych szyków *(szyk powiązań lub zwykły szyk)*, polecenie [Szyk powiązań po ścieżce](/Draft_PathLinkArray/pl "Draft PathLinkArray/pl") jest identyczne z tym poleceniem.

Oba polecenia mogą być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale można ich również użyć dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_PathArray_Example.png)

Szyk po ścieżce

## Użycie

1. Wybierz obiekt, który chcesz wyświetlić.
2. Dodaj obiekt ścieżki do zaznaczenia. Zamiast tego można również wybrać krawędzie. Krawędzie muszą należeć do tego samego obiektu i muszą być połączone.
3. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_PathArray.svg) **Szyk po ścieżce**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję z menu **Modyfikacja → Narzędzia szyku → ![](/images/Draft_PathArray.svg) Szyk po ścieżce**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_PathArray.svg) Szyk po ścieżce** z menu.
4. Szyk zostanie utworzony.
5. Opcjonalnie można zmienić [właściwości](#Właściwości) szyku w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Wyrównanie

Wyrównanie elementów w Szyk po ścieżce zależy od właściwości szyku i orientacji obiektu źródłowego. Pozycja obiektu źródłowego jest ignorowana: dla celów szyku wartości `x`, `y` i `z` są ustawione na `0`. Jeśli właściwość DANE**Wyrównaj** szyku jest ustawiona na wartość `FAŁSZ`, orientacja elementów szyku jest identyczna z orientacją obiektu źródłowego. Jeśli jest ustawiona na `PRAWDA`, oś X lokalnego układu współrzędnych każdego umieszczonego elementu jest styczna do ścieżki. Osie Y i Z lokalnych układów współrzędnych zależą od właściwości DANE**Tryb wyrównania** szyku. Inne właściwości szyku związane z wyrównaniem obejmują: DANE**Wektor styczny**, DANE**Wymuś pionowo** i DANE**Wektor pionowy**.

![](/images/Draft_PathArray_example2.png)

Trzy szyki oparte na tej samej nieplanarnej ścieżce. Od lewej do prawej: Wyrównanie ustawiono na `Fałsz`, Wyrównanie ustawiono na `Prawda` z trybem wyrównania Original i Wyrównaj ustawiono na `Prawda` z trybem wyrównania Frenet.

.

### Tryb wyrównania

Dostępne są trzy tryby:

#### Original

Ten tryb jest najbardziej zbliżony do pojedynczego DANE**Tryb wyrównania** dostępnego w wersji 0.18. Opiera się on na stałym wektorze normalnym. Jeśli ścieżka jest płaska, wektor ten jest prostopadły do płaszczyzny ścieżki, w przeciwnym razie używany jest wektor domyślny, o dodatniej osi Z. Na podstawie tego wektora normalnego i lokalnego wektora stycznego *(lokalna oś X)* obliczany jest [iloczyn krzyżowy](https://en.wikipedia.org/wiki/Cross_product). Ten nowy wektor jest używany jako lokalna oś Z. Orientacja lokalnej osi Y jest określana na podstawie lokalnych osi X i Z.

#### Frenet

Tryb ten wykorzystuje lokalny wektor normalny wyprowadzony ze ścieżki przy każdym umieszczeniu elementu. Jeśli nie można określić tego wektora *(na przykład w przypadku odcinka prostego)*, zamiast niego używany jest wektor domyślny, ponownie dodatnia oś Z. Za pomocą tego wektora i lokalnego wektora stycznego lokalny układ współrzędnych jest określany przy użyciu tej samej procedury, co w poprzednim akapicie.

### Styczna

Tryb ten jest podobny do DANE**Trybu wyrównania** `Original`, ale obejmuje możliwość wstępnego obrócenia obiektu źródłowego poprzez określenie DANE**Wektora stycznej**.

### Wymuś pionowo i Wektor pionowy

Właściwości te są dostępne tylko wtedy, gdy DANE**Tryb wyrównania** ma wartość `Original` lub `Styczny`. Jeśli właściowść DANE**Wymuś pionowo** jest ustawione na `PRAWDA`, lokalny układ współrzędnych jest obliczany w inny sposób. DANE**Wektor pionowy** jest używany jako stały wektor normalny. Z tego wektora normalnego i lokalnego wektora stycznego *(lokalna oś X)* ponownie obliczany jest iloczyn krzyżowy. Ale teraz ten wektor jest używany jako lokalna oś Y. Orientacja lokalnej osi Z jest określana na podstawie lokalnych osi X i Y.

Użycie tych właściwości może być wymagane, jeśli jedna z krawędzi ścieżki jest *(prawie)* równoległa do domyślnej normalnej ścieżki.

## Uwagi

* Scalone szyki łączy nie są wyświetlane poprawnie, w widoku 3D ich elementy zawsze wyglądają na niescalone.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Szyk po ścieżce środowiska Rysunek Roboczy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości *(z wyjątkiem niektórych właściwości Widoku, które nie są dziedziczone przez szyki Łączy)*. Poniższe właściwości są dodatkowe, chyba że zaznaczono inaczej:

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

Wyrównanie

* DANE**Wyrównaj** (`Bool`): określa, czy elementy w tablicy są wyrównane wzdłuż ścieżki, czy nie. Jeśli ma wartość `FAŁSZ`, wszystkie inne właściwości w tej grupie, z wyjątkiem DANE**Dodatkowe przesunięcie**, nie mają zastosowania i są ukryte.
* DANE**Tryb wyrównania** (`Enumeration`): określa tryb wyrównania, który może być `Original`, `Frenet` lub `Stycznie`.
* DANE**Dodatkowe przesunięcie** (`VectorDistance`): określa dodatkowe przemieszczenie dla każdego elementu wzdłuż ścieżki.
* DANE**Wymuś pionowo** (`Bool`): określa, czy zastąpić domyślny kierunek normalny wartością DANE**Wektor pionowy**. Używane tylko jeśli DANE**Tryb wyrównania** ma wartość `Original` lub `Styczna`.
* DANE**Odwróć ścieżkę** (`Bool`): określa, czy przechodzić ścieżkę wstecz. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* DANE**Wektor styczny** (`Vector`): określa wektor wyrównania. Używane tylko jeśli DANE**Tryb wyrównania** jest `Styczna`.
* DANE**Wektor pionowy** (`Vector`): określa nadpisanie domyślnego kierunku normalnego. Używane tylko jeśli właściwość DANE**Wektor pionowy** ma wartość `PRAWDA`.

Draft

* DANE**Always Sync Placement** (`Bool`)

Obiekty

* DANE**Baza** (`LinkGlobal`): określa obiekt do powielenia w szyku.
* DANE**Rozwiń szyk** (`Bool`): określa, czy tablica ma zostać rozwinięta w [widoku drzewa](/Tree_view/pl "Tree view/pl"), aby umożliwić wybór jej poszczególnych elementów. Dostępne tylko dla szyków łączy.
* DANE**Scal** (`Bool`): określa, czy nakładające się elementy w tablicy są łączone, czy nie. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* DANE**Obiekt ścieżki** (`LinkGlobal`): określa obiekt, który ma być użyty dla ścieżki. Musi zawierać `Krawędzie` w swoim [kształcie topologicznym](/Part_TopoShape/pl "Part TopoShape/pl").
* DANE**Elementy podrzędne ścieżki** (`LinkSubListGlobal`): określa listę krawędzi DANE**Obiektu ścieżki**. Jeśli zostanie podana, tylko te krawędzie są używane dla ścieżki.
* DANE**Placement List** (`PlacementList`): umiejscowienie dla każdego elementu. Pojawia się w grupie Link dla szyków łączy. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

Spacing

* DANE**Count** (`Integer`): określa liczbę elementów w szyku.
* DANE**End Offset** (`Length`): określa długość od końca ścieżki do ostatniej kopii. Musi być mniejsza niż długość ścieżki minus DANE**Start Offset**. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* DANE**Spacing Mode** (`Enumeration`): określa sposób rozmieszczenia elementów. Opcje to: [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

```
 ** Fixed count: dostępna długość ścieżki (minus przesunięcia początkowe i końcowe) jest równomiernie podzielona, aby pomieścić DANECount elementów.  
 ** Fixed spacing: rozpocznij od przesunięcia początkowego i umieszczaj nowe elementy po przebyciu stałej odległości wzdłuż ścieżki.  
 ** Fixed count and spacing: tak samo jak Fixed spacing, ale również zatrzymaj się po osiągnięciu DANECount elementów.  

```

* DANE**Spacing Pattern** (`FloatList`): odstęp jest mnożony przez odpowiadającą mu liczbę w tej sekwencji. Używane tylko, jeśli DANE**Use Spacing Pattern** jest `PRAWDA`, w przeciwnym razie ukryte. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* DANE**Spacing Unit** (`Length`): podstawowa stała odległość między elementami. Używane tylko, jeśli DANE**Spacing Mode** to `Fixed spacing` lub `Fixed count and spacing`, w przeciwnym razie ukryte. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* DANE**Start Offset** (`Length`): określa długość od początku ścieżki do pierwszej kopii. Musi być mniejsza niż długość ścieżki. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* DANE**Use Spacing Pattern** (`Bool`): używa powtarzających się wzorców odstępów zamiast jednolitego rozmieszczenia. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

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

Aby utworzyć Szyk po ścieżce, należy użyć metody `make_path_array` ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")) modułu Rysunek Roboczy. Metoda ta zastępuje przestarzałą metodę `makePathArray`.

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

* `base_object` jest obiektem, który ma być użyty w szyku. Może to być również `Etykieta` *(ciąg znaków)* obiektu w bieżącym dokumencie.
* `obiekt_ścieżki` jest obiektem ścieżki. Może to być również `Etykieta` *(ciąg znaków)* obiektu w bieżącym dokumencie.
* `Ilość` jest liczbą elementów w tablicy.
* `extra` jest wektorem, który przesuwa każdy element.
* `Element podrzędny` jest listą krawędzi `obiekt_ścieżki`, na przykład `["Edge1", "Edge2"]`. Jeśli zostanie podana, tylko te krawędzie są używane dla ścieżki.
* Jeśli `Wyrównaj` ma wartość `Prawda`, elementy są wyrównywane wzdłuż ścieżki w zależności od wartości właściwości `tryb_wyrównania`, która może mieć wartość `"Original"`, `"Frenet"` lub `"Styczna"`.
* `tan_vector` jest wektorem jednostkowym, który definiuje lokalny kierunek styczny elementów wzdłuż ścieżki. Jest on używany, gdy właściwość `tryb_wyrównania` ma wartość `"Styczna"`.
* Jeśli `Wymuś_pionowo` ma wartość `Prawda`, `vertical_vector` jest używany dla lokalnego kierunku Z elementów wzdłuż ścieżki. Jest on używany, gdy właściwość `tryb_wyrównania` ma wartość `"Original"` lub `"Styczna"`.
* Jeśli `użyj_łaczy` ma wartość `Prawda`, utworzone elementy są obiektami [App: Łącze](/App_Link/pl "App Link/pl") zamiast zwykłych kopii.
* `Szyk_ścieżki` jest zwracany wraz z utworzonym obiektem szyku.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(500, -1000, 0)
p2 = App.Vector(1500, 1000, 0)
p3 = App.Vector(3000, 500, 0)
p4 = App.Vector(4500, 100, 0)
spline = Draft.make_bspline([p1, p2, p3, p4])
obj = Draft.make_polygon(3, 500)

path_array = Draft.make_path_array(obj, spline, 6)
doc.recompute()

wire = Draft.make_wire([p1, -p2, -p3, -p4])
path_array2 = Draft.make_path_array(obj, wire, count=3, extra=App.Vector(0, -500, 0), subelements=["Edge2", "Edge3"], align=True, force_vertical=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/pl&oldid=1557886>"
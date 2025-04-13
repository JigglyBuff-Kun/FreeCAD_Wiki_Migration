---
title: Rysunek Roboczy Etykieta
---
|  |
| --- |
| Rysunek Roboczy: Etykieta |
| Lokalizacja w menu |
| Adnotacja → Etykieta |
| Środowisko pracy |
| [Rysunek roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| D L |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [tekst](/Draft_Text/pl "Draft Text/pl"), [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Label.svg) **Etykieta** tworzy wielowierszowy tekst z dwu-segmentową linią prowadzącą i strzałką.

Jeśli obiekt lub element podrzędny (ściana, krawędź lub wierzchołek) jest zaznaczony podczas uruchamiania polecenia, obiekt tekstu może wyświetlać jeden lub dwa atrybuty wybranego elementu, w tym położenie, długość, powierzchnię, objętość i materiał. Tekst będzie wówczas powiązany z atrybutami i będzie aktualizowany w przypadku zmiany ich wartości.

Aby wstawić element tekstowy bez strzałki, należy użyć polecenia [Tekst](/Draft_Text/pl "Draft Text/pl").

![](/images/Draft_Label_example.jpg)

Różne etykiety z różnymi orientacjami, strzałkami i informacjami.

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Opcjonalnie wybierz obiekt lub jego element podrzędny (wierzchołek, krawędź lub ścianę), którego atrybuty chcesz wyświetlić.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Label.svg) **Etykieta**.
   * Wybierz z menu opcję **Opisy → ![](/images/Draft_Label.svg) Etykieta**.
   * Użyj skrótu klawiaturowego: D, a następnie L.
3. Otworzy się panel zadań **Etykieta**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
4. Jeśli wybrałeś element: wybierz opcję z rozwijanej listy **Typ etykiety**. Zobacz sekcję [Typ etykiety](#Typ_etykiety) poniżej.
5. Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt. Ten punkt wskazuje cel *(główkę strzałki)*. Może to być dowolne miejsce, nie musi znajdować się na elemencie.
6. Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt. Punkt ten wskazuje początek poziomego lub pionowego segmentu linii prowadzącej.
7. Wybierz trzeci punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt. Punkt ten wskazuje punkt bazowy tekstu.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi.

* Aby ręcznie wprowadzić współrzędne, wprowadź element X, Y i Z i naciśnij Enter po każdym z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie wskaźnika poza okno [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Wciśnij R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne są względne do ostatniego punktu, jeśli jest dostępny, w przeciwnym razie są one względne do początku układu współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij S, aby włączyć lub wyłączyć [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij Esc lub przycisk Zamknij, aby przerwać polecenie.

## Typ etykiety

Dostępne są następujące typy etykiet:

* `Użytkownika`: wyświetla zawartość DANE**Tekst użytkownika**.
* `Nazwa`: wyświetla wewnętrzną nazwę obiektu docelowego. Nazwa wewnętrzna jest przypisywana podczas tworzenia obiektu i pozostaje niezmienna przez cały okres istnienia obiektu.
* `Etykieta`: wyświetla etykietę obiektu docelowego. Etykieta obiektu może zostać zmieniona przez użytkownika.
* `Pozycja`: wyświetla współrzędne punktu bazowego obiektu docelowego lub wierzchołka docelowego.
* `Długość`: wyświetla długość docelowego obiektu lub elementu podrzędnego.
* `Powierzchnia`: wyświetla obszar docelowego obiektu lub elementu podrzędnego.
* `Objętość`: wyświetla objętość obiektu docelowego.
* `Znacznik`: wyświetla atrybut `Znacznik` obiektu docelowego. Obiekty utworzone za pomocą środowiska pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl") mogą mieć ten atrybut.
* `Materiał`: wyświetla etykietę materiału obiektu docelowego.
* `Etykieta + pozycja`,
* `Etykieta + długość`,
* `Etykieta + powierzchnia`,
* `Etykieta + objętość`,
* `Etykieta + materiał`.

## Uwagi

* Kierunek drugiego segmentu lidera określa wyrównanie tekstu. Jeśli segment jest poziomy i skierowany w prawo, tekst jest wyrównany do lewej i odwrotnie. Jeśli drugi segment jest skierowany pionowo w górę, tekst jest wyrównany do lewej. Jeśli jest skierowany pionowo w dół, tekst jest wyrównany do prawej.
* Wersje robocze etykiet utworzone lub zapisane w [FreeCAD w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") nie są kompatybilne wstecz.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Etykieta środowispa pracy Rysunek Roboczy wywodzi się z obiektu [App: FeaturePython](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Poniższe właściwości są dodatkowe, chyba że zaznaczono inaczej.

### Dane

Etykieta

* DANE**Tekst użytkownika** (`StringList`): określa zawartość tekstu, jeśli DANE**Typ etykiety** to `Użytkownika`. Każda pozycja na liście reprezentuje nową linię tekstu.
* DANE**Typ etykiety** (`Enumeration`): określa typ informacji wyświetlanych przez etykietę. Zobacz sekcję [Typy etykiet](#Typ_etykiety).
* DANE**Umiejscowienie** (`Placement`): określa położenie tekstu w oknie [widoku 3D](/3D_view/pl "3D view/pl") i, o ile DANE**Kierunek prosty** nie ma wartości `Użytkownika`, także pierwszego segmentu prowadzącego, czyli segmentu, do którego dołączony jest tekst. Zobacz stronę [Umiejscowienie](/Placement/pl "Placement/pl").
* DANE**Tekst** (`StringList`): *(tylko do odczytu)* określa zawartość wyświetlanego tekstu. Każdy element na liście reprezentuje nową linię tekstu.

Odniesienie

* DANE**Punkt** (`VectorList`): określa punkty lidera.
* DANE**Kierunek prosty** (`Enumeration`): określa kierunek pierwszego segmentu prowadzącego: `Użytkownika`, `Poziomo` lub `Pionowo`.
* DANE**Odległość prosta** (`Distance`): określa długość pierwszego segmentu prowadzącego. Używane tylko jeśli DANE**Kierunek prosty** ma wartość `Poziomo` lub `Pionowo`. Jeśli odległość jest dodatnia, linia pomocnicza zaczyna się od prawej strony tekstu, a tekst jest wyrównywany do prawej. W przeciwnym razie lider zaczyna od lewej strony tekstu, a tekst jest wyrównany do lewej.

Cel

* DANE**Cel** (`LinkSub`): określa obiekt i opcjonalny element podrzędny, z którym powiązana jest etykieta.
* DANE**Punkt docelowy** (`Vector`): określa pozycję końcówki linii prowadzącej, do której przymocowana jest strzałka.

### Widok

Adnotacja

* WIDOK**Styl adnotacji** (`Enumeration`): określa styl adnotacji zastosowany do etykiety. Zobacz stronę [Edytor stylów adnotacji](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl").
* WIDOK**Mnożnik skali** (`Float`): określa ogólny współczynnik skalowania zastosowany do etykiety.

Opcje wyświetlania

* WIDOK**Tryb wyświetlania** (`Enumeration`): określa sposób wyświetlania tekstu. Jeśli wartością jest `Świat`, tekst będzie wyświetlany na płaszczyźnie zdefiniowanej przez jego DANE**Umiejscowienie**. Jeśli jest to `Ekran`, tekst będzie zawsze skierowany w stronę ekranu. To jest własność dziedziczona. Wspomniane opcje to opcje o zmienionych nazwach *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*.

Grafika

* WIDOK**Rozmiar strzałki** (`Length`): określa rozmiar symbolu wyświetlanego na końcu linii prowadzącej.
* WIDOK**Typ strzałki** (`Enumeration`): określa typ symbolu wyświetlanego na końcu wskaźnika, którym może być `Punkt`, `Okrąg`, `Strzałka`, `Grot` lub `Grot-2`.
* WIDOK**Ramka** (`Enumeration`): określa typ ramki rysowanej wokół tekstu. Dostępne opcje to `Brak` lub `Prostokąt`.
* WIDOK**Linia** (`Bool`): określa, czy ma być wyświetlana linia prowadząca. Jeśli ma wartość `FAŁSZ`, wyświetlane są tylko strzałka i tekst.
* WIDOK**Kolor linii** (`Color`): określa kolor linii prowadzącej i strzałki. Jest on również używany dla ramki.
* WIDOK**Szerokość linii** (`Float`): określa szerokość linii odniesienia. Jest używana także dla ramki.

Tekst

* WIDOK**Nazwa czcionki** (`Font`): określa czcionkę używaną do rysowania tekstu. Może to być nazwa czcionki, taka jak `Arial`, domyślny styl, taki jak `sans`, `serif` lub `mono`, rodzina, taka jak `Arial,Helvetica,sans`, lub nazwa ze stylem, takim jak `Arial:Bold`. Jeśli podana czcionka nie zostanie znaleziona w systemie, zamiast niej zostanie użyta czcionka domyślna. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* WIDOK**Rozmiar czcionki** (`Length`): określa rozmiar liter. Tekst może być niewidoczny w oknie [widoku 3D](/3D_view/pl "3D view/pl"), jeśli ta wartość jest bardzo mała. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21").
* WIDOK**Wyrównanie** (`Enumeration`): określa poziome wyrównanie tekstu: `Do lewej`, `Wyśrodkuj` lub `Do prawej`. Używane tylko jeśli DANE**Kierunek prosty** ma wartość `Użytkownika`. W przeciwnym razie wyrównanie poziome jest oparte na znaku *(dodatnim lub ujemnym)* DANE**Odległość prosta**.
* WIDOK**Odstępy między wierszami** (`Float`): określa współczynnik stosowany do domyślnej wysokości linii tekstu.
* WIDOK**Maksymalna liczba znaków** (`Integer`): określa maksymalną liczbę znaków w każdej linii tekstu.
* WIDOK**Wyrównanie tekstu** (`Enumeration`): określa pionowe wyrównanie tekstu: `Do góry`, `Pośrodku` lub `W dół`.
* WIDOK**Tekst Color** (`Color`): określa kolor tekstu.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Etykietę środowiska pracy Rysunek Roboczy użyj metody `make_label` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeLabel`.

```
label = make_label(target_point=App.Vector(0, 0, 0),
                   placement=App.Vector(30, 30, 0),
                   target_object=None, subelements=None,
                   label_type="Custom", custom_text="Label",
                   direction="Horizontal", distance=-10,
                   points=None)

```

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
doc.recompute()

p1 = App.Vector(-200, 1000, 0)
place1 = App.Placement(App.Vector(-1000, 1300, 0), App.Rotation())

label1 = Draft.make_label(p1, place1, target_object=rectangle, distance=500, label_type="Label")
label1.ViewObject.FontSize= 200

p2 = App.Vector(-200, 0, 0)
place2 = App.Placement(App.Vector(-1000, -300, 0), App.Rotation())

label2 = Draft.make_label(p2, place2, target_object=rectangle, distance=500, label_type="Custom",
                          custom_text="Beware of the sharp edges")
label2.ViewObject.FontSize= 200

p3 = App.Vector(1000, 1200, 0)
place3 = App.Placement(App.Vector(2000, 1800, 0), App.Rotation())

label3 = Draft.make_label(p3, place3, target_object=rectangle, distance=-500, label_type="Area")
label3.ViewObject.FontSize= 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Label/pl&oldid=1513675>"
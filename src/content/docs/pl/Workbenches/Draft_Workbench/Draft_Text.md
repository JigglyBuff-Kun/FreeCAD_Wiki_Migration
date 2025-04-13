---
title: Rysunek Roboczy Adnotacja wieloliniowa
---
|  |
| --- |
| Rysunek roboczy: Tekst |
| Lokalizacja w menu |
| Adnotacja → Tekst |
| Środowisko pracy |
| [Rysunek roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| T E |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| [Etykieta](/Draft_Label/pl "Draft Label/pl"), [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") |
|  |

## Opis

Narzędzie ![](/images/Draft_Text.svg) **Adnotacja wieloliniowa** wstawia wielowierszowe pole tekstowe w wybranym miejscu.

Aby wstawić element tekstowy ze strzałką, użyj przycisku [Rysunek roboczy: Etykieta](/Draft_Label/pl "Draft Label/pl") zamiast tego polecenia.

![](/images/Draft_Text_example.png)

Pojedynczy punkt wymagany przy ustawianiu tekstu

## Użycie

Zobacz również: [Rysunek roboczy: Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl") oraz [Rysunek roboczy: Przyciąganie](/Draft_Snap/pl "Draft Snap/pl").

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Text.svg) **Adnotacja wieloliniowa**,
   * Wybierz opcję z menu **Adnotacje → ![](/images/Draft_Text.svg) Tekst**,
   * Użyj skrótu klawiaturowego: T a następnie E.
2. Otwiera się panel zadań **Tekst**. Zobacz sekcję [Opcje](#Opcje), aby uzyskać więcej informacji.
3. Kliknij punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Dodaj punkt.
4. Wprowadź żądany tekst, naciskając Enter między każdą linijką.
5. Naciśnij Enter dwukrotnie, lub naciśnij przycisk ![](/images/Button_valid.svg). Utwórz tekst aby zakończyć operację.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, po prostu wprowadź liczby, a następnie naciśnij klawisz Enter pomiędzy każdą składową X, Y i Z. Możesz wcisnąć przycisk ![](/images/Draft_AddPoint.svg) dodaj punkt, gdy już wprowadzisz żądane wartości. Zaleca się wysunięcie kursora poza okno [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są względne w stosunku do globalnego układu współrzędnych, w przeciwnym razie są względne w stosunku do układu współrzędnych [płaszczyznay roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz N lub zaznacz pole wyboru **Kontynuuj** aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie zostanie uruchomione ponownie po zakończeniu pracy, umożliwiając kontynuowanie tworzenia tekstów. Skrót ten nie działa w drugim panelu zadań. Opcja ta nie jest dostępna w pierwszym panelu zadań w programie FreeCAD w wersji 0.19 i wcześniejszych.
* Naciśnij S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij klawisz Esc lub przycisk Zamknij, aby przerwać bieżące polecenie.

## Uwagi

* Tekst może być edytowany poprzez dwukrotne kliknięcie na nim w [Widoku drzewa](/Tree_view/pl "Tree view/pl").
* Teksty utworzone lub zapisane za pomocą funkcji [z wydania 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") nie są wstecznie kompatybilne.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Adnotacja wieloliniowa wywodzi się z obiektu [App: FeaturePython](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Poniższe właściwości są dodatkowe, chyba że zaznaczono inaczej.

### Dane

Podstawa

* DANE**Umieszczenie** (`Placement`): określa położenie tekstu w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Zobacz [Umiejscowienie](/Placement/pl "Placement/pl").
* DANE**Tekst** (`StringList`): określa zawartość tekstu. Każda pozycja na liście reprezentuje nowy wiersz tekstu.

### Widok

Adnotacja

* WIDOK**Styl adnotacji** (`Enumeration`): określa styl adnotacji zastosowany do tekstu. Zobacz stronę [Edytor stylów adnotacji](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl").
* WIDOK**Mnożnik skali** (`Float`): określa ogólny współczynnik skalowania zastosowany do tekstu.

Opcje wyświetlania

* WIDOK**Tryb wyświetlania** (`Enumeration`): określa sposób wyświetlania tekstu. Jeśli wartością jest `World`, tekst będzie wyświetlany na płaszczyźnie zdefiniowanej przez jego DANE**Uniejscowienie**. Jeśli jest to `Screen`, tekst będzie zawsze skierowany w stronę ekranu. To jest dziedziczona własność. Wspomniane opcje to opcje o zmienionych nazwach *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*.

Grafika

* WIDOK**Kolor linii** (`Color`): nie wykorzystano.
* WIDOK**Szerokość linii** (`Float`): nie wykorzystano.

Tekst

* WIDOK**Nazwa czcionki**: określa czcionkę, której należy używać do rysowania tekstu. Może to być nazwa czcionki, np. `Arial`, styl domyślny, np. `sans`, `serif` lub `mono`, rodzina `Arial, Helvetica, sans` lub nazwa w stylu `Arial:Bold`. Jeśli dana czcionka nie znajduje się w systemie, stosuje się zamiast niej czcionkę standardową.
* WIDOK**Wielkość czcionki**: określa rozmiar liter. Jeżeli obiekt tekstowy jest tworzony w widoku drzewa, lecz nie jest widoczny żaden tekst, to należy zwiększyć rozmiar tekstu, aż będzie on widoczny.
* WIDOK**Wyrównanie**: określa, czy tekst wyrównuje się do lewej, prawej czy do środka punktu bazowego.
* WIDOK**Rozstaw linii**: określa odstęp między liniami tekstu.
* WIDOK**Kolor tekstu** (`Color`): definiuje barwę tekstu.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Adnotacja wieloliniowa** używa metody `make_text` *([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19"))* środowiska Rysunek roboczy. Ta metoda zastępuje przestarzałą metodę `makeText`.

```
text = make_text(string, placement=None, screen=False)

```

* Tworzy obiekt `text`, w miejscu `placement`, który może być `FreeCAD.Placement`, ale także zdefiniowanym przez `FreeCAD.Rotation` lub `FreeCAD.Vector`.
* `string` to łańcuch, lub lista łańcuchów. Jeżeli jest to lista, to każdy element jest wyświetlany w swoim wierszu.
* Jeżeli wartość `screen` ma wartość `True`, to tekst jest zawsze zwrócony w kierunku obserwacji z kamery, w przeciwnym razie jest wyświetlana w płaszczyźnie zdefiniowanej przez jej DANE**Umiejscowienie**.

Właściwości widoku `text` można zmienić poprzez nadpisanie jego właściwości, np. nadpisać `ViewObject.FontSize` wartością nowego rozmiaru w milimetrach.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

t1 = "This is a sample text"
p1 = App.Vector(0, 0, 0)

t2 = ["First line", "second line"]
p2 = App.Vector(1000, 1000, 0)

text1 = Draft.make_text(t1, p1)
text2 = Draft.make_text(t2, p2)
text1.ViewObject.FontSize = 200
text2.ViewObject.FontSize = 200

zaxis = App.Vector(0, 0, 1)

t3 = ["Upside", "down"]
p3 = App.Vector(-1000, -500, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 180))
text3 = Draft.make_text(t3, place3)
text3.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/pl&oldid=1513679>"
---
title: Przestrzeń nazw Svg
---
:::caution
Rozwój środowiska pracyKreśleniezatrzymał się w FreeCAD0.16, a nowe środowisko pracyRysunek Technicznymające na celu zastąpienie go zostało wprowadzone w wersji0.17. Oba Środowiska pracy są nadal dostępne w wersji0.17do0.21, ale środowisko pracy Kreślenie nie jest już dołączane od wersji0.21.
:::

Obecnie środowisko pracy Rysunek Techniczny nadal wykorzystuje atrybut **freecad:EditableText** i związaną z nim deklarację przestrzeni nazw w swoich aktualnych szablonach.

## Wprowadzenie

FreeCAD może importować i eksportować dokumenty [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) zawierające kod należący do określonej "przestrzeni nazw", która jest podzbiorem instrukcji XML.

Jak każdy dokument XML, dokument SVG składa się z dwóch sekcji:

* [Nagłówka](#Nagłówek): to zaledwie jeden wiersz deklarujący, która wersja języka XML jest używana dla instrukcji w treści tego dokumentu.
* [Treści](#Treść): lista instrukcji. Dokumenty SVG zawierają wszystkie instrukcje w znacznikach `<svg>`.

:   Znacznik otwierający zawiera informacje o rozmiarze i używanych przestrzeniach nazw SVG.

## Domyślna przestrzeń nazw

Domyślna przestrzeń nazw SVG używana przez FreeCAD jest zadeklarowana w tym wierszu:

```
xmlns="http://www.w3.org/2000/svg" version="1.1"

```

Zewnętrzny link prowadzi do strony internetowej zawierającej informacje o przestrzeni nazw i jej zestawie instrukcji. Atrybuty tej przestrzeni nazw są używane bez przedrostka.

## Rozszerzenie przestrzeni nazw

Atrybuty brakujące w przestrzeni nazw SVG mogą być dodawane przez rozszerzenia przestrzeni nazw. FreeCAD używa takiego rozszerzenia dla szablonów rysunków. Powiązana deklaracja przestrzeni nazw, używana do wprowadzenia prefiksu `freecad:`, łączy się z powiązaną stroną internetową, **tej stroną**:

```
xmlns:freecad="http://www.freecad.org/wiki/index.php?title=Svg_Namespace"

```

Link nie jest używany do pobierania informacji lub wartości w czasie wykonywania, ale jest kluczem do aktywacji niestandardowych atrybutów.

### Szablony Rysunku Technicznego i symboli

Środowisko pracy Rysunek Techniczny wykorzystuje szablony SVG do tworzenia rysunków. Nie może tworzyć i eksportować szablonów, ale polega na zewnętrznie utworzonych szablonach z ręcznie wstawionymi atrybutami:

* [freecad:editable](#freecad:editable) włącza edytowalne wpisy w blokach tytułowych.
* [freecad:autofill](#freecad:autofill) *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))* dodane do powyższego, oznacza tekst do automatycznego wypełnienia podczas tworzenia szablonu.

Symbole to kolejny typ plików SVG, które mogą być używane w widokach rysunków, np. do adnotacji przypominających znaczki. One również muszą być tworzone zewnętrznie i mogą używać wyżej wymienionych atrybutów.

### Migracja do freecad.org

Przed migracją wiki FreeCAD, w tym **tej strony**, z **freecadweb.org** do **freecad.org** w wersji 0.21 link do tej strony miał postać:

**xmlns:freecad="http://www.freecadweb.org/wiki/index.php?title=Svg\_Namespace"**

Zaktualizowane szablony Rysunku Technicznego zawierają teraz klucz, który nie może aktywować niestandardowych atrybutów, gdy są używane z FreeCAD wersja 0.20 i poniżej, w wyniku czego edytowalne teksty ostatnich szablonów nie są rozpoznawane i są traktowane jako zwykły tekst.

:   W takich przypadkach "web" musi zostać ręcznie ponownie wstawiony do deklaracji przestrzeni nazw szablonu.

Wygląda na to, że wersja 0.21 i powyżej może obsługiwać oba adresy linków.

## Użycie

### Streszczenie pliku SVG

Szablony środowiska pracy Rysunek Roboczy we FreeCAD to pliki SVG używane do tworzenia ramki rysunków technicznych, natomiast symbole dodają graficzne elementy adnotacji.

Format SVG jest podzbiorem formatu XML. Dlatego plik SVG, jak każdy plik XML, składa się z dwóch części:

* **Nagłówek** zawierający deklarację formatu.
* **Treść** zawierająca informacje o tym, co wyświetlić i gdzie to umieścić.

#### Nagłówek

Nagłówek to tylko jedna linia, która deklaruje, którą wersję języka XML interpreter powinien użyć do obsługi instrukcji w treści.

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

```

#### Treść

Treść pliku SVG rozpoczyna się otwierającym znacznikiem `<svg>`, który zawiera informacje o przestrzeniach nazw, rozmiarze szablonu i jego umiejscowieniu. Kończy się zamykającym znacznikiem `</svg>`. Wszystkie instrukcje dotyczące tworzenia i modyfikowania elementów geometrycznych i tekstowych są umieszczane pomiędzy tymi znacznikami.

```
<svg
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  width="420mm"
  height="297mm"
  viewBox="0 0 420 297">
</svg>

```

Znaczniki mogą zawierać atrybuty kontrolujące elementy pomiędzy parą otwierających i zamykających znaczników:

:   **xmlns=**"<http://www.w3.org/2000/svg>": Zewnętrzny link do przestrzeni nazw XML, aby odwoływać się do standardowych poleceń XML.
:   **version=**"1.1": Używany jest zestaw instrukcji XML w wersji 1.1.
:   **width=**"420mm": Szerokość obszaru rysunku.
:   **height=**"297mm": Wysokość obszaru rysunku.
:   **viewBox=**"0 0 420 297": Pozycja lewego górnego rogu (0;0) i prawego dolnego rogu (420;297) w przestrzeni konstrukcyjnej SVG (w jednostkach SVG).

Kombinacja `width`, `height` i `viewBox` ustala **1 jednostka SVG = 1 mm** dla całego dokumentu, co umożliwia drukowanie w skali, tzn. wszystkie wymiary w jednostkach SVG są interpretowane jako milimetry, a jednostkę miary można teraz pominąć. *(Przykładowe wartości definiują obszar arkusza A3 w orientacji poziomej.)*

### Włącz rozszerzenie przestrzeni nazw FreeCAD

Aby umożliwić [rozszerzenie przestrzeni nazw](#Rozszerzenie_przestrzeni_nazw), deklaracja przestrzeni nazw musi zostać dodana do atrybutów otwierającego znacznika `<svg>`. W rezultacie powstaje podstawowy szablon pliku, pusty arkusz A3 w orientacji poziomej, przygotowany na `freecad:` [atrybuty](#Attributes/pl):

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  xmlns:freecad="http://www.freecad.org/wiki/index.php?title=Svg_Namespace"
  width="420mm"
  height="297mm"
  viewBox="0 0 420 297">
</svg>

```

## Atrybuty

Po włączeniu [rozszerzenia przestrzeni nazw FreeCAD](#Włącz_rozszerzenie_przestrzeni_nazw_FreeCAD), następujące atrybuty `freecad:` mogą teraz być używane w otwierających znacznikach `<text>` w dokumencie SVG:

### freecad:editable

Atrybut freecad:editable jest używany do oznaczania edytowalnych tekstów w plikach SVG. Wartość tego atrybutu można zmienić:

* za pomocą okna dialogowego "Zmień edytowalne pole" w szablonach.
* edytując listę zawartą we właściwości Editable Texts symboli.

Domyślny tekst musi być otoczony znacznikami tspan, w przeciwnym razie wyświetlany tekst w szablonie / symbolu nie będzie zsynchronizowany ze zmodyfikowaną zawartością zmiennej.

Przykład:

```
<text freecad:editable="MyTitleText">
    <tspan>This is a title</tspan>
</text>

```

### freecad:autofill

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Oznacza edytowalny tekst w szablonie, który zostanie automatycznie wypełniony po wstawieniu szablonu. *(Jest to dodawane do istniejącego atrybutu freecad:editable)*.

Przykład:

```
<text freecad:editable="MyTitleText"; freecad:autofill="AutofillElement" >
    <tspan>This is a title</tspan>
</text>

```

Następujące "AutofillElements" są jeszcze zaimplementowane:

1. freecad:autofill="author" wstawia wartość BaseApp/Preferences/Document/prefAuthor.
2. freecad:autofill="date" wstawia wartość currentDateTime().
3. freecad:autofill="organization" wstawia wartość BaseApp/Preferences/Document/prefCompany.
4. freecad:autofill="scale" wstawia właściwość skali strony.
5. freecad:autofill="sheet" wstawia numer strony / liczbę stron.
6. freecad:autofill="title" wstawia wartość właściwości Label bieżącego dokumentu.

### Streszczenie obsługi tekstu

Powyższe przykłady są niekompletne, ponieważ koncentrują się wyłącznie na atrybutach `freecad:`, ale tekst wymaga dodatkowych informacji, aby był wyświetlany w żądanym miejscu, z określonym stylem i opcjonalnie obrotem.

Pomiń atrybuty, aby użyć wartości domyślnych. Poprawia to czytelność i skutkuje krótszym i łatwiejszym do utrzymania plikiem.

Każdy ciąg tekstowy jest osadzony między znacznikami `<text>` i `</text>`. Tekst edytowalny również musi być osadzony między znacznikami `<tspan>` i `</tspan>`, w przeciwnym razie nie będzie edytowalny.

Teksty są domyślnie wstawiane w `0;0`. Wstaw współrzędne punktu kotwiczenia `x` i `y` w tagu `<text>`, aby umieścić tekst w pożądanym miejscu. Pamiętaj, że w pliku SVG kierunek osi y jest zwrócony w dół.

Zaleca się grupowanie tekstów, które mają wspólne właściwości *(tj. umieszczanie tekstu między znacznikami `<g>` i `</g>`)*. W ten sposób wspólne atrybuty można zdefiniować w znaczniku grupy `<g>`, podczas gdy atrybuty indywidualne można zdefiniować w tagu `<text>`. Atrybuty tekstu umieszczone w tagu `<text>` mają pierwszeństwo przed atrybutami grupy.

Przykład:

```
<g id="text-non-editable"
  font-family="osifont"
  font-size="10"
  text-anchor="start">
    <text x="10" y="20">A simple text</text>
    <text x="10" y="40" font-color:"blue">another simple text</text>
</g>

```

W tym przykładzie oba teksty w grupie są wyświetlane przy użyciu czcionki osifont o wysokości 10 mm, a ich punkty kotwiczenia znajdują się przy pierwszym znaku. Pierwszy tekst jest w kolorze czarnym *(kolor domyślny)*, a drugi w kolorze niebieskim.

```
<g id="text-editable"
  style="font-family:osifont; font-size:15; text-anchor:start; fill:blue">
    <text freecad:editable="Text1" x="50" y="40">  <tspan>Editable text in blue</tspan>. </text>
    <text freecad:editable="Text2" x="50" y="60" fill="red" text-anchor="middle">
        <tspan>Centered editable text in red</tspan>
    </text>
    <text freecad:editable="Text3" x="50" y="80" transform="rotate(90,50,80)>
        <tspan>Rotated editable text in blue</tspan>
    </text>
</g>

```

W tym przykładzie wszystkie trzy edytowalne teksty w grupie są wyświetlane przy uzyciu czcionki osifont o wysokości 15 mm w kolorze niebieskim, a ich punkty kotwiczenia znajdują się przy pierwszym znaku. Tekst2 ma kolor odstający, czerwony i jest wyśrodkowany, podczas gdy Tekst3 jest obrócony o 90° zgodnie z ruchem wskazówek zegara, z punktem obrotu pokrywającym się z punktem kotwiczenia.

Przykłady używają dwóch różnych sposobów ustawiania parametrów czcionki: osobnych atrybutów w pierwszym przypadku i połączonych w jednym atrybucie stylu w drugim przypadku.

Zaleca się używanie atrybutu ID w znacznikach grupujących, aby opisać, jakie elementy są grupowane.

Atrybuty transformacji działają dobrze z wszystkimi tekstami, ale edytowalne teksty utracą połączenie z ich znacznikami edycji *(domyślnie niebieskie podkreślenia)*, ponieważ nie będą podążać za ruchem tekstu. Dlatego proste teksty można grupować z geometrią bloku tytułowego i przesuwać jednocześnie, ale edytowalne teksty muszą być pozycjonowane indywidualnie. Obroty z dopasowanym punktem kotwiczenia i środkiem obrotu są bezpieczne do użycia w znacznikach `<text>`, ponieważ tekst i znacznik edycji nie będą się rozdzielać.

### Przykład kodu freecad:editable

#### 1 : Tytuł bez pola textedit

![](/images/Svg_Namespace_01.png)

```
  <g
     id="g3587">
    <text
       sodipodi:linespacing="119.00001%"
       id="text3482"
       y="229.10912"
       x="220.8476"
       style="font-size:1.97555566px;font-style:normal;font-weight:normal;line-height:119.00000572%;letter-spacing:0.01975556px;word-spacing:0.00846667px;writing-mode:lr-tb;fill:#000000;fill-opacity:1;stroke:none;font-family:Sans;-inkscape-font-specification:Sans"
       xml:space="preserve"><tspan
         y="229.10912"
         x="220.8476"
         id="tspan3484"
         sodipodi:role="line">AUTHOR NAME :</tspan></text>

```

#### 2 : Tytuł z polem textedit

![](/images/Svg_Namespace_02.png)

```
  <g
     style="fill:none;stroke:#000000;stroke-width:0.13;stroke-linecap:butt;stroke-linejoin:miter"
     id="g578-7"
     transform="translate(0,4)">
    <text
       xml:space="preserve"
       style="font-size:4px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:sans;-inkscape-font-specification:sans"
       x="220.9935"
       y="228.95425"
       id="text3331"
       sodipodi:linespacing="125%"
       freecad:editable="AuthorName"><tspan
         sodipodi:role="line"
         id="tspan3333"
         x="220.9935"
         y="228.95425">AUTHOR NAME</tspan></text>
    <text
    ...
    ...
    ...
    ... </text>
  
  </g>

```

#### Objaśnienia

```
  <g

```

Początek struktury

```
     style="fill:none;stroke:#000000;stroke-width:0.13;stroke-linecap:butt;stroke-linejoin:miter"
     id="g578-7"
     transform="translate(0,4)">

```

Dane struktury

```
    <text

```

Początek bloku tekstu

```
       xml:space="preserve"
       style="font-size:4px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:sans;-inkscape-font-specification:sans"

```

Wszystkie informacje o tekście, który będzie wyświetlany

```
       x="220.9935"
       y="228.95425"
       id="text3331"
       sodipodi:linespacing="125%"

```

Współrzędne i identyfikator gdzie pojawi się tekst

```
       freecad:editable="AuthorName"><tspan

```

Tutaj **AuthorName** jest zmienną zarządzaną przez **freecad:editable**, zapisującą ciąg znaków do zmiany, który zostanie wyświetlony

```
         sodipodi:role="line"
         id="tspan3333"
         x="220.9935"
         y="228.95425">AUTHOR NAME</tspan></text>

```

Współrzędne i identyfikator tekstu , który jest wyświetlany domyślnie, a **</text>** oznacza koniec tekstu bloku

```
    <text
    ...
    ...
    ...
    ... </text>
  </g>

```

Inne bloki tekstowe i koniec **</g>** struktury grupowania bloków tekstowych

Jest możliwe, że po pracy z plikiem SVG Inkscape'a plik już nie działa, możliwe, że zaginęły informacje.

Następnie sprawdź, czy tekst edycji nie jest zmodyfikowany

Przykład:

* **editable** = "AuthorName"
* zastąpiony przez **freecad:editable** = "AuthorName"

Retrieved from "<http://wiki.freecad.org/index.php?title=Svg_Namespace/pl&oldid=1484548>"
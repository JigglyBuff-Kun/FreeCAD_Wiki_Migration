---
title: Rysunek Techniczny Wstaw widok przekroju
---
|  |
| --- |
| Rysunek Techniczny: Wstaw widok przekroju |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw widok przekroju |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Przekrój złożony](/TechDraw_ComplexSection/pl "TechDraw ComplexSection/pl"), [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") |
|  |

## Opis

Narzędzie **Wstaw widok przekroju** wstawia widok przekroju na podstawie istniejącego widoku części.

![](/images/TechDraw_section_ANSI.png)  
![](/images/TechDraw_section_ISO.png)

Przekrój już umieszczonego widoku, który pokazuje wewnętrzne otwory i zakreskowaną powierzchnię cięcia.  
Górny obraz pokazuje format strzałki ANSI.  
Dolny obraz pokazuje format strzałki ISO.

## Użycie

1. Wybierz widok części w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_SectionView.svg) **Wstaw widok przekroju**.
   * Wybierz z menu opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_SectionView.svg) Wstaw widok przekroju**.
3. Otworzy się panel zadań, który pomoże obliczyć różne właściwości. Rozsądne wartości dla widoku Kierunek są obliczane, ale można je zmienić.

![](/images/TechDraw_Section_Taskview.png)

Widok panelu zadania do definiowania widoku przekroju

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

We właściwościach DANE**Widok podstawowy** możesz zmienić wygląd linii przekroju.

Widok przekroju, formalnie obiekt `TechDraw::DrawViewSection`, wywodzi się z [Widoku części](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl"), formalnie obiektu `TechDraw::DrawViewPart` i dziedziczy wszystkie jego właściwości. Ma również następujące dodatkowe właściwości:

### Dane

Wygląd

* DANE**Rozciągnięcie linii przekroju** (`FloatConstraint`): Dostosowuje długość linii przekroju. `1.0` to normalna długość, `1.1` to 10% dłuższa linia, `0.9` to 10% krótsza linia. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Operacja cięcia

* DANE**Połącz przed przecięciem** (`Bool`): Łączenie kształtów źródłowych przed wykonaniem cięcia przekroju.
* DANE**Przytnij po przecięciu** (`Bool`): Dodatkowo przycina wynikowy kształt po wycięciu przekroju w celu usunięcia niechcianych fragmentów. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* DANE**Użyj poprzedniego cięcia** (`Bool`) Użyj kształtu z widoku podstawowego zamiast oryginalnego obiektu. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Format powierzchni cięcia

* DANE**Widok powierzchni cięcia** (`Enumeration`): Wygląd powierzchni cięcia. Opcje:
  + `Ukryj`: Ukrywa powierzchnię cięcia, wyświetlany jest tylko kontur.
  + `Kolor`: Koloruje powierzchnię cięcia przy użyciu ustawienia **Kolor powierzchni cięcia** w [ustawieniach](/TechDraw_Preferences/pl "TechDraw Preferences/pl").
  + `SvgHatch`: Wycina przekrój za pomocą [kreskowania](/TechDraw_Hatch/pl "TechDraw Hatch/pl").
  + `PatHatch`: Kreskowanie przekroju przy użyciu [kreskowanie geometryczne](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl").
  + `PatHatch`: Kreskuje wyciętą sekcję za pomocą [kreskowania geometrycznego](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl").
* DANE**Plik wzoru kreskowania** (`File`): Pełna ścieżka do pliku wzoru kreskowania SVG.
* DANE**Plik kreskowania geometrycznego** (`File`): Pełna ścieżka do pliku wzoru PAT.
* DANE**Dołączony plik Svg** (`FileIncluded`): Pełna ścieżka do dołączonego pliku wzorca kreskowania SVG.
* DANE**Dołączony plik Pat** (`FileIncluded`): Pełna ścieżka do dołączonego pliku wzoru PAT.
* DANE**Nazwa wzoru kreskowania geometrycznego** (`String`): Nazwa używanego wzorca PAT.
* DANE**Skala kreskowania** (`Float`): Dostosowanie rozmiaru wzorca kreskowania.
* DANE**Obrót kreskowania** (`Float`): Obrót wzoru kreskowania w stopniach w kierunku przeciwnym do ruchu wskazówek zegara. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* DANE (Hidden)**Odsunięcie kreskowania** (`Vector`): Odsunięcie wzoru kreskowania. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Przekrój

* DANE**Symbol Przekroju** (`String`): Identyfikator dla tego przekroju.
* DANE**Widok Bazowy View** (`Link`): Widok, na którym opiera się przekrój.
* DANE**Normalna przekroju** (`Vector`): Wektor opisujący kierunek normalny do płaszczyzny cięcia.
* DANE**Punkt odniesienia przekroju** (`Vector`): Wektor opisujący punkt na płaszczyźnie przecięcia. Zazwyczaj jest to środek ciężkości oryginalnej części.
* DANE**Kierunek przekroju** (`Enumeration`): Kierunek w widoku podstawowym dla tego przekroju. Opcje: `Wyrównaj`, `Z prawej`, `Z lewej`, `Z góry` lub `Z dołu`.

### Widok

Płaszczyzna cięcia

* WIDOK**Kolor płaszczyzny przekroju** (`Color`): Stały kolor podświetlenia powierzchni. Używany, jeśli DANE**Wyświetl płaszczyznę przekroju** jest ustawione na `Kolor`.
* WIDOK (Hidden)**Wyświetl płaszczyznę przekroju** (`Bool`): Pokaż / ukryj powierzchnię cięcia.

Kreskowanie powierzchni

* WIDOK**Kolor kreskowania geometrycznego** (`Color`): Kolor wzoru kreskowania geometrycznego.
* WIDOK**Kolor kreskowania** (`Color`): Kolor wzoru kreskowania Svg.
* WIDOK (Hidden)**Kreskowanie powierzchni przekroju** (`Bool`): Kreskowanie powierzchni cięcia.
* WIDOK**Waga kreskowania** (`Float`): Waga linii geometrycznego wzoru kreskowania.

## Uwagi

* **Format linii przekroju**: obsługiwane są dwa formaty linii przekroju (jak pokazano powyżej) i kontrolowane przez ustawienie preferencji "Standard linii przekroju" na karcie Adnotacja. Opcja `ANSI` używa "ciągnących strzałek" *(znanych jako "tradycyjny format" w niektórych obszarach)*, a opcja `ISO` używa "pchających strzałek" *(znanych również jako "format strzałki odniesienia")*.
* "Połącz przed wycięciem": operacja przekroju czasami nie wycina kształtów źródłowych. Jeśli parametr "Połącz przed wycięciem" ma wartość true, kształty źródłowe są łączone w jeden kształt przed próbą wykonania operacji przekroju. Jeśli wystąpią problemy z operacją przekroju, należy spróbować zmienić tę wartość.
* **Przytnij po wycięciu**: operacja przekroju czasami pozostawia część kształtu źródłowego. Jeśli parametr *Przytnij po cięciu* ma wartość true, na wyniku pierwszego cięcia wykonywana jest dodatkowa operacja cięcia, która powinna usunąć wszelkie niechciane elementy.
* **Wyświetlanie powierzchni cięcia**: powierzchnia cięcia może być ukryta, pomalowana na jednolity kolor, zakreskowana przy użyciu wzoru Svg *(domyślnie)* lub zakreskowana przy użyciu wzoru PAT. Zobacz temat [kreskowanie](/TechDraw_Hatching/pl "TechDraw Hatching/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Wstaw widok przekroju może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
page = doc.Page

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = box
view.Direction = (0, 0, 1)

section = doc.addObject("TechDraw::DrawViewSection", "Section")
page.addView(section)
section.Source = box
section.BaseView = view
section.Direction = (0, 1, 0)
section.SectionNormal = (-1, 0, 0)

doc.recompute()

```

## Przykłady

Więcej informacji na temat widoków przekrojów i niektórych przypadków użycia można znaleźć na stronie [Przykłady przekrojów](/TechDraw_Section_Examples/pl "TechDraw Section Examples/pl").

![](/images/TechDraw_ExampleSection-10.png)
![](/images/TechDraw_ExampleSection-13.png)
![](/images/TechDraw_ExampleSection-15.png)
![](/images/TechDraw_ExampleSection-17.png)
![](/images/TechDraw_ExampleSection-34.png)
![](/images/TechDraw_ExampleSection-35.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SectionView/pl&oldid=1490993>"
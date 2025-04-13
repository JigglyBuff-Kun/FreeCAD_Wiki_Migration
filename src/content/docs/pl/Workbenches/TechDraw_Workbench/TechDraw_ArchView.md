---
title: Rysunek Techniczny Wstaw obiekt środowiska Architektura
---
|  |
| --- |
| Rysunek Techniczny: Wstaw obiekt środowiska Architektura |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw obiekt środowiska BIM |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") |
|  |

## Opis

Narzędzie **Wstaw obiekt środowiska Architektura** wstawia widok ![](/images/Arch_SectionPlane.svg) [przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") na stronie [Rysunku Technicznego](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl").

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") również może wstawić widok obiektu środowiska Architektura.

![](/images/TechDraw_Arch_example.jpg)

## Użycie

1. Wybierz płaszczyznę przekroju architektonicznego w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie dodaj żądaną stronę do zaznaczenia, wybierając ją w [Widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Wybierz opcję **Rysunek Techniczny → Widoki z innych środowisk roboczych → ![](/images/TechDraw_ArchView.svg) Wstaw obiekt środowiska pracy BIM** z menu.
4. Jeśli w dokumencie znajduje się wiele stron rysunku i żadna strona nie jest wyświetlana w [obszarze widoku głównego](/Main_view_area/pl "Main view area/pl"), a strona nie została jeszcze wybrana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.

## Opcje

* Widok Architektoniczny jest renderowany przez środowisko pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl").
* [Wymiary](/Draft_Snap_Dimensions/pl "Draft Snap Dimensions/pl"), [teksty](/Draft_Text/pl "Draft Text/pl") i każdy inny obiekt 2D *(szkic lub rysunek)* uwzględniany przez płaszczyznę przekroju jest renderowany "tak jak jest" *(bez przecięć lub ukrytych linii)* na wierzchu geometrii bryłowej.
* Objętość [kubatury](/Arch_Space/pl "Arch Space/pl") nie jest renderowana, renderowana jest tylko etykieta.
* Linie przecięcia, linie rzutowane *(jeśli właściwość Pokaż ukryte jest ustawiona na `Prawda`)* i linie 2D powyżej mogą być renderowane z różnymi szerokościami linii. Można to skonfigurować w preferencjach środowiska Architektura.
* Widok Architektoniczny posiada dwa tryby renderowania:
  + Szkielet, który wykorzystuje algorytmy OpenCasCade środowiska [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), jest szybki i generuje tylko linie *(bez możliwości wypełniania ścian)*.
  + Bryła, który jest oparty na algorytmie [Paintera](https://en.wikipedia.org/wiki/Painter%27s_algorithm) i jest w stanie renderować ściany wypełnione kolorem kształtu. Jest jednak znacznie wolniejszy i może zawieść w wielu sytuacjach.

:   Poniższy obraz ilustruje różnicę między tymi dwoma trybami renderowania:

:   ![](/images/TechDraw_Arch_rendering.jpg)

* Renderowana jest tylko linia bazowa [Rury](/Arch_Pipe/pl "Arch Pipe/pl"), a nie cała objętość rury:

:   ![](/images/TechDraw_Arch_piping.jpg)

## Uwagi

Widok architektoniczny jest renderowany w środowisku [BIM](/BIM_Workbench/pl "BIM Workbench/pl"), dlatego środowisko Rysunek Techniczny ma ograniczoną kontrolę nad jego wyglądem. Może być konieczne wprowadzenie zmian w środowisku pierwotnym, aby uzyskać pożądaną reprezentację.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt środowiska Architektura, formalnie obiekt `TechDraw::DrawViewArch` ma [właściwości](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl") wspólne dla wszystkich typów Widoków. Ma też następujące dodatkowe właściwości:

### Dane

Widok Architektury

* DANE**źródło** (`Link`): Obiekt płaszczyzny przekroju do wyświetlenia.
* DANE**Wszystko włączone** (`Bool`): Czy ukryte obiekty muszą być wyświetlane, czy nie. Jeśli parametr ma wartość `false`, renderowane są tylko obiekty widoczne w widoku 3D.
* DANE**Tryb renderowania** (`Enumeration`): Tryb renderowania do użycia, `Solid` lub `Wireframe`.
* DANE**Wypełnij przestrzenie** (`Bool`): Jeśli parametr ma wartość `PRAWDA`, Arch Spaces są wyświetlane jako kolorowy obszar.
* DANE**Pokaż ukryte** (`Bool`): Czy ukryta geometria (część geometrii, która leży za płaszczyzną przekroju) jest pokazywana, czy nie. Będzie ona renderowana linią przerywaną, którą można skonfigurować w preferencjach środowiska Architektura.
* DANE**Pokaż wypełnienie** (`Bool`): Czy wycięte obszary muszą być wypełnione szarym kolorem, czy nie.
* DANE**Szerokość linii** (`Float`): Szerokość głównych linii. Współczynniki szerokości linii cięcia i linii rzutowanych/2D można skonfigurować w preferencjach Arch.
* DANE**Rozmiar czcionki** (`Float`): Rozmiar wszystkich tekstów wyświetlanych w tym widoku.
* DANE**Szerokość linii cięcia** (`Float`): Szerokość linii cięcia w tym widoku.
* DANE**Dołącz do Arch** (`Bool`): Jeśli parametr ma wartość `PRAWDA`, ściany i struktury zostaną połączone materiałem.
* DANE**Odstęp wierszy** (`Float`): Odstęp między wierszami do użycia dla tekstów wielowierszowych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Widok rysunku

* DANE (Hidden)**Symbol** (`String`): Kod SVG definiujący ten symbol.
* DANE**Editable Texts** (`StringList`): Wartości podstawienia dla edytowalnych ciągów w tym symbolu.
* DANE**Owner** (`Link`): Cecha, do której ten symbol jest dołączony. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw obiekt środowiska Architektura** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewArch','TestArch')
dv.Source = mySectionPlane
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ArchView/pl&oldid=1490982>"
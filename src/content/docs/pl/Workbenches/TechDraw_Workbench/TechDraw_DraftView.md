---
title: Rysunek Techniczny Wstaw obiekt środowiska Rysunek Roboczy
---
|  |
| --- |
| Rysunek Techniczny: Wstaw obiekt środowiska Rysunek Roboczy |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw obiekt środowiska Rysunek Roboczy |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl") |
|  |

## Opis

Narzędzie **Wstaw obiekt środowiska Rysunek Roboczy** wstawia widok wybranego obiektu opartego na obiekcie [Część](/Part_Workbench/pl "Part Workbench/pl") lub grupy do strony rysunku. W przeciwieństwie do standardowego ![](/images/TechDraw_View.svg) [widoku](/TechDraw_View/pl "TechDraw View/pl"), widoki utworzone za pomocą tego narzędzia są obsługiwane przez środowisko ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i specjalnie zaprojektowane do wyświetlania obiektów 2D. Zobacz [uwagi](#Uwagi).

![](/images/TechDraw_DraftView_example.png)

Elementy szkicu, takie jak okręgi i szyki, importowane do strony Rysunku Technicznego.

## Użycie

1. Opcjonalnie obróć [widok 3D](/3D_view/pl "3D view/pl"). Kierunek ujęcia widoku w oknie [widoku 3D](/3D_view/pl "3D view/pl") określa początkową wartość właściwości widoku DANE**Kierunek**.
2. Wybierz jeden lub więcej obiektów w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub [widoku drzewa](/Tree_view/pl "Tree view/pl"). Dla każdego obiektu zostanie utworzony osobny widok.
3. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie dodaj żądaną stronę do zaznaczenia, wybierając ją w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
4. Istnieje kilka sposobów wywołania narzędzia:
5. Naciśnij przycisk ![](/images/TechDraw_DraftView.svg) **Wstaw obiekt środowiska Rysunek Roboczy**.
   * Wybierz opcję z menu **Rysunek Techniczny → Widoki → ![](/images/TechDraw_DraftView.svg) Wstaw obiekt środowiska Rysunek Roboczy**.
6. Jeśli w dokumencie znajduje się wiele stron rysunku, a strona nie została jeszcze wybrana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.

## Opcje

* Utworzenie warstwy DraftView będzie rekurencyjnie obsługiwać wszystkie obiekty znajdujące się w tej warstwie. Widok jest aktualizowany automatycznie po zmianie zawartości warstwy
* Nie ma usuwania ukrytych linii. Każda ściana znaleziona w obsługiwanym obiekcie *(obiektach)* zostanie po prostu rzutowana wzdłuż wektora kierunku, nie są podejmowane żadne konkretne działania, gdy ściany nakładają się na siebie.
* Widok szkicu obsługuje również wszystkie obiekty szkicu, które nie są oparte na częściach, takie jak wymiary i teksty.
* Kolor, szerokość linii i wzór linii można określić we właściwościach. Wzory linii można precyzyjnie dostosować, bezpośrednio podając wartość [stroke-dasharray](https://www.w3.org/TR/SVG/painting.html#StrokeProperties), np. 3,5
* Rzutowane ściany są wypełniane kolorem ściany.

## Uwagi

Widok Rysunku Roboczego jest renderowany w środowisku [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), dlatego środowisko Rysunek Techniczny ma ograniczoną kontrolę nad jego wyglądem. Konieczne może być wprowadzenie zmian w środowisku pierwotnym, aby uzyskać pożądaną reprezentację.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt środowiska Rysunek Roboczy, formalnie obiekt `TechDraw::DrawViewDraft` ma [właściwości](/TechDraw_View/pl#Właściwości "TechDraw View/pl") wspólne dla wszystkich typów Widoków. Ma też następujące dodatkowe właściwości:

### Dane

Widok Rysunek Roboczy

* DANE**Źródło** (`Link`): Obiekt Draft do wyświetlenia.
* DANE**Szerokość linii** (`Float`): Szerokość linii, niezależnie od skali.
* DANE**Rozmiar czcionki** (`Float`): Rozmiar wszystkich tekstów pojawiających się w tym widoku *(tekstów i wymiarów)*.
* DANE**Kierunek**  (`Vector`): Kierunek rzutowania do użycia.
* DANE**Kolor** (`Color`): Kolor linii.
* DANE**Styl linii** (`String`): Styl linii używany dla tego widoku. Może to być `Solid`, `Kreskowana`, `Kreska kropka`, `Kropkowana` lub wzór linii SVG, taki jak `0.20,0.20`.
* DANE**Odstęp wierszy** (`Float`): Odstęp między wierszami tekstu do użycia dla tekstów wielowierszowych.
* DANE**Nadpisz styl** (`Bool`): Jeśli parametr przyjmuje wartość `PRAWDA`, kolor linii, szerokość i styl tego widoku będą zastępować kolory, szerokość i styl renderowanego obiektu.

Widok rysunku

* DANE (Hidden)**Symbol** (`String`): Kod SVG definiujący ten symbol.
* DANE**Editable Texts** (`StringList`): Wartości podstawienia dla edytowalnych ciągów w tym symbolu.
* DANE**Owner** (`Link`): Cecha, do której ten symbol jest dołączony. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw obiekt środowiska Rysunek Roboczy** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewDraft','TestDraft')
dv.Source = myDraftbject
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DraftView/pl&oldid=1490488>"
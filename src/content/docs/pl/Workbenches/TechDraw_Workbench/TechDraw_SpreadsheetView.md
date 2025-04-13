---
title: Rysunek Techniczny Wstaw widok Arkusza kalkulacyjnego
---
|  |
| --- |
| TechDraw SpreadsheetView |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw widok Arkusza kalkulacyjnego |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), [Arkusz kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Wstaw widok Arkusza kalkulacyjnego** pozwala na umieszczenie widoku wybranego [arkusza kalkulacyjnego](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl") na [stronie](/TechDraw_Workbench/pl "TechDraw Workbench/pl") rysunku.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") również może utworzyć widok Arkusza kalkulacyjnego .

![](/images/TechDraw_Spreadsheetview.png)

Element arkusza kalkulacyjnego wstawiony do strony Rysunku Technicznego

## Użycie

1. Wybierz arkusz w [Widoku drzewa](/Tree_view "Tree view").
2. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie dodaj żądaną stronę do zaznaczenia, wybierając ją w oknie [Widok drzewa](/Tree_view "Tree view").
3. Wybierz opcję **Rysunek Techniczny → Widoki z innych środowisk roboczych → ![](/images/TechDraw_SpreadsheetView.svg) Wstaw widok Arkusza kalkulacyjnego** z menu.
4. Jeśli w dokumencie znajduje się wiele stron rysunku i jeśli nie ma strony wyświetlonej w [obszarze widoku głównego](/Main_view_area/pl "Main view area/pl"), a strona nie została jeszcze wybrana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
5. Wstawiony zostanie widok Arkusza kalkulacyjnego.
6. Dostosuj zakres komórek widoku, zmieniając jego właściwości DANE**Komórka początkowa** i DANE**Komórka końcowa**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Widok Arkusza kalkulacyjnego, formalnie obiekt `TechDraw::DrawViewSpreadsheet` ma [właściwości](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl") wspólne dla wszystkich typów Widoków. Ma też następujące dodatkowe właściwości:

### Dane

Widok rysunku

* DANE (Hidden)**Symbol** (`String`): Kod SVG definiujący ten symbol.
* DANE**Editable Texts** (`StringList`): Wartości podstawienia dla edytowalnych ciągów w tym symbolu.
* DANE**Owner** (`Link`): Cecha, do której ten symbol jest dołączony. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Arkusz kalkulacyjny

* DANE**Żródło** (`Link`): Arkusz kalkulacyjny, który ma zostać dodany do strony.
* DANE**Komórka początkowa** (`String`): Lewa górna komórka zakresu komórek, który ma zostać uwzględniony w tym widoku.
* DANE**Komórka końcowa** (`String`): Prawa dolna komórka zakresu komórek, który ma być uwzględniony w tym widoku.
* DANE**Czcionka** (`Font`): Nazwa czcionki używanej dla tekstów.
* DANE**Kolor tekstu** (`Color`): Kolor tekstów i linii, które nie mają określonego koloru w arkuszu kalkulacyjnym.
* DANE**Rozmiar tekstu** (`Float`): Rozmiar czcionki tekstu.
* DANE**Szerokość linii** (`Float`): Szerokość obramowania komórki.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SpreadsheetView/pl&oldid=1490718>"
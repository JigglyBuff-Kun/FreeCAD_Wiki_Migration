---
title: Rysunek Techniczny Wstaw symbol SVG
---
|  |
| --- |
| Rysunek Techniczny: Wstaw symbol SVG |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw symbol SVG |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Szablony](/TechDraw_Templates/pl "TechDraw Templates/pl"), [SVG](/Draft_SVG/pl "Draft SVG/pl") |
|  |

## Opis

Narzędzie **Wstaw symbol SVG** wstawia obiekt Symbol. Jest to okrojony widok, który zawiera tylko jeden plik [SVG](/SVG/pl "SVG/pl") zgodnie ze specyfikacją svg-tiny (zobacz [Rysunek Techniczny: Szablony](/TechDraw_Templates/pl#Uwagi "TechDraw Templates/pl")).

Symbol może być czymkolwiek, co pomaga opisać rysunek i nie musi być dalej modyfikowane, ale może zawierać [edytowalny tekst](/Svg_Namespace/pl#freecad:editable "Svg Namespace/pl").

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") również może utworzyć Symbol.

![](/images/TechDraw_SymbolSVG_sample.png)

Róża wiatrów dodana do strony rysunku; ten symbol jest dostępny po zainstalowaniu dodatku "symbols\_library" za pomocą [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

## Użycie

1. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie aktywuj żądaną stronę, wybierając ją w [Widoku drzewa](/Tree_view "Tree view").
2. Wybierz opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_Symbol.svg) Wstaw symbol SVG** z menu.
3. Jeśli w dokumencie znajduje się wiele stron rysunków, a strona nie została jeszcze aktywowana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
4. Zostanie otwarta przeglądarka plików.
5. Wybierz plik SVG.
6. Symbol zostanie wstawiony.
7. Opcjonalnie można zmienić jego właściwość DANE**Skala**, aby dostosować jego rozmiar.

## Uwagi

* DANE**Typ Skali** dla symboli jest zawsze ustawione na *Użytkownika* podczas tworzenia. Jest to wygodne, ponieważ symbole są prawie zawsze skalowane inaczej niż pozostałe obiekty na stronie.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Symbol, formalnie obiekt `TechDraw::DrawViewSymbol` ma [właściwości](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl") wspólne dla wszystkich typów Widoków. Ma też następujące dodatkowe właściwości:

### Dane

Widok rysunku

* DANE (Hidden)**Symbol** (`String`): Kod SVG definiujący ten symbol.
* DANE**Editable Texts** (`StringList`): Wartości podstawienia dla edytowalnych ciągów w tym symbolu.
* DANE**Owner** (`Link`): Cecha, do której ten symbol jest dołączony. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw symbol SVG** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
sym = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewSymbol','TestSymbol')
rc = page.addView(anno)
f = open(unicode(symbolFileSpec,'utf-8'),'r')
svg = f.read()
f.close()
sym.Symbol = svg
rc = page.addView(sym)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Symbol/pl&oldid=1490985>"
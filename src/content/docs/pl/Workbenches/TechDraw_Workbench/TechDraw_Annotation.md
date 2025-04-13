---
title: Rysunek Techniczny Wstaw adnotację
---
|  |
| --- |
| Rysunek Techniczny: Wstaw adnotację |
| Lokalizacja w menu |
| Rysunek Techniczny → Adnotacje → Wstaw adnotację |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw adnotacje w postaci tekstu sformatowanego](/TechDraw_RichTextAnnotation/pl "TechDraw RichTextAnnotation/pl") |
|  |

## Opis

Narzędzie *Wstaw adnotację* dodaje blok tekstu do strony rysunku.

![](/images/AnnotationSample.png)

Adnotacja na stronie rysunku.

## Użycie

1. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie aktywuj wymaganą stronę, wybierając ją w [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
3. Naciśnij przycisk ![](/images/TechDraw_Annotation.svg) **Wstaw adnotację**.
   * Wybierz opcję z menu **Rysunek Techniczny → Adnotacje → ![](/images/TechDraw_Annotation.svg) Wstaw adnotację**.
4. Jeśli w dokumencie znajduje się wiele stron rysunku, a strona nie została jeszcze aktywowana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
5. Na stronie pojawi się blok tekstowy zawierający *Tekst domyślny*.
6. Użyj [Edytora właściwości](/Property_editor/pl "Property editor/pl"), aby zmienić jego wygląd.
7. Opcjonalnie przeciągnij adnotację w inne miejsce.

![](/images/UpdateAnnotation.png)

Modyfikowanie adnotacji za pomocą edytora właściwości.

## Uwagi

Niektóre znaki zakłócają wewnętrzną reprezentację tekstu adnotacji. W szczególności są to symbole cudzysłowu `"`, mniejszy niż `<` i większy niż `>`; muszą one zostać zastąpione tagami HTML, odpowiednio `&quot;`, `&lt;` i `&gt;`. Aby uzyskać szczegółowe informacje, zobacz informacje o [Kodowaniu znaków w HTML](https://en.wikipedia.org/wiki/Character_encodings_in_HTML#HTML_character_references).

## Właściwości

Adnotacja dziedziczy wszystkie odpowiednie podstawowe właściwości widoku z wyjątkiem DANE**Skali**. Zamiast tego należy użyć właściwości DANE**RozmiarTekstu**.

* DANE**Tekst**: Tekst do wyświetlenia.
* DANE**Czcionka**: Nazwa czcionki do użycia. Adnotacja użyje najlepszego dopasowania zainstalowanych czcionek.
* DANE**KolotTekstu**: Kolor tekstu.
* DANE**RozmiarTekstu**: Rozmiar tekstu w mm.
* DANE**MaxSzerokość**: Maksymalna szerokość bloku adnotacji. -1 oznacza brak maksymalnej szerokości.
* DANE**OdstępWierszów**: Regulacja odstępu między wierszami (%).
* DANE**StylTekstu**: "Normalny", "Pogrubiony", "Kursywa", "Kursywa-Pogrubiony".

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie ```Wstaw adnotację``` może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
anno = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewAnnotation','TestAnno')
anno.Text = ['Different Text']
anno.TextStyle = 'Bold'
rc = page.addView(anno)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Annotation/pl&oldid=1486440>"
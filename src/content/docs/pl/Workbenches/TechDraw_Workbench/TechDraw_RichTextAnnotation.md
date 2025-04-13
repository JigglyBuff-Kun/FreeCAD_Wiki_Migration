---
title: Rysunek Techniczny Wstaw adnotację w postaci tekstu sformatowanego
---
|  |
| --- |
| Rysunek Techniczny: Wstaw adnotację w postaci tekstu sformatowanego |
| Lokalizacja w menu |
| Rysunek Techniczny → Adnotacja → Wstaw adnotację w postaci tekstu sformatowanego |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw adnotację](/TechDraw_Annotation/pl "TechDraw Annotation/pl") |
|  |

## Opis

Narzędzie **Wstaw adnotację w postaci tekstu sformatowanego** dodaje sformatowany blok adnotacji do [linii odniesienia](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl") lub widoku.

![](/images/TechDraw_RichTextBlock_sample.png)

Samodzielna adnotacja w postaci tekstu sformatowanego.

## Użycie

1. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie aktywuj żądaną stronę, wybierając ją w [Widoku drzewa](/Tree_view "Tree view").
2. Aby dołączyć adnotację RichTextAnnotation do [Linii wiodącej](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl"), wybierz linię w [Widoku drzewa](/Tree_view "Tree view") lub na stronie.
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_RichTextAnnotation.svg) **Wstaw adnotację w postaci tekstu sformatowanego**.
   * Wybierz opcję **Rysunek Techniczny → Adnotacje → ![](/images/TechDraw_RichTextAnnotation.svg) Wstaw adnotację w postaci tekstu sformatowanego** z menu.
4. Jeśli w dokumencie znajduje się wiele stron rysunkowych, a strona nie została jeszcze aktywowana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
5. Otworzy się panel zadań.
6. Panel zadań umożliwia szybkie wprowadzanie tekstu.
7. Przycisk Uruchom edytor tekstu sformatowanego otwiera w pełni funkcjonalny edytor:
8. Po zakończeniu naciśnij przycisk ![](/images/Document-save.svg), aby zapisać zmiany i zamknąć edytor.
9. Naciśnij przycisk OK, aby zamknąć panel zadań.

## Uwagi

* Możesz edytować *Adnotację w postaci tekstu sformatowanego* klikając na niej dwukrotnie na stronie.

## Właściwości

* DANE**X,Y**: Położenie bloku. Względem końca linii, jeśli jest dołączony do [linii odniesienia](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl"), w przeciwnym razie jest to pozycja na stronie.
* DANE**WyświetlRamkę**: Rysuje kontur wokół bloku.
* DANE**MaxSzerokość**: Ogranicza poziomy rozmiar bloku. Wartość -1 oznacza nieograniczoną szerokość.
* DANE**AnnoText**: Tekst HTML bloku.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw adnotację w postaci tekstu sformatowanego** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl").

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
blockObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawRichAnno','DrawRichAnno')
FreeCAD.activeDocument().myPage.addView(blockObj)
blockObj.X = 5
blockObj.Y = 5
blockObj.AnnoText = myHTMLText

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_RichTextAnnotation/pl&oldid=1486358>"
---
title: Rysunek Techniczny Wstaw obraz bitmapy
---
|  |
| --- |
| Rysunek Techniczny: Wstaw obraz bitmapy |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw obraz bitmapy |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw symbol SVG](/TechDraw_Symbol/pl "TechDraw Symbol/pl") |
|  |

## Opis

Narzędzie **Wstaw obraz bitmapy** wstawia z pliku do strony widok obrazu [bitmapy](/Bitmap/pl "Bitmap/pl") *(PNG, TIFF, JPEG itp.)*.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") również może wstawić obraz bitmapy.

![](/images/TechDraw_Image_example.png)

Obraz wstawiony do strony rysunku.

## Użycie

1. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie aktywuj żądaną stronę, wybierając ją w [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Wybierz opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_Image.svg) Wstaw obraz bitmapy** z menu.
3. Jeśli w dokumencie znajduje się wiele stron rysunku, a strona nie została jeszcze aktywowana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
4. Zostanie otwarta przeglądarka plików.
5. Wybierz plik obrazu.
6. Widok obrazu zostanie wstawiony.
7. Opcjonalnie można zmienić jego właściwość DANE**Skala**, aby dostosować jego rozmiar.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Widok obrazu, formalnie obiekt `TechDraw::DrawViewImage` ma [właściwości](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl") wspólne dla wszystkich typów Widoków. Ma też następujące dodatkowe właściwości:

### Dane

Obraz

* DANE**Plik obrazu** (`File`): Plik zawierający tę bitmapę.
* DANE**Obraz dołączony** (`FileIncluded`): Wbudowany plik graficzny. Tylko do użytku systemowego.
* DANE**Szerokość** (`Float`): Szerokość wykadrowanego obrazu w mm. Używane tylko wtedy, gdy WIDOK**Przytnij** ma wartość `PRAWDA`.
* DANE**Wysokość** (`Float`): Wysokość wykadrowanego obrazu w mm. Analogicznie.

### Widok

Obraz

* WIDOK**Przytnmij** (`Bool`): Przycina obraz do parametrów DANE**Szerokość** x DANE**Wysokość**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Obraz może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
dvi = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewImage','TestImage')
rc = page.addView(dvi)
dvi.ImageFile = "pathToMy/imageFile.png"
dvi.Height = 200
dvi.Width  = 200

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Image/pl&oldid=1490987>"
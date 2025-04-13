---
title: Rysunek Techniczny Kreskowanie powierzchni
---
|  |
| --- |
| Rysunek Techniczny: Kreskowanie powierzchni za pomocą pliku obrazu |
| Lokalizacja w menu |
| Rysunek Techniczny → Kreskowanie → Kreskowanie na powierzchni za pomocą pliku obrazu |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zastosuj na powierzchni kreskowanie geometryczne](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl"), [Kreskowanie](/TechDraw_Hatching/pl "TechDraw Hatching/pl") |
|  |

## Opis

Narzędzie **Kreskowanie powierzchni za pomocą pliku obrazu** środowiska Rysunek Techniczny wypełnia zamknięty obszar w widoku wzorcem kreskowania, którym mogą być pliki [SVG](/SVG/pl "SVG/pl") lub [bitmap](/Bitmap/pl "Bitmap/pl") *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*.
W odróżnieniu od tego, narzędzie ![](/images/TechDraw_GeometricHatch.svg) [kreskowanie geometryczne](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl") wykorzystuje konkretny plik wzoru PAT, szczegółowe informacje znajdują się na stronie [kreskowanie](/TechDraw_Hatching/pl "TechDraw Hatching/pl").

![](/images/TechDraw_Hatch_example.png)

SVG hatch pattern on a face

## Użycie

1. Wybierz zamknięty obszar w widoku.
2. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_Hatch.svg) **Kreskowanie powierzchni za pomocą pliku obrazu**.
   * Wybierz opcję **Rysunek Techniczny → Kreskowanie → ![](/images/TechDraw_Hatch.svg) Kreskowanie powierzchni za pomocą pliku obrazu** z menu.
3. Otworzy się panel zadań **Zastosuj kreskowanie na powierzchni**.
4. Opcjonalnie zmień **Plik z wzorem**.
5. Opcjonalnie zmień wartości w polach **Skala wzoru** i **Kolor linii**. Ustawienia te są ignorowane dla wzorów bitmapowych.
6. Naciśnij przycisk OK.

## Uwagi

* Dla wypełnienia jednolitym kolorem jako **plik wzorca** wybierz solid.svg.
* Obiekty kreskowania są podatne na problemy z *[nazewnictwem topologicznym](/Topological_naming_problem/pl "Topological naming problem/pl")*. Aby uzyskać więcej informacji, zobacz informacje w narzędziu [Rysunek techniczny: Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"). Zaleca się, aby kreskowanie było jednym z ostatnich kroków w procesie rysowania.
* Przykładowe wzory [SVG](/SVG/pl "SVG/pl") są dostępne lokalnie w:

:   ```
    $INSTALL_DIR/data/Mod/TechDraw/Patterns

    ```

" Gdzie `$INSTALL_DIR` to katalog, w którym zainstalowano FreeCAD, na przykład:

:   ```
    /usr/share/freecad/data/Mod/TechDraw/Patterns

    ```
:   Są one również dostępne na [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns).

## Właściwości

* DANE**Źródło**: Widok i ściana, aby otrzymać wzór kreskowania.
* DANE**Wzór kreskowania**: Pełna ścieżka i nazwa pliku wzorca SVG.
* WIDOK**Kolor kreskowania**: Wzór kreskowania zostanie wyświetlony w tym kolorze.
* WIDOK**Skala kreskowania**: Modyfikator rozmiaru wzoru kreskowania.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kreskowanie powierzchni za pomocą pliku obrazu** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawHatch", "Hatch")
hatch.Source = (view1, ["Face0"])
hatch.HatchPattern = hatchFileSpec
page.addView(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatch/pl&oldid=1486384>"
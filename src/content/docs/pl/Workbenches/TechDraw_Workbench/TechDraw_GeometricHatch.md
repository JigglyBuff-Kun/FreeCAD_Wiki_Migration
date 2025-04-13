---
title: Rysunek Techniczny Kreskowanie geometryczne
---
|  |
| --- |
| Rysunek Techniczny: Zastosuj na powierzchni kreskowanie geometryczne |
| Lokalizacja w menu |
| Rysunek Techniczny → Kreskowanie → Zastosuj na powierzchni kreskowanie geometryczne |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Kreskowanie powierzchni](/TechDraw_Hatch/pl "TechDraw Hatch/pl"), [Kreskowanie](/TechDraw_Hatching/pl "TechDraw Hatching/pl") |
|  |

## Opis

Narzędzie **TechDraw GeometricHatch** wypełnia zamknięty obszar w widoku wzorem opartym na specyfikacji kreskowania AutoDesk PAT. Alternatywnie można użyć ![](/images/TechDraw_Hatch.svg) [Kreskowanie powierzchni za pomocą pliku obrazu](/TechDraw_Hatch/pl "TechDraw Hatch/pl") wykorzystuje wzory kreskowania oparte na SVG. Aby uzyskać szczegółowe informacje, zobacz stronę [Kreskowanie](/TechDraw_Hatching/pl "TechDraw Hatching/pl").

![](/images/TechDraw_GeomHatch_example.png)

Geometryczny wzór kreskowania na powierzchni ściany.

## Użycie

1. Wybierz zamknięty obszar w widoku.
2. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_GeometricHatch.svg) **Zastosuj na powierzchni kreskowanie geometryczne**.
   * Wybierz z menu **Rysunek Techniczny → Kreskowanie → ![](/images/TechDraw_GeometricHatch.svg) Zastosuj na powierzchni kreskowanie geometryczne**.
3. Otworzy się panel zadań **Zastosuj na powierzchni kreskowanie geometryczne**.
4. Opcjonalnie można zmienić **Plik wzoru**, **Nazwa wzoru** **Skala wzoru**, **Grubość linii** i **Kolor linii**.
5. Naciśnij przycisk OK.

## Uwagi

Dla wypełnienia jednolitym kolorem użyj narzędzia [kreskowanie](/TechDraw_Hatch/pl "TechDraw Hatch/pl") i wybierz solid.svg jako **plik wzorca**.

* Obiekty kreskowania są podatne na problemy z *[nazewnictwem topologicznym](/Topological_naming_problem/pl "Topological naming problem/pl")*. Aby uzyskać więcej informacji, zobacz informacje w narzędziu [Rysunek techniczny: Wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"). Zaleca się, aby kreskowanie było jednym z ostatnich kroków w procesie rysowania.

:   ```
    $INSTALL_DIR/data/Mod/TechDraw/PAT/FCPAT.pat

    ```
:   Gdzie `$INSTALL_DIR` to katalog, w którym zainstalowano FreeCAD, na przykład:
:   ```
    /usr/share/freecad/data/Mod/TechDraw/PAT/FCPAT.pat

    ```

## Właściwości

* DANE**Źródło**: Widok i ściana, które mają otrzymać wzór kreskowania.
* DANE**Plik wzoru**: Lokalizacja pliku PAT do użycia.
* DANE**Nazwa wzoru**: Nazwa specyfikacji PAT w ramach Pliku Wzorca.
* DANE**Skala wzoru**: Skala, która ma być zastosowana do wzorca *(wartość musi być większa od 0.0)*.
* WIDOK**Waga wzoru**: Grubość linii wzoru.
* WIDOK**Kolor wzoru**: Kolor linii wzoru.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Zastosuj na powierzchni kreskowanie geometryczne** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawGeomHatch", "GeomHatch")
hatch.Source = (view1, ["Face0"])
hatch.FilePattern = "path/to/myPATfile.pat"
hatch.NamePattern = "Diamond"
page.addView(hatch)

```

Możliwe jest również użycie silnika kreskowania geometrycznego środowiska Rysunek Techniczny do utworzenia złożonego obiektu w przestrzeni 3D. Należy zwrócić uwagę, aby ściana bazowa leżała na płaszczyźnie XY, ponieważ algorytm nie jest jeszcze dostosowany do innych przypadków:

```
import TechDraw
face = Part.makePlane(10, 10)
patfile = "path/to/myPATfile.pat"
pattern = "Diamond"
scale = 10
hatch = TechDraw.makeGeomHatch(face, scale, pattern, patfile)
Part.show(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_GeometricHatch/pl&oldid=1486388>"
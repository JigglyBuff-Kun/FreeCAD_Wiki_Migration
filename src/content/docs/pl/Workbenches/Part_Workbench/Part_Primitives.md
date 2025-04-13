---
title: Część Utwórz geometrię pierwotną
---

|                                                                                                             |
| ----------------------------------------------------------------------------------------------------------- |
| Część: Utwórz geometrie pierwotne                                                                           |
| Lokalizacja w menu                                                                                          |
| Część → Utwórz geometrie pierwotne ...                                                                      |
| Środowisko pracy                                                                                            |
| [Część](/Part_Workbench/pl "Part Workbench/pl"), [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") |
| Domyślny skrót                                                                                              |
| _brak_                                                                                                      |
| Wprowadzono w wersji                                                                                        |
| -                                                                                                           |
| Zobacz także                                                                                                |
| [Konstruktor kształtu](/Part_Builder/pl "Part Builder/pl")                                                  |
|                                                                                                             |

## Opis

Narzędzie ![](/images/Part_Primitives.svg) **Utwórz geometrie pierwotne ...** otwiera okno dialogowe do tworzenia jednego lub więcej prymitywów parametrycznych. Dostępnych jest 16 typów brył pierwotnych.

![](/images/Part_Primitives_example.png)

Geometrie pierwotne, które mogą być tworzone za pomocą tego narzędzia

## Użycie

### Tworzenie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Naciśnij przycisk ![](/images/Part_Primitives.svg) Utwórz geometrie pierwotne.
   - Wybierz polecenie z menu **Część → ![](/images/Part_Primitives.svg) Utwórz geometrie pierwotne...**.
2. Otworzy się panel zadań **Pierwotne bryły geometryczne**.
3. Wybierz typ elementu pierwotnego z listy rozwijanej.
4. Określ właściwości.
5. Naciśnij przycisk Utwórz.
6. Zostanie utworzony element pierwotny.
7. Zauważ, że panel zadań pozostaje otwarty.
8. Opcjonalnie utwórz dodatkowe prymitywy.
9. Naciśnij przycisk Zamknij, aby zamknąć panel zadań i zakończyć polecenie.

### Edycja

1. Kliknij dwukrotnie obiekt pierwotny w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Otworzy się panel zadań **Pierwotne bryły geometryczne**.
3. Zmień jedną lub więcej właściwości.
4. Obiekt jest dynamicznie aktualizowany w oknie [widoku 3D](/3D_view/pl "3D view/pl").
5. Naciśnij przycisk OK.

Właściwości elementu pierwotnego można również zmienić w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"), a jego DANE**Umiejscowienie** można również zmienić za pomocą narzędzia ![](/images/Std_TransformManip.svg) [Std: Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

## Geometryczne elementy pierwotne

Można utworzyć następujące elementy pierwotne:

- ![](/images/Part_Plane.svg) [Płaszczyzna](/Part_Plane/pl "Part Plane/pl"): Tworzy płaszczyznę.
- ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl"): Tworzy prostopadłościan regularny. Ten obiekt może być również utworzony za pomocą narzędzia [Utwórz sześcian](/Part_Box/pl "Part Box/pl").
- ![](/images/Part_Cylinder.svg) [Walec](/Part_Cylinder/pl "Part Cylinder/pl"): Tworzy walec. Ten obiekt może być również utworzony za pomocą narzędzia [Utwórz walec](/Part_Cylinder/pl "Part Cylinder/pl").
- ![](/images/Part_Cone.svg) [Stożek](/Part_Cone/pl "Part Cone/pl"): Tworzy stożek. Ten obiekt może być również utworzony za pomocą narzędzia [Utwórz stożek](/Part_Cone/pl "Part Cone/pl").
- ![](/images/Part_Sphere.svg) [Sfera](/Part_Sphere/pl "Part Sphere/pl"): Tworzy sferę. Ten obiekt może być również utworzony za pomocą narzędzia [Utwórz sferę](/Part_Sphere/pl "Part Sphere/pl").
- ![](/images/Part_Ellipsoid.svg) [Elipsoida](/Part_Ellipsoid/pl "Part Ellipsoid/pl"): Tworzy elipsoidę.
- ![](/images/Part_Torus.svg) [Torus](/Part_Torus/pl "Part Torus/pl"): Tworzy torus. Ten obiekt może być również utworzony za pomocą narzędzia [Utwórz torus](/Part_Torus/pl "Part Torus/pl").
- ![](/images/Part_Prism.svg) [Graniastosłup](/Part_Prism/pl "Part Prism/pl"): Tworzy graniastosłup.
- ![](/images/Part_Wedge.svg) [Klin](/Part_Wedge/pl "Part Wedge/pl"): Tworzy klin.
- ![](/images/Part_Helix.svg) [Helisa](/Part_Helix/pl "Part Helix/pl"): Tworzy helisę.
- ![](/images/Part_Spiral.svg) [Spirala](/Part_Spiral/pl "Part Spiral/pl"): Tworzy spiralę.
- ![](/images/Part_Circle.svg) [Okrąg](/Part_Circle/pl "Part Circle/pl"): Tworzy łuki okręgów.
- ![](/images/Part_Ellipse.svg) [Elipsa](/Part_Ellipse/pl "Part Ellipse/pl"): Tworzy łuk eliptyczny.
- ![](/images/Part_Point.svg) [Punkt](/Part_Point/pl "Part Point/pl"): Tworzy punkt.
- ![](/images/Part_Line.svg) [Linia](/Part_Line/pl "Part Line/pl"): Tworzy linię.
- ![](/images/Part_RegularPolygon.svg) [Wielokąt foremny](/Part_RegularPolygon/pl "Part RegularPolygon/pl"): Tworzy wielokąt foremny.

## Uwagi

- Polecenie Utwórz geometrie pierwotne środowiska Część nie tworzy ![](/images/Part_Tube.svg) [Rury](/Part_Tube/pl "Part Tube/pl").

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Istnieje skrypt środowiska Python do testowania tworzenia elementów pierwotnych. Można go uruchomić z [konsoli Python](/Python_console/pl "Python console/pl"):

```
import parttests.part_test_objects as pto
pto.create_test_file("example_file")

```

Skrypt ten znajduje się w katalogu instalacyjnym programu i może być badany w celu sprawdzenia, jak budowane są geometrie pierwotne:

```
$INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Można go także wykorzystać do wprowadzenia danych do programu:

```
freecad $INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Primitives/pl&oldid=1468060>"

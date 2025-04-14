---
title: Part Grundelemente
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Part Grundelemente                                                                                         |
| Menüeintrag                                                                                                |
| Formteil → Grundkörper erstellen...                                                                        |
| Arbeitsbereich                                                                                             |
| [Part](/Part_Workbench/de "Part Workbench/de"), [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") |
| Standardtastenkürzel                                                                                       |
| _Keiner_                                                                                                   |
| Eingeführt in Version                                                                                      |
| -                                                                                                          |
| Siehe auch                                                                                                 |
| [Part Formgenerator](/Part_Builder/de "Part Builder/de")                                                   |
|                                                                                                            |

## Beschreibung

Der Befehl ![](/images/Part_Primitives.svg) **Part Grundelemente** öffnet ein Dialogfeld zum Erstellen eines oder mehrerer parametrischer Grundelemente. 16 verschiedene Grundelemente (Körper und Linienelemente) stehen zur Verfügung.

![](/images/Part_Primitives_example.png)

Die Grundelemente, die mit dem Befehl erstellt werden können.

## Anwendung

### Erstellung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Part_Primitives.svg) Grundkörper erstellen... drücken.
   - Den Menüeintrag **Part → ![](/images/Part_Primitives.svg) Grundkörper erstellen...** auswählen.
2. Das Aufgaben-Fenster **Geometrische Grundkörper** wird geöffnet.
3. Einen Typ Grundkörper aus der Aufklappliste auswählen.
4. Die Eigenschaften festlegen.
5. Die Schaltfläche Erstellen drücken.
6. Das Grundkörper-Objekt wird erstellt.
7. Man beachte, dass das Aufgaben-Fenster geöffnet bleibt.
8. Wahlweise weitere Grundkörper erstellen.
9. Die Schaltfläche Schließen drücken, um das Aufgaben-Fenster zu schließen und den Befehl fertigzustellen.

### Bearbeiten

1. Auf das Grundkörperobjekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelklicken.
2. Der Aufgabenbereich **Geometrische Grundkörper** wird geöffnet.
3. Eine oder mehrere Eingenschaften ändern.
4. Das Objekt wird in der [3D-Ansicht](/3D_view/de "3D view/de") dynamisch aktualisiert.
5. Die Schaltfläche OK drücken.

Die Eigenschaften eines Part-Grundkörpers können auch im [Eigenschafteneditor](/Property_editor/de "Property editor/de") geändert werden und seine Daten-Eigenschaft**Placement** kann auch mit dem Befehl ![](/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") geändert werden.

## Geometrische Grundelemente

Die folgenden Grundelemente können erstellt werden:

- ![](/images/Part_Plane.svg) [Ebene](/Part_Plane/de "Part Plane/de"): Erstellt eine Ebene.
- ![](/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de"): Erstellt einen Quader. Dieses Objekt kann auch mit dem Werkzeug [Würfel](/Part_Box/de "Part Box/de") erstellt werden.
- ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder/de "Part Cylinder/de"): Erstellt einen Zylinder. Dieses Objekt kann auch mit dem Werkzeug [Zylinder](/Part_Cylinder/de "Part Cylinder/de") erstellt werden.
- ![](/images/Part_Cone.svg) [Kegel](/Part_Cone/de "Part Cone/de"): Erstellt einen Kegel. Dieses Objekt kann auch mit dem Werkzeug [Kegel](/Part_Cone/de "Part Cone/de") erstellt werden.
- ![](/images/Part_Sphere.svg) [Kugel](/Part_Sphere/de "Part Sphere/de"): Erstellt eineKugel. Dieses Objekt kann auch mit dem Werkzeug [Kugel](/Part_Sphere/de "Part Sphere/de") erstellt werden.
- ![](/images/Part_Ellipsoid.svg) [Ellipsoid](/Part_Ellipsoid/de "Part Ellipsoid/de"): Erstellt ein Ellipsoid.
- ![](/images/Part_Torus.svg) [Torus](/Part_Torus/de "Part Torus/de"): Erstellt einen Torus. Dieses Objekt kann auch mit dem Werkzeug [Torus](/Part_Torus/de "Part Torus/de") erstellt werden.
- ![](/images/Part_Prism.svg) [Prisma](/Part_Prism/de "Part Prism/de"): Erstellt ein Prisma.
- ![](/images/Part_Wedge.svg) [Keil](/Part_Wedge/de "Part Wedge/de"): Erstellt einen Keil.
- ![](/images/Part_Helix.svg) [Helix](/Part_Helix/de "Part Helix/de"): Erstellt eine Wendel.
- ![](/images/Part_Spiral.svg) [Spirale](/Part_Spiral/de "Part Spiral/de"): Erstellt eine Spirale.
- ![](/images/Part_Circle.svg) [Kreis](/Part_Circle/de "Part Circle/de"): Erstellt einen Kreisbogen.
- ![](/images/Part_Ellipse.svg) [Ellipse](/Part_Ellipse/de "Part Ellipse/de"): Erstellt einen Ellipsenbogen.
- ![](/images/Part_Point.svg) [Point](/Part_Point/de "Part Point/de"): Erstellt einen Punkt.
- ![](/images/Part_Line.svg) [Line](/Part_Line/de "Part Line/de"): Erstellt eine Linie.
- ![](/images/Part_RegularPolygon.svg) [Regelmäßiges Polygon](/Part_RegularPolygon/de "Part RegularPolygon/de"): Erstellt ein regelmäßiges Vieleck.

## Hinweise

- Der Befehl Part Grundkörper kann keinen ![](/images/Part_Tube.svg) [Part Hohlzylinder erstellen](/Part_Tube "Part Tube").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/), [Part Skripten](/Part_scripting/de "Part scripting/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Es gibt ein Python-Skript, um die Erstellung von Grundkörpern zu testen. Es kann von der [Python-Konsole](/Python_console/de "Python console/de") gestartet werden:

```
import parttests.part_test_objects as pto
pto.create_test_file("example_file")

```

Dieses Skript befindet sich im Installationsverzeichnis des Programms und kann untersucht werden, um zu sehen, wie die einfachsten Grundelemente aufgebaut werden:

```
$INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Es kann auch als Eingabe für das Programm verwendet werden:

```
freecad $INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Primitives/de&oldid=1500181>"

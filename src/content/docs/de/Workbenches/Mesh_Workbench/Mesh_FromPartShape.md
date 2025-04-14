---
title: Mesh NetzAusPartForm
---

|                                                |
| ---------------------------------------------- |
| Mesh NetzAusPartForm                           |
| Menüeintrag                                    |
| Netze → Netz aus Form erstellen...             |
| Arbeitsbereich                                 |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") |
| Standardtastenkürzel                           |
| _Keiner_                                       |
| Eingeführt in Version                          |
| -                                              |
| Siehe auch                                     |
| _Keiner_                                       |
|                                                |

## Beschreibung

Der Befehl **Mesh NetzAusPartForm** erzeugt nicht-parametrische [Netz](/Mesh/de "Mesh/de")-Objekte ([Mesh Formelemente](/Mesh_Feature/de "Mesh Feature/de")) aus [Form](/Shape/de "Shape/de")-Objekten ([Part Formelemente](/Part_Feature/de "Part Feature/de")).

Die umgekehrte Aktion ist [Part FormAusNetz](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de") aus dem Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de").

## Anwendung

1. Wahlweise ein oder mehrere Objekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Mesh_FromPartShape.svg) Netz aus Form erstellen... drücken.
   - Den Menüeintrag **Netze → ![](/images/Mesh_FromPartShape.svg) Netz aus Form erstellen...** auswählen.
3. Der Aufgaben-Bereich **Tessellierung** wird geöffnet.
4. Während das Aufgaben-Bereich geöffnet ist, kann eine neue Auswahl erstellt oder eine bestehende Auswahl geändert werden.
5. Den Reiter des Netzgenerators auswählen, der verwendet werden soll.
6. Die erforderlichen Einstellungen eingeben. Siehe [Netzgeneratoren](#Netzgeneratoren).
7. Die Schaltfläche OK drücken, um den Aufgaben-Bereich zu schließen und den Befehl zu beenden.

## Netzgeneratoren

Dies sind die vorhandenen Netzgeneratoren und ihre Einstellungen:

### Standard-Netzgenerator

- **Oberflächenabweichung**: die maximale [lineare Abweichung](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) eines Polygonnetzabschnitts von der Oberfläche des Objekts.
- **Winkelabweichung**: die maximale [Winkelabweichung](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) von einem Polygonnetzabschnitt zum nächsten. Diese Einstellung wird beim Vernetzen von gekrümmten Oberflächen verwendet.
- **Relative Oberflächenabweichung**: wenn aktiviert, entspricht die maximale lineare Abweichung eines Polygonnetzabschnitt der angegebenen **Oberflächenabweichung** multipliziert mit der Länge des aktuellen Polygonnetzabschnitt (Kante).
- **Flächenfarben auf das Netz anwenden**: wenn markiert, erhält das Netz die Flächenfarben des Objekts.
- **Segmente nach Flächenfarben definieren**: wenn markiert, werden die Polygonnetzabschnitt nach den Farben der Flächen des Objekts gruppiert. Diese Gruppen werden für Polygonnetz Ausgabeformate exportiert, die diese Funktion unterstützen (zum Beispiel das [OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file) Format).

### Netzgenerator Mefisto

- **Maximale Kantenlänge**: Die maximale Kantenlänge des Netzes. Ein geringerer Wert ergibt ein feineres Netz. Die Eingabe von `0` oder das Deaktivieren der Checkbox ergeben ein sehr grobes Netz.
  - Drückt man die Schaltfläche Schätzung des Vernetzers, wird ein Schätzwert für **Maximale Kantenlänge** eingegeben. Dieser Wert ist nicht sehr verlässlich, wenn mehrere Objekte ausgewählt wurden.

### Netzgenerator Netgen

- **Feinheit**: Eine Option für die Feinheit des Netzes auswählen:
  - **Sehr grob**
  - **Grob**
  - **Mittel**
  - **Fein**
  - **Sehr fein**
  - **Benutzerdefiniert**: für diese Option können die folgenden Einstellungen festgelegt werden:
    - **Mesh Größensortierung**: ein kleinerer Wert ergibt ein feineres Netz. Der Wert muss im Bereich `0.1` - `1.0` liegen.
    - **Element pro Kante**: ein größerer Wert ergibt ein feineres Netz. Der Wert muss im Bereich `0.2` - `10.0` liegen.
    - **Element pro Krümmungsradius**: ein größerer Wert ergibt ein feineres Netz. Der Wert muss im Bereich `0.2` - `10` liegen.
- **Oberfläche optimieren**: wenn aktiviert, wird die Form der Oberfläche optimiert.
- **Elemente zweiter Ordnung**: wenn aktiviert, werden Elemente zweiter Ordnung erstellt und ergeben ein feineres Netz.
- **Quad-dominiert**: wenn aktiviert, wird das Netz bevorzugt viereckige Flächen verwenden (siehe [quadrilateral faces](https://en.wikipedia.org/wiki/Types_of_mesh#Two-dimensional)).

### Netzgenerator Gmsh

Für Linux Anwender: das externe [Gmsh](https://gmsh.info/)-Modul ist erforderlich.

- **Meshing**: select a meshing option:
  - **Automatic**
  - **Adaptive**
  - **Delaunay**
  - **Frontal**
  - **BAMG**
  - **Frontal Quad**
  - **Parallelograms**
  - **Quasi-structured Quad**
- **Max. element size**: a smaller value results in a finer mesh. Specify `0` to have this size automatically determined.
- **Min. element size**: a smaller value results in a finer mesh. The value should be smaller than the **Max. element size**. Specify `0` to have this size automatically determined.
- **Angle**: seems to be unsupported at this time.
- **Path**: press the ... button and browse to the gmsh.exe path.
- If the meshing process takes too long you can press the Kill button to abort it.
- Press the Clear button to remove the information in the text area.

## Hinweise

- This command is not restricted to objects created with the [Part workbench](/Part_Workbench "Part Workbench"). It can create a mesh from any object that has a shape including objects created with the [PartDesign workbench](/PartDesign_Workbench "PartDesign Workbench").
- The [Std Export](/Std_Export "Std Export") command can export shape objects directly to a mesh format.
- See also: [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ") tutorial.

## Einstellungen

### Standard-Netzgenerator

- The **Surface deviation** setting is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → LinearDeflection**.
- The **Angular deviation** setting is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → AngularDeflection**.
- The **Relative surface deviation** setting is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → RelativeLinearDeflection**.

### Netzgenerator Gmsh

- Der **Pfad** ist abgelegt: **Werkzeuge → Parameter bearbeiten... → BaseApp → Einstellungen → Mod → Mesh → Meshing → gmshExe**.

## Eigenschaften

Siehe: [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de").

## Skripten

Siehe auch: [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um ein Netzobjekt aus einem Formobjekt zu erstellen, wird die Methode `NetzAusForm` des MeshPart-Moduls verwendet. Diese Methode hat mehrere Signaturen. Die Signatur bestimmt den zu verwendenden Netzgenerator. Das folgende Beispiel verwendet die Signatur des Netzgenerators Mefisto.

```
import FreeCAD, Part, Mesh, MeshPart

cyl = FreeCAD.ActiveDocument.addObject("Part::Cylinder","Cylinder")
FreeCAD.ActiveDocument.recompute()

msh = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = MeshPart.meshFromShape(Shape=cyl.Shape, MaxLength=1)
msh.ViewObject.DisplayMode = "Flat Lines"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_FromPartShape/de&oldid=1548487>"

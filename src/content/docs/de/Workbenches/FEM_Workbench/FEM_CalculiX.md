---
title: FEM CalculiX
---
## Einleitung

Diese Seite sammelt Informationen über den [CalculiX](http://www.calculix.de/) Finite-Elemente-Solver, den Standard-Solver im Arbeitsbereich ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/de "FEM Workbench/de") für strukturelle und thermo-mechanische Analysen. Abhängig vom Betriebssystem, mit dem Sie arbeiten, müssen Sie CalculiX installieren, bevor Sie Ihre erste Simulation durchführen. Siehe dazu [FEM Install](/FEM_Install/de "FEM Install/de").

Der Solver ist in der Lage, lineare und nicht-lineare Berechnungen für statische, dynamische und thermische Probleme durchzuführen. Der Solver arbeitet mit einer Abaqus-ähnlichen Eingabedatei (`.inp`), was bedeutet, dass er mit verschiedenen Präprozessoren verwendet werden kann, die dieses Format unterstützen. Das Programm enthält einen eigenen grafischen Präprozessor, der jedoch nicht von FreeCAD verwendet wird, sondern nur vom Solver selbst.

CalculiX ist so konzipiert, dass es auf Unix-Plattformen wie Linux und Irix-Computern, aber auch auf Windows läuft. CalculiX wurde von Ingenieuren der MTU Aero Engines, München, Deutschland, entwickelt, um sie bei der Konstruktion von Maschinen wie Düsenturbinen zu unterstützen. Die Software wird derzeit unter den Bedingungen der GPL Version 2 der Öffentlichkeit zugänglich gemacht.

## Integration in FreeCAD

Die Interaktion zwischen dem Arbeitsbereich [FEM](/FEM_Workbench/de "FEM Workbench/de") und CalculiX erfolgt durch das Schreiben und Lesen von Textdateien. Die Reihenfolge der Operationen ist wie folgt:

1. Es wird eine CalculiX-Eingabedatei mit den für die Simulation erforderlichen Details erstellt.
2. Der CalculiX-Solver wird mit dieser Eingabedatei gestartet.
3. Die Ausgabe des Solvers wird protokolliert.
4. Die Ausgabedateien des Solvers werden gelesen, wenn sie verfügbar sind.

Das Werkzeug [FEM Control Solver](/FEM_SolverControl/de "FEM SolverControl/de") verwaltet den gesamten Prozess. Benutzerinteraktion im Prozess ist möglich.

## Preprocessing-Schnittstelle

Die Eingabedatei, die CalculiX verwendet, kann bearbeitet werden bevor der Solver gestartet wird. Die in der Eingabedatei verwendeten Einheiten sind unabhängig von den in FreeCAD eingestellten Einheiten; sie sind immer Millimeter (mm) und Newton (N).

*(ToDo: Überprüfen Sie dies. Was passiert mit dem Netz, wenn inch in FreeCAD verwendet wird? Als die Dichte eingeführt wurde, haben wir damit kg und s und nicht mehr N?! wie ist das?!)*

Die CalculiX-Schnittstelle unterstützt die folgenden Objekte:

### FEM-Elemente

* Tet4 und Tet10
* S3 und S6
* B31 und B32
* und die in [FEM Mesh CalculiX](/FEM_Mesh_CalculiX/de "FEM Mesh CalculiX/de") beschriebenen

### Untersuchung

* Lineare und nichtlineare statische Analyse
* Frequenzanalyse
* Lineare Knickanalyse
* Gekoppelte thermisch-strukturelle Analyse

### Materialien

* Linear elastische isotrope Materialien (Gleichförmigkeit in allen Richtungen)
* Plastizität mit isotroper Verfestigung

## Preprocessing-Schnittstelle

Die FEM Workbench lädt CalculiX-Ergebnisse in ein [result-Objekt](/FEM_ResultShow/de "FEM ResultShow/de"), das Folgendes enthält:

* Verdrängungen
* Spannungen
* Dehnungen
* Äquivalente plastische Dehnung (PEEQ) - wenn nichtlineares Material verwendet wurde
* Temperatur - für thermomechanische Analysen

FreeCAD liest die Ergebnisse aus der Datei \*.frd, die von CalculiX erstellt wurde. Wenn diese Ergebnisse mehrere Zeitschritte enthalten, wird jeder Zeitschritt in FreeCAD als ein neues Ergebnisobjekt importiert. Dasselbe Verhalten gilt für Frequenz- oder Knickanalysen mit mehreren Eigenwerten.

Die Reaktionskräfte sind in der Datei *ccx\_dat\_file* zu finden, die die Reaktionskraftkomponenten (fx, fy, fz) für jede feste Randbedingung und für jede Verschiebungsrandbedingung, die die Translationsfreiheitsgrade einschränkt, enthält.

## Verwandtes

* [FEM Mesh CalculiX](/FEM_Mesh_CalculiX "FEM Mesh CalculiX")
* [CalculiX preferences](/FEM_Preferences/de#CalculiX "FEM Preferences/de") Dialogmenü im FEM Workbench-Einstellungsmenü

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX/de&oldid=1484025>"
---
title: FEM LöserCalculixCxxtools
---
|  |
| --- |
| FEM LöserCalculixCxxtools |
| Menüeintrag |
| Lösen → Solver CalculiX Standard |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| S X |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Tutorial](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

CalculiXccxTools ermöglicht die Verwendung des [CalculiX](https://en.wikipedia.org/wiki/Calculix) Solvers. Es kann verwendet werden für:

1. Einstellung der Analyseparameter
2. Auswahl des Arbeitsverzeichnisses
3. Ausführen des CalculiX-Solvers

## Anwendung

1. Ein ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXcxxTools Solver-Objekt wird automatisch bei der Erstellung eines ![](/images/FEM_Analysis.svg) [Analysis-Container](/FEM_Analysis/de "FEM Analysis/de") erstellt.  
    Um es manuell zu erstellen, verwenden Sie eine der folgenden Alternativen:
   * Drücken Sie den ![](/images/FEM_SolverCalculixCxxtools.svg) Löser CalculiX Standard Schaltfläche.
   * Wählen Sie **Löser → ![](/images/FEM_SolverCalculixCxxtools.svg) Löser CalculiX Standard** aus dem Menü.

* Drücken Sie die Tastenkombinationen S und dann X.

1. Ändern Sie optional die Eigenschaften der ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXcxxTools-Löser-Objekts im [Eigenschaftseditor](/Property_editor/de "Property editor/de").
2. Doppelklicken Sie auf das ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXcxxTools-Löser-Objekt.
3. Wählen Sie den **Analysetyp**.
4. Klicken Sie auf die Schaltfläche Write .inp file.
5. Klicken Sie auf die Schaltfläche Run CalculiX.

## Optionen

Klicken Sie auf die Schaltfläche Edit .inp file, um die CalculiX-Eingabedatei anzuzeigen und manuell zu bearbeiten, bevor Sie die Analyse ausführen. In diesem Fall kann es nützlich sein, die Eigenschaft Daten**Split Input Writer** auf `true` zu setzen.

## Eigenschaften

Standardwerte können im Menü **Bearbeiten → Einstellungen → FEM → CalculiX** eingestellt werden.

* Daten**Analysis Type**:
  + static - statische Spannungsanalyse
  + frequency - Modalanalyse (Eigenfrequenz)
  + thermomech - thermo-mechanische Analyse
  + check - keine Berechnung, führt Eingangsdeckprüfungen durch
  + buckling - lineare Knickanalyse [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

* Daten**Beam Reduced Integration** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):
  + true - verwendet Balkenelemente mit reduzierter Integration (B31R oder B32R), erforderlich bei Verwendung von Rohrträgerprofilen, kann auch [genaue Ergebnisse mit Plastizität](https://forum.freecad.org/viewtopic.php?t=61233) ermöglichen
  + false - verwendet reguläre (vollintegrierte) Balkenelemente

* Daten**Beam Shell Result Output 3D**: beachten Sie, dass CalculiX intern 1D- und 2D-Elemente in 3D-Elemente erweitert, um eine Finite-Elemente-Analyse durchzuführen
  + true - das resultierende Netz enthält 1D- und 2D-Elemente, die zu 3D-Elementen erweitert werden
  + false - Ergebnisse von 1D- und 2D-Elementen werden auf die Knoten des ursprünglichen 1D- oder 2D-Netzes gemittelt (d.h. ein rein gekrümmter Balken wird aufgrund der Mittelung 0 Knotenspannungen aufweisen)

* Daten**Buckling Accuracy** - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): defines the accuracy of buckling eigenvalue evaluation. In most cases it can be left with the default value (0.01) but sometimes it might be necessary to lower it (e.g. to 0.0001) to capture the first eigenvalue.

* Daten**Eigenmode High Limit**: Eigenwerte oberhalb dieser Grenze werden nicht berechnet; **Hinweis**: wenn die Eigenwerte des Modells oberhalb der oberen Grenze liegen, wird CalculiX ohne Ausgabe beendet

* Daten**Eigenmode Low Limit**: Eigenwerte unterhalb dieser Grenze werden nicht berechnet

* Daten**Eigenmodes Count**: Anzahl der niedrigsten zu berechnenden Eigenmoden

* Daten**Geometric Nonlinearity**:
  + linear - es wird eine lineare Analyse durchgeführt, wenn das Modell kein nichtlineares Material enthält
  + nichtlinear - es wird eine nichtlineare Analyse durchgeführt

* Daten**Iterations Control parameter Cutb**: definiert die zweite Zeile der [CalculiX' advanced iteration parameters](http://www.dhondt.de/ccx_2.17.pdf#subsection.8.24). Wird verwendet, wenn Daten**Iterations Control Parameter Time Use** auf *true* gesetzt ist.

* Daten**Iterations Control Parameter Iter**: definiert die erste Zeile der [CalculiX' advanced iteration parameters](http://www.dhondt.de/ccx_2.17.pdf#subsection.8.24). Wird verwendet, wenn Daten**Iterations Control Parameter Time Use** auf *true* gesetzt ist.

* Daten**Iterations Control Parameter Time Use**
  + true - aktiviert den Daten**Iterations Control Parameter Cutb** und den Daten**Iterations Control Parameter Iter**
  + falsch

* Daten**Iterations Maximum**: maximale Anzahl von Inkrementen, nach denen der Auftrag angehalten wird.

* Daten**Iterations User Defined Incrementations**:
  + true - automatische Inkrementierungssteuerung wird durch den Parameter DIRECT ausgeschaltet
  + false - Inkrementierungssteuerung erfolgt automatisch

* Daten**terations User Defined Time Step Length**:
  + true - aktiviert die Parameter Daten**Time End** und Daten**Time Initial Step**
  + falsch

* Daten**Material Nonlinearity**:
  + linear - nur lineare Materialeigenschaften werden in die Analyse einbezogen
  + nichtlinear - es werden nichtlineare Materialeigenschaften aus ![](/images/FEM_MaterialMechanicalNonlinear.svg) verwendet [Nichtlineares mechanisches Material](/FEM_MaterialMechanicalNonlinear/de "FEM MaterialMechanicalNonlinear/de") Objekt

* Daten**Matrix Solver Type**: Typ des Solvers zur Lösung von Gleichungssystemen in der Finite-Elemente-Analyse. Er kann die Berechnungsgeschwindigkeit und den Speicherbedarf erheblich beeinflussen. Die Eignung hängt von Ihrem Finite-Elemente-Modell und der verfügbaren Hardware ab
  + Standard - wählt automatisch den Matrix-Solver aus, abhängig von den verfügbaren Solvern (typischerweise ist es Spooles)
  + [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): pastix - einer der schnellsten Solver (zusammen mit Pardiso), verfügbar (und Standard) in offiziellen Builds seit ccx 2.18, kann dennoch gelegentlich Probleme verursachen
  + [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): pardiso - einer der schnellsten Solver (zusammen mit PaStiX), aber nicht quelloffen, erfordert ein anderes Build von CalculiX (ccx\_dynamic) und zusätzliche Bibliotheken, die nicht mit FreeCAD geliefert werden, zuverlässiger als PaStiX
  + spooles - direkter Solver mit der Unterstützung mehrerer CPUs. Die Anzahl der CPUs muss in den [FEM Einstellungen](/FEM_Preferences/de#CalculiX "FEM Preferences/de") unter *Solver-Standardwerte → Anzahl der zu verwendenden CPUs* eingestellt werden.
  + iterativescaling - iterativer Solver mit dem geringsten Speicherbedarf, geeignet, wenn das Modell überwiegend 3D-Elemente enthält
  + iterativecholesky - iterativer Löser mit Vorkonditionierung und geringem Speicherbedarf, geeignet, wenn das Modell überwiegend 3D-Elemente enthält

* Daten**Model Space** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): schaltet zwischen 3D- und 2D-Analysen um, letztere erfordern eine Oberflächengeometrie in der XY-Ebene (im achsensymmetrischen Fall rechts von der Y-Achse) mit [Dickendefinition](/FEM_ElementGeometry2D/de "FEM ElementGeometry2D/de") (Wert wird im achsensymmetrischen Fall ignoriert) und geeigneten Randbedingungen ([Verschiebungsrandbedingung](/FEM_ConstraintDisplacement/de "FEM ConstraintDisplacement/de") mit Freiheitsgraden X und Y muss anstelle von [fixed boundary condition](/FEM_ConstraintFixed/de "FEM ConstraintFixed/de") verwendet werden) sowie in der Ebene wirkende Lasten auf Kanten
  + 3D - dreidimensionale Volumen-/Schalen-/Stabelemente werden verwendet
  + plane stress - 2D-Volumenelemente mit ebener Spannung werden verwendet
  + plane strain - plane strain 2D-Volumenelemente werden verwendet
  + Achsensymmetrisch - es werden achsensymmetrische 2D-Volumenelemente verwendet

* Daten**Output Frequency** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): legt die Häufigkeit des Schreibens von Ergebnissen in Inkrementen fest (die Standardeinstellung 1 bedeutet, dass die Ergebnisse bei jedem Inkrement geschrieben werden, die Einstellung 2 würde die Ergebnisse alle 2 Inkremente speichern usw.), besonders nützlich für nichtlineare und instationäre Simulationen, hilft, das Durcheinander im Baum zu reduzieren, da derzeit ein Paar von Ergebnisobjekten (CCX\_Results und Pipeline\_CCX\_Results) für jeden Ergebnisrahmen erstellt wird

* Daten**Split Input Writer**:
  + false - die gesamte Eingabe in eine \*.inp Datei schreiben, die vom CalculiX Solver verwendet werden kann
  + true - Solver-Eingaben in mehrere \*.inp-Dateien aufteilen, was die manuelle Bearbeitung verdeutlichen kann

* Daten**Thermo Mech Steady State**:
  + true - thermomechanische Analyse im stationären Zustand
  + false - instationäre thermo-mechanische Analyse

* Daten**Thermo Mech Type** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):
  + gekoppelt - gekoppelte thermo-mechanische Analyse
  + ungekoppelt - ungekoppelte thermo-mechanische Analyse
  + reine Wärmeübertragung - rein thermische Analyse (*\*WÄRMETRANSFER*)

* Daten**Time End**: Zeitspanne des Schritts, verwendet, wenn der Parameter Daten**Iterations User Defined Incrementations** oder Daten**Iterations User Defined Time Step Length** *true* ist

* Daten**Time Initial Step**: anfängliches Zeitinkrement des Schritts, wenn der Parameter Daten**Iterations User Defined Incrementations** oder Daten**Iterations User Defined Time Step Length** *true* ist

* Daten**Time Maximum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): maximales Zeitinkrement des Schrittes, wird verwendet, wenn der Parameter Daten**Iterations User Defined Incrementations** oder Daten**Iterations User Defined Time Step Length** *true* ist

* Daten**Time Minimum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): minimale Zeitschrittweite des Schritts, wird verwendet, wenn der Parameter Daten**Iterations User Defined Incrementations** oder Daten**Iterations User Defined Time Step Length** *true* ist

* Daten**Working Dir**: Pfad zum Arbeitsverzeichnis, das für CalculiX-Analysedateien verwendet werden soll.

## Limitierungen

Wenn Sie CalculiX ausführen, kann es sein, dass Sie den **Fehler 4294977295** erhalten. Dies bedeutet, dass Sie nicht genug RAM-Speicherplatz haben. Sie haben dann 2 Möglichkeiten:

1. Reduzieren Sie die Anzahl der Netzknoten, vorzugsweise durch Weglassen von Geometrie, die für Ihre Analyse nicht unbedingt notwendig ist
2. Kaufen Sie mehr RAM für Ihren PC

## Hinweise

Die Originaldokumentation von CalculiX finden Sie unter <http://dhondt.de/> im Abschnitt "ccx".

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverCalculixCxxtools/de&oldid=1529375>"
---
title: FEM Analyse
---
|  |
| --- |
| FEM Analyse |
| Menüeintrag |
| Modell → Analysebehälter |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| S A |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Tutorium](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Der Befehl **FEM Analyse** erstellt einen Behälter, der alle Objekte einer Finite-Elemente-Analyse aufnimmt. Dieser Behälter muss vorhanden sein. Mindestens eines der folgenden Objekte (außer dem Netz) wird für eine mechanische Analyse benötigt:

* Ein [Festkörper-Material](/FEM_MaterialSolid/de "FEM MaterialSolid/de"),
* Eine Randbedingung für eine [Befestigung](/FEM_ConstraintFixed/de "FEM ConstraintFixed/de") (Einspannung), eine [Auslenkung](/FEM_ConstraintDisplacement/de "FEM ConstraintDisplacement/de") (Verschiebung), oder einen [starren Körper](/FEM_ConstraintRigidBody/de "FEM ConstraintRigidBody/de").

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_Analysis.svg) Analysebehälter drücken.
   * Den Menüeintrag **Modell → ![](/images/FEM_Analysis.svg) Analysebehälter** auswählen.
   * Das Tastaturkürzel S dann A.
2. Ein neuer Analysebehälter (ein Analysis-Container) wird erstellt und aktiviert.
3. Andere Objekte können dem Analysebehälter durch Ziehen und Ablegen hinzugefügt oder entfernt werden.
4. Um dem Dokument neue FEM-Objekte hinzuzufügen, muss der Analysebehälter aktiv sein. Ein Doppelklick auf das Analysis-Objekt aktiviert die Analyse.

## Eigenschaften

* Daten**OutpuDir**: Gibt das Arbeitsverzeichnis der Analyse an

## Skripten

Der Großteil des Codes hier ist seit 0.17 veraltet.

* neue Analyse

```
MechanicalAnalysis.makeMechanicalAnalysis( name )

```

* Objekt zur Analyse hinzufügen

```
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [ (object) ]

```

* Objekt aus der Analyse entfernen

```
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove( documentobject )
 App.ActiveDocument.MechanicalAnalysis.Member = member

```

Beispiele:

```
import MechanicalAnalysis
analysis = MechanicalAnalysis.makeMechanicalAnalysis("MechanicalAnalysis")
FemGui.setActiveAnalysis(analysis)

addobj = App.ActiveDocument.getObject("MechanicalMaterial")
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [addobj]

removeobj = App.ActiveDocument.getObject("MechanicalMaterial")
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove(removeobj)
App.ActiveDocument.MechanicalAnalysis.Member = member

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Analysis/de&oldid=1570698>"
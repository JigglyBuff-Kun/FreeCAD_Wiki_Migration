---
title: FEM RandbedingungVerschiebung
---
|  |
| --- |
| FEM RandbedingungVerschiebung |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Belastungen → Randbedingung Verschiebung |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM-Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Elmer |

## Beschreibung

Erstellt eine FEM-Randbedingungn für eine festgelegte Verschiebung (Auslenkung) eines ausgewählten Objekts für bestimmte Freiheitsgrade.

![](/images/FEM_Displacement_dialog.PNG)

The FEM displacement task panel

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintDisplacement.svg) **Randbedingung Verschiebung** drücken
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintDisplacement.svg) Randbedingung Verschiebung** auswählen.
2. Die Schaltfläche Hinzufügen drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") das Objekt auswählen, dem die Randbedingung zugeordnet werden soll; dies kann ein Knoten, eine Kante, oder eine Fläche sein (aber alle ausgewählten Objekte müssen von derselben Art sein). Um Elemente von der Liste zu entfernen wird die Schaltfläche Entfernen gedrückt und die Objekte angeklickt.
4. Die Felder neben den Freiheitsgraden aktivieren, die man verwenden möchte. Standardmäßig sind sie auf Null gesetzt (fixed), können aber auf einen beliebigen Wert ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): oder eine Formel für Elmer) geändert werden. (Ver-) Drehungen sind nur für Balken und dünnwandige Elemente sinnvoll.

## Formeln

[eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

### Allgemein

Für den ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") ist es möglich, die Verschiebung als Formel zu definieren. In diesem Fall berechnet der Solver die Verschiebung entsprechend der angegebenen Formelvariablen.

Nehmen wir zum Beispiel den Fall, dass wir eine [Transientenanalyse](/FEM_SolverElmer_SolverSettings/de#Timestepping_(transient_analyses) "FEM SolverElmer SolverSettings/de") durchführen wollen. Für jeden Zeitschritt soll die Verschiebung 

d
{\displaystyle d}
![{\displaystyle d}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e85ff03cbe0c7341af6b982e47e9f90d235c66ab) um 6 mm erhöht werden:

d
(
t
)
=
0.006
⋅
t
{\displaystyle \quad d(t)=0.006\cdot t}
![{\displaystyle \quad d(t)=0.006\cdot t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7bcc928138e413f95a9a6672978e22268e4f2ba1)

dies in das Feld *Formel* eingeben:  
 `Variable "time"; Real MATC "0.006*tx"`

Dieser Code hat die folgende Syntax:

* das Präfix "Variable" gibt an, dass es sich bei der Verschiebung nicht um eine Konstante, sondern um eine Variable handelt.
* die Variable ist die aktuelle Zeit.
* die Verschiebungswerte werden als *Real* (Fließkomma) Werte zurückgegeben.
* MATC ist ein Präfix der dem Elmer Solver angibt, dass der folgende Code eine Formel ist
* *tx* ist immer der Name der Variablen in *MATC*-Formeln, unabhängig davon, dass *tx* in unserem Fall eigentlich *t* ist

### Drehungen

Elmer verwendet nur die Felder *Verschiebung \** der Randbedingung. Um Drehungen zu definieren, benötigen wir eine Formel.

Wenn zum Beispiel eine Fläche entsprechend dieser Bedingung gedreht werden soll:

d

x
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
x
−
sin
⁡
(
ϕ
)
y

d

y
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
y
+
sin
⁡
(
ϕ
)
x
{\displaystyle \quad {\begin{aligned}d\_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\\d\_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}
![{\displaystyle \quad {\begin{aligned}d_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\\d_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a56fb2507459d63a0a5373a81fa64998c216e359)

dann müssen wir für **Verschiebung x**  
 `Variable "Zeit, Koordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(1)-sin(tx(0)*pi)*tx(2)`  
eingeben

und für **Displacement y**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(2)+sin(tx(0)*pi)*tx(1)`

Dieser Code hat die folgende Syntax:

* wir haben 4 Variablen, die Zeit und alle möglichen Koordinaten (x, y z)
* *tx* ist ein Vektor, *tx(0)* bezieht sich auf die erste Variable, die Zeit, während *tx(1)* sich auf die erste Koordinate *x* bezieht
* *pi* bezeichnet 

  π
  {\displaystyle \pi }
  ![{\displaystyle \pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/9be4ba0bb8df3af72e90a0535fabcc17431e540a) und wurde hinzugefügt, damit nach 

  t
  =
  1

  s
  {\displaystyle t=1{\rm {\,s}}}
  ![{\displaystyle t=1{\rm {\,s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af783ab669111b914a4a9d4b74e448bfbbb27b9c) eine Drehung um 180° durchgeführt wird

## Hinweise

Für den ![](/images/FEM_SolverCalculixCxxtools.svg) [Löser CalculiX](/FEM_SolverCalculixCxxtools/de "FEM SolverCalculixCxxtools/de"):

* Calkulix verwendet die [\*BOUNDARY-Karte](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).
* Die Fixierung eines Freiheitsgrades wird unter <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node164.html> erklärt.
* Die Vorgabe einer Verschiebung für einen Freiheitsgrad wird erklärt unter <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node165.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintDisplacement/de&oldid=1570696>"
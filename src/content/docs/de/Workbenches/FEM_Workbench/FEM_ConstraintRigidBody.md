---
title: FEM RandbedingungStarrerKörper
---
|  |
| --- |
| FEM RandbedingungStarrerKörper |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Belastungen → Randbedingung starrer Körper |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [FEM RandbedingungVerschiebung](/FEM_ConstraintDisplacement/de "FEM ConstraintDisplacement/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX |

## Beschreibung

Definiert die Starrkörperbeschränkung von CalculiX, die die Bewegung der Knoten eines ausgewählten geometrischen Objekts an die Bewegung eines Referenzknotens bindet, dessen Position vom Benutzer definiert wird. In der Praxis kann dies verwendet werden, um eine Randbedingung oder Last anzuwenden, die auf das ausgewählte Objekt übertragen wird. Da der Referenzknoten über rotatorische Freiheitsgrade verfügt, ist es möglich, auf diese Weise eine Momentbelastung oder eine rotatorische Randbedingung auf jede Fläche anzuwenden. Die Position des Referenzknotens kann ausgewählt werden. Wenn er von einem geometrischen Objekt versetzt ist, kann eine Fernlast (eine Kraft, die auf einen Hebel wirkt) angewendet werden.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintRigidBody.svg) Randbedingung Starrer Körper drücken.
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintRigidBody.svg) Randbedingung Starrer Körper** auswählen.
2. Die Schaltfläche Hinzufügen drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") ein oder mehrere geometrische Elemente (Eckpunkte, Kanten oder Flächen, aber nicht eine Mischung davon) auswählen, auf die die Randbedingung angewendet werden soll. Um Objekte aus der Auswahl zu entfernen, die Schaltfläche Entfernen drücken und die Objekte anklicken.
4. Die Koordinaten des Referenzknotens angeben. Ein kugelförmiges Symbol zeigt diese Position an.
5. Die Modi für die 3 translatorischen und 3 rotatorischen Freiheitsgrade (DOFs) auswählen:
   * *Frei* - Standardeinstellung, keine Randbedingung oder Last auf diesem Freiheitsgrad
   * *Constraint* - Verschiebungs-/Rotations-Randbedingung mit einem bestimmten Wert (Standardwert: 0 = fest) für diesen Freiheitsgrad - für Rotation muss eine Achse (X, Y oder Z) und der *Winkel* angeben werden
   * *Last* - Kraft-/Momentbelastung mit einem bestimmten Wert für diesen Freiheitsgrad

![](/images/FEM_rigid_body_torsion.PNG)

Einseitig eingespannter Balken (Kragbalken) unter Torsionsbelastung. Grüne Stifte zeigen die Fläche an, auf die die Randbedingung Starrer Körper angewendet wird; die große grüne Kugel ist ein Referenzknoten. Das Moment ist um die richtige Achse festgelegt.

![](/images/FEM_rigid_body_bending_and_torsion.PNG)

Kragbalken unter kombinierter Belastung (Biegung und Torsion) über eine sogenannte entfernt eingeleitete Kraft. Im Referenzknoten, der versetzt zum Balken liegt, wird eine nach unten gerichtete Kraft eingeleitet.

## Einschränkungen

* Derzeit können die Momenteinheiten etwas verwirrend sein. Um 1 N\*m anzuwenden, muss man 1 J in das Eingabefeld eingeben (diese Einheiten sind gleichwertig).
* Die Funktion kann vorerst nur auf Eckpunkte, Kanten und Flächen angewendet werden, die Unterstützung für Volumenkörper (um ganze Volumen/Teile starr zu machen) sollte in Zukunft folgen.
* Das ausgewählte Objekt wird starr gemacht. Um Lasten auf eine flexiblere Weise anzuwenden, müsste man die verteilenden Kopplungsbeschränkungen von CalculiX verwenden, die derzeit nicht unterstützt werden.

## Hinweise

* Diese Zwangsbedingung ist die Standardmethode, um ein Drehmoment auf beliebige Teile anzuwenden. Die anderen Optionen sind die [Lokales Koordinatensystem](/FEM_ConstraintTransform/de "FEM ConstraintTransform/de") (nur für zylindrische Flächen) oder ein Paar von Kräften, aber die Starrkörperbindung sollte in so gut wie allen Fällen ausreichend sein.
* Auf die Knoten, die an einer Starrkörperbindung beteiligt sind, sollten keine anderen Bindungen/Begrenzungsbedingungen angewendet werden.
* Wenn man diese Zwangsbedingung auf einen Scheitelpunkt oder eine Kante anwendet, sollte man eine geeignete Rotations-DOF (im Falle einer Kante diejenige, die die Rotation um sie verhindert) auf Null setzen.
* Diese Funktion verwendet die [\*RIGID BODY card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node236.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintRigidBody/de&oldid=1544981>"
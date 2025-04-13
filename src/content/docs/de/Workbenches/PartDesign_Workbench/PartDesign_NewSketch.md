---
title: PartDesign NeueSkizze
---
|  |
| --- |
| PartDesign NeueSkizze |
| Menüeintrag |
| Skizze → Skizze erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Sketcher NeueSkizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de") |
|  |

## Beschreibung

Dieses Werkzeug erstellt eine neue Skizze und, falls es noch keinen gibt, einen neuen [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de"), der die Skizze enthält. Anschließend wird der Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") automatisch geöffnet.

Werden Modelle unter Verwendung des Arbeitsbereichs [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt, sollte dieses Werkzeug den Vorzug vor dem Werkzeug ![](/images/Sketcher_NewSketch.svg)[Sketcher NeueSkizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de") des Arbeitsbereichs [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") bekommen.

## Anwendung

1. Die ![](/images/PartDesign_NewSketch.svg) Schaltfläche in der PartDesign Werkzeugleiste klicken.
2. Im Aufgabenreiter wird der **Element auswählen**-Diaglog angezeigt. Hier kann eine der Ebenen oder die 3D-Ansicht, die für eine besser Sichtbarkeit anders ausgerichtet werden kann, gewählt werden.
3. OK klicken.
4. Die Oberfläche schaltet automatisch zum Skizzierer und die Skizze kann bearbeitet werden. Nach dem Verlassen des Skizzierers springt die Oberfläche automatisch in den PartDesign Arbeitsbereich und die 3D-Ansicht wird in die Ansicht zurückgestellt, wie sie vor dem Erstellen der Skizze war.
5. Es kann auch eine Ebene oder eine Oberfläche eines existierenden Körpers gewählt werden, bevor eine Skizze erstellt wird. In diesem Fall wird die Skizze sofort erstellt.

## Optionen

* Um die Zuordnung einer existierenden Skizze zu ändern, muss ihre Eigenschaft *Map Mode* geändert werden. (siehe [Eigenschaften](#Eigenschaften))

* Der Dialog *Element auswählen* legt die Elemente der neuen Skizze fest

:   :   ![](/images/PartDesign.CreateSketch.SelectFeatureDialog.jpeg)
    :   Dialog *Element auswählen*. Diese Einstellungen erstellen eine Skizze auf der XY-Ebene und lassen die Verwendung von Querverweisen anderer Elemente desselben Körpers

Dialog-Einstellungen

* Koordinatensystemkasten: definiert die Ausrichtung der Skizzierebene
* Kontrollkästchen *Verwendete Funktionen Zulassen*: *ZuTun*

:   Optionen für externe Funktionen zulassen

* Von anderen Körpern desselben Teils: alle im selben Körper verwendeten Elemente können referenziert werden
* Von anderen Teilen oder freien Features: *TBD*
* Unabhängige Kopie erstellen: alle anderen Elemente werden separate Kopien sein, d.h. sie werden sich nicht ändern, wenn sich das Original ändert.
* Abhängige Kopie erstellen: die Elemente werden Kopien sein, aber eine Abhängigkeit zu den Originalelementen wird beibehalten. Dies ist im Grunde die Verwendung eines [Formbinder](/PartDesign_ShapeBinder/de "PartDesign ShapeBinder/de")
* Querverweis erstellen: Die verknüpften Elemente sind keine Kopien, sondern verweisen auf die Originalelemente, z. B. eine Masterskizze. Alle Änderungen werden auf diese Skizze übertragen

Um beliebige Elemente im [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") zu referenzieren, können die beiden Werkzeuge ![](/images/Sketcher_External.svg) [ExterneGeometrie](/Sketcher_External/de "Sketcher External/de") und ![](/images/Sketcher_CarbonCopy.svg) [Pause](/Sketcher_CarbonCopy/de "Sketcher CarbonCopy/de") verwendet werden. Generell ist es empfehlenswert, andere Skizzen als Quelle für Referenzen zu verwenden, anstatt Flächen oder Kanten, da diese weniger von dem Problem der topologischen Benennung betroffen sind.

## Eigenschaften

* Daten-Eigenschaft**Map Mode** (Abbildungsmodus): Art der Befestigung der Skizze an einem anderen Objekt, normalerweise einer Ebene oder Fläche. Es können aber auch andere Objekttypen sein. Einmal in das Feld klicken, um eine Schaltfläche ... anzuzeigen und sie dann anzuklicken, um den Dialog [Befestigen](/Part_EditAttachment/de "Part EditAttachment/de") zu öffnen. Wenn die Option *deaktiviert* ausgewählt ist, dann ist die Eigenschaft Positionierung aktiviert.
* Daten-Eigenschaft**Positonierung**: Steuert die Ausrichtung der Skizze im 3D-Raum; siehe [Positionierung](/Std_Placement/de "Std Placement/de"). Diese ist gesperrt, wenn die Skizze über die Eigenschaft "Map Mode" angehängt wurde.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/de&oldid=1462753>"
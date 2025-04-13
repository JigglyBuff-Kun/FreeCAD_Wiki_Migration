---
title: Cables Installationsdose
---
|  |
| --- |
| Cables Installationsdose |
| Menüeintrag |
| Leitungen → Installationsdose erstellen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables Leitungen](/Cables_Cable/de "Cables Cable/de"), [Cables KabelVerbinder](/Cables_CableConnector/de "Cables CableConnector/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_CableBox.svg) Cables Installationsdose erstellt eine parametrische Installationsdose, ein CableBox-Objekt. Zum Erstellungszeitpunkt hat sie eine voreingestellte Größe, aber einige Parameter, wie **Diameter** (Durchmesser), **Height** (Höhe) oder **Thickness** (Wandstärke) können später angepasst werden. Die **Installationsdose** gehört zur Klasse der [Arch-Komponenten](/Arch_Component/de "Arch Component/de") und erbt alle ihre Eigenschaften. Die **Installationsdose** besitzt vier Einlassöffnungen, die mit Anschlusskreuzen versehen sind. jedes Anschlusskreuz besitzt fünf Knoten, die zum Befestigen von bis zu fünf Leitungen in einer einzigen Öffnung dienen können.

Außerdem ist die Installatiosdose mit zwei einstellbaren Hilfsringen ausgestattet. Ihre Aufgaben ist es, temporäre Einrastpunkte bereitzustellen, während Adern mit [Draft-Edit](/Draft_Edit/de "Draft Edit/de") bearbeitet werden, um sie in die gewünschte Form zu bringen. Wenn sie nicht mehr gebraucht werden, können die Hilfsringe ausgeblendet werden, indem die Eigenschaft **Helper Rings Hidden** umgeschaltet wird. Temporär bedeutet, dass Hilfsringe nicht als Befestigungsstellen für die Knoten der Aderverläufe verwendet werde sollten.

Die Installationsdose, d.h. das **CableBox**-Objekt, kann eingefärbt werden, indem das gewünschte [Material](/Arch_SetMaterial/de "Arch SetMaterial/de") zur Eigenschaft **Material** hinzugefügt wird.

![](/images/Cables_CableBox_Example1.png)

Beispiel der Standard-Installationsdose:  
Dort sind sichtbare Hilfskreuze innerhalb der Löcher und Hilfsringe innerhalb der Installationsdose angebracht.

## Anwendung

1. Wahlweise einen Knoten oder einen Punkt auf einer Oberfläche oder einem Objekt [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Eine Installationsdose mit einer der folgenden Methoden erstellen:
   * Die Schaltfläche ![](/images/Cables_CableBox.svg) Cable Box drücken.
   * Den Menüeintrag **Cables → ![](/images/Cables_CableBox.svg) Cable Box** auswählen.
   * Ein Rechtsklick in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Cables → ![](/images/Cables_CableBox.svg) Cable Box** im Kontextmenü auswählen.

Einmal erzeugt, wird die Installationsdose an der Position des ausgewählten Knotens, Punkts oder Objekts im 3D-Raum (oder am Punkt (0,0,0), wenn nichts ausgewählt wurde), platziert.

## Hinweise

Hilfsringe sind standardmäßig sichtbar. Sie können leicht mit der Eigenschaft **Helper Rings Hidden** ausgeblendet werden.

## Eigenschaften

Ein **Installationsdose**-Objekt teilt die allgemeinen Eigenschaften und das Verhalten aller [Arch Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

Cable Box

* Daten**Box Body Hidden** (`Bool`): Wenn auf *true* gesetzt, wird die Form der Installationsdose ausgeblendet, damit die Leitungen innerhalb der Installationsdose (mit Hilfe der Hilfsringe) leichter bearbeitet werden können. Diese Eigenschaft sollte auf *false* gesetzt werden, wenn das Bearbeiten abgeschlossen ist, oder nicht benötigt wird.
* Daten**Diameter** (`Length`): Definiert den inneren Durchmesser der Installationsdose. Der Standard-Durchmesser ist 60 mm.
* Daten**Height** (`Length`): Definiert die innere Höhe der Installationsdose. Die Standard-Höhe ist 62 mm.
* Daten**Thickness** (`Length`): Definiert den inneren Durchmesser die Wandstärke der Installationsdose. Die Standard-Dicke ist 2 mm.

Cable Box Helpers

* Daten**Helper Rings Hidden** (`Bool`): Wenn auf *true* gesetzt, wird der Hilfsring ausgeblendet. Der Standardwert ist *false*. Hilfsringe sind dazu da, um Leitungen innerhalb einer Installationsdose leichter bearbeiten zu können. Knoten des Hilfsrings dienen als Fangpunkte für Leitungen, wenn Leitungen im [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de")-Modus bearbeitet werden. Diese Eigenschaft kann auf *true* gesetzt werden, wenn das Bearbeiten abgeschlossen ist, oder nicht benötigt wird.
* Daten**Ring 1 Diameter** (`Length`): der Durchmesser des ersten Hilfsrings. Der Standardwert ist 45 mm.
* Daten**Ring 1 Height** (`Length`): die Höhe des ersten Hilfsrings unterhalb des Deckels der Installationsdose (oben offene Kante der Box). Der Standardwert ist 40 mm.
* Daten**Ring 2 Diameter** (`Length`): der Durchmesser des zweiten Hilfsrings. Der Standardwert ist 30 mm.
* Daten**Ring 2 Height** (`Length`): die Höhe des zweiten Hilfsrings unterhalb des Deckels der Installationsdose (oben offene Kante der Box). Der Standardwert ist 20 mm.

## Typischer Arbeitsablauf

Dieser Arbeitsablauf zeigt, wie man eine Installationsdose mit einer angeschlossenen Leitung und einem im Inneren der Installationsdose geformten Leiter der Leitung baut.

1. Eine **Installationsdose** erstellen, wie unter [Anwendung](#Anwendung) beschrieben.
2. Eine **Leitung** erstellen, wie unter [Leitung, Anwendung](/Cables_Cable/de#Anwendung "Cables Cable/de") beschrieben, wobei ein Ende eines Leitungsverlaufs am mittleren Knoten eines Anschlusskreuzes der **Installationsdose** befestigt wird.
3. Die Form der **Leitung** in der [Baumansicht](/Tree_view/de "Tree view/de") ausblenden, z.B. durch Drücken der Leertaste. Die Adern sollten weiterhin sichtbar sein.
4. Die Form der **Installationsdose** ausblenden, indem die Eigenschaft **Box Body Hidden** umgeschaltet wird. Die Kreuze und Hilfsringe sollten weiterhin sichtbar sein.
5. Ein Klick auf das freie Ende einer Ader und daran einen Knoten hinzufügen mit [Knoten hinzufügen](/Cables_AddVertex/de "Cables AddVertex/de"). Diesen Vorgang wiederholen.
6. Ein Doppelklick auf die obige Ader in der [Baumansicht](/Tree_view/de "Tree view/de"), um in den [Draft-Edit](/Draft_Edit/de "Draft Edit/de")-Modus zu wechseln. [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de") sollte aktiviert sein.
7. Die neu erstellten Knoten der Aderverläufe auf unterschiedliche Punkte der Hilfsringe ziehen. Sie sollten einfach einrasten. Den [Draft-Edit](/Draft_Edit/de "Draft Edit/de")-Modus verlassen.
8. Wenn der gewünschte Aderverlauf hergestellt ist, kann die Eigenschaft **Sub Wires Fillet Radius** einer **Leitung** auf z.B. 4 mm eingestellt werden.
9. Die Form der **Leitung** in der [Baumansicht](/Tree_view/de "Tree view/de") einblenden, z.B. durch Drücken der Leertaste.
10. Die Hilfsringe ausblenden, indem die Eigenschaft **Helper Rings Hidden** der **Installationsdose** umgeschaltet wird.
11. Die Form der **Installationsdose** einblenden, indem die Eigenschaft **Box Body Hidden** umgeschaltet wird.

Hinweis: Während der Bearbeitung der Adern, kann der [Draft-Edit](/Draft_Edit/de "Draft Edit/de")-Modus jederzeit verlassen werden, um die Höhe oder den Durchmesser der Hilfsringe anzupassen. Danach kann wieder in den Draft-Edit-Modus gewechselt und die Bearbeitung mit den neuen Positionen der Hilfsringe fortgesetzt werden.

![](/images/Cables_CableBox_Example2_static.png)

Beispiel von geformten Leitern innerhalb einer Installationsdose.

[Hier](/Cables_Example3_CableBox "Cables Example3 CableBox") ist ein animiertes Bild, welches die oben beschrieben Schritte zeigt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableBox/de&oldid=1557630>"
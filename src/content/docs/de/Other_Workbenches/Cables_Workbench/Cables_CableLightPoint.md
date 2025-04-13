---
title: Cables Lichtauslass
---
|  |
| --- |
| Cables Lichtauslass |
| Menüeintrag |
| Leitungen → Lichtauslass erstellen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables Leitung](/Cables_Cable/de "Cables Cable/de"), [Cables Installationsdose](/Cables_CableBox/de "Cables CableBox/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_CableLightPoint.svg) Cables Lichtauslass erzeugt ein parametrisches Lichtauslass-Objekt. Der Lichtauslass ist ein einfacher Ring, der den Punkt darstellt, an dem ein Kabel ist, welches bspw. aus der Wand ragt, um eine Lichtquelle zu verbinden (bspw. eine Lampe). Es wird mit einer Standardgröße erzeugt, aber einige Parameter, bspw. **Diameter**, **Height** oder **Thickness** können nachträglich geändert werden. Der **Lichtauslass** gehört zur Klasse [Arch Komponente](/Arch_Component/de "Arch Component/de") und erbt all ihre Eigenschaften. Der **Lichtauslass** zwei Befestigungspunkte (je ein Punkt auf jeder Seite des Lochs), die als Befestigungspunkte für ein Kabel dienen, dass durch den Ring geführt wird.

Die Befestigungspunkte sind standardmäßig kaum sichtbar, aber dies kann durch Erhöhen der Ansichtseigenschaft **Point Size** geändert werden.

Das **Lichtauslass**-Objekt kann eingefärbt werden, indem das gewünschte [Material](/Arch_SetMaterial/de "Arch SetMaterial/de") zur **Material**-Eigenschaft hinzugefügt wird.

![](/images/Cables_CableLightPoint_Example1.png)

Beispiel des Standard-Lichtauslasses:  
Es sind Befestigungspunkte ober- und unterhalb des Rings vorhanden.

## Anwendung

1. Wähle den Knoten, den Punkt auf der Fläche oder ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") oder nichts.
2. Erstelle einen Lichtauslass mittels einer dieser Methoden:
   * Drücke den Knopf ![](/images/Cables_CableLightPoint.svg) [Lichtauslass erstellen](/Cables_CableLightPoint "Cables CableLightPoint").
   * Wähle den Befehl **Cables → ![](/images/Cables_CableLightPoint.svg) Lichtauslass erstellen** aus dem Menü.
   * Rechts-Klick in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view "3D view") und wähle die Option **Cables → ![](/images/Cables_CableLightPoint.svg) Lichtauslass erstellen** aus dem Kontext-Menü.

Einmal erzeugt, wird der Lichtauslass an der Position des ausgewählten Knotens, Punkts oder Objekts im 3D-Raum (oder am Punkt (0,0,0), wenn nichts ausgewählt wurde), platziert.

## Hinweise

Befestigungspunkte sind immer sichtbar. Die Sichtbarkeit kann verbessert werden, indem die **Punktgröße**-Ansichts-Eigenschaft vergrößert wird.

## Eigenschaften

Ein **Lichtauslass**-Objekt teilt die allgemeinen Eigenschaften und das Verhalten aller [Arch Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

Cable Light Point

* Daten**Diameter** (`Length`): Gibt den Außendurchmesser des Rings an. Der Standard-Durchmesser beträgt 20 mm.
* Daten**Height** (`Length`): Gibt die Höhe des Rings an. Die Standard-Höhe beträgt 5 mm.
* Daten**Thickness** (`Length`): Gibt die Dicke des Rings an. Die Standard-Dicke beträgt 2 mm.

## Typischer Arbeitsablauf

Ein **Lichtauslass** wird ähnlich erstellt, wie im  [Installationsdose Typischer Arbeitsablauf](/Cables_CableBox/de#Typical_workflow "Cables CableBox/de") oder  [KabelVerbinder Typischer Arbeitsablauf](/Cables_CableConnector/de#Typical_workflow "Cables CableConnector/de") beschrieben.

![](/images/Cables_CableLightPoint_Example2.png)

Beispiel eines Kabels, das in einem Lichtauslass endet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableLightPoint/de&oldid=1557638>"
---
title: Cables Leitungsverbindung
---
|  |
| --- |
| Cables Leitungsverbindung |
| Menüeintrag |
| Leitungen → Leitungsverbindung erstellen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables Leitungen](/Cables_Cable/de "Cables Cable/de"), [Cables Installationsdose](/Cables_CableBox/de "Cables CableBox/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_CableConnector.svg) Cables Leitungsverbindung erstellt ein parametrisches Leitungsverbindungs-Objekt. Der Leitungsverbinder ist ein Modell eines elektrisch leitendem Metallblocks (der Einfachheit halber ohne Isolation dargestellt). Aus elektrischer Perspektive, sind alle Einzelleitungen mit einem Verbinder eines elektrischen Knotens verbunden. Der Leitungsverbinder hat eine Standardgrößen, aber auch einige Eigenschaften, wie **Height**, **Hole**, **Hole Diameter** or **Number of Holes**, die später bearbeitet werden können. Der **Leitungsverbinder** gehört zur Klasse [Arch Komponente](/Arch_Component/de "Arch Component/de") und erbt all ihre Eigenschaften. Der **Leitungsverbinder** hat eine paarmetrisch definierte Anzahl an Löchern, ausgestattet mit Befestigungspunkten. Jedes Loch hat zwei Befestigungspunkte (ein Punkt auf jeder Seite des Lochs), welche als Befestigung für Leitungen durch das Loch dienen.

Die Befestigungspunkte sind standardmäßig kaum sichtbar, aber dies kann durch Erhöhen der Ansichts-Eigenschaft **Point Size** geändert werden.

Das **Leitungsverbindungs**-Objekt kann eingefärbt werden, indem das gewünschte [Material](/Arch_SetMaterial/de "Arch SetMaterial/de") zur **Material**-Eigenschaft hinzugefügt wird.

![](/images/Cables_CableConnector_Example1.png)

Beispiel des Standard-Leitungsverbinders:  
Es sind Befestigungspunkte ober- und unterhalb der Löcher vorhanden.

## Anwendung

1. Wähle einen Knoten, Punkt auf der Oberfläche oder Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") oder wähle nichts.
2. Erzeuge den Leitungsverbinder mit eine der folgenden Methoden:
   * Drücke den Knopf  ![](/images/Cables_CableConnector.svg) Leitungsverbinder.
   * Den Menüeintrag **Leitungen → ![](/images/Cables_CableConnector.svg) Leitungsverbinder** auswählen.
   * Ein Rechtsklick in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Leitungen → ![](/images/Cables_CableConnector.svg) Leitungsverbinder** im Kontextmenü auswählen.

Einmal erzeugt, wird die Leitungsverbindung an der Position des ausgewählten Knotens, Punkts oder Objekts im 3D-Raum (oder am Punkt (0,0,0), wenn nichts ausgewählt wurde), platziert.

## Hinweise

BefestigungsPunkte sind immer sichtbar. Die Sichtbarkeit kann verbessert werden, indem die **Punktgröße**-Ansichts-Eigenschaft vergrößert wird.

## Eigenschaften

Ein **Leitungsverbindungs**-Objekt teilt die allgemeinen Eigenschaften und das Verhalten aller [Arch Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

Cable Connector

* Daten**Height** (`Length`): Gibt die Höhe des Leitungsverbinders an. Die Standardhöhe ist 5 mm.
* Daten**Hole Size** (`Length`): Gibt die Fläche des Lochs in mm2 an. Die Standard-Lochfläche ist 2 mm2.
* Daten**Number of Holes** (`Integer`): Gibt die Anzahl der Löcher an. Standardmäßig sind 3 Löcher vorhanden.
* Daten**Thickness** (`Length`): Gibt die Dicke der Wand zwischen dem Loch und der Außenfläche des Leitungsverbinders an. Die Standarddicke ist 1 mm.

## Typischer Arbeitsablauf

Dieser Arbeitsablauf zeigt, wie eine Leitungsverbindung, eine Installationsdose und eine Leitung gebaut werden und wie eine Ader einer Leitung durch eines der Löcher geführt werden kann.

1. Erzeuge eine **Installationsdose** und eine mit ihr verbundene **Leitung** wie in [Installationsdose Typischer Arbeitsablauf](/Cables_CableBox/de#Typical_workflow "Cables CableBox/de") beschrieben.
2. Wähle die **Installationsdose** in der [Baumansicht](/Tree_view/de "Tree view/de") und erstelle einen **Leitungsverbinder** wie in [Benutzung](#Usage/de) beschrieben.
3. Verbinde den **Leitungsverbinder** mit der **Installationsdose** indem die Eigenschaften Attachment Support und Object's XY als Map Mode gesetzt werden.
4. Verschiebe den **Leitungsverbinder** an die gewünschte Position mit der Eigenschaft Position in der Attachment Offset Property.
5. Stelle sicher, dass die Eigenschaft **Sub Wires Fillet Radius** der **Leitung** auf 0 mm gesetzt ist.
6. Blende die Oberfläche der **Installationsdose** und **Leitung** in der [Baumansicht](/Tree_view/de "Tree view/de") z.B. durch Drücken der LEERTASTE aus. Die Leitungen sind weiterhin sichtbar.
7. Verbinde den Endpunkt der längsten Einzelleitung, erzeugt in Schritt 1 mit dem oberen Befestigungspunkt des ersten Lochs des **Leitungsverbinders**.
8. Den vorletzten Punkt derselben Einzelleitung am unteren Befestigungspunkt des Lochs des **Leitungsverbinders** befestigen.
9. Wenn die gewünschte Form des Einzelleitung hergestellt ist, kann die Eigenschaft **Sub Wires Fillet Radius** der **Leitung** auf bspw. 4mm gesetzt werden.
10. Blende die Oberfläche der **Leitung** und **Installationsdose** in der [Baumansicht](/Tree_view/de "Tree view/de") z.B. durch Drücken der Taste LEERTASTE wieder ein.

![](/images/Cables_CableConnector_Example2_static.png)

Beispiel einer durch das Loch einer Leitungsverbindung geführten Einzelleitung.

[Hier](/Cables_Example4_CableConnector "Cables Example4 CableConnector") ist ein animiertes Bild, welches die oben beschrieben Schritte zeigt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableConnector/de&oldid=1557682>"
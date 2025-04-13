---
title: Assembly VerankertUmschalten
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly VerankertUmschalten |
| Menüeintrag |
| Assembly → Festsetzen umschalten |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| G |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Assembly_ToggleGrounded.svg) Assembly VerankertUmschalten setzt Position und Ausrichtung einer Form im Bezug zu dem Koordinatensystem fest, zu dem sie gehört. (Die Form wird im Koordinatensystem verankert)

## Anwendung

1. Zwei oder mehr Bauteile auswählen.
2. Es gibt mehrere Möglichkeiten, dieses Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_ToggleGrounded.svg) [Festsetzen umschalten](/Assembly_ToggleGrounded "Assembly ToggleGrounded") drücken.
   * Den Menüeintrag **Assembly → ![](/images/Assembly_ToggleGrounded.svg) Festsetzen umschalten** auswählen.
   * Das Tastaturkürzel G.
3. Ein GroundedJoint-Objekt wird für jedes ausgewählte Bauteil hinzugefügt.

## Hinweise

* Ein GroundedJoint-Objekt wird in der 3D-Ansicht als rotes Schloss dargestellt, ungefähr am Schwerpunkt der verankerten Komponente. Zum Ausblenden des Schlosses, wird die Ansicht-Eigenschaft**Visibility** dieser Verbindung auf `false` umgeschaltet.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **GroundedJoint**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Ground

* Daten-Eigenschaft**Object To Ground** (`Link`): Das zu verankernde Objekt.
* Daten-Eigenschaft**Placement** (`Placement`): Dies gibt an, wo das Objekt verankert ist. Siehe [Positionierung](/Placement/de "Placement/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_ToggleGrounded/de&oldid=1550011>"
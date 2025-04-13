---
title: Assembly SpindelverbindungErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly SpindelverbindungErstellen |
| Menüeintrag |
| Assembly → Schraubverbindung erstellen |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| W |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Assembly_CreateJointScrew.svg) Assembly SpindelverbindungErstellen erstellt eine Spindelverbindung (wendelförmige Verbindung), die die Verschiebung eines Bauteils einer prismatischen Verbindung und die Drehung eines Bauteils einer Drehverbindung koppelt. In Verbindung mit den schon vorhandenen Verbindungen kann diese Verbindung zum Simulieren eines Spindelgetriebes eingesetzt werden.

## Anwendung

1. Wahlweise zwei geometrische Elemente zweier unterschiedlicher Formen auswählen, die vorher zum Festlegen einer prismatischen Verbindung (Slider joint) und einer Drehverbindung (Revolute joint) verwendet wurden.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_CreateJointScrew.svg) Spindelverbindung erstellen drücken.
   * Den Menüeintrag **Assembly → ![](/images/Assembly_CreateJointScrew.svg) Spindelverbindung erstellen** auswählen.
   * Das Tastaturkürzel W.
3. Der Dialog **Verbindung erstellen** wird im [Aufgaben-Fenster](/Task_panel/de "Task panel/de") geöffnet und zeigt eine Liste der vorausgewählten Elemente.
4. Für weiter Schritte siehe [Assembly StarreVerbindungErstellen](/Assembly_CreateJointFixed/de#Anwendung "Assembly CreateJointFixed/de").

## Hinweise

* Der Wert Pitch radius entspricht der Steigung (pitch) einer Spindel (Schraube). Er wird in der Daten-Eigenschaft**Distance** gespeichert und legt die Verschiebung pro eine Umdrehung der Spindel fest.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Screw**-Objekt ist von einem [App-FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Siehe [Assembly StarreVerbindungErstellen](/Assembly_CreateJointFixed/de#Eigenschaften "Assembly CreateJointFixed/de") für weitere Eigenschaften.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointScrew/de&oldid=1478842>"
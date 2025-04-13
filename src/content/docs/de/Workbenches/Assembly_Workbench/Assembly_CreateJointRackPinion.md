---
title: Assembly ZahnstangeRitzelVerbindungErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly ZahnstangeRitzelVerbindungErstellen |
| Menüeintrag |
| Assembly → Zahnstange-Ritzel-Verbindung erstellen |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| Q |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Assembly_CreateJointRackPinion.svg) Assembly ZahnstangeRitzelVerbindung erstellt eine Zahnstange-Ritzel-Verbindng, die die Verschiebung eines Bauteils einer prismatischen Verbindung und die Drehung eines Bauteils einer Drehverbindung koppelt.

## Anwendung

1. Wahlweise zwei geometrische Elemente zweier unterschiedlicher Bauteile auswählen, die vorher zum Festlegen einer prismatischen Verbindung (Slider joint) und einer Drehverbindung (Revolute joint) verwendet wurden.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_CreateJointRackPinion.svg) Zahnstange-Ritzel-Verbindung erstellen drücken.
   * Den Menüeintrag **Assembly → ![](/images/Assembly_CreateJointRackPinion.svg) Zahnstange-Ritzel-Verbindung erstellen** auswählen.
   * Das Tastaturkürzel Q.
3. Der Dialog **Verbindung erstellen** wird im [Aufgaben-Fenster](/Task_panel/de "Task panel/de") geöffnet und zeigt eine Liste der vorausgewählten Elemente.
4. Für weiter Schritte siehe [Assembly StarreVerbindungErstellen](/Assembly_CreateJointFixed/de#Anwendung "Assembly CreateJointFixed/de").

## Hinweise

* Pitch radius bezieht sich auf den Teilkreis des Ritzels. Er wird in der Daten-Eigenschaft**Distance** gespeichert und ist die Grundlage zum Berechnen des Verhältnisses von Drehung zu Verschiebung.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **RackPinion**-Objekt ist von einem [App-FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Siehe [Assembly StarreVerbindungErstellen](/Assembly_CreateJointFixed/de#Eigenschaften "Assembly CreateJointFixed/de") für weitere Eigenschaften.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointRackPinion/de&oldid=1479041>"
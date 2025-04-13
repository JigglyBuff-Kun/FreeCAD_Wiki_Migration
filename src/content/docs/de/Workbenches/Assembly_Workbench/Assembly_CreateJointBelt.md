---
title: Assembly RiemenverbindungErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly RiemenverbindungErstellen |
| Menüeintrag |
| Assembly → Zahnrad-/Riemenverbindung erstellen → Riemenverbindung erstellen |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Assembly_CreateJointBelt.svg) Assembly RiemenverbindungErstellen erstellt eine Riemenverbindung, die die Drehungen zweier Bauteile aus unterschiedlichen Drehverbindungen koppelt. In Verbindung mit den schon vorhandenen Verbindungen kann diese Kopplung zum Simulieren von Riemenantrieben, Steuerriemen- Steuerkettengetrieben usw. eingesetzt werden.

## Anwendung

1. Wahlweise zwei geometrische Elemente zweier unterschiedlicher Bauteile auswählen, die vorher zum Festlegen zweier Drehverbindungen (Revolute joints) verwendet wurden.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_CreateJointBelt.svg) Riemenverbindung erstellen drücken.
   * Den Menüeintrag **Assembly → Zahnrad-/Riemenverbindung erstellen → ![](/images/Assembly_CreateJointBelt.svg) Riemenverbindung erstellen** auswählen.
3. Der Dialog **Verbindung erstellen** wird im [Aufgaben-Fenster](/Task_panel/de "Task panel/de") geöffnet und zeigt eine Liste der vorausgewählten Elemente.
4. Für weiter Schritte siehe [Assembly StarreVerbindungErstellen](/Assembly_CreateJointFixed/de#Anwendung "Assembly CreateJointFixed/de").

## Hinweise

* Radius1 und Radius2 beziehen sich auf den Teilkreis von Zahnriemenscheiben oder den Außendurchmesser von Riemenscheiben. Ihre Werte werden in Daten-Eigenschaft**Distance** und Daten-Eigenschaft**Distance2** gespeichert und legen das Verhältnis zwischen den beiden Drehungen fest.
* Verwendet man denselben Wert für beide Radien, können damit die beiden Enden einer flexiblen Welle verbunden werden (wenn die Drehrichtung nicht passt, kann entweder eine [Drehverbindung](/Assembly_CreateJointRevolute/de "Assembly CreateJointRevolute/de") umgekehrt werden oder man verwendet die [Zahnradverbindung](/Assembly_CreateJointGears/de "Assembly CreateJointGears/de") statt dieser).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Belt**-Objekt ist von einem [App-FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Siehe [Assembly StarreVerbindungErstellen](/Assembly_CreateJointFixed/de#Eigenschaften "Assembly CreateJointFixed/de") für weitere Eigenschaften.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointBelt/de&oldid=1478838>"
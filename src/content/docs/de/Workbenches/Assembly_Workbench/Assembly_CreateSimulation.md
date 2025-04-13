---
title: Assembly SimulationErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly SimulationErstellen |
| Menüeintrag |
| Assembly → Simulation erstellen |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| S |
| Eingeführt in Version |
| 1.1 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Assembly_CreateSimulation.svg) SimulationErstellen: Erstellt eine Bewegungssimulation der aktuellen Baugruppe.

## Anwendung

1. Sicherstellen, dass eine Baugruppe (Assembly-Objekt) aktiv ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_CreateSimulation.svg) [Simulation erstellen](/Assembly_CreateSimulation "Assembly CreateSimulation") drücken.
   * Den Menüeintrag **Assembly → ![](/images/Assembly_CreateSimulation.svg) Simulation erstellen** auswählen.
   * Das Tastaturkürzel S.
3. Wenn noch keine Simulationen vorhanden sind: Ein Simulations-Behälter (Simulations-Objekt) wird dem aktiven Assembly-Objekt hinzugefügt.
4. Eine Simulation (Simulation-Objekt) wird dem Simulations-Behälter hinzugefügt.
5. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Simulationerstellen** wird geöffnet.
6. Eine Bewegung (Motion-Objekt) hinzufügen:
   * Die grüne Plus-Schaltfläche drücken, um ein Dialogfenster zu öffnen.
   * Eine Verbindung (ein Gelenk) in der Liste auswählen.
   * Wenn erforderlich, eine Bewegungsart auswählen
   * Wahlweise die Formel bearbeiten.
   * Die Schaltfläche OK drücken, um das Dialogfenster schließen.
   * Eine neue Bewegung wird zur Liste hinzugefügt.
   * Wahlweise wiederholen, um eine weitere Bewegung zu erstellen.
7. Wahlweise die Einstellungen der Simulation anpassen.
8. Die Schaltfläche Generate drücken.
9. Ein Abschnitt **Animation Player** wird im Aufgaben-Fenster hinuzgefügt.
   * Die Steuerungs-Widgets verwenden, um die Baugruppe zu animieren.
10. Die Schaltfläche OK drücken, um das Werkzeug zu beenden und das Aufgaben-Fenster zu schließen.

### Aufgaben-Fenster

Wenn das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Simulation erstellen** das erste mal geöffnet wird, ist die Liste **Bewegungen** und die **Animationsspieler** ist ausgeblendet.

Ein vorhandenes Simulation-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken, um das Aufgaben-Fenster erneut zu öffnen und die Parameter zu bearbeiten.

![](/images/Assembly_CreateSimulation-Task.png)

* **Motions** (Bewegungen): Listet den Inhalt der Eigenschat **Group** auf, also die Motion-Objekte im Behälter Simulations.
  + Die Schaltfläche ![](/images/List-add.svg): Öffnet ein (namenloses) Dialogfenster, um eine Bewegung (Motion-Objekt) zur Eigenschaft **Group** hinzuzufügen und die Liste zu aktualisieren.
  + Die Schaltfläche ![](/images/Edit-delete.svg): Entfernt eine Bewegung aus der Eigenschaft **Group** und aktualisiert die Liste.
* **Simulation settings** (Einstellungen der Simulation): legen die Eigenschaften des Objekts Simulation fest.
  + **Start**: Eingabe für die Eigenschaft **a Time Start**.
  + **End**: Eingabe für die Eigenschaft **b Time End**.
  + **Step** (Schrittweite): Eingabe für die Eigenschaft **c Time Step Output**.
  + **Tolerance**: Eingabe für die Eigenschaft **f Global Error Tolerance**.
* Die Schaltfläche Generate: Berechnet die aufgelisteten Bewegungen und fügt dem Aufgaben-Fenster den Abschnitt **Animation player** hinzu.
* **Animation player** (Bewegungssteuerung): Steuert die Positionen der Bauelemente der Baugruppe entsprechend dem aktuellen "Frame".
  + Schieberegler **Frame** (Zeitpunkt): Bestimmt den aktuellen Frame; beeinflusst keine der Eigenschaften.
  + **Frames Per Second**: Eingabe für die Eigenschaft **j Frames Per Second**, die der Geschwindigkeit der Animation entspricht.
  + Steuerungsknöpfe: Bestimmen den Ablauf der Animation; von links nach rechts:

    :   Schritt zurück, Ablauf rückwärts, Stop, Ablauf vorwärts, Schritt voran

### Dialog Bewegung erstellen

In diesem Dialogfenster wird eine Bewegung (Motion-Objekt) erstellt, die als Antrieb (Aktuator) für einen einzelnen Freiheitsgrad (DOF) eines bestimmten Gelenks wirkt und seine Eigenschaften festgelegt.

![](/images/Assembly_CreateSimulation-Motion.png)

Der zusätzliche Hilfetext wird eingeblendet, wenn die Schaltfläche Hilfe gedrückt wird.  
(Das Aussehen der OK-Schaltfläche kann ignoriert werden, sie ist aktiv und funktioniert)

* **Joint** (Verbindung): Zeigt eine Liste aller Verbindungen (Gelenke) in der aktiven Baugruppe an, für die Eingabe der Eigenschaft **Joint**.
* **Motion Type** (Art der Bewegung): Zeigt eine Liste der in der ausgewählten Verbindung vorhandenen Freiheitsgrade an, für die Eingabe der Eigenschaft **Motion Type**.

  :   (Wir können beispielsweise für eine zylindrische Verbindung zwischen `Angular` und `Linear` auswählen)
* **Formula**: Eingabe für die Eigenschaft **Formula**.
* Die Schaltflächen Hilfe und Hilfe ausblenden: Schalten die Sichtbarkeit des Hilfetextes zu den Formeln ein bzw. aus.

## Hinweise

* Die Anzahl der aufgezeichneten Zustände (number of frames) ist die Differenz der Werte **Start** und **End** geteilt durch den Wert **Step**. (alle in Sekunden eingegeben ergeben Ganzzahl ohne Einheit) Für den Standardwert ist es: (1.0 s - 0.0 s) / 0.01 s = 100
* Um eine komplette Umdrehung für eine Drehbewegung zu erreichen, gibt es zwei Möglichkeiten:
  + `2 * pi * time` im Eingabefeld Formula eingeben und eine Dauer (End-Wert - Start-Wert) von einer Sekunde unter Simulation settings im Aufgaben-Fenster.
  + `1 * time` im Eingabefeld Formula eingeben und eine Dauer (End-Wert - Start-Wert) von (2 \* pi =) 6,283 Sekunden unter Simulation settings im Aufgaben-Fenster.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

### Simulations

Ein **Simulations**-Behälter ist ein `Assembly::SimulationGroup`-Objekt, das von einem [App DocumentObjectGroup](/App_DocumentObjectGroup/de "App DocumentObjectGroup/de")-Objekt abgeleitet wird und alle seine Eigenschaften erbt. Es besitzt keine weiteren Eigenschaften.

### Simulation

Ein **Simulation**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

#### Daten

Basis

* Daten**Group** (`LinkList`): Die Bewegungen (Motion-Objekte) des Objekts.
* Daten (hidden)**\_ Group Touched** (`Bool`):

Simulation

* Daten**a Time Start** (`Time`): Standardwert `0.0 s`. Startzeit der Simulation.
* Daten**b Time End** (`Time`): Standardwert `1.0 s`. Endzeit der Simulation.
* Daten**c Time Step Output** (`Time`): Standardwert `0.01 s`. Dauer eines Simulationsschrittes für die Ausgabe.
* Daten**f Global Error Tolerance** (`Float`): Standardwert s `1e-06`. Integration der globalen Fehler-Toleranz.
* Daten**j Frames Per Second** (`Integer`): Standardwert `30`. Bildrate in Bilder pro Sekunde.

### Ansicht

Space

* Ansicht**Decimals** (`Integer`): Standardwert `9`. Die Anzahl der Nachkomma, die für berechnete Texte verwendet wird.

### Bewegung

Ein **Motion**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

#### Daten

Motion

* Daten**Formula** (`String`): Die Formel für die Bewegung. Zum Beispiel `1.0*time`.
* Daten**Joint** (`XLinkSubHidden`): Die Verbindung (Gelenk), das mit der Bewegung angetrieben wird.
* Daten**Motion Type** (`Enumeration`): Die Art der Bewegung. Die Optionen sind: `Angular` (Drehung) und `Linear` (Verschiebung).

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateSimulation/de&oldid=1559520>"
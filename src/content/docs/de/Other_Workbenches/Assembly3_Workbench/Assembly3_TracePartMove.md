---
title: Assembly3 BewegungAufzeichnen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 BewegungAufzeichnen |
| Menüeintrag |
| Assembly3 → Trace part move |
| Arbeitsbereich |
| [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Assembly_Trace.svg) Bewegung aufzeichnen verfolgt einen einzelnen Punkt eines kinematischen Zusammenbaus, wenn eines der zusammengebauten Objekte mit einem der Werkzeuge ![](/images/Assembly_Move.svg) [TeilBewegen](/Assembly3_MovePart/de "Assembly3 MovePart/de") oder ![](/images/Assembly_AxialMove.svg) [AxialBewegen](/Assembly3_AxialMove/de "Assembly3 AxialMove/de") bewegt wird.

## Anwendung

1. Wahlweise einen Linienzug-Objekt auswählen:
   * Einen Punkt, der selbst verfolgt wird.
   * Eine Kante oder Fläche, um den Mittelpunkt ihrer Form zu verfolgen.
2. Den Befehl ![](/images/Assembly_Trace.svg) **Bewegung aufzeichnen** aktivieren durch:
   * Die Schaltfläche ![](/images/Assembly_Trace.svg) Bewegung aufzeichnen.
   * Den Menüeintrag **Assembly3 → ![](/images/Assembly_Trace.svg) Bewegung aufzeichnen**.
3. Ein Objekt des Zusammenbaus auswählen und mit einem der Folgenden bewegen:
   * Dem Werkzeug ![](/images/Assembly_Move.svg) [Teil bewegen](/Assembly3_MovePart/de "Assembly3 MovePart/de").
   * Dem Werkzeug ![](/images/Assembly_AxialMove.svg) [Axial bewegen](/Assembly3_AxialMove "Assembly3 AxialMove").
4. Die esc-Taste oder die Schaltfläche OK drücken (nur Axial bewegen) um die Verfolgung zu beenden.
5. Jetzt sieht man ein AsmTrace-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de").

## Hinweise

* Wenn man im ersten Schritt keine Form auswählt, wird die Form verfolgt, die im dritten Schritt ausgewählt wurde.
* Um das zu verfolgende Element zu wechseln, muss man dieses Werkzeug deaktivieren, bevor ein neues Element ausgewählt wird und danach wieder aktivieren.
* Wenn man die Bewegung mit einem anderen Werkzeug steuern möchte wie z.B. der [Kinematiksteuerung](/Tutorial_KinematicController/de "Tutorial KinematicController/de"), das den parallelen Einsatz eines Bewegungswerkzeugs erlaubt, könnte man dieses Werkzeug benutzen, um den Zusammenbau Schritt für Schritt zu verändern und das Bewegungswerkzeug, um für jeden Schritt einen Punkt und eine Verbindungslinie zu erstellen. Es ist möglich das Bewegungswerkzeug als Auslöser zu benutzen, indem man auf einen der Pfeile klickt und ihn etwas zieht - nur ein winziges bisschen, bis der nächste Punkt mit Linie erscheint (bei Bedarf Transparenz verwenden).

:   (Ich hoffe hierfür findet sich zukünftig noch eine etwas elegantere Lösung)

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_TracePartMove/de&oldid=1177155>"
---
title: Part Verrundung
---

|                                                 |
| ----------------------------------------------- |
| Part Verrundung                                 |
| Menüeintrag                                     |
| Part → Abrunden...                              |
| Arbeitsbereich                                  |
| [Part](/Part_Workbench/de "Part Workbench/de")  |
| Standardtastenkürzel                            |
| _Keiner_                                        |
| Eingeführt in Version                           |
| -                                               |
| Siehe auch                                      |
| [Part Fase](/Part_Chamfer/de "Part Chamfer/de") |
|                                                 |

## Beschreibung

Das Werkzeug **Part Verrundung** erstellt Verrundungen auf den ausgewählten Kanten einer Form. Ein Dialog ermöglicht die Auswahl der Form und der Kanten, die bearbeitet werden.

## Anwendung

- Das Werkzeug wird aus der Part-Werkzeugleiste oder aus dem Menü **Part → Abrunden...** aufgerufen. Es ist möglich, die Form vor oder nach Aufruf des Werkzeugs auszuwählen (siehe Hinweis unten)
- Wenn die Form nicht vor Aufruf des Werkzeugs ausgewählt wurde, wird sie in der Form-Ausklappliste im [Aufgaben-Dialog](/Task_panel/de "Task panel/de") ausgewählt.
- Den "Typ der Ausrundung" auswählen, entweder Konstanter Radius (standard) oder Variabler Radius.
- Die Kanten entweder in der [3D-Ansicht](/3D_view/de "3D view/de") oder in der Kantenliste im [Aufgaben-Dialog](/Task_panel/de "Task panel/de") auswählen.
- Den Wert des Radius eingeben.
- OK zum Bestätigen drücken.

![](/images/Dialog-fillet.png)

## Part Verrundung im Vergleich mit PartDesign Verrundung

## Part Verrundung VS. PartDesign Verrundung

Es gibt ein weiteres Verrundungswerkzeug im Arbeitsbereich ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"). Bitte beachten, dass ihre Bedienung recht unterschiedlich ist. Siehe Referenzseite zu ![](/images/PartDesign_Fillet.svg) [PartDesign Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de") für weitere Einzelheiten zu ihren Unterschieden.

## Hinweise zur Anwendung von Part Verrundung

Part Verrundung bewirkt möglicherweise nichts, wenn das Ergebnis die nächste angrenzende Kante berühren oder überqueren würde. Wenn also nicht das erwartete Ergebnis erscheint, kann man es mit einem kleineren Radius versuchen.
Dies gilt auch für ![](/images/Part_Chamfer.svg) [Part Fase](/Part_Chamfer/de "Part Chamfer/de").

Das Verrundungswerkzeug schlägt manchmal fehl, wenn versucht wird, komplexe Objekte zu verrunden. Eine gängige Ursache dafür kann sein, dass die zu verrundende Form nicht geometrisch korrekt ist. Dies kann darauf zurückzuführen sein, dass Linien/Ebenen usw. nicht nach früheren Operationen zur Konstruktion der Form entfernt wurden (z.B. Schneiden/Überschneidung/Fügen). Eine Reihe von Schritten kann genutzt werden, um Probleme zu minimieren:

- Wenn möglich, lasse das Verrunden eines Teils, bis das Teil vollständig erzeugt ist. Dies minimiert die Wechselwirkung von Verrundungen mit nachfolgenden booleschen Operationen;
- Verwende die **Part → Gemetrie überprüfen**, um auf Fehler in der Formgeometrie zu prüfen und zu korrigieren;
- Verwende **Part → Kopie erstellen → Form aufbereiten**, um Artefakte zu entfernen, die durch frühere boolesche Operationen vor dem Verrundungsvorgang (und in einigen Fällen zwischen den Verrundungsvorgängen in Folge) verursacht wurden;
- Erwäge die Verwendung von **Bearbeiten → Einstellungen → PartDesign**, um die automatische Überprüfung und Verfeinerung des Modells nach booleschen und skizzenbasierten Operationen zu ermöglichen (die Leistung kann beeinträchtigt werden, wenn diese Optionen eingeschaltet bleiben).

Das Werkzeug Verrundung ist von dem Problem der topologischen Benennung betroffen, wenn die Änderung an einem Modellierungsschritt vorgenommen wird, der früher in der Prozesskette liegt und die Anzahl der Flächen oder Eckpunkte beeinflusst. Dies kann zu unvorhersehbaren Ergebnissen führen. Bis dieses Problem gelöst ist, wird empfohlen Fasen und Verrundungen als letzte Schritte in der Modellierungskette anzuwenden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fillet/de&oldid=1518850>"

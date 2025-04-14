---
title: Part Vereinigung
---

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Vereinigung                                                                                                                                                  |
| Menüeintrag                                                                                                                                                       |
| Formteil → Boolesche Operation → Vereinigung                                                                                                                      |
| Arbeitsbereich                                                                                                                                                    |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                    |
| Standardtastenkürzel                                                                                                                                              |
| _Keiner_                                                                                                                                                          |
| Eingeführt in Version                                                                                                                                             |
| -                                                                                                                                                                 |
| Siehe auch                                                                                                                                                        |
| [Part Boolesche Operationen](/Part_Boolean/de "Part Boolean/de"), [Part Differenz](/Part_Cut/de "Part Cut/de"), [Part Schnitt](/Part_Common/de "Part Common/de"), |
|                                                                                                                                                                   |

## Beschreibung

Das Werkzeug ![](/images/Part_Fuse.svg) Part Vereinigung vereinigt ausgewählte Part-Objekte zu einem. Diese Operation ist voll parametrisch und die Komponenten können geändert und das Ergebnis erneut berechnet werden.

**Hinweis:** Dieser Befehl ist eine automatisierte Form von ![](/images/Part_Boolean.svg) [Boolesche Operationen](/Part_Boolean/de "Part Boolean/de").

## Anwendung

1. Wähle zwei oder mehr Formen
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Drücke die ![](/images/Part_Fuse.svg) Part Vereinigung Schaltfläche in der **Part Werkzeuge** Werkzeugleiste
   - Verwende den **Formteil → Boolesche Operation → Vereinigung** Eintrag im Part Menü

## Unterstützte Eingaben

Eingabeobjekte müssen [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de")-Formen sein. Beispiele: Dinge, die mit den Arbeitsbereichen Part, PartDesign, Skizzierer erstellt wurden. Keine Polygonnetze (es sei denn, diese wurden in Formen konvertiert) - für Polygonnetze gibt es gesonderte boolesche Werkzeuge im Arbeitsbereich MeshDesign.

- Festkörper + Festkörper: das Ergebnis ist ein Festkörper, der das gesamte von den Eingaben abgedeckte Volumen einnimmt

- Hülle + Hülle, Hülle + Fläche, Fläche + Fläche: Das Ergebnis ist eine Hülle. Wo sich Flächen kreuzen, werden sie geteilt. Hüllen können nicht-vielfältig sein. Nach der Verschmelzung können Flächen durch das Ergebnis [Verfeinerung](/Part_RefineShape/de "Part RefineShape/de") vereinigt werden.

- Linienzug + Linienzug, Kante + Linienzug, Kante + Kante: Das Ergebnis ist ein Linienzug. Kanten werden geteilt, wo sie sich kreuzen.

Verbunde werden unterstützt; es wird jedoch davon ausgegangen, dass sich in einen Verbund gepackte Formen nicht berühren oder kreuzen. Wenn sie es tatsächlich tun, wird die Verschmelzung wahrscheinlich fehlschlagen oder ein falsches Ergebnis liefern.

## Optionen

Elemente können einer Vereinigung hinzugefügt und von ihr entfernt werden, indem sie mit der Maus in der Baumansicht in das Vereinigungsobjekt hinein oder aus ihm heraus gezogen werden. Um Elemente aus einer Vereinigung herauszuziehen, müssen sie auf dem Dokument-Knoten (dem Dateinamen) des Modells abgelegt werden. Eine manuelle Neuberechnung (Taste F5 oder auf die Schaltfläche ![](/images/Std_Refresh.svg) [Aktualisieren](/Std_Refresh/de "Std Refresh/de") drücken) ist erforderlich, um die Ergebnisse zu sehen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fuse/de&oldid=1466672>"

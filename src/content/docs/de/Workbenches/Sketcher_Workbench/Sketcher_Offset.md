---
title: Sketcher Versatzkontur
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher Versatzkontur                                     |
| Menüeintrag                                                |
| Skizze → Sketcher-Werkzeuge → Versatzkontur                |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| Z T                                                        |
| Eingeführt in Version                                      |
| 1.0                                                        |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_Offset.svg) Sketcher Versatzkontur erstellt eine äquidistante Kante (Versatzkontur) um ausgewählte Kanten herum.

![](/src/assets/images/Sketcher_OffsetExample.png)

Äquidistante Kanten um eine geschlossene (O) und eine offene (U) Hilfsgeometrie-Polylinie

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Dim-OVP = Dimensional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur maßlichen Festlegung).

1. Eine oder mehrere Linien, Kreise und/oder Kreisbögen auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_Offset.svg) Versatzkontur drücken.
   - Den Menüeintrag **Skizze → Sketcher Werkzeuge → ![](/src/assets/images/Sketcher_Offset.svg) Versatzkontur** auswählen.
   - Ein Rechtsklick in der [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_Offset.svg) Versatzkontur** im Kontextmenü auswählen.
   - Das Tastaturkürzel Z then T.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Der Abschnitt **Versatzparameter** wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") hinzugefügt.
5. Wahlweise die U-Taste drücken oder die CheckBox **Originalgeometrien löschen** aktivieren, um nur den neuen Umriss zu behalten.
6. Wahlweise die J-Taste drücken oder die CheckBox **Offset-Randbedingung hinzufügen** aktivieren, um eine maßliche Randbedingung zwischen dem versetzten Umriss und der originalen Geometrie hinzuzufügen.
7. Wahlweise die M-Taste drücken oder in der Ausklappliste des Abschnitts Versatzparameter den Werkzeugmodus auswählen:
   - ![](/src/assets/images/Sketcher_OffsetArc.svg) **Kreisbogen**
   - ![](/src/assets/images/Sketcher_OffsetIntersection.svg) **Schnitt**
8. Einen Punkt auswählen, um den Versatzabstand festzulegen. Oder mit Dim-OVP: diesen Abstand eingeben.
9. Die Geometrie wird erstellt und wenn **Offset-Randbedingung hinzufügen** aktiviert ist, wird eine maßliche Randbedingung hinzugefügt.

## Einschränkungen

Dieses Tool hat bestimmte Einschränkungen, die hauptsächlich auf [OCC](/OpenCASCADE/de "OpenCASCADE/de")-Probleme zurückzuführen sind:

- Die folgenden Geometrie-Typen werden aktuell nicht unterstützt: Ellipsen, B-Splines, Hyperbeln und Parabeln.
- Versetzen einer einzelnen Linie kann unerwartete Ergebnisse erzeugen.
- Offene Profile werden auf beide Seiten versetzt, um eine geschlossene Kontur zu erzeugen.
- Externe Geometrie kann nicht direkt versetzt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Offset/de&oldid=1544844>"

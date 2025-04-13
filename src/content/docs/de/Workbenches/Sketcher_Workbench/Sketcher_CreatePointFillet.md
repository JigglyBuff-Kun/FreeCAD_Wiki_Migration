---
title: Sketcher PunktVerrundungErstellen
---

:::caution
Dieses Werkzeug ist veraltet; es wird in1.0 und neuernicht mehr zur Verfügung stehen. Stattdessen kannSketcher VerrundungErstellenverwendet werden.
:::

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| Sketcher PunktVerrundungErstellen                                                    |
| Menüeintrag                                                                          |
| Sketch → Skizzengeometrien → Eckenerhaltende Verrundung erstellen                    |
| Arbeitsbereich                                                                       |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                           |
| Standardtastenkürzel                                                                 |
| G F P                                                                                |
| Eingeführt in Version                                                                |
| 0.19                                                                                 |
| Siehe auch                                                                           |
| [Sketcher VerrundungErstellen](/Sketcher_CreateFillet/de "Sketcher CreateFillet/de") |
|                                                                                      |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_CreatePointFillet.svg) Sketcher PunktVerrundungErstellen erstellt einen Bogen zwischen zwei nicht parallelen Kanten. Werden zwei gerade Kanten verrundet, die mit einer Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") verbunden sind, bleibt der dazugehörige gemeinsame Punkt erhalten, indem ein [Punktobjekt](/Sketcher_CreatePoint/de "Sketcher CreatePoint/de") hinzugefügt wird, das jeweils durch die Randbedingung [PunktAufObjektFestlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") mit beiden Kanten verbunden ist. Randbedingungen, die mit dem gemeinsamen Punkt verbunden waren, werden auf den neuen Punkt übertragen. Davon abgesehen, ist das Werkzeug indentisch mit dem Werkzeug [Verrundung erstellen](/Sketcher_CreateFillet "Sketcher CreateFillet"). Siehe dort für weitere Informationen.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Drücken Sie die ![](/src/assets/images/Sketcher_CreatePointFillet.svg) [PunktVerrundungErstellen](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet") Schaltfläche.
   - Wählen Sie den **Sketcher → Sketcher-Geometrien → ![](/src/assets/images/Sketcher_CreatePointFillet.svg) PunktVerrundungErstellen** aus dem Menü.
   - Klicken Sie mit der rechten Maustaste in die [3D-Ansicht](/3D_view "3D view") und wählen Sie den **![](/src/assets/images/Sketcher_CreatePointFillet.svg) PunktVerrundungErstellen** aus dem Kontextmenü.
   - Verwenden Sie das Tastaturkürzel: G dann F, dann P.
2. Für weitere Schritte siehe [Sketcher CreateFillet](/Sketcher_CreateFillet#Usage "Sketcher CreateFillet").

## Hinweise

Siehe [Sketcher VerrundungErstellen](/Sketcher_CreateFillet/de#Hinweise "Sketcher CreateFillet/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreatePointFillet/de&oldid=1464648>"

---
title: Draft Einrasten
---

## Beschreibung

In den Arbeitsbereichen ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de") und ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/de "BIM Workbench/de") kann Geometrie erstellt werden durch Auswählen von Punkten in der [3D-Ansicht](/3D_view/de "3D view/de") oder durch Eingabe von Koordinaten im [Aufgaben-Bereichl](/Task_panel/de "Task panel/de") der Befehle. Eine Weitere Möglichkeit Punkte auszuwählen ist durch Einrasten (Fangen). Einrasten erlaubt, exakte geometrische Punkte auf dem Raster auszuwählen, Punkte auf anderen Objekten, die auf dem Raster liegen oder Punkte, die durch diese Objekte festgelegt werden. Es kann z.B. auf dem Endpunkt einer Linie, dem Mittelpunkt eines Kreises oder dem Schnittpunkt zweier Kanten eingerastet werden.

Das Einrasten steht den meisten Befehlen der Arbeitsbereiche [Draft](/Draft_Workbench/de "Draft Workbench/de") und [BIM](/BIM_Workbench/de "BIM Workbench/de") zur Verfügung.

![](/images/Draft_Snap_Endpoint_example.png)

Einrasten auf dem Endpunkt einer Kante

## Einrast-Werkzeuge

Diese Werkzeuge sind in der Symbolleiste Draft-Einrasten und im [Draft-Widget Einrasten](/Draft_snap_widget "Draft snap widget") vorhanden.

Man beachte, dass kreisförmige Kanten keine Vollkreise sein müssen.

- ![](/images/Draft_Snap_Lock.svg) [EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de"): aktiviert oder deaktiviert Einrasten global.

- ![](/images/Draft_Snap_Endpoint.svg) [EinrastenAufEndpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de"): rastet auf Endpunkten von Kanten ein.

- ![](/images/Draft_Snap_Midpoint.svg) [EinrastenAufMittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de"): rastet auf Mittelpunkten von Kanten ein.

- ![](/images/Draft_Snap_Center.svg) [EinrastenAufZentrum](/Draft_Snap_Center/de "Draft Snap Center/de"): Rastet auf Mittelpunkten von Flächen oder kreisförmigen Kanten ein sowie auf den Punkten der Daten-Eigenschaft**Placement** von [Draft-Arbeitsebenen-Proxies](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") und [Arch-Gebäudeteilen](/Arch_BuildingPart/de "Arch BuildingPart/de").

- ![](/images/Draft_Snap_Angle.svg) [EinrastenAufWinkel](/Draft_Snap_Angle/de "Draft Snap Angle/de"): rastet auf bestimmten Hauptpunkten von kreisförmigen Kanten ein; auf Vielfachen von 30° und 45°.

- ![](/images/Draft_Snap_Intersection.svg) [EinrastenAufSchnittpunkt](/Draft_Snap_Intersection/de "Draft Snap Intersection/de"): rastet auf den Schnittpunkt zweier Kanten ein.

- ![](/images/Draft_Snap_Perpendicular.svg) [EinrastenSenkrecht](/Draft_Snap_Perpendicular/de "Draft Snap Perpendicular/de"): rastet auf senkrechten Punkten auf Flächen ein ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) und auf Kanten.

- ![](/images/Draft_Snap_Extension.svg) [EinrastenAufVerlängerung](/Draft_Snap_Extension/de "Draft Snap Extension/de"): rastet auf einer virtuellen Geraden ein, die über die Endpunkte gerader Kanten hinaus verläuft.

- ![](/images/Draft_Snap_Parallel.svg) [EinrastenParallel](/Draft_Snap_Parallel/de "Draft Snap Parallel/de"): rastet auf einer virtuellen Geraden parallel zu einer geraden Kante ein.

- ![](/images/Draft_Snap_Special.svg) [EinrastenSpezial](/Draft_Snap_Special/de "Draft Snap Special/de"): rastet auf Punkten ein, die durch das Objekt bestimmt werden.

- ![](/images/Draft_Snap_Near.svg) [EinrastenInDerNähe](/Draft_Snap_Near/de "Draft Snap Near/de"): rastet auf dem am nächsten liegenden Punkt einer Fläche oder Kante ein.

- ![](/images/Draft_Snap_Ortho.svg) [EinrastenOrtho](/Draft_Snap_Ortho/de "Draft Snap Ortho/de"): rastet auf virtuellen Geraden ein, die durch den vorherigen Punkt verläuft, unter einem Winkel, der ein Vielfaches von 45° ist.

- ![](/images/Draft_Snap_Grid.svg) [EinrastenAufRaster](/Draft_Snap_Grid/de "Draft Snap Grid/de"): rastet auf den Schnittstellen von Rasterlinien ein.

- ![](/images/Draft_Snap_WorkingPlane.svg) [EinrastenAufArbeitsebene](/Draft_Snap_WorkingPlane/de "Draft Snap WorkingPlane/de"): projiziert Einrastpunkte auf die aktuelle [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").

- ![](/images/Draft_Snap_Dimensions.svg) [EinrastenAufMaße](/Draft_Snap_Dimensions/de "Draft Snap Dimensions/de"): zeigt die temporären X- und Y-Maße an.

- ![](/images/Draft_ToggleGrid.svg) [RasterUmschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de"): ändert die Sichtbarkeit des Rasters.

## Erweitertes Fangen

- Zusätzliche Einrast-Punkte erhält man durch Kombination von zwei Einrast-Optionen. Beispielsweise ergibt die Kombination von [Draft EinrastenOrtho](/Draft_Snap_Ortho/de "Draft Snap Ortho/de") und [Draft EinrastenAufErweiterung](/Draft_Snap_Extension/de "Draft Snap Extension/de") einen Einrast-Punkt an der Schnittstelle ihrer gedachten Geraden.
- Einrasten kann mit [Beschränken](/Draft_Constrain/de "Draft Constrain/de") kombiniert werden.
- Q drücken, um einen "Haltepunkt" an der aktuellen Position des Mauszeigers einzufügen. Es kann auf die orthogonalen Achsen eines Haltepunktes eingerastet werden und auf die Schnittpunkte dieser Achsen. Ist die Option [Draft EinrastenAufMittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de") aktiv, kann auch auf den Mittelpunkt zwischen zwei Haltepunkten eingerastet werden.
- ` einmal oder mehrmals drücken, um auf einem Objekt einzurasten, das durch eine andere Geometrie verdeckt wird. Dies nennt sich "snap cycling". Man beachte, dass sich der Mauszeiger etwas in der [3D-Ansicht](/3D_view "3D view") bewegen muss, nachem die Taste gedrückt wurde.

![](/images/Draft_Snap_example_cycling_1.png)

Snap-Cycling 1: Das rote Rechteck wurde zuerst erstellt und hat daher die Priorität beim Einrasten. Ohne Snap-Cycling kann man nicht auf dem grünen Rechteck einrasten, wo es vom roten Rechteck überlappt wird.

![](/images/Draft_Snap_example_cycling_2.png)

Snap-Cycling 2: Nach einmaliger Benutzung der Snap-Cycle-Taste erhält das grüne Rechteck die Priorität beim Einrasten. Das Einrasten auf dem Mittelpunkt der überlappten grünen Kante ist jetzt möglich.

## Hinweise

- Es können mehrere Einrast-Optionen gleichzeitig aktiv sein, aber es ist ratsam, nur die Einrast-Optionen zu aktivieren, die wirklich benötigt werden. Sind zu viele aktiviert, kann dies die Arbeit verlangsamen.
- 1.0 und davor: Es ist keine gute Idee, [Draft EinrastenInDerNähe](/Draft_Snap_Near/de "Draft Snap Near/de") permanent zu aktivieren, da es Vorrang vor vielen anderen Einrast-Optionen hat.

- [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de"): Es ist möglich [Draft EinrastenInDerNähe](/Draft_Snap_Near/de "Draft Snap Near/de") permanent zu aktivieren, es erfordert aber mehr Mausbewegungen und präziseres Positionieren des Mauszeigers für andere Einrastarten auf Objekten.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

- Erfordert ein [Draft](/Draft_Workbench "Draft Workbench")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Befehl, das die Punkteingabe aktiv ist, kann der maximale Abstand, bei dem [Draft EinrastenAufRaster](/Draft_Snap_Grid/de "Draft Snap Grid/de") einen Schnittpunkt von Rasterlinien erkennt,"on-the-fly" geändert werden durch Drücken von P (Mehr-Taste) oder M (Weniger-Taste). Diese Einstellung wird gespeichert unter **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Mod → Draft → snapRange**. Sie kann auch im Aufgaben-Bereich des Befehls [Draft EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de") angepasst werden.
- Um nur dann einzurasten, wenn der **Einrasten**-Umschalter gedrückt gehalten wird:
  - Abwählen: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten → Immer einrasten (deaktiviert den Einrast-Umschalter)**.
  - Die standardmäßige Taste für **Einrasten**, Ctrl, kann geändert werden: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten → Einrast-Umschalter**.
- Soll die Symbolleiste Draft-Einrasten nur angezeigt werden, wenn ein Befehl aktiv ist: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten → Die Symbolleiste Draft-Einrasten nur während der Ausführung von Befehlen anzeigen** aktivieren. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Die Einrastsymbole können geändert werden: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten → Stil der Einrastsymbole**.
- Die Farbe der Einrastsymbole und der Maße von [Draft EinrastenAufMaße](/Draft_Snap_Dimensions/de "Draft Snap Dimensions/de") kann geändert werden: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten → Farbe der Einrastsymbole**.
- Die Größe der Einrastsymbole hängt ab von: **Bearbeiten → Einstellungen... → Anzeige → 3D-Viewer → Markergröße**. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Die genannten Einzelzeichen-Tastaturkürzel können geändert werden: **Bearbeiten → Einstellungen... → Draft → Schnittstelle → Befehlsinterne Tastaturkürzel**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/de&oldid=1565146>"

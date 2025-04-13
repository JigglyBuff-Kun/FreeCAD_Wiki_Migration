---
title: Arbeitsbereich Curves
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

## Einleitung

![](/images/Curves_workbench_icon.svg)

Symbol des externen Arbeitsbereichs Curves

Der Arbeitsbereich Curves (Kurven) ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der auf Python basiert und eine Sammlung von Werkzeugen für NURBS-Kurven und -Oberflächen enthält. Dieser Arbeitsbereich wurde mit FreeCAD-Master und OCC 7.4 entwickelt.

Hinweis: Einige Werkzeuge funktionieren möglicherweise nicht mit früheren Versionen.

## Einrichtung

Der Arbeitsbereich Curves kann mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") heruntergeladen werden: Menüeintrag **Werkzeuge → Addon-Manager** auswählen.

## Referenzen

- Entwickler: @Chris_G
- Github: <https://github.com/tomate44/CurvesWB>
- Diskussion: <https://forum.freecad.org/viewtopic.php?f=8&t=22675>
- YouTube tutorial using Curves Workbench: <https://www.youtube.com/watch?v=ZVdbvxmJ3Mo>
- Dailymotion tutorial, tide bottle, demoing Curves Workbench: <https://www.dailymotion.com/video/x6bo9a6>

## Werkzeuge

Mit dem letzen update wurde die Reihenfolge der Werkzeuge mit den Menüeinträgen der Version 0.6.59 abgeglichen und einige fehlende Werkzeuge wurden hinzugefügt.

### Kurvenwerkzeuge

- ![](/images/Curves_Line.svg) [Parametrische Linie](/Curves_Line/de "Curves Line/de"): Erstellt eine parametrische Linie zwischen zwei Knoten.

- ![](/images/Curves_EditableSpline.svg) [Freihand-B-Spline](/Curves_EditableSpline/de "Curves EditableSpline/de"): Erstellt eine Freihand-B-Spline-Kurve.

- ![](/images/Curves_MixedCurve.svg) [Kombi-Kurve](/Curves_MixedCurve/de "Curves MixedCurve/de"): Erstellt eine 3D-Kurve durch Verschneiden (Kombinieren) zweier projizierter Kurven.

- ![](/images/Curves_ExtendCurve.svg) [Kurve verlängern](/Curves_ExtendCurve/de "Curves ExtendCurve/de"): Verlängert die ausgewählte Kante.

- ![](/images/Curves_JoinCurve.svg) [Kurven verbinden](/Curves_JoinCurve/de "Curves JoinCurve/de"): Verbindet die ausgewählten Kanten zu B-Spline-Kurven.

- ![](/images/Curves_SplitCurve.svg) [Kurve teilen](/Curves_SplitCurve/de "Curves SplitCurve/de"): Teilt die ausgewählte Kante.

- ![](/images/Curves_Discretize.svg) [Diskretisieren](/Curves_Discretize/de "Curves Discretize/de"): Erstellt eine Abfolge von Punkten entlang einer Kante oder eines Linienzuges.

- ![](/images/Curves_Approximate.svg) [Approximieren](/Curves_Approximate/de "Curves Approximate/de"): Approximiert Punkte zu einer NURBS-Kurve oder -Oberfläche.

- ![](/images/Curves_Interpolate.svg) [Interpolieren](/Curves_Interpolate/de "Curves Interpolate/de"): Interpoliert Punkte zu einer B-Spline-Kurve.

- ![](/images/Curves_ParametricBlendCurve.svg) [Übergangskurve](/Curves_ParametricBlendCurve/de "Curves ParametricBlendCurve/de"): Erstellt eine parametrische Übergangskurve zwischen zwei Kanten.

- ![](/images/Curves_ParametricComb.svg) [Kammdiagramm](/Curves_ParametricComb/de "Curves ParametricComb/de"): Erstellt ein parametrisches Kammdiagramm an ausgewählten Kanten.

- ![](/images/Curves_CurveOnSurface.svg) [Kurve auf Oberfläche](/Curves_CurveOnSurface/de "Curves CurveOnSurface/de"): Projiziert eine Kurve auf ein (Ober-) Flächenobjekt.

### Oberflächenwerkzeuge

- ![](/images/Curves_ZebraTool.svg) [Zebrawerkzeug](/Curves_ZebraTool/de "Curves ZebraTool/de"): Zebratextur für die Oberflächenprüfung.

- ![](/images/Curves_TrimFace.svg) [Fläche beschneiden](/Curves_TrimFace/de "Curves TrimFace/de"): Beschneidet eine Fläche mit einer projizierten Kurve.

- ![](/images/Curves_IsoCurve.svg) [Iso-Kurve](/Curves_IsoCurve/de "Curves IsoCurve/de"): Legt ein UV-ausgerichtetes Gitter auf ausgewählte Oberflächen.

- ![](/images/Curves_SketchOnSurface.svg) [Skizze auf Oberfläche](/Curves_SketchOnSurface/de "Curves SketchOnSurface/de"): Bildet eine Skizze auf einer Oberfläche ab.

- ![](/images/Curves_Sweep2Rails.svg) [Sweep2Rails](/index.php?title=Curves_Sweep2Rails/de&action=edit&redlink=1 "Curves Sweep2Rails/de (page does not exist)"):

- ![](/images/Curves_ProfileSupport.svg) [Profil-Trägerfläche](/Curves_ProfileSupport/de "Curves ProfileSupport/de"): Erstellt eine Trägerfläche für Skizzen.

- ![](/images/Curves_PipeshellProfile.svg) [Pipeshell-Profil](/index.php?title=Curves_Pipeshel/delProfile&action=edit&redlink=1 "Curves Pipeshel/delProfile (page does not exist)"): Erstellt ein Profil bzw. einen Querschnitt (Profile-Objekt) für ein PipeShell-Objekt.

- ![](/images/Curves_Pipeshell.svg) [Pipeshell](/Curves_Pipeshell/de "Curves Pipeshell/de"): Erstellt ein Pipeshell-Sweep-Objekt.

- ![](/images/Curves_GordonSurface.svg) [Gordon-Fläche](/Curves_GordonSurface/de "Curves GordonSurface/de"): Erstellt eine Oberfläche, die ein Netzwerk aus Kurven überspannt.

- ![](/images/Curves_SegmentSurface.svg) [Fläche aufteilen](/Curves_SegmentSurface/de "Curves SegmentSurface/de"): Teilt eine Fläche entlang ihrer Iso-Kurven auf.

- ![](/images/Curves_CompressionSpring.svg) [Druckfeder](/Curves_CompressionSpring/de "Curves CompressionSpring/de"): Erstellt eine Druckfeder.

- ![](/images/Curves_ReflectLines.svg) [Reflexionslinien](/Curves_ReflectLines/de "Curves ReflectLines/de"): Erstellt Reflexionslinien auf einer Form entsprechend der Ausrichtung einer Ansicht.

- ![](/images/Curves_MultiLoft.svg) [Mehrfach-Loft](/Curves_MultiLoft/de "Curves MultiLoft/de"): Erstellt eine Form aus Profile-Objekten, die aus mehreren parallele Flächen bestehen.

- ![](/images/Curves_BlendSurf2.svg) [Übergangsfläche](/Curves_BlendSurf2/de "Curves BlendSurf2/de"): Erstellt eine Fläche zwischen zwei Kanten mit Übergängen zu ihren Trägerflächen, deren Stetigkeit eingestellt werden kann.

- ![](/images/Curves_BlendSolid.svg) [Übergangskörper](/Curves_BlendSolid/de "Curves BlendSolid/de"): Erstellt einen Übergangskörper zwischen zwei Kanten mit Übergängen zu den Trägerformen, deren Stetigkeit eingestellt werden kann.

- ![](/images/Curves_FlattenFace.svg) [Fläche abwickeln](/Curves_FlattenFace/de "Curves FlattenFace/de"): Erstellt ebene Abwicklungen von konischen oder zylindrischen Flächen.

- ![](/images/Curves_RotationSweep.svg) [Rotation Sweep](/index.php?title=Curves_RotationSweep/de&action=edit&redlink=1 "Curves RotationSweep/de (page does not exist)"): Erstellt ein RotationSweep-Objekt durch Austragen eines Profils (Profile-Objekt) entlang eines Spines (Rückgratkurve - Sweep-Path) oder um einen Punkt herum.

- ![](/images/Curves_ZebraTool.svg) [Title](/index.php?title=Curves_SurfaceAnalysis/de&action=edit&redlink=1 "Curves SurfaceAnalysis/de (page does not exist)"): <- Wrong Icon and name! - (Curves Oberflächenanalyse) Erstellt visuelle Abbildungen für die Analyse auf ausgewählten Formen.

- ![](/images/Curves_DraftAnalysis.svg) [Schrägungsanalysis](/Curves_DraftAnalysis/de "Curves DraftAnalysis/de"): Erstellt eine farbige Überlagerung auf einem Objekt, um die Schrägungswinkel darzustellen.

- ![](/images/Curves_TruncateExtend.svg) [Truncated Extend](/index.php?title=Curves_TruncateExtend/de&action=edit&redlink=1 "Curves TruncateExtend/de (page does not exist)"): Erstellt einen Schnitt durch eine Form und verlängert bzw. kürzt sie um einen gegebenen Abstand.

- ![](/images/Curves_WaterlineCurves.svg) [Wasserlinie](/Curves_WaterlineCurves/de "Curves WaterlineCurves/de"): Erstellt Wasserlinien-Kurven auf ausgewählten Flächen.

## Verschiedene Werkzeuge

- ![](/images/Curves_GeomInfo.svg) [GeomInfo](/Curves_GeomInfo/de "Curves GeomInfo/de"): Schaltet die Anzeige von Informationen zu den ausgewählten Formen ein bzw. aus.

- ![](/images/Curves_ExtractSubshape.svg) [Teilform extrahieren](/index.php?title=Curves_ExtractSubshape/de&action=edit&redlink=1 "Curves ExtractSubshape/de (page does not exist)"): Erstellt nicht parametrische Kopien von ausgewählten Teilformen.

- ![](/images/Curves_ParametricSolid.svg) [Parametrischer Körper](/Curves_ParametricSolid/de "Curves ParametricSolid/de"): Erstellt einen parametrischen Festkörper aus ausgewählten Flächen.

- ![](/images/Curves_PasteSVG.svg) [SVG einfügen](/Curves_PasteSVG/de "Curves PasteSVG/de"): Fügt den SVG-Inhalt der Zwischenablage ein.

- ![](/images/Curves_ToConsole.svg) [Objekte zur Konsole](/Curves_ToConsole/de "Curves ToConsole/de"): Bewegt Objekte zur Konsole.

- ![](/images/Curves_AdjacentFaces.svg) [Angrenzende Flächen auswählen](/Curves_AdjacentFaces/de "Curves AdjacentFaces/de"): Wählt die angrenzenden Flächen der ausgewählten Teilform aus.

- ![](/images/Curves_BSplineToConsole.svg) [B-Spline zur Konsole](/Curves_BSplineToConsole/de "Curves BSplineToConsole/de"): Erstellt ein Python-Skript zum Aufbau der ausgewählten B-spline- oder Bézier-Geometrien.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Workbench/de&oldid=1565158>"

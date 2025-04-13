---
title: Arbeitsbereich Defeaturing
---

![](/images/Defeaturing_workbench_icon.svg)

Defeaturing workbench icon

## Einführung

![](/images/Defeaturing_workbench_icon.svg) **Arbeitsbereich Merkmal aus einer Form entfernen** ist ein Erweiterungsarbeitsbereich, der für die Bearbeitung von STEP-Modellen bestimmt ist, wobei die ausgewählten Formelemente aus dem Modell entfernt werden. Es ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de") und ist daher nicht Teil der Standard FreeCAD Installation.

## Funktionen

- Bietet einen Werkzeugsatz zum Bearbeiten einer Form oder eines STEP-Modells, Entfernen von Bohrung(en), Fläche(n), Vereinfachen des Modells, Ändern der Toleranz, Anwenden von Fuzzy Bool'schen Operationen usw...
- Es gibt auch Werkzeuge zum Erzeugen von Volumenkörperformen, aus Kante(n), Fläche(n) oder Schale(n).
- Es ist auch möglich, die direkte Modellierung des Modells zu verwenden, wenn die Historie der Arbeitsgänge nicht verfügbar ist. (Dies ist der Fall bei 3D STEP Modellen).
- Nützlich in Situationen, in denen proprietäre Details des Modells schnell entfernt werden müssen, bevor es gemeinsam genutzt werden kann. Siehe [Defeaturing](/Defeaturing/de "Defeaturing/de")

Hinweis: Fortgeschrittenere Defeaturing Werkzeuge können verwendet werden, wenn [OCC7.3](/OpenCASCADE "OpenCASCADE") verfügbar ist.

## Installation

### Automatisch (empfohlen)

Verwendung des FreeCAD ![](/images/AddonManager.svg) [Erweiterungsverwalter](/Std_AddonMgr/de "Std AddonMgr/de") verfügbar in v0.17+ über **Werkzeuge → Erweiterungsverwalter**. Suche nach dem ![](/images/Defeaturing_workbench_icon.svg) Defeaturing Arbeitsbereichssymbol . Der Erweiterungsverwalter benachrichtigt den Benutzer auch, wenn eine neue Version dieser Erweiterung verfügbar ist.

### Manuell

Siehe [Wie man zusätzliche Werkbänke installiert](/How_to_install_additional_workbenches/de "How to install additional workbenches/de")

### Unterstützt

- FreeCAD v0.15 4671
- FreeCAD v0.16 >= 6712
- FreeCAD v0.17 >= 13522
- FreeCAD v0.18+

## Referenzen

- Autor: Github: [@easyw](https://github.com/easyw) | FreeCAD Forums: [[1]](https://forum.freecadweb.org/viewtopic.php?f=9&t=29506)
- Quellcode auf github: <https://github.com/easyw/Defeaturing_WB>
- FC Forumsbeitrag thread <https://forum.freecadweb.org/viewtopic.php?t=29506>

## Werkzeuge

![Defeaturing Werkzeugdialog](/images/Defeaturing_WB.png)

Defeaturing Werkzeugdialog

![](/images/Defeaturing_Tools.svg) Defeaturing Werkzeuge befinden sich in einer separaten Maske.

- ![](/images/DefeatWB_Tools_rmv_hole.png) [Bohrungen entfernen](/index.php?title=DefeatWB_Tools_rmv_hole/de&action=edit&redlink=1 "DefeatWB Tools rmv hole/de (page does not exist)"): Bohrung von der Fläche entfernen
- ![](/images/DefeatWB_Tools_rmv_listed_Faces.png) [Aufgelistete Flächen entfernen](/index.php?title=DefeatWB_Tools_rmv_listed_Faces/de&action=edit&redlink=1 "DefeatWB Tools rmv listed Faces/de (page does not exist)"): 'in Liste' Flächen entfernen
- ![](/images/DefeatWB_Tools_add_Faces_listed_Edges.png) [Flächen von 'in Liste' Kanten hinzufügen](/index.php?title=DefeatWB_Tools_add_Faces_listed_Edges/de&action=edit&redlink=1 "DefeatWB Tools add Faces listed Edges/de (page does not exist)"): Flächen von 'in Liste' Kanten hinzufügen
- ![](/images/DefeatWB_Tools_select_Faces_Param_Defeat.png) [Flächen auswählen, die parametrisch Defeatured werden sollen](/index.php?title=DefeatWB_Tools_select_Faces_Param_Defeat/de&action=edit&redlink=1 "DefeatWB Tools select Faces Param Defeat/de (page does not exist)"): Flächen auswählen, die parametrisch Defeatured werden sollen
- ![](/images/DefeatWB_Tools_create_copy_listed_edges.png) [Erstelle eine Kopie der 'in-Liste' Kanten](/index.php?title=DefeatWB_Tools_create_copy_listed_edges/de&action=edit&redlink=1 "DefeatWB Tools create copy listed edges/de (page does not exist)"): Erstelle eine Kopie der 'in-Liste' Kanten

- ![](/images/DefeatWB_Tools_copy_Faces_listed_faces.png) [kopiere Flächen aus 'in Liste' Flächen](/index.php?title=DefeatWB_Tools_copy_Faces_listed_faces/de&action=edit&redlink=1 "DefeatWB Tools copy Faces listed faces/de (page does not exist)"): kopiere Flächen aus 'in Liste' Flächen
- ![](/images/DefeatWB_Tools_offset_face.png) [Versatz Fläche](/index.php?title=DefeatWB_Tools_offset_face/de&action=edit&redlink=1 "DefeatWB Tools offset face/de (page does not exist)"): Versatz Fläche
- ![](/images/DefeatWB_Tools_offset_edge.png) [Versatz Kante](/index.php?title=DefeatWB_Tools_offset_edge/de&action=edit&redlink=1 "DefeatWB Tools offset edge/de (page does not exist)"): Versatz Kante

- ![](/images/DefeatWB_Tools_make_solid_listed_faces.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_make_solid_listed_faces&action=edit&redlink=1 "DefeatWB Tools make solid listed faces (page does not exist)"): make Solid from in List Faces
- ![](/images/DefeatWB_Tools_make_solid_faces_selected_objects.png) [Make Solid from the Faces of the selected Objects](/index.php?title=DefeatWB_Tools_make_solid_faces_selected_objects&action=edit&redlink=1 "DefeatWB Tools make solid faces selected objects (page does not exist)"): make Solid from the Faces of the selected Objects
- ![](/images/DefeatWB_Tools_select_one_object_2_make_solid_step_proc.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_select_one_object_2_make_solid_step_proc&action=edit&redlink=1 "DefeatWB Tools select one object 2 make solid step proc (page does not exist)"): select ONE object to try to make a Solid through STEP import/export process
- ![](/images/DefeatWB_Tools_Connect.png) [Connect](/index.php?title=DefeatWB_Tools_Connect&action=edit&redlink=1 "DefeatWB Tools Connect (page does not exist)"): connect
- ![](/images/DefeatWB_Tools_clean_face_rmv_holes.png) [clean Face(s) removing holes and merging Outwire](/index.php?title=DefeatWB_Tools_clean_face_rmv_holes&action=edit&redlink=1 "DefeatWB Tools clean face rmv holes (page does not exist)"): clean Face(s) removing holes and merging Outwire

- ![](/images/DefeatWB_Tools_show_listed_edges.png) [show 'in List‘ Edge(s)](/index.php?title=DefeatWB_Tools_show_listed_edges&action=edit&redlink=1 "DefeatWB Tools show listed edges (page does not exist)"): show 'in List‘ Edge(s)
- ![](/images/DefeatWB_Tools_show_listed_faces.png) [show 'in List‘ Face(s)](/index.php?title=DefeatWB_Tools_show_listed_faces&action=edit&redlink=1 "DefeatWB Tools show listed faces (page does not exist)"): show 'in List‘ Face(s)
- ![](/images/DefeatWB_Tools_refine.png) [refine](/index.php?title=DefeatWB_Tools_refine&action=edit&redlink=1 "DefeatWB Tools refine (page does not exist)"): refine
- ![](/images/DefeatWB_Tools_simple_copy.png) [simple copy](/index.php?title=DefeatWB_Tools_simple_copy&action=edit&redlink=1 "DefeatWB Tools simple copy (page does not exist)"): simple copy
- ![](/images/DefeatWB_Tools_parametric_refine.png) [parametric Refine](/index.php?title=DefeatWB_Tools_parametric_refine&action=edit&redlink=1 "DefeatWB Tools parametric refine (page does not exist)"): parametric Refine

- ![](/images/DefeatWB_Tools_geometry_check.png) [Geometrieprüfung](/index.php?title=DefeatWB_Tools_geometry_check/de&action=edit&redlink=1 "DefeatWB Tools geometry check/de (page does not exist)"): Geometrieprüfung
- ![](/images/DefeatWB_Tools_get_Tolerance_value.png) [liefert Toleranzwert](/index.php?title=DefeatWB_Tools_get_Tolerance_value/de&action=edit&redlink=1 "DefeatWB Tools get Tolerance value/de (page does not exist)"): liefert Toleranzwert
- ![](/images/DefeatWB_Tools_set_Tolerance_value.png) [Toleranzwert einstellen](/index.php?title=DefeatWB_Tools_set_Tolerance_value/de&action=edit&redlink=1 "DefeatWB Tools set Tolerance value/de (page does not exist)"): Toleranzwert einstellen

- ![](/images/DefeatWB_Tools_make_edges_selected_vertexes.png) [erstelle Kante aus gewählten Knoten](/index.php?title=DefeatWB_Tools_make_edges_selected_vertexes/de&action=edit&redlink=1 "DefeatWB Tools make edges selected vertexes/de (page does not exist)"): erstelle Kante aus gewählten Knoten
- ![](/images/DefeatWB_Tools_reset_placement.png) [Positionierung zurücksetzen](/index.php?title=DefeatWB_Tools_reset_placement/de&action=edit&redlink=1 "DefeatWB Tools reset placement/de (page does not exist)"): Positionierung zurücksetzen
- ![](/images/DefeatWB_Tools_show_hide_typeId_shape.png) [anzeigen/verbergen TypId der Form](/index.php?title=DefeatWB_Tools_show_hide_typeId_shape/de&action=edit&redlink=1 "DefeatWB Tools show hide typeId shape/de (page does not exist)"): anzeigen/verbergen TypId der Form
- ![](/images/DefeatWB_Tools_help.png) [Hilfe](/index.php?title=DefeatWB_Tools_help/de&action=edit&redlink=1 "DefeatWB Tools help/de (page does not exist)"): Hilfe

- ![](/images/DefeatWB_Tools_Fuzzy_Cut.png) [Fuzzy Schnitt](/index.php?title=DefeatWB_Tools_Fuzzy_Cut/de&action=edit&redlink=1 "DefeatWB Tools Fuzzy Cut/de (page does not exist)"): Fuzzy Schnitt
- ![](/images/DefeatWB_Tools_Fuzzy_Union.png) [Fuzzy Vereinigung](/index.php?title=DefeatWB_Tools_Fuzzy_Union/de&action=edit&redlink=1 "DefeatWB Tools Fuzzy Union/de (page does not exist)"): Fuzzy Vereinigung
- ![](/images/DefeatWB_Tools_Fuzzy_Common.png) [Fuzzy Gemeinsam](/index.php?title=DefeatWB_Tools_Fuzzy_Common/de&action=edit&redlink=1 "DefeatWB Tools Fuzzy Common/de (page does not exist)"): Fuzzy Gemeinsam

## Videotutorien

### Defeaturing

Entfernen von Formelementen unter Verwendung neuer OCC7.3 Werkzeuge

[![](/images/Defeaturing-WB-%40Work_v3.png](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-holes.mp4)

Defeaturing-Arbeitsbereich: entfernen von Formelementen (Bohrungen)

[![](/images/Defeaturing-WB-%40Work_v1.png)](https://youtu.be/yrTtWFakAyE)

YouTube: Defeaturing Werkzeuge - Vereinfachung des Modells

[![](/images/Defeaturing-WB-%40Work_v2.png)](https://youtu.be/vgQwGI6Fk6Q)

YouTube: Defeaturing Werkzeuge - Mehrfachauswahl von Flächen für Defeaturing

[![](/images/Defeaturing-WB-%40Work_v4.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-fillet-chamfer.mp4)

Defeaturing-Arbeitsbereich - Entfernen-Verrundung-Fase

[![](/images/Defeaturing-WB-%40Work_v5.png)](https://peertube.mastodon.host/videos/watch/c6bc5abd-2eb7-48c7-af67-c4d8e6783872)

Defeaturing-Arbeitsbereich - Überblick-Funktionen (in deutscher Sprache)

[![](/images//Defeaturing-WB-%40Work_v6.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/parametric-defeaturing.mp4)

Defeaturing Arbeitsbereich - parametrisches-Defeaturing

### Reparieren

- Eine Form nähen
- Flächen entfernen oder vereinfachen
- Bohrungen oder Taschen entfernen
- Toleranz lesen oder ändern
- Fuzzy Boolesche Operationen ausführen

## Externe Arbeitsbereiche

FreeCAD Arbeitsbereiche sind einfach zu programmieren in [Python](/Python/de "Python/de"), daher gibt es viele Leute, die zusätzliche Arbeitsbereiche außerhalb der FreeCAD Hauptentwickler entwickeln.

Die [Externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") Seite hat einige Informationen und Anleitungen zu einigen von ihnen, und das Projekt [FreeCAD Erweiterungen](https://github.com/FreeCAD/FreeCAD-addons) hat sich zum Ziel gesetzt, diese zu sammeln und sie von FreeCAD aus leicht installierbar zu machen.

Neue Arbeitsbereiche sind in der Entwicklung, bleib' dran!

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing_Workbench/de&oldid=1536795>"

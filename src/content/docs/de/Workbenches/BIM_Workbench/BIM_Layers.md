---
title: BIM Ebenen
---
|  |
| --- |
| BIM Ebenen |
| Menüeintrag |
| Manage → Manage layers... |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der **Layers Manager** ermöglicht [Ebenen](/Draft_Layer/de "Draft Layer/de") (layer) zu verwalten. Ebenen sind eine spezielle Art von Gruppe (wie früher Transparentfolien, die zu einer Gesamtzeichnung übereinander gelegt wurden), die die visuellen Eigenschaften der auf ihnen platzierten Objekte steuern. Werden die Eigenschaften der Ebenen geändert, wie z. B. Linienbreite, Linienfarbe, Formfarbe und Transparenz, werden die Änderungen auf ihre untergeordneten Objekte übertragen. Ebenen greifen nicht in andere FreeCAD-Strukturen wie [Gruppen](/Std_Group/de "Std Group/de") oder [Gebäudeteile](/Arch_BuildingPart/de "Arch BuildingPart/de") ein, so dass jedes Objekt gleichzeitig Teil einer Ebene und Teil einer Gruppe sein kann.

![](/images/BIM_layers_screenshot.png)

Layers-Manager

Ebenen werden von/nach [IFC](/Arch_IFC/de "Arch IFC/de") und [DXF/DWG](/Draft_DXF/de "Draft DXF/de") importiert und exportiert.

Der Ebenenverwalter ermöglicht die Ebenen zu verwalten, Ebenen hinzuzufügen, zu entfernen oder ihre visuellen Eigenschaften zu ändern. Um Objekte zu einer Ebene hinzuzufügen, werden sie einfach auf die Ebene in der [Baumansicht](/Tree_view "Tree view") gezogen. Um sie zu entfernen, werden sie aus der Ebene herausgezogen und auf dem Dokumentstamm abgelegt.

## Natives IFC

Dieses Werkzeug ist exakt das Gleiche wie das [Draft EbenenManager](/Draft_LayerManager/de "Draft LayerManager/de")-Werkzeug, und erzeugt das gleiche Layer-Objekt. Es gibt nur einen Unterschied: Es unterstützt das [Native IFC](/index.php?title=NativeIFC/de&action=edit&redlink=1 "NativeIFC/de (page does not exist)")-Objekt:

* Ein IFC-Icon zeigt an, ob der Layer Teil des IFC-Projekts ist oder nicht
* Ein Knopf **IFC-Zuweisen** erlaubt die Verschiebung eines Layers zu einem IFC-Projekt und damit wird er zu einem IFC-Layer

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Layers/de&oldid=1549889>"
---
title: Arch IfcBrepKennzeichnungUmschalten
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch IfcBrepKennzeichnungUmschalten |
| Menüeintrag |
| Dienstprogramme → IFC-B-rep-Kennzeichnung Umschalten |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch IfcExplorer](/Arch_IfcExplorer/de "Arch IfcExplorer/de"), [Arch IFC](/Arch_IFC/de "Arch IFC/de") |
|  |

## Beschreibung

Das Werkzeug **Arch IfcBrepKennzeichnungUmschalten** schaltet die IfcBrep-Markierung eines ausgewählten [BIM](/BIM_Workbench "BIM Workbench")-Objekts an/aus (die Voreinstellung ist immer aus). Wenn die Markierung an ist, wird das Objekt beim Export nach IFC als [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm)-Objekt exportiert, auch wenn eine übergeordnete Exportart wie IfcExtrudedAreaSolid oder IfcBooleanResult möglich ist. Obwohl IfcFacetedBrep-Objekte schwerer und weniger bearbeitbar sind (sie verlieren einige Geometrieinformationen wie z.B. die Modellierungshistorie), sind sie oft weniger fehleranfällig. Das Setzen dieser Markierung ermöglicht es, einige Fälle von Objekten zu lösen, die nicht korrekt exportiert werden, wenn die Markierung nicht gesetzt ist.

## Anwendung

1. Ein Arch Objekt auswählen.
2. Den Menüeintrag **Dienstprogramme → ![](/images/Arch_ToggleIfcBrepFlag.svg) IFC-B-rep-Kennzeichnung Umschalten** auswählen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/de&oldid=1466108>"
---
title: Arch MehrfachMaterial
---

:::caution
DIESER BEFEHL IST VERALTETEr steht in1.0 und neuernicht zur Verfügung. Stattdessen kannBIM Materialverwendet werden.
:::

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| Arch MehrfachMaterial                                                                       |
| Menüeintrag                                                                                 |
| Arch → Material Werkzeuge → Mehrfach-Material                                               |
| Arbeitsbereich                                                                              |
| [Arch](/Arch_Workbench/de "Arch Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel                                                                        |
| _Keiner_                                                                                    |
| Eingeführt in Version                                                                       |
| 0.17                                                                                        |
| Siehe auch                                                                                  |
| [Arch SetMaterial](/Arch_SetMaterial/de "Arch SetMaterial/de")                              |
|                                                                                             |

## Beschreibung

Das Multi-Material-Werkzeug definiert eine Liste von [Materialien](/Material "Material") mit einem Namen und einem Dickenwert für jedes Material. Diese Multimaterialliste kann dann zu einem [Arch](/Arch_Workbench/de "Arch Workbench/de")-Objekt anstelle eines einzelnen [Arch-Materials](/Arch_SetMaterial/de "Arch SetMaterial/de") hinzugefügt werden.

![](/images/Arch_multimaterial_example.png)

Nicht alle Arch-Objekte können derzeit Multimaterialien verwenden, und die Verwendung von Multimaterialien ist unterschiedlich. Derzeit:

- ![](/images/Arch_Wall.svg) [Wände](/Arch_Wall/de "Arch Wall/de") mit einem Mehrfachmaterial werden die Materialdefinitionen und -dicken verwenden, um eine mehrlagige Wand zu erstellen

* Bei ![](/images/Arch_Window.svg) [Fenstern](/Arch_Window/de "Arch Window/de") mit einem Mehrfachmaterial werden die Materialien mit einem Namen innerhalb dieses Mehrfachmaterials, der zu Fensterkomponenten mit gleichem Namen oder Typ (s.u.) passt, diesen Komponenten zugeordnet. Materialdicken werden nicht berücksichtigt.

- ![](/images/Arch_Panel.svg) [Paneele](/Arch_Panel/de "Arch Panel/de") mit einem Mehrfachmaterial werden die Materialdefinitionen und -dicken verwenden, um ein mehrlagiges Paneel zu erstellen

## Anwendung

1. Erstelle zuerst eine Reihe von ![](/images/Arch_SetMaterial.svg) [Arch Material](/Arch_SetMaterial/de "Arch SetMaterial/de")ien, die du in deinem Mehrfachmaterial benötigst.
2. Optional wähle ein Arch-Objekt, dem du das neue Mehrfachmaterial zuordnen möchtest.
3. Drücke die ![](/images/Arch_MultiMaterial.svg) Mehrfachmaterial-Schaltfläche.
4. Setze die gewünschten Materialebenen.

## Optionen

![](/images/Arch_multimaterial_panel.png)

Während der Erstellung oder Änderung eines Mehrfachmaterials durch Doppelklicken im Baum sind die folgenden Optionen verfügbar:

- **Duplicate** another existing Multi-Material from the same document. This only copies the values over, and doesn't link the two multi-materials in any way.
- The **Name** field will also set the material object's Label
- The **Composition** list is the list of the different material layers that compose this multi-material. Each layer has a name, a material and a thickness value.
- Click Add to add a new layer, Up to move a selected layer up, Down to move a selected layer down, or Del to delete a selected layer.
- Double-click the **name** of a layer to edit it, the material will offer you a drop-down list of available [Arch Materials](/Arch_SetMaterial "Arch SetMaterial") in the same document, and thickness can be set to any value in any unit
- Name and Material fields are mandatory. Thickness can be left blank (it will then adopt a value of 0).
- When a multi-material contains layers with a thickness of zero, that thickness is considered variable. Arch objects that use the multi-material, such as Walls and Panels, will treat that accordingly, and give that layer the remaining space available given their own width or thickness.
- If you name the different components of a multi-material "Frame", "Solid panel", "Glass panel" or "Louvre", and apply that material to a window, the given materials will be applied to the corresponding window components.

## Bezug zu IFC

Dies entspricht in etwa einer Kombination aus [IfcMaterialLayerSet](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayerset.htm) und [IfcMaterialLayer](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayer.htm).

## Begrenzungen

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MultiMaterial/de&oldid=1461753>"

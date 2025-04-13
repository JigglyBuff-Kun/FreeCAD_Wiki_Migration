---
title: Arch SetMaterial
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseBIM Materialinstead.
:::

|                                                |
| ---------------------------------------------- |
| Arch SetMaterial                               |
| Menu location                                  |
| Arch → Set material...                         |
| Workbenches                                    |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| Default shortcut                               |
| M T                                            |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Descriere

Instrumentul Material permite să se adauge [materials](/Material "Material") la documentul activ, și să atribuie un material la obiectul [Arch](/Arch_Workbench/ro "Arch Workbench/ro"). Materialele pot avea toate propreitățile unui anumit material, și să controleze culoarea obiectului la care este atașat. Materialele susnt depozitate într-un folder **Materials** în documentul activ.

![](/images/Arch_materials_01.jpg)

## Cum se folosește

1. Optional, selectați unul sau mai multe obiecte la care vreți să atibuiți noul material
2. Apăsați butonul ![](/images/Arch_SetMaterial.png) [Set Material](/Arch_SetMaterial "Arch SetMaterial")
3. Încărcați un material predefinit, sau creați unul nou completând câmpurile.
4. Apăsați **OK**

## Opţiuni

- Când creați un material nou, panoul de sarcini vă permite să setați diferite opțiuni:

![](/images/Arch_materials_02.jpg)

- **Choose preset**: Selectați unul dintrre materialele predefinite, pentru a fi folosit ca atare, sau pentru a fi adaptat prin modificarea câmpurilor de mai jos
- **Name**: Alegeți un nume pentru material
- **Edit button**: Acesta deschide materialul curent în FreeCAD's [Material editor](/FEM_MaterialEditor "FEM MaterialEditor"), care permite să definiți mai mute proprietăți suplimentare și să adăugăți unele personale
- **Description**: O descrie mai detaliată a meterialului
- **Color**: A display color for the material, which will be applied to all objects that use that material
- **Code**: Un nume și un număr de referință pentru specificația sistemului ca de ex [Masterformat](https://en.wikipedia.org/wiki/MasterFormat) or [Omniclass](http://www.omniclass.org/).
- **Code browser button**: Încă neimpletat - will allow to open the reference in a web browser
- **URL**: Un URL unde una sau mai multe informații despre material pot fi găsite
- **URL button**:DEschide URL în web browser

## Relation to IFC

This roughly corresponds to [IfcMaterial](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmaterial.htm).

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SetMaterial/ro&oldid=1467128>"

---
title: Arch Component
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- | ----- | ---------------------- |
| [[Image:Arch Component.svg‏‎ ‏                 | x32px | link=]] Arch Component |
| poziția meniului                               |
| Arch → Utilities → Component‎‏‎                |
| Ateliere                                       |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură                                     |
| C M                                            |
| Prezentat în versiune                          |
| -                                              |
| A se vedea, de asemenea,                       |
| _Nici unul_                                    |
|                                                |

## Descriere

Creează o componentă non-parametrică [Arch](/Arch_Workbench "Arch Workbench") din orice obiect [Part](/Part_Workbench "Part Workbench"). Aceasta oferă obiectului bazat pe Atelierul Part/Piesă aceleași atribute și proprietăți ca și alte obiecte Arch și permite specificarea modului în care ar trebui exportat la IFC prin setarea proprietății**Role** .

## Cum se folosește

1. Selectați un obiect bazat pe Atelierul [Part](/Part_Workbench "Part Workbench")-
2. Selectați meniul Arch → Utilities → ![](/images/Arch_Component.png) [Component](/Arch_Component "Arch Component")

## Properties

Obiectul componentă Arch este, de asemenea, o bază partajată de toate celelalte obiecte Arch ( [Wall](/Arch_Wall "Arch Wall"), [Structure](/Arch_Structure "Arch Structure") etc). Prin urmare, unele dintre proprietățile și comportamentele sale sunt comune tuturor obiectelor Arch (cu excepția instrumentelor care nu produc obiecte solide, cum ar fi [Section Plane](/Arch_SectionPlane "Arch SectionPlane") sau [Axis](/Arch_Axis "Arch Axis")):

### Data

Component

- **Additions**: Componentele Arch au o proprietate aditionala, care poate tine referinta la orice alt obiect [Shape](/Part_Workbench "Part Workbench"). Forma acestor adăugiri va fi unită cu forma de bază a componentei, pentru a produce forma finală.

- Date**Axis** (`Link`): An optional axis or axis system on which this object should be duplicated.

- **Forma de bază**: Componentele Arc sunt întotdeauna bazate pe un obiect de bază bazat pe [Formă](/Part_Workbench "Part Workbench"). Unele tipuri de obiecte Arch vor utiliza doar forma de bază așa cum este, altele (de exemplu[Wall](/Arch_Wall "Arch Wall")) vor face unele operații suplimentare, cum ar fi o extrudare. Pentru unele tipuri, având un obiect de bază nu este obligatoriu ( [Structure](/Arch_Structure "Arch Structure"))

- **Clone Of**: Any Arch Component can be a clone of another Arch Component of the same type (A Wall can only be a clone of another Wall, etc.). The only exception is the generic Arch Component (as produced by this command), that can be clone of any other type (Wall, structure, window, etc). This allows to use a generic Arch Component to override the type of another one.

- **Hi Res**: Componentele Arch pot folosi forma unui alt obiect ca o versiune de înaltă rezoluție a acestora. Pentru aceasta, trebuie să fie setată atât proprietatea Hi Res, cât și modul de afișare Hi Res. Acest lucru permite, de exemplu, crearea unui perete simplu și apoi modelarea fiecărei cărămizi care compune zidul, de exemplu cu [Part Box](/Part_Box "Part Box"). Apoi, utilizați o combinație a acestor cărămizi ca o versiune de înaltă rezoluție a peretelui. Forma peretelui nu este modificată prin adăugarea unui obiect Hi-Res. Numai reprezentarea sa în vizualizarea 3D se va schimba prin adoptarea reprezentării versiunii de înaltă rezoluție în locul propriei sale vizualizări low resolution.

- Date**Horizontal Area** (`Area`): The area of the projection of this object onto the XY plane (read-only).

- **Material**: toate componentele arcului au un slot material, care poate conține fie [Material](/Arch_SetMaterial "Arch SetMaterial") sau un [MultiMaterial](/Arch_MultiMaterial "Arch MultiMaterial") (nu toate tipurile de obiecte Arch suportă utilizarea de MutiMaterials). Proprietățile DiffuseColor și Transparența materialului atașat vor defini culoarea Shape și transparența componentei Arch. Materialul va fi importat și exportat în [IFC](/Arch_IFC "Arch IFC"), [OBJ](/Arch_OBJ "Arch OBJ") and [DAE](/Arch_DAE "Arch DAE")..

- Date**Move Base** (`Bool`): Specifies if moving this object moves its base instead.

- **Move with Host**: Atunci când o componentă este încorporată în interiorul alteia (de exemplu, o fereastră în interiorul unui perete), setarea acestei proprietăți la True va face ca obiectul să se miște și să se rotească împreună cu obiectul gazdă, atunci când obiectul gazdă este mutat sau rotit folosind comenzile [Draft Move](/Draft_Move "Draft Move") sau [Draft Rotate](/Draft_Rotate "Draft Rotate").

- Date**Perimeter Length** (`Length`): The perimeter length of the horizontal area (read-only).

- Date**Standard Code** (`String`): An optional standard (OmniClass, etc...) code for this component.

- **Subtractions** : Componentele arhitecturale au o proprietate de substracție/scădere, care poate deține referință la orice număr de obiecte bazate pe [Formă](/Part_Workbench "Part Workbench"). Forma acestor obiecte va fi scăzută din forma de bază a componentei, pentru a produce forma finală.

- Date**Vertical Area** (`Area`): The area of all vertical faces of this object (read-only).

IFC

- Date (Hidden)**Ifc Data** (`Map`):

- Date (Hidden)**Ifc Properties** (`Map`):

- **Role**: Each Arch Component, besides the function defined by its type (wall, window, etc), also has a Role property, that can define further which kind of function it performs. For example, an [Structure](/Arch_Structure "Arch Structure") can have a beam o column role. Generic Arch Components (as produced by this command) can have any role available in the whole Arch workbench. The role is what is used to define the type of IFC object to export to when [exporting to IFC](/Arch_IFC "Arch IFC").

IFC Attributes

- **Description**: All Arch Components have a Description field, that can contain any text. This is used when [exporting to IFC](/Arch_IFC "Arch IFC").

- Date**Global Id** (`String`):

- Date**Object Type** (`String`):

- Date**Predefined Type** (`Enumeration`):

- **Tag**: The Tag property is another text field, which can be used to give an additional custom identity to objects.

## Notes

- The Placement of the Arch Component is applied after the additions and subtractions are done, so these are performed against the base object at its base location. Then the result is moved to the location of the Placement

- Objects can be added or removed to/from a Component's Additions and Subtractions lists by selecting both the object and the component, and using the [Arch Add](/Arch_Add "Arch Add") or [Arch Remove](/Arch_Remove "Arch Remove") commands, or from the task panel by double-clicking the Component in the Tree view. The task panel also allows to check which object is currently part of these lists.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Component/ro&oldid=1432857>"

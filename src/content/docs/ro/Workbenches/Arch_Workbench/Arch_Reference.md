---
title: Arch Reference/Referință
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                             |
| ----------------------------------------------------------- |
| Arch Reference                                              |
| poziția meniului                                            |
| Arch → Reference                                            |
| Ateliere                                                    |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")              |
| scurtătură                                                  |
| _Nici unul_                                                 |
| Prezentat în versiune                                       |
| -                                                           |
| A se vedea, de asemenea,                                    |
| [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") |
|                                                             |

## Descriere

Instrumentul de referință vă permite să plasați un obiect în documentul curent care copiază forma și culorile acestuia dintr-un obiect [Part](/Part_Workbench "Part Workbench") (inclusiv [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart")) stocate într-un alt fișier FreeCAD. Dacă se modifică fișierul FreeCAD, obiectul de referință este marcat să fie reîncărcat.

![](/images/Arch_reference_screenshot.png)

## Cum se folosește

1. Press the ![](/images/Arch_Reference.png) **Arch Reference** button
2. Press the "Choose file..." button and select an existing FreeCAD file
3. Select one of the included Part-based objects from the drop-down list
4. Press **OK**

## Opţiuni

- Obiectul de referință poate fi mutat și rotit, poziția curentă va fi reținută după reîncărcarea obiectului
- Dacă obiectul original se deplasează în fișierul care conține fișierul, această mișcare se va reflecta în obiectul de referință
- Faceți clic cu butonul din dreapta pe un obiect Referință în vizualizarea arborescentă, aveți opțiunile de a reîncărca obiectul original sau de a deschide fișierul care conține
- Pentru a trimite mai multe obiecte simultan, plasați-le într-un [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart")
- Când dezactivați proprietățile de referință din **Update Colors**, nu mai reîncărcați culorile originale, astfel încât să le puteți schimba în siguranță

## Proprietăți

- Date**File**: Fișierul de bază pe care se bazează această componentă
- Date**Part**:Partea care trebuie utilizată din fișierul de bază
- Vizualizare**Update Colors**: Dacă este adevărat, culorile fișierului conectat/link vor fi menținete actualizate

## Scrip-Programare

Instrumentul Reference poate fi utilizat în [macro-uri](/Macros/ro "Macros/ro") și din consola Python utilizând următoarea funcție:

```
reference = makeReference([filepath], [partname], [name])

```

creează un obiect tip Reference din obiectul dat în fișierul specificat.

Exempluː

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/ro&oldid=1481122>"

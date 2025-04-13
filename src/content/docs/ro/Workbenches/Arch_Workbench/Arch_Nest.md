---
title: Arch Economizor
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arch Nest                                                                                                                                                                      |
| poziția meniului                                                                                                                                                               |
| Arch → Panel tools → Nest                                                                                                                                                      |
| Ateliere                                                                                                                                                                       |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                                                                                 |
| scurtătură                                                                                                                                                                     |
| _Nici unul_                                                                                                                                                                    |
| Prezentat în versiune                                                                                                                                                          |
| -                                                                                                                                                                              |
| A se vedea, de asemenea,                                                                                                                                                       |
| [Arch Panel/ro](/Arch_Panel/ro "Arch Panel/ro"), [Arch Panel Sheet/ro](/index.php?title=Arch_Panel_Sheet/ro&action=edit&redlink=1 "Arch Panel Sheet/ro (page does not exist)") |
|                                                                                                                                                                                |

## Descriere

Instrumentul Nest permite selectarea unei forme plate pentru a fi un container și o serie de alte forme plate care urmează să fie organizate în interiorul spațiului definit de forma recipientului. Acest lucru este de obicei necesar pentru operațiunile CNC, unde doriți să tăiați o serie de bucăți dintr-un panou de bază și trebuie să organizați piesele în cel mai bun mod posibil, astfel încât acestea să ocupe mai puțin spațiu pe panou.

Algoritmul din spatele instrumentului Nest (Economizor) este în evoluție constantă și, în prezent, nu este pe deplin optimizat. În viitor, performanța acestui instrument ar trebui să devină mult mai bună.

![](/images/Arch_Nest_example.jpg)

_Imaginea de mai sus prezintă o serie de forme înainte și după operația de cuibărit_

## Cum se folosește

1. Apăsați butonul ![](/images/Arch_Nest.png) [Arch Nest](/Arch_Nest "Arch Nest")
2. Selectați un obiect pentru a fi container. Acest obiect trebuie să fie plat, și, pentru moment, rectangular
3. Click pe butonul "Pick container" pentru a utiliza acst obiect ca pe un container
4. Selectați o serie de alte obiecte plane pe care doriți să le plasați în interiorul containerului. Aceste obiecte trebuie să fie toate plane și în același plan cu containerul.
5. Ajustați opțiunile dorite de mai jos
6. Start procesul de calcul
7. L sfârșitul calculului, click pe butonul **Preview** pentru a crea o previzualizare temporară a rezultatului.
8. Dacă doriți să aplicați rezultatul (mișcați și rotiți formele actual în ampalsament), click pe OK.

![](/images/Arch_Nest_panel.jpg)

## Notă

- toate obiectele trebuie să aibă o fațetă
- At the moment the tool will only work with flat objects that all have the same orientation.
- At the moment, the container must be rectangular.
- At the moment, margin / spacing between the pieces is not implemented yet
- Calculul poate să ia mult timp pentru mai multe obiecte. Acest lucru va fi optimizat în viitor

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Nest/ro&oldid=1433083>"

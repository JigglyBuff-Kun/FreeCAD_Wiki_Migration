---
title: Path Simulator traiectorie
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                              |
| -------------------------------------------- |
| Path Simulator                               |
| Menu location                                |
| Path → CAM Simulator                         |
| Workbenches                                  |
| [Path](/Path_Workbench "Path Workbench")     |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [Path Inspect](/Path_Inspect "Path Inspect") |
|                                              |

## Descriere

Acest instrument simulează lucrarea de desen prin scanarea modelelor 3D ale instrumentelor folosite în fiecare operație, de-a lungul căilor de cod G, prin scăderea materialelor din stoc/semifabricat, unde se suprapun stocul și instrumentul, asigurând vizualizarea. de muncă. Acest lucru face posibilă detectarea și izolarea erorilor înainte de a efectua lucrul la o freză/CNC

![](/images/Path-Simulation.gif)

## Usage

## Utilizare

1. Apăsați butonul ![](/images/Path_Simulator.png) [CAM Simulator](/Path_Simulator "Path Simulator")
2. Debifați orice Operații care nu trebuie simulate
3. Acordați cu finețe setările de viteză și de precizie.
4. Selectați lucrarea pentru simulare din meniul derulant.
5. Apăsați butonul Redare sau redați o animație a operațiunilor.  
   Apăsați butonul Fast Forward pentru a face acest lucru chiar și pentru traiectorii complicate.
6. Funcția Pauză și funcționalitatea cu un singur pas sunt furnizate pentru a rezolva anumite tăieturi sau mișcări.
7. Faceți clic pe butonul Anulare pentru a elimina stocul/semifabricatul creat pentru simulare. Dacă faceți clic pe OK, acest obiect va fi păstrat în lucrarea dvs.

## Proprietăți

1. Necesită contribuție

- Date**Playback Speed**: The speed of the simulation playback, in G-Code lines/second
- Date**Accuracy**: The accuracy of the simulation expressed as a percentage indicating the simulations deviation from the Job. For interactive simulation, reducing accuracy to 0.3 works much faster.
- Date**Job**: The Job used as the basis of the simulation
- Date**Operation List**: The list of Operations selected for inclusion in the simulation.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Simulator/ro&oldid=1486239>"

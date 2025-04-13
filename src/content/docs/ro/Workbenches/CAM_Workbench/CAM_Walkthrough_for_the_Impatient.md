---
title: Atelierul Traiectorie pas cu pas pentru cei nerăbdători
---
|  |
| --- |
| Tutorial |
| Topic |
| Path Workbench |
| Level |
|  |
| Time to complete |
|  |
| Authors |
| Chrisb |
| FreeCAD version |
|  |
| Example files |
|  |
| See also |
| *None* |
|  |

## Aim

Iată o demonstrație care arată modul de creare a unei sarcini WB Path plecând de la un model 3D, generând un cod G corect pentru dialectul unei mașini de frezat CNC anume.

## Modelul 3D

Proiectul începe cu un simplu model FreeCAD: un cub cu buzunar dreptunghiular,

![](/images/Path-SquarePocketModel.png)

creat [Part Design](/PartDesign_Workbench "PartDesign Workbench") incluzând un Corp/Body, o casetă/Box cu o Adâncitură/Pocket, bazat pe o schiță/Sketch orientată în planul XY plane.

With the 3D Model completed, the Path Workbench is selected.

## The Job

## Sarcina de lucru

The ![](/images/Path-Job.png) [Job](/Path_Job "Path Job") is created.

![](/images/Path-JobCreationDialog.png)

În fereastra de creare a sarcinilor de muncă, faceți clic pe OK pentru a accepta Corpul ca model de bază, fără șablon.

### Definirea Sarcinii de lucru

Fereastra Edit Job se deschide în fereastra Task și fereastra Model afișează Stock ca un cub definit din polilinii care înconjoară corpul de bază. Este selectat Tab-ul de Configurare.

### REzultatul sarcinii de lucru

Tab-ul Output definește calea spre fișierul rezultat, numele și extensia fișierului de ieșire, precum și postprocesorul folosit. Pentru utilizatorii avansați, indicii arătați sub mouse arată argumente comune.

![](/images/Path-JobOutput.png)

### Instrumentele Sarcinii de lucru

![](/images/Path-JobTools.png)

Modificați instrumentul Implicit prin selectarea lui și click pe butonul Edit. Aceasta deschide fereastra de editarea a controlerului de instrumente.

![](/images/Path-ToolConfig.gif)

Denumirea dată sculei și numărul sculei corespunde numărului sculei aparatului. Aici este instrumentul Nr. 4. Controlerul de scule este configurat pentru viteze de avans orizontale și verticale de 2mm / s și o viteză a axului de 2000 rpm.

Selectați subpanelul Sculă a controlerului de scule. Setați diametrul și - dacă doriți să utilizați simularea acțiunii sculei mai târziu-adăugați unghiul de așchiere și adâncimea de așchiere.

![](/images/Path-ToolAdd.gif)

Valorile sunt confirmate prin apăsare lui OK.

Pentru accesul facil, toate instrumentele pot fi predefinite ![](/images/Path_ToolLibraryEdit.svg)[Tool manager](/Path_ToolLibraryEdit "Path ToolLibraryEdit").

### Planul de lucru al Sarcinii de Lucru

Fila Planul de lucru începe și este populată de secvența Operațiuni de lucru, Comenzi parțiale de traiectorie și Dressup de traiectorie. Secvența acestor elemente este comandată aici.

Această arborescență este afișată după configurarea Sarcinii de lucru odată ce lucrarea Path Job is unfolded:

![](/images/Path-TreeWithJob.png)

## Operații cu Traiectoria

Două operații vor adăugate petnru a genera triectoria de frezare pentru this Path Job. Operația [Profile](/Path_Profile "Path Profile") creează o traiectorie în jurul casetei și

```
Pocket  creează o traiectorie pentru frezarea interiorului buzunarului.

```

For now we will keep it simple. The ![](/images/Path_Profile.svg) [Contour](/Path_Profile "Path Profile") button opens the Contour panel. After confirming with OK using the default values, see the green path around the object is visible.

Selecting the bottom of the pocket and then the ![](/images/Path_Pocket.png) [Pocket](/Path_Pocket_Shape "Path Pocket Shape") button opens the Pocket Shape window. The default values for Base Geometry, Depths, and Heights are used, and the Operation subpanel is selected, and the Step Over Percent is set at 50.

![](/images/Path-PocketOperation.gif)

The pattern is changed to "Offset" and the Job Operation is confirmed for the pocket configuration with OK.

The result is a model with two paths:

![](/images/Path-WalkThroughResult.gif)

## Verificarea Traiectoriei

Există două modalități de verificare a traiectoriilor create. Codul G poate fi inspectat, incluzând evidențierea segmentelor de cale corespunzătoare. Procesul de frezare a traiectoriei de lucru poate fi, de asemenea, simulat pentru a demonstra traiectoriile de unelte idealizate, necesare pentru ca geometria uneltelor să frezeze Semifabricatul.

To inspect the G-Code use the ![](/images/Path_Inspect.png) tool. Selecting the corresponding G-Code lines within the G-Code Inspection window highlights individual path segments.

![](/images/Path-InspectWindow.gif)

To start the simulation use the ![](/images/Path_Simulator.png) [Path Simulator](/Path_Simulator "Path Simulator") tool.

Adjust speed and accuracy and start the simulation with the play button.

![](/images/Path-Simulation.gif)

If you want to end the simulation click the Cancel button, it will remove the stock created for the simulation. If you click Ok this object will be kept in your Job.

## Postprocess the Job

Ultimul pas în generarea Codului G pentru mașina de frezare țintă este post-procesarea sarcinii de lucru. Aceasta generează codurile G într-un fișier care poate fi încărcat la controlerul de mașinii țintă CNC. Pentru a apela postprocesorul:

* Select the Job object in the tree
* Select the Path Postprocessing ![](/images/Path_PostProcess.png) tool to postprocess the file. This opens a G-Code window allowing inspection of the final output file before it is saved.

![](/images/Path-PostOutput.gif)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Walkthrough_for_the_Impatient/ro&oldid=1391213>"
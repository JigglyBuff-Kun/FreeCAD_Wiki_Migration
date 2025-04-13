---
title: Importul de cod OpenSCAD
---
|  |
| --- |
| Tutorial |
| Topic |
| Import OpenSCAD code |
| Level |
| Beginner |
| Time to complete |
| 30 minutes |
| Authors |
| r-frank |
| FreeCAD version |
| 0.16.6704 |
| Example files |
|  |
| See also |
| *None* |
|  |

## Introduction

## Introducere

OpenSCAD, ca și FreeCAD, este un program open source 3D CAD. În timp ce FreeCAD utilizează o abordare vizuală, OpenSCAD utilizează o interfață de programare pentru a efectua operații 3D. Baza de lucru OpenSCAD poate fi utilizată pentru a importa codul de obiect OpenSCAD și pentru a accesa unele operații ale rețelei posibile cu OpenSCAD.

## Installing OpenSCAD

## Instalarea OpenSCAD

Utilizatorii Mac pot descărca codurile binare de la [OpenSCAD homepage](http://www.openscad.org/).  
Utilizatorii Linux Ubuntu/Mint pot instala din depozitele sistemului sau de la [OpenSCAD homepage](http://www.openscad.org/).  
Utilizatorii Windows pot descărca programul de la [OpenSCAD homepage](http://www.openscad.org/).  
Deoarece numai executabilul OpenSCAD este necesar pentru FreeCAD, utilizatorii de Windows pot instala versiunea portabilă dacă doresc.

## Configuring OpenSCAD workbench in FreeCAD

## Configurarea atelierului OpenSCAD în FreeCAD

* Deschideți FreeCAD
* Comutați pe [OpenSCAD workbench](/OpenSCAD_Workbench "OpenSCAD Workbench")
* Alegeți Edit → Preferences → OpenSCAD din meniul de Top
  + Direcționați FreeCAD la executabilul OpenSCAD (secțiune: Setări generale OpenSCAD)
  + toate celelalte valori de pe pagina de setări pot fi lăsate la valorile implicite

## The sample model

## Modelul ca model

Aici vom folosi exemplu005.scad-fișierul din exemplele (vechi) OpenSCAD, dar nu ezitați să utilizați orice fișiere tip SCAD din preferințele dvs.  
![](/images/TutorialOpenSCAD_SampleFile.jpg)

![](/images/TutorialOpenSCAD_SampleFile.jpg)

## Importing the model in FreeCAD

## Importarea modelului în FreeCAD

* În FreeCAD doar selectați  File →  Open și alegeți fișierul \*.scad pe care doriți să-l importați.
* Nu este atât de important ce atelier de lucru este activat, Atelierul de lucru OpenSCAD însuși este necesar numai atunci când aplicați caracteristici speciale modelului dvs.
* FreeCAD va deschide fisierulSCAD și va construi o arborescență cu primitive și operații booleene
* Tutorialul este finalizat

![](/images/TutorialOpenSCAD_ImportFile.jpg)

![](/images/TutorialOpenSCAD_ImportFile.jpg)

## Related

* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")
* [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_OpenSCAD_code/ro&oldid=977996>"
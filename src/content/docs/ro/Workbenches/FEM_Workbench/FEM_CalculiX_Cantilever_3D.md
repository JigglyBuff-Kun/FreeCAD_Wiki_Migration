---
title: FEM CalculiX Cantilever 3D/Teoria grinzii în consolă
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Tutorial                                                                    |
| Topic                                                                       |
| Finite Element Analysis                                                     |
| Level                                                                       |
| Beginner                                                                    |
| Time to complete                                                            |
| 10 minutes                                                                  |
| Authors                                                                     |
| [Bernd](http://www.freecadweb.org/wiki/index.php?title=User:Berndhahnebach) |
| FreeCAD version                                                             |
| 0.16.6377 or above                                                          |
| Example files                                                               |
|                                                                             |
| See also                                                                    |
| _None_                                                                      |
|                                                                             |

## Introduction

### Introducere

Acest exemplu este menit să arate o analiză simplă a elementelor finite (AEF) în FreeCAD [FEM Workbench](/FEM_Workbench "FEM Workbench") ar trebui să arate și modul în care rezultatele pot fi vizualizate. Se arată cum se declanșează o AEF și cum se schimbă valoarea de încărcare și direcția de încărcare. Mai mult, deoarece fișierul exemplu este prevăzut pt orice instalare FreeCAD, este ușor să verificați dacă modulul FEM este configurat corect.

![](/images/FEM_example01_pic10.png)

## Requirements

### Cerințe

- Versiunea FreeCAD = 0.16.6377 sau mai recentă.
- Acest lucru poate fi verificat în meniul Ajutor -> despre FreeCAD. Numărul Reviziei trebuie să fie mai mare de 6377
- Nu este nevoie de software extern pentru încărcarea fișierului exemplu, vizualizarea plasei cu ochiuri și a geometriei, precum și pentru vizualizarea rezultatelor.
- Pentru reluarea FEA software-ul rezolvitorul CalculiX trebuie să fie instalat pe calculatorul dumneavoastră. Probabil solverul a fost deja instalat împreună cu FreeCAD. Dacă rezolvitorul CalculiX nu este instalat, consultați [FEM Install](/FEM_Install "FEM Install").

### Configurarea fișierului exemplu

### Load the example file

#### Încarcă Atelierul Start Workbench

- Start FreeCAD
- Atelierul Start Workbench trebuie încărcat

![](/images/FEM_example01_pic11.png)

### Activate the analysis container

#### Activați containerul de analiză

- Pentru a lucra cu o analiză, analiza trebuie activată.
- În vizualizarea copacului, faceți clic dreapta pe![](/images/FEM_Analysis.png) MechanicalAnalysis --> Activate analysis

![](/images/FEM_example01_pic12.png)

### Analysis container and its objects

#### Container de analiză și obiectele sale

- Dacă analiza este activată, FreeCAD va schimba bancul de lucru curent cu FEM.
- Există cel puțin cele 5 obiecte necesare pentru a efectua o analiză mecanică statică.
- ![](/images/FEM_Analysis.svg) container de analiză

1. ![](/images/FEM_SolverCalculixCxxtools.svg) un solver
2. ![](/images/FEM_MaterialSolid.svg) un material
3. ![](/images/FEM_ConstraintFixed.svg) o constrângere fixă
4. ![](/images/FEM_ConstraintForce.svg) o constrângere de forță
5. ![](/images/FEM_FEMMesh.svg) FEM mesh

- Deoarece în exemplul de aici sunt incluse rezultatele și există un al șaselea obiect, rezultatele ![](/images/FEM_ShowResult.png).

### Visualizing Results

#### Vizualizarea rezultatelor

- Asigurați-vă că analiza este activată.
- Asigurați-vă că analiza încă conține obiectul rezultat, dacă nu doar reîncărcați fișierul exemplu.
- Faceți clic pe bara de instrumente icoanițe pe ![](/images/FEM_ShowResult.png) [Show result](/FEM_ResultShow "FEM ResultShow")
- În fereastra task-ului alege z-Displacement. Acesta arată -88.443 mm în direcție z-negativă.
- Acest lucru are sens, deoarece forța este în direcția negativă, de asemenea.
- Activați caseta de selectare în afară de glisorul inferior al afișajului de deplasare.
- Glisorul poate fi folosit pentru a modifica plasa de deformare într-o manieră simplificată.
- Alegeți dintre diferitele tipuri de rezultate pentru a le vedea în interfața GUI .

![](/images/FEM_example01_pic13.png)

### Purging Results

#### Rezultate de curățare

- Asigurați-vă că analiza este activată.
- Pentru a elimina rezultatele selectați în bara de instrumente pictogramă ![](/images/FEM_PurgeResults.png) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge")

### Running the FEA

#### Rularea FEA

- În vizualizarea Tree, faceți dublu clic pe obiectul rezolvitor ![](/images/FEM_Solver.png).
- În fereastra de sarcini a obiectului rezolvitor, asigurați-vă că este selectată analiza statică.
- Faceți clic pe fișierul .inp de scriere în aceeași fereastră de activitate. Urmăriți fereastra de jurnalizare până când se afișează "scriere completă".
- Faceți clic pe Run CalculiX. Deoarece aceasta este o analiză foarte mică, ar trebui să dureze mai puțin de o secundă pentru a rula.
- În fereastra de text ar trebui să imprimați cu litere verzi "CalculiX done!" iar în linia următoare "seturile de rezultate de încărcare ..."
- Ați terminat prima dvs. AEF în FreeCAD dacă nu a fost nici un mesaj de eroare.
- Faceți clic pe Închidere în fereastra de activități.
- Trebuie creat un obiect rezultat nou. Știi deja cum să vizualizați rezultatele.
- Dacă primiți un mesaj de eroare ”no solver binary” sau similar atunci când se declanșează analiza, verificați

```
 FEM Install.

```

![](/images/FEM_example01_pic14.png)

### Running the FEA the fast Way

#### Rularea AEF pe calea rapidă

- În vizualizarea arborescentă selectați obiectul Solver ![](/images/FEM_Solver.png) al analizei ![](/images/FEM_Analysis.png).
- În bara de instrumente iconițe faceți clic pe ![](/images/FEM_RunCalculiXccx.png) [Quick Analysis](/FEM_SolverRun "FEM SolverRun").
- Fișierul de intrare Calculix va fi scris, CalculiX va fi declanșat și obiectul rezultat ar trebui să fie creat.

### Changing Load Direction and Load Value

#### Schimbarea direcției de încărcare și a valorii de încărcare

- În vizualizarea arborescentă selectați obiectul mesh FEM ![](/images/FEM_FEMMesh.svg) și apăsați tasta spațiu.
- Vizibilitatea rețelei FEM va fi oprită. Modelul geometric este încă vizibil.
- În vizualizarea arborescentă faceți dublu clic pe obiectul de constrângere de forță pentru a deschide fereastra de sarcini.
- În fereastra de sarcini se modifică valoarea de încărcare la 500000000 N = 500 MN (forța în fereastra de sarcină trebuie să fie în N)
- Faceți clic pe Button Direction.
- Pe modelul geometric faceți clic pe muchiile lungi în direcția x.

Săgețile roșii ale forței își vor schimba direcția în direcția x. Ele arată în direcția fixă.

- Deoarece tensiunea ar trebui să fie aplicată casetei, Direcția inversă trebuie să fie declanșată făcând clic pe ea.

Săgețile roșii ale forței își vor schimba direcția.

- Faceți clic pe OK în fereastra de activități.

![](/images/FEM_example01_pic05.jpg)

- Întoarceți vizibilitatea mesei FEM ![](/images/FEM_FEMMesh.svg) pe pagină.
- Acum știți deja cum să declanșați o analiză și cum să vizualizați rezultatele.

Deformarea în direcția x trebuie să fie de 19,05 mm.

![](/images/FEM_example01_pic15.png)

- You know how to trigger an analysis and how to visualize results already.
- The deformation in x-direction should be 18.95 mm.

![](/images/FEM_example01_pic16.png)

## What next?

#### Ce urmează?

- Acum că ați terminat cu fluxul de lucru de bază pentru [FEM Module](/FEM_Workbench "FEM Workbench").
- Sunteți pregătit acum să faceți al doilea [FEM tutorial](/FEM_tutorial "FEM tutorial").
- Vom crea consola CalculiX noi înșine și vom compara rezultatele cu teoria grinzii.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX_Cantilever_3D/ro&oldid=1251625>"

---
title: FEM Material Solid
---

|                                              |
| -------------------------------------------- |
| FEM MaterialSolid                            |
| Menu location                                |
| Model → FEM material for solid               |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| M,M                                          |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Descriere

Adaugă proprietăți materiale la o piesă.

![](/images/FEMMaterialSolidProperties.png)

The FEM material task panel

## Cum se folosește

- Click pe ![](/images/FEM_MaterialSolid.png) sau selctați Model → ![](/images/FEM_MaterialSolid.png) FEM material for solid din meniul principal.
- Dublu click pe obiectul creat ![](/images/FEM_MaterialSolid.png) SolidMaterial obiectul

![](/images/FEMMaterialProperties.PNG)

- - Selectați un material. Pentru analiza mecanică mecanică, CalculiX-Steel este o opțiune tipică.
  - Cu condiția să aplicați materialul întregului obiect, nu selectați entități geometrice (liste de referință goale). Materialul va fi aplicat modelului întreg. Altfel, atribuiți manual materiale pentru anumite piese ale modelului, selectând unele dintre ele pentru fiecare material introdus, dar nu lăsați nici o parte a modelului fără materiale atribuite.
  - Puteți ajusta proprietățile materialelor, cum ar fi densitatea, modulul de elasticitate Young, coeficientul Poisson etc., cu toate acestea majoritatea materialelor obișnuite sunt deja disponibile în presetări și nu au nevoie de modificări.
  - Dacă efectuați modificări, puteți salva materialul personalizat.
- Click pe Close pentru a închide dialogul și a crat un obiect ![](/images/FEM_MaterialSolid.png) SolidMaterial

## Notă

1. Pentru Proprietățile mecanice ale materialului utilizați cardul/tabelul \*MATERIAL în CalculiX. Detalii despre proprietățile mecanice ale materialului sunt explicate la adresa <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node216.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialSolid/ro&oldid=1321984>"

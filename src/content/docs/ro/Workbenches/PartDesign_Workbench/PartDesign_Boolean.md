---
title: PartDesign Operație booleană
---
|  |
| --- |
| PartDesign Operație booleană |
| poziția meniului |
| Part Design → Operație booleană |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

**PartDesign Boolean** importă una sau mai multe [PartDesign Bodies](/PartDesign_Body "PartDesign Body") or [PartDesign Clones](/PartDesign_Clone "PartDesign Clone") (designated as "tool bodies") în Corpul PartDesign și aplică o operație booleană (fuse, cut or common).

![](/images/PartDesign_Boolean_example.png)

*În stânga: corpul activ (A) cu insrumentele corpurilor (B) și (C); rezultă în dreapta după Boolean Cut.*

## Cum se folosește

1. Activați corpul care primește funcționalitatea Booleană. ***Note**:este important să vă asigurați că nu este selectată nici corpul activ și nici una dintre funcțiile pe care le conține acesta înainte de a trece la pasul 2. "*
2. apăsați buton ![](/images/PartDesign_Boolean.png) **Boolean**.
3. În **Boolean Parameters**, click pe butonul Add body. Corpul activ dispare temporar din vizualizarea 3D pentru a facilita selecțiile.
4. În vizualizarea 3D, selectați Body care se va utiliza în funcția Booleană. Repetați pentru a adăuga mai multe corpuri.
5. Selectați tipul operațiunii Booleene în meniul derulant (Fuziune, Substracție ori Intersecție)
6. Click OK.

De asemenea, puteți selecta unul sau mai multe corpuri înainte de a apăsa butonul Boolean. acestea vor fi adăugate automat.

Alternatively, objects can be selected prior to pressing the Boolean button. They will be added automatically. When pre-selecting you are not restricted to Bodies. [PartDesign ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"), [PartDesign SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") and even solids created with other workbenches can then also be selected.

## Opţiuni

* **Fuse:** unește corpul sau corpurile de corpul activ.
* **Cut:** scade corpul sau corpurile din corpul activ.
* **Common:** extrage intersecția dintre corpul sau corpurile selectate cu corpul activ
* Apăsați butonul Remove body pentru a extrage corpul,prin selectarea acestuia în vizualizarea 3D.

## Proprietăți

* Date**Type**: setează operația Boolean (Fuse, Cut, Common)
* Date**Label**: nume dat operațiunii, acest nume poate fi schimbat dacă vă convine.
* Date**Group**: listează corpurile implicate.
* Vizualizare**Display**: setează afișarea între 2 moduri:
  + Result (default): afișează rezultatul funcțiilor Booleene. În acest mod, corpurile implicate nu pot fi afișate în starea inițială, chiar și atunci când vizibilitatea acestora este activată.
  + Tools: afișează corpurile instrumentate în starea inițială. Acest mod este util atunci când este necesară editarea lor.
* Vizualizare**Selectable**: true or false. Dacă este setat la falsă, funcția nu poate fi selectată în vizualizarea 3D.
* Vizualizare**Visibility**: true or false. Comută vizibilitatea funcției în vizualizarea 3D.

## Limite

* Pentru ca Intersecția să lucreze cu mai mult de un corp, altul decât corpul activ, fiecare trebuie să aibă o parte comună cu corpul activ.
* Corpurile folosite adoptă originea locală a corpului activ. Dacă corpul activ nu este localizat la coordonatele (0,0,0) în sistemul global de coordonate, plasarea corpurilor utilizate trebuie să fie relativă față de corpul activ. Poate fi mai ușor să transpuneți plasarea corpului activ la origine înainte de a aplica funcția Boolean și apoi să o readuceți la locația inițială.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Boolean/ro&oldid=1446900>"
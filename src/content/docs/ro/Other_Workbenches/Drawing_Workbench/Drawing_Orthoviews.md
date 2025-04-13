---
title: Drawing Orthoviews
---

## Descriere

|                                                                      |
| -------------------------------------------------------------------- |
| Drawing Orthoviews                                                   |
| Menu location                                                        |
| Drawing → Insert orthographic views                                  |
| Workbenches                                                          |
| [Drawing](/Drawing_Workbench "Drawing Workbench"), Complete          |
| Default shortcut                                                     |
| none                                                                 |
| Introduced in version                                                |
| -                                                                    |
| See also                                                             |
| [Drawing Landscape A3](/Drawing_Landscape_A3 "Drawing Landscape A3") |
|                                                                      |

Instrumentul Orthoviews introduce un set de proiecții ortogonale ale obiectului selectat în foaia de desen activă. Rețineți că nu creează un singur obiect de vizualizare pe pagină. În schimb, va fi creată o proiecție ortogonală separată pentru fiecare dintre vizualizările selectate în opțiuni.

Instrumentul Orthoviews creează toate proiecțiile ortogonale reprezintă locația potrivită pentru vizualizarea principală dată.

## Cum se folosește

1. Selectați o funcție în arborescența modelului.
2. Dacă există mai mult de o pagină, multi-selectați pagina dorită (păstrând în același timp caracteristica selectată).
3. Apăsați butonul ![](/images/Drawing_Orthoviews.png) [Insert orthographic views](/Drawing_Orthoviews "Drawing Orthoviews").
4. Definiți opțiunile de creare a vizualizării dorite. Consultați [Opțiuni](#Opțiuni).
5. Faceți clic pe OK pentru a crea vizualizările funcțiilor selectate pe pagina selectată.

## Opţiuni

În funcție de selecțiile efectuate, este posibil ca unele opțiuni să nu fie disponibile.

![](/images/Drawing_Orthoviews_Options.png)

- **Proiecție**: Selectați dacă doriți un al treilea unghi (implicit) sau proiecție în primul unghi
- **Vedere din**: Alegeți axa care se va afla din foaia de desen spre utilizator.
- **Axa aliniată dreapta**: Alegeți axa care se îndreptă spre dreapta pe foaia de desen. Axa rămasă va fi verticală pe pagină.
- **Vederi secundare**: Alegeți vizualizările pe care doriți să le creați. Vederea principală se află în centrul casetelor de selectare și este orientată de vizualizările**View from** și **Axis aligned right**. Vizualizările secundare vor fi create pentru fiecare casetă care este bifată.

### General

- **Scala / poziția automată**: Dacă este bifată această casetă, va fi aleasă scara de vizualizare, locația și spațiul pentru a utiliza cel mai bine spațiul disponibil pe pagină. Dacă această casetă nu este bifată, utilizatorul specifică scala, locația și spațierea.
- **Scale**: Scara pentru vizualizare, exprimată ca numitor al unei fracțiuni de scară. Astfel, 2 va crea un set de vizualizări scalate la 1: 2.
- **Sus la stânga x / y**: Locația setului de vizualizări din partea stângă sus a paginii. Incorporarea valorii x (prima coloană) mișcă vizualizările spre dreapta. Creșterea valorii y (a doua coloană) mută vizualizările în jos pe pagină.
- **Spacing dx / dy**: Distanțele x (prima coloană) și y (a doua coloană) între vizualizările adiacente. Distanțele sunt spațiul dintre sistemul de coordonate al părții; în majoritatea cazurilor va exista un spațiu mai mic între vizualizările că valoarea de spațiu (deoarece vizualizările au dimensiuni x și y).
- **Afișați linii ascunse**: Dacă selectați, liniile ascunse vor fi vizibile în vizualizările create.
- **Arătați liniile netede**: Dacă este selectată, arătați linii în care curbura este discontinuă (de exemplu, unde o racordare se conectează la o parte plată).

## Proprietăți

Nu există proprietăți pentru această comandă; comanda creează proprietăți pentru fiecare vizualizare individuală.

## Scrip-Programare

Drawing Orthoviews nu este numit în scripting. Vizualizările individuale create de comanda Drawing Orthoviews pot fi create în scripturi.

## Limite

De completat

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Orthoviews/ro&oldid=1462025>"

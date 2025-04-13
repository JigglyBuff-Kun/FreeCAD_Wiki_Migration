---
title: Poradnik dla środowiska pracy MES
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Analiza elementów skończonych |
| Poziom trudności |
| początkujący |
| Czas wykonania |
| 10 minut + czas Solvera |
| Autorzy |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Wersja FreeCAD |
| 0.17 lub nowszy |
| Pliki z przykładami |
| *Nie dołączono* |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

Niniejszy poradnik ma na celu zapoznanie czytelnika z podstawowym tokiem pracy środowiska MES, jak również z większością dostępnych narzędzi do przeprowadzania analizy statycznej.

![](/images/FEM_tutorial_result.png)

## Wymagania

* FreeCAD w wersji 0.17 lub nowszej.
* [Netgen](http://sourceforge.net/projects/netgen-mesher/) i / lub [GMSH](http://geuz.org/gmsh/) zainstalowany w systemie *(dołączony do instalacji FreeCAD)*.
* [Calculix](http://www.calculix.de/) który jest zainstalowany w systemie *(dołączony do instalacji FreeCAD)*.
* Czytelnik powinien posiadać podstawową wiedzę na temat korzystania z Środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl") oraz [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

## Sposób postępowania

### Modelowanie

W tym przykładzie jako obiekt badania używany jest sześcian, ale zamiast niego mogą być używane modele utworzone w środowiskach pracy [Część](/Part_Workbench/pl "Part Workbench/pl") lub [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

1. Naciśnij przycisk [![Utwórz nowy pusty dokument](/images/Std_New.svg)](/Std_New/pl "Utwórz nowy pusty dokument ") aby utworzyć nowy dokument.
2. Aktywuj środowisko pracy [![Projekt Części](/images/0/04/Workbench_Part.svg)](/Part_Workbench/pl "Projekt Części") [Część](/Part_Workbench/pl "Part Workbench/pl").
3. Stwórz sześcian.
4. Zmień jego **wymiary** na następujące:
   1. długość: `8.00mm`
   2. szerokość: `1.00mm`
   3. wysokość: `1.00mm`

Teraz mamy model, z którym możemy pracować.

### Tworzenie analizy

1. Uruchom środowisko pracy ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl").
2. Wybierz z menu **Model → ![](/images/FEM_Analysis.svg) Kontener analizy‏‎**

### Wiązania i siły

1. Ukryj siatkę z widoku drzewa.
2. Wyświetl oryginalny model.
3. Wybierz [![Warunek brzegowy utwierdzenia](/images/FEM_ConstraintFixed.svg)](/FEM_ConstraintFixed/pl "Warunek brzegowy utwierdzenia ") [Warunek brzegowy utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl").
4. Wybierz tylną stronę sześcianu *(strona na osi **YZ**)* i kliknij na przycisk OK.
5. Wybierz [![Obciążenie siłą](/images/FEM_ConstraintForce.svg)](/FEM_ConstraintForce/pl "Obciążenie siłą ") [Obciążenie siłą](/FEM_ConstraintForce/pl "FEM ConstraintForce/pl").
6. Kliknij w przycisk Dodaj wybierz przednią ścianę sześcianu *(ściana równoległa do tylnej)* i ustaw wartość "Obciążenie [N]" na `9000000.00`.
7. Ustaw wartość **Kierunek** na **-Z** poprzez wybranie jednej z krawędzi równoległych do tego kierunku.
8. Kliknij na przycisk OK.

Ustaliliśmy teraz ograniczenia i siły dla naszych badań statycznych.

### Materiał

1. Wybierz ![](/images/FEM_MaterialSolid.svg) [Materiał bryły ...](/FEM_MaterialSolid/pl "FEM MaterialSolid/pl") i wybierz Calculix-Steel jako materiał.
2. Kliknij na przycisk OK.

### Tworzenie siatki

Zaleca się wykonanie siatki jako ostatni etap przygotowań do analizy ze względu na skojarzenie z geometrią w programie FreeCAD.
W zależności od instalacji programu FreeCAD mogą występować generatory siatek Netgen lub GMSH, można użyć dowolnego z nich.

#### Netgen

1. Zaznacz model.
2. Kliknij na przycisk ![](/images/FEM_MeshNetgenFromShape.svg) [Siatka MES z kształtu przy pomocy generatora Netgen](/FEM_MeshNetgenFromShape/pl "FEM MeshNetgenFromShape/pl") aby utworzyć siatkę Netgen modelu dla analizy MES.
3. W oknie dialogowym **Tworzenie siatki**, kliknij przyciski Zastosuj oraz OK

Możesz także przeciągnąć i upuścić obiekt siatki do analizy mechanicznej, która nie występuje w [widoku drzewa](/Tree_view/pl "Tree view/pl").

#### GMSH

1. Zaznacz model
2. Kliknij na przycisk ![](/images/FEM_MeshGmshFromShape.svg) [Siatka MES z kształtu przy pomocy generatora Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl"): aby utworzyć siatkę Gmsh modelu dla analizy MES.
3. W oknie dialogowym '*Tworzenie siatki* kliknij przycisk Apply oraz OK.

Obecnie mamy do czynienia z siatką naszego obiektu i jesteśmy gotowi do dodania wiązań i sił.

### Uruchomienie solvera

#### Procedura typowa

1. Wybierz obiekt solvera ![](/images/FEM_SolverCalculixCxxtools.svg) zawarty w kontenerze **Analiza**.
2. Wybierz z menu ![](/images/FEM_SolverControl.svg) [Kontrola pracy solvera](/FEM_SolverControl/pl "FEM SolverControl/pl")
3. Wybierz Zapisz plik wejściowy .inp.
4. Wybierz Uruchom Calculix.
5. Kliknij w przycisk OK.

#### Procedura skrócona

1. Wybierz obiekt solvera ![](/images/FEM_SolverCalculixCxxtools.svg) zawarty w kontenerze **Analiza**.
2. Kliknij w przycisk ![](/images/FEM_SolverRun.svg) [Uruchom analizę](/FEM_SolverRun/pl "FEM SolverRun/pl").

### Analizowanie wyników

1. W widoku drzewa wybierz obiekt **CCX\_Wyniki**.
2. Wybierz [![Pokaż wyniki](/images/FEM_ResultShow.svg)](/FEM_ResultShow/pl "Pokaż wyniki ") [Pokaż wyniki](/FEM_ResultShow/pl "FEM ResultShow/pl").
3. Wybierz jeden z dostępnych typów wyników, do przeglądania.
4. Suwak na dole może być użyty do zmiany wyglądu siatki. Pozwala to na wizualizację deformacji doświadczanej przez obiekt, pamiętając, że jest to wynik przybliżony.
5. Aby usunąć wyniki wybierz [![Oczyszczanie z wyników](/images/FEM_ResultsPurge.svg)](/FEM_ResultsPurge/pl "Oczyszczanie z wyników ") [Usuń wyniki](/FEM_ResultsPurge/pl "FEM ResultsPurge/pl").

**Porównanie wyników do poprzedniej wersji pliku przykładowego**

Jeśli wybierzesz typ wyniku '*Przemieszczenie Z*, zobaczysz, że uzyskana wartość jest prawie identyczna jak w przykładzie testowym dostarczonym przez FreeCAD. Różnice mogą pojawić się na skutek zastosowania odmiennej jakości siatki i liczby posiadanych przez nią węzłów.

Zakończyliśmy teraz prezentacje podstawowego przepływu pracy dla środowiska [MES](/FEM_Workbench/pl "FEM Workbench/pl").

## Uwagi

* Aby zapoznać się z poradnikiem wideo opartym na tym pisemnym poradniku, obejrzyj: [Poradnik FEM materiał zbrojony](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/pl&oldid=1388386>"
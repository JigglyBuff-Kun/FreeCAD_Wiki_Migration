---
title: Szkicownik Utwórz szkic
---
|  |
| --- |
| Szkicownik: Utwórz szkic |
| Lokalizacja w menu |
| Szkic → Utwórz szkic |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"), [Zmień orientację szkicu ...](/Sketcher_ReorientSketch/pl "Sketcher ReorientSketch/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_NewSketch.svg) **Utwórz szkic** tworzy nowy szkic i otwiera [okno dialogowe](/Sketcher_Dialog/pl "Sketcher Dialog/pl") edycji.

Należy pamiętać, że środowisko pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") ma własne polecenie [utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"), podczas pracy z obiektem [Projekt Części: Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") zaleca się używanie tego narzędzia.

## Użycie

1. Jeśli szkic powinien być [dołączony](/Part_EditAttachment/pl "Part EditAttachment/pl") do istniejącej geometrii: wybierz obiekt z kształtem, lub jeden lub więcej wierzchołków, krawędzi, i / lub ścian, oraz / lub płaszczyznę.
2. Istnieje kilka sposobów, aby uruchomić narzędzie:
   * Kliknij przycisk ![](/images/Sketcher_NewSketch.svg) Utwórz szkic.
   * Wybierz opcję z menu **Szkic → ![](/images/Sketcher_NewSketch.svg) Utwórz szkic**.
3. Jeśli została wybrana geometria:
   1. Otwiera się okno dialogowe **Dołączanie szkicu**.
   2. Wybierz [metodę dołączania](/Part_EditAttachment/pl#Tryby_dołączenia "Part EditAttachment/pl") z listy rozwijanej. Lub wybierz **Nie dołączaj**, aby zignorować wybór.
   3. Naciśnij przycisk OK.
4. Jeśli nie dokonano wyboru, lub w poprzednim kroku została wybrana opcja **Nie dołączaj**:
   1. Otwiera się okno dialogowe **Wybierz orientację**.
   2. Określ płaszczyznę dla orientacji. Płaszczyzna jest względem lokalnego układu współrzędnych, w którym znajduje się szkic:
      * Jeśli pole wyboru **Odwróć kierunek** nie jest zaznaczone:
        + Góra: **Płaszczyzna XY**
        + Przód: **Płaszczyzna XZ**
        + Prawo: **Płaszczyzna YZ**
      * Jeśli pole wyboru **Odwróć kierunek** jest zaznaczone:
        + Dół: **Płaszczyzna XY**
        + Tył: **Płaszczyzna XZ**
        + Lewo: **Płaszczyzna YZ**
   3. Opcjonalnie zmień **Odsunięcie**. Odsunięcie jest mierzone wzdłuż osi Z, Y lub X lokalnego układu współrzędnych.
   4. Naciśnij przycisk OK.
5. Tworzony jest szkic.
6. Szkic jest ustawiany w trybie edycji i otwiera się [okno dialogowe](/Sketcher_Dialog/pl "Sketcher Dialog/pl") szkicownika.
7. Aby zakończyć tryb edycji, zobacz informacje na stronie ![](/images/Sketcher_LeaveSketch.svg) [Zamknij szkic](/Sketcher_LeaveSketch/pl "Sketcher LeaveSketch/pl").

## Uwagi

* Istniejące szkice mogą być dołączane do *(różnych)* obiektów za pomocą narzędzia [Mapuj szkic na powierzchnię](/Sketcher_MapSketch/pl "Sketcher MapSketch/pl") lub odłączane i reorientowane za pomocą narzędzia [Zmień orientacje szkicu](/Sketcher_ReorientSketch/pl "Sketcher ReorientSketch/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/pl&oldid=1388903>"
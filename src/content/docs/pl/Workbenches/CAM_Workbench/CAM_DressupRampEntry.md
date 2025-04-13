---
title: CAM Ulepszenie - parkowanie narzędzia
---
|  |
| --- |
| CAM: Ulepszenie - parkowanie narzędzia |
| Lokalizacja w menu |
| CAM → Operacje wykańczające ścieżki → Parkowanie narzędzia |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [CAM: Ulepszenie - znacznik](/CAM_DressupTag/pl "CAM DressupTag/pl"), [CAM: Ulepszenie - nadcięcie w narożnikach](/CAM_DressupDogbone/pl "CAM DressupDogbone/pl"), [CAM: Ulepszenie - Rylec](/CAM_DressupDragKnife/pl "CAM DressupDragKnife/pl") |
|  |

## Opis

Narzędzie ![](/images/CAM_DressupRampEntry.svg) Parkowanie narzędzia wykańcza istniejącą ścieżkę aby dodać parkowanie narzędzia.

## Użycie

1. Wybierz obiekty konturu lub ścieżki profilu.
2. Wybierz opcję **CAM → Operacje wykańczające ścieżki → ![](/images/CAM_DressupRampEntry.svg) RampEntry** z menu.

## Właściwości

* **Ramp Feed Rate** : Może być bieżącą prędkością posuwu pionowego lub poziomego, albo jakąś inną wartością niestandardową.
* **Angle** : Kąt rampy względem osi pionowej. Mniejsza wartość sprawia, że rampa jest bardziej stroma.
* **Method** : Używana do wyboru różnych trybów parkowania:
  + *RampMethod1*: schodzi w dół pod kątem rampy, a następnie przesuwa się poziomo do punktu docelowego
  + *RampMethod2*: najpierw przesuwa się poziomo, a potem schodzi w dół pod kątem rampy do punktu docelowego
  + *RampMethod3*: schodzi w dół zygzakiem
  + *Helix*: schodzi spiralnie
* **Dressup Start Depth** : Odległość powyżej poziomu docelowego, gdzie zaczyna się parkowanie
* **Use Start Depth** : Oznacza, że parkowanie nie rozpoczyna się powyżej poziomu zapasu. Jeśli nie zostanie ustawiona na prawda, pierwsza rampa może być bardziej stroma niż oczekiwano.

![](/images/Ramp_method_1.png) ![](/images/Ramp_method_2.png) ![](/images/Ramp_method_3.png)

Od lewej do prawej: metody rampowania 1, 2 i 3

![](/images/Ramp_method_Helix.png)

Metoda rampowania Helisa

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupRampEntry/pl&oldid=1480318>"
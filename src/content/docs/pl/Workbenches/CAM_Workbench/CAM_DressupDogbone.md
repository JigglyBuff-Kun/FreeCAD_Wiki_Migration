---
title: CAM Ulepszenie - nadcięcie w narożnikach
---
|  |
| --- |
| CAM: Ulepszenie - nadcięcie w narożnikach |
| Lokalizacja w menu |
| CAM → Operacje wykańczające ścieżki → Nadcięcie w narożnikach |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [CAM: Ulepszenie - znacznik](/CAM_DressupTag/pl "CAM DressupTag/pl"), [CAM: Ulepszenie - parkowanie narzędzia](/CAM_DressupRampEntry/pl "CAM DressupRampEntry/pl"), [CAM: Ulepszenie - Rylec](/CAM_DressupDragKnife/pl "CAM DressupDragKnife/pl") |
|  |

## Opis

Narzędzie ![](/images/CAM_DressupDogbone.svg) Nadcięcie w narożnikach wykańcza istniejącą ścieżkę aby nadciąć narożniki w wewnętrznych kątach operacji profilu lub konturu. Cylindryczny nóż nie może ciąć całkowicie w narożnik o ostrym kącie bez kolizji z modelem. W pewnych przypadkach może być preferowane naruszenie modelu i upewnienie się, że materiał w narożniku jest usuwany. Jest to szczególnie konieczne gdy części będą się przecinać/zakleszczać.

## Użycie

1. Wybierz obiekty konturu lub ścieżki profilu [CAM](/CAM_Workbench/pl "CAM Workbench/pl").
2. Wybierz opcję **CAM → Operacje wykańczające ścieżki → ![](/images/CAM_DressupDogbone.svg) Nadcięcie w narożnikach** z menu.

## Opcje

* **Side**: Która strona ścieżki będzie modyfikowana.
* **Style**: Styl nadcięcia (Dogbone, T-Bone Poziomy, T-Bone Pionowy, T-Bone Długa Krawędź, T-Bone Krótka Krawędź).
* **Incision**: Algorytm używany do obliczania długości nadcięcia.
* **Custom**: Jeśli nacięcie jest niestandardowe, właściwość niestandardowa jest używana do ustawienia długości.

## Ograniczenia

Nadcięcie w narożnikach wymaga prostego segmentu ścieżki (G1) przed i po narożniku, w którym nadcięcie ma być wstawione.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupDogbone/pl&oldid=1480261>"
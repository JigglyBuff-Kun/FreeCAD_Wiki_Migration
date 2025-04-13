---
title: CAM Ulepszenie - znacznik
---
|  |
| --- |
| CAM: Ulepszenie - znacznik |
| Lokalizacja w menu |
| CAM → Operacje wykańczające dla ścieżki → Znacznik |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [CAM: Ulepszenie - parkowanie narzędzia](/CAM_DressupRampEntry/pl "CAM DressupRampEntry/pl"), [CAM: Ulepszenie - nadcięcie w narożnikach](/CAM_DressupDogbone/pl "CAM DressupDogbone/pl"), [CAM: Ulepszenie - Rylec](/CAM_DressupDragKnife/pl "CAM DressupDragKnife/pl") |
|  |

## Opis

Narzędzie ![](/images/CAM_DressupTag.svg) **Ulepszenie - pola mocujące** koryguje istniejącą ścieżkę *(zazwyczaj ścieżkę skrawania konturu 2D)*, aby pozostawić znaczniki, które utrzymują część w miejscu. Bez nich część *(która nie jest przymocowana do podstawy)* może w sposób niekontrolowany zostać wyrwana z maszyny podczas końcowego skrawania. Znaczniki są przeznaczone do odłamania ręcznie *(lub za pomocą dłuta)*, a następnie spiłowania na płasko w celu wykończenia części.

Objaśnienie działania tego narzędzia jest dostępne w formie wideo pod tym linkiem: <https://www.youtube.com/watch?v=JZ4prlR6sps>

## Użycie

1. Wybierz kontur lub obiekty ścieżki profilu.
2. Wybierz opcję **CAM → Operacje wykańczające dla ścieżki → ![](/images/CAM_DressupTag.svg) Znacznik** z menu.

## Opcje

* **Kąt** : Kontroluje kąt zagłębienia i wynurzenia gdy znacznik jest tworzony.
* **Wysokość** : Kontroluje wysokość szczytu znacznika od spodu cięcia profilu.
* **Promień** : Promień zaokrąglenia dla znacznika.
* **Współczynnik segmentacji** : Liczba segmentów do aproksymacji zaokrąglonego znacznika.
* **Szerokość** : Całkowita szerokość znacznika.

Znaczniki są automatycznie generowane jako równomiernie rozłożone wzdłuż konturu, zaczynając od największej krawędzi. Masz możliwość usunięcia dowolnych z nich lub zmiany ich położenia, tak że pojawiają się na wypukłych częściach zadania, gdzie łatwiej będzie spiłować nadmiarowy materiał.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupTag/pl&oldid=1479839>"
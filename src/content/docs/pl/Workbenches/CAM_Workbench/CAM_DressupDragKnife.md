---
title: CAM Ulepszenie - Rylec
---
|  |
| --- |
| CAM: Ulepszenie - rylec |
| Lokalizacja w menu |
| CAM → Operacje wykańczające ścieżki → Rylec |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [CAM: Ulepszenie - znacznik](/CAM_DressupTag/pl "CAM DressupTag/pl"), [CAM: Ulepszenie - parkowanie narzędzia](/CAM_DressupRampEntry/pl "CAM DressupRampEntry/pl"), [CAM: Ulepszenie - nadcięcie w narożnikach](/CAM_DressupDogbone/pl "CAM DressupDogbone/pl") |
|  |

## Opis

Narzędzie ![](/images/CAM_DressupDragKnife.svg) Rylec używa krawędzi tnącej zamontowanej na przegubie do cięcia materiałów arkuszowych, takich jak winyl, tektura czy skóra. Punkt tnący nie jest wyrównany z centrum wrzeciona, ale podąża za nim, gdy wrzeciono się porusza. Z powodu tego przesunięcia ścieżka musi zostać zmodyfikowana, aby wydłużyć ją poza punkt końcowy każdego segmentu. Dodatkowo, rylec nie jest zdolny do wykonywania bardzo ciasnych zakrętów. Aby to skompensować, wstawiany jest przegub 'akcja narożna', który chwilowo unosi ostrze i obraca je na nową pozycję.

To narzędzie wykańcza istniejącą ścieżkę aby dodać akcje narożnikowe i przedłużenia krawędzi do cięcia rylcem.

## Użycie

1. Wybierz obiekt konturu lub ścieżki profilu.
2. Wybierz opcję **CAM → Operacje wykańczające ścieżki → ![](/images/CAM_DressupDragKnife.svg) Rylec** z menu.

## Opcje

* **Kąt Filtra** : Określa, jak ostry musi być kąt, zanim zostanie wstawiona akcja narożnikowa.
* **Przesunięcie** : Wprowadź, o ile punkt ostrza jest przesunięty względem środka wrzeciona.
* **Wysokość obrotu** : Określa, na jaką wysokość należy podnieść ostrze tnące podczas akcji narożnikowej. Jest to zależne od materiału i powinno być większe dla grubszych materiałów. Idealnie, punkt powinien pozostać lekko w materiale.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupDragKnife/pl&oldid=1480281>"
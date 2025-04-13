---
title: Architektura Wiązar
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Wiązar |
| Lokalizacja w menu |
| 3D / BIM → Wiązar |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Wiązar** tworzy obiekt [wiązara](https://pl.wikipedia.org/wiki/Wi%C4%85zar_(budownictwo)) z wybranego obiektu liniowego *(takiego jak [linia](/Draft_Line/pl "Draft Line/pl") lub [szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"))* lub od podstaw, jeśli żaden obiekt nie został wybrany podczas uruchamiania polecenia.

![](/images/Arch_Truss_example.png)

## Użycie

### Tworzenie z wybranego obiektu

1. Użyj wybranego środowiska pracy, aby utworzyć pojedynczą linię
2. Wybierz tę linię.
3. Naciśnij przycisk ![](/images/Arch_Truss.svg) **Wiązar**.
4. Dostosuj właściwości kratownicy do swoich potrzeb.

### Tworzenie od podstaw

1. Upewnij się, że nic nie jest zaznaczone
2. Naciśnij przycisk ![](/images/Arch_Truss.svg) **Wiązar**.
3. Kliknij w widoku 3D, aby zdefiniować pierwszy punkt lub ręcznie wprowadź współrzędne X, Y i Z.
4. Kliknij w widoku 3D, aby zdefiniować drugi punkt lub ręcznie wprowadź współrzędne X, Y i Z.
5. Dostosuj właściwości kratownicy do własnych potrzeb.

## Właściwości

### Dane

* DANE**TrussAngle**: Kąt kratownicy.
* DANE**SlantType**: Typ skosu kratownicy.
* DANE**Normal**: Kierunek normalny kratownicy.
* DANE**HeightStart**: Wysokość kratownicy w pozycji początkowej.
* DANE**HeightEnd**: Wysokość kratownicy w pozycji końcowej.
* DANE**StrutStartOffset**: Opcjonalne przesunięcie początkowe dla górnej rozpórki.
* DANE**StrutEndOffset**: Opcjonalne przesunięcie końcowe dla górnej rozpórki.
* DANE**StrutHeight**: Wysokość głównych górnych i dolnych elementów kratownicy.
* DANE**StrutWidth**: szerokość głównego górnego i dolnego elementu kratownicy.
* DANE**RodType**: Typ środkowego elementu kratownicy.
* DANE**RodDirection**: Kierunek prętów.
* DANE**RodSize**: Średnica lub bok prętów.
* DANE**RodSections**: Liczba sekcji prętów.
* DANE**RodEnd**: Czy kratownica ma pręt w punkcie końcowym, czy nie.
* DANE**RodMode**: Sposób rysowania prętów.

## Tworzenie skryptów

Narzędzie **Wiązar** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Truss = makeFence([baseobj])

```

Przykład:

```
import FreeCAD
import Draft
import Arch

p1 = FreeCAD.Vector(0,0,0)
p2 = FreeCAD.Vector(2000,0,0)
baseline = Draft.makeLine(p1,p2)
truss = Arch.makeTruss(baseline)
truss.HeightStart = 200
truss.HeightEnd = 400
# adjust other needed properties

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/pl&oldid=1439134>"
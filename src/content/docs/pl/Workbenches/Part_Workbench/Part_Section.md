---
title: Part Iloraz dwóch obiektów - przecięcie
---
|  |
| --- |
| Część: Przecięcie |
| Lokalizacja w menu |
| Część → Operacje logiczne → Przecięcie |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Przekrój poprzeczny](/Part_CrossSections/pl "Part CrossSections/pl") |
|  |

## Opis

Polecenie ![](/images/f/f7/Part_Section.svg) **Przecięcie** tworzy geometrię polilinii na przecięciach dwóch obiektów. Wynik jest w pełni parametryczny.

* W wyniku przecięcia dwóch brył / powierzchni powstaje jeden lub więcej odcinków.
* W wyniku przecięcia dwóch prostych lub prostej i bryły / powierzchni otrzymujemy jeden lub więcej punktów.

![](/images/PartSection1_it.png)

Sześcian przecięty walcem

## Użycie

1. Wybierz dwa obiekty.
2. Pierwszym obiektem będzie DANE**Baza** przekroju, ale kolejność wyboru nie ma wpływu na wynik.
3. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/f/f7/Part_Section.svg) Przecięcie.
   * Wybierz z menu opcję **Część → ![](/images/f/f7/Part_Section.svg) Przecięcie**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Przecięcie wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

* DANE**Baza** (`Link`): Odnośnik do pierwszego obiektu.
* DANE**Narzędzie** (`Link`): Odnośnik do drugiego obiektu

Boolean

* DANE (ukryty)**Histry** (`ShapeHistory`): "Historia kształtu".
* DANE**Ulepsz** (`Bool`): "Ulepsz kształt (usuń zbędne krawędzie) po tej operacji logicznej". Wartość domyślna jest określana przez preferencję **Automatycznie dopracuj model po operacji opartej na szkicu**. Zobacz również stronę [ustawienia](/PartDesign_Preferences/pl#Og.C3.B3lne "PartDesign Preferences/pl") środowiska pracy Projekt Części.

Przekrój

* DANE**Approksymacja** (`Bool`): Przybliż krawędzie wynikowe.

## Odnośniki internetowe

Aby utworzyć przekroje za pomocą płaszczyzny przekroju, zobacz stronę ![](/images/Part_CrossSections.svg)

```
Przekrój poprzeczny.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Section/pl&oldid=1302478>"
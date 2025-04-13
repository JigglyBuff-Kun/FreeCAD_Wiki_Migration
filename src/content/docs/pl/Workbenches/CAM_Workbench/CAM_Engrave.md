---
title: CAM Grawer
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Grawer |
| Lokalizacja w menu |
| CAM → Grawer |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_Engrave.svg) Grawer służy głównie do grawerowania obiektów ![](/images/Draft_ShapeString.svg) [Rysunek Roboczy: Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") na częściach. Może być jednak użyteczne do innych operacji 2D.

## Użycie

Pusto

## Opcje

Pusto

## Właściwości

### Dane

Podstawa

* DANE**Placement**:
* DANE**Label**: Dostosowywalna nazwa obiektu (UTF-8)

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do ominięcia zacisków i przeszkód
* DANE**Final Depth**: Ostateczna głębokość narzędzia - najniższa wartość w osi Z
* DANE**Safe Height**: Wysokość, powyżej której dozwolone są ruchy szybkie
* DANE**Start Depth**: Początkowa głębokość narzędzia - pierwsza głębokość cięcia w osi Z
* DANE**Step Down**: Przyrostowa głębokość narzędzia

Ścieżka

* DANE**Active**: Ustaw na Fałsz, aby zapobiec generowaniu kodu dla tej operacji
* DANE**Base**: Geometria bazowa dla tej operacji
* DANE**Comment**: Opcjonalny komentarz do tej operacji
* DANE**Coolant Mode**: Tryb chłodzenia dla tej operacji
* DANE**Cycle Time**: Szacowany czas cyklu dla tej operacji
* DANE**Start Vertex**: Indeks wierzchołka, od którego zaczyna się ścieżka
* DANE**Tool Controller**: Kontroler narzędziowy, który będzie używany do obliczenia ścieżki
* DANE**User Label**: Etykieta przypisana przez użytkownika

Ukryte

* DANE**Base Object**:
* DANE**Base Shapes**:
* DANE**Expression Engine**:
* DANE**Label2**:
* DANE**Path**:
* DANE**Proxy**:
* DANE**Visibility**:

### Widok

Pusto

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Przykład:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Engrave/pl&oldid=1480175>"
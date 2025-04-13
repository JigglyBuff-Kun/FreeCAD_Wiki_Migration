---
title: Krzywe Spłaszcz ścianę
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Spłaszcz ścianę |
| Lokalizacja w menu |
| Surfaces → Flatten face |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Curves_FlattenFace.svg) **Curves FlattenFace** tworzy płaską ścianę ze ścian stożkowych lub walcowych.

![](/images/Curves_FlattenFace01.png)

Ścięty stożek i dwa spłaszczone obiekty, jeden na miejscu (zielony) i jeden na płaszczyźnie XY (czerwony)

## Użycie

1. Wybierz jedną lub więcej ścian stożkowych lub walcowych.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_FlattenFace.svg) [Flatten face](/Curves_FlattenFace "Curves FlattenFace").
   * Wybierz opcję **Surfaces → ![](/images/Curves_FlattenFace.svg) Flatten face** z menu.
3. Dla każdej wybranej ściany zostanie utworzony obiekt **Flatten**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Flatten** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Ustawienia

* DANE**InPlace** (`Bool`): Rozwiń ścianę w miejscu.
  + `Prawda`: Wynikowa powierzchnia będzie umieszczona tak, że będzie styczne do ściany źródłowej w linii szwu.
  + `Fałsz`: Wynikowa powierzchnia będzie na domyślnej płaszczyźnie XY.
* DANE (Hidden)**Size** (`Float`): Rozmiar powierzchni

Źródło

* DANE**Source** (`LinkSub`): Stożkowa ściana do spłaszczenia

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_FlattenFace/pl&oldid=1571178>"
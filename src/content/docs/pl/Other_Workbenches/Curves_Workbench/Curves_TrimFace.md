---
title: Krzywe Przytnij ścianę
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Przytnij ścianę |
| Lokalizacja w menu |
| Surfaces → Trim face |
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

Narzędzie ![](/images/Curves_TrimFace.svg) **Curves TrimFace** przycina ścianę rzutowaną krzywą.

## Użycie

1. Wybierz ścianę i krzywą.
2. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Wciśnij przycisk ![](/images/Curves_TrimFace.svg) Przytnij ścianę.
   * Wybierz opcję **Surfaces → ![](/images/Curves_TrimFace.svg) Trim face** z menu.
3. Utworzony zostanie obiekt **TrimmedFace**.

## Uwagi

* Punkt wybrany do wskazania ściany definiuje stronę rzutowanej krzywej, która zostanie zachowana.
* Wektor rzutowania jest wektorem kierunku wybranej krzywej jeśli jest dostępna lub bieżącym kierunkiem aktywnego widoku.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **TrimmedFace** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Trim Face

* DANE**Vector** (`Link`): Wektor przycinania.
* DANE**Direction** (`Vector`): Kierunek przycinania.
* DANE**Face** (`LinkSub`): Wejściowa ściana
* DANE**Picked Point** (`Vector`): Wybrany punkt w przestrzeni parametrycznej ściany (u,v,0).
* DANE**Tool** (`LinkSubList`): Krzywa przycinająca.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_TrimFace/pl&oldid=1569714>"
---
title: Krzywe Edytowalna krzywa złożona
---
|  |
| --- |
| Krzywe: Edytowalna krzywa złożona |
| Lokalizacja w menu |
| Curves → Freehand BSpline |
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

Narzędzie ![](/images/Curves_EditableSpline.svg) **Edytowalna krzywa złożona** tworzy krzywą złożoną kreśloną "odręcznie".

## Użycie

1. Opcjonalnie wybierz wierzchołki, krawędzie i/lub ściany:
   * Liczba wierzchołków krzywej będzie zgodna z liczbą wybranych elementów.
   * Wierzchołki krzywej zostaną przyciągnięte do wybranych wierzchołków oraz do punktów środkowych wybranych krawędzi i powierzchni.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_EditableSpline.svg) Freehand BSpline.
   * Wybierz opcję **Curves → ![](/images/Curves_EditableSpline.svg) Freehand BSpline** z menu.
3. Obiekt **Freehand\_BSpline** zostanie utworzony i ustawiony w specjalnym trybie edycji.
4. Przeciągnij krzywą do żądanego kształtu. Zobacz opcje poniżej aby uzyskać więcej informacji.
5. Wciśnij klawisz Q lub kliknij prawym przyciskiem myszy na krzywej w [Widoku drzewa](/Tree_view/pl "Tree view/pl") i wybierz opcję **Finish editing** w menu kontekstowym aby wyjść z trybu edycji i zakończyć działanie polecenia.

## Opcje

Podczas wykonywania polecenia aktywny jest specjalny tryb edycji, w którym dostępnych jest kilka akcji i zachowań, które można kontrolować za pomocą klawiszy i kliknięć myszą.

* Aby przesunąć wierzchołek lub linię prowadzącą *(linie prowadzące to linie proste między wierzchołkami)*, naciśnij i przytrzymaj lewy przycisk myszy, a następnie przesuń kursor myszy.
* Klawisz A zaznacza lub odznacza wszystkie wierzchołki i linie prowadzące.
* Klawisz I doda wierzchołek do segmentu należącego do wybranej linii prowadzącej. Nowy wierzchołek zostanie zaznaczony.
* Klawisz T ustawia lub wyłącza tryb styczny dla wybranych wierzchołków lub linii pomocniczych *(względem kierunku widoku)*.
* Klawisz P wyrównuje wybrane obiekty.
* Klawisz S może być użyty do przyciągnięcia wierzchołka do wierzchołka należącego do innej krzywej złożónej. Po zaznaczeniu wierzchołka edytowanej krzywej złozonej, przytrzymaj klawisz Ctrl i dodaj wierzchołek docelowy do zaznaczenia, a następnie naciśnij klawisz S. Wierzchołki zostaną ze sobą połączone.
* Aby odłączyć wierzchołki, zaznacz przyciągniętą parę wierzchołków i ponownie naciśnij klawisz S. Wierzchołek edytowanej krzywej złozonej pozostaje zaznaczony i może być teraz przesuwany.
* Klawisz L ustawia lub wyłącza interpolację liniową.
* Klawisze X, Y lub Z mogą być użyte do ograniczenia ruchu przeciąganego obiektu. Podczas przeciągania naciśnij żądany klawisz osi. Ponowne naciśnięcie tego samego klawisza wyłącza ograniczenie.
* Klawisz Q kończy polecenie i wychodzi z trybu edycji.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Freehand\_BSpline** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Profil

* DANE**Data** (`VectorList`): Lista danych.
* DANE**Data Type** (`IntegerList`): Typy interpolowanych punktów.
* DANE**Flags** (`BoolList`): Flagi styczne.
* DANE**Linear Segments** (`BoolList`): Flagi liniowych segmentów.
* DANE**Parametrization** (`FloatConstraint`): Współczynnik parametryzacji.
* DANE**Periodic** (`Bool`): Krzywa periodyczna.
* DANE**Support** (`LinkSubList`): Kształty wiązań.
* DANE**Tangents** (`VectorList`): Lista styczności.
* DANE**Tolerance** (`Float`): Tolerancja.

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_EditableSpline/pl&oldid=1567218>"
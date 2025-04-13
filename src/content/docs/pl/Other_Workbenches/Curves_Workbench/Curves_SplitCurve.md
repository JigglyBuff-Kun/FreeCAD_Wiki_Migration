---
title: Krzywe Podziel krzywą
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Podziel krzywą |
| Lokalizacja w menu |
| Curves → Split curve |
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

Narzędzie ![](/images/Curves_SplitCurve.svg) **Podziel krzywą** dzieli wybrane krawędzie.

## Użycie

1. Wybierz jedną lub więcej krawędzi w [widoku 3D](/3D_view/pl "3D view/pl").
2. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Naciśnij przycisk ![](/images/Curves_SplitCurve.svg) Split curve.
   * Wybierz opcję **Curves → ![](/images/Curves_SplitCurve.svg) Split curve** z menu.
3. Dla każdej wybranej krawędzi utworzony zostanie obiekt **SplitCurve**.

   :   Domyślnie krawędź jest dzielona według **Number** na 2 równe segmenty krzywej.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"), aby aktywować różne metody podziału poprzez ustawienie powiązanych właściwości (zobacz Właściwości poniżej):
   * Zmień właściwość DANE**Number**, aby zwiększyć liczbę równych segmentów; `0` lub `1` dezaktywuje tę metodę podziału.
   * Ustaw właściwość DANE**Distance**, aby podzielić obiekt SplitCurve w określonej odległości od wierzchołka początkowego (dla wartości dodatnich) lub od wierzchołka końcowego (dla wartości ujemnych). `0.0 mm` dezaktywuje tę metodę podziału.
   * Załaduj jeden lub więcej obiektów tnących do właściwości DANE**Cutting Objects** (kliknij pole i naciśnij ..., a następnie wybierz jedną lub więcej krawędzi i/lub polilinii w oknie dialogowym).
     1. Jeśli właściwość DANE**Cut At Vertexes** ma wartość `Fałsz`, obiekt SplitCurve zostanie podzielony w punktach przecięcia lub w miejscu najkrótszej odległości, jeśli obiekt tnący nie przecina go ani nie jest styczny.
     2. Jeśli właściwość DANE**Cut At Vertexes** ma wartość `Prawda`, wszystkie wierzchołki obiektów tnących zostaną rzutowane na obiekt SplitCurve, który zostanie podzielony w każdym z rzutowanych punktów.
   * Dodaj wartości odległości do właściwości DANE**Values**, aby podzielić obiekt SplitCurve na kilka odcinków w określonych odległościach od wierzchołka początkowego (dla wartości dodatnich) lub od wierzchołka końcowego (dla wartości ujemnych) (kliknij pole i naciśnij ..., a następnie wprowadź jedną lub więcej wartości w oknie dialogowym). Każda wartość może być długością lub procentem.

## Uwagi

* To narzędzie umożliwia również wybranie obiektu zawierającego polilinię w [Widoku drzewa](/Tree_view/pl "Tree view/pl") jako krawędzi wejściowej. Jeśli obiekt zawiera więcej niż jedną krawędź, wszystkie poza pierwszą są ignorowane.
* Metody podziału, które niezależnie dodają miejsca podziału do końcowego wyniku:
  1. Według liczby: Ustaw właściwość DANE**Number** na wartość większą niż 1, aby uzyskać odcinki o równych długościach.
  2. Pojedyncza odległość: Ustaw właściwość DANE**Distance** na wartość inną niż `0.0 mm`.
  3. Kilka odległości: Dodaj wartości odległości do właściwości DANE**Values**, jako wartości bezwzględne (mm) lub względne (%).
  4. Obiekty tnące: Dodaj obiekty tnące do właściwości DANE**Cutting Objects**,
     + Punkty przecięcia: Ustaw właściwość DANE**Cut At Vertexes** na `false`, aby dokonać podziału w punktach przecięcia.
     + Najkrótsza odległość: Jak wcześniej, aby podzielić w miejscu najkrótszej odległości, gdy obiekt tnący nie przecina ani nie dotyka.
     + Rzutowane punkty: Ustaw właściwość DANE**Cut At Vertexes** na `true`, aby podzielić w miejscach, gdzie wierzchołki obiektu tnącego są rzutowane na obiekt SplitCurve.
* Wartości właściwości DANE**Values** można również zmieniać, przeciągając wierzchołki w [widoku 3D](/3D_view/pl "3D view/pl"), gdy obiekt SplitCurve jest w trybie edycji (kliknij dwukrotnie obiekt SplitCurve w [Widoku drzewa](/Tree_view/pl "Tree view/pl"), aby przełączać tryb).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **SplitCurve** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Source** (`LinkSub`): Krawędź do podziału.

Wynik

* DANE**Normalized Parameters** (`FloatList`): Znormalizowana lista parametrów.

Split

* DANE**Cut At Vertexes** (`Bool`): Utwórz punkt podziału w najbliższym ze wszystkich wierzchołków obiektów tnących.
* DANE**Cutting Objects** (`LinkList`): Lista obiektów, które przecinają krzywą.
* DANE**Distance** (`Distance`): Wartość odległości gotowa do użycia w wyrażeniach.
* DANE**Keep Solid** (`Bool`): Przebuduj i wygeneruj kompletny kształt.
* DANE**Number** (`Integer`): Liczba równych segmentów.
* DANE**Values** (`StringList`): Lista lokalizacji podziału.

  :   % i jednostki są dozwolone.
  :   Ujemne wartości są obliczane od końca krawędzi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SplitCurve/pl&oldid=1569582>"
---
title: Arkusz Blachy Rozwiń
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Arkusz Blachy: Rozwiń |
| Lokalizacja w menu |
| SheetMetal → Rozwiń |
| Środowisko pracy |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót |
| U |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Rozwiń bezobsługowo](/SheetMetal_UnattendedUnfold/pl "SheetMetal UnattendedUnfold/pl") |
|  |

## Opis

Polecenie ![](/images/SheetMetal_Unfold.svg) **Rozwiń** rozkłada obiekt z blachy.

## Użycie

1. Wybierz płaską powierzchnię części z blachy.
2. To polecenie można wywołać na kilka sposobów:
   * Wciśnij przycisk ![](/images/SheetMetal_Unfold.svg) **Rozwiń**.
   * Wybierz opcję **SheetMetal → ![](/images/SheetMetal_Unfold.svg) Rozwiń** z menu.
   * Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Sheet Metal → ![](/images/SheetMetal_Unfold.svg) [Rozwiń](/SheetMetal_Unfold "SheetMetal Unfold")** z menu kontekstowego.
   * Użyj skrótu klawiaturowego: U.
3. Utworzony zostanie obiekt **Unfold** i otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Właściwości rozwinięcia**.
   * Opcjonalnie wciśnij przycisk Ściana i wybierz inną płaską ścianę aby zmienić położenie obiektu Unfold.
   * Jeśli nie używasz **Material Definition Sheet** (zobacz [Uwagi](#Uwagi)) ustaw **Material Settings**:
     1. Ustaw opcję **Material Definition Sheet** na `Manual K-Factor`.
     2. Dostosuj wartość **Manual K-Factor** (zobacz [Uwagi](#Uwagi)).
     3. Opcjonalnie przełącz przyciski **ANSI** lub **DIN** (zobacz [Uwagi](#Uwagi)).
   * Jeśli potrzebujesz geometrii 2D do eksportu, ustaw opcje **Unfold Sketch Generation**:
     1. Zaznacz **Generate projection sketch**
     2. Obiekt **Unfold\_Sketch** zostanie dodany do obiektu Unfold.
     3. Opcjonalnie dostosuj kolor obiektu Unfold\_Sketch.
     4. Aby rozdzielić linie gięcia i wewnętrzne linie od linii obwodu:
        + zaznacz **Separate projection layers**.
        + Obiekty **Unfold\_Sketch\_Bends** i **Unfold\_Sketch\_Internal** zostaną dodane do obiektu Unfold.
        + Opcjonalnie dostosuj **Bend lines color** i **Internal lines color**.
     5. Opcjonalnie przełącz format pliku do eksportu przyciskami **DXF** i **SVG**.
     6. Wciśnij przycisk Eksport aby otworzyć okno dialogowe **Export unfold sketch** i zapisać plik.
   * Opcjonalnie dostosuj **Unfold Transparency**.
   * Jeśli wolisz wyłączyć automatyczne aktualizacje: Zaznacz **Manual update**.
     + Wciśnij przycisk Aktualizuj aby zastosować zmiany wprowadzone w panelu zadań.
4. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
5. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Panel zadań

Panel zadań został wprowadzony w wersji 0.6.10

Dwukrotnie kliknij na istniejącym obiekcie Unfold w [Widoku drzewa](/Tree_view/pl "Tree view/pl") aby ponownie otworzyć panel zadań i edytować parametry.

![](/images/SheetMetal_Unfold-Task.png)

* **Material Definition Sheet**: Przełącza właściwość **Material Sheet**.
* **Manual K-Factor**: Ustawia właściwość **KFactor**.
* **Standard**: Przyciski przełączają właściwość **KFactor Standard**.
* Pole **Generate projection sketch**: Przełącza właściwość **Generate Sketch** i aktywuje:
  + Górny selektor kolor dla obiektu **Unfold\_Sketch**.
  + Pole **Separate projection layers**: Przełącza właściwość **Separate Sketch Layers** i aktywuje:
    - **Bend lines color**: Selektor kolor dla obiektu **Unfold\_Sketch\_Bends**.
    - **Internal lines color**: Selektor koloru dla obiektu **Unfold\_Sketch\_Internal**.
  + Przyciski **DXF** i **SVG**: Przełączają format pliku do eksportu.
  + Przycisk Export: Otwiera okno dialogowe **Export unfold sketch** do zapisania eksportowanego pliku.
* **Unfold Transparency**: Ustawia właściwość widoku **Transparency** obiektu Unfold.
* Pole **Manual update**: Przełącza właściwość **Manual Recompute** i aktywuje:
  + Przycisk Update: Włącza aktualizacje obiektu Unfold i powiązanych szkiców podczas gdy panel zadań jest aktywny.

## Uwagi

* Zobacz sekcje [Material Definition Sheet](https://github.com/shaise/FreeCAD_SheetMetal#material-definition-sheet) i [K-factor](https://github.com/shaise/FreeCAD_SheetMetal#physical-material-definitions) strony projektu aby uzyskać więcej informacji.
* Wyjaśnienie różnych zakresów wartości ISO i ANSI współczynników K można znaleźć w tabeli na [tej](https://de.wikipedia.org/wiki/Biegeverkürzung#Korrektur_durch_den_sog._k-Faktor) stronie (po niemiecku).
* Nowy SheetMetal Unfolder został wprowadzony w wersji 0.7.0. Preferencja **Revert To Old Unfolder** również została dodana.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Rozwiń** środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Nie ma on dodatkowych właściwości.

## Ograniczenia

* Blacha powinna mieć stałą grubość.
* Płaskie powierzchnie nie powinny zawierać linii podziału.
* Płaskie powierzchnie muszą być prawdziwie płaskie i nie mogą być aproksymacjami krzywych złożonych.
* Powierzchnie kątów gięcia muszą być prawdziwie cylindryczne i nie mogą być aproksymacjami krzywych złożonych.
* Wersje przed 0.5.00: Funkcja Rozwiń nie jest parametryczna. Jeśli model zostanie zmodyfikowany, należy go ponownie rozłożyć.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Unfold/pl&oldid=1546088>"
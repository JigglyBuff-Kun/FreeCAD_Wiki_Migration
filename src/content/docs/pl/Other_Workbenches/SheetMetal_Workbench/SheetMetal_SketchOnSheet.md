---
title: Arkusz Blachy Szkic na arkuszu blachy
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Arkusz Blachy: Szkic na arkuszu blachy |
| Lokalizacja w menu |
| SheetMetal → Szkic na arkuszu blachy |
| Środowisko pracy |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót |
| M S |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/SheetMetal_SketchOnSheet.svg) Szkic na arkuszu blachy wycina otwory wzdłuż zagiętych ścian obiektu z blachy. Do rozmieszczenia otworów wykorzystuje się ![](/images/Workbench_Sketcher.svg) [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

W przeciwieństwie do polecenia ![](/images/PartDesign_Pocket.svg) [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") środowiska pracy Projekt Części, gdzie otwory są po prostu wycinane wzdłuż normalnej szkicu *(lokalnej osi Z)*, to narzędzie działa tak, jakby rozkładało obiekt z blachy, wycinało otwory i ponownie składało obiekt.

## Użycie

1. Wybierz **płaską powierzchnię**.
2. Dodaj współpłaszczyznowy ![](/images/Workbench_Sketcher.svg) [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl") *(tj. leżący na tej samej płaszczyźnie)* dla **układu otworów** do wskazania *(najlepiej z [widoku drzewa](/Tree_view/pl "Tree view/pl"))*.
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/SheetMetal_SketchOnSheet.svg) Szkic na arkuszu blachy.
   * Wybierz opcję **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Szkic na arkuszu blachy** z menu.
   * Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Szkic na arkuszu blachy** z menu kontekstowego.
   * Użyj skrótu klawiaturowego: M a następnie S.
4. Utworzony zostanie obiekt **SketchOnSheet** składający się z otworów rozpoczynających się na wskazanej płaszczyźnie i podążających wzdłuż zgięć i ścian.
5. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Uwagi

* Szkic może zawierać więcej niż jeden kontur.
* Każdy kontur musi przynajmniej dotykać powierzchni planarnej, w przeciwnym razie nie zostanie wycięty żaden otwór.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Szkic na arkuszu blachy** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

* DANE**Szkic** (`Link`): "Szkic na blasze". Łącze do układu otworów/szkicu wycięcia.
* DANE**Obiekt bazowy** (`LinkSub`): "Obiekt bazowy". Łącze do płaskiej powierzchni, od której rozpoczyna się wycięcie.
* DANE**Współczynnik K** (`FloatConstraint`): "Szczelina z lewej strony". Wartość domyślna: `0,50`.

## Przykład

![](/images/SheetMetal_SketchOnSheet-05.png)

Prosta rzecz do zrobienia

### Przygotowanie

Ten przedmiot jest wykonany ze złożonej blachy z dodanymi otworami.   
Dlatego należy wcześniej przygotować jeden otwarty szkic konturu blachy i jeden szkic układu otworów.   
Pierwsza linia prosta pierwszego szkicu musi być współpłaszczyznowa względem drugiej płaszczyzny szkicu, co spowoduje, że szkic i powierzchnia będą współpłaszczyznowe w następnych krokach.

![](/images/SheetMetal_SketchOnSheet-01.png)

Tylko kontur i układ otworów

### Przepływ pracy

1. Utwórz zagięty obiekt z blachy
   1. Wybierz szkic **konturu**   
       ![](/images/SheetMetal_SketchOnSheet-02.png).
   2. Naciśnij przycisk ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") button   
       lub użyj skrutu: C + F   
       ![](/images/SheetMetal_SketchOnSheet-03.png)
2. Wytnij kilka otworów
   1. Wybierz **płaską powierzchnię**
   2. Wybierz szkic układu otworów   
       ![](/images/SheetMetal_SketchOnSheet-04.png)
   3. Naciśnij przycisk ![](/images/SheetMetal_SketchOnSheet.svg) [Sketch On Sheet metal](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet") button   
       lub użyj skrutu: M + S   
       ![](/images/SheetMetal_SketchOnSheet-05.png)   
         
       Done!
3. Kilka wskazówek
   1. Sprawdź, czy grubość zagiętego obiektu jest budowana po prawej stronie.   
       ![](/images/SheetMetal_SketchOnSheet-06.png)   
        
       Żółty kontur powinien leżeć na górnej powierzchni dolnego zagięcia *(jak pokazano)*.  
       Aby odwrócić kierunek, ustaw wartość właściwości **Strona gięcia** *(Zewnętrzna <-> Wewnętrzna)*.
   2. **Kształty otworów** nie dotykające używanej płaskiej powierzchni nie będą wycinać otworów w złożonym obiekcie.   
       ![](/images/SheetMetal_SketchOnSheet-07.png)   
       Dolny prostokąt, który prawie nie dotyka wspomnianej powierzchni, wycina otwór, podczas gdy górny kształt szczeliny nie.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_SketchOnSheet/pl&oldid=1544967>"
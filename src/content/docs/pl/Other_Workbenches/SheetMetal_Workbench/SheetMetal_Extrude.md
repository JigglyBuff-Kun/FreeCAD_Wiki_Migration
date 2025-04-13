---
title: Arkusz Blachy Wydłuż ściankę
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                     |
| ------------------------------------------------------------------- |
| Arkusz blachy: Wydłuż ściankę                                       |
| Lokalizacja w menu                                                  |
| SheetMetal → Wydłuż ściankę                                         |
| Środowisko pracy                                                    |
| [Arkusz blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót                                                      |
| E                                                                   |
| Wprowadzono w wersji                                                |
| -                                                                   |
| Zobacz także                                                        |
| _brak_                                                              |
|                                                                     |

## Opis

Narzędzie ![](/images/SheetMetal_Extrude.svg) **Wydłuż ściankę** rozciąga blachę na wybranej krawędzi.

Tworzy **proste przedłużenie** wzdłuż wektora normalnego wybranej krawędzi:

![](/images/SheetMetal_Extrude-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-02.png)

Dodanie szkicu konturu powoduje utworzenie **geometrii zazębienia** w celu zamknięcia profilu:

![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Trzy profile ze szkicami do dodania → trzy wyniki

## Użycie

### Prosty Wydłużenie

1. Wybierz jedną lub więcej krawędzi, które mają zostać wyciągnięte.
2. To polecenie można wywołać na kilka sposobów:
   - Wciśnij przycisk ![](/images/SheetMetal_Extrude.svg) Wydłuż ściankę.
   - Wybierz opcję **Sheet Metal → ![](/images/SheetMetal_Extrude.svg) Wydłuż ściankę** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Sheet Metal → ![](/images/SheetMetal_Extrude.svg) Wydłuż ściankę** z menu kontekstowego.
   - Użyj skrótu klawiaturowego: E.
3. Utworzony zostanie obiekt **Extend** i otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Extend properties** (wprowadzony w wersji 0.5.00).

   : Dla każdej wskazanej ściany zostanie wyciągnięte nowe przedłużenie ściany.

4. Opcjonalnie wciśnij przycisk Wybierz i dodaj lub usuń ściany.
   - Wciśnij przycisk Podgląd aby zakończyć wybór i wyświetlić zmiany.
5. Ustaw parametry w panelu zadań.
6. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
7. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Panel zadań

Panel zadań został wprowadzony w wersji 0.5.00

Dwukrotnie kliknij na istniejącym obiekcie Extend w [Widoku drzewa](/Tree_view/pl "Tree view/pl") aby ponownie otworzyć panel zadań i edytować parametry.

![](/images/SheetMetal_Extrude-Task.png)

- Select: Zmnienia liczbę ścian we właściwości **base Object**.
- **Length**: Ustawia właściwość **length**.
- **Offset A**: Ustawia właściwość **gap 1**.
- **Offset B**: Ustawia właściwość **gap 2**.
- **Refine**: Przełącza właściwość **Refine**.

### Przedłużenie z blokadą

: (Przygotuj a ![](/images/Workbench_Sketcher.svg) [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl") dla blokujących się zakładek)

1. Wybierz krawędź ściany do przedłużenia.
2. Wywołaj polecenie zgodnie z powyższym opisem.
3. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
4. W [Edytorze właściwości](/Property_editor/pl "Property editor/pl") wciśnij przycisk ... właściwości DANE**Sketch**.
5. Otwarte zostanie okno dialogowe Link.
   - Wybierz przygotowany szkic z listy.
   - Wciśnij przycisk OK aby zamknąć okno dialogowe.
6. Ustaw wartość właściwości DANE**Użyj odejmowania** na `PRAWDA`, aby utworzyć wycięcia na przedłużenia.
7. Ustaw właściwość DANE**Odsunięcie**, aby dostosować prześwit wokół rozszerzenia.

![](/images/SheetMetal_Extrude-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Trzy profile → położenie szkiców → wyniki bez wycięć → wyniki końcowe.

## Uwagi

- Szkic może zawierać więcej niż jeden kontur.

Po wstawieniu szkicu co najmniej jeden z jego konturów musi dotykać co najmniej jednej przeciwległej ściany, w przeciwnym razie narzędzie nie utworzy żadnego przedłużenia lub wycięcia.

Wystarczy jeden kontur dotykający przeciwległej ściany, aby utworzyć geometrię rozszerzenia ze wszystkich konturów szkicu.

- Każde wycięcie będzie miało kształt prostopadłościanu, niezależnie od kształtu odpowiadającego mu szkicu konturu.

- Kształty inne niż prostokąty mogą zachowywać się nieco dziwnie i nawet jeśli obiekt można rozłożyć, wynik nie będzie zgodny z oczekiwaniami.

![](/images/SheetMetal_Extrude-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-08.png)

Trzy szkice i wynikające z nich rozszerzenia: oddzielna trójkątna płyta z prostokątnym wycięciem, okrąg bez prześwitu → rozłożona bryła jest podzielona w nieoczekiwanym miejscu.

- W operacji rozszerzenia zaleca się pozostawienie właściwości DANE**Ulepsz** ustawionej na `PRAWDA` _(domyślnie)_.

- Operacja rozszerzenia z połączonym szkicem może się nie powieść z powodu problemów z współpłaszczyznowością, jeśli powierzchnia po stronie szkicu i powierzchnia po przeciwnej stronie są współpłaszczyznowe, ale mają przeciwne orientacje. Niewielkie przesunięcie może pomóc w takim przypadku.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt wydłużenia ścianki środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**Obiekt bazowy** (`LinkSub`): Obiekt bazowy. Łącze do powierzchni planarnej, która ma zostać rozszerzona.
- DANE**Szczelina1** (`Distance`): Szczelina z prawej strony. Wartość domyślna: `0,00 mm`.
- DANE**Szczelina2** (`Distance`): Szczelina z lewej strony. Wartość domyślna: `0,00 mm`.
- DANE**Długość** (`Length`): Długość ściany. Wartość domyślna: `10,00 mm`.

Parametry Ext

- DANE**Odsunięcie** (`Distance`): Odsunięcie dla odejmowania. Wartość domyślna: `20,00 µm`.
- DANE**Ulepsz** (`Bool`): Użyj ulepszania. Wartość domyślna: `PRAWDA`.
- DANE**Szkic** (`Link`): Szkic ściany.
- DANE**Użyj odejmowania** (`Bool`): Użyj odejmowania. Wartość domyślna: `FAŁSZ`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Extrude/pl&oldid=1546084>"

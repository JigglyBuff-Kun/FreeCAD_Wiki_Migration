---
title: Arkusz Blachy Wykonaj podcięcie narożnika
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                     |
| ------------------------------------------------------------------- |
| Arkusz Blachy: Dodaj podcięcie narożnika                            |
| Lokalizacja w menu                                                  |
| SheetMetal → Dodaj podcięcie narożnika                              |
| Środowisko pracy                                                    |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót                                                      |
| C R                                                                 |
| Wprowadzono w wersji                                                |
| -                                                                   |
| Zobacz także                                                        |
| _brak_                                                              |
|                                                                     |

## Opis

Polecenie ![](/images/SheetMetal_AddCornerRelief.svg) **Dodaj podcięcie narożnika** dodaje podcięcie w narożniku. Podcięcie jest zwykle tworzone w narożnikach, w których spotykają się dwa zagięcia, ale polecenie może również utworzyć podcięcie w otwartym narożniku.

Polecenie może utworzyć tylko jedno podcięcie naraz.

![](/images/SheetMetal_AddCornerRelief-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-02.png)

Domyślny narożnik z dwoma zagięciami → Narożnik z dodatkowym podcięciem narożnym.

![](/images/SheetMetal_AddCornerRelief-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-04.png)

Domyślny otwarty narożnik → Otwarty narożnik z dodatkowym podcięciem.

## Użycie

1. Wybierz jedną lub więcej krawędzi.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/SheetMetal_AddCornerRelief.svg) Wykonaj podcięcie narożnika.
   - Wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddCornerRelief.svg) Wykonaj podcięcie narożnika** z menu.
   - Kliknij prawym przyciskiem myszy w [widoju drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Sheet Metal → ![](/images/SheetMetal_AddCornerRelief.svg) Wykonaj podcięcie narożnika** z menu kontekstowego.
   - Użyj skrótu klawiaturowego: C a następnie R.
3. Utworzony zostanie obiekt **CornerRelief** i otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Właściwości podcięcia narożnika** (wprowadzony w wersji 0.5.00).

   : Nowe podcięcie narożnika zostanie dodane dla wskazanego narożnika.

4. Opcjonalnie wciśnij przycisk Wybierz aby ponownie wybrać krawędzie.
   - Wciśnij przycisk Podgląd aby zakończyć wybór i wyświetlić zmiany.
5. Opcjonalnie ponownie wybierz jeden z przycisków **Typ podcięcia**:
   - Przycisk **Okrągłe** tworzy zaokrąglone podcięcie narożnika.
   - Przycisk **Kwadratowe** tworzy kwadratowe podcięcie narożnika.
   - Przycisk **Szkic** tworzy podcięcie narożnika oparte o szkic.
     1. Wciśnij przycisk Szkic aby wybrać szkic.
     2. Opcjonalnie dostosuj parametry **Odsunięcie X** i **Odsunięcie Y**.
6. Opcjonalnie przełącz przyciski **Rozmiar podcięcia**:
   - Wybierz **Bezwzględny** i wprowadź **Rozmiar podcięcia** w mm.
   - Wybierz **Względny** i wprowadź **Współczynnik skali**.
7. Opcjonalnie dostosuj **Współczynnik K**.
8. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
9. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Panel zadań

Panel zadań został wprowadzony w wersji 0.5.00

Dwukrotnie kliknij na istniejącym obiekcie CornerRelief w [Widoku drzewa](/Tree_view/pl "Tree view/pl") aby ponownie otworzyć panel zadań i edytować parametry.

![](/images/SheetMetal_AddCornerRelief-Task.png)

- Wybór podstawy: Łączy wskazane krawędzie z właściwością **base Object**.
- Przyciski **Okrągły**, **Kwadratowy** i **Szkic** w połączeniu z przyciskami **Bezwzględny** i **Względny** ustawiają właściwość **Relief Sketch**.
- Jeśli przycisk **Szkic** jest wybrany, wyświetlane są następujące opcje:
  1. Szkic: Łączy Szkic z właściwością **Szkic**.
  2. **Odsunięcie X**: Ustawia właściwość **XOffset**.
  3. **Odsunięcie Y**: Ustawia właściwość **YOffset**.
- Jeśli wybrany jest przycisk **Bezwzględny**:

  : **Rozmiar podcięcia**: Ustawia właściwość **Size**.

- Jeśli wybrany jest przycisk **Względny**:

  : **Współczynnik skali Factor**: Ustawia właściwość **Size Ratio**.

- **Współczynnik K**: Ustawia właściwość **kfactor**.

## Kształt podcięcia

Kształt narożnego podcięcia można zmienić, zmieniając wartości jego właściwości:

Wartość właściwości DANE**SzkicPodcięcia** może być wybrana z listy: `Okrąg` (domyślnie), `Skalowany-Okrąg`, `Kwadrat`, `Skalowany-Kwadrat`, `Szkic`.

- `Okrąg` i `Kwadrat` używają wartości właściwości DANE**Rozmiar** do skalowania podcięcia.
- `Skalowany-Okrąg` i `Skalowany-Kwadrat` używają wartości właściwości DANE**Współczynnik rozmiaru** do skalowania podcięcia.
- `Szkic` aktywuje użycie szkicu wymienionego we właściwości DANE**Szkic** do zdefiniowania kształtu podcięcia.

![](/images/SheetMetal_AddCornerRelief-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-07.png)

Podcięcie okrągłe _(ustawienia domyślne)_ → Podcięcie kwadratowe _(ustawienia domyślne)_ → Podcięcie oparte na szkicu

## Bliższe spojrzenie na rozmiary podcięć

Aby zorientować się, jak i gdzie umieszczone jest podcięcie, rozkładamy domyślny narożnik bez podcięcia.

![](/images/SheetMetal_AddCornerRelief-08.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-09.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-10.png)

Domyślny narożnik z dwoma zagięciami → Narożnik z rozwiniętą bryłą → Narożnik w widoku z góry.

Następnym krokiem jest otwarcie rozwiniętego szkicu, utworzenie okręgu przez trzy punkty i dodanie wymiaru promienia.  
 Teraz dodajemy narożne podcięcie, tworzymy odpowiednią rozwiniętą bryłę i ponownie otwieramy pierwszy rozwinięty szkic.  
 Dodanie koncentrycznego okręgu o promieniu `3 mm` pokazuje, że dowiedzieliśmy się, jak umieszczony jest wewnętrzny okrąg, ponieważ nowy okrąg idealnie pasuje do wycięcia rozwiniętej bryły z podcięciem.

![](/images/SheetMetal_AddCornerRelief-11.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-12.png)

Domyślny narożnik z rozłożonym szkicem → Narożnik z domyślnym podcięciem i tym samym rozłożonym szkicem.

Próba ustawienia właściwości DANE**Rozmiar** na wartość poniżej określonego `1,67 mm` spowoduje błąd. Każda wartość powyżej powinna działać poprawnie.

Przełączenie na Skalowany-Okrąąg i utworzenie kolejnej rozwiniętej bryły pokazuje, że `1,67 mm` jest również podstawą dla właściwości DANE**Współczynnik rozmiaru**.

## Uwagi

- Współczynnik **k** określa, gdzie w grubości arkusza znajduje się oś neutralna według standardu ANSI.
- Możliwy jest wybór więcej niż dwóch krawędzi, ale tylko pierwsze dwie są brane pod uwagę.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Podcięcia narożnika środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**SzkicPodcięcia** (`Enumeration`): _Typ podcięcia narożnika_ `Okrąg` (domyślnie), `Skalowany-Okrąg`, `Kwadrat`, `Skalowany-Kwadrat`, `Szkic`.
- DANE**Rozmiar** (`Length`): _Rozmiar kształtu_. Wartość domyślna: `3,00 mm`.
- DANE**Współczynnik rozmiaru** (`Float`): _Współczynnik rozmiaru kształtu_. Wartość domyślna: `1,50`.
- DANE**Obiekt bazowy** (`LinkSub`): _Obiekt bazowy_. Łącza do pary krawędzi definiujących pozycję Podcięcia Narożnika.
- DANE**WspółczynnikK** (`FloatConstraint`): _Pozycja osi neutralnej_. Wartość domyślna: `0,50`.

Parametry1

- DANE**Szkic** (`Link`): _Szkic podcięcia narożnika_.
- DANE**OdsunięcieX** (`Distance`): _Szczelina od strony pierwszej_. Wartość domyślna: `0,00 mm`.
- DANE**OdsunięcieY** (`Distance`): _Szczelina od strony drugiej_. Wartość domyślna: `0,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCornerRelief/pl&oldid=1545460>"

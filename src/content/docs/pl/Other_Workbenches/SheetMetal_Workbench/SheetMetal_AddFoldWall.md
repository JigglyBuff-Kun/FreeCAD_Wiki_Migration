---
title: Arkusz Blachy Wykonaj składanie ścianek
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                     |
| ------------------------------------------------------------------- |
| Arkusz Blachy: Składanie ścianek                                    |
| Lokalizacja w menu                                                  |
| SheetMetal → Składanie ścianek                                      |
| Środowisko pracy                                                    |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót                                                      |
| C F                                                                 |
| Wprowadzono w wersji                                                |
| -                                                                   |
| Zobacz także                                                        |
| _brak_                                                              |
|                                                                     |

## Opis

Polecenie ![](/images/SheetMetal_AddFoldWall.svg) **Składanie ścianek** składa blachę _(pustą)_ na wybranej linii.

Może być używany z wstępnie wyciętym półfabrykatem do

- utworzenia perforowanej strefy gięcia
- pozostawienia płaskich sekcji w obszarze gięcia i poza nim, np. zakładek. _(wymaga przerw w linii gięcia)_.

![](/images/SheetMetal_AddFoldWall-13.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

Wstępnie wycięty półfabrykat i linia gięcia z dwiema szczelinami → perforowana strefa gięcia o wciąż płaskiej geometrii.

## Użycie

1. Wybierz ścianę, która ma zostać wygięta.
2. Przytrzymaj klawisz Ctrl _(lub Command na macOS)_.
3. Wybierz współpłaszczyznowy ![](/images/Workbench_Sketcher.svg). [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl") _(tj. leżący na tej samej płaszczyźnie)_ zawierający **linię _(segmenty)_ zgięcia** (najlepiej z [Widoku drzewa](/Tree_view/pl "Tree view/pl")).
4. Puść klawisz Ctrl (lub Command).
5. To polecenie można aktywować na kilka sposobów:
   - Wciśnij przycisk ![](/images/SheetMetal_AddFoldWall.svg) Składanie ścianek.
   - Wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddFoldWall.svg) Składanie ścianek** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Sheet Metal → ![](/images/SheetMetal_AddFoldWall.svg) Składanie ścianek** z menu kontekstowego.
   - Użyj skrótu klawiszowego: C a następnie F.
6. Utworzony zostanie obiekt **Fold** i otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Fold on sketch line properties**.
7. Opcjonalnie wciśnij przycisk Base Object i wybierz inną ścianę.
8. Opcjonalnie wciśnij przycisk Bend Line i wybierz inny szkic.
9. Opcjonalnie dostosuj parametry w panelu zadań.
10. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
11. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

![](/images/SheetMetal_AddFoldWall-15.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

Linia zgięcia _(linie zgięcia)_ leżąca w środku perforacji → aby zgięcie było wyśrodkowane w ten sam sposób, właściwość DANE**Pozycja** musi być ustawiona na `środek`.

## Panel zadań

Panel zadań został wprowadzony w wersji 0.5.00

Dwukrotnie kliknij na istniejącym obiekcie Fold w [Widoku drzewa](/Tree_view/pl "Tree view/pl") aby ponownie otworzyć panel zadań i edytować parametry.

![](/images/SheetMetal_AddFoldWall-Task.png)

- Base Object: Łączy inny szkic z właściwością **base Object**.
- Bend Line: Łączy inny szkic z właściwością **Bend Line**.
- **Flip Direction**: Przełącza właściwość **Invert Bend**.
- **Unbend**: Przełącza właściwość **Unfold**.
- **Bend Radius**: Ustawia właściwość **radius**.
- **Bend Angle**: Ustawia właściwość **angle**.

## Uwagi

- Szkic linii zgięcia musi być **współpłaszczyznowy** do wybranej ściany.

- Segmenty linii zgięcia muszą być **współliniowe** względem siebie.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Składania ścianki środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**Linia gięcia** (`Link`): _Lista linii referencyjnych zgięć_. Łącza do obiektów linii zagięcia.
- DANE**Pozycja** (`Enumeration`): _Pozycja linii gięcia_.

  : `Przecięcie płaszczyzn` _(wprowadzone w wersji 0.4.12)_,

`w przód` _(domyślnie)_, `środek`, `wstecz`.

- DANE**Kąt** (`Angle`): _Kąt zgięcia_. Domyślna wartość kąta: `90,00°`.
- DANE**Obiekt bazowy** (`LinkSub`): _Obiekt bazowy_. Łącze do płaskiej powierzchni, która ma zostać wygięta.
- DANE**Odwróć** (`Bool`): _Odwróć kierunek zgięcia_. Wartość domyślna: `FAŁSZ`.
- DANE**OderóćZgięcie** (`Bool`): _Odwróć kierunek zgięcia bryły_. Wartość domyślna: `FAŁSZ`.

  : Wartość `PRAWDA` zamienia stronę linii, która ma zostać wygięta.

- DANE**WspółczynnikK** (`FloatConstraint`): _Pozycja osi neutralnej_. Wartość domyślna: `0,50`.
- DANE**Promień** (`Length`): _Promień zgięcia_. Wartość domyślna: `1,00 mm`.
- DANE**Rozwiń** (`Bool`): _Rozwiń zagięcie_. Wartość domyślna: `FAŁSZ`.

## Przykład

![](/images/SheetMetal_AddFoldWall-01.png)

Prosty klips

### Przygotowania

Ten klips jest wykonany z półfabrykatu, który otrzymuje trzy zagięcia, więc potrzebujemy czterech szkiców przygotowanych wcześniej:

: - jeden dla obrysu plus szczelina _(półfabrykat)_,
: - jeden dla zagięcia na końcu,
: - jeden dla zagięcia w górę ,
: - jeden dla zagięcia w dół.

Najprostszym sposobem zagwarantowania, że jedna powierzchnia półfabrykatu i wszystkie linie zagięcia są współpłaszczyznowe, jest utworzenie wszystkich szkiców na tej samej płaszczyźnie - w tym przypadku **Płaszczyzna_XY**.

Linie zagięcia można stworzyć za pomocą innych narzędzi, ale hej, mamy ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench "Sketcher Workbench")!

![](/images/SheetMetal_AddFoldWall-21.png)
![](/images/SheetMetal_AddFoldWall-20.png)

Szkice na wspólnej płaszczyźnie i ich reprezentacja w drzewie projektu.

### Przepływ pracy

1. Utwórz półfabrykat
   1. Wybierz szkic konturu
   2. Naciśnij przycisk ![](/images/SheetMetal_AddBase.svg)**Wykonaj składanie ścianek**

lub użyj skrótu klawiaturowego: C i kolejnie B

![](/images/SheetMetal_AddFoldWall-02.png) ![](/images/SheetMetal_AddFoldWall-03.png)

_(Półfabrykat jest wyciągnięty w kierunku Z, więc musi zostać odwrócony  
 za każdym razem, aby wybrać dolną powierzchnię leżącą na płaszczyźnie szkicu)_

1. Złóż końcówkę

   1. Wybierz **dolną powierzchnię** półfabrykatu
   2. Wybierz **szkic** o nazwie **_Tip Fold line_** _(najlepiej z widoku drzewa)_  
      _(i nie zapomnij o klawiszu Ctr / Command)_
   3. Naciśnij przycisk ![](/images/SheetMetal_AddFoldWall.svg) **Wykonaj składanie ścianek**  
       lub użyj skrótu klawiaturowego: C i kolejnie F  
      ![](/images/SheetMetal_AddFoldWall-10.png) ![](/images/SheetMetal_AddFoldWall-04.png) ![](/images/SheetMetal_AddFoldWall-05.png)
   4. Zagięcie powinno być skierowane w dół pod kątem 90°, dlatego należy ustawić niektóre wartości w oknie właściwości, np.:
      - wartość **kąta** na 60°
      - **odwróć** na `Prawda` dla zagięcia w górę

1. Utwórz zagięcie w dół
   1. Wybierz **dolną powierzchnię** półfabrykatu.
   2. Następnie _szkic_ o nazwie **_Down-Fold line_**.
   3. Naciśnij przycisk ![](/images/SheetMetal_AddFoldWall.svg) **Wykonaj składanie ścianek**  
       lub użyj skrótu klawiaturowego: C i kolejnie F  
      ![](/images/SheetMetal_AddFoldWall-11.png) ![](/images/SheetMetal_AddFoldWall-06.png) ![](/images/SheetMetal_AddFoldWall-07.png)
   4. Ustaw wartość **kąta** na `92°`.
   5. Jeśli przesunęła się niewłaściwa sekcja części, ustaw wartość **OdwróćGięcie** na `Prawda`.
1. Aby utworzyć zagięcie w górę:
   1. Wybierz **dolną powierzchnię** półfabrykatu.
   2. I następnie **szkic** o nazwie **_Up-Fold line_**
   3. Naciśnij przycisk ![](/images/SheetMetal_AddFoldWall.svg) **Wykonaj składanie ścianek**  
       lub użyj skrótu klawiaturowego: C i następnie F  
      ![](/images/SheetMetal_AddFoldWall-12.png) ![](/images/SheetMetal_AddFoldWall-08.png) ![](/images/SheetMetal_AddFoldWall-09.png)
   4. Ustaw wartość **kąta** na `80°`.
   5. Jeśli zagięcie zostało wykonane w dół, ustaw wartość _Odwróć_ na `Prawda`
   6. Jeśli to konieczne, ustaw wartość **OdwróćGięcie** na true

Gotowe!

Uwaga!: W rzeczywistości zagięcie w górę musi być wykonane przed zagięciem w dół. Jedynie wirtualny świat CAD pozwala nam na zginanie przez stały materiał. Dzięki temu orientacja sekcji statycznej nie ulega zmianie.  
Wszystkie szkice leżą na tej samej płaszczyźnie, aby uniknąć szkiców dołączonych do ruchomych powierzchni.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddFoldWall/pl&oldid=1545462>"

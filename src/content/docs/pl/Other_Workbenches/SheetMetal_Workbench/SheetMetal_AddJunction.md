---
title: Arkusz Blachy Wykonaj połączenie
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| Arkusz Blachy: Wykonaj połączenie                                                                                                           |
| Lokalizacja w menu                                                                                                                          |
| SheetMetal → Wykonaj połączenie                                                                                                             |
| Środowisko pracy                                                                                                                            |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl")                                                                         |
| Domyślny skrót                                                                                                                              |
| S J                                                                                                                                         |
| Wprowadzono w wersji                                                                                                                        |
| -                                                                                                                                           |
| Zobacz także                                                                                                                                |
| [Wykonaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl"), [Wykonaj zagięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl") |
|                                                                                                                                             |

## Opis

Polecenie ![](/images/SheetMetal_AddJunction.svg) **Wykonaj połączenie** tworzy otwarte połączenia między dwiema sekcjami _(ścianami / kołnierzami)_ obiektu z blachy. Bez tych połączeń sekcje blachy połączone z tą samą podstawą nie będą mogły zostać rozłożone.

To polecenie jest drugim z trzech kroków konwersji obiektu powłoki wykonanego za pomocą środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl") lub [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") na rozkładany obiekt z blachy:

1. [Wykonaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl")
2. Wykonaj połączenie
3. [Wykonaj zagięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl")

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Wykonaj połączenie - rozcięte krawędzie

## Użycie

1. Wybierz jedną lub więcej krawędzi.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/SheetMetal_AddJunction.svg) Wykonaj połączenie.
   - Wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddJunction.svg) Wykonaj połączenie** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddJunction.svg) Wykonaj połączenie** z menu kontekstowego.
   - Użyj skrótu klawiaturowego: S a następnie J.
3. Otwarty zostanie [panel zadań](/Task_panel/pl "Task panel/pl") **Właściwości połączenia** (wprowadzony w wersji 0.5.00).
4. Opcjonalnie wciśnij przycisk Wybierz aby dodać więcej ścian.
   - Wciśnij przycisk Podgląd aby zakończyć wybór i wyświetlić zmiany.
5. Opcjonalnie dostosuj parametry w panelu zadań.
6. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
7. Utworzony zostanie obiekt **Junction** składający się z jednego otwarcia dla każdej wskazanej krawędzi.
8. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

![](/images/SheetMetal_ConvertShellObject-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-07.png)

## Uwagi

- Polecenia ![](/images/SheetMetal_AddRelief.svg) **[Wykonaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl")**, ![](/images/SheetMetal_AddJunction.svg) **Wykonaj połączenie** i ![](/images/SheetMetal_AddBend.svg) **[Wykonaj zagięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl")** działają najlepiej z obiektami typu "wydrążony" prostopadłościan o stałej grubości i kątach 90° między ścianami.
- Zobacz stronę [Wykonaj podcięcie](/SheetMetal_AddRelief/pl#Uwagi "SheetMetal AddRelief/pl") aby znaleźć wskazówki dotyczące tworzenia obiektów powłokowych prostopadłościanów.

- **Junction** w tym przypadku nie jest wynikiem działania tego narzędzia, który jest przerwą między przylegającymi płaskimi ścianami, tylko opisuje położenie, w którym dwie płaskie ściany ukończonego rzeczywistego obiektu się spotykają, np. w celu ich zespawania.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Połaczenie środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**Obiekt bazowy** (`LinkSub`): _Obiekt bazowy_. Łącza do krawędzi definiujących pozycje odstępów / połączeń.
- DANE**Szczelina** (`Length`): _Szczelina połączenia_. Domyślnie: `2,00 mm`. Rozmiar dodawanej szczeliny / połączenia.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddJunction/pl&oldid=1546090>"

---
title: Arkusz Blachy Wykonaj zagięcie
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arkusz Blachy: Wykonaj zagięcie                                                                                                                       |
| Lokalizacja w menu                                                                                                                                    |
| SheetMetal → Wykonaj zagięcie                                                                                                                         |
| Środowisko pracy                                                                                                                                      |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl")                                                                                   |
| Domyślny skrót                                                                                                                                        |
| S B                                                                                                                                                   |
| Wprowadzono w wersji                                                                                                                                  |
| -                                                                                                                                                     |
| Zobacz także                                                                                                                                          |
| [Wykonaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl"), [Wykonaj połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl") |
|                                                                                                                                                       |

## Opis

Polecenie ![](/images/SheetMetal_AddBend.svg) **Wykonaj zagięcie** zastępuje ostre krawędzie między dwiema sekcjami _(płyta bazowa / ściany / kołnierze)_ obiektu z blachy na zaokrąglone zagięcia. Bez tych zagięć obiektu nie da się rozłożyć.

To polecenie jest trzecim z trzech kroków konwersji obiektu powłoki wykonanego za pomocą środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl") lub [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") na rozkładany obiekt z blachy:

1. [Wykonaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl")
2. [Wykonaj połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl")
3. Wykonaj zagięcie

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)

Wykonaj zagięcie - zastąp krawędzie zagięciami

## Użycie

1. Wybierz jedną lub więcej krawędzi.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/SheetMetal_AddBend.svg) Wykonaj zagięcie.
   - Wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Wykonaj zagięcie** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Wykonaj zagięcie** z menu kontekstowego.
   - Użyj skrótu klawiaturowego: S + B.
3. Otwarty zostanie [panel zadań](/Task_panel/pl "Task panel/pl") **Bend sharp corner properties** (wprowadzony w wersji 0.5.00).
4. Opcjonalnie wciśnij przycisk Wybierz aby dodać więcej ścian.
   - Wciśnij przycisk Podgląd aby zakończyć wybór i wyświetlić zmiany.
5. Opcjonalnie dostosuj parametry w panelu zadań.
6. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
7. Utworzony zostanie obiekt **SolidBend** składający się z jednego nowego zagięcia dla każdej wskazanej krawędzi.
8. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

![](/images/SheetMetal_ConvertShellObject-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-08.png)

## Uwagi

Polecenia ![](/images/SheetMetal_AddRelief.svg) **[Wykonaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl")**, ![](/images/SheetMetal_AddJunction.svg) **[Wykonaj połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl")** i ![](/images/SheetMetal_AddBend.svg) **Wykonaj zagięcie** działają najlepiej z obiektami typu "wydrążony" prostopadłościan o stałej grubości i kątach 90° między ścianami.

Zobacz stronę z opisem narzędzia [Wykonaj podcięcie](/SheetMetal_AddRelief/pl#Uwagi "SheetMetal AddRelief/pl"), aby uzyskać wskazówki dotyczące tworzenia obiektów powłoki na bazie prostopadłościanów.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Bryła Zagięcia środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada również następujące dodatkowe właściwości, a jego etykieta ma wartość domyślną:

### Dane

Parametry

- DANE**Obiekt bazowy** (`LinkSub`): "Obiekt bazowy". Łącza do krawędzi, które mają zostać wygięte.
- DANE**Promień** (`Length`): "Promień zagięcia". Wartość domyślna: `1,00 mm`.
- DANE**Grubość** (`Length`): "Grubość blachy". Wartość domyślna: `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBend/pl&oldid=1545471>"

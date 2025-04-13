---
title: Złożenie Utwórz połączenie zębatki i koła zębatego
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Utwórz połączenie zębatki i koła zębatego |
| Lokalizacja w menu |
| Złożenie → Utwórz połączenie zębatki i koła zębatego |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| Q |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_CreateJointRackPinion.svg) Utwórz połączenie zębatki i koła zębatego tworzy połączenie zębatki i koła zębatego, które wiąże przesunięcie części połączenia typu Przesuwne i obrót części połączenia typu Obrotowe.

## Użycie

1. Opcjonalnie wybierz dwa obiekty geometryczne należące do dwóch różnych części, które wcześniej były użyte do zdefiniowania połączeń typu Przesuwne i Obrotowe.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_CreateJointRackPinion.svg) Utwórz połączenie zębatki i koła zębatego.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_CreateJointRackPinion.svg) Utwórz połączenie zębatki i koła zębatego** z menu.
   * Użyj skrótu: Q.
3. Okno dialogowe **Utwórz połączenie** zostanie otwarte w [panelu zadań](/Task_panel/pl "Task panel/pl"), wymieniając wcześniej wskazane obiekty.
4. Dla dalszych kroków zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Użycie "Assembly CreateJointFixed/pl").

## Uwagi

* Promień skoku odnosi się do okręgu podziałowego koła zębatego. Jest przechowywany we właściwości DANE**Distance** i jest podstawą do wyznaczenia stosunku między obrotem i przesunięciem.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **RackPinion** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Właściwości "Assembly CreateJointFixed/pl") aby znaleźć dodatkowe właściwości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointRackPinion/pl&oldid=1428884>"
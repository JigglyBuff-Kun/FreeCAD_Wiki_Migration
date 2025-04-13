---
title: Złożenie Utwórz połączenie kół zębatych
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Utwórz połączenie kół zębatych |
| Lokalizacja w menu |
| Złożenie → Utwórz połączenie przekładni zębatej / pasowej → Utwórz połączenie kół zębatych |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_CreateJointGears.svg) Utwórz połączenie kół zębatych tworzy połączenie kół zębatych wiążące obrót dwóch części z dwoma różnymi połączeniami typu Obrotowe. Razem z innymi istniejącymi połączeniami pozwala zasymulować koła walcowe, stożkowe, przekładnie cierne i inne.

## Użycie

1. Opcjonalnie wybierz dwa obiekty geometryczne należące do dwóch różnych części, które zostały wcześniej użyte do zdefiniowania dwóch połączeń typu Obrotowe.
2. Jest kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Assembly_CreateJointGears.svg) **Utwórz połączenie koła zębatego / pasa**.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_CreateJointGears.svg) Utwórz połączenie koła zębatego / pasa** z menu.
3. Okno dialogowe **Utwórz połączenie** zostanie otwarte w [panelu zadań](/Task_panel/pl "Task panel/pl"), wymieniając wcześniej wskazane obiekty.
4. Dla dalszych kroków zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Użycie "Assembly CreateJointFixed/pl").

## Uwagi

* Promień1 i Promień2 odnoszą się do okręgów podziałowych kół zębatych lub zewnętrznych średnic w przypadku przekładni ciernej. Ich wartości są przechowywane we właściwościach DANE**Distance** oraz DANE**Distance2** i definiują stosunek między obrotami.
* Ponieważ wartości obu promieni nie mają wpływu na odległość między osiami obrotu i jednostki i tak są anulowane, możesz rozważyć wprowadzenie wartości średnic lub liczby zębów (nie trzeba wtedy szukać średnicy podziałowej kół stożkowych) dla obu promieni.
* Użyj tej samej wartości dla obu promieni aby połączyć końce wału giętkiego (jeśli obroty nie pasują, odwróć jedno połączenie Obrotowe lub użyj połączenia Pasowego zamiast tego).

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Gears** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Właściwości "Assembly CreateJointFixed/pl") aby znaleźć dodatkowe właściwości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointGears/pl&oldid=1428870>"
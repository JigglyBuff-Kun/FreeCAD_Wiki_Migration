---
title: Złożenie Utwórz połączenie pasowe
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Utwórz połączenie pasowe |
| Lokalizacja w menu |
| Złożenie → Utwórz połączenie przekładni zębatej/pasowej → Utwórz połączenie pasowe |
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

Narzędzie ![](/images/Assembly_CreateJointBelt.svg) **Utwórz połączenie pasowe** tworzy połączenie przekładni pasowej, które wiąże obrót dwóch części z dwoma różnymi połączeniami typu Obrotowe. Razem z innymi istniejącymi połączeniami pozwala zasymulować napędy pasowe, paski rozrządu itd.

## Użycie

1. Opcjonalnie wybierz dwa obiekty geometryczne należące do dwóch różnych części, które zostały wcześniej użyte do zdefiniowania dwóch połączeń typu Obrotowe.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_CreateJointBelt.svg) Utwórz połączenie pasowe.
   * Wybierz opcję **Złożenie → Utwórz połączenie przekładni zębatej / pasowej → ![](/images/Assembly_CreateJointBelt.svg) Utwórz połączenie pasowe** z menu.
3. Okno dialogowe **Utwórz połączenie** zostanie otwarte w [panelu zadań](/Task_panel/pl "Task panel/pl"), wymieniając wcześniej wskazane obiekty.
4. Dla dalszych kroków zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Użycie "Assembly CreateJointFixed/pl").

## Uwagi

* Promień 1 i Promień2 odnoszą się do okręgów podziałowych kół rozrządu lub zewnętrznej średnicy kół pasowych. Ich wartości są przechowywane we właściwościach DANE**Distance** oraz DANE**Distance2** i definiują stosunek między obrotami.
* Użyj tej samej wartości dla obu promieni żeby połączyć końce wału giętkiego *(jeśli obroty się nie zgadzają, odwróć jedno z połączeń typu [Obrotowe](/Assembly_CreateJointRevolute/pl "Assembly CreateJointRevolute/pl") lub użyj połączenia typu [Koła zębate](/Assembly_CreateJointGears/pl "Assembly CreateJointGears/pl") zamiast tego)*.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Bell** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Właściwości "Assembly CreateJointFixed/pl") aby znaleźć dodatkowe właściwości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointBelt/pl&oldid=1478337>"
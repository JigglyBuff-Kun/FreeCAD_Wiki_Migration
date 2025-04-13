---
title: Złożenie Utwórz połączenie śrubowe
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Utwórz połączenie śrubowe |
| Lokalizacja w menu |
| Złożenie → Utwórz połączenie śrubowe |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| W |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_CreateJointScrew.svg) Utwórz połączenie śrubowe tworzy połączenie śrubowe **(złącze spiralne)**, które wiąże przesunięcie części z połączeniem typu Przesuwne i obrót części z połączeniem typu Obrotowe. W połączeniu z istniejącymi już połączeniami, może być stosowane do symulowania np. śrub pociągowych.

## Użycie

1. Opcjonalnie wybierz dwa obiekty geometryczne należące do dwóch różnych kształtów, które zostały wcześniej użyte do zdefiniowania połączeń typu Przesuwne i Obrotowe.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_CreateJointScrew.svg) Utwórz połączenie śrubowe.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_CreateJointScrew.svg) Utwórz połączenie śrubowe** z menu.
   * Użyj skrótu: W.
3. Okno dialogowe **Utwórz połączenie** zostanie otwarte w [panelu zadań](/Task_panel/pl "Task panel/pl"), wymieniając wcześniej wskazane obiekty.
4. Dla dalszych kroków zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Użycie "Assembly CreateJointFixed/pl").

## Uwagi

* Promień skoku odnosi się do skoku śruby napędowej. Jest przechowywany we właściwości DANE**Distance** i definiuje przesunięcie na jeden obrót śruby.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Screw** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Zobacz [Utwórz połączenie stałe](/Assembly_CreateJointFixed/pl#Właściwości "Assembly CreateJointFixed/pl") aby znaleźć dodatkowe właściwości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointScrew/pl&oldid=1428897>"
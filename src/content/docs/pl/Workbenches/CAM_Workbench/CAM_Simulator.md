---
title: CAM Symulator
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Symulator |
| Lokalizacja w menu |
| CAM → Symulator CAM |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| P M |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Sprawdź ścieżkę narzędzia](/CAM_Inspect/pl "CAM Inspect/pl") |
|  |

## Opis

Narzędzie **Symulator CAM** umożliwia symulację procesu obróbki poprzez przemieszczanie modeli 3D narzędzi po ścieżkach G-Code, odejmując materiał obrabiany tam gdzie narzędzie go przecina, zapewniając wizualizację zadania obróbki. Umożliwia to wykrywanie i eliminowanie błędów przed uruchomieniem zadania obróbki na maszynie.

![](/images/Path-Simulation.gif)

## Użycie

1. Jest kilka sposobów na uruchomienie tego polecenia:
   * Wciśnij przycisk ![](/images/CAM_Simulator.svg) **Symulator CAM**.
   * Wybierz opcję z menu **CAM → ![](/images/CAM_Simulator.svg) Symulator CAM**.
   * Użyj skrótu klawiszowego: P a następnie M.
2. Odznacz wszelkie **Operacje**, które nie mają być symulowane
3. Dostosuj ustawienia **Prędkość** i **Dokładność**.
4. Wybierz **Zadanie** do zasymulowania z listy rozwijanej.
5. Użyj paska narzędzi **Symulator CAM** aby wywołać różne polecenia:
   * Wciśnij przycisk ![](/images/CAM_BPlay.svg) *(Aktywuj / wznów symulację)* aby uruchomić lub wznowić animację operacji.
   * Wciśnij przycisk ![](/images/CAM_BFastForward.svg) *(Uruchom całą symulację bez animacji)* aby znacznie zwiększyć prędkość *(żeby szybko obejrzeć skomplikowane ścieżki)*.
   * Wciśnij przycisk ![](/images/CAM_BPause.svg) *(Wstrzymaj symulację)* aby zatrzymać animację do rozwiązania problemów
   * Wciśnij przycisk ![](/images/CAM_BStep.svg) *(Symulacja pojedynczym krokiem)* aby spowolnić animację, co ułatwia rozwiązywanie problemów i przyglądanie się konkretnym cięciom i/lub ruchom.
   * Wciśnij przycisk ![](/images/CAM_BStop.svg) *(Zatrzymaj aktywną symulację)* aby zatrzymać animację.
6. Wciśnięcie przycisku Anuluj usunie materiał obrabiany utworzony dla symulacji. Wciśnięcie OK spowoduje jego zachowanie w Twoim zadaniu obróbki.

## Właściwości

* DANE**Prędkość**: Prędkość odtwarzania symulacji, w liniach G-code na sekundę.
* DANE**Dokładność**: Dokładność symulacji wyrażona jako procent wskazujący rozbieżność symulacji od zadania obróbki. W przypadku interaktywnych symulacji, redukcja dokładności do 0.3 działa znacznie szybciej.
* DANE**Zadanie**: Zadanie obróbki używane jako podstawa symulacji
* DANE**Lista operacji**: Lista operacji wybranych do uwzględnienia w symulacji.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Simulator/pl&oldid=1486489>"
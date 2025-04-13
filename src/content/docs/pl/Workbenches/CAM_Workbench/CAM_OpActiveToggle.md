---
title: CAM Przełącz aktywne stadium operacji
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Przecz aktywne stadium operacji |
| Lokalizacja w menu |
| CAM → Przełącz aktywne stadium operacji |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| P X |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_OpActiveToggle.svg) Przełącz aktywne stadium operacji w ![](/images/Workbench_CAM.svg) [środowisku pracy CAM](/CAM_Workbench/pl "CAM Workbench/pl") jest używane do przełączania aktywnego stanu istniejącej operacji ścieżki.

To narzędzie może być używane tylko wtedy, gdy ![](/images/CAM_Job.svg) [zadanie](/CAM_Job/pl "CAM Job/pl") ma co najmniej jedną operację ścieżki.

## Użycie

1. Zaznacz operację w grupie **Operations** należącej do zadania obróbki. Dezaktywowaną operację można rozpoznać po jej wyszarzonej etykiecie i ikonie.
2. Istnieje kilka sposobów wywołania tej komendy:
   * Wciśnij przycisk ![](/images/CAM_OpActiveToggle.svg) Przełącz aktywne stadium operacji.
   * Wybierz opcję **CAM → ![](/images/CAM_OpActiveToggle.svg) Przełącz aktywne stadium operacji** z menu.
   * Użyj skrótu klawiszowego: P a następnie X.
3. Rezultat zależy od wybranej operacji:
   * Jeśli wybrałeś aktywną operację, to polecenie ją dezaktywuje:
     + Ikona operacji jest zastępowana ikoną tego narzędzia: ![](/images/CAM_OpActiveToggle.svg).
     + Ikona i etykieta operacji zostają wyszarzone.
     + Ścieżki generowane z operacji znikają z [widoku 3D](/3D_view/pl "3D view/pl").
     + Podczas używania komendy ![](/images/CAM_Inspect.svg) [Sprawdź ścieżkę narzędzia](/CAM_Inspect/pl "CAM Inspect/pl") lub ![](/images/CAM_Post.svg) [Przetwarzanie końcowe](/Path_Post/pl "Path Post/pl"), G-code operacji nie jest zapewniany.
   * Jeśli wybrałeś dezaktywowaną operację, to polecenie ją aktywuje:
     + Ikona operacji jest zastępowaną tą należącą do operacji.
     + Ikona i etykieta operacji nie są już wyszarzone.
     + Ścieżki wygenerowane przez operację są przeliczane i wyświetlane w [widoku 3D](/3D_view/pl "3D view/pl").
     + Podczas używania komendy ![](/images/CAM_Inspect.svg) [Sprawdź ścieżkę narzędzia](/CAM_Inspect/pl "CAM Inspect/pl") lub ![](/images/CAM_Post.svg) [Przetwarzanie końcowe](/CAM_Post/pl "CAM Post/pl"), G-code operacji jest zapewniany.

## Opcje

Pusto

## Właściwości

Pusto

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Przykład:

```
#Umieść tu kod przykładu.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_OpActiveToggle/pl&oldid=1480073>"
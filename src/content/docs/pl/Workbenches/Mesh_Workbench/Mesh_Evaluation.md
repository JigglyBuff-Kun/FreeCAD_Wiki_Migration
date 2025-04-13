---
title: Siatka Analiza
---
|  |
| --- |
| Siatka: Analiza |
| Lokalizacja w menu |
| Siatki → Analizuj → Oceń i napraw siatkę ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Analizuj** ocenia i naprawia obiekt siatkowy.

![](/images/Mesh_Evaluation_dialog.png)

Okno dialogowe Oceń i napraw siatkę z włączoną opcją *Fałdy na powierzchni*

## Użycie

1. Opcjonalnie wybierz pojedynczy obiekt siatki.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Mesh_Evaluation.svg) [Analizuj](/Mesh_Evaluation "Mesh Evaluation").
   * Wybierz opcję z menu **Siatki → Analizuj → ![](/images/Mesh_Evaluation.svg)Oceń i napraw siatkę ...**.
3. Otwiera się okno dialogowe **Oceń i napraw siatkę**.
4. Opcjonalnie naciśnij przycisk Ustawienia ..., aby zmienić następujące ustawienia:
   * **Sprawdzanie miejsc technologicznie niewykonalnych**
   * **Włącz sprawdzanie fałd na powierzchni**
   * **Uznaj za uszkodzone tylko powierzchnie nie tworzące obszaru *(zero area faces)***
5. Jeśli nie wybrałeś jeszcze obiektu siatki: wybierz go z listy rozwijanej w górnej części okna dialogowego.
6. Okno dialogowe zawiera siedem lub osiem *(jeśli włączona jest opcja **Włącz sprawdzanie fałd na powierzchni**)* opcji testowych.
7. Nie używaj pól wyboru, zostaną one zaznaczone automatycznie, jeśli zostaną znalezione błędy.
8. Naciśnij dowolny z przycisków Analizuj, aby rozpocząć test.
9. Lub użyj przycisku Analizuj z opcji **Wszystkie powyższe testy razem**, aby uruchomić wszystkie siedem lub osiem testów razem.
10. Błędy zostaną wskazane w oknie dialogowym, a także, za pomocą żółtych i czerwonych znaczników, w oknie [widoku 3D](/3D_view "3D view").
11. Opcjonalnie naciśnij jeden lub więcej przycisków Napraw, aby naprawić znalezione błędy.
12. Opcjonalnie naciśnij przycisk Reset, aby wyzerować wszystkie wyniki testu. Spowoduje to zresetowanie okna dialogowego i usunięcie kolorowych znaczników z okna widoku 3D. Jeśli chcesz powtórzyć ten sam test lub przeprowadzić wszystkie testy razem, nie ma potrzeby wykonywania tej czynności.
13. Opcjonalnie wybierz inny obiekt siatkowy z listy rozwijanej, aby kontynuować testowanie i naprawę.
14. Naciśnij przycisk Zamknij aby zamknąć okno dialogowe i zakończyć polecenie.
15. Przycisk Odśwież nie działa w tej chwili prawidłowo.

## Uwagi

* Naprawa siatki może oznaczać, że problematyczne elementy zostaną usunięte z siatki, co spowoduje powstanie dziur. Dziury można zamknąć za pomocą poleceń [Wypełnienie otworów](/Mesh_FillupHoles/pl "Mesh FillupHoles/pl"), [Interaktywne wypełnienie otworów](/Mesh_FillInteractiveHole/pl "Mesh FillInteractiveHole/pl") i [Dodaj element](/Mesh_AddFacet/pl "Mesh AddFacet/pl").
* Zobacz [ten post na forum](https://forum.freecadweb.org/viewtopic.php?f=3&p=533252#p533252), aby uzyskać wyjaśnienie struktury danych siatki. Ta informacja może pomóc zrozumieć, dlaczego w danej siatce występują problemy.

## Ustawienia

* Ustawienie **Sprawdzanie miejsc technologicznie niewykonalnych** jest zapisywane: **Przybory → Edycja parametrów ... → BaseApp → Preferences → Mod → Mesh → Evaluation → CheckNonManifoldPoints**.
* Ustawienie **Włącz sprawdzanie fałd na powierzchni** jest zapisywane: **Przybory → Edycja parametrów ... → BaseApp → Preferences → Mod → Mesh → Evaluation → EnableFoldsCheck**.
* Ustawienie **Uznaj za uszkodzone tylko powierzchnie nie tworzące obszaru** jest zapisywane: **Przybory → Edycja parametrów ... → BaseApp → Preferences → Mod → Mesh → Evaluation → StrictlyDegenerated**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Evaluation/pl&oldid=1333162>"
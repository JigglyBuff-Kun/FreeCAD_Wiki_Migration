---
title: Std Przełącz tryb nawigacja / edycja
---
|  |
| --- |
| Std: Przełącz tryb nawigacja / edycja |
| Lokalizacja w menu |
| Widok → Przełącz tryb nawigacja / edycja |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Esc |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Przełącz tryb nawigacji** jest przeznaczone do pewnych operacji inspekcji i pewnych interaktywnych operacji edycji siatki. Operacje te są dość *wymagające* i dlatego polegają na trybie edycji, podczas którego większość opcji nawigacyjnych jest wyłączona. Za pomocą tego polecenia można tymczasowo przełączyć się z trybu edycji do trybu nawigacji, a po zmianie [widoku 3D](/3D_view/pl "3D view/pl"), przełączyć się z powrotem do trybu edycji.

Nie należy mylić tego polecenia z poleceniem [Std: Edycja](/Std_Edit/pl "Std Edit/pl").

## Użycie

*Przykład demonstrujący polecenie:*

1. Przełącz się na środowisko pracy ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl")
2. Wybierz opcję z menu **Siatki → ![](/images/Mesh_BuildRegularSolid.svg) [Bryła pierwotna ...](/Mesh_BuildRegularSolid/pl "Mesh BuildRegularSolid/pl")**.
3. Otworzy się okno dialogowe **Bryła pierwotna**.
4. Wybierz **elipsoidę** z listy rozwijanej.
5. Naciśnij przycisk Utwórz.
6. Naciśnij przycisk Zamknij, aby zamknąć okno dialogowe.
7. Wybierz obiekt siatki.
8. Naciśnij przycisk ![](/images/Mesh_PolyCut.svg) [Cięcie siatki](/Mesh_PolyCut/pl "Mesh PolyCut/pl").
9. Wybierz punkty w widoku 3D, aby zdefiniować wielokąt, który zachodzi na jedną połowę siatki.
10. Kliknij prawym przyciskiem myszy i wybierz opcję **Wewnętrzny** z menu kontekstowego.
11. Wynikiem jest otwarta siatka z brzegami.
12. Upewnij się, że siatka jest nadal zaznaczona.
13. Upewnij się, że siatka jest nadal zaznaczona.
14. Wybierz z menu opcję **Siatki → ![](/images/Mesh_AddFacet.svg) Dodaj trójkąt**, aby wywołać polecenie [Dodaj element](/Mesh_AddFacet/pl "Mesh AddFacet/pl").
15. Jeśli najedziesz na punkt graniczny, pojawi się żółty znacznik, a kliknięcie lewym przyciskiem myszy spowoduje jego zaznaczenie.
16. Opcjonalnie wybierz jeszcze dwa punkty i dodaj trójkąt do siatki.
17. Znajdujesz się teraz w trybie edycji i niemożliwe jest obracanie lub przesuwanie widoku 3D, chociaż powiększanie nadal działa.
18. Wywołaj polecenie **Przełącz tryb nawigacji** aby przełączyć się w tryb nawigacji:
    * W tym celu z menu wybierz opcję **Widok → ![](/images/Std_ToggleNavigation.svg) Przełącz tryb nawigacji / edycji**.
    * Lub użyj skrótu klawiaturowego: Esc.
19. Teraz możesz obracać i przesuwać widok 3D, ale nie możesz wybrać punktów, aby dodać trójkąty.
20. Wywołaj polecenie **Przełącz tryb nawigacji**, aby powrócić do trybu edycji:
    * Wybierz opcję z menu **Widok → ![](/images/Std_ToggleNavigation.svg) Przełącz tryb nawigacji / edycji**.
    * Albo użyj skrótu klawiaturowego: Esc.
21. Możesz ponownie wybrać punkty i dodać trójkąty.
22. Kliknij prawym przyciskiem myszy w oknie widoku 3D i wybierz z menu kontekstowego **Zakończ**, aby zakończyć działanie polecenia [Dodaj element](/Mesh_AddFacet/pl "Mesh AddFacet/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleNavigation/pl&oldid=1460993>"
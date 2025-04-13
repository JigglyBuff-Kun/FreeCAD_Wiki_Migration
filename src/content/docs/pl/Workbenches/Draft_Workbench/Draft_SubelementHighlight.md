---
title: Rysunek Roboczy Podświetl element podrzędny
---
|  |
| --- |
| Rysunek Roboczy: Podświetl element podrzędny |
| Lokalizacja w menu |
| Rysunek Roboczy → Podświetl element podrzędny |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| S S |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Przesuń](/Draft_Move/pl "Draft Move/pl"), [Obróć](/Draft_Rotate/pl "Draft Rotate/pl"), [Skaluj](/Draft_Scale/pl "Draft Scale/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_SubelementHighlight.svg) **Podświetl element podrzędny** tymczasowo podświetla wybrane obiekty lub obiekty bazowe wybranych obiektów. Jest ono przeznaczone do użycia w połączeniu z trybem elementów podrzędnych polecenia [Przesuń](/Draft_Move/pl "Draft Move/pl"), [Obróć](/Draft_Rotate/pl "Draft Rotate/pl") lub [Skaluj](/Draft_Scale/pl "Draft Scale/pl"). Obecnie tryb elementu podrzędnego działa poprawnie tylko dla [linii](/Draft_Line/pl "Draft Line/pl") i [polilinii](/Draft_Wire/pl "Draft Wire/pl").

![](/images/Draft_SubelementHighlight_example.png)

Ściana środowiska Architektura, której podstawa, pililinia, została podświetlona.

## Użycie

1. Opcjonalnie wybierz jedną lub więcej [linii](/Draft_Line/pl "Draft Line/pl") lub [polilinii](/Draft_Wire/pl "Draft Wire/pl") lub obiekty, których DANE**Bazą** są [liniie](/Draft_Line/pl "Draft Line/pl") lub [polilinie](/Draft_Wire/pl "Draft Wire/pl").
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_SubelementHighlight.svg) **Podświetl element podrzędny**.
   * Wybierz opcję z menu **Modyfikacja → ![](/images/Draft_SubelementHighlight.svg) Podświetl element podrzędny**.
   * Użyj skrótu klawiaturowego: H, a następnie S.
3. Jeśli obiekt nie został jeszcze wybrany: wybierz obiekt w oknie [widoku 3D](/3D_view "3D view").
4. Wybrane obiekty staną się widoczne *(jeśli jest to wymagane)*, ich WIDOK**Kolor linii** i WIDOK**Kolor punktu** zostaną zmienione na czerwone, a ich WIDOK**Rozmiar punktu** zostanie zmieniony na `10`.
5. Zaleca się teraz odznaczenie istniejącego wyboru, na przykład poprzez kliknięcie losowego punktu w oknie [widoku 3D](/3D_view/pl "3D view/pl").
6. Wybierz jeden lub więcej elementów podrzędnych, krawędzi lub punktów obiektów, które zostały zaznaczone na czerwono.
7. Wywołaj polecenie [Przesuń](/Draft_Move/pl "Draft Move/pl"), [Obróć](/Draft_Rotate/pl "Draft Rotate/pl") lub [Skaluj](/Draft_Scale/pl "Draft Scale/pl").
8. Przełącz tryb elementów podrzędnych w panelu zadań tego polecenia, zaznaczając pole wyboru **Modyfikuj elementy podrzędne**.
9. Zmodyfikuj wybrane elementy podrzędne i zakończ polecenie modyfikacji.
10. Naciśnij Esc, aby przywrócić tymczasowe zmiany wizualne obiektów.

## Uwagi

* Jeśli obiekty zostały podświetlone za pomocą tego polecenia, tymczasowe zmiany wizualne powinny zostać cofnięte przed zapisaniem i ponownym otwarciem pliku.
* Podświetlone obiekty nie powinny być kopiowane, jeśli tryb elementów podrzędnych jest wyłączony. Tymczasowych zmian wizualnych nie można przywrócić dla kopii utworzonych w ten sposób.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SubelementHighlight/pl&oldid=1462410>"
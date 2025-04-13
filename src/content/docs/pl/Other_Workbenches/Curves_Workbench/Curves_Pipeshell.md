---
title: Krzywe Powłoka rury
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Powłoka rury |
| Lokalizacja w menu |
| Surfaces → Pipeshell |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Curves_Pipeshell.svg) **Powłoka rury** tworzy obiekt wyciągnięcia po ścieżce powłoki rury. To narzędzie jest częścią [środowisk zewnętrznych](/External_workbenches/pl "External workbenches/pl") o nazwie [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl").

## Użycie

1. Przełącz się na środowisko ![](/images/Curves_workbench_icon.svg) [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") *(instalacja z ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") jest konieczna, jeśli nie zostało to zrobione wcześniej)*.
2. Wybierz krawędź, która buduje ścieżkę wyciągania w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Wybierz jeden lub więcej wymaganych profili w [Widoku drzewa](/Tree_view/pl "Tree view/pl").
4. Aby wywołać polecenie, wykonaj jedną z poniższych czynności:
   * Naciśnij przycisk ![](/images/Curves_Pipeshell.svg) **Powłoka rury** na pasku narzędziowym
   * Użyj polecenia **Surfaces → Pipeshell**
5. Zmień parametr `Powłoka rury` na odpowiedni.

## Właściwości

### Dane

Podstawowe

* DANE**Umiejscowienie**: [Umiejscowienie](/Placement/pl "Placement/pl") to położenie i orientacja obiektu w przestrzeni.
* DANE**Etykieta**: Nazwa użytkownika obiektu w [Widoku drzewa](/Tree_view/pl "Tree view/pl").

Główne

* DANE**Tryb**: Domyślnie jest to *Frenet*. Tryb służy do wyboru algorytmu wyciągnięcia. Do wyboru: Frenet, DiscreteTrihedron, FixedTrihetron, Binormal, ShapeSupport, AuxiliarySpine.
* DANE**Wyjście**: Domyślnie jest to wartość *Powierzchnia*. Wyjście określa kształt obiektu. Do wyboru: Powierzchnia, Sekcje, Wyciągnięte sekcje.
* DANE**Profil**: Lista użytych profili.
* DANE**Spine**:

Tryb

* DANE**Auxiliary**:
* DANE**Contact**:
* DANE**Corrected**:
* DANE**Direction**:
* DANE**Equi Curvi**:
* DANE**Location**:
* DANE**Support**:

Ustawienia

* DANE**Max Degree**:
* DANE**Max Segments**:
* DANE**Samples**:
* DANE**Solid**: Wartość domyślna to *False*
* DANE**Tol3d**: Wartość domyślna to *0.00*.
* DANE**Tol Ang**: Wartość domyślna to *0.00*.
* DANE**Tol Bound**: Wartość domyślna to *0.00*.

## Uwagi

* *Powłoka rury* wymaga obiektu polilinii *(jako ścieżki wyciągnięcia)* i przynajmniej jednego *profilu*.
* Dwa narzędzia *Powłoka rury* i *Profil* działają razem jako "Zaawansowane" narzędzie Wyciągania.

## Ograniczenia

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Pipeshell/pl&oldid=1355025>"
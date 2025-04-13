---
title: CAM Opis dla niecierpliwych
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| środowisko pracy CAM |
| Poziom trudności |
| początkujący / średnio zaawansowany |
| Czas wykonania |
| 15 minut |
| Autorzy |
| Chrisb |
| Wersja FreeCAD |
| 0.19 |
| Pliki z przykładami |
| brak |
| Zobacz również |
| *-* |
|  |

## Przeznaczenie

Demonstracja tworzenia **Zadania** środowiska pracy ![](/images/Workbench_CAM.svg) [CAM](/CAM_Workbench/pl "CAM Workbench/pl") na podstawie modelu 3D. Następnie generowanie poprawnego dialektycznie G-Code dla docelowej frezarki CNC.

## Model 3D

1. Projekt rozpoczyna się od prostego modelu FreeCAD zaprojektowanego w środowisku pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") prostopadłościanu z kieszenią w kształcie prostokąta,

:   ![](/images/Path-SquarePocketModel.png)

:   Powyżej: Prostopadłościan z kieszenią utworzony w środowisku pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") obejmujący Zawartość, na podstawie szkicu zorientowanego w ![](/images/View-top.svg) płaszczyźnie XY.

2. Po ukończeniu modelu 3D przełącz się na środowisko ![](/images/Workbench_CAM.svg) [CAM](/CAM_Workbench/pl "CAM Workbench/pl") poprzez *(menu rozwijane)* [wyboru środowiska pracy](/Std_Workbench/pl "Std Workbench/pl")

## Zadanie

3. Teraz tworzymy [Zadanie](/CAM_Job/pl "CAM Job/pl") za pomocą jednej z następujących metod:

* Naciskamy przycisk ![](/images/CAM_Job.svg) [Zadanie](/CAM_Job/pl "CAM Job/pl") z paska narzędzi.
* Używając skrótu klawiaturowego P, a następnie J.
* Używając polecenia z menu głównego **CAM → Zadanie**.

![](/images/Path-JobCreationDialog.png)

:   :   Powyżej: Okienko dialogowe [Utwórz zadanie](/CAM_Job/pl "CAM Job/pl")

4. Zostanie otwarte okno dialogowe edycja zadania. W tym oknie dialogowym kliknij OK, aby zaakceptować Zawartość jako model podstawowy, bez szablonu.

### Konfiguracja

5. Okno Edycja zadania zostanie otwarte w oknie zadań, a w oknie widoku modelu zostanie wyświetlony element materiału jako prostopadłościan szkieletu otaczający podstawową Zawartość. Zostanie wybrana karta **Konfiguracja**.

### Wyjście zadania

6. Zakładka Wyjście definiuje ścieżkę pliku wyjściowego, nazwę, rozszerzenie i postprocesor. Zaawansowani użytkownicy mogą dostosować Argumenty postprocesora *(wskazanie kursorem myszki powoduje wyświetlenie podpowiedzi typowych argumentów)*.

:   ![](/images/Path-JobOutput.png)
:   Powyżej: Okienko dialogowe Edycja [zadania](/CAM_Job/pl "CAM Job/pl") z wybraną zakładką **Wyjście**

### Narzędzia

:   ![](/images/Path-JobTools.png)
:   Powyżej: Okienko dialogowe Edycja [zadania](/CAM_Job/pl "CAM Job/pl") z wybraną zakładką **Narzędzia**

7. Zmodyfikuj domyślne narzędzie, zaznaczając je i klikając przycisk Edycja. Spowoduje to otwarcie okna **Edytor kontrolera narzędzi**.

:   ![](/images/Path-ToolConfig.gif)
:   Powyżej: Okienko dialogowe Edycja [zadania](/CAM_Job/pl "CAM Job/pl") Kontrolera narzędzi

8. Nazwa nadana narzędziu i numer narzędzia odpowiadają numerowi narzędzia maszyny. W oknie dialogowym (patrz wyżej) jest to narzędzie nr 4. Sterownik narzędzia jest skonfigurowany dla posuwu poziomego i pionowego `2mm/s` i prędkości wrzeciona `2000 rpm`.

9. Wybierz zakładkę **Narzędzia** w Kontrolerze narzędzi. Ustaw średnicę *(a jeśli chcesz użyć narzędzia ![](/images/CAM_Simulator.svg) [Symulator](/CAM_Simulator/pl "CAM Simulator/pl") później: dodaj kąt krawędzi tnącej i wysokość krawędzi tnącej)*.

:   ![](/images/Path-ToolAdd.gif)
:   Powyżej: Okienko dialogowe Edycja [zadania](/CAM_Job/pl "CAM Job/pl") Kontrolera narzędzi i zakładka **Narzędzia**

10. Wartości są potwierdzane przyciskiem OK.

Uwaga: Aby ułatwić dostęp, wszystkie narzędzia można wstępnie zdefiniować i wybrać z ![](/images/CAM_ToolLibraryEdit.svg) [Menadżera narzędzi](/index.php?title=CAM_ToolLibraryEdit/pl&action=edit&redlink=1 "CAM ToolLibraryEdit/pl (page does not exist)").

### Plan pracy

Zakładka **Plan pracy** jest początkowo wyświetlana jako pusta. Następnie jest wypełniana sekwencją operacji zadania, częściowych poleceń CAM i elementów wykończenia CAM. Kolejność tych elementów jest tutaj uporządkowana.

To drzewo jest wyświetlane po konfiguracji zadania, po rozwinięciu zadania CAM:

:   ![](/images/Path-TreeWithJob.png)

## Operacje ścieżki

11. Dwie operacje zostaną dodane w celu wygenerowania ścieżek frezowania dla tego zadania ścieżki. Operacja [Kontur](/CAM_Profile/pl "CAM Profile/pl") tworzy ścieżkę wokół prostopadłościanu, a operacja [Kształt kieszeni](/CAM_Pocket_Shape/pl "CAM Pocket Shape/pl") tworzy ścieżkę dla wewnętrznej kieszeni.

12. Na razie zachowamy prostotę. Przycisk ![](/images/CAM_Profile.svg) [Kontur](/CAM_Profile/pl "CAM Profile/pl") otwiera panel Kontur. Po potwierdzeniu przyciskiem OK przy użyciu domyślnych wartości, widoczna jest zielona ścieżka wokół obiektu.

13. Wybranie spodu kieszeni, a następnie przycisku ![](/images/CAM_Pocket_Shape.svg) [Kształt kieszeni](/CAM_Pocket_Shape/pl "CAM Pocket Shape/pl") otwiera okno Kształt kieszeni. Używane są domyślne wartości Geometrii bazowej, Głębokości i Wysokości, wybrana jest zakładka Operacja, a wartość procentowa Kroku nad jest ustawiona na wartość 50.

:   ![](/images/Path-PocketOperation.gif)
:   Powyżej: Okno dialogowe Kształt kieszeni z wybranym panelem Operacja

14. Wzór zostanie zmieniony na "Odsunięcie", a zadanie dla konfiguracji kieszeni zostanie potwierdzone przyciskiem OK.

Rezultatem jest model z dwiema ścieżkami:

:   ![](/images/Path-WalkThroughResult.gif)
:   Powyżej: wynik dla modelu z dwiema ścieżkami

## Sprawdzanie ścieżek

Istnieją dwa sposoby weryfikacji utworzonych ścieżek. Można sprawdzić G-code, w tym podświetlić odpowiednie segmenty ścieżki. Proces frezowania zadania CAM może być również symulowany w celu zademonstrowania wyidealizowanych ścieżek narzędzia, wymaganych dla geometrii narzędzia do frezowania materiału.

Aby sprawdzić G-Code użyj narzędzia ![](/images/CAM_Inspect.svg) [Przeglądaj polecenia CAM](/CAM_Inspect/pl "CAM Inspect/pl"). Wybranie odpowiednich linii G-code w oknie G-code podświetla poszczególne segmenty ścieżki.

:   ![](/images/Path-InspectWindow.gif)
:   Powyżej: Narzędzie [Przeglądaj polecenia ścieżki](/CAM_Inspect/pl "CAM Inspect/pl") otwiera okno dialogowe G-code

Aby rozpocząć symulację, użyj narzędzia ![](/images/CAM_Simulator.svg) [Symulator CAM](/CAM_Simulator/pl "CAM Simulator/pl").

Dostosuj prędkość i dokładność i rozpocznij symulację za pomocą przycisku ![](/images/CAM_BPlay.svg) *(Play)*.

:   ![](/images/Path-Simulation.gif)
:   Powyżej: [Symulacja CAM](/CAM_Simulator/pl "CAM Simulator/pl") w toku

Jeśli chcesz zakończyć symulację, kliknij przycisk Anuluj, co spowoduje usunięcie półproduktu utworzonego na potrzeby symulacji. Jeśli klikniesz przycisk OK, obiekt ten zostanie zachowany w zadaniu.

## Przetwarzanie końcowe zadania

Ostatnim krokiem do wygenerowania G-code dla docelowej frezarki jest postprocessing zadania. Powoduje to przesłanie G-code do pliku, który można przesłać do docelowego sterownika maszyny CNC. Aby wywołać postprocesor:

* Wybierz obiekt Zadanie w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
* Wybierz narzędzie ![](/images/CAM_Post.svg) [Przetwarzanie końcowe](/CAM_Post/pl "CAM Post/pl") do przetwarzania pliku. Spowoduje to otwarcie okna G-code umożliwiającego sprawdzenie końcowego pliku wyjściowego przed jego zapisaniem.

:   ![](/images/Path-PostOutput.gif)
:   Powyżej: Okno G-code umożliwiające przeglądanie końcowego pliku wyjściowego

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Walkthrough_for_the_Impatient/pl&oldid=1391778>"
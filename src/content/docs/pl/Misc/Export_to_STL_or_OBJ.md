---
title: Eksport do formatu STL lub OBJ
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Eksport do formatu STL lub OBJ |
| Poziom trudności |
| Początkujący |
| Czas wykonania |
| 20 minut |
| Autorzy |
| r-frank |
| Wersja FreeCAD |
| 0.16.6703 |
| Pliki z przykładami |
| nie dołączono |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

W tym poradniku omówimy, jak wykonać eksport plików STL / OBJ z FreeCAD. Format siatki STL / OBJ jest bezwymiarowy. FreeCAD zakłada przy eksporcie, że jednostki użyte w modelu są w mm. Jeśli tak nie jest, należy przeskalować model. Jednym ze sposobów jest użycie narzędzia ![](/images/Draft_Scale.svg). [Skaluj](/Draft_Scale/pl "Draft Scale/pl") środowiska pracy Rysunek Roboczy.

## Przykładowa część

Możesz użyć własnego pliku FreeCAD, ale możesz także utworzyć szybki plik testowy poprzez:

1. Uruchomienie FreeCAD.
2. Utworzenie nowego dokumentu.
3. Przełączenie na środowisko pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl").
4. Wstaw sześcian klikając w ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").
5. Wstaw stożek klikając w ![](/images/Part_Cone.svg) [Stożek](/Part_Cone/pl "Part Cone/pl").
6. Zaznacz oba obiekty w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
7. Zastosuj scalenie klikając w ![](/images/Part_Fuse.svg) [Połączenie](/Part_Fuse/pl "Part Fuse/pl").
8. Zapisz plik.

## Metoda eksportu 1: Korzystanie z opcji "Plik → Eksportuj"

1. Przy ustawieniach domyślnych ta metoda tworzy siatkę z zauważalnie postrzępionymi krzywymi. Aby uzyskać gładsze wykończenie podczas np. drukowania 3D, należy skonfigurować rozdzielczość siatki:
   1. Upewnij się, że środowisko pracy ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") zostało załadowane *(domyślnie nie jest załadowany)*.
   2. Przejdź do menu **Edycja → Preferencje ... → Import-Export → Formaty siatki**.
   3. Zmień **Maksymalne odchylenie siatki**. Niższa wartość spowoduje utworzenie siatki o wyższej rozdzielczości.
2. Wybierz bryłę do wyeksportowania w widoku drzewa.
3. Wybierz Plik **File → Eksportuj ...** i ustaw typ pliku na **STL mesh (\*.stl \*.ast)**.
4. Wprowadź nazwę pliku. Domyślne rozszerzenie to .stl. Musisz dołączyć rozszerzenie .ast, aby utworzyć plik .ast.
5. Wybierz Zapisz.

## Metoda eksportu 2: Korzystanie z środowiska pracy Siatka w programie FreeCAD

1. Przełącz się do środowiska pracy ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl")
2. Wybierz bryłę do zazębienia w widoku drzewa.
3. Wybierz **Siatki** → ![](/images/Mesh_FromPartShape.svg) Utwórz siatkę z kształtu ... z menu głównego.
4. Wybierz jedną z dostępnych siatek i określ dostępne opcje. Więcej informacji można znaleźć na stronie [Kształt z siatki](/Mesh_FromPartShape/pl "Mesh FromPartShape/pl").
5. Wybierz OK. Obiekt siatki zostanie utworzony w widoku drzewa *(z zieloną ikoną siatki ![](/images/Workbench_Mesh.svg))*.
6. Kliknij prawym przyciskiem myszy obiekt siatki w widoku drzewa i wybierz **![](/images/Mesh_Export.svg) Eksportuj siatkę ...**.
7. Wpisz nazwę pliku. Rozszerzenie nie jest konieczne. Rozszerzenie zostanie ustawione na podstawie typu pliku. W przypadku podania rozszerzenia, które nie pasuje do wybranego typu pliku, rozszerzenie dla wybranego typu zostanie dodane podczas zapisywania pliku. W przypadku podania rozszerzenia pasującego do typu pliku, dodatkowe rozszerzenie nie zostanie dodane.
8. Domyślnym typem pliku jest **Binary STL (\*.stl)**. Zmień typ, jeśli chcesz.
9. Wybierz Zapisz.

## Którą metodę wybrać

* Metoda 1 może być używana w większości sytuacji, w których wymagany jest plik siatki.
* W metodzie 2 można zweryfikować siatkę w programie FreeCAD. A jeśli masz więcej niż jedną bryłę do przekonwertowania, możesz użyć narzędzi z ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl"). Na przykład można połączyć siatki przed eksportem.

## Odnośniki internetowe

* [Import z formatu STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ")
* [Import i eksport](/Import_Export/pl "Import Export/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Export_to_STL_or_OBJ/pl&oldid=1334547>"
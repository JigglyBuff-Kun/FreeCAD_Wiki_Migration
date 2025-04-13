---
title: Architektura Spis wymiarów
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Spis wymiarów |
| Lokalizacja w menu |
| Narzędzia → Spis wymiarów |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Makrodefinicja: FCInfo](/Macro_FCInfo/pl "Macro FCInfo/pl"), [Makrodefinicja: SimpleProperties](/Macro_SimpleProperties/pl "Macro SimpleProperties/pl") |
|  |

## Opis

Narzędzie **Spis wymiarów** uruchamia specjalny tryb geodezyjny, który pozwala na szybkie pobieranie pomiarów i informacji z modelu oraz przesyłanie ich do innych aplikacji. Po przejściu do trybu geodezyjnego, kliknięcie różnych elementów podrzędnych obiektów 3D powoduje zebranie następujących informacji *(w zależności od klikniętego elementu)*:

* Jeśli klikniesz na krawędź, otrzymasz jej długość.
* Jeśli klikniesz na wierzchołek, otrzymasz jego wysokość *(współrzędna na osi Z)*.
* Jeśli klikniesz na ścianę, otrzymasz jej powierzchnię.
* Dwukrotne kliknięcie czegokolwiek, czyli zaznaczenie całego obiektu, spowoduje wyświetlenie jego objętości.

Po zebraniu takich informacji dzieje się kilka rzeczy:

* Na górze klikniętego elementu umieszczana jest etykieta wyświetlająca wartość *(z "a" dla powierzchni, "l" dla długości, "z" dla wysokości lub "v" dla objętości)*.
* Wartość liczbowa jest kopiowana do schowka, dzięki czemu można ją wkleić w innej aplikacji.
* Linia jest drukowana w oknie wyjściowym FreeCAD. Po wyjściu z trybu spisu linie te można skopiować i wkleić w innej aplikacji *(wartości są oddzielone przecinkami, co ułatwia konwersję na dane arkusza kalkulacyjnego)*.
* Całkowita długość lub powierzchnia klikniętych elementów jest również drukowana w oknie wyjściowym.
* Każda długość lub powierzchnia jest również rejestrowana w oknie dialogowym zadania.

![](/images/Arch_Survey_example.jpg)

*Powyższy obraz pokazuje, co dzieje się po uruchomieniu trybu spisu.*

## Użycie

1. Naciśnij przycisk w menu '*Narzędzia → ![](/images/Arch_Survey.svg) **Spis wymiarów'***.
2. Kliknij wierzchołki, krawędzie, ściany lub kliknij dwukrotnie, aby zaznaczyć całe obiekty.
3. Kliknij poza dowolną geometrią *(w oknie widoku 3D)*, aby usunąć istniejące etykiety, zostanie wydrukowana linia sumaryczna w oknie dialogowym Zadanie, a liczenie długości i powierzchni zostanie wznowione od zera.
4. Naciśnij Esc lub przycisk Zamknij, aby wyjść z trybu pomiaru i usunąć wszystkie etykiety.

## Opcje

* Można dodać niestandardową etykietę do dowolnego wiersza w oknie dialogowym zadania, klikając ten wiersz, a następnie dodaj tekst w polu opisu i naciśnij przycisk **ustaw opis**.
* Po zakończeniu, przed zamknięciem, można wyeksportować zawartość okna dialogowego Zadanie, naciskając przycisk "eksportuj CSV". Wynikowy plik CSV można następnie otworzyć w dowolnej aplikacji arkusza kalkulacyjnego, takiej jak Excel lub LibreOffice Calc. Wartości i jednostki zostaną rozdzielone w wynikowym pliku CSV, a sumy zostaną zapisane jako funkcje SUM().

![](/images/Arch_Survey_spreadsheet.jpg)

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Spis nie ma interfejsu programistycznego, ale zbieranie tych samych informacji z dowolnego wybranego obiektu opartego na obiekcie [Część](/Part_Workbench/pl "Part Workbench/pl") można odtworzyć za pomocą następującego skryptu:

```
import FreeCADGui

selection = FreeCADGui.Selection.getSelectionEx()

for obj in selection:
    for element in obj.SubObjects:
        print("Area: %f", element.Area)
        print("Length: %f", element.Length)
        print("Volume: %f", element.Volume)
        print("Center of Mass: %f", element.CenterOfMass)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Survey/pl&oldid=1498906>"
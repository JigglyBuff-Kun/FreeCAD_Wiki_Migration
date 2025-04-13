---
title: MES Filtr konturów
---

|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MES: Filtr konturów                                                                                                                                                                                                                  |
| Lokalizacja w menu                                                                                                                                                                                                                   |
| Wyniki → Filtr konturów                                                                                                                                                                                                              |
| Środowisko pracy                                                                                                                                                                                                                     |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                                                          |
| Domyślny skrót                                                                                                                                                                                                                       |
| _brak_                                                                                                                                                                                                                               |
| Wprowadzono w wersji                                                                                                                                                                                                                 |
| 0.21                                                                                                                                                                                                                                 |
| Zobacz także                                                                                                                                                                                                                         |
| [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"), [Funkcje filtrów MES](/FEM_PostCreateFunctions/pl "FEM PostCreateFunctions/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                                                                                                      |

## Opis

Tworzy izokontury i izolinie w siatce wynikowej.

![](/images/FEM_PostFilterContours_Example.png)

Izokontury przedstawiające składową Y bezwzględnej gęstości strumienia magnetycznego  
 w i wokół miedzianego przewodu, wokół którego przepływa prąd elektryczny z częstotliwością 100 kHz.  
 Więcej informacji o tym modelu można znaleźć w sekcji 14 dokumentu [Poradnik Elmer](https://www.nic.funet.fi/index/elmer/doc/ElmerTutorials.pdf).

## Użycie

1. Zaznacz wcześniej utworzony [obiekt prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostFilterContours.svg) Filtr konturów.
   - Wybierz opcję **Wyniki → ![](/images/FEM_PostFilterContours.svg) Filtr konturów** z menu.
3. Dostosuj **Opcje wyświetlania wyników** jak dla [obiektu prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Może być konieczne ukrycie obiektu prezentacji graficznej wyników aby zobaczyć efekt filtra w podglądzie.
4. W oknie dialogowym, które się pojawi, ustaw pole wyników i liczbę konturów.
5. Wciśnij przycisk OK aby zakończyć działanie polecenia.

## Opcje

Okno dialogowe oferuje następujące ustawieniaː

- **Pole**: Pole wyników do wyświetlenia.
- **Wektor**: Składowe wektora jeśli **Pole** jest wektorem.
- **Liczba konturów**: Liczba konturów do utworzenia. **Uwaga:** w zależności od geometrii, utworzona liczba konturów może być wyższa niż podana. Wynika to z algorytmu tworzenia konturów. Jednak w przypadku geometrii 2D i prostych 3D, liczba konturów powinna się zgadzać.
- **Wygładzanie**: Jeśli zaznaczone, do filtra konturów stosowany jest filtr wygładzający Laplace'a, który sprawia, że izopowierzchnie są gładsze. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
- **Współczynnik relaksacji**: Kontroluje poziom wygładzania poprzez ilość przemieszczenia wierzchołków (jeśli wygładzanie jest włączone). [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
- **Bez koloru**: Nie stosuj koloru do konturów.

**Uwaga**: **Pole** może być ustawione tylko jeśli funkcja filtra istnieje i została zastosowana przy pomocy ![](/images/FEM_PostApplyChanges.svg) [Zastosuj zmiany](/FEM_PostApplyChanges/pl "FEM PostApplyChanges/pl"). Alternatywnie, możesz ponownie otworzyć okno dialogowe filtra.

## Informacja o rozmiarze plików

Ustawienie filtra konturów może znacząco zwiększyć rozmiar pliku. Powodem jest to, że algorytm musi skopiować [obiekt prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Pojedynczy kontur nie wymaga całej siatki i algorytm wymaga tylko połowy miejsca przechowywania obiektu prezentacji wyników do utworzenia konturu. Ale to będzie wzrost rozmiaru dla każdego konturu. Przykładowo, jeśli rozmiar przechowywania obiektu prezentacji wyników to 1 MB, dodanie filtra konturów z 10 konturami będzie prowadziło do zwiększenia rozmiaru pliku o 5 MB.

Rozmiar przechowywania obiektu prezentacji graficznej wyników zależy od używanej siatki. Im ona gęstsza, tym większy rozmiar obiektu prezentacji graficznej wyników. Zatem należy być ostrożnym jeśli używa się gęstych siatek i dużej liczby konturów.

Jeśli używasz konturów tylko na części siatki, np. gdy masz filtr odcięcia, wtedy utwórz filtr konturów na filtrze odcięcia zamiast na obiekcie prezentacji graficznej wyników. Jeśli potrzebny Ci jest cały obiekt prezentacji graficznej wyników, zacznij od kilku konturów i krok po kroku zwiększaj ich liczbę aż rozmiar pliku będzie nadal akceptowalny podczas gdy wizualizacja będzie taka, jak oczekiwana.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterContours/pl&oldid=1569596>"

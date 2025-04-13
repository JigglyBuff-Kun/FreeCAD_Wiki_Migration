---
title: MES Płaszczyzna cięcia na ścianie
---

|                                                    |
| -------------------------------------------------- |
| MES: Płaszczyzna cięcia na ścianie                 |
| Lokalizacja w menu                                 |
| Narzędzia → Płaszczyzna cięcia na ścianie          |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Dodaje płaszczyznę cięcia dla całego widoku modelu. Wszystkie widoczne obiekty zostaną przez nią przecięte, niezależnie od tego czy są to modele geometryczne, siatki czy obiekty prezentacji graficznej wyników.

Płaszczyzna cięcia jest taka sama jak ta w przypadku narzędzia [Płaszczyzna tnąca](/Std_ToggleClipPlane/pl "Std ToggleClipPlane/pl"), z tą różnicą, że ta płaszczyzna cięcia jest trwała. Zatem posiada tą samą cechę umożliwiania tylko przekrojów bez wypełnienia.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ClippingPlaneAdd.svg) Płaszczyzna cięcia na ścianie.
   - Wybierz opcję **Narzędzia → ![](/images/FEM_ClippingPlaneAdd.svg) Płaszczyzna cięcia na ścianie** z menu.

Można mieć wiele płaszczyzn cięcia.

Mimo że płaszczyzna jest trwała, nie pojawi się w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Płaszczyzna pojawia się w widoku modelu w ten sposób:

![](/images/FEM_Clipping-Plane-Example.png)

Aby przesunąć płaszczyznę, kliknij na dużym białym prostopadłościanie, który jest prostopadły do płaszczyzny i trzymaj przycisk myszy wciśnięty podczas poruszania nią.

Aby obracać i pochylać płaszczyznę, kliknij na linii, która łączy małe kostki z dużym białym prostopadłościanem i trzymaj przycisk myszy wciśnięty podczas poruszania nią.

Używaj klawisza Ctrl, aby przełączać się między rożnymi kierunkami cięcia.

Sześć małych kostek służy za uchwyty do zmiany rozmiaru. Ponieważ jednak obiekt jest nieskończoną płaszczyzną, jego rozmiar nie ma znaczenia.

Aby usunąć wszystkie płaszczyzny cięcia użyj narzędzia [Usuń wszystkie płaszczyzny cięcia](/FEM_ClippingPlaneRemoveAll/pl "FEM ClippingPlaneRemoveAll/pl"). Nie ma możliwości usunięcia tylko wybranej płaszczyzny.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ClippingPlaneAdd/pl&oldid=1569542>"

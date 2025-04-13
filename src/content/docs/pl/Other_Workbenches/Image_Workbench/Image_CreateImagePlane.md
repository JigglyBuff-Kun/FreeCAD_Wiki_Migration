---
title: Obraz Utwórz płaszczyznę obrazu
---
|  |
| --- |
| Obraz: Utwórz płaszczyznę obrazu |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| [Obraz](/Image_Workbench/pl "Image Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Otwórz](/Image_Open/pl "Image Open/pl"), [Skaluj](/Image_Scaling/pl "Image Scaling/pl") |
|  |

## Opis

Narzędzie Utwórz płaszczyznę obrazu importuje obraz [bitmapy](/Bitmap/pl "Bitmap/pl") i umieszcza go na jednej z płaszczyzn XY, YZ lub XZ.

## Użycie

1. Naciśnij przycisk ![](/images/Image_CreateImagePlane.svg) Utwórz płaszczyznę obrazu.
2. Wybierz żądany obraz z Twojego systemu.
3. Wybierz płaszczyznę, na której zostanie umieszczony obraz, podaj wartość offsetu i naciśnij przycisk OK.

Wynikowy obiekt Płaszczyzny Obrazu wykorzystuje stosunek 1 piksela do 1 milimetra. Aby obraz był dobrze wyświetlany, powinien mieć wystarczającą rozdzielczość.

Podczas importowania obrazu możesz dodać odsunięcie o `-0.1mm`, aby umieścić obraz nieco za płaszczyzną roboczą. Ułatwi to śledzenie *(rysowanie na wierzchu)* obrazu za pomocą narzędzi [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownika](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

Jeśli początkowo nie podano żadnego odsunięcia dla obrazka, jego pozycję można nadal korygować w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

Podstawowe

* DANE**Pozycja**: określa współrzędne punktu bazowego płaszczyzny obrazu.
* DANE**Kąt**: określa kąt obrotu płaszczyzny obrazu.
* DANE**Oś**: określa oś używaną dla kąta obrotu.

Płaszczyzna obrazu

* DANE**Obraz płaszczyzny**: określa obraz, który ma być użyty dla tej płaszczyzny.
* DANE**RozmiarX**: określa szerokość płaszczyzny obrazu.
* DANE**RozmiarY**: określa wysokość płaszczyzny obrazu.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_CreateImagePlane/pl&oldid=1097466>"
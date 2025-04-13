---
title: Środowisko pracy Obraz
---

:::caution
Środowisko pracyObraznie jest już dołączone po wersji 0.20.Jego funkcjonalność została zintegrowana wNarzędziach podstawowych. Zobacz stronyStd: ImportiStd: Otwórz widok obrazu.
:::
![](/images/Workbench_Image.svg)

Ikonka FreeCAD dla Środowiska pracy Obraz

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Image.svg) Obraz zarządza różnymi typami plików graficznych [bitmap](/Bitmap/pl "Bitmap/pl") i umożliwia ich otwarcie w programie FreeCAD.

## Przybory

- ![](/images/Image_Open.svg) [Otwórz widok obrazu](/Image_Open/pl "Image Open/pl"): otwórz obraz na nowej rzutni.
- ![](/images/Image_CreateImagePlane.svg) [Tworzy płaski obraz w przestrzeni 3D](/Image_CreateImagePlane/pl "Image CreateImagePlane/pl"): zaimportuj obraz do płaszczyzny w widoku 3D.
- ![](/images/Image_Scaling.svg) [Skaluje płaszczyznę obrazu ...](/Image_Scaling/pl "Image Scaling/pl"): skalowanie zaimportowanego obrazu do płaszczyzny.

## Funkcje

- Podobnie jak w [Szkicowniku](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), importowany obraz może być dołączony do jednej z głównych płaszczyzn XY, XZ lub YZ, i może mieć dodatnią lub ujemną wartość odsunięcia.
- Obraz jest importowany z zależnością 1 piksel na 1 milimetr.
- Zaleca się, aby importowany obraz miał rozsądną rozdzielczość.

## Przepływ pracy

Głównym zastosowaniem tego środowiska pracy jest tworzenie bryły na podstawie konturów obrazu za pomocą narzędzi środowisk [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

Operacja rysowania po obrazie działa najlepiej, jeśli obraz ma niewielkie ujemne odsunięcie, na przykład -0,1 mm, w stosunku do płaszczyzny roboczej. Oznacza to, że obraz będzie znajdował się nieco za płaszczyzną, na której rysujesz geometrię 2D, więc nie będziesz rysował na powierzchni samego obrazu.

Odsunięcie obrazu może być ustawione podczas importu lub zmienione później poprzez jego właściwości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/pl&oldid=1260804>"

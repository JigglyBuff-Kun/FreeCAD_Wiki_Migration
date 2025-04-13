---
title: Architektura Odniesienie
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Odniesienie |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia ogólne 3D → Odniesienie |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Odniesienie** umożliwia umieszczenie w bieżącym dokumencie obiektu, który kopiuje swój kształt i kolory z obiektu opartego na [Części](/Part_Workbench/pl "Part Workbench/pl") *(w tym [Części budynku](/Arch_BuildingPart/pl "Arch BuildingPart/pl"))* przechowywanego w innym pliku FreeCAD. Jeśli ten plik ulegnie zmianie, obiekt referencyjny zostanie oznaczony do ponownego załadowania.

![](/images/Arch_reference_screenshot.png)

## Użycie

1. Naciśnij przycisk ![](/images/Arch_Reference.svg) **Odniesienie**,
2. Naciśnij przycisk "Wybierz plik ..." i wybierz istniejący plik FreeCAD,
3. Wybierz jeden z dołączonych obiektów opartych na częściach z rozwijanej listy,
4. Naciśnij przycisk **OK**.

## Opcje

* Obiekt referencyjny można przesuwać i obracać, bieżąca pozycja zostanie zachowana po ponownym załadowaniu obiektu.
* Jeśli oryginalny obiekt zostanie przeniesiony w pliku zawierającym, ruch ten zostanie odzwierciedlony w obiekcie referencyjnym.
* Klikając prawym przyciskiem myszy obiekt odniesienia w widoku drzewa, można przeładować oryginalny obiekt lub otworzyć plik zawierający.
* Aby odwołać się do kilku obiektów jednocześnie, umieść je wewnątrz [części budynku](/Arch_BuildingPart/pl "Arch BuildingPart/pl").
* Po wyłączeniu właściwości widoku **Aktualizuj kolory** obiektu referencyjnego, nie będzie on już przeładowywał oryginalnych kolorów, więc można je bezpiecznie zmienić.

## Właściwości

* DANE**Plik**: Plik bazowy, na którym zbudowany jest ten komponent.
* DANE**Część**: Część do użycia z pliku bazowego.
* WIDOK**Aktualizuj kolory**: Jeśli wartość ta zostanie ustawiona na `Prawda`, kolory z połączonego pliku będą aktualizowane.

## Tworzenie skryptów

Narzędzie Odniesienie może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
reference = makeReference([filepath], [partname], [name])

```

Tworzy obiekt `reference` nazwany `name` z obiektu `partname` w pliku `filepath`. Wszystkie argumenty są opcjonalne.

Przykład:

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/pl&oldid=1481142>"
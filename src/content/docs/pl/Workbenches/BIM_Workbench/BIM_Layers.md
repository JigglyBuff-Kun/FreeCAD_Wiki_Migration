---
title: BIM Warstwy
---

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
| BIM Layers                                                                                                                |
| Położenie w menu                                                                                                          |
| Zarządzanie → Warstwy                                                                                                     |
| Środowisko pracy                                                                                                          |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl")                                                                               |
| Skrót klawiszowy                                                                                                          |
| Brak                                                                                                                      |
| Warto zobaczyć                                                                                                            |
| Brak informacji                                                                                                           |
|                                                                                                                           |
| To polecenie jest częścią **Dodatku {{{Addon}}}**, który może być zainstalowany poprzez menu Przybory → Menadżer dodatków |
|                                                                                                                           |

## Opis

**Menedżer warstw** umożliwia zarządzanie [warstwami](/Draft_Layer/pl "Draft Layer/pl"). Warstwy są specjalnym rodzajem grupy, która kontroluje właściwości wizualne obiektów umieszczonych wewnątrz niej. Zmieniając właściwości warstwy, takie jak szerokość linii, kolor linii, kolor kształtu i przezroczystość, zmiany są przekazywane do jej obiektów podrzędnych. Warstwy nie kolidują z żadną inną strukturą FreeCAD, taką jak [grupa](/Std_Group/pl "Std Group/pl") lub [część budowli](/Arch_BuildingPart/pl "Arch BuildingPart/pl"), więc każdy obiekt może być jednocześnie częścią warstwy i częścią grupy.

![](/images/BIM_layers_screenshot.png)

Menedżer warstw

Warstwy są importowane i eksportowane z / do formatów takich jak: [IFC](/Arch_IFC/pl "Arch IFC/pl") i [DXF / DWG](/Draft_DXF/pl "Draft DXF/pl").

Menedżer warstw umożliwia zarządzanie warstwami, dodawanie lub usuwanie warstw oraz zmianę ich właściwości wizualnych. Aby dodać obiekty do warstwy, wystarczy przeciągnąć je na warstwę w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Aby je usunąć, przeciągnij je z warstwy i upuść w katalogu głównym dokumentu.

## Natywne IFC

To narzędzie jest dokładnie takie samo jak [Rysunek Roboczy: Menedżer warstw](/Draft_LayerManager/pl "Draft LayerManager/pl") i tworzy ten sam obiekt warstwy. Jest tylko jedna różnica: obsługuje obiekty [Natywne IFC](/index.php?title=NativeIFC/pl&action=edit&redlink=1 "NativeIFC/pl (page does not exist)"):

- Ikona IFC wskazuje, czy warstwa jest częścią projektu IFC, czy nie.
- Przycisk **Przypisz IFC** umożliwia przeniesienie warstwy do projektu IFC i przekształcenie jej w warstwę IFC.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Layers/pl&oldid=1470951>"

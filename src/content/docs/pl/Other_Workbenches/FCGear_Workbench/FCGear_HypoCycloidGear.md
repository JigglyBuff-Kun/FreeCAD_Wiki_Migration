---
title: FCGear Zębatka hipocykloidalna
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                      |
| ---------------------------------------------------- |
| FCGear: Zębatka hipocykloidalna                      |
| Lokalizacja w menu                                   |
| Gear → Zębatka hipocykloidalna                       |
| Środowisko pracy                                     |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl") |
| Domyślny skrót                                       |
| Brak                                                 |
| Wprowadzono w wersji                                 |
| 0.22                                                 |
| Zobacz także                                         |
| _brak_                                               |
|                                                      |

## Opis

Polecenie ![](/images/FCGear_HypoCycloidGear.svg) **Zębatka hipocykloidalna** tworzy dwie wielowypustowe tarcze krzywkowe i zestaw rolek, które pozostają w kontakcie z zewnętrznymi powierzchniami tarcz podczas ruchu.

![](/images/FCGear_FCGear_HypoCycloidGear-04.png) ![](/images/FCGear_FCGear_HypoCycloidGear-05.png)

Po lewej: Przekładnia hipocykloidalna. Po prawej: Przekładnia i przejrzyście pokazana przekładnia odwrotna i zestaw rolek.

```
Prosimy o krótki opis tego, co można osiągnąć za pomocą takiego układu przekładni.

```

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_HypoCycloidGear.svg) **Zębatka hipocykloidalna** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_HypoCycloidGear.svg) Zębatka hipocykloidalna**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

## Uwagi

Domyślnie koła zębate są wyświetlane w następujący sposób:

![](/images/FCGear_FCGear_HypoCycloidGear-01.png)

Aby wyświetlić tarcze krzywkowe i zestaw rolek _(sworzni)_ w różnych kolorach, potrzebujemy trzech identycznych obiektów Zębatka hipocykloidalna. Ich widoczność można przełączać:

- DANE**show_disk0** (`Bool`) dla głównego dysku krzywki.
- DANE**show_disk1** (`Bool`) dla odwróconej tarczy krzywkowej na górze.
- DANE**show_pins** (`Bool`) dla zestawu rolek.

![](/images/FCGear_FCGear_HypoCycloidGear-02.png) ![](/images/FCGear_FCGear_HypoCycloidGear-03.png)

Po lewej: Utworzone obiekty Zębatka hipocykloidalna. Po prawej: Zmiana położenia obiektów w celu uzyskania lepszego widoku każdego z nich.

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_HypoCycloidGear/pl&oldid=1346926>"

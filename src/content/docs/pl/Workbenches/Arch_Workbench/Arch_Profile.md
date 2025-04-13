---
title: BIM Profil
---

:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|                                             |
| ------------------------------------------- |
| BIM: Profil                                 |
| Lokalizacja w menu                          |
| 3D/BIM → Narzędzia ogólne 3D → Profil       |
| Środowisko pracy                            |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót                              |
| _brak_                                      |
| Wprowadzono w wersji                        |
| 0.19                                        |
| Zobacz także                                |
| _brak_                                      |
|                                             |

## Opis

Narzędzie **Profil** tworzy parametryczny obiekt profilu 2D. Obiekt ten może być następnie użyty jako podstawa w innych narzędziach, które wykonują wyciągnięcia, takich jak [Rama](/Arch_Frame/pl "Arch Frame/pl"), [Ściana kurtynowa](/Arch_CurtainWall/pl "Arch CurtainWall/pl") lub [Część: Wyciągnij](/Part_Extrude/pl "Part Extrude/pl").

Patrz [lista dostępnych ustawień wstępnych](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv).

Narzędzie profilu jest również zintegrowane z narzędziem [Konstrukcja](/Arch_Structure/pl "Arch Structure/pl"), wszystkie wstępnie ustawione profile są tam również dostępne.

## Użycie

1. Naciśnij przycisk ![](/images/Arch_Profile.svg) **Profil**.
2. Wybierz ustawienie wstępne w panelu zadań narzędzia.
3. Kliknij punkt w widoku 3D, aby umieścić profil.

## Właściwości

### Dane

- DANE**Wysokość**: Całkowita wysokość profilu.
- DANE**Szerokość**: Całkowita szerokość profilu.
- DANE**Średnica**: Średnica profilu _(tylko profile okrągłe)_.
- DANE**Grubość**: Grubość ścianki rury _(tylko okrągłe i prostokątne puste profile)_.
- DANE**Web Thickness**: Grubość środnika profilu _(tylko profile H i I)_.
- DANE**Grubość kołnierza**: Grubość kołnierza profilu _(tylko profile H i I)_.

## Dodawanie profili niestandardowych

Użytkownik może utworzyć dodatkowy plik CSV zawierający niestandardowe definicje profili. Musi on mieć nazwę `profiles.csv` i być umieszczony w folderze:

```
$FREECAD_USER_DIR/BIM/

```

lokalizację `$FREECAD_USER_DIR` można uzyskać z [konsoli Python](/Python_console "Python console"):

```
FreeCAD.getUserAppDataDir()

```

Zawartość pliku niestandardowego profilu `profiles.csv` musi być wzorowana na tych samych zasadach, co plik [profiles.csv](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv) w kodzie źródłowym.

Plik CSV musi zawierać jeden wiersz dla każdego dostępnego profilu, sformatowany w następujący sposób:

- Dla profili C: Kategoria, Nazwa, Klasa profilu, Średnica, Grubość.
- Dla profili H, U i T: Kategoria, Nazwa, Klasa profilu, Szerokość, Wysokość, Grubość środnika, Grubość kołnierza.
- Dla profili L: Kategoria, Nazwa, Klasa profilu, Szerokość, Wysokość, Grubość.
- Dla profili R: Kategoria, Nazwa, Klasa profilu, Szerokość, Wysokość.
- Dla profili RH: Kategoria, Nazwa, Klasa profilu, Szerokość, Wysokość, Grubość.

Wszystkie pomiary muszą być podane w milimetrach. Możliwe klasy profili to:

- C: Rura okrągła,
- H: [Profil H lub I](https://en.wikipedia.org/wiki/I-beam),
- R: Prostokątny,
- RH: Prostokątny wydrążony,
- U: Profil U,
- L: Profil L,
- T: Profil T.

Można utworzyć dodatkowe typy profili, ale najpierw należy zdefiniować odpowiednią klasę w [ArchProfile.py](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/ArchProfile.py).

## Tworzenie skryptów

Narzędzie **Profil** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
profile = makeProfile(profile_list)

```

Gdzie `profile_list` zawiera różne elementy listy w pliku CSV.

Przykład:

```
import Arch
Arch.makeProfile([0, 'REC', 'REC100x100', 'R', 100, 100])

```

Gdzie pierwszym elementem listy jest numer porządkowy, który nie został jeszcze użyty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Profile/pl&oldid=1481162>"

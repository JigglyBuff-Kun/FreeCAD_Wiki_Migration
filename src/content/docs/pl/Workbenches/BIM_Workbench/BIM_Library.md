---
title: Biblioteka BIM
---
|  |
| --- |
| BIM: Biblioteka |
| Lokalizacja w menu |
| 3D / BIM → Ogólne narzędzia 3D → Objects library |
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

Narzędzie **Biblioteka** pozwala na umieszczenie w bieżącym modelu obiektu z [FreeCAD Parts Library](/Parts_Library_Workbench/pl "Parts Library Workbench/pl"), który musi być zainstalowany poprzez ![](/images/Std_AddonMgr.svg) [Menedżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"), aby to narzędzie było dostępne.

![](/images/BIM_Library_screenshot.png)

Okno dialogowe **Przeglądarka bibliotek** w [Panel zadań](/Task_panel/pl "Task panel/pl") po lewej stronie

## Użycie

1. Naciśnij przycisk ![](/images/BIM_Library.png) **Biblioteka BIM**.
2. Wynik: W [widoku połączonym](/Combo_view/pl "Combo view/pl") → [Panel zadań](/Task_panel/pl "Task panel/pl") zostanie wyświetlone okno dialogowe zatytułowane **Przeglądarka biblioteki**.
3. Kliknij plik w przeglądarce biblioteki.
4. Kliknij go dwukrotnie lub naciśnij przycisk Wstaw.
5. Kliknij punkt w [Widoku 3D](/3D_view/pl "3D view/pl") lub wprowadź współrzędne ręcznie, aby umieścić obiekt.

## Opcje

* Obsługiwane są pliki [FCStd](/File_Format_FCStd/pl "File Format FCStd/pl"), STEP i [BREP](/File_Format_FCStd/pl#*.brep "File Format FCStd/pl"). Tylko pliki STEP i BREP są wspierane. Pliki FCStd nie pozwalają na wybór miejsca umieszczenia, ponieważ mogą składać się ze złożonej serii obiektów o znaczących pozycjach. Po wybraniu pliku FCStd jego zawartość zostanie wstawiona w miejscu określonym w pliku.
* Obiekty STEP i BREP są wstawiane jako ![Arch_Equipment/pl](/images/Arch_Equipment.svg) [wyposażenie](/Arch_Equipment/pl "Arch Equipment/pl") bez oddzielnego kształtu bazowego. Późniejsze dodanie kształtu bazowego do tych obiektów zniszczy ich obecny kształt.
* Podczas umieszczania obiektu można wybrać jego punkt wstawienia pomiędzy oryginalnym *(`0,0,0`)* punktem zdefiniowanym w pliku, górnym, środkowym, dolnym i lewym, środkowym i prawym.
* Biblioteka może działać w trybie offline, w którym polega na zainstalowanym *(i aktualizowanym przez użytkownika)* dodatku Parts Library, lub online, w którym przegląda bezpośrednio z repozytorium [Parts Library Git](https://github.com/FreeCAD/FreeCAD-library) i umożliwia pobieranie bezpośrednio stamtąd.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Library/pl&oldid=1517586>"
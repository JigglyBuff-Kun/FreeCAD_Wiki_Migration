---
title: Instalacja w systemie Windows
---
## Instalacja standardowa

Najprostszym sposobem na zainstalowanie najnowszej stabilnej wersji FreeCAD jest użycie instalatora, zobacz stronę [Pobieranie](/Download/pl "Download/pl").

Jeśli chcesz pobrać wersję rozwojową, która może być niestabilna, zobacz stronę [Pobieranie kompilacji tygodniowych](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds).

Po pobraniu pliku .exe Instalatora, kliknij jego ikonę dwukrotnie, aby uruchomić proces instalacji.

Poniżej znajduje się więcej informacji na temat opcji technicznych. Większość użytkowników Windows nie będzie potrzebowała nic więcej niż instalator. Gdy zakończysz instalację przejdź do poradnika [Jak zacząć](/Getting_started/pl "Getting started/pl").

## Instalacja dla wszystkich użytkowników systemu Windows

Domyślnie program FreeCAD zostanie zainstalowany dla użytkownika, który uruchomi instalator. Jeśli użytkownik ten posiada jedynie uprawnienia użytkownika, domyślną ścieżką instalacji jest:

:   C:\\Users\<username\\AppData\Local\Programy\FreeCAD X.YY

Jeśli instalator jest uruchamiany przez użytkownika z uprawnieniami administratora lub ty uruchamiasz go jako administrator, możesz wybrać, czy FreeCAD ma być zainstalowany dla wszystkich użytkowników systemu, czy tylko dla Ciebie. Domyślnie instalator jest uruchamiany dla wszystkich użytkowników systemu.

W przypadku instalacji dla wszystkich użytkowników, domyślna ścieżka instalacji to:

:   C:\Program Files\FreeCAD X.YY

## Cicha instalacja

Aby zainstalować program FreeCAD po cichu, można uruchomić instalator z wiersza poleceń:

```
FreeCAD-~.exe /S

```

Dla wszystkich opcji zostaną zastosowane ustawienia domyślne. W ten sposób można określić niestandardową ścieżkę instalacji:

```
FreeCAD-~.exe /S /D=A path to FreeCAD with spaces

```

Domyślnie, nawet w przypadku cichej instalacji, podczas sprawdzania instalatora pod kątem uszkodzeń zostanie wyświetlone krótkotrwałe okno dialogowe. To tak zwane cykliczne sprawdzanie poprawności trwa najwyżej kilka sekund. Aby wyłączyć sprawdzanie poprawności:

```
FreeCAD-~.exe /S /NCRC

```

Uwaga: ta flaga `/NCRC` jest **niezalecana**, ponieważ sprawdzanie poprawności zapewnia, że instalator został np. całkowicie pobrany.

## Chocolatey

Korzystanie z menedżera pakietów [Chocolatey](https://chocolatey.org/install) nie jest obecnie zalecane, ponieważ repozytorium to nie jest już aktualizowane.

## Deinstalacja

Aby odinstalować program FreeCAD, najlepiej jest użyć narzędzi Windows do odinstalowywania oprogramowania. Można też bezpośrednio uruchomić dezinstalator. To jest ten plik:

:   Uninstall-FreeCAD.exe

Można go znaleźć w folderze, w którym zainstalowany jest program FreeCAD.

Odinstalowanie programu można także wykonać za pomocą wiersza poleceń:

```
Uninstall-FreeCAD.exe /S

```

Należy pamiętać, że *(cicha)* deinstalacja nie powiedzie się, jeśli istnieje działająca instancja programu FreeCAD, nawet jeśli nie jest to wersja, która jest odinstalowywana.

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Windows/pl&oldid=1358908>"
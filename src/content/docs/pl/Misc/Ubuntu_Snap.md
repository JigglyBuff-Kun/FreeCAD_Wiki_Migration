---
title: Ubuntu Snap
---
## Wprowadzenie

Pakiet Snap Ubuntu lub po prostu Snap jest formatem dystrybucji podobnym do [AppImage](/AppImage/pl "AppImage/pl"), ponieważ ma być "uniwersalnym pakietem instalacyjnym" do wdrażania oprogramowania w systemach Linux. Snapy zostały wprowadzone przez Ubuntu, ale są przeznaczone do uruchamiania na wszystkich dystrybucjach Linuksa, o ile demon Snap lub `snapd` jest dostępny w systemie docelowym.

Pakiet Snap ma dwie główne cechy:

* Programy są umieszczane w piaskownicy, dzięki czemu nie zakłócają działania reszty systemu operacyjnego.
* Programy są automatycznie aktualizowane w tle w celu uzyskania najnowszej wersji aplikacji.

Inne sposoby instalacji oprogramowania przedstawiono na stronie [Instalacja w systemie Linux](/Installing_on_Linux/pl "Installing on Linux/pl").

## Instalacja

Korzystanie ze Snapów ma charakter eksperymentalny. Obecne Snapy są generowane i hostowane przez wolontariuszy.

We wszystkich systemach, w których mają zostać zainstalowane Snapy, najpierw musi zostać zainstalowany demon Snap. Pakiet ten zwykle nosi nazwę `snapd`.

### Debian oraz Ubuntu

W przypadku dystrybucji Debiana / Ubuntu i podobnych systemów, które używają menedżera APT, demon jest instalowany w następujący sposób:

```
sudo apt install snapd

```

Aby zainstalować stabilną wersję Snap użyj:

```
sudo snap install freecad

```

Aby zainstalować wersję deweloperską Snap, użyj:

```
sudo snap install --edge freecad

```

### Manjaro

Aby zainstalować stabilną wersję Snap użyj:

```
snap install freecad

```

Aby zainstalować wersję deweloperską Snap, użyj:

```
snap install --edge freecad

```

## Uwagi

#### Jakiej wersji FC używam

Aby dowiedzieć się, która wersja rozwojowa jest zainstalowana, wpisz następujące polecenie w wierszu poleceń:

```
snap info freecad

```

#### Przełączanie się między różnymi Snapami

Począwszy od końca cyklu wydawniczego v0.20, opiekunowie snapów FreeCAD dodali możliwość testowania eksperymentalnych kompilacji FreeCAD. Snapy pozwalają na to poprzez łatwe przełączanie się między różnymi wydaniami *(terminologia to "[kanały lub ścieżki](https://snapcraft.io/docs/channels)")*. Na przykład:

Testowanie gałęzi *("toponaming")* Topological Naming *(utworzonej na początku cyklu wydań v0.21/v1.0)*:

```
snap refresh freecad --channel=latest/edge/toponaming

```

Użycie polecenia `refresh` przełączy i zaktualizuje kanał snap, na który się przełączasz:

```
snap refresh freecad --channel=latest/edge/toponaming

```

Powrót do nocnego kanału "edge":

```
snap refresh freecad --channel=latest/edge

```

## Zaawansowane

Poniższe polecenia są przeznaczone dla użytkowników, którzy są zaznajomieni z `git` i mają lokalnie sklonowane repozytorium upstream FreeCAD.

```
git clone https://github.com/FreeCAD/FreeCAD
cd FreeCAD/

```

Aby znaleźć najnowszy numer wersji upstream *(znany również jako "HEAD")*:

```
git pull upstream master  # first make sure we have the most up-to-date commits
git rev-list --count HEAD # 'HEAD' refers to the current commit you are viewing (tip of the master branch)

```

Aby przetłumaczyć bieżącą wersję rozwojową snap na numer wersji *(upewnij się, że jesteś w sklonowanym repozytorium FreeCAD, jak wspomniano powyżej)*:

```
snap info freecad |\
grep -e '^\s\+latest/edge' |\
awk -F ' ' '{ print $2 }' |\
xargs -I{} git rev-list --count {}

```

**Uwaga:** powyższa linijka skryptu bash 1 zakłada, że użytkownik ma zainstalowaną wersję „edge” *(nightly)*.

Różnica pomiędzy HEAD i numerami wersji snap edge wskazuje ilość wersji pozostających w tyle za wersją snap development *(edge)*.

Idąc o krok dalej, jeśli chcesz uzyskać krótkie podsumowanie commitów między bieżącym snap edge a HEAD:

```
snap info freecad |\
grep -e '^\s\+latest/edge' |\
awk -F ' ' '{ print $2 }' |\
xargs -I{} git log --oneline --ancestry-path {}..HEAD

```

**Uwaga:** W konsoli otrzymamy informację, które commity **nie są** w bieżącym *edge* *(ale będą w następnej nocnej aktualizacji)*.

## Odnośniki internetowe

Więcej informacji o bieżących wysiłkach związanych ze Snapami:

* [0.19 Snap Preview needs "testers"](https://forum.freecadweb.org/viewtopic.php?f=4&t=46044), starszy Snap autorstwa *vejmarie* *(przestarzały)*.
* [Dyskusja: State of the snap (Snap Packaging)](https://forum.freecadweb.org/viewtopic.php?f=42&t=46853), nowsza wersja Snapa autorstwa *ppd* *(przestarzałe)*.

### Repozytoria

* <https://github.com/FreeCAD/FreeCAD-snap>
* <https://snapcraft.io/freecad>

### Opiekunowie

* ppd *([forum](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=24042), [github](https://github.com/ppd))*
* luzpaz *([forum](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=12229), [github](https://github.com/luzpaz))*

## Powiązane

* [AppImage](/AppImage/pl "AppImage/pl") - inny samodzielny "binarny" format do uruchamiania programu FreeCAD.
* [Flatpak](/Flatpak/pl "Flatpak/pl") pakiety.

Retrieved from "<http://wiki.freecad.org/index.php?title=Ubuntu_Snap/pl&oldid=1317247>"
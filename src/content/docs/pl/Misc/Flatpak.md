---
title: Flatpak
---
## Instalacja

### Wersja stabilna

Jeśli chcesz przeprowadzić instalację na poziomie użytkownika lub nie masz uprawnień sudo, dodaj flagę `--user` do następujących poleceń:

```
# add flathub repo just to be sure as it might not be enabled if it is your first time using flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.freecad.FreeCAD

```

### Wersja rozwojowa

Jeśli chcesz przeprowadzić instalację na poziomie użytkownika lub nie masz uprawnień sudo, dodaj flagę `--user` do następujących poleceń:

```
# flathub-beta repo is not enabled by default
flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
flatpak install flathub-beta org.freecad.FreeCAD

```

## Uruchomienie

Możesz uruchomić flatpak za pomocą ikonki pulpitu lub za pomocą następującego polecenia:

```
flatpak run org.freecad.FreeCAD

```

Różne gałęzie mogą być instalowane równolegle. Aby wybrać, która z nich ma być uruchomiona, użyj flagi `--branch`:

```
flatpak run --branch=beta org.freecad.FreeCAD

```

Aby uruchomić konkretny plik wykonywalny *(na przykład `FreeCADCmd`, aby uruchomić bez GUI)* flatpaka użyj flagi `--command`:

```
flatpak run --command=FreeCADCmd org.freecad.FreeCAD

```

## Repozytorium

* <https://github.com/flathub/org.freecad.FreeCAD>

### Opiekunowie

* [adrianinsaval](https://github.com/adrianinsaval)
* [hfiguiere](https://github.com/hfiguiere)

## Powiązane

* paczki [AppImage](/AppImage/pl "AppImage/pl")
* paczki [Snap](/Ubuntu_Snap/pl "Ubuntu Snap/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Flatpak/pl&oldid=1509952>"
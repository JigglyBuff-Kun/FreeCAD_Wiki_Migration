---
title: Git budowa paczek
---
Współczesne przepływy pracy w Debianie obejmują [tworzenie pakietów za pomocą Git](https://wiki.debian.org/PackagingWithGit) i podstawowym narzędziem do tego jest [git-buildpackage](http://honk.sigxcpu.org/projects/git-buildpackage/manual-html/gbp.html). git-buildpackage udostępnia polecenie `gbp` z kilkoma opcjami podobnymi do polecenia `git` samego w sobie. Wiele z tych poleceń to po prostu nakładka na niższopoziomowe narzędzia Debiana, więc złożoność nauki pakietowania może być dość wysoka.

Aby to obejść, oto krótkie i proste kroki do rozpoczęcia pracy z git-buildpackage. Powinno to działać na prawie każdej dystrybucji opartej na Debianie, ale zalecam pracę nad tym w czystym i oddzielnym środowisku na maszynie wirtualnej [Debian Unstable](/Debian_Unstable/pl "Debian Unstable/pl").

1. Zainstaluj go za pomocą polecenia `sudo apt install git-buildpackage`.
2. Pobierz pliki konfiguracyjne na końcu tej strony. Będziesz potrzebować: `~/.gbp.conf`, `~/.pbuilderrc`, i `~/.quiltrc`.
3. Budowa pakietu będzie przeprowadzana w czystym środowisku. Utwórz je za pomocą polecenia `sudo git-pbuilder create`.
4. Znajdź adres URL pakietu, który chcesz zbudować na <https://salsa.debian.org>, samohostującym się instancji GitLab projektu Debian.
5. Utwórz jego klon za pomocą polecenia `gbp clone --all <URL>`.
6. Wejdź do katalogu sklonowanego repozytorium za pomocą polecenia `cd`.
7. Uruchom proces budowy za pomocą polecenia `gbp buildpackage -us -uc`.
8. Gdy proces się zakończy, Twoje paczki znajdą się w `../build-area/`.

##### gbp.conf

Lokalizacja: `~/.gbp.conf`

<https://gitlab.com/kkremitzki/dotfiles/blob/master/.gbp.conf>

##### pbuilderrc

Lokalizacja: `~/.pbuilderrc`

<https://gitlab.com/kkremitzki/dotfiles/blob/master/.pbuilderrc>

##### quiltrc

Lokalizacja: `~/.quiltrc`

<https://gitlab.com/kkremitzki/dotfiles/blob/master/.quiltrc>

Retrieved from "<http://wiki.freecad.org/index.php?title=Git_buildpackage/pl&oldid=1385134>"
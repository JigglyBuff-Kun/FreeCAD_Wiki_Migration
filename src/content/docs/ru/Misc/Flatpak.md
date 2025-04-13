---
title: Flatpak
---
## Установка

### Стабильная версия

Если вы хотите выполнить установку на уровне пользователя или у вас нет привилегий sudo, добавьте флаг `--user` к следующим командам:

```
# add flathub repo just to be sure as it might not be enabled if it is your first time using flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.freecad.FreeCAD

```

## Тестовые версии

Если вы хотите выполнить установку на уровне пользователя или у вас нет привилегий sudo, добавьте флаг `--user` к следующим командам:

```
# flathub-beta repo is not enabled by default
flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
flatpak install flathub-beta org.freecad.FreeCAD

```

## Запуск

Вы можете запустить flatpak, используя файл desktop или используя следующую команду:

```
flatpak run org.freecad.FreeCAD

```

Параллельно могут быть установлены различные ветки. Чтобы выбрать, какую из них запускать, используйте флаг `--branch`:

```
flatpak run --branch=beta org.freecad.FreeCAD

```

Чтобы запустить определенный исполняемый файл (например, `FreeCADCmd` для запуска без графического интерфейса) из flatpak, используйте флаг `--command`:

```
flatpak run --command=FreeCADCmd org.freecad.FreeCAD

```

## Репзиторий

* <https://github.com/flathub/org.freecad.FreeCAD>

### Поставщик(и) ПО

* [adrianinsaval](https://github.com/adrianinsaval)
* [hfiguiere](https://github.com/hfiguiere)

## Сопутствующая информация

* Пакеты [AppImage](/AppImage "AppImage")
* Пакеты [Snap](/Snap "Snap")

Retrieved from "<http://wiki.freecad.org/index.php?title=Flatpak/ru&oldid=1529223>"
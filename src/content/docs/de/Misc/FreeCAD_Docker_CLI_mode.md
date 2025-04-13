---
title: FreeCAD Docker CLI Modus
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

## Übersicht

Docker Abbild von FreeCAD ohne GUI kompiliert. Dieses Docker-Abbild ist speziell für Entwickler gedacht, die FreeCAD nur in der Kommandozeilen Schnittstelle (CLI) verwenden wollen.

### Nutzen

Alle Abhängigkeiten von FreeCAD sind bereits installiert, miteinander kompatibel und entsprechend konfiguriert, so dass du sehr schnell mit der Entwicklung beginnen kannst.

* Einfach zu benutzen und leichtgewichtig.
* Es bietet eine bessere Leistung in Bezug auf die Geschwindigkeit.
* Es ist nicht notwendig, FreeCAD Pfade hinzuzufügen, um es in Python zu importieren.

## Docker Repositorien

* Docker Anlaufstelle: <https://hub.docker.com/r/amrit3701/freecad-cli>
* Github Repositorium: <https://github.com/amrit3701/docker-freecad-cli>

## Voraussetzungen

* 3 GB freier Speicherplatz
* Docker

## Einrichtung

1. Ziehe das Docker Abbild auf.

   ```
   docker pull amrit3701/freecad-cli:latest

   ```
2. Wenn das Docker-Abbild erfolgreich gezogen wurde, kann es jetzt ausgeführt werden.

   ```
   docker run -it amrit3701/freecad-cli:lastest bash

   ```

## Zusätzliche Informationen

### Erweitern Docker-Abbild

Du kannst diese Docker-Abbilder auch erweitern, um zusätzliche Abhängigkeiten für dein Projekt hinzuzufügen. Für z.B.

```
# Dockerfile

FROM amrit3701/freecad-cli:lastest

# Add additional dependencies

# pip3.8 install <some_package>

```

### Importieren FreeCAD in Python

Nachdem ausführen des Docker-Abbilds, führe einfach `Python` aus.

```
$ docker run -it amrit3701/freecad-cli:lastest bash
root@f0ec904cf9b9:/# python3.8
Python 3.8.5 (default, Jul 20 2020, 19:48:14)
[GCC 7.5.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import FreeCAD
>>> import Part
>>> import Draft
>>> import Arch

```

### FreeCADCmd Starten

Um FreeCAD im Docker Abbild zu starten, führe einfach den Befehl `FreeCADCmd` aus.

## Diskussion

FreeCAD Forumsbeitrag: <https://forum.freecadweb.org/viewtopic.php?f=8&t=45877>

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Docker_CLI_mode/de&oldid=1104779>"
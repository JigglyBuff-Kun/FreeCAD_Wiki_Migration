---
title: Kompilieren auf Docker
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

## Überblick

Unter den Möglichkeiten, FreeCAD zu bauen und zu installieren, gibt es die Möglichkeit, Docker zu verwenden. Diese Methode ist vor allem für FreeCAD Entwickler nützlich, die Linux oder Mac OS Rechner verwenden.

### Vorteile

Alle Abhängigkeiten von FreeCAD sind bereits installiert, miteinander kompatibel und entsprechend konfiguriert, so dass Du sehr schnell mit der Entwicklung beginnen kannst.

* Die Abhängigkeiten sind im Docker Container enthalten, wodurch verhindert wird, dass unerwünschte Pakete Ihre Arbeitsstation verunreinigen und dass es zu Kollisionen von Versionen kommt.
* Der Quellcode und die Bauverzeichnisse befinden sich außerhalb des Docker Containers. Dies erlaubt es Dir, deine bevorzugten Bearbeitungsprogramme, Versionierungssysteme, Entwicklungswerkzeuge usw. zu verwenden, ohne sie im Docker Container einrichten zu müssen. Du kannst sie einfach wie gewohnt direkt von deinem Arbeitsplatzrechner aus benutzen. (Außerdem bedeutet es, dass du den Docker Container nicht jedes Mal neu aufbauen musst, wenn du FreeCAD bauen willst).
* Für diejenigen, die obskure \*nix Distributionen und [Gebrauchsanweisungen sind nicht verfügbar](/Compile_on_Linux/de#Erhalten_der_Abhängigkeiten "Compile on Linux/de") für das Holen von Abhängigkeiten verwenden, ist alles, was du auf deinem Arbeitsplatzrechner installieren musst, ein Docker, der in vielen Distributionen recht häufig verfügbar ist.
* Er bietet eine statische, unveränderliche Entwicklungsumgebung. Ich persönlich finde das nützlich, wenn ich bei der Entwicklung die Anzahl der potentiellen Variablen, die ein Problem verursachen könnten, reduzieren möchte. Du weist, dass du zwischen den Builds nichts Esoterisches in der Umgebung verändert hast. Für Entwickler, die zusammenarbeiten und beide den gleichen Docker Container verwenden, kannst du sicher sein, dass ihr beide von der gleichen Umgebung aus arbeitet, was Kommunikationsfehler aufgrund von Unterschieden in der Umgebung reduziert.

## Docker Repositorien

* Original: <https://gitlab.com/daviddaish/freecad_docker_env>
* Offiziell: <https://GitHub.com/FreeCAD/Docker>

## Vorbedingungen

* 10GB freier Speicherplatz
* Docker

## Installation

### Herunterladen der Quelle

Der beste Weg, den Quellcode von FreeCAD zu erhalten, ist das Klonen des [Git Repositorium](https://github.com/FreeCAD/FreeCAD). Dazu benötigst du das `git` Programm, das in den meisten Linux und Mac OS Distributionen einfach installiert werden kann, und es kann auch von der [offiziellen Website](http://git-scm.com/) bezogen werden.

Dadurch wird eine Kopie der neuesten Version des FreeCAD Quellcodes in einem neuen Verzeichnis namens `freecad_source` abgelegt.

```
git clone --recurse-submodules https://github.com/FreeCAD/FreeCAD.git ~/my_code/freecad_source

```

Weitere Informationen über die Verwendung von Git und das Einbringen von Code in das Projekt findest Du unter [Quellcodeverwaltung](/Source_code_management/de "Source code management/de").

### Erstelle ein Build Verzeichnis

Erstelle ein Verzeichnis, das deine kompilierten FreeCAD Quellen enthält.

```
mkdir ~/my_code/freecad_build

```

### Docker Abbild ziehen

Ziehe das Docker Abbild. (Offizielle Bild kommt bald.)

```
docker pull registry.gitlab.com/daviddaish/freecad_docker_env:latest

```

### Zugriff auf deinen Windowmanager erlauben

Damit FreeCAD seine GUI aus dem Docker Container heraus starten kann, musst du Docker Zugriffsrechte für deinen Windowmanager geben. In den meisten Linux Distributionen ist dies das X Fenster System. Du kannst den unten stehenden Befehl verwenden, um einen pauschalen Zugriff auf X zu erlauben, bis du deinen Rechner neu startest oder dich abmeldest.

```
xhost +

```

Wenn du mit nicht vertrauenswürdigen Systemen verbunden bist, z.B. über `ssh`, macht dich das anfällig für bösartigen Code. Schließe entweder alle `ssh` Verbindungen, oder schau dir sicherere xhost Berechtigungen an, was außerhalb des Umfanges dieses Tutorials liegt.

#### Mac OS Anwender

Für diejenigen, die Mac OS verwenden, ist das X Fenster System möglicherweise nicht installiert. Das XQuartz Projekt ist ein seit langem laufendes quelloffenes Projekt, das es dir erlaubt, es auf deinem Computer zu installieren. [Du kannst es hier finden](https://www.xquartz.org/).

### Starte das Docker Abbild

Weise Umgebungsvariablen zu, so dass der Docker Container den FreeCAD Quellcode und das Build Verzeichnis einhängen wird. Zusätzlich kannst du ein zusätzliches Verzeichnis einhängen, das alle Dateien enthält, die du zu Testzwecken verwenden möchtest. In dem untenstehenden Schnipsel haben wir es als dein Heimverzeichnis als einfache Standardvorgabe belassen.

```
fc_source=~/my_code/freecad_source
fc_build=~/my_code/freecad_build
other_files=~/

```

Starte das Docker Abbild.

```
docker run -it --rm \
-v $fc_source:/mnt/source \
-v $fc_build:/mnt/build \
-v $other_files:/mnt/files \
-e "DISPLAY" -e "QT_X11_NO_MITSHM=1" -v /tmp/.X11-unix:/tmp/.X11-unix:ro \
registry.gitlab.com/daviddaish/freecad_docker_env:latest

```

### FreeCAD bauen

Du kannst FreeCAD mit dem installierten Build Skript oder mit deiner bevorzugten Methode bauen.

```
/root/build_script.sh

```

### FreeCAD ausführen

Sobald FreeCAD gebaut wurde, kann es wie gewohnt ausgeführt werden.

```
/mnt/build/bin/FreeCAD

```

Du kannst die angehängten Verzeichnisse im `/mnt` Verzeichnis finden.

## Diskussion

* [Docker env build container](https://forum.freecadweb.org/viewtopic.php?f=4&t=42954)
* [VSCode setup with Docker (1)](https://forum.freecadweb.org/viewtopic.php?f=10&t=48266)
* [VSCode setup with Docker (2)](https://forum.freecadweb.org/viewtopic.php?p=427812#p427812)

## Verwandt

* [AppImage](/AppImage "AppImage")

Retrieved from "<http://wiki.freecad.org/index.php?title=Compile_on_Docker/de&oldid=1503559>"
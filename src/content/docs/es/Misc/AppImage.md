---
title: Imágenes de las aplicaciones
---

## ¿Qué es un Imágenes de las aplicaciones?

[![](/images/AppImage-logo.png)](https://appimage.org) _Empaquetar una vez y correr por todas partes. Llega a los usuarios en todas las principales distribuciones de escritorio de Linux._

AppImage is a "universal binary package" intended to distribute an application to any Linux distribution. Read more about it on the [Appimage homepage](https://appimage.org) and [Wikipedia](https://en.wikipedia.org/wiki/AppImage).

To run it, first make it executable, and then type the relative or full path.

```
chmod +x FreeCAD_xxx-x86_64.AppImage
./FreeCAD_xxx-x86_64.AppImage

```

Para otros tipos de instalación ver [Descargar](/Download/es "Download/es").

## FreeCAD Imágenes de las aplicaciones

Available FreeCAD AppImages

| Stable                                                                 | Development                                                                          |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [v1.0.0](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/1.0.0) | [Weekly build](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds) |

**Important Notes:**

- Development happens daily and rapidly.
- Many users on the forum utilize the development version.
- It can be run on the same system in parallel with another version of FreeCAD.
- Users use the dev version to take advantage of the latest features and bug fixes (since FreeCAD has a long release cycle). They also use it to help test and find bugs to spur development and improvement of FreeCAD.

#### Obligatory Word of Caution

For the most part the development version is stable but of course it's important to add the obligatory statement to use it at your own risk. Though most people that utilize backups and 'save often' do quite well.

## Actualización automática

AppImage has a smart and economical way of updating. It calculates the difference between the new AppImage and the old one, and will only download the changes between their versions. In theory the user ends up downloading around 15% each time instead of an entirely new AppImage.

Automatic updating is done via several optional methods. Currently there are 4 methods, 2 through the graphical interface (GUI), and 2 through the command-line/terminal interface (CLI).

### Actualización experimental in-aplication

Thanks to the efforts of several key devs, there is an [ongoing effort](https://forum.freecadweb.org/viewtopic.php?f=8&t=44324) to integrate a feature that allows **self-updating the AppImage within FreeCAD** itself. Starting from FC 0.19.21514 there now exists an AppImage section found via **Edit → Preferences → AppImage**. Please test this capability and report your experience to the [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=44324).

### GUI method 1 (official)

This is the official AppImageUpdate GUI application.

1. Download [AppImageUpdate-x86_64.AppImage](https://github.com/AppImage/AppImageUpdate/releases/download/continuous/AppImageUpdate-x86_64.AppImage).
2. Make it executable by right clicking on the file, going in to properties and "Run as an executable".
3. Double click on the AppImage icon, a dialog box will appear and you'll be prompted to specify what AppImage you want to update.
4. Specify the path to your existing AppImage.
5. Once the AppImage is updated, press the button Run updated AppImage.

### GUI method 2 (unofficial)

This is a sleeker 3rd-party unofficial version of AppImageUpdate named: **AppImageUpdater**. It is still in development (at the time of this wiki edit) but nevertheless, quite nice to use.

1. Download [AppImageUpdater-\*-x86_64.AppImage](https://github.com/antony-jr/AppImageUpdater/releases/tag/continuous)
2. Make it executable:

   ```
   chmod +x AppImageUpdater*-x86_64.AppImage

   ```

3. Run it:

   ```
   source AppImageUpdater*-x86_64.AppImage

   ```

4. Find your current FreeCAD AppImage and drag-drop it on to the AppImageUpdater

Result: Follow the AppImageUpdater prompts

### CLI method 1 (official)

Run the following instructions in your terminal

```
wget https://github.com/AppImage/AppImageUpdate/releases/download/continuous/appimageupdatetool-x86_64.AppImage
chmod +x ./appimageupdatetool-x86_64.AppImage
./appimageupdatetool.AppImage path/to/old/FreeCAD.AppImage
chmod +x path/to/updated/FreeCAD.AppImage
./path/to/updated/FreeCAD.AppImage

```

Notes:

- The file names will be unique because of the version info is embedded in them. The above instructions are simplified for convenience.
- Run `./appimageupdatetool-x86_64.AppImage --help` to learn about functionality like `--remove-old`, `--overwrite` and `--self-update`.
- There is also an i386 version; see the [AppImageUpdate release](https://github.com/AppImage/AppImageUpdate/releases) page.

Todo: share a script that can be added as an alias or [cron](https://en.wikipedia.org/wiki/Cron) job.

### CLI method 2 (unofficial)

Similarly to the Graphical methods having an official and unofficial approaches to downloading AppImages, the same applies to the command line. This is a sleeker 3rd-party command line option to download AppImages.

1. Download [appimageupdater-\*-x86_64.AppImage](https://github.com/antony-jr/AppImageUpdater/releases/tag/continuous-cli)
2. Make it executable:

   ```
   chmod +x appimageupdater*-x86_64.AppImage

   ```

3. Run it:

   ```
   source appimageupdater*-x86_64.AppImage /path/to/old/FreeCAD-AppImage.AppImage

   ```

**Result**: Updates specified AppImage file if update exists

# Experimental

## Fixing AppImage zsync

It may happen that an AppImage won't update because it's target file changed in some way. Instead of downloading a whole new AppImage, it's possible to rewrite the zsync file that is used by the AppImage to download the delta. More info can be found at <https://github.com/antony-jr/appimage-update-info-writer>.

This section needs more details.

## Downloading via Bittorrent

An experimental feature that the FreeCAD packaging team is exploring (thanks to the work of Antony-jr) is being able to download an appimage delta of FreeCAD via bittorrent. The repository issue is at <https://github.com/FreeCAD/FreeCAD-Bundle/issues/49>

# Sección de desarrollo

_Note:_ the following sections are intended for developers

## Desembalaje de Imágenes de las aplicaciones

A very convenient aspect of FreeCAD is that a majority of it is built in [Python](/Python "Python"), which doesn't need to be manually compiled like C++. Essentially, a Python file can be modified, and upon restarting FreeCAD those changes will be integrated into the application. A developer can quickly work on the latest FreeCAD release using this technique and an AppImage. Moreover, using an AppImage doesn't modify your system's environment in any way, that is, nothing is installed and no environmental variables are modified.

### Modificando Imágenes de las aplicaciones

An AppImage embeds a file system in it with everything that is required to run the application. In order to modify it, the file system needs to be extracted.

```
./FreeCAD_xxx.AppImage --appimage-extract
cd squashfs-root/

```

Now open the required Python source files in your preferred code editor, modify them, and save them. Then run the application.

```
./AppRun

```

### Reenvasando Imágenes de las aplicaciones

If you've modified the code, and now want to re-package the AppImage with your latest changes, use the [appimagetool-x86_64](https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage) tool on the extracted file system.

```
cd ..
wget "https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage"
chmod +x appimagetool-x86_64.AppImage
./appimagetool-x86_64.AppImage squashfs-root

```

## Imágenes de las aplicaciones personalizadas

Thanks to the work of _realthunder_, author of [App Link](/App_Link "App Link") and [Assembly3 Workbench](/Assembly3_Workbench "Assembly3 Workbench"), it is possible to build custom AppImages using a set of scripts.

This makes it very convenient to release images for a specific branch of the source code for others to test. Although AppImages only work on Linux, realthunder's scripts make it possible to generate AppImages also on Windows and MacOS.

The repository for these scripts is at [realthunder/FreeCADMakeImage](https://github.com/realthunder/FreeCADMakeImage). Please read the [Readme.md](https://github.com/realthunder/FreeCADMakeImage/blob/master/Readme.md) for more details.

## Related

- [Snap](/Ubuntu_Snap "Ubuntu Snap") packages.
- [Flatpak](/Flatpak "Flatpak") packages.

Retrieved from "<http://wiki.freecad.org/index.php?title=AppImage/es&oldid=1508941>"

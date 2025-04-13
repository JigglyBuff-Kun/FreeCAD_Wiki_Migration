---
title: Vstupní zařízení 3Dconnexion
---
![](/images/SpaceNavigator.jpg)

3Dconnexion SpaceNavigator

## Instalace driveru

### Linux

FreeCAD podporuje drivery z projektu [Spacenav](http://spacenav.sourceforge.net/). Tento projekt je zaměřen na vytvoření Open-source driveru který bude kompatibilní s patentovanými drivery z 3Dconnexion.

### Linux

FreeCAD supports drivers from project [Spacenav](http://spacenav.sourceforge.net/). This is a project aiming to create an open-sourced driver which is compatible with the proprietary drivers from 3Dconnexion.

#### Instalace z repozitáře

##### Ubuntu

##### Ubuntu

```
sudo apt-get install spacenavd

```

Note, however, that version 0.6 available on Ubuntu 20.04 (and probably older ones) does not seem to work. You then have to compile spacenavd from source as explained below.

##### Fedora

```
sudo yum install spacenavd

```

##### Debian

```
apt-get install spacenavd libspnav-dev

```

Spacenav needs these permissions:

:   ```
    cp ~/.Xauthority /root/

    ```

Restart spnavd and FreeCAD

:   ```
    /usr/bin/spnavd_ctl x11 stop
    /usr/bin/spnavd_ctl x11 start

    ```

##### openSUSE

```
sudo zypper install spacenavd

```

#### Kompilace Spacenav ze zdrojových kódů

Tento způsob je doporučován pokud je ve Vaší distribuci starší verze tohoto software. Například repozitář Ubuntu poskytuje verzi 0.3.0 z 10.4.2011.

* Stáhněte si následující soubory:
  + [spacenavd-0.5.tar.gz](http://sourceforge.net/projects/spacenav/files/spacenav%20daemon/spacenavd%200.5/spacenavd-0.5.tar.gz/download)
  + [libspnav-0.2.2.tar.gz](http://sourceforge.net/projects/spacenav/files/spacenav%20library%20%28SDK%29/libspnav%200.2.2/libspnav-0.2.2.tar.gz/download)
  + [spnavcfg-0.2.1.tar.gz](http://sourceforge.net/projects/spacenav/files/spacenavd%20config%20gui/spnavcfg%200.2.1/spnavcfg-0.2.1.tar.gz/download)
* Rozbalte archivy do složky ve Vašem domovském adresáři.
* Vytvořte adresář spacenavd-0.5 a spusťte následující příkaz:

<syntaxhighlight>

This is recommended if your distribution might provide an outdated version.

* Download the following files:
  + [spacenavd](https://sourceforge.net/projects/spacenav/files/latest/download) (latest version)
  + [libspnav](https://sourceforge.net/projects/spacenav/files/spacenav%20library%20%28SDK%29/) (get latest libspnav version)
  + [spnavcfg](https://sourceforge.net/projects/spacenav/files/spacenavd%20config%20gui/) (get latest libspnav version)
* Unpack the archives into a folder in your home directory.
* Enter the spacenavd-x.x directory and run the following commands:

:   ```
    ./configure
    make

    ```

* Pokud vše proběhlo úspěšně, spusťte následující příkazy **jako root** (nebo s prefixem sudo.)

:   ```
    make install
    ./setup_init
    /etc/init.d/spacenavd start

    ```

* Tím nainstalujete spacenav démona, nakonfigurujete jej na automatické natažení při spuštění systému a spustíte jej bez nutnosti rebootu systému.
* Nyní je čas na kontrolu jestli je Vaše zařízení správně detekováno. Bez připojení zařízení zadejte následující příkaz a potom zařízení připojte.

:   ```
    tail -n100 -f /var/log/spnavd.log

    ```

* Jestliže výstup vypadá nějak takto, můžete pokračovat.

:   ```
    Device detection, parsing /proc/bus/input/devices
    trying alternative detection, querying /dev/input/eventX device names...
      trying "/dev/input/event1" ... Power Button
      trying "/dev/input/event2" ... 3Dconnexion SpaceNavigator
    using device: /dev/input/event2
    device name: 3Dconnexion SpaceNavigator

    ```

* Teď přejděte do adresáře nazvaného libspnav-0.2.2 a spusťte následující příkaz:

:   ```
    ./configure
    make

    ```

* Jestliže make zhavaruje s následující chybou: ...

:   ```
    fatal error: gtk/gtk.h: No such file or directory

    ```

* ... pak potřebujete nainstalovat libgtkmm-2.4-dev. Pod Ubuntu se to udělá takto:

:   ```
    sudo apt-get install libgtkmm-2.4-dev

    ```

* Pokud make proběhne úspěšně, spusťte následující příkaz **jako root** (nebo s prefixem sudo.)

:   ```
    make install

    ```

* Podívejte se do adresáře libspnav-0.2.2/examples/. Chcete-li otestovat Vaše zažízení zkompilujte a spusťte jeden ze dvou příkladů.

* Podle stejného vzoru zkompilujte a nainstalujte spnavcfg jako root jinak nebudou uložena žádná nastavení!

#### Starting spacenavd as a systemd service at boot

If you want to start spacenavd at boot using systemd, do the following:

* Go to the directory where you clone the spacenavd repository (to the root of the repository)
* "sudo cp contrib/systemd/spacenavd.service /usr/lib/systemd/system/spacenavd-local.service".
* "sudo systemctl enable spacenavd-local.service".
* "sudo systemctl start spacenavd-local.service", if you want to start it right away.

This is only necessary for the installation from source.

#### Restart

Pokud občas navigátor přestane pracovat, je vhodné restartovat driver. Uděláte to tak, že přejdete na Terminal a zadáte:

If sometimes SpaceNavigator stops working, it is good to restart driver. To restart it, go to Terminal and execute:

```
sudo xhost +
sudo /etc/init.d/spacenavd restart

```

Po tom restartujte FreeCAD. V některých distribucích je to nutné po každém bootu.

#### Known Issues

A user reported on the [forum](https://forum.freecadweb.org/viewtopic.php?p=341327#p341327) they saw the following:

```
 Spacenav daemon 0.6
 failed to open config file /etc/spnavrc: No such file or directory. using defaults.
 adding device.
 device name: 3Dconnexion SpacePilot
 using device: /dev/input/event5
 No protocol specified
 failed to open X11 display ":0.0" 

```

The workaround that worked for them:

```
sudo cp ~/.Xauthority /root/
sudo spnavd_ctl x11 start
sudo systemctl restart spacenavd

```

### OSX

Jeden uživatel dokázal získat space navigator pracující pod OSX. Nicméně ještě to není dokonalé. Více informací na [zde](http://forum.freecadweb.org/viewtopic.php?f=10&t=2576&hilit=space+navigator+osx&start=10#p19923)

3Dconnexion input devices are supported on macOS, provided FreeCAD is built and used on a system with the 3Dconnexion drivers installed. You may need 3DxWare 10.7.2 or greater for macOS 12 Monterey.

### Windows

Od verze 0.13, je pod Windows podporována 3D myš. Musíte mít nainstalovány odpovídající drivery, ale protože podpora byla vyvíjena na nížší úrovni, přepíše to nastavení, která jste udělali v řídícím panelu 3D Connexion. Nicméně většina z těchto nastavení může být zadána v Tools>>Customize dialogovém okně, pod záložkou Spaceball.

As of version 0.13, 3D mouse is supported under Windows. You need to have 3Dconnexion drivers installed. In FreeCAD version 1.0 a [new integration with 3Dconnexion devices](https://github.com/FreeCAD/FreeCAD/pull/12929) has been introduced. If compiled with that integration, only recent hardware is supported: to support older devices users will need to self-compile with the FREECAD\_3DCONNEXION\_SUPPORT cMake variable set to "Raw Input". Windows users should be aware that 3Dconnexion's driver (*not* the code in FreeCAD) contains a telemetry package that communicates information about your installed software back to 3Dconnexion.

#### Known Issues

* In FreeCAD version 1.0 and later changing settings in the 3DX config window may not have the expected results ([issue](https://github.com/FreeCAD/FreeCAD/issues/14044)). To fix this:
  1. Stop the driver (by running Stop 3DxWare).
  2. Go to ..<user>\AppData\Roaming\3Dconnexion\3DxWare\Cfg and delete the FreeCAD.xml file.
  3. Start the driver (by running Start 3DxWare).
  4. Run FreeCAD and check if you can change the [Spaceball Motion](#Spaceball_Motion) settings.

## Nastavení FreeCADu

Podpora 3D myši byla vytvořena v projektu spnav na Linuxu a na velmi nízké úrovni ve Windowsech. To znamená, že zde není žádná kvalitní podpora pro zařízení, protože na Linuxu ta podpora není moc dobrá a na Windows je přepsána. To je důvod proč byly do dialogového okna "Customize" přidány další dvě stránky.

1.0 and above: The 3Dconnexion manipulator can be set up in its driver app (3DxWare software).

0.21 and below: If a Spaceball is detected the following tabs in the [Customize dialog](/Interface_Customization "Interface Customization") can be used to change settings:

![](/images/Spaceball_Motion.png)
![](/images/Spaceball_Buttons.png)

### Spaceball Motion (Pohyb)

To je záložka kde máte možnost zadat některé ze základních nastavní prostorové myši. Ty zahrnují:

* Global Sensitivity - posuvník s možností nastavení globální citlivosti
* Dominant - povolíte-li dominant mód, bude brán ohled pouze na osy s "highest move"
* Flip YZ - tento výběr Vám umožní prohodit osy Y a Z na 3D myši
* Enable Translations - snadný způsob jak povolit/zakázat "translations"
* Enable Rotations - snadný způsob jak povolit/zakázat otáčení
* Calibrate - umožňuje kalibrovat space navigator. Stiskne se když se space navigator nepohybuje.
* Set To Default - vymaže všechny změny a nastaví defaultní hodnoty.

In this tab you have ability to set up some of general space mouse settings. They include:

* Global Sensitivity - Slider with ability to set global sensitivity
* Dominant - if you enable dominant mode, only axes with highest move will be considered
* Flip YZ - This option enables you to flip Y and Z axes on 3D mouse
* Enable Translations - easy way to enable/disable translations
* Enable Rotations - easy way to enable/disable rotations
* Calibrate - enables you to calibrate space navigator. It is pressed while space navigator is not moved.
* Set To Default - removes all settings and sets them to default.

Mimo to, pro každou osu můžete nastavit:

* Enabled - povolení/zakázání os
* Reverse - otočení směru pobybu po osách
* Sensitivity - posuvník s možností nastavení citlivosti

### Spaceball Buttons (Tlačítka)

Když otevřete tuto záložku poprvé, bude prázdná a nepřístupná. Abyste ji aktivovali, musíte stisknout některé z tlačítek na prostorové myši. Až to uděláte, na levé straně se zobrazí seznam tlačítek a na pravé straně bude dostupný seznam příkazů.

When you open this tab for the first time, it will be empty and unavailable. To activate it, you must press one of your space mouse buttons. After you do, list of buttons will appear on the left side, and list of commands will be available on the right side.

Abyste přiřadili určitý příkaz k tlačítku, stiskněte tlačítko na levé straně a příslušný příkaz na pravé straně.
Příkaz z tlačítka odstraníte stisknutím "Clear".

### Troubleshooting

Check if your FreeCAD installation links to the spacenav library. The best way to check this is by running FreeCAD from the command line terminal `FreeCAD --log-file /tmp/freecad.log` and close it immediately again. Then open the file /tmp/freecad.log and search for the messages:

`Connected to spacenav daemon`

or

`Couldn't connect to spacenav daemon. Please ignore if you don't have a spacemouse.`

If none of them appears then your FreeCAD build doesn't link to the spacenav library. If the former message appears then it basically works. The latter message means there is probably a problem with the spacenav daemon.

## Related

* Forum thread [spacenav on Windows](https://forum.freecadweb.org/viewtopic.php?f=3&t=51023)
* Forum thread [Space navigator axis confusion](https://forum.freecadweb.org/viewtopic.php?f=8&t=57188)

Retrieved from "<http://wiki.freecad.org/index.php?title=3Dconnexion_input_devices/cs&oldid=1487875>"
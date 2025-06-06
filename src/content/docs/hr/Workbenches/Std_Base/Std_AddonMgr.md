---
title: Std AddonMgr/hr
---
|  |
| --- |
| Std AddonMgr |
| Menu location |
| Tools → Addon manager |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [External workbenches](/External_workbenches "External workbenches"), [Macros](/Macros "Macros") |
|  |

## Description

The **Std AddonMgr** command opens the Addon manager. With the Addon manager you can install and manage [external workbenches](/External_workbenches "External workbenches"), [macros](/Macros "Macros"), and [preference packs](/Preference_Packs "Preference Packs") provided by the FreeCAD community. By default the available addons are taken from two repositories, [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) and from the [Macros recipes](/Macros_recipes "Macros recipes") page. If GitPython and git are installed on your system, additional macros will be loaded from [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/). Custom repositories can be added in the [Addon manager preferences](/Preferences_Editor#Addon_Manager "Preferences Editor").

Due to changes to the GitHub platform in the year 2020 the Addon manager no longer works if you use FreeCAD version 0.17 or earlier. You need to upgrade to version [0.18.5](https://github.com/FreeCAD/FreeCAD/releases/tag/0.18.5) or later. Alternatively you can install addons manually, see [Notes](#Notes) below.

## Usage

1. Select the **Tools → ![](/images/Std_AddonMgr.svg) Addon manager** option from the menu.
2. If you are using the Addon manager for the first time, a dialog box will open warning you that the addons in the Addon manager are not officially part of FreeCAD. It also presents several options related to the Addon manager's data usage. Adjust those options to your liking and press the OK button to confirm and continue.
3. The Addon manager dialog box opens. For more information see [Options](#Options).
4. If you have installed or updated a workbench a new dialog box will open informing you that you have to restart FreeCAD for the changes to take effect.

## Options

![](/images/AddonManager_Main.png)

1. The Addon manager provides two view layouts: "Condensed" and "Expanded". In "Condensed" view, each addon takes a single line, and its description is truncated to fit the available space. "Expanded" shows additional details, including more of the description text as well as maintainer information, more installation details, etc.
2. Three different types of addons are supported: [workbenches](/External_workbenches "External workbenches"), [macros](/Macros "Macros"), and [preference packs](/Preference_Packs "Preference Packs"). You can choose to show just one type, or all of them in a single list.
3. The list can be limited to show just installed packages, just packages with available updates, or just packages that are not yet installed.
4. The list can be filtered, searching for a keyword in the title, description, and tags (description and tags must be specified by the addon developer in their addon's metadata). The filter can even be a regular expression, for fine-grained control of the exact search term.
5. The expanded view shows available version information, description, maintainer information, and installation version information, for packages that provide a [package metadata](/Package_Metadata "Package Metadata") file (or for macros with embedded metadata).
6. Addon data is cached locally, with a variable cache update frequency set in the user preferences.
7. At any time you can choose to manually update your local cache to see the latest updates available for each addon.
8. Update checks may be set up to be automatic, or done manually via a button click (configured in user preferences). If GitPython and git are installed on your system then update information is fetched using git. If not, then update information is obtained from any present metadata file.

Clicking on an addon in this view brings up the addon's Details page:

![](/images/AddonManager_Details.png)

The details page shows buttons allowing installing, uninstalling, updating, and temporarily disabling an addon. For installed addons it lists the currently installed version and the installation date, and whether that is the most recent version available. Below is an embedded web browser window showing the addon's README page (for workbenches and preference packs), or Wiki page (for macros).

## Preferences

The preferences for the Addon manager can be found in the [Preferences Editor](/Preferences_Editor#Addon_Manager "Preferences Editor"). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Sorting by score

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The Addon Manager supports sorting by a number of different criteria. Most of these are downloaded directly from FreeCAD's servers (which caches them from GitHub and the FreeCAD Wiki) but one, "Score," is not provided by FreeCAD at all, and only appears as an option if the Score Source URL setting is provided in the Preferences.

The Score Source URL is a path to a remote JSON-formatted document listing addons and a "score" of some kind. Score can be calculated in any way the data provider likes, but should be an integer value, with higher scores being "better" in some sense. Any addon not listed is assigned a score of zero internally. The format of the file is a single JSON dictionary where the key is the addon URL (for workbenches and preference packs) or the name of the macro (for macros). See [this data source](https://gist.githubusercontent.com/chennes/e8f60e80f16e6ffbd057dd47ca36ad2a/raw/7b118cca8e84444c3379919bbd744b99e6ef6711/addon_score_for_testing.json) for an example (note the score there is simply the length of the addon's description, and is intended only for testing and demonstration purposes).

## Notes

* The use of addons is not restricted to the FreeCAD version they were installed from. You will also be able to use them in any other FreeCAD version, supported by the addon, that you may have on your system.
* The addons available in the Addon manager are not part of the official FreeCAD program and are not supported by the core FreeCAD development team. You should read the provided information carefully to make sure you know what you are installing.
* Bug reports and feature requests should be made directly to the creator of the addon by visiting the indicated website. Many addon developers are regular users of the [FreeCAD forum](https://forum.freecadweb.org), and can also be contacted there.
* If the [GitPython](https://github.com/gitpython-developers/GitPython) package is installed on your computer the Addon manager will use it, making downloads faster.
* You can also install addons manually. See [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches") and [How to install macros](/How_to_install_macros "How to install macros").

## Information for addon developers

See [Addon](/Addon#Information_for_developers "Addon").

## Scripting

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Some features of the Addon manager are designed for access via FreeCAD's Python API. In particular an addon can be installed, updated, and removed via the Python interface. Most uses of this API require you to create an object with at least three attributes: `name`, `branch` and `url`. For example:

```
class MyAddonClass:
    def __init__(self):
        self.name = "TestAddon"
        self.url = "https://github.com/Me/MyTestAddon"
        self.branch = "main"
my_addon = MyAddonClass()

```

Your object `my_addon` is now ready for use with the Addon manager API.

### Commandline (non-GUI) use

If your code needs to install or update an addon synchronously (e.g. without a GUI) the code can be very simple:

```
from addonmanager_installer import AddonInstaller
installer = AddonInstaller(my_addon)
installer.run()

```

Note that this code blocks until complete, so you shouldn't run it on the main GUI thread. To the Addon manager, "install" and "update" are the same call: if this addon is already installed, and git is available, it will be updated via "git pull". If it is not installed, or was installed via a non-git installation method, it is downloaded from scratch (using git if available).

To uninstall, use:

```
from addonmanager_uninstaller import AddonUninstaller
uninstaller = AddonUninstaller(my_addon)
uninstaller.run()

```

### GUI use

If you plan on your code running in a GUI, or supporting running in the full version of FreeCAD, it's best to run your installation in a separate non-GUI thread, so the GUI remains responsive. To do this, first check to see if the GUI is running, and if it is, spawn a `QThread` (don't try to spawn a `QThread` if the GUI is not up: they require an active event loop to function).

```
from PySide import QtCore
from addonmanager_installer import AddonInstaller

worker_thread = QtCore.QThread()
installer = AddonInstaller(my_addon)
installer.moveToThread(worker_thread)
installer.success.connect(installation_succeeded)
installer.failure.connect(installation_failed)
installer.finished.connect(worker_thread.quit)
worker_thread.started.connect(installer.run)
worker_thread.start() # Returns immediately

```

Then define the functions `installation_succeeded` and `installation_failed` to be run in each case. For uninstallation you can use the same technique, though it is usually much faster and will not block the GUI for very long, so in general it's safe to use the uninstaller directly, as shown above.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_AddonMgr/hr&oldid=1457295>"
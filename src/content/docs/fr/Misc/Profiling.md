---
title: Profilage
---
## Description

Le profilage du code de FreeCAD permet de trouver des goulots d'étranglement dans les algorithmes utilisés pour créer ou manipuler des objets.

Pour profiler le code [Python](/Python/fr "Python/fr"), utilisez le module standard `cProfile` pour définir les points de début et de fin du profil dans le code.

```
import cProfile
pr = cProfile.Profile()
pr.enable()

# --------------------------------------
# Lines of code that you want to profile
# --------------------------------------

pr.disable()
pr.dump_stats("/tmp/profile.cprof")

```

Ensuite, installez et utilisez `pyprof2calltree` pour convertir la sortie du profil en entrée cachegrind.

```
pyprof2calltree -i /tmp/profile.cprof -o /tmp/callgrind.out

```

Ensuite, visualisez ces informations avec `kcachegrind` pour Linux ou `qcachegrind` pour Windows.

```
kcachegrind /tmp/callgrind.out

```

## Ressources

* [The Python profilers](https://docs.python.org/3/library/profile.html), `cProfile` et `python`.
* [pyprof2calltree](https://pypi.org/project/pyprof2calltree/) à PyPI; dépôt [pyprof2calltree](https://github.com/pwaller/pyprof2calltree/).
* [FreeCAD's Python profiling tutorial](https://forum.freecadweb.org/viewtopic.php?f=10&t=44785).

Retrieved from "<http://wiki.freecad.org/index.php?title=Profiling/fr&oldid=741318>"
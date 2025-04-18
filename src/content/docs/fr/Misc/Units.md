---
title: Unités
---
Un peu de lecture sur les unités :

* [Métrologie](https://fr.wikipedia.org/wiki/M%C3%A9trologie)
* [Système international d'unités](https://fr.wikipedia.org/wiki/Système_international_d'unités)
* [Système d'unités impériales](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27unit%C3%A9s_imp%C3%A9riales)
* [Unité dérivée du Système international](https://fr.wikipedia.org/wiki/Unités_dérivées_du_système_international)
* [Degré (angle)](https://fr.wikipedia.org/wiki/Degré_(angle))
* [Unités implémentées dans OCC](https://github.com/3drepo/occt/blob/master/src/UnitsAPI/Units.dat)

## Exemples

```
# -- some examples of the FreeCAD unit translation system --
# make a shortcut for the examples
pq = FreeCAD.Units.parseQuantity

# 10 meters in internal numbers
pq('10 m')

# doing math
pq('3/8 in')

# combined stuff
pq('100 km/h')

# transfer to other units
pq('100 km/h') / pq('m/s')

# derived units (Ohm)
pq('m^2*kg*s^-3*A^-2')

# or
pq('(m^2*kg)/(A^2*s^3)')

# angles 
pq('2*pi rad') # full circle

# as gon
pq('2*pi rad') / pq('gon')

# more imperial
pq('1ft (3+7/16)in')

# or 
pq('1\' (3+7/16)"') # the ' we have to escape because of python

# trigonometry
pq('sin(pi)')

# Using translated units as parameters, this command will create a 50.8mm x 20mm x 10mm box
b = Part.makeBox(pq('2in'), pq('2m')/100, 10)

```

## Unités supportées

Une liste complète de toutes les unités prises en charge peut être [trouvée ici](/Expressions/fr#Unités "Expressions/fr").

## Voir aussi

* La page [Expressions](/Expressions/fr#Unit.C3.A9s "Expressions/fr") pour une liste de toutes les unités connues.
* La documentation de [Quantity](/Quantity/fr "Quantity/fr").
* L'outil [Std Convertisseur d'unités](/Std_UnitsCalculator/fr "Std UnitsCalculator/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Units/fr&oldid=1515234>"
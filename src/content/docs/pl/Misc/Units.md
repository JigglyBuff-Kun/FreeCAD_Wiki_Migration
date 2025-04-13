---
title: Jednostki
---
Oto kilka lektur na temat jednostek:

* [Metrologia](http://en.wikipedia.org/wiki/Metrology)
* [System SI](http://en.wikipedia.org/wiki/International_System_of_Units)
* [Jednostki brytyjskie](http://en.wikipedia.org/wiki/Imperial_units)
* [Jednostki pochodne SI](http://en.wikipedia.org/wiki/SI_derived_unit)
* [jednostki kątowe](http://en.wikipedia.org/wiki/Degree_%28angle%29)
* [jednostka wdrożona w OCC](https://github.com/3drepo/occt/blob/master/src/UnitsAPI/Units.dat)

## Przykłady

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

## Obsługiwane jednostki

Pełna lista wszystkich obsługiwanych jednostek znajduje się [na tej stronie](/Expressions/pl#Units "Expressions/pl").

## Zobacz również

* Strona [Wyrażenia](/Expressions/pl#Jednostki "Expressions/pl") zawierająca listę wszystkich znanych jednostek.
* Dokumentacja [Ilość](/Quantity/pl "Quantity/pl"),
* Narzędzie [Kalkulator jednostek](/Std_UnitsCalculator/pl "Std UnitsCalculator/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Units/pl&oldid=1515243>"
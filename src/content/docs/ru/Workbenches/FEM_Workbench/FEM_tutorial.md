---
title: Пример анализа Методом Конечных Элементов (FEM)
---
|  |
| --- |
| Руководство |
| Тема |
| Анализ методом конечных элементов |
| Уровень |
| Новичок |
| Время для завершения |
| 10 минут + время работы Решателя |
| Авторы |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD версия |
| 0.16.6700 и выше |
| Примеры файлов |
|  |
| Смотрите также |
| *None* |
|  |

## Введение

Данное руководство знакомит пользователя с основными принципами работы верстака FEM, а также с большинством доступных инструментов, предназначенных для выполнения статического анализа.

![](/images/FEM_tutorial_result.png)

## Требования

* Версия FreeCAD должна быть 0.17 и старше.
* Наличие [Netgen](http://sourceforge.net/projects/netgen-mesher/) и/или [GMSH](http://geuz.org/gmsh/) в системе (устанавливаются вместе с FreeCAD).
* Наличие [Calculix](http://www.calculix.de/) в системе (устанавливается вместе с FreeCAD).
* Пользователь изучающий данный пример должен обладать базовыми понятиями о том, как использовать верстаки [Part](/Part_Workbench/ru "Part Workbench/ru") и [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru").

## Последовательность действий

### Моделирование

В этом примере в качестве объекта исследования используется Куб, но также вместо него могут быть использованы любые другие модели созданные в Верстаках Part или PartDesign.

1. Создайте [новый документ](/Std_New/ru "Std New/ru") (нажатием на кнопку ![](/images/Std_New.svg)).
2. Активировать ![](/images/Workbench_Part.svg) [верстак Part](/Part_Workbench/ru "Part Workbench/ru").
3. Создайте Куб.
4. Измените его **Размеры** на следующие:
   1. Length: 8.000 м.
   2. Width: 1.000 м.
   3. Height: 1.000 м.

Теперь у нас есть модель с которой можно работать.

### Проведение анализа

1. Activate the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench").
2. Select the **Model → ![](/images/FEM_Analysis.svg) Analysis container‏‎** option from the menu.

### Установка ограничений и приложение силы

1. Скройте сетку внутри древа проекта.
2. Откройте оригинальную модель
3. Выберите ![](/images/FEM_FixedConstraint.png) [Создать МКЭ с фиксированными ограничениями](/FEM_ConstraintFixed/ru "FEM ConstraintFixed/ru")
4. Выберите заднюю поверхность Куба (поверхность осей **YZ**) и кликните OK
5. Выберите ![](/images/FEM_ForceConstraint.png) [Создать МКЭ с ограничениями силы](/FEM_ConstraintForce/ru "FEM ConstraintForce/ru")
6. Выберите фронтальную поверхность Куба (грань, параллельная задней поверхности) и установите значение **Area load** в 9000000,00
7. Установите **Direction** в **-Z** выбором одной из граней параллельно этому направлеию.
8. Кликните OK

Теперь мы установили ограничения и силы для нашего статического анализа.

### Выбор материала

### Последние приготовления

1. Нажмите ![](/images/FEM_Material.png) [Mechanical material...](/FEM_MaterialSolid/ru "FEM MaterialSolid/ru") и выберете Calculix-Steel в качестве материала.
2. Нажмите **OK**

### Создание Mesh

Рекомендуется создавать mesh в качестве последнего шага при подготовке к анализу из-за привязки к геометрии в FreeCAD.
В зависимости от установки FreeCAD, mesh может быть с Netgen или GMSH, вы можете использовать любую из них.

#### Netgen

1. Выбрать модель
2. Кликнуть в меню ![](/images/FEM_Analysis.png) [New mechanical analysis](/FEM_Analysis/ru "FEM Analysis/ru"), чтобы создать анализ из выбранного объекта
3. В диалоге создания сетки кликнуть **OK**

Вы также можете перетащить сетку в Mechanical Analysis, у которого нет сетки, внутри древа проекта.

#### GMSH

1. Select the model
2. ![](/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"): Generates a finite element mesh for a model using Gmsh.
3. In the meshing dialog, click Apply and OK.

Мы создали сетку для нашего объекта и готовы добавить к нему ограничения и действующие силы.

### Запуск решателя

#### Стандартный способ

1. Выберите объект решателя ![](/images/FEM_SolverCalculixCxxtools.svg), находящийся в контейнере **Analysis**.
2. Выберите в меню ![](/images/FEM_SolverControl.svg) [Solver job control](/FEM_SolverControl "FEM SolverControl")
3. Выберите **Write .inp File**.
4. Выберите **Run Calculix**.
5. Click OK.

#### Быстрый способ

#### Быстрая процедура

1. Выберите объект решателя ![](/images/FEM_Solver.png), находящийся в **Mechanical Analysis**
2. Кликните на ![](/images/FEM_RunCalculiXccx.png) [Run CalculiX ccx](/FEM_SolverRun/ru "FEM SolverRun/ru").

### Анализ Результатов

### Анализ результатов

1. Выберите объект **Results** из **Object Tree**
2. Выберите ![](/images/FEM_ShowResult.png) [Show result](/FEM_ResultShow/ru "FEM ResultShow/ru")
3. Выберите для просмотра из различных типов результата нужные
4. Движок внизу может использоваться для изменения визуализации сетки. Это позволяет визуализировать деформацию, испытываемую объектом, учитывая, что это приближение.
5. Для удаления результатов выберите ![](/images/FEM_PurgeResults.png) [Purge results](/FEM_ResultsPurge/ru "FEM ResultsPurge/ru")

**Сравнение с предшествующим файлом примера**

Если Вы тип результата выбрали **Z displacement**, Вы увидите, что полученное значение почти идентично тестовому примеру, предоставляемому FreeCAD. Различия могут быть из-за качества сетки и числа обрабатываемых узлов.

Теперь мы закончили с основными принципами работы [FEM Module](/FEM_Workbench/ru "FEM Workbench/ru").

## Notes

* For a video tutorial based on this written tutorial watch: [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/ru&oldid=1387437>"
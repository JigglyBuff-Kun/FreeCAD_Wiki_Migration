---
title: Bancada de trabalho Robot
---

:::caution
O Robot Workbench não está em manutenção. Se você tem experiência com o tópico e está interessado em mantê-lo, por favor, declare sua intenção na seção de desenvolvedores noforum FreeCAD.A razão pela qual esta bancada de trabalho ainda está no código-fonte mestre é porque esta bancada de trabalho está programada em C++. Se esta bancada de trabalho pudesse ser programada em Python, então ela poderia ser feita em umabancada de trabalho externae poderia ser movida para um repositório separado.
:::

## Introdução

![](/images/Workbench_Robot.svg)

Ícone da bancada de trabalho Robot

A bancada de trabalho ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench "Robot Workbench") é uma ferramenta para simular um [robô industrial de 6 eixos](/Robot_6-Axis/pt-br "Robot 6-Axis/pt-br") como o [Kuka](http://kuka.com/).

Você pode fazer as seguintes tarefas:

- Configure um ambiente de simulação com um robô e peças de trabalho;
- Crie e preencha trajetórias de movimentos;
- Decomponha os recursos de uma peça CAD em uma trajetória.
- Simule o movimento de robô e alcance a distância;
- Exporte a trajetória para um arquivo de programa de robô;

Para começar, experimente o [tutorial Robot](/Robot_tutorial/pt-br "Robot tutorial/pt-br") e veja a interface de programação no arquivo de exemplo [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py).

![](/images/Robot_Workbench_example.jpg)

## Ferramentas

Aqui estão os principais comandos que você pode usar para criar uma configuração de robô.

### Robôs

As ferramentas para criar e gerenciar os robôs de 6 eixos.

- ![](/images/Robot_CreateRobot.svg) [Criar um robô](/Robot_CreateRobot/pt-br "Robot CreateRobot/pt-br"): Inserir um novo robô na cena.
- ![](/images/Robot_Simulate.svg) [Simular uma trajetória](/Robot_Simulate/pt-br "Robot Simulate/pt-br"): Abre o diálogo de simulação e te permite simular.
- ![](/images/Robot_Export.svg) [Exportar uma trajetória](/Robot_Export/pt-br "Robot Export/pt-br"): Exporta um arquivo de programa de robô.
- ![](/images/Robot_SetHomePos.svg) [Definir a posição inicial](/Robot_SetHomePos/pt-br "Robot SetHomePos/pt-br"): Define a posição inicial de um robô.
- ![](/images/Robot_RestoreHomePos.svg) [Restaurar a posição inicial](/Robot_RestoreHomePos/pt-br "Robot RestoreHomePos/pt-br"): Move o robô para a sua posição inicial.

### Trajetórias

Ferramentas para criar e manipular trajetórias. Existem dois tipos de trajetórias: as paramétricas e as não paramétricas.

#### Trajetórias Não Paramétricas

- ![](/images/Robot_CreateTrajectory.svg) [Criar trajetória](/Robot_CreateTrajectory/pt-br "Robot CreateTrajectory/pt-br"): Insere um novo objeto vazio de trajetória na cena.
- ![](/images/Robot_SetDefaultOrientation.svg) [Definir a configuração padrão](/Robot_SetDefaultOrientation/pt-br "Robot SetDefaultOrientation/pt-br"): Define os pontos de caminho de orientação criados por padrão.
- ![](/images/Robot_SetDefaultValues.svg) [Definir o parâmetro padrão de velocidade](/Robot_SetDefaultValues/pt-br "Robot SetDefaultValues/pt-br"): Define os valores padrões para a criação de pontos de caminho.
- ![](/images/Robot_InsertWaypoint.svg) [Inserir um ponto de caminho](/Robot_InsertWaypoint/pt-br "Robot InsertWaypoint/pt-br"): Insere um ponto de caminho a partir da posição atual do robô em uma trajetória.
- ![](/images/Robot_InsertWaypointPre.svg) [Inserir um ponto de caminho pré-selecionado](/Robot_InsertWaypointPre/pt-br "Robot InsertWaypointPre/pt-br"): Insere um ponto de caminho a partir da posição atual do mouse em uma trajetória.

#### Trajetórias Paramétricas

- ![](/images/Robot_Edge2Trac.svg) [Criar uma trajetória fora das arestas](/Robot_Edge2Trac/pt-br "Robot Edge2Trac/pt-br"): Insere um novo objeto que decompõe as arestas em uma trajetória.
- ![](/images/Robot_TrajectoryDressUp.svg) [Vestir uma trajetória](/Robot_TrajectoryDressUp/pt-br "Robot TrajectoryDressUp/pt-br"): Permite que você substitua uma ou mais propriedades de uma trajetória.
- ![](/images/Robot_TrajectoryCompound.svg) [Composto de trajetória](/Robot_TrajectoryCompound/pt-br "Robot TrajectoryCompound/pt-br"): Crie um composto a partir de algumas trajetórias únicas.

## Scripting

Veja o exemplo [Robot API](/Robot_API_example/pt-br "Robot API example/pt-br") para obter uma descrição das funções utilizadas para modelar os deslocamentos de robô.

## Tutoriais

- [Robot 6-Axis](/Robot_6-Axis/pt-br "Robot 6-Axis/pt-br")
- [Preparação de VRML para simulação de robô](/VRML_Preparation_for_Robot_Simulation/pt-br "VRML Preparation for Robot Simulation/pt-br")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/pt-br&oldid=957516>"

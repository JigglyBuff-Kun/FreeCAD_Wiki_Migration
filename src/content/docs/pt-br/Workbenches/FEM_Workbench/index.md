---
title: Bancada de trabalho FEM
---

![](/images/Workbench_FEM.svg)

Ícone da bancada de trabalho FEM

## Introdução

A bancada FEM fornece um fluxo de trabalho moderno de [análise de elementos finitos](https://en.wikipedia.org/wiki/Finite_element_analysis) (FEA) para o FreeCAD. Isso significa que todas as ferramentas para fazer uma análise são combinadas em uma interface gráfica de usuário (GUI).

![](/images/FemWorkbench.jpg)

## Fluxo de Trabalho

Os passos para realizar uma análise de elementos finitos são:

1. Pré-processamento: configurar o problema de análise.
   1. Modelando a geometria: criar a geometria com o FreeCAD ou importando-a de um aplicativo diferente.
   2. Criando uma análise.
      1. Adicionando restrições de simulação, como cargas e suportes fixos ao modelo geométrico.
      2. Adicionando materiais às partes do modelo geométrico.
      3. Criando uma malha de elementos finitos para o modelo geométrico ou importando-os de um aplicativo diferente.
2. Resolvendo: executando um solucionador externo de dentro do FreeCAD.# Pós-processamento: visualizar os resultados da análise a partir do FreeCAD ou exportar os resultados para que possam ser pós-processados com outra aplicação.

A bancada FEM pode ser usada no Linux, Windows e Mac OSX. Como o ambiente de trabalho usa solucionadores externos, a quantidade de configuração manual dependerá do sistema operacional que você está usando. Veja [Instalação da FEM](/index.php?title=FEM_Install/pt-br&action=edit&redlink=1 "FEM Install/pt-br (page does not exist)") para instruções sobre como configurar as ferramentas externas.

![](/images/FEM_Workbench_workflow.svg)

Fluxo de trabalho da bancada FEM; a bancada chama dois programas externos para realizar o meshing de um objeto sólido e executa a solução real do problema do elemento finito

## Menu: Modelo

- ![](/images/FEM_Analysis.svg) [Contêiner de análise](/FEM_Analysis/pt-br "FEM Analysis/pt-br"): Cria um novo contêiner de análise mecânica. Se um sólido é selecionado na árvore de visualização antes de clicar nele, a janela de malha vai ser aberta em seguida.

### Materiais

- ![](/images/FEM_MaterialSolid.svg) [Materiais sólidos](/FEM_MaterialSolid/pt-br "FEM MaterialSolid/pt-br"): Permite você selecionar um material a partir do banco de dados.

- ![](/images/FEM_MaterialFluid.svg) [Materiais fluidos](/FEM_MaterialFluid/pt-br "FEM MaterialFluid/pt-br"): Permite você selecionar um material a partir do banco de dados.

- ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Material mecânico não linear](/FEM_MaterialMechanicalNonlinear/pt-br "FEM MaterialMechanicalNonlinear/pt-br"): Permite você selecionar um material a partir do banco de dados.

- ![](/images/FEM_MaterialReinforced.svg) [Material reforçado](/FEM_MaterialReinforced/pt-br "FEM MaterialReinforced/pt-br"): Permite selecionar materiais reforçados constituídos por uma matriz e um reforço da base de dados.

- ![](/images/FEM_MaterialEditor.svg) [Editor de materiais](/FEM_MaterialEditor/pt-br "FEM MaterialEditor/pt-br"):: Permite que você abra o editor de materiais para editar materiais.

### Geometria do Elemento

- ![](/images/FEM_ElementGeometry1D.svg) [Seção transversal da viga](/FEM_ElementGeometry1D/pt-br "FEM ElementGeometry1D/pt-br"): Usada para definir seções transversais para elementos de viga.

- ![](/images/FEM_ElementRotation1D.svg) [Rotação de viga](/FEM_ElementRotation1D/pt-br "FEM ElementRotation1D/pt-br"): Usada para girar seções transversais de elementos de viga.

- ![](/images/FEM_ElementGeometry2D.svg) [Espessura da casca de placa](/FEM_ElementGeometry2D/pt-br "FEM ElementGeometry2D/pt-br"): Usada para definir a espessura da casca.

- ![](/images/FEM_ElementFluid1D.svg) [Seção do fluido para fluxo 1D](/FEM_ElementFluid1D/pt-br "FEM ElementFluid1D/pt-br"): Usada para criar elemento de seção de fluido para redes pneumáticas e hidráulicas.

### Electromagnetic boundary conditions

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Restrição de potencial eletrostático](/FEM_ConstraintElectrostaticPotential/pt-br "FEM ConstraintElectrostaticPotential/pt-br"): Usada para definir o potencial eletrostático.

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Restrição de densidade de corrente](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity"): Usada para definir uma densidade de corrente. [introduzido na versão 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintMagnetization.svg) [Restrição de magnetização](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization"): Usada para definir uma magnetização. [introduzido na versão 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity"): Used to define electric charge density load. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### Restrições do Fluido

- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Restrição de velocidade inicial do fluxo](/index.php?title=FEM_ConstraintInitialFlowVelocity/pt-br&action=edit&redlink=1 "FEM ConstraintInitialFlowVelocity/pt-br (page does not exist)"): Usada para definir uma velocidade inicial de fluxo para um corpo (volume).

- ![](/images/FEM_ConstraintInitialPressure.svg) [Restrição de pressão inicial](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure"): Usada para definir uma pressão inicial para um corpo (volume). [introduzido na versão 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Restrição da velocidade de fluxo](/index.php?title=FEM_ConstraintFlowVelocity/pt-br&action=edit&redlink=1 "FEM ConstraintFlowVelocity/pt-br (page does not exist)"): Usada para definir uma velocidade de fluxo como uma condição de contorno em uma aresta (2D) ou face (3D).

### Restrições Geométricas

- ![](/images/FEM_ConstraintPlaneRotation.svg) [Restrição rotação plana](/index.php?title=FEM_ConstraintPlaneRotation/pt-br&action=edit&redlink=1 "FEM ConstraintPlaneRotation/pt-br (page does not exist)"): Usada para definir uma restrição de rotação plana em uma face plana.

- ![](/images/FEM_ConstraintSectionPrint.svg) [Impressão da seção de restrição](/index.php?title=FEM_ConstraintSectionPrint/pt-br&action=edit&redlink=1 "FEM ConstraintSectionPrint/pt-br (page does not exist)"): Usado para imprimir as variáveis de saída faciais predefinidas (forças e momentos) para o arquivo dat. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Fem-constraint-transform.svg) [Restrição de transformar](/index.php?title=FEM_ConstraintTransform/pt-br&action=edit&redlink=1 "FEM ConstraintTransform/pt-br (page does not exist)"): Usada para definir uma restrição de transformação em um rosto.

### Restrições Mecânicas

- ![](/images/FEM_ConstraintFixed.svg) [Restrição fixa](/index.php?title=FEM_ConstraintFixed/pt-br&action=edit&redlink=1 "FEM ConstraintFixed/pt-br (page does not exist)"): Usada para definir uma restrição fixa em um ponto, aresta ou face.

- ![](/images/FEM_ConstraintRigidBody.svg) [Rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody"): Used to apply the CalculiX's rigid body constraint that constrains the motion of the nodes of a selected geometrical entity to the motion of a reference point positioned by the user. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_ConstraintDisplacement.svg) [Restrição de deslocamento](/index.php?title=FEM_ConstraintDisplacement/pt-br&action=edit&redlink=1 "FEM ConstraintDisplacement/pt-br (page does not exist)"): Usada para definir uma restrição de deslocamento em ponto, aresta ou face.

- ![](/images/FEM_ConstraintContact.svg) [Restrição de contato](/index.php?title=FEM_ConstraintContact/pt-br&action=edit&redlink=1 "FEM ConstraintContact/pt-br (page does not exist)"): Usada para definir uma restrição de contato entre duas faces.

- ![](/images/FEM_ConstraintTie.svg) [Restrições de amarração](/index.php?title=FEM_ConstraintTie/pt-br&action=edit&redlink=1 "FEM ConstraintTie/pt-br (page does not exist)"): [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/FEM_ConstraintSpring.svg) [Restrição de mola](/FEM_ConstraintSpring "FEM ConstraintSpring"): Usada para definir uma mola. [introduzido na versão 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_ConstraintForce.svg) [Restrição de força](/FEM_ConstraintForce "FEM ConstraintForce"): Usada para definir uma força em Newtons [N] aplicada uniformemente a uma face selecionável em uma direção definida.

- ![](/images/FEM_ConstraintPressure.svg) [Restrição de pressão](/index.php?title=FEM_ConstraintPressure/pt-br&action=edit&redlink=1 "FEM ConstraintPressure/pt-br (page does not exist)"): Usada para definir uma restrição de pressão.

- ![](/images/FEM_ConstraintCentrif.svg) [Restrição centrífuga](/FEM_ConstraintCentrif "FEM ConstraintCentrif"): Usada para definir uma restrição de carga do corpo centrífugo. [introduzido na versão 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_ConstraintSelfWeight.svg) [Restrição de peso próprio](/index.php?title=FEM_ConstraintSelfWeight/pt-br&action=edit&redlink=1 "FEM ConstraintSelfWeight/pt-br (page does not exist)"): Usada para definir uma aceleração da gravidade agindo sobre um modelo.

### Restrições Térmicas

- ![](/images/FEM_ConstraintInitialTemperature.svg) [Restrição de temperatura inicial](/index.php?title=FEM_ConstraintInitialTemperature/pt-br&action=edit&redlink=1 "FEM ConstraintInitialTemperature/pt-br (page does not exist)"): Usada para definir a temperatura inicial de um corpo.

- ![](/images/FEM_ConstraintHeatflux.svg) [Restrição de fluxo de calor](/index.php?title=FEM_ConstraintHeatflux/pt-br&action=edit&redlink=1 "FEM ConstraintHeatflux/pt-br (page does not exist)"): Usada para definir uma restrição de fluxo de calor em uma face.

- ![](/images/FEM_ConstraintTemperature.svg) [Restrição de temperatura](/index.php?title=FEM_ConstraintTemperature/pt-br&action=edit&redlink=1 "FEM ConstraintTemperature/pt-br (page does not exist)"): Usada para definir uma restrição de temperatura em um ponto, aresta ou face.

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Restrição de fonte de corpo quente](/FEM_ConstraintBodyHeatSource "FEM ConstraintBodyHeatSource")

### Sobreescrever Restrições

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Permissividade de vácuo constante](/index.php?title=FEM_ConstantVacuumPermittivity/pt-br&action=edit&redlink=1 "FEM ConstantVacuumPermittivity/pt-br (page does not exist)"): Usado para substituir a [permissividade do vácuo](https://en.wikipedia.org/wiki/Vacuum_permittivity) por um valor personalizado. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

## Menu: Malhas

- ![](/images/FEM_MeshNetgenFromShape.svg) [Malha FEM da forma pelo Netgen](/index.php?title=FEM_MeshNetgenFromShape/pt-br&action=edit&redlink=1 "FEM MeshNetgenFromShape/pt-br (page does not exist)")

- ![](/images/FEM_MeshGmshFromShape.svg) [Malha FEM da forma pelo GMSH](/FEM_MeshGmshFromShape/pt-br "FEM MeshGmshFromShape/pt-br")

- ![](/images/FEM_MeshBoundaryLayer.svg) [Camada limite de malha FEM](/index.php?title=FEM_MeshBoundaryLayer/pt-br&action=edit&redlink=1 "FEM MeshBoundaryLayer/pt-br (page does not exist)"): Cria malhas anisotrópicas para cálculos precisos perto dos limites.

- ![](/images/FEM_MeshRegion.svg) [Região de malha FEM](/index.php?title=FEM_MeshRegion/pt-br&action=edit&redlink=1 "FEM MeshRegion/pt-br (page does not exist)"): Cria uma(s) área(s) localizada(s) para malha(s) que otimiza(m) altamente o tempo de análise.

- ![](/images/FEM_MeshGroup.svg) [Grupo de malha FEM](/index.php?title=FEM_MeshGroup/pt-br&action=edit&redlink=1 "FEM MeshGroup/pt-br (page does not exist)"): Agrupa e etiqueta elementos de uma malha (vértice, borda, superfície) juntos, úteis para exportar a malha para solvers externos.

- ![](/images/FEM_CreateElementsSet.svg) [Erase Elements](/FEM_CreateElementsSet "FEM CreateElementsSet"): Hides elements selected by a polygon from the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_FemMesh2Mesh.svg) [Malha FEM para Mesh](/index.php?title=FEM_FemMesh2Mesh/pt-br&action=edit&redlink=1 "FEM FemMesh2Mesh/pt-br (page does not exist)"): Converte a superfície de uma malha FEM para uma malha de Mesh.

## Menu: Solucionador

- ![](/images/FEM_SolverCalculixCxxtools.svg) [Solucionador Calculix CCX](/index.php?title=FEM_SolverCalculixCxxtools/pt-br&action=edit&redlink=1 "FEM SolverCalculixCxxtools/pt-br (page does not exist)"): Cria um novo solucionador para esta análise. Na maioria dos casos, o solucionador é criado junto com a análise.

- ![](/images/FEM_SolverElmer.svg) [Solucionador Elmer](/FEM_SolverElmer/pt-br "FEM SolverElmer/pt-br"): Cria o controlador solver para Elmer. Ele é independente de outros objetos solucionadores.

- ![](/images/FEM_SolverMystran.svg) [Solver Mystran](/FEM_SolverMystran "FEM SolverMystran"): Creates the solver controller for the MYSTRAN solver. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_SolverZ88.svg) [Solucionador Z88](/FEM_SolverZ88/pt-br "FEM SolverZ88/pt-br")

### Mechanical equations

- ![](/images/FEM_EquationElasticity.svg) [Equação de elasticidade](/index.php?title=FEM_EquationElasticity/pt-br&action=edit&redlink=1 "FEM EquationElasticity/pt-br (page does not exist)")

- ![](/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform nonlinear mechanical analyses (deformations). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Electromagnetic equations

- ![](/images/FEM_EquationElectrostatic.svg) [Equação eletrostática](/index.php?title=FEM_EquationElectrostatic/pt-br&action=edit&redlink=1 "FEM EquationElectrostatic/pt-br (page does not exist)")

- ![](/images/FEM_EquationElectricforce.svg) [Equação da força elétrica](/index.php?title=FEM_EquationElectricforce/pt-br&action=edit&redlink=1 "FEM EquationElectricforce/pt-br (page does not exist)"): [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/FEM_EquationMagnetodynamic.svg) [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics in 2D. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate static current conduction. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/FEM_EquationFlow.svg) [Equação de fluxo](/index.php?title=FEM_EquationFlow/pt-br&action=edit&redlink=1 "FEM EquationFlow/pt-br (page does not exist)")

- ![](/images/FEM_EquationFlux.svg) [Equação de solucionador de fluxo](/index.php?title=FEM_EquationFlux/pt-br&action=edit&redlink=1 "FEM EquationFlux/pt-br (page does not exist)")

- ![](/images/FEM_EquationHeat.svg) [Equação de calor](/index.php?title=FEM_EquationHeat/pt-br&action=edit&redlink=1 "FEM EquationHeat/pt-br (page does not exist)")

- ![](/images/FEM_SolverControl.svg) [Solucionador do controle de trabalho](/index.php?title=FEM_SolverControl/pt-br&action=edit&redlink=1 "FEM SolverControl/pt-br (page does not exist)"): Abre

o menu para ajustar e iniciar o solucionador selecionado.

- ![](/images/FEM_SolverRun.svg) [Executar solucionador de cálculo](/index.php?title=FEM_SolverRun/pt-br&action=edit&redlink=1 "FEM SolverRun/pt-br (page does not exist)"): Executa o solucionador selecionado das análises ativas.

## Menu: Resultados

- ![](/images/FEM_ResultsPurge.svg) [Limpar resultados](/index.php?title=FEM_ResultsPurge/pt-br&action=edit&redlink=1 "FEM ResultsPurge/pt-br (page does not exist)"): Deleta os resultados das análises ativas.

- ![](/images/FEM_ResultShow.svg) [Mostrar resultado](/index.php?title=FEM_ResultShow/pt-br&action=edit&redlink=1 "FEM ResultShow/pt-br (page does not exist)"): Usado para exibir o resultado de uma análise.

- ![](/images/FEM_PostApplyChanges.svg) [Postar mudanças aplicadas](/index.php?title=FEM_PostApplyChanges/pt-br&action=edit&redlink=1 "FEM PostApplyChanges/pt-br (page does not exist)")

- ![](/images/FEM_PostPipelineFromResult.svg) [Postar pipeline do resultado](/index.php?title=FEM_PostPipelineFromResult/pt-br&action=edit&redlink=1 "FEM PostPipelineFromResult/pt-br (page does not exist)")

- ![](/images/FEM_PostFilterWarp.svg) [Filtro de dobra](/index.php?title=FEM_PostFilterWarp/pt-br&action=edit&redlink=1 "FEM PostFilterWarp/pt-br (page does not exist)")

- ![](/images/FEM_PostFilterClipScalar.svg) [Scalar clip filter](/index.php?title=FEM_PostFilterClipScalar/pt-br&action=edit&redlink=1 "FEM PostFilterClipScalar/pt-br (page does not exist)"):

- ![](/images/FEM_PostFilterCutFunction.svg) [Criar filtro de corte](/index.php?title=FEM_PostFilterCutFunction/pt-br&action=edit&redlink=1 "FEM PostFilterCutFunction/pt-br (page does not exist)"):

- ![](/images/FEM_PostFilterClipRegion.svg) [Filtro de clipes de região](/index.php?title=FEM_PostFilterClipRegion/pt-br&action=edit&redlink=1 "FEM PostFilterClipRegion/pt-br (page does not exist)")

- ![](/images/FEM_PostFilterContours.svg) [Contours filter](/FEM_PostFilterContours "FEM PostFilterContours"): Used to display iso-lines (for analyses in 2D) or iso-contours. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Filtro de clipes de linha](/index.php?title=FEM_PostCreateDataAlongLineFilter/pt-br&action=edit&redlink=1 "FEM PostCreateDataAlongLineFilter/pt-br (page does not exist)")

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Gráfico de linearização de tensão](/index.php?title=FEM_PostFilterLinearizedStresses/pt-br&action=edit&redlink=1 "FEM PostFilterLinearizedStresses/pt-br (page does not exist)")

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Dados no filtro de clipes de ponto](/index.php?title=FEM_PostFilterDataAtPoint/pt-br&action=edit&redlink=1 "FEM PostFilterDataAtPoint/pt-br (page does not exist)"):

### Filter functions

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Plane](/FEM_PostCreateFunctionPlane "FEM PostCreateFunctionPlane"): Cuts the result mesh with a plane.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Sphere](/FEM_PostCreateFunctionSphere "FEM PostCreateFunctionSphere"): Cuts the result mesh with a sphere.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Cylinder](/FEM_PostCreateFunctionCylinder "FEM PostCreateFunctionCylinder"): Cuts the result mesh with a cylinder. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Box](/FEM_PostCreateFunctionBox "FEM PostCreateFunctionBox"): Cuts the result mesh with a box. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Menu: Utilidades

- ![](/images/FEM_ClippingPlaneAdd.svg) [Plano de grampeamento na face](/index.php?title=FEM_ClippingPlaneAdd/pt-br&action=edit&redlink=1 "FEM ClippingPlaneAdd/pt-br (page does not exist)"):

- ![](/images/FEM_ClippingPlaneRemoveAll.svg) [Remover todos os aviões de corte](/index.php?title=FEM_ClippingPlaneRemoveAll/pt-br&action=edit&redlink=1 "FEM ClippingPlaneRemoveAll/pt-br (page does not exist)"):

- ![](/images/FEM_Examples.svg) [Exemplos de FEM abertos](/index.php?title=FEM_Examples/pt-br&action=edit&redlink=1 "FEM Examples/pt-br (page does not exist)"): Abra a GUI para acessar exemplos FEM.

## Menu de Contexto

- ![](/images/FEM_MeshClear.svg) [Malha FEM transparente](/index.php?title=FEM_MeshClear/pt-br&action=edit&redlink=1 "FEM MeshClear/pt-br (page does not exist)"): Deleta o arquivo de malha do arquivo FreeCAD. Útil para fazer um arquivo FreeCAD mais leve.

- ![](/images/FEM_MeshDisplayInfo.svg) [Exibir informações sobre a malha FEM](/index.php?title=FEM_MeshDisplayInfo/pt-br&action=edit&redlink=1 "FEM MeshDisplayInfo/pt-br (page does not exist)"):

## Obsolete tools

- ![](/images/Fem-constraint-fluid-boundary.svg) [Restrição de fronteira de fluido](/index.php?title=FEM_ConstraintFluidBoundary/pt-br&action=edit&redlink=1 "FEM ConstraintFluidBoundary/pt-br (page does not exist)"): Usado para definir uma condição de contorno de fluido.

- ![](/images/FEM_ConstraintBearing.svg) [Restrição de rolamento](/index.php?title=FEM_ConstraintBearing/pt-br&action=edit&redlink=1 "FEM ConstraintBearing/pt-br (page does not exist)"): Usada para definir uma restrição de rolamento.

- ![](/images/FEM_ConstraintGear.svg) [Restrição de engrenagem](/index.php?title=FEM_ConstraintGear/pt-br&action=edit&redlink=1 "FEM ConstraintGear/pt-br (page does not exist)"): Usada para definir uma restrição de engrenagem.

- ![](/images/FEM_ConstraintPulley.svg) [Restrição de polia](/index.php?title=FEM_ConstraintPulley/pt-br&action=edit&redlink=1 "FEM ConstraintPulley/pt-br (page does not exist)"): Usada para definir uma restrição de polia.

- ![](/images/FEM_SolverCalculiX.svg) [Solucionador CalculiX(experimental)](/FEM_SolverCalculiX/pt-br "FEM SolverCalculiX/pt-br")

- ![](/images/FEM_CreateNodesSet.svg) [Conjunto de nós](/index.php?title=FEM_CreateNodesSet/pt-br&action=edit&redlink=1 "FEM CreateNodesSet/pt-br (page does not exist)"): Cria/define um conjunto de nós a partir da malha FEM.

## Preferências

- ![](/images/Std_DlgPreferences.svg) [Preferências...](/index.php?title=FEM_Preferences/pt-br&action=edit&redlink=1 "FEM Preferences/pt-br (page does not exist)"): Preferências disponíveis em Ferramentas FEM.

## Informações

As páginas seguintes explicam diferentes tópicos do bancada de trabalho FEM.

[Instalação FEM](/index.php?title=FEM_Install/pt-br&action=edit&redlink=1 "FEM Install/pt-br (page does not exist)"): uma descrição detalhada sobre como montar os programas externos utilizados na bancada de trabalho.

[FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing"): tips regarding geometry preparation for FEM and meshing.

[Malha FEM](/index.php?title=FEM_Mesh/pt-br&action=edit&redlink=1 "FEM Mesh/pt-br (page does not exist)"): mais informações sobre como obter uma malha para análise de elementos finitos.

[Solucionador FEM](/index.php?title=FEM_Solver/pt-br&action=edit&redlink=1 "FEM Solver/pt-br (page does not exist)"): mais informações sobre os diferentes solucionadores disponíveis na bancada de trabalho e aqueles que poderiam ser utilizados no futuro.

[FEM CalculiX](/index.php?title=FEM_CalculiX/pt-br&action=edit&redlink=1 "FEM CalculiX/pt-br (page does not exist)"): mais informações sobre CalculiX, o solucionador padrão utilizado na bancada de trabalho para análise estrutural.

[FEM Concreto](/index.php?title=FEM_Concrete/pt-br&action=edit&redlink=1 "FEM Concrete/pt-br (page does not exist)"): informações interessantes sobre o tema da simulação de estruturas de concreto.

## Tutorials

## Tutoriais

Tutorial 1: [FEM CalculiX Cantilever 3D](/index.php?title=FEM_CalculiX_Cantilever_3D/pt-br&action=edit&redlink=1 "FEM CalculiX Cantilever 3D/pt-br (page does not exist)"); análise básica de feixe simplesmente suportada.(Cantilever - Viga ou estrutura com apoio, ou fixação apenas num dos lados e que tem o outro lado livre.)

Tutorial 2: [Tutorial FEM](/index.php?title=FEM_tutorial/pt-br&action=edit&redlink=1 "FEM tutorial/pt-br (page does not exist)"); simples análise de tensão de uma estrutura.

Tutorial 3: [FEM Tutorial Python](/index.php?title=FEM_Tutorial_Python/pt-br&action=edit&redlink=1 "FEM Tutorial Python/pt-br (page does not exist)"); montar o exemplo do cantilever inteiramente através do script em Python, incluindo a malha.

Tutorial 4: [FEM Corte de um Bloco Composto](/index.php?title=FEM_Shear_of_a_Composite_Block/pt-br&action=edit&redlink=1 "FEM Shear of a Composite Block/pt-br (page does not exist)"); ver a deformação de um bloco que é composto de dois materiais.

Tutorial 5: [Análise FEM transitória](/index.php?title=Transient_FEM_analysis/pt-br&action=edit&redlink=1 "Transient FEM analysis/pt-br (page does not exist)")

Tutorial 6: [Pós-processamento dos resultados FEM com Paraview](/index.php?title=Post-Processing_of_FEM_Results_with_Paraview/pt-br&action=edit&redlink=1 "Post-Processing of FEM Results with Paraview/pt-br (page does not exist)")

Tutorial 7: [Exemplo FEM Capacitância Duas Bolas](/index.php?title=FEM_Example_Capacitance_Two_Ball&action=edit&redlink=1 "FEM Example Capacitance Two Ball (page does not exist)"); Elmer's GUI tutorial 6 " Capacitância Eletrostática Duas Bolas" usando exemplos FEM.

Acoplamento de tutoriais de análise mecânica térmica por [openSIM](https://opensimsa.github.io/training.html)

Tutoriais em vídeo 1: [Vídeo FEM para iniciantes](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (incluindo o link do YouTube)(em inglês)

Tutoriais em vídeo: [Vídeo FEM para iniciantes](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (incluindo o link do YouTube)(em inglês)

Muitos tutoriais em vídeo: [anisim Software de Engenharia de Código Aberto](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (em Alemão)

## Ampliação da bancada de trabalho FEM

O bancada de trabalho FEM está em constante desenvolvimento. Um objetivo do projeto é encontrar maneiras de interagir facilmente com vários solucionadores FEM, para que o usuário final possa agilizar o processo de criação, enredamento, simulação e otimização de um problema de projeto de engenharia, tudo dentro do FreeCAD.

As seguintes informações são destinadas aos usuários e desenvolvedores que desejam ampliar o Workbench FEM de diferentes maneiras. A familiaridade com C++ e Python é esperada, e também é necessário algum conhecimento do sistema "objeto de documento" usado no FreeCAD; esta informação está disponível no [Documentação para usuários avançados](/Power_users_hub/pt-br "Power users hub/pt-br") e no [Documentação para desenvolvedores](/Developer_hub/pt-br "Developer hub/pt-br").Observe que, como o FreeCAD está em desenvolvimento ativo, alguns artigos podem ser muito antigos e, portanto, obsoletos. As informações mais atualizadas são discutidas no [FreeCAD forums](https://forum.freecadweb.org/index.php) na seção Desenvolvimento. Para discussões FEM, conselhos ou assistência na ampliação do workbench, o leitor deve consultar o [FEM subforum](https://forum.freecadweb.org/viewforum.php?f=18).

Os artigos seguintes explicam como o workbench pode ser ampliado, por exemplo, adicionando novos tipos de condições de limite (restrições), ou equações.

- [Ampliar o Módulo FEM](/index.php?title=Extend_FEM_Module/pt-br&action=edit&redlink=1 "Extend FEM Module/pt-br (page does not exist)")
- [Adicionar Tutorial de Restrições FEM](/index.php?title=Add_FEM_Constraint_Tutorial/pt-br&action=edit&redlink=1 "Add FEM Constraint Tutorial/pt-br (page does not exist)")
- [Adicionar Tutorial de Equação FEM](/index.php?title=Add_FEM_Equation_Tutorial/pt-br&action=edit&redlink=1 "Add FEM Equation Tutorial/pt-br (page does not exist)")

Um guia do desenvolvedor foi escrito para ajudar os usuários a entenderem a complexa base de código do FreeCAD e as interações entre os elementos centrais e as bancadas de trabalho individuais. O livro é hospedado no github para que múltiplos usuários possam contribuir com ele e mantê-lo atualizado.

- [Visualização antecipada do ebook: Guia do desenvolvedor do módulo para a fonte FreeCAD](https://forum.freecadweb.org/viewtopic.php?t=17581) (tópico do fórum)
- [Guia de desenvolvimento do FreeCAD Mod](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) (repositório github)

## Ampliação da documentação do bancada de trabalho FEM

- Mais informações sobre a extensão ou falta de documentação FEM podem ser encontradas no fórum: [Documentação FEM em falta no Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/pt-br&oldid=1568030>"

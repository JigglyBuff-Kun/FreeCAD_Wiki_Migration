---
title: Central do Usuário
---

![](/images/User_hub.png)

---

Esta é a principal área de ajuda para os recém chegados ao FreeCAD.

O FreeCAD está em desenvolvimento contínuo, portanto, pode haver informações ausentes ou desatualizadas. Se você não encontrar as informações que precisa, não hesite em perguntar no [fórum do FreeCAD](https://forum.freecad.org).

Se você gostaria de contribuir com o FreeCAD, por favor, [faça uma doação](/Donate/pt-br "Donate/pt-br"), e veja a página [Ajude o FreeCAD](/Help_FreeCAD/pt-br "Help FreeCAD/pt-br") para outras formas de contribuição. Se você gostaria de editar esta wiki, solicite uma conta de wiki com permissões de editor [no fórum](https://forum.freecad.org/viewtopic.php?f=21&t=6830), e leia as [WikiPages](/WikiPages/pt-br "WikiPages/pt-br") para as diretrizes gerais que você deve seguir.

Se você gostaria de saber como o FreeCAD começou anos atrás, visite a página [História](/History/pt-br "History/pt-br").

## Usando o FreeCAD

### Introdução

- [Visão geral do aplicativo](/About_FreeCAD/pt-br "About FreeCAD/pt-br"): Uma visão geral do FreeCAD
- Instalando: Como instalar o FreeCAD no [Windows](/Installing_on_Windows/pt-br "Installing on Windows/pt-br"), [Linux](/Installing_on_Linux/pt-br "Installing on Linux/pt-br") e [Mac](/Installing_on_Mac/pt-br "Installing on Mac/pt-br")
- [Instalando arquivos de ajuda](/Installing_Helpfile/pt-br "Installing Helpfile/pt-br"): como instalar a documentação offline baseada nesta wiki.
- [Instalando componentes adicionais](/Installing_additional_components/pt-br "Installing additional components/pt-br"): como instalar componentes de terceiros adicionais que podem funcionar com o FreeCAD.
- [Primeiros passos](/Getting_started/pt-br "Getting started/pt-br"): Uma visão geral rápida das ferramentas disponíveis
- [Perguntas frequentes](/Frequently_asked_questions/pt-br "Frequently asked questions/pt-br"): Perguntas frequentemente feitas
- [Tutoriais](/Tutorials/pt-br "Tutorials/pt-br") cobrindo diferentes partes do FreeCAD

#### Migrating from other software?

- [Soluções alternativas](/Workarounds/pt-br "Workarounds/pt-br")
- [Migrando para o FreeCAD a partir do Fusion360](/Migrating_to_FreeCAD_from_Fusion360/pt-br "Migrating to FreeCAD from Fusion360/pt-br")
- [Migrando para o FreeCAD a partir do OnShape](/index.php?title=Migrating_to_FreeCAD_from_OnShape/pt-br&action=edit&redlink=1 "Migrating to FreeCAD from OnShape/pt-br (page does not exist)")
- [Migrando para o FreeCAD a partir do SolidWorks](/index.php?title=Migrating_to_FreeCAD_from_SolidWorks/pt-br&action=edit&redlink=1 "Migrating to FreeCAD from SolidWorks/pt-br (page does not exist)")
- [Migrando para o FreeCAD a partir do Revit](/index.php?title=Migrating_to_FreeCAD_from_Revit/pt-br&action=edit&redlink=1 "Migrating to FreeCAD from Revit/pt-br (page does not exist)")
- [Guia de migração do FreeCAD BIM](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [Tabela de compatibilidade de aplicativos BIM](/index.php?title=BIM_application_compatibility_table/pt-br&action=edit&redlink=1 "BIM application compatibility table/pt-br (page does not exist)")

### Conceitos Básicos do Software

- [Interface](/Interface/pt-br "Interface/pt-br"): a interface do FreeCAD é composta por vários elementos gráficos na tela, incluindo a [visão 3D](/3D_view/pt-br "3D view/pt-br"), a [vista de árvore](/Tree_view/pt-br "Tree view/pt-br"), o [editor de propriedades](/Property_editor/pt-br "Property editor/pt-br"), o [painel de tarefas](/Task_panel/pt-br "Task panel/pt-br") e o [console Python](/Python_console/pt-br "Python console/pt-br").
- [Navegação com o mouse](/Mouse_navigation/pt-br "Mouse navigation/pt-br"): os diferentes tipos de uso do mouse ou trackpad para navegar na visão 3D.
- [Métodos de seleção](/Selection_methods/pt-br "Selection methods/pt-br"): os diferentes métodos de seleção de objetos no software.
- [Nomeação de objetos](/Object_name/pt-br "Object name/pt-br"): os objetos do FreeCAD possuem um `Nome` somente leitura que os identifica de forma única, e um `Label` que é editável pelo usuário.
- [Editor de Preferências](/Preferences_Editor/pt-br "Preferences Editor/pt-br"): o sistema que permite controlar várias propriedades do sistema base e dos workbenches individuais.
- [Formatos de arquivo](/Import_Export/pt-br "Import Export/pt-br"): os diferentes formatos de arquivo que o FreeCAD pode ler e escrever.

### "Workbenches" (Bancadas de trabalho)

[Bancadas de trabalho](/Workbenches/pt-br "Workbenches/pt-br") são coleções de ferramentas usadas para tarefas específicas. Imagine que você está em seu espaço de trabalho, e nesse espaço há várias bancadas de trabalho, cada uma equipada com as ferramentas necessárias para realizar um tipo específico de tarefa. Por exemplo, uma bancada pode ser destinada à marcenaria, outra à pintura e outra à soldagem. Da mesma forma, no FreeCAD, cada workbench é uma bancada especializada com ferramentas para diferentes tipos de tarefas, como modelagem, desenho técnico, análise e mais. Esses workbenches são essenciais para otimizar seu fluxo de trabalho, oferecendo as ferramentas mais adequadas para cada tarefa específica.

![](/images/Freecad.svg) [Ferramentas padrão](/Std_Base/pt-br "Std Base/pt-br"). Esta não é uma bancada de trabalho propriamente dita, mas sim uma categoria de comandos e ferramentas "padrão" que podem ser utilizadas em todas as bancadas de trabalho. Essas ferramentas estão disponíveis em qualquer workbench e oferecem funcionalidades básicas e comuns, facilitando o trabalho em diversas tarefas, independentemente da bancada especializada que você esteja utilizando.

- ![](/images/Workbench_Assembly.svg) O [Workbench de Montagem](/Assembly_Workbench/pt-br "Assembly Workbench/pt-br") para a construção e resolução de montagens mecânicas. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) A [Bancada BIM](/BIM_Workbench/pt-br "BIM Workbench/pt-br") para trabalhar com elementos arquitetônicos e criar modelos de [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Ela combina a Bancada Arch e a antiga Bancada BIM que estava disponível na versão 0.21 and below.

- ![](/images/Workbench_CAM.svg) A [Bancada CAM](/CAM_Workbench/pt-br "CAM Workbench/pt-br") é utilizada para produzir instruções em G-Code. Essa bancada era chamada de "Bancada Path" na versão 0.21 and below.

- ![](/images/Workbench_Draft.svg) A [Bancada Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br") contém ferramentas 2D e operações básicas de CAD 2D e 3D.

- ![](/images/Workbench_FEM.svg) A [Bancada FEM](/FEM_Workbench/pt-br "FEM Workbench/pt-br") fornece o fluxo de trabalho de Análise por Elementos Finitos (FEA).

- ![](/images/Workbench_Inspection.svg) A [Bancada Inspection](/Inspection_Workbench/pt-br "Inspection Workbench/pt-br") foi criada para fornecer ferramentas específicas para a análise de formas. Ainda está em estágios iniciais de desenvolvimento.

- ![](/images/Workbench_Material.svg) A [Bancada Material](/Material_Workbench/pt-br "Material Workbench/pt-br") gerencia o sistema de materiais do FreeCAD. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) A [Bancada Mesh](/Mesh_Workbench/pt-br "Mesh Workbench/pt-br") para trabalhar com malhas trianguladas.

- ![](/images/Workbench_OpenSCAD.svg) A [Bancada OpenSCAD](/OpenSCAD_Workbench/pt-br "OpenSCAD Workbench/pt-br") para interoperabilidade com o OpenSCAD e reparo do histórico de modelos de [geometria sólida construtiva](/Constructive_solid_geometry/pt-br "Constructive solid geometry/pt-br") (CSG).

- ![](/images/Workbench_Part.svg) A [Bancada Part](/Part_Workbench/pt-br "Part Workbench/pt-br") para trabalhar com primitivas geométricas e operações booleanas.

- ![](/images/Workbench_PartDesign.svg) A [Bancada Part Design](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") para criar formas de peças a partir de esboços.

- ![](/images/Workbench_Points.svg) A [Bancada Points](/Points_Workbench/pt-br "Points Workbench/pt-br") para trabalhar com nuvens de pontos.

- ![](/images/Workbench_Reverse_Engineering.svg) A [Bancada Reverse Engineering](/Reverse_Engineering_Workbench/pt-br "Reverse Engineering Workbench/pt-br") é destinada a fornecer ferramentas específicas para converter formas/sólidos/malhas em recursos paramétricos compatíveis com o FreeCAD.

- ![](/images/Workbench_Robot.svg) A [Bancada Robot](/Robot_Workbench/pt-br "Robot Workbench/pt-br") para estudar os movimentos de robôs. Atualmente não está sendo mantida.

- ![](/images/Workbench_Sketcher.svg) A [Bancada Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br") para trabalhar com esboços restritos por geometria.

- ![](/images/Workbench_Spreadsheet.svg) A [Bancada Spreadsheet](/Spreadsheet_Workbench/pt-br "Spreadsheet Workbench/pt-br") para criar e manipular dados de planilhas.

- ![](/images/Workbench_Surface.svg) A [Bancada Surface](/Surface_Workbench/pt-br "Surface Workbench/pt-br") fornece ferramentas para criar e modificar superfícies. Ela é semelhante à opção "Face from edges" da [Bancada Part Builder](/Part_Builder/pt-br "Part Builder/pt-br"), opção de face a partir das bordas.

- ![](/images/Workbench_TechDraw.svg) A [Bancada TechDraw](/TechDraw_Workbench/pt-br "TechDraw Workbench/pt-br") para produzir desenhos técnicos a partir de modelos 3D.

- ![](/images/Workbench_Test.svg) A [Bancada Test Framework](/Testing/pt-br "Testing/pt-br") é para depuração do FreeCAD.

### Macros

[Macros](/Macros/pt-br "Macros/pt-br") são trechos relativamente pequenos de código [Python](/Python/pt-br "Python/pt-br") que realizam tarefas simples ou complexas que não estão disponíveis no sistema base do FreeCAD.

Usuários avançados escreveram diversas [macros](/Macros/pt-br "Macros/pt-br") para aprimorar o FreeCAD com mais funcionalidades.

Desde o FreeCAD 0.17, muitas macros podem ser instaladas usando o [Gerenciador de Addons](/Std_AddonMgr/pt-br "Std AddonMgr/pt-br"). Para uma lista das macros, consulte a página [Receitas de Macros](/index.php?title=Macros_recipes/pt-br&action=edit&redlink=1 "Macros recipes/pt-br (page does not exist)"). Para instalação manual, veja [Como instalar macros](/How_to_install_macros/pt-br "How to install macros/pt-br").

### Bancadas de Trabalho Externas

Quando muitas macros ou funções são desenvolvidas juntas e organizadas em barras de ferramentas e menus, elas podem se tornar uma nova bancada.

[Bancadas externas](/External_workbenches/pt-br "External workbenches/pt-br") são coleções de funções que não fazem parte do sistema base do FreeCAD, geralmente desenvolvidas por usuários experientes, e voltadas para uma necessidade específica.

Desde o FreeCAD 0.17, muitas bancadas podem ser instaladas usando o [Gerenciador de Addons](/Std_AddonMgr/pt-br "Std AddonMgr/pt-br"). Para instalação manual, veja [Como instalar bancadas adicionais](/How_to_install_additional_workbenches/pt-br "How to install additional workbenches/pt-br").

## Referências

- [Referência de Comandos](/List_of_Commands/pt-br "List of Commands/pt-br"): Uma lista completa dos comandos disponíveis no FreeCAD.

## Ajuda Online

Esta é a ajuda online oficial do FreeCAD. Observe que todo o sistema de ajuda online está atualmente sendo reformulado. Ele será utilizado para gerar um arquivo .CHM, que será distribuído com os pacotes binários do FreeCAD. No momento, a ajuda online resume algumas das seções mais completas deste wiki.

- [Sistema de ajuda online - Índice](/Online_Help_Toc/pt-br "Online Help Toc/pt-br")

## Mais Informações

- O [Hub de Usuários Avançados](/Power_users_hub/pt-br "Power users hub/pt-br") é o lugar para acessar exemplos de uso mais avançado do FreeCAD.
- O [Portal da Comunidade FreeCAD](/FreeCAD_Community_Portal/pt-br "FreeCAD Community Portal/pt-br") lista projetos feitos por membros da comunidade em torno do FreeCAD.
- Não entende um termo ou expressão usada no FreeCAD? Consulte a página [Glossário](/Glossary/pt-br "Glossary/pt-br").

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/pt-br&oldid=1514926>"

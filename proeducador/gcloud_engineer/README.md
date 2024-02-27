# Serviços em Nuvem-Google Cloud Engineer - "T01_GCE_24"

[Link da trilha](https://www.cloudskillsboost.google/paths/53)

|10 Cursos|
|-|
|01 Google Cloud Fundamentals: Core Infrastructure - Português Brasileiro|
|02 Essential Google Cloud Infrastructure: Foundation - Português Brasileiro|
|03 Essential Google Cloud Infrastructure: Core Services - Português|
|04 Elastic Google Cloud Infrastructure: Scaling and Automation - Português Brasileiro|
|05 Getting Started with Google Kubernetes Engine - Português Brasileiro|
|06 Getting Started - Create and Manage Cloud Resources|
|07 Perform Foundational Infrastructure Tasks in Google Cloud|
|08 Set up and Configure a Cloud Environment in Google Cloud|
|09 Automating Infrastructure on Google Cloud with Terraform|
|10 Preparing for Your Associate Cloud Engineer Journey - Português|

## Dicas
### Dados e Recursos
- Dataproc - Apache Spark e Hadoop
- Dataproc - batch and stream (Em lote e em tempo real)
- Apigee API - Para obter os benefícios do roteamento e da limitação de taxa - To get the benefits of routing and rate-limiting
- Apigee API - Serviços de autenticação - Authentication services
- Cloud Memorystore -  dados disponíveis na memória para reduzir o tempo de resposta às consultas
- Cloud Bigtable - IoT
- Cloud FireStore - Manter os dados sincronizados entre smartphones
- Cloud Apanner - ANSI 2011 e transações globais (SQL e NoSQL)
- Monitoring (Alerts, Error Reporting, Logging)

## IAM
- Conta de serviço e de cobrança não fazem parte da hierarquia de recursos, não herdam políticas.

## Infra
- Máximo CPUs /VM 96 disponívels
- Classes de armazenamento
  - Standard Nenhum
  - Nearline >= 30 dias
  - Coldline >= 90 dias
  - Archive >= 365 dias
- Atomicidade, Consistência, Isolamento e Durabilidade (ACID)
## Simulados
- Questão de Pipeline -> Pub/Sub, Dataflow, Bigtable, BigQuery
- Provisionar VM dinâmicamente, com especificações em um arquivo de configuração dedicado. -> Grupo de instâncias gerenciadas
- Balancear a carga, encerrar sessão SSL, servir um App Web Público HTTPS -> Configure um balanceador de carga HTTP(S)
- Permissão para gerenciar buckets e arquivos -> ObjectAdmin - Administrador de objetos de armazenamento
- Pod(Containners(Clusters[])[]) - DaemonSet garante a integridade da cópia de Pods -> Objeto DaemonSet
- Arquivo binário executar no GCP, dimencionar automaticamente com base no uso da CPU -> Crie um modelo de instância e use-o em um grupo gerenciado de instâncias com escalonamento automático
- Solução econômica para dados relacionais no GCP, suporte a recuperação pontual -> MySQL - Verifique se a opção ativar registro binário
- Revisar o cluster do Kubernets de uma configuração inativa -> Use kubectl config get-contexts para revisar a saída
- Cloud Storage para armazenar arquivos de backup de app para fins de desastres -> Armazenamento multiregional
- GCP em execução na sua região e zona padrão e outra conta em execução em uma região e zona não padrão. -> Crie duas configurações usando gcloud config settings create [NAME]. Execute gcloud config settings activate [NAME] para alternar entre contas ao executar os comandos para iniciar as instâncias do Compute Engine.
- SALM - Camada de segurança (token) ->  Cloud Identity, configure o SSO com um provedor de identidade terceirizado.
- Cloud SDK instalado localmente a partir do repositório de pacotes Ubuntu do Google Cloud. -> Instalar emulador componente 'cloud-datastore-emulator' do Cloud Datastore
- Google Kubernetes Engine (GKE) permite uso de GPUs -> provisionamento automático de nós no cluster.
- Active Directory (AD) x Cloud Identity -> Google Cloud Directory Sync (GCDS)
- Preciso criar VM em um projrto com muitos usuários, mas só eu tenho permissão para parar, remover, etc -> VMs Nós de locatário individual
- Cassandra - Marketplace
- uso de CPU alerta recomendado -> unica região 65%, multiregião 45%
- O jogo envia pacotes UDP enquanto eles jogam no modo multijogador -> Configure balanceador de carga de rede.
- Microsserviços em contêiner -> Crie uma implantação por microsserviço.
- Nível mais granular ca conta de serviço -> Ao criar instâncias especifique uma conta de serviço para cada instância.

# Anotações

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

## Simulado 01
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
- Em subredes - Intervalos de IP podem ser alterado.

- Instâncias do Cloud Memorystore para Redis com capacidade
- Existe um tipo de máquina n1-standard-96
- Conta de serviço gera uma chave Key - JSON ou P12
- Ao implantar app em um grupo de instâncias gerenciadas -> Execute uma 'atualização inicial de ação contínua' com 'maxSurge' definido como 1 e 'maxUnavailable' definido como 0.
- Pods -> cloud.google.com/gke -accelerator: nvidia-tesla-p100 nodeSelector
- App Engine -> Permite que implante novas versões de aplicativos, funcionando em paralelo com versões anteriores e dividindo o tráfego entre as duas versões, através da opção -splits
- Para garantir que as VMs não íntegras sejam recriadas - Add. verificação de integridade na porta 443 ao criar
- Criar um DaemonSet no namespace 'kube-system' do cluster -> Adicione a API do cluster como um novo Type Provider no Deployment Manager e use o novo tipo para criar o DaemonSet.

# Outros
grafsenai@adm!

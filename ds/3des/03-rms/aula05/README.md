<div align = "center">
<img src = "">
</div>

# Situação-Problema: Sistema de Gerenciamento de Clínica Médica

## Contexto

A **Clínica Saúde Total** está enfrentando problemas com a gestão de suas consultas médicas e o acompanhamento dos pacientes. A clínica, que atende uma grande quantidade de pacientes diariamente, está tendo dificuldades em manter o controle eficiente sobre agendamentos, históricos médicos e prescrições de medicamentos. Além disso, o processo manual atual está resultando em muitos erros e insatisfação tanto entre os pacientes quanto entre os funcionários.

## Problemas Identificados

1. **Agendamentos Confusos**: Os recepcionistas estão enfrentando dificuldades em gerenciar o agendamento de consultas, resultando em conflitos de horários e consultas agendadas para médicos que não estão disponíveis.

2. **Histórico Médico Incompleto**: Os médicos têm acesso limitado ao histórico médico dos pacientes, o que dificulta o diagnóstico preciso e o tratamento adequado.

3. **Prescrições de Medicamentos**: A prescrição de medicamentos é frequentemente feita de forma manual, o que pode levar a erros e falta de rastreamento sobre os medicamentos prescritos para cada paciente.

4. **Atualização de Dados dos Pacientes**: Atualizar as informações dos pacientes é um processo demorado e propenso a erros, especialmente quando feito manualmente.

5. **Cancelamento de Consultas**: O processo de cancelamento de consultas é ineficiente e não é bem comunicado aos médicos e pacientes, resultando em consultas perdidas e ociosidade dos médicos.

## Requisitos do Sistema

Para resolver esses problemas, o sistema de gerenciamento da clínica precisa incorporar as seguintes funcionalidades:

1. **Agendamento e Cancelamento de Consultas**: O sistema deve permitir que recepcionistas e pacientes agendem e cancelem consultas de forma fácil e eficiente, com atualização automática da agenda dos médicos.

2. **Gerenciamento de Histórico Médico**: Os médicos devem ter acesso completo ao histórico médico dos pacientes para fazer diagnósticos informados e recomendações de tratamento.

3. **Prescrição e Monitoramento de Medicamentos**: O sistema deve permitir que médicos prescrevam medicamentos e monitorem a administração desses medicamentos pelos pacientes.

4. **Atualização de Dados dos Pacientes**: O sistema deve facilitar a atualização das informações dos pacientes, garantindo que os dados estejam sempre atualizados e corretos.

5. **Notificações e Alertas**: O sistema deve enviar notificações para médicos e pacientes sobre alterações no agendamento, prescrições de medicamentos e outros eventos importantes.

## Solução Proposta

Para solucionar os problemas identificados, a clínica vai implementar um sistema informatizado que inclui:

- **Uma interface para o recepcionista** gerenciar agendamentos, cancelamentos e informações dos pacientes.
- **Uma interface para os médicos** visualizarem suas agendas, acessarem o histórico dos pacientes e registrarem diagnósticos e prescrições.
- **Uma interface para os pacientes** que permita agendar e cancelar consultas, visualizar seu histórico médico e consultar prescrições.

## Exemplos de Casos de Uso e Entidades

### Casos de Uso

- **Recepcionista**: 
  - Agendar Consulta
  - Cancelar Consulta
  - Registrar Paciente
  - Atualizar Dados do Paciente

- **Médico**: 
  - Consultar Agenda
  - Registrar Diagnóstico
  - Prescrever Medicamento
  - Verificar Histórico do Paciente

- **Paciente**: 
  - Agendar Consulta
  - Cancelar Consulta
  - Consultar Histórico Médico

### Entidades

- **Paciente**: 
  - ID_Paciente
  - Nome
  - Data_Nascimento
  - Endereço
  - Telefone
  - Email

- **Médico**: 
  - ID_Médico
  - Nome
  - Especialidade
  - CRM
  - Telefone
  - Email

- **Consulta**: 
  - ID_Consulta
  - ID_Paciente
  - ID_Médico
  - Data_Hora
  - Diagnóstico
  - Prescrição

- **Medicamento**: 
  - ID_Medicamento
  - Nome
  - Dosagem
  - Instruções


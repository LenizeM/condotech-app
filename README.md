# 🏢 CondoTech - Gestão de Condomínio

Aplicativo mobile desenvolvido em **React Native com Expo** para auxiliar na **gestão de tarefas e comunicados de condomínios**, 
permitindo o acompanhamento de manutenções, avisos importantes e organização das atividades do condomínio.

O projeto foi desenvolvido com foco em **usabilidade, persistência local de dados utilizando SQLite e experiência do usuário**, simulando uma aplicação real utilizada por administradores e moradores.

---

## 📱 Funcionalidades

### ✅ Gestão de Tarefas do Condomínio

Permite cadastrar, visualizar, atualizar e excluir tarefas relacionadas ao condomínio, como:

* Limpeza da piscina;
* Dedetização;
* Capinagem de terrenos;
* Limpeza das áreas comuns;
* Manutenções gerais.

### 📢 Comunicados aos Moradores

Tela dedicada para avisos importantes do condomínio, como:

* Eventos internos (ex.: Festa Junina do condomínio);
* Avisos de manutenção;
* Dedetização das áreas comuns;
* Informações administrativas.

### 🔄 CRUD Completo

O aplicativo implementa as quatro operações fundamentais:

* **Create** → Criar tarefas;
* **Read** → Visualizar tarefas;
* **Update** → Alterar status das tarefas;
* **Delete** → Excluir tarefas.

### 💾 Persistência de Dados

As informações são armazenadas localmente utilizando **SQLite**, permitindo que os dados permaneçam salvos mesmo após fechar o aplicativo.

---

## 🛠️ Tecnologias Utilizadas

* **React Native**
* **Expo**
* **Expo Router**
* **TypeScript**
* **SQLite (expo-sqlite)**
* **React Hooks**

  * `useState`
  * `useEffect`
  * `useFocusEffect`

---

## 🎯 Objetivo do Projeto

O objetivo do aplicativo é facilitar a comunicação e organização das atividades de um condomínio, permitindo uma administração mais eficiente das tarefas e comunicados destinados aos moradores.

O sistema foi pensado para um cenário real, inspirado em rotinas condominiais, incluindo eventos, manutenção preventiva e acompanhamento de serviços.

---

## 📸 Telas do Aplicativo

### 🏠 Home

Tela inicial com visão geral do condomínio e resumo rápido das atividades.

<img width="280" height="611" alt="image" src="https://github.com/user-attachments/assets/2a3c12bb-413c-42eb-920e-6811cc7f9a7f" />


### 📢 Avisos

Tela destinada à divulgação de comunicados importantes aos moradores.

<img width="280" height="614" alt="image" src="https://github.com/user-attachments/assets/1ab54dbe-5b64-470d-9273-e57ef42f0c18" />


### 📋 Tarefas

Área responsável pela gestão das tarefas do condomínio.

<img width="276" height="612" alt="image" src="https://github.com/user-attachments/assets/3e023862-ecf5-4efe-a6b9-ad1f868c09b2" />


Funcionalidades:

* Criar tarefa;
* Atualizar status;
* Excluir tarefa;
* Persistência local com SQLite.

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/LenizeM/condotech-app.git
```

### 2. Entrar na pasta do projeto

```bash
cd condotech-app
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Iniciar aplicação

```bash
npx expo start
```

### 5. Executar no celular

Baixe o aplicativo **Expo Go** no celular e escaneie o QR Code exibido no terminal.

---

## 👩‍💻 Desenvolvido por

**Lenize Malheiros**

Projeto acadêmico desenvolvido para a disciplina de Programação Para Dispositivos Móveis em Android utilizando **React Native**.

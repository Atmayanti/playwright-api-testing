# API Automation Testing with Playwright

This project is an **API automation test suite** built using **[Playwright](https://playwright.dev/)** for the mock API service provided by [https://reqres.in](https://reqres.in/). It covers various HTTP methods and scenarios based on the "Give It a Try" examples from the ReqRes documentation.

---

## 📌 Project Overview

- ✅ Built with Playwright Test
- ✅ Covers all main HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)
- ✅ Covers success and failure scenarios
- ✅ Uses ReqRes public API for demo purposes

---

## 🧪 Test Scenarios Covered

### 👤 User Endpoints

- `GET /api/users?page=2` – **List users**
- `GET /api/users/2` – **Single user**
- `GET /api/users/23` – **Single user not found**
- `POST /api/users` – **Create user**
- `PUT /api/users/2` – **Update user (full)**
- `PATCH /api/users/2` – **Update user (partial)**
- `DELETE /api/users/2` – **Delete user**

### 📦 Resource Endpoints

- `GET /api/unknown` – **List <resource>**
- `GET /api/unknown/2` – **Single <resource>**
- `GET /api/unknown/23` – **Single <resource> not found**

### 🔐 Authentication

- `POST /api/register` – **Register (successful)**
- `POST /api/register` – **Register (unsuccessful)**
- `POST /api/login` – **Login (successful)**
- `POST /api/login` – **Login (unsuccessful)**

### ⏳ Others

- `GET /api/users?delay=3` – **Delayed response**

---
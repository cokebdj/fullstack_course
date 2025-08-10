# 📡 API Colegio

Esta API permite acceder a una base de datos de usuarios, clases y asignaturas

## 📋 Endpoints

## Usuarios

### Registro

- **URL:** `/register`
- **Método:** `POST`
- **Acceso:** no logado
- **Descripción:** Permite crear un usuario.

### Inicio de sesión

- **URL:** `/login`
- **Método:** `POST`
- **Acceso:** no logado
- **Descripción:** Permite identificarse.

### 🔍 Obtener usuarios

- **URL:** `/users`
- **Método:** `GET`
- **Acceso:** logado
- **Descripción:** Devuelve una lista de todos los usuarios disponibles.

### 🔍 Obtener usuario por id

- **URL:** `/users/id`
- **Método:** `GET`
- **Acceso:** logado
- **Descripción:** Devuelve el usuario al que corresponde el id.

### 🔍 Editar usuario

- **URL:** `/users/id`
- **Método:** `PUT`
- **Acceso:** admin
- **Descripción:** Edita información de un usuario.

### 🔍 Eliminar usuario

- **URL:** `/users/id`
- **Método:** `DELETE`
- **Acceso:** admin
- **Descripción:** Elimina la información de un usuario.

## Clases

### 🔍 Obtener clases

- **URL:** `/classes`
- **Método:** `GET`
- **Acceso:** logado
- **Descripción:** Devuelve una lista de todas las clases disponibles.

### 🔍 Obtener clase por id

- **URL:** `/classes/id`
- **Método:** `GET`
- **Acceso:** logado
- **Descripción:** Devuelve la clase a la que corresponde el id.

### 🔍 Editar clase

- **URL:** `/classes/id`
- **Método:** `PUT`
- **Acceso:** admin
- **Descripción:** Edita información de una clase.

### 🔍 Eliminar clase

- **URL:** `/classes/id`
- **Método:** `DELETE`
- **Acceso:** admin
- **Descripción:** Elimina la información de una clase.

## Asignaturas

### 🔍 Obtener asignaturas

- **URL:** `/subjects`
- **Método:** `GET`
- **Acceso:** logado
- **Descripción:** Devuelve una lista de todas las asignaturas disponibles.

### 🔍 Obtener asignatura por id

- **URL:** `/subjects/id`
- **Método:** `GET`
- **Acceso:** logado
- **Descripción:** Devuelve la asignatura a la que corresponde el id.

### 🔍 Editar asignatura

- **URL:** `/subjects/id`
- **Método:** `PUT`
- **Acceso:** admin
- **Descripción:** Edita información de una asignatura.

### 🔍 Eliminar asignatura

- **URL:** `/subjects/id`
- **Método:** `DELETE`
- **Acceso:** admin
- **Descripción:** Elimina la información de una asignatura.

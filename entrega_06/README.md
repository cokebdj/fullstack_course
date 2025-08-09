# 📡 API Pokemon

Esta API permite acceder a una base de datos de Pokemons y entrenadores con sus respectivos equipos de Pokemons.

## 📋 Endpoints

## Pokemon

### 🔍 Obtener pokemons

- **URL:** `/pokemons`
- **Método:** `GET`
- **Descripción:** Devuelve una lista de todos los Pokemon disponibles.

### 🔍 Obtener pokemon por id

- **URL:** `/pokemons/id/:id`
- **Método:** `GET`
- **Descripción:** Devuelve el Pokemon correspondiente al id facilitado.

### 🔍 Obtener pokemons por tipo

- **URL:** `/pokemons/type/:type`
- **Método:** `GET`
- **Descripción:** Devuelve una lista de todos los Pokemon disponibles con el tipo seleccionado.

### 🔍 Incluir un pokemon nuevo

- **URL:** `/pokemons`
- **Método:** `POST`
- **Descripción:** Genera un nuevo Pokemon en la base de datos.

### 🔍 Editar un pokemon existente

- **URL:** `/pokemons/:id`
- **Método:** `PUT`
- **Descripción:** Edita un Pokemon existente en la base de datos.

### 🔍 Eliminar un pokemon existente

- **URL:** `/pokemons/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un Pokemon existente en la base de datos.

## Entrenadores

### 🔍 Obtener entrenadores

- **URL:** `/trainers`
- **Método:** `GET`
- **Descripción:** Devuelve una lista de todos los entreandores disponibles.

### 🔍 Obtener entrenador por id

- **URL:** `/trainers/id/:id`
- **Método:** `GET`
- **Descripción:** Devuelve el entrenador correspondiente al id facilitado.

### 🔍 Incluir un entrenador nuevo

- **URL:** `/trainers`
- **Método:** `POST`
- **Descripción:** Genera un nuevo entrenador en la base de datos.

### 🔍 Editar un entrenador existente

- **URL:** `/trainers/:id`
- **Método:** `PUT`
- **Descripción:** Edita un entrenador existente en la base de datos.

### 🔍 Eliminar un entrenador existente

- **URL:** `/trainers/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un entrenador existente en la base de datos.

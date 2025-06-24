# Checklist de hitos del backend veterinaria

## ✅ Listo

- Inicialización del proyecto NestJS con estructura modular.
- Instalación y configuración de Prisma.
- Creación del esquema Prisma completo.
- Creación de archivo `.env.example` y `.env` para variables de entorno.
- Configuración de base de datos PostgreSQL en Docker (docker-compose).
- Ejecución de migraciones iniciales de Prisma.
- Generación de módulos, servicios y controladores para:
  - Productos
  - Categorías
  - Clientes
  - Mascotas
  - Imágenes de mascotas
  - Fichas médicas
  - Archivos de fichas médicas
  - Citas
  - Tipos de servicio
  - Cupones
- Implementación de DTOs y validaciones (`class-validator`) para todos los recursos principales.
- Integración de Prisma y endpoints CRUD completos para:
  - Productos (con paginación y filtros)
  - Categorías
  - Clientes (con paginación y búsqueda)
  - Mascotas
  - Imágenes de mascotas
  - Fichas médicas
  - Archivos de fichas médicas
  - Citas
  - Tipos de servicio
  - Cupones
- Pruebas e2e funcionales y aisladas para productos y clientes (con datos únicos en cada ejecución).
- Modelo y migración de usuarios de plataforma (User, UserRole).
- Módulo, servicio y controlador de usuarios.
- Módulo, servicio y controlador de autenticación (`auth`).
- Registro y login JWT listos para pruebas.

## ⬜️ Pendiente

- Manejo de imágenes y archivos (Multer).
- Sistema de roles y permisos.
- Documentación Swagger.
- Seeds de datos de ejemplo.
- Pruebas de integración para otros recursos.
- Manejo global de errores y logs.
- Configuración de CORS y validación global.
- Dockerfile para el backend.
- Instrucciones completas en README.

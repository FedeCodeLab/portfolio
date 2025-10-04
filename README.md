# 🚀 Portfolio Personal - Federico Guzmán

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

</div>

## 📋 Descripción

Portfolio personal moderno y minimalista desarrollado con las últimas tecnologías de frontend. Diseñado para mostrar proyectos, habilidades y experiencia profesional de forma atractiva e interactiva.

## ✨ Características

- ⚡ **Rendimiento Optimizado**: Desarrollado con Next.js 15 y React 19
- 🎨 **Animaciones Fluidas**: Implementadas con Framer Motion
- 📱 **Diseño Responsive**: Adaptado a todos los dispositivos
- 🎯 **Smooth Scroll**: Navegación suave con Lenis
- 🌊 **Lazy Loading**: Carga optimizada con Intersection Observer
- 💅 **UI Moderna**: Estilizado con Tailwind CSS 4 y DaisyUI
- ⚡ **Typewriter Effect**: Animaciones de texto con react-type-animation
- 🎭 **Componentes Reutilizables**: Arquitectura escalable con class-variance-authority

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.2
- **Library**: React 19.0.0
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4 + DaisyUI 5

### Animaciones & UX
- **Framer Motion**: Animaciones y transiciones
- **Lenis**: Smooth scroll natural
- **React Intersection Observer**: Detección de visibilidad de elementos
- **React Type Animation**: Efectos de escritura

### UI Components
- **Radix UI**: Componentes accesibles (Slot)
- **Class Variance Authority**: Variantes de componentes
- **Tailwind Variants**: Estilos dinámicos
- **clsx**: Manejo de clases CSS

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 20.x o superior
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/FedeCodeLab/NewPortfolio.git
cd NewPortfolio
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

4. **Abrir en el navegador**

Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Crea la build de producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter para encontrar problemas
```

## 📁 Estructura del Proyecto

```
NewPortfolio/
├── public/              # Archivos estáticos (imágenes, fonts, etc.)
├── src/
│   ├── app/            # App Router de Next.js
│   ├── components/     # Componentes reutilizables
│   ├── lib/           # Utilidades y helpers
│   └── styles/        # Estilos globales
├── .gitignore
├── next.config.ts      # Configuración de Next.js
├── package.json        # Dependencias y scripts
├── postcss.config.mjs  # Configuración de PostCSS
├── tailwind.config.ts  # Configuración de Tailwind CSS
└── tsconfig.json       # Configuración de TypeScript
```

## 🎨 Características de Diseño

- **Animaciones Personalizadas**: Transiciones suaves entre secciones
- **Scroll Parallax**: Efectos visuales al hacer scroll
- **Hover Effects**: Interacciones visuales al pasar el mouse
- **Lazy Loading**: Carga diferida de imágenes y componentes
- **Dark Mode Ready**: Preparado para modo oscuro
- **Optimización de Fuentes**: Uso de next/font para optimizar carga

## 🌐 Despliegue

### Vercel (Recomendado)

La forma más sencilla de desplegar este proyecto es usando [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente Next.js
3. ¡Deploy automático en cada push!

### Otras Plataformas

- **Netlify**: Compatible con builds de Next.js
- **Railway**: Deployment con configuración automática
- **AWS Amplify**: Para infraestructura en AWS

## 🔧 Personalización

### Colores y Tema

Edita `tailwind.config.ts` para personalizar los colores y el tema:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Componentes

Los componentes están diseñados para ser reutilizables y fáciles de modificar. Cada componente sigue las mejores prácticas de React y TypeScript.

## 📚 Recursos y Documentación

- [Next.js Documentation](https://nextjs.org/docs) - Documentación oficial de Next.js
- [React Documentation](https://react.dev) - Documentación oficial de React
- [Tailwind CSS](https://tailwindcss.com/docs) - Documentación de Tailwind
- [Framer Motion](https://www.framer.com/motion/) - Guía de animaciones
- [TypeScript](https://www.typescriptlang.org/docs/) - Documentación de TypeScript

## 👨‍💻 Autor

**Federico Guzmán**
- GitHub: [@FedeCodeLab](https://github.com/FedeCodeLab)
- Portfolio: [En desarrollo]

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

<div align="center">

**⭐ Si te gustó este proyecto, no olvides darle una estrella ⭐**

Hecho con ❤️ por Federico Guzmán

</div>

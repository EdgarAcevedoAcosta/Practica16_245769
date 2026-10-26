Preguntas:
Responder: ¿por qué se usa un contexto y no props para la sesión? Por que se estarian setiando por asi decir envez de primero comprobar si estan bien, aparte el usuario no debe de saber que tipo de dato se esta mandando 
Responder: ¿qué pasa si un componente usa la sesión fuera del proveedor? que daria error, por datos incompletos digo yo
Responder: ¿dónde se guarda el token y qué riesgo tiene ese lugar? se guarda en un useSesion en un hook, 
Comprobar en la pestaña Red que las peticiones llevan el encabezado Authorization y leer el token en jwt.io


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

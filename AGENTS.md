# AGENTS.md

## Git

Cada commit contiene exactamente un archivo. Confirma los archivos uno por uno, en secuencia, aunque pertenezcan a la misma tarea.

Para cada archivo pendiente:

1. Prepara solo ese archivo con `git add <ruta>`.
2. Crea el commit de ese archivo.
3. Continúa con el siguiente.

Si el área de preparación ya tiene más de un archivo, retira los demás con `git restore --staged <ruta>` y deja uno solo antes de confirmar.

No uses `git add .`, `git add -A` ni `git commit -a`.

Cuando el archivo se llama `README.md`, el mensaje del commit es siempre exactamente:

```
Update README file
```

Ese texto es fijo y no depende del diff. Aplica a cualquier ruta que termine en `README.md`, incluida `my-project/README.md`.

Cualquier otro archivo usa un mensaje propio, que describa solo ese archivo.

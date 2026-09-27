---
name: up-repo
description: >-
  Crea un commit por cada archivo pendiente, con git add de una sola ruta y
  git commit, según la sección Git de AGENTS.md. Se aplica solo cuando el
  mensaje del usuario contiene el trigger exacto up-repo.
---

# up-repo

Ejecuta esta skill solo si el mensaje del usuario contiene el trigger exacto `up-repo`.

No modifica código. Solo prepara y confirma los archivos que ya están pendientes.

La sección Git de `AGENTS.md` es la fuente de verdad. Si esta skill y `AGENTS.md` discrepan, manda `AGENTS.md`.

## Antes de confirmar

Ejecuta en paralelo:

- `git status`
- `git diff` (lo staged y lo unstaged)
- `git log -8 --oneline`

Si no hay archivos pendientes, no crees un commit vacío. Detente.

No incluyas secretos (`.env`, credenciales, llaves). Si uno está pendiente, avísalo y déjalo fuera.

No cambies la config de git. No uses `--no-verify` ni `--no-gpg-sign`. No hagas push. No uses `git commit --amend`.

## Un archivo por commit

Para cada archivo pendiente, en el orden en que `git status` los lista:

1. `git add <ruta>` con esa ruta solamente.
2. Si el índice tiene más de un archivo, `git restore --staged <ruta>` en los demás hasta dejar uno solo.
3. Crea el commit de ese archivo con el mensaje en HEREDOC.
4. Continúa con el siguiente archivo.

Prohibido: `git add .`, `git add -A`, `git commit -a`.

## Mensaje

Si la ruta termina en `README.md` (también `my-project/README.md`), el mensaje es exactamente:

```
Update README file
```

Ese texto es fijo y no depende del diff.

Cualquier otro archivo usa un mensaje propio, de una o dos frases, que describa solo ese archivo.

```bash
git commit -m "$(cat <<'EOF'
Mensaje aquí.

EOF
)"
```

## Cierre

Al terminar, ejecuta `git status` y comprueba que cada commit quedó creado y que el índice no mezcla archivos.

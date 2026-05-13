#!/usr/bin/env bash
# setup.sh — instala e prepara os 4 apps de infectologia.
# Uso: bash setup.sh
set -euo pipefail

echo "==> Extraindo tarballs..."
for f in *.tar.gz; do
  echo "    $f"
  tar -xzf "$f"
done

echo
echo "==> Verificando dependencias..."
need() { command -v "$1" >/dev/null 2>&1 || { echo "FALTA: $1 nao encontrado"; FALTA=1; }; }
FALTA=0
need python3
need node
need npm
need git
if [ "${FALTA:-0}" -ne 0 ]; then
  echo
  echo "Instale com: brew install python@3.11 node git"
  exit 1
fi
echo "    ok"

setup_python() {
  local dir="$1"
  echo
  echo "==> Setup Python: $dir"
  cd "$dir"
  if [ ! -d .venv ]; then
    python3 -m venv .venv
  fi
  # shellcheck source=/dev/null
  source .venv/bin/activate
  pip install --quiet --upgrade pip
  pip install --quiet -r requirements.txt
  if [ -f .env.example ] && [ ! -f .env ]; then
    cp .env.example .env
    echo "    .env criado a partir de .env.example (edite se precisar)"
  fi
  deactivate
  cd ..
}

setup_python cockpit-infecto
setup_python radar-evidencias
setup_python atualizador-protocolos

echo
echo "==> Setup Node: hospital-virtual-infecto"
cd hospital-virtual-infecto
npm install --silent
if [ ! -f .env.local ] && [ -f .env.example ]; then
  SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
  sed "s|AUTH_COOKIE_SECRET=gerar-32-bytes-aleatorios|AUTH_COOKIE_SECRET=${SECRET}|" .env.example > .env.local
  echo "    .env.local criado. Edite e ponha sua ANTHROPIC_API_KEY e APP_PASSWORD."
fi
cd ..

cat <<'EOF'

==========================================================
TUDO PRONTO. Para rodar cada app:

  cd ~/infecto/cockpit-infecto       && ./run.sh
  cd ~/infecto/radar-evidencias      && ./run.sh   # antes: edite .env e ponha NCBI_EMAIL
  cd ~/infecto/atualizador-protocolos && ./run.sh
  cd ~/infecto/hospital-virtual-infecto && npm run dev   # antes: edite .env.local

Streamlit abre em  http://localhost:8501
Next.js abre em    http://localhost:3000
==========================================================
EOF

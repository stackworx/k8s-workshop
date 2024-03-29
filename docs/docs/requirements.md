---
title: Requirements
---

import useBaseUrl from '@docusaurus/useBaseUrl';

### Tools

- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [docker for mac/windows](https://docs.docker.com/docker-for-windows/install/) with kubernetes enabled
- [helm](https://helm.sh/docs/intro/install/)
- [Krew](https://krew.sigs.k8s.io/docs/user-guide/setup/install/)

### Enable Docker Kubernetes

Click on the docker tray icon and select Preferences

1. Select Kubernetes
2. Click Enable
3. Click Apply and Restart

<img alt="Enabling Kubernetes" src={useBaseUrl('img/enable-docker-kubernetes.png')} />;

### Mac

```bash
# Install kubectl
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl"

# Install helm
brew install helm

# Install Krew
(
  set -x; cd "$(mktemp -d)" &&
  OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
  ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')" &&
  KREW="krew-${OS}_${ARCH}" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/${KREW}.tar.gz" &&
  tar zxvf "${KREW}.tar.gz" &&
  ./"${KREW}" install krew
)
# Add krew to PATH
export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"
```

### Kubernetes Plugins

```bash
kubectl krew update
kubectl krew install ctx
kubectl krew install ns
kubectl krew install tail
kubectl krew install view-secret

```

### Quality of Life

```bash
alias k=kubectl
```

### Check list (These should all work)

```bash
kubectl cluster-info
kubectl krew search
helm version
```

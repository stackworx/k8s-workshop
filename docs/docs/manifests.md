---
title: Manifests
---

Kubernetes is configured mostly via `yaml` files often referred to as manifests

### Type

```yaml
apiVersion: v1
kind: Pod
```

### Metadata

### Basic

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
```

### More Complicated

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
  namespace: myapp
   annotations:
    # Often used to embed data
    imageregistry: "https://hub.docker.com/"
  labels:
    # Often used to organize or query resources
    app.kubernetes.io/name: myapp
```

## References

- [Kubernetes API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/)
- [Attaching Metadata](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#attaching-metadata-to-objects)

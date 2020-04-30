---
title: Pods
---

### Pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: echo
  labels:
    app: echo
spec:
  containers:
    - name: echo
      image: k8s.gcr.io/echoserver:1.4
```

### Exercise

Save the file content above in a file named `pod.yaml`

```bash
k apply -f pod.yaml
k get pods
k get events
k describe pod echo
k logs -f echo
```

### Adding a port

```bash
k delete pod echo
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: echo
  labels:
    app: echo
spec:
  containers:
    - name: echo
      image: k8s.gcr.io/echoserver:1.4
      ports:
        - name: web
          containerPort: 8080
          protocol: TCP
```

### Useful Pod Commands

#### Logs

```bash
k logs -f <pod>
```

#### Port Forward

```bash
k port-forward echo 8080:8080
```

#### Get Shell into container

```bash
k exec -it echo bash
```

### References

- https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#pod-v1-core

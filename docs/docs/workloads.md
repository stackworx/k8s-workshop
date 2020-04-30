---
title: Workloads
---

### Pods are Ephemeral

If a pod dies it will not be re-scheduled
For that we turn to `Controllers` that generate pods

#### Controllers

- Deployments
- Replica Set
- Daemon Set
- Statefulset
- Jobs

### Sample Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-deployment
  labels:
    app: echo
spec:
  replicas: 1
  selector:
    matchLabels:
      app: echo
  template:
    metadata:
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

Create a file named `deployment.yaml` with the above contents

```bash
k apply -f deployment.yaml
k delete pod echo-deployment-xxxxx
k port-forward deployment/echo-deployment 8080:8080
k scale deployment/echo-deployment --replicas=5
k get endpoints echosvc
```

### References

- https://kubernetes.io/docs/concepts/workloads/
- https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/
- https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#deployment-v1-apps

---
title: Services, Load Balancing, and Networking
---

```yaml
apiVersion: v1
kind: Service
metadata:
  name: echosvc
spec:
  selector:
    app: echo
  ports:
    - protocol: TCP
      port: 9090 # Published Port
      targetPort: 8080 # Exposed port in the container
```

### Exercise

Save the above content in a file name `svc.yaml` and run

```bash
k apply -f svc.yaml
k port-forward service/echosvc 9090:9090
kubectl get endpoints echosvc
```

### Change the service type

#### NodePort

```yaml
apiVersion: v1
kind: Service
metadata:
  name: echosvc
spec:
  type: NodePort
  selector:
    app: echo
  ports:
    - protocol: TCP
      port: 9090 # Published Port
      targetPort: 8080 # Exposed port in the container
      # By default and for convenience, the Kubernetes control plane will allocate a port from a range (default: 30000-32767)
      nodePort: 30007
```

#### LoadBalancer

```yaml
apiVersion: v1
kind: Service
metadata:
  name: echosvc
spec:
  type: LoadBalancer
  selector:
    app: echo
  ports:
    - protocol: TCP
      port: 9090 # Published Port
      targetPort: 8080 # Exposed port in the container
```

### Ingress

### References

- https://kubernetes.io/docs/concepts/services-networking/service/#service-resource
- https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/
- https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

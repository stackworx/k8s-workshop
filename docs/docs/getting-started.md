---
title: Getting Started
---

Make sure you have completed the [requirements](requirements.md) first

## Connect to the cluster

```bash
k cluster-info
```

#### Example Output

```
Kubernetes master is running at https://12345.ondigitalocean.com
CoreDNS is running at https://12345.k8s.ondigitalocean.com/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

```

## View Nodes

```bash
k get nodes
k get nodes -o wide # show extra info
```

#### Example Output

```
NAME                  STATUS   ROLES    AGE    VERSION
pool-3puojptkz-agmg   Ready    <none>   164d   v1.16.2
```

## View Pods

```bash
k get pods
```

#### Example Output

```
NAME                                   READY   STATUS      RESTARTS   AGE
stackbot-web-public-5db749894f-bvd78   1/1     Running     0          2d10h
stackbot-web-server-1587960900-6f2ms   0/1     Completed   0          3d14h
stackbot-web-server-fb945fd4b-xlcvp    1/1     Running     0          2d10h
```

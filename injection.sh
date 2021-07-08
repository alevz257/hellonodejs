#!/bin/bash

export TEMPVALUE=$(kubectl -n istio-system get pods -l app=istiod -o yaml | awk '$1=="istio.io/rev:" {print $2}')
export REVVALUE=$(echo $TEMPVALUE | head -n 1)
echo $REVVALUE
export KUBECMD="kubectl label namespace hello-3 istio-injection- istio.io/rev=$TEMPVALUE --overwrite"
echo $KUBECMD

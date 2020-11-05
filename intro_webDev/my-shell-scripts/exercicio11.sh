#!/bin/bash

DIRETORIO=$1
EXTENSAO=$2
DIA=$(date +%F)

cd $1
for ARQUIVO in *.$2 ; do
    echo "Renomeando $ARQUIVO para $DIA-$ARQUIVO"
    mv $ARQUIVO $DIA-$ARQUIVO ; done

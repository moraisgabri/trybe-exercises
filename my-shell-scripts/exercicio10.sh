#!/bin/bash
DIA=$(date +%F)
for ARQUIVO in *.png ; do
    mv $ARQUIVO $DIA-$ARQUIVO ; done
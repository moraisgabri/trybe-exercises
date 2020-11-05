#!/bin/bash

CAMINHOS=$@
for ARQUIVOS in $CAMINHOS; do
    if [ -f "$ARQUIVOS" ] ; then
        echo 'É um arquivo normal.'
    elif [ -d "$ARQUIVOS" ] ; then
        echo 'É um diretório.'
        ls -l $ARQUIVOS
    else
        echo 'É um outro tipo de arquivo.'
    fi ; done
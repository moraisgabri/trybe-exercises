#!/bin/bash

ARQUIVO="/home/moraisgabri/unix_tests/shellscriptests/file.txt"
if [ -e "$ARQUIVO" ] ; then
echo "O caminho $ARQUIVO está habilitado"
fi
if [ -w "$ARQUIVO" ] ; then
echo "Você tem permissão para editar"
else
echo "Você NÃO foi autorizado a editar"
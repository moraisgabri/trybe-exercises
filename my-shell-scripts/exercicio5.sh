echo 'Digite o caminho: '
read CAMINHO
if [ -f "$CAMINHO" ] ; then
echo 'É um arquivo normal.'
elif [ -d "$CAMINHO" ] ; then
echo 'É um diretório.'
else
echo 'É um outro tipo de arquivo.'
fi
ls -la $CAMINHO
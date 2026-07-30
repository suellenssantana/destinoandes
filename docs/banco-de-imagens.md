# Banco de imagens Guia Chile

As imagens prontas para o site ficam em `public/images/library`. Todas usam
WebP, têm até 1920 px no maior lado e conservam a proporção original.

O arquivo `public/images/library/manifest.json` lista:

- caminho público (`src`);
- texto alternativo (`alt`);
- tema principal e temas relacionados;
- etiquetas de busca;
- orientação;
- largura e altura.

Para atualizar o banco, extraia o arquivo recebido e execute:

```sh
npm run media:import -- /caminho/para/o/diretorio-extraido
```

O importador ignora vídeos, remove duplicatas exatas e recria o catálogo com
nomes previsíveis. Os vídeos continuam preservados no arquivo de origem.

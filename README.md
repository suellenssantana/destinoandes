# Destino Andes

Plataforma multidestino da Destino Andes para Chile, Peru e Argentina, criada com Next.js, React, TypeScript e CSS responsivo.

## Experiências disponíveis

- homepage institucional em `/`;
- páginas de país em `/chile`, `/peru` e `/argentina`;
- seletores persistentes de país e idioma (PT, ES e EN);
- catálogo chileno em `/chile/passeios`;
- filtros por categoria, duração, modalidade, temporada e faixa de preço;
- 14 páginas individuais de passeios;
- blog em `/blog` com seis guias e páginas individuais;
- contato em `/contato`, com formulário conectado ao WhatsApp;
- newsletter, redes sociais e seletores no footer;
- botão persistente de WhatsApp;
- páginas `/chile/como-funciona` e `/chile/faq`;
- preços centralizados em `app/data.ts`.

## Rodar localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

## Personalização

- Tours e preços: `app/data.ts`
- Artigos: `app/blog/data.ts`
- Número de WhatsApp: `WHATSAPP_NUMBER` em `app/components.tsx`
- E-mail e telefone: `app/contato/page.tsx`
- Redes sociais: `Footer` em `app/components.tsx`
- Estilos: `app/globals.css`
- Logo: `public/logo-destino-andes.png`
- Fotografias: `public/images/tours`

Antes da publicação comercial definitiva, substitua:

- WhatsApp demonstrativo `56900000000`;
- telefone `+55 11 4000-0000`;
- e-mail `ola@destinoandes.com`, caso não seja o endereço oficial;
- links `#` das redes sociais;
- metadado `metadataBase` pelo domínio oficial.

As páginas de Peru e Argentina já possuem arquitetura editorial e CTAs, mas estão identificadas como catálogo em expansão para não apresentar serviços ainda não cadastrados.

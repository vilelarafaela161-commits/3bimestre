# Hello Friends - Atividade Firebase

Aplicativo React Native com Expo, React Navigation, Firebase Authentication e Cloud Firestore.

## CRUD até o U
- Create: Cadastro cria a conta e salva nome, email e personagem favorito na coleção `usuarios`.
- Read: Perfil consulta os dados do usuário autenticado.
- Update: Editar altera nome e personagem favorito.

Telas: Login, Cadastro, Home, Perfil, Editar e Sobre.

## Como rodar
`npm install`

`npm run web`

Authentication deve estar com E-mail/senha habilitado. O Firestore precisa permitir que usuários autenticados criem, leiam e atualizem seu próprio documento em `usuarios/{uid}`.

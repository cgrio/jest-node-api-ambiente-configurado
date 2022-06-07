# Facebook Autenticação

## Fluxo Principal
1. Obter Dados (#BD01)[Dados Api] do Facebook
2. Consultar se existe usuário na base com o email recebido acima
3. Criar uma conta para o usuário com os dados recebido do Facebook
4. Criar um token de acesso, a partir do ID do usuário, com expiração de 30 minutos
5. Retornar o token de acesso gerado

## Fluxos Alternativos
### Usuário existente
1. Atualiar a conta do usuário com os dados recebido do Facebook (Facebook ID e nome - só atualizar o nome caso a conta do usuário não possua nome)

## Fluxos de Exceções
### Token inválido
1. Retornar um erro de autenticacao

## Blocos de Dados
[#BD01] Dados Login Facebook

| Campo |  Tipo  | Tamanho | Descricao |
| :---: | :----: | :-----: | :-------: |
| Nome  | String |   255   |           |
| Email | String |   255   |           |
| Senha | String |   255   |           |

[#BD02] Retorno API

| Campo |  Tipo  | Tamanho | Descricao |
| :---: | :----: | :-----: | :-------: |
| Nome  | String |   255   |           |
| Email | String |   255   |           |
| Token | String |   128   |           |

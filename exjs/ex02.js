<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex2 - JavaScript</title>
</head>
<body>
  <form name="cadastro" method="post" onSubmit="return validar()">
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" required><br>
    <label for="cpf">CPF</label>
    <input type="text" name="cpf" id="cpf" required><br>
    <label for="email">E-Mail</label>
    <input type="email" name="email" id="email"><br>
    <label for="senha">Senha</label>
    <input type="password" name="senha" id="senha"><br>
    <label for="confirm">Confirmar Senha</label>
    <input type="password" name="confirm" id="confirm"><br>
    <button type="submit">Cadastrar</button> <button type="reset">Limpar</button>
  </form>
</body>
<script src="../js/ex2.js"></script>
</html>
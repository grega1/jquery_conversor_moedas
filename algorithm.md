-- Criar uma página web que disponibilize:--
 * Uma drop lits, tag select que contenha uma lista de moedas;
 * Ao selecionar a moeda deve ser exibida a última cotação da moeda, a data e hora, os válores mínimos e máximos de fechamento do dia e o valor de fechamento;
 * Dois campos para definição de data de início e data de fim(date) para definir o período de obtenção de cotação desejada;
 * Um botão para que, quando o usuário clique receba as cotações do período selecionado pelo usuário.

 > A obtenção de dados de moedas deve ser pela API Pública:
 > endereço: https//docs.awesomeapi.com.br/api-de-moedas

Como fazer?
* Droplist com os valores da lista de moedas
 Fazer uma requisição Get para buscar a lista de moedas na Api.
 >endereço: https://economia.awesomeapi.com.br/json/all
 A requisição irá retornar um objeto no formato(JSON), que irá conter um atributo nome.
 Criar um laço de repetição(ForEach ou map) para capturar todos os nomes disponíveis e adicionálos no html.(Aqui a cada iteração adicionar uma opção no select do html)
 OK
 
 * Mostrar os dados referentes a moeda selecionada;
 Depois que alimentar a drop list, será necessário integrá-la ao dados da nova requisição.
 endereço: > https://economia.awesomeapi.com.br/last/:moedas(aqui vai o parâmetro);
 Criar um um laço de repetição que vai receber um parâmetro(que vai na url da requisição) e, vai mostrar na tela o que foi pedido no caso as variáveis:
 Valor mínimo e valor máximo do fechamento do dia , data, hora, ultima cotação, valor de fechamento; 
 OK
 * Dois campos para definir o período;
 Criar dois inputs no html type = date, inputs normalmente devolvem valor como strings, será necessário receber esse valor, armazenar em duas variáveis distintas e formatá-las.
 No formato YYYYMMDD, o value do date retorna ex= 2017-06-14, será necessário tirar esse -, como podemos fazer? utilizar o join. variável.join('-');
 Verificar se será necessário dar um parse para number ou se pode deixar como string

 * Botão que irá exibir na tela;
 Esse botão será responsável por fazer um Get, enviando os parâmetros:
 >> nome da moeda(variável da moeda seleciona), dia de inicio(variável que via receber o valor do input de inicio), dia de fim(variável que vai receber o valor do input do fim);
 e passar no seguinte endereço:
 https://economia.awesomeapi.com.br/json/daily/(variável nome da moeda)/?start_date={value do input inicio }&end_date={value do input fim};
 Vai pegar as informações desse get e imprimir num parágrafo da tela






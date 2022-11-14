    Esta aplicação foi desenvolvida para marcar reuniões específicas para um serviço.A chamaremos de meetingServices.

    A meetingServices foi desenvolvida com o propósito de receber requisições através do body, com as informações básicas necessárias para marcar uma reunião com o cliente. Para que a reunião ocorra com sucesso é necessário que os serviços do cliente estejam disponíveis , sendo assim, a meetingServices receberá as informações de quem deseja este serviço a data e o horário, caso a data e o horário não estejam disponíveis retornará um conflito.

Funcionalidades:

    É importante lembrar que dentro da meetingServices serão feitas requisições apenas através do body. Seguiremos um passo a passo de como utilizar cada rota disponível.

rota : /services
1- post: registra os serviços enviados pelo body no formato a seguir,
    {
        name: ‘name’
        price: ‘00.00’
    }
estes serviços terão o seu id como referência para utilizações futuras

2-get: lista os serviços disponíveis retornando um array de objetos no formato:
    {
        id: 1
        name: ‘name’
        price: ‘00.00’
    }
3-delete: deleta o serviço com o id referente, no formato:
    {
        id: 1
    }


rota: /
1- post: meetingServices recebe um objeto contendo as informações básicas do usuário:
    {
        name: ‘name’
        cell: 79900001111
    }
onde name deve ser string e conter no mínimo 3 caracteres e cell  deve ser do tipo number
contendo no mínimo 11 caracteres.


rota: /meeting
1-  post: meetingServices receberá um body contendo o id do usuário e o id do serviço ambos devendo ser do tipo number, contendo também a data da reunião podendo ser qualquer formato de data e a hora da reunião no formato HH:MM
    {
        "userId": 5,
        "date": "2023/10/05",
        "hour": "10:10",
        "serviceId": 4
    }
é importante saber que horários anteriores á 8:00h e superiores á 17:30h não serão válidos incluindo um intervalo de horas das 11:30h-13:00h

2- get: retorna os dados da reunião e serviço
    {
        "user": "joana",
        "service": "pintar cabelo",
        "price": 5990000,
        "date": "2022-11-15T03:00:00.000Z",
        "hour": "15:30:00",
        "cell": "79900001111"
    },


3- delete: recebe um body contendo o id da reunião e o id do usuário em questão,
    {
        id: 8
        "userId": 5,
    }
caso o usuário que esteja solicitando a deleção não seja o criador da reunião ela não poderá ser deletada

4-put: meetingsServices recebe um body no formato
    {  
        "id": 2
        "userId": 5,
        "date": "2023/10/05",
        "hour": "10:10",
        "serviceId": 5
    } 
sendo id o id da reunião, caso o usuário não seja o cirador da reunião não poderá edita-la


Ao clonar o projeto existe um arquivo chamado dump  que foi criado a partir do postgresql, para resgatar as tabelas existem duas formas, entrar no postgres através do comando sudo -i -u postgres e em outra aba do terminal navegar até o diretório onde está o arquivo de dump e executar o comando : psql nome_banco < dump.sql. ou abrir o próprio arquivo copiar tudo (ctrl+A) e colar no postgres.
 

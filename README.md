# node, processing & p5.js

Esse repositório destina-se a divulgação sobre o uso de Node JS e das bibliotecas de JavaScripts p5 e processing. Para isso,  são apresentados alguns exemplos em três níveis de entendimento _básico_, _intermediário_ e _avançado_.

## Requisitos
- **npm - Node Package Manager** 

Facilita o processo de desenvolvimento em JavaScript permitindo que desenvolveres compartilhem e usem pacotes de código fonte de uma forma simples. Para maiores informações acesse o link sobre o [npm](https://www.npmjs.com/get-npm). 

A instalação do npm é incluída no pacote básico do node. Para isso, verifique a distribuição que está sendo usado e execute a instalação apropriada. Veja o link de referência [nodesource](https://github.com/nodesource/distributions/blob/master/README.md)

Por exemplo, para a instalação em sistemas Ubuntu e Debian faça:
````
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_11.x | bash -
apt-get install -y nodejs
````

- **nvm - Node Version Manager** 

Node Version Mamanger é um bash script usado para gerenciar multiplas versões do Node.js. Ele permite que você realize operações como instalação, desinstalação, mudança de versão e etc. Para inslatar p mvn use o script [install](https://github.com/creationix/nvm#install-script)

````
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
````

- **nodejs**

Node é um ambiente em tempo de execução (_runtime_) JavaScript assíncrono. Desenvolvido com a proposta de ser um ambiente de desenvolvimento __server-side e/ou client-side__ para aplicações escaláveis via rede. Em geral, isso pode ser entendido como a captura da mensagem "Hello world" concorrentemente. Nesse caso, cada conexão estabelecida negocia a resposta para o evento "Hello world" através de uma chamada de **callback** que é disparada executando algum tipo de computação. Mas se não houver nada a ser processado, o Node ficará na espara de algum outro evento não bloqueando a ação para exibir a mensagem.

Esse modelo de comunicação do Node é diferente do modelo atual baseado em threads tipicamente usados em Sistemas Operacionais (SOs). Um ambiente baseado em Threads é ineficiente, pois apresenta problemas como _dead-locking_ em função da concorrência inerente entre os processos necessária para o bloqueio ou não de determinada tarefa.

Destaca-se que o Node possui como design elementos de _First-Class HTTP_ visando a baixa latência e o _streaming_ de dados - nesse caso, apropriados para frameworks e libs para web.

Embora seja um ambiente orientado a eventos e single thread o Node ainda propenso a alguns problemas relativos ao mau uso de callbacks. Nesse caso, quando usada de forma inapropriada i.e., em forma de cadeias (ou chamadas aninhadas) levando a infraestrutura do Node sofrer do fenômeno conhecido como _Callback Hell_. Para isso, algumas diretrizes para evitar o _Callback Hell_ vem sendo implemetadas e recomendas pela comunidade [Evitando Callback Hell](https://ciphertrick.com/2016/06/12/avoiding-callback-hell-node-js/)

- **processing**

_Processing_ é um software que permite a criação, estudo e o _design_ de formas visuais, movimentos e interação. Nele integra-se, uma linguagem de programação (com conceitos de Java e C), um ambiente de desenvolvimento e uma metodologia de desenvolvimento em um ambiente unificado. _Processing_ foi elaborado para ensinar conceitos de programação de computadorres com um contexto visual, para servir como uma folha de desenhos (_sketchbook_) e para ser usado como uma ferramenta de produção. 

Para apreender mais acesso o handbok em [cmuems](http://cmuems.com/resources/processing_a_handbook.pdf)

> The computer programming is more than a technique issue, it is art. [D. Knuth in _Art of Computer Programming_](http://www.paulgraham.com/knuth.html)


- **p5.js**

**p5.js** é uma biblioteca em JavaScript inspirada nos objetivos gerais de _Processing_ - i.e., possibilitar a criação de código acessível para artistas, designers, educadores e iniciantes - e pessoas que desejam aprender programação de uma forma diferente sobretudo na web.

Uma ampla visão sobre o uso de p5.js pode ser obtida no [overview](https://github.com/processing/p5.js/wiki/p5.js-overview)

- **http-server**

**http-server** é um pacote adicional que pode ser adicionado via `npm` para iniciar um servidor em Node.js. Para isso, siga os passos disponíveis no link [Node como Local Server](https://github.com/processing/p5.js/wiki/Local-server)

- **live-server**

**live-server** é um pacote que permite adicionar um servidor com capacidade de _reload_ para o processo de desenvolvimento de software local. Nesse caso, o servidor ao detectar alguma alteração realiza o reload da página (HTML/CSS) sem a necessidade de se percorrer toda a estrutura de ojetos DOM.

- **browser-sync**



## Links
- [Processing](https://processing.org/)
- [p5.js](https://p5js.org/)
- [Processing Foundation](https://github.com/processing)

## Demos
### Básico
- [Exemplo inicial de p5.js -- Demo - 1](p5-demo1/)
- [Demo - 2](p5-demo2/)


### Intermediário

### Avançado

### Licence

The code is available at GitHub under the MIT license.


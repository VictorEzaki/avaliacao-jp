# avaliacao-jp
Repositório da prova de git


git --version
Comando para verificar a versão do git instalado

<!-- comandos de configurações de usuário -->
git config --global user.name "nomeExemp"
Comando para configurar o nome do usuário

git config --global user.email "exemp@gmail.com"
Comando para atribuir o email ao usuário

<!-- Configuração da chave SSH -->
ls -al ~/.ssh
Serve para verificar se uma chave SSH ja existe

ssh-keygen -t ed25519 -C "your_email@example.com"
Serve para gerar uma chave SSh

eval "$(ssh-agent -s)"
Comando para inicializar o agente SSH

ssh-add ~/.ssh/id_ed25519
Este comando irá adicionar a chave SSH gerada anteriormente ao agente iniciado

clip < ~/.ssh/id_ed25519.pub
Comando para copiar a chave SSH vinculada a máquina

Github -> Settings -> SSH and GPG keys -> New SSH key -> Colar
*Coloque um título que identifique a chave*
Ex: SENAC-SALA-206-PCXPTO
Após a chave já gerada e adicionada em sua máquina, precisamos adiciona-lá ao github, seguindo os diretórios acima

ssh -T git@github.com
E por último, podemos testar a conexão da chave com o comando acima, que em seguida irá perguntar se tem certeza da ação.
apenas digite "yes"

<!-- outros comandos Git -->
git clone
Serve para clonar um repositório do github para vincular à sua máquina

git init
Comando que servirá para iniciar um repositório localmente em sua máquina

git status
Retorna os status dos arquivos do repositório, alternando entre "changes" e "staged changes"

git add <filename ou . >
Adciona todos os arquivos alterados para staged changes (protos para o commmit) se usado o "." no final
Podemos também especificar o arquivo que queremos subir apenas colocando o nome do mesmo no lugar do ponto 

git rm --cached <file> 
Serve para remover arquivos que ja foram commitados

git restore --staged <filename ou . >
Restaura os arquivos da área de trabalho

git branch
Lista todas as branch locais existentes

git checkout <branchname>
Navega entre as branches

git checkout -b <branchname>
Verifica se ja existe uma branch com o mesmo nome, caso não, ele irá criar uma nova branch e alterar para ela

git commit -m "<description>"
Comando para commitar as alterações feitas nos arquivos

git push
Irá enviar o commir efetuado para o github

git branch -D <branchname>
Comando para deletar uma branch

git fetch
Atualiza o seu repositório local com o do github, baixando tudo o que há de novo sem mesclar com a branch atual

git pull
Atualiza o seu repositório local com o do github, baixando tudo o que há de novo e mesclando com a branch atual

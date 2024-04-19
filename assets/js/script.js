const respositories = document.querySelector('.conteudo-main');

function getApiGithub(){
    fetch('https://api.github.com/users/chagasfilho007/repos')
        .then(async res => {
            if( !res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            data.map( item => {
                let projeto = document.createElement('div');

                projeto.innerHTML = `
                <div class="projeto">
                    <div>
                        <h4 class="titulo">${ item.name}</h4>
                        <span class="data-criada">${ Intl.DateTimeFormat('pt-br').format(new Date(item.created_at)) }</span>
                        </div>
                        <div>
                        <a href="${ item.html_url}" target="_blank">${ item.html_url}</a>
                        <span class="linguagem"><samp class="circulo"></samp>${ item.language}</span>
                    </div>
                </div>
                `

                respositories.appendChild(projeto);
            })
        })
}

getApiGithub()
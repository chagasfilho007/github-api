const respósitorios = document.querySelector('.conteudo-main')

function getApiGithub(){
    fetch('https://api.github.com/users/chagasfilho007?tab=repositories')
    .then(async res => {
        if( !res.ok){
            throw new Error(res.status)
        }

        let data = await res.json()
        data.map(item => {
            let project = document.createElement('div')

            project.innerHTML = `teste`

            respositories.appendChild(project);
        })
    })
}

getApiGithub();
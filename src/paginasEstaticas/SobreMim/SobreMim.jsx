import { Link } from 'react-router-dom';

import './SobreMim.css';

export default function SobreMim() {
    return (
        <section className="about-me">
            <div className="text-content-primary">
                <h2 className="title">Minha Historia</h2>
                <p>Nascido em 2005, em Sorriso - MT, vim para o Mato Grosso do Sul ainda bem novo e moro aqui até hoje, em Naviraí, atualmente eu tenho 18 anos e estou a procura de trabalhos na area de Programação.</p>
                <p>Eu me interesso por Ciencias exatas, física e matemática, mas especialmente física, se eu não tivesse seguido a área do desenvolvimento, eu com certeza seria físico, deslumbrar o nosso tamanho em relação ao cosmos e o tamanho de particulas em relação a nós é algo que sempre me encantou, em 2022 escrevi um trabalho de conclusão de curso que combinava a ciência da física quantica com a matemática da computação, o trabalho pode ser lido clicando <Link to="https://docs.google.com/document/d/1ZG-nWm1pUJZLKcDm9EbTw8d_6XVBsMkUJOJcy2yHRkE/edit?usp=sharing">Aqui</Link></p>
              </div>

              <div className="text-content-primary">
                <h2 className="title">Minha relação com a programação</h2>
                <p>Desde muito jovem eu sempre tive contato com computadores e sempre me interessei, quando criança eu já brincava de editar o HTML de paginas de noticias ou do Youtube para enganar as pessoas, isso foi algo que me fez ir atrás de como aquilo funcionava, como eu estava fazendo aquela edição ou o que eram aquelas Tags.</p>
                <p>Por ser criança na epoca, eu nao levei a fundo, porem em 2019 quando eu tinha 14 anos, eu voltei a estudar aquilo e me aprofundar mais em HTML e CSS, na epoca eu nao sabia o que era o JavaScript, apenas HTML e CSS e para mim já era o suficiente, eu conseguia criar paginas simples mas aquela experiencia seria essencial na minha Jornada de Dev.</p>    
                <p>Em 2020 eu entrei no Instituto Federal cursando o Ensino Médio, mas no IF você faz um curso técnico em paralelo ao ensino médio, e na minha cidade existem apenas duas opções, Agricultura ou Informática para Internet, eu fiz Informática para Internet, e é nesse momento que a minha carreira começa de fato.</p>
                <p>Os meus primeiros projetos feitos em aula assim como os de todo mundo, um Hello World em uma linguagem de programação, ou uma pseudolinguagem, como foi o meu caso, usamos Visualg30, e depois Portugol Studio que pode-se entender que é uma versão "modernizada" do visualg, o primeiro <i>escreva("Ola Mundo")</i> me fez apaixonar naquilo em questão de segundos, eu tinha certeza do que queria para a minha vida</p>
                <p>Naquele mesmo ano a pandemia do COVID-19 começou o que fez as aulas precenciais pararem e ser tudo EAD, na minha opinião isso me ajudou muito, pois de março de 2020 até outubro de 2021, periodo em que as aulas precenciais ficaram suspensas, eu usei para estudar por conta propria programação, estudei praticamente tudo que eu podia, Javascript, Java, C++, C, Descobri um amor genuino por PHP e mesmo que hoje em dia muitos desenvolvedores criticam a linguagem eu sigo fazendo algumas coisas em PHP.</p>
                <p>Por fim, na graduação atualmente, curso Analise de Sistemas no mesmo Campus, porem agora eu posso ir mais alem e estudar coisas mais complexas e teóricas que na minha opinião é um ponto fraco meu, gosto de estudar tudo na prática mas a parte teórica fica defasada. </p>
            </div>

            <div className="soft-skills-cards">
                <h2 className='title'>Minhas Soft-skills</h2>

                <div className="cards">
                    <div className="card-single">
                        <img src='/assets/images/comunicacao.gif' />
                        <h4 className="card-title">Comunicação Eficiente</h4>
                    </div>

                    <div className="card-single">
                        <img src="/assets/images/quebra-cabeca.gif"/>
                        <h4 className="card-title">Resolução de Problemas</h4>
                    </div>

                    <div className="card-single">
                        <img src="/assets/images/trabalho-em-equipe.gif"/>
                        <h4 className="card-title">Trabalho em Equipe</h4>
                    </div>

                    <div className="card-single">
                        <img src="/assets/images/rotina.gif"/>
                        <h4 className="card-title">Proatividade</h4>
                    </div>

                    <div className="card-single">
                        <img src="/assets/images/ampulheta.gif"/>
                        <h4 className="card-title">Gestão de Tempo</h4>
                    </div>

                    <div className="card-single">
                        <img src="/assets/images/lider.gif"/>
                        <h4 className="card-title">Liderança</h4>
                    </div>
                </div>
            </div> 
        </section>
    )
}
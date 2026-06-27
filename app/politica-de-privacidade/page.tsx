import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade e Cookies",
  description:
    "Política de Privacidade e Cookies da Hemodoctor, em conformidade com a LGPD.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-28 sm:pt-36">
        <article className="prose prose-slate max-w-none prose-a:text-blue-700 prose-headings:tracking-tight">
          <h1>Política de Privacidade e Cookies</h1>

          <p>
            Esta Política de Privacidade e Cookies (“Política”) aplica-se a todos os usuários que
            interagem com a Hemodoctor, incluindo profissionais autorizados a utilizar o painel web,
            parceiros institucionais (hospitais, operadoras de saúde e laboratórios), visitantes do
            site institucional e quaisquer outros Titulares cujos dados sejam tratados nos
            respectivos ambientes.
          </p>
          <p>
            O objetivo desta Política é esclarecer quais informações são coletadas, como são
            utilizadas, com quem podem ser compartilhadas e quais são os direitos dos Titulares,
            sempre com base nos preceitos da LGPD.
          </p>
          <p>
            Nosso compromisso é oferecer uma experiência segura, transparente e responsável, com
            rigor técnico compatível com o setor de saúde e com as melhores práticas de proteção de
            dados.
          </p>

          <h2>1. Apresentação</h2>
          <p>
            A Hemodoctor desenvolve um Sistema de Suporte à Decisão Clínica (CDSS) determinístico,
            não autônomo e não diagnóstico, que não interpreta exames, mas sinaliza padrões
            laboratoriais com base em regras clínicas pré-estabelecidas. A Solução sempre requer
            avaliação e interpretação por profissional de saúde habilitado.
          </p>
          <p>
            Desse modo, por meio de uma API integrada aos sistemas já utilizados por hospitais,
            laboratórios e operadoras de saúde, a Hemodoctor processa parâmetros hematológicos, gera
            hipóteses técnicas e indicadores epidemiológicos. A Solução também pode incluir um painel
            web para visualização de métricas, análises agregadas e administração de usuários
            profissionais.
          </p>
          <p>
            Com atuação nacional e uma abordagem centrada em interoperabilidade, escalabilidade e
            boas práticas clínicas, a Hemodoctor se posiciona como parceira tecnológica de
            instituições que buscam inovação responsável, melhoria contínua e eficiência operacional
            em seus fluxos diagnósticos.
          </p>
          <p>
            No Tratamento de Dados Pessoais, a Hemodoctor atua como operadora, processando apenas
            dados anonimizados ou pseudonimizados fornecidos pelos parceiros de saúde. Todo o
            Tratamento ocorre conforme instruções do Controlador, respeitando rigorosamente a
            legislação aplicável, padrões elevados de segurança da informação e princípios de
            minimização, necessidade e finalidade legítima.
          </p>
          <p>
            Nosso compromisso é unir tecnologia e responsabilidade, fortalecendo a qualidade
            assistencial sem comprometer a privacidade, a segurança e a confidencialidade dos dados
            tratados.
          </p>

          <h2>2. Embasamento Legal</h2>
          <p>Esta política fundamenta-se nas seguintes legislações:</p>
          <ul>
            <li>Lei nº 13.709/2018: Lei Geral de Proteção de Dados (“LGPD”);</li>
            <li>Lei nº 12.965/2014: Marco Civil da Internet (“Marco Civil da Internet”);</li>
            <li>Lei nº 12.257/2011: Lei de Acesso à Informação (“Lei de Acesso à Informação”);</li>
            <li>Constituição Federal de 1988 (“CF/88”);</li>
            <li>Lei nº 10.406/2002: Código Civil (“Código Civil”);</li>
            <li>Lei nº 8.069/1990: Estatuto da Criança e do Adolescente (“ECA”);</li>
            <li>Lei nº 8.078/1990: Código de Defesa do Consumidor (“CDC”).</li>
          </ul>

          <h2>3. Glossário</h2>
          <p>Para facilitar a compreensão, considere as seguintes definições:</p>
          <ul>
            <li>
              <strong>Dado Pessoal:</strong> Informação relacionada a pessoa natural identificada ou
              identificável (ex: nome completo, RG, CPF, e-mail, telefone).
            </li>
            <li>
              <strong>Dado Pessoal Sensível:</strong> Dado pessoal sobre origem racial ou étnica,
              convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter
              religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado
              genético ou biométrico (ex: registro de licença médica).
            </li>
            <li>
              <strong>Dado Pessoal de Criança e Adolescente:</strong> Os dados da criança e do
              adolescente sempre serão Dados Pessoais, podendo vir a ser sensíveis dependendo do caso
              em análise.
            </li>
            <li>
              <strong>Titular:</strong> Pessoa natural a quem se refere os Dados Pessoais que são
              objeto de Tratamento.
            </li>
            <li>
              <strong>Tratamento:</strong> Toda operação realizada com Dados Pessoais (coleta,
              produção, recepção, classificação, utilização, acesso, etc.). Todo o Tratamento deve
              observar os princípios da finalidade, adequação, necessidade, livre acesso, qualidade
              dos dados, transparência, segurança, prevenção, não discriminação e responsabilização.
            </li>
            <li>
              <strong>Consentimento:</strong> Manifestação livre, informada e inequívoca pela qual o
              Titular concorda com o Tratamento de seus Dados Pessoais para uma finalidade
              determinada.
            </li>
            <li>
              <strong>Hemodoctor:</strong> Pessoa jurídica de direito privado, inscrita no CNPJ sob o
              nº 58.187.265/0001-20, bem como suas filiais, afiliadas e controladas.
            </li>
            <li>
              <strong>Controlador:</strong> Parceiro (hospital/laboratório) responsável pelas
              decisões do Tratamento de dados de pacientes.
            </li>
            <li>
              <strong>Parceiro:</strong> Hospital/laboratório que contrata a Solução Hemodoctor.
            </li>
            <li>
              <strong>Operadora:</strong> Hemodoctor, quando trata dados conforme orientação do
              Controlador.
            </li>
            <li>
              <strong>Solução Hemodoctor:</strong> API de análise de hemogramas, integrada aos
              sistemas do Controlador.
            </li>
            <li>
              <strong>Cookies:</strong> Pequenos arquivos enviados para o seu navegador ou
              dispositivos, que armazenam as suas preferências e outras informações de navegação.
            </li>
          </ul>

          <h2>4. Direitos do Titular dos Dados</h2>
          <p>
            Nos termos do artigo 18 da LGPD, a Hemodoctor assegura aos Titulares de Dados Pessoais o
            exercício de seus direitos de forma gratuita e facilitada. Os Titulares poderão exercer
            os seguintes direitos:
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Direito</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Confirmação da existência de Tratamento</td>
                  <td>
                    Permite ao Titular confirmar se a Hemodoctor realiza ou não o Tratamento de seus
                    Dados Pessoais.
                  </td>
                </tr>
                <tr>
                  <td>Acesso aos dados</td>
                  <td>
                    Possibilita ao Titular obter uma cópia dos Dados Pessoais que a Hemodoctor possui
                    em seus registros.
                  </td>
                </tr>
                <tr>
                  <td>Correção de dados</td>
                  <td>
                    Permite solicitar a atualização ou retificação de Dados Pessoais incompletos,
                    inexatos ou desatualizados.
                  </td>
                </tr>
                <tr>
                  <td>Anonimização, bloqueio ou eliminação</td>
                  <td>
                    Garante ao Titular o direito de requerer a anonimização, bloqueio ou exclusão de
                    Dados Pessoais desnecessários, excessivos ou tratados em desconformidade.
                  </td>
                </tr>
                <tr>
                  <td>Eliminação dos dados (consentimento)</td>
                  <td>
                    Caso o Tratamento se baseie em consentimento, o Titular pode solicitar a exclusão
                    definitiva desses dados a qualquer momento.
                  </td>
                </tr>
                <tr>
                  <td>Informação sobre compartilhamento</td>
                  <td>
                    O Titular tem direito de ser informado com quais terceiros seus Dados Pessoais
                    são compartilhados.
                  </td>
                </tr>
                <tr>
                  <td>Informação sobre não consentimento</td>
                  <td>
                    O Titular deve ser informado sobre a opção de não consentir e sobre as
                    consequências dessa negativa.
                  </td>
                </tr>
                <tr>
                  <td>Revogação do consentimento</td>
                  <td>
                    O Titular pode revogar o consentimento anteriormente concedido, a qualquer tempo,
                    mediante manifestação expressa.
                  </td>
                </tr>
                <tr>
                  <td>Portabilidade dos dados</td>
                  <td>
                    Possibilita solicitar a transferência dos seus Dados Pessoais a outro fornecedor,
                    mediante requisição expressa.
                  </td>
                </tr>
                <tr>
                  <td>Revisão de decisões automatizadas</td>
                  <td>
                    Permite requerer a revisão de decisões tomadas unicamente com base em Tratamento
                    automatizado que afetem seus interesses.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Nota:</strong> No caso de Dados Pessoais de pacientes, as solicitações devem ser
            encaminhadas diretamente ao Controlador, que poderá acionar a Hemodoctor quando
            necessário.
          </p>

          <h2>5. Dados Coletados e Finalidades</h2>
          <p>
            O desempenho da Solução depende integralmente da qualidade, integridade e adequação dos
            dados enviados pelo Parceiro. A solução não deve ser utilizada por pacientes, familiares
            ou público leigo, sendo restrita a profissionais autorizados. A coleta ocorre de forma
            distinta conforme o tipo de usuário:
          </p>

          <h3>5.1. Dados Pessoais enviados pelo Parceiro (Pacientes) – Via API</h3>
          <p>
            A Hemodoctor recebe apenas dados anonimizados ou pseudonimizados, sem nome, CPF, RG,
            telefone ou informações de contato.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Tipo de dado</th>
                  <th>Exemplos</th>
                  <th>Finalidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Resultados de hemogramas</td>
                  <td>Parâmetros hematimétricos, flags, índices.</td>
                  <td>
                    Processamento pela API, gera padrões laboratoriais a serem avaliados, conforme
                    regras técnicas.
                  </td>
                </tr>
                <tr>
                  <td>Metadados técnico-operacionais</td>
                  <td>
                    ID interno pseudonimizado, sexo, idade/faixa etária, data de coleta, unidade,
                    número do exame.
                  </td>
                  <td>
                    Ajustes clínicos da análise (faixas etárias/sexo), geração de indicadores
                    epidemiológicos e métricas de uso.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>5.2. Dados de Usuários Profissionais (Portal/Painel)</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Tipo de dado</th>
                  <th>Exemplos</th>
                  <th>Finalidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Identificação profissional</td>
                  <td>Nome, e-mail corporativo, identificador interno, CRM (se aplicável).</td>
                  <td>Autenticação, controle de acesso, auditoria.</td>
                </tr>
                <tr>
                  <td>Perfil e unidade</td>
                  <td>Cargo, setor, permissões.</td>
                  <td>Configuração de acesso por perfil (RBAC).</td>
                </tr>
                <tr>
                  <td>Logs de auditoria</td>
                  <td>IP, ações realizadas, registros de acesso.</td>
                  <td>Segurança, rastreabilidade, prevenção de abuso.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>5.3. Dados do Site Institucional</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Origem</th>
                  <th>Dados coletados</th>
                  <th>Finalidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Formulário de contato</td>
                  <td>Nome, e-mail, telefone (opcional), empresa, cargo, mensagem.</td>
                  <td>Atendimento comercial e institucional.</td>
                </tr>
                <tr>
                  <td>Cookies necessários</td>
                  <td>Sessão, autenticação.</td>
                  <td>Funcionamento básico do site.</td>
                </tr>
                <tr>
                  <td>Cookies de analytics</td>
                  <td>Navegação, páginas visitadas, tempo de permanência.</td>
                  <td>Métricas internas e melhorias de usabilidade.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>5.4. Dados Técnicos Gerados Automaticamente</h3>
          <p>
            Determinados dados técnicos podem ser coletados automaticamente para segurança e
            operação, sem incluir conteúdo clínico. Estes dados independem de cookies e incluem:
          </p>
          <ul>
            <li>Endereço IP, data e hora de acesso;</li>
            <li>Logs de API (parâmetros técnicos, status, tempo de processamento);</li>
            <li>Registros de erro e falhas;</li>
            <li>Metadados de requisições (tipo de operação, tokens, volume de chamadas);</li>
            <li>Informações técnicas do ambiente de acesso para autenticação.</li>
          </ul>
          <p>
            <strong>Finalidades do tratamento destes dados técnicos:</strong> Segurança da
            informação, estabilidade operacional, auditoria, detecção de incidentes e melhoria
            contínua.
          </p>

          <h2>6. Dados de Navegação e Cookies</h2>
          <p>
            Durante a navegação no site institucional, coletamos informações via cookies para
            melhorar a experiência e garantir funcionalidades, conforme a tabela abaixo:
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Tipo de dado</th>
                  <th>Exemplos</th>
                  <th>Finalidade de uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dados técnicos de acesso (Necessários)</td>
                  <td>Endereço IP, data/hora, navegador, SO, provedor.</td>
                  <td>
                    Garantir funcionamento técnico, segurança, autenticação e prevenção de fraudes.
                  </td>
                </tr>
                <tr>
                  <td>Comportamento de navegação (Analytics)</td>
                  <td>Páginas visitadas, tempo de permanência, cliques, rolagem.</td>
                  <td>Analisar interação, otimizar conteúdo e medir desempenho.</td>
                </tr>
                <tr>
                  <td>Localização aproximada</td>
                  <td>Cidade, região ou país (inferidos via IP).</td>
                  <td>Adaptar conteúdo e gerar estatísticas geográficas.</td>
                </tr>
                <tr>
                  <td>Cookies e tecnologias semelhantes</td>
                  <td>
                    Cookies de sessão, scripts (Google Analytics, RD Station), pixels (Meta,
                    LinkedIn).
                  </td>
                  <td>Mensurar audiência e tráfego. Nenhum dado clínico ou sensível é coletado.</td>
                </tr>
                <tr>
                  <td>Dados de dispositivos</td>
                  <td>Modelo, resolução, navegador.</td>
                  <td>Garantir compatibilidade técnica e melhorar desempenho.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Classificação dos Cookies</h3>
          <ul>
            <li>
              <strong>Necessários:</strong> Essenciais para navegação e áreas seguras. O site não
              funciona corretamente sem eles.
            </li>
            <li>
              <strong>De Preferência:</strong> Armazenam escolhas do usuário (ex: idioma).
            </li>
            <li>
              <strong>De Estatística (Analytics):</strong> Coletam dados anônimos sobre a interação
              com o site para melhorias.
            </li>
          </ul>
          <p>
            <strong>Gerenciamento de Cookies:</strong> Você pode aceitar, excluir ou rejeitar
            cookies pelas configurações do seu navegador ou ferramentas do site. A recusa pode afetar
            o funcionamento do site. A Hemodoctor utiliza o Google Analytics; ao aceitar esta
            política, você concorda com o processamento de dados pelo Google conforme suas próprias
            políticas.
          </p>
          <p>
            <strong>Importante:</strong> A Hemodoctor não compartilha dados clínicos, resultados de
            exames ou qualquer conteúdo sensível por meio de Cookies ou ferramentas de analytics.
          </p>

          <h2>7. Natureza da Solução e Uso de Dados</h2>
          <p>
            A Solução Hemodoctor não realiza diagnóstico, não propõe tratamentos e não substitui o
            julgamento de profissionais habilitados. Todas as saídas são hipóteses laboratoriais que
            exigem revisão.
          </p>
          <ul>
            <li>
              <strong>Melhoria de algoritmos:</strong> Qualquer uso de dados para melhoria de modelos
              ocorrerá exclusivamente com dados anonimizados ou agregados, sem identificação de
              pacientes, e apenas quando previsto contratualmente.
            </li>
            <li>
              <strong>Coleta oculta:</strong> A Hemodoctor não realiza coleta oculta ou em segundo
              plano no ambiente do Parceiro.
            </li>
          </ul>

          <h2>8. Compartilhamento de Dados</h2>
          <p>
            O compartilhamento de dados ocorre apenas quando necessário, sob acordos de
            confidencialidade, com:
          </p>
          <ul>
            <li>
              <strong>Provedores de tecnologia:</strong> Nuvem, armazenamento, bancos de dados e
              redes;
            </li>
            <li>
              <strong>Ferramentas de segurança:</strong> Monitoramento, Firewall, WAF;
            </li>
            <li>
              <strong>Prestadores de serviços técnicos:</strong> Manutenção, auditoria e consultoria;
            </li>
            <li>
              <strong>Ferramentas de analytics:</strong> Apenas para dados de navegação do site
              institucional;
            </li>
            <li>
              <strong>Áreas internas:</strong> Acesso restrito e segregado conforme a função;
            </li>
            <li>
              <strong>Autoridades:</strong> Quando houver determinação legal ou judicial.
            </li>
          </ul>
          <p>
            A Hemodoctor não compartilha dados clínicos ou pessoais para fins de marketing,
            publicidade ou profiling comportamental.
          </p>

          <h2>9. Segurança e Proteção</h2>
          <p>
            Adotamos um programa de governança com controle de acesso, criptografia e monitoramento.
            O acesso aos dados é restrito a profissionais autorizados, respeitando a
            proporcionalidade e necessidade. Em caso de incidente de segurança com risco relevante,
            comunicaremos a ANPD e os Titulares conforme a LGPD.
          </p>
          <ul>
            <li>
              <strong>Sua responsabilidade:</strong> O compartilhamento de senhas viola esta
              política. Caso identifique comprometimento de segurança, contate nosso DPO.
            </li>
            <li>
              <strong>Links externos:</strong> Não nos responsabilizamos pelas políticas de
              privacidade de sites de terceiros acessados via links em nosso ambiente.
            </li>
          </ul>

          <h2>10. Armazenamento e Retenção</h2>
          <p>
            Os dados são armazenados em ambiente seguro (físico ou nuvem), podendo haver transferência
            internacional para empresas que demonstrem conformidade com legislações de proteção de
            dados adequadas.
          </p>
          <p>
            <strong>Prazos de armazenamento:</strong>
          </p>
          <ul>
            <li>
              <strong>Dados gerais:</strong> Pelo tempo necessário para cumprir a finalidade,
              contrato ou obrigação legal.
            </li>
            <li>
              <strong>Provas de Conceito (POC):</strong> Em regra, 30 a 90 dias após o relatório
              final, sendo posteriormente eliminados ou anonimizados.
            </li>
            <li>
              <strong>Logs técnicos:</strong> De 6 a 12 meses.
            </li>
            <li>
              <strong>Dados anonimizados/agregados:</strong> Podem ser mantidos por prazo superior
              para análise e melhoria de modelos.
            </li>
          </ul>
          <p>Após o prazo, os dados serão descartados de forma segura ou anonimizados definitivamente.</p>

          <h2>11. Contato (DPO)</h2>
          <p>
            Se você tiver dúvidas ou quiser exercer seus direitos, entre em contato com nosso
            Encarregado pelo Tratamento de Dados Pessoais (DPO):
          </p>
          <p>
            E-mail: <a href="mailto:dpo@hemodoctor.com">dpo@hemodoctor.com</a>
          </p>
          <p>Ao entrar em contato, descreva de forma clara o motivo da solicitação.</p>

          <h2>12. Alterações desta Política</h2>
          <p>
            A Hemodoctor poderá alterar esta Política a qualquer tempo para refletir aprimoramentos
            ou mudanças legais. Toda atualização será publicada neste endereço. Recomendamos a
            consulta periódica.
          </p>
        </article>
      </div>
    </main>
  );
}

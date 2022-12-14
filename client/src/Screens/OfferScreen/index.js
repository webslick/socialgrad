import React from 'react';  
import './style.css';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import images from '../../assets/images'


function OfferScreen () {

  // useInvalidUrlAccess();
const cross = images.cross;

  return (
    <div className="ofer_screen" >
    <div className='ofer_wrapper'>
    <Link to='/'><img onClick={() => {}} style={{cursor:'pointer'}} src={cross} alt="exit" width="28" height="28" /></Link>
      <h2>ЛИЦЕНЗИОННЫЙ ДОГОВОР - ОФЕРТА</h2>
      <div>
      О предоставлении права использования программы для <b>ЭВМ </b> 
      Настоящий Лицензионный договор <b>(далее — «Договор»)</b> является офертой <b>Индивидуального предпринимателя</b> Попов Владимир Александрович, <b>ИНН 233911827564, ОГРН 322237500160389,</b> именуемого в дальнейшем <b>«Лицензиар»</b>, адресованной физическому лицу либо физическому лицу, являющемуся плательщиком налога на профессиональный доход <b>(далее — «Самозанятое лицо»)</b>, юридическому лицу или индивидуальному предпринимателю, именуемому в дальнейшем <b>«Лицензиат»</b>, и регулирует отношения между Лицензиатом и Лицензиаром, возникающие в связи с использованием веб-сайта <a href='https://botinviter.ru/'>https://botinviter.ru/</a> и размещенного на указанном веб-сайте программного обеспечения. <b>Действующая редакция настоящего Договора</b> доступна для ознакомления по адресу: <a href='https://botinviter.ru/license'>https://botinviter.ru/license</a>.
      Настоящий Договор признается заключенным с даты его акцепта Лицензиатом. Под акцептом в целях настоящего Договора признается факт регистрации на сайте Лицензиара в порядке, сроки и на условиях, определенных настоящим Договором. Заключая настоящий Договор, Лицензиат также полностью принимает условия Пользовательского соглашения, текст которого размещен Лицензиаром в сети Интернет по адресу: <a href='https://botinviter.ru/agreement'>https://botinviter.ru/agreement </a>
      На правоотношения сторон, возникающие на основании данного договора не распространяются положения Закона <b>"О защите прав потребителей"</b>.
      </div>
      <ol>
        <li><b>Термины и определения</b>
          <ol>
            <li><b>Программа</b> — результат интеллектуальной деятельности, программа для <b>ЭВМ</b>, исключительные права на использование которой принадлежат Лицензиару.</li>
            <li><b>Лицензиар</b> — индивидуальный предприниматель Попов Владимир Александрович, <b>ИНН 233911827564, ОГРН 322237500160389.</b></li>
            <li><b>Лицензиат</b> — юридическое лицо, индивидуальный предприниматель или самозанятое лицо, а также физическое лицо, заключившее с Лицензиаром Договор на условиях, содержащихся в оферте.</li>
            <li><b>Тип лицензии</b> — тарифный план, избираемый Лицензиатом из списка, размещенного Лицензиаром в сети Интернет на странице: <a href='https://botinviter.ru/'>https://botinviter.ru/</a></li>
            <li><b>Простая (неисключительная) лицензия</b> — неисключительное право использовать экземпляр Программы на территории всего Мира в предпринимательских целях под обозначенным Лицензиаром именем, без права переделки или иной переработки, без права распространения.</li>
            <li><b>Личный кабинет</b> — персональная страница Лицензиата по адресу: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> посредством которой осуществляется доступ к функциям Программы.</li>
            <li><b>Учетная запись</b> — контактные данные, хранящиеся в Программе, позволяющие идентифицировать и авторизовать Лицензиата как пользователя Программы.</li>
            <li><b>Регистрация</b> — процесс создания новой Учетной записи Лицензиата, с целью получения доступа в Личный кабинет, путем ввода Учетных данных в форму регистрации на Интернет-сайте.</li>
            <li><b>Аутентификационные данные</b> — уникальный логин <b>(login)</b> и пароль <b>(password)</b> Лицензиата для доступа в Личный кабинет.</li>
            <li><b>Оплата</b> — перечисление Лицензиатом лицензионного вознаграждения за право использования Программы в соответствии с выбранным Типом лицензии. Оплата может производиться любым из способов, доступных через интерфейс Программы. Выбор способа Оплаты осуществляется Лицензиатом самостоятельно.</li>
            <li><b>Подписка</b> — Оплата за использование Лицензии банковской картой с автоматическим списанием Лицензиаром с банковского (карточного) счета Лицензиата, использованного для Оплаты. При этом размер вознаграждения будет определен исходя из стоимости соответствующего Типа лицензии на дату списания <b>(п. 7.4 Договора).</b></li>
            <li><b>Сайт Лицензиара</b> — страница в сети Интернет: <a href='https://botinviter.ru/'>https://botinviter.ru/</a></li>
            <li><b>Оферта</b> - публичное предложение Лицензиара, адресованное любому лицу,
            заключить с ним настоящий Договор.</li>
            <li><b>Акцепт</b> - полное и безоговорочное принятие Лицензиатом условий Договора путем регистрации на сайте Лицензиара.</li>
          </ol> 
        </li>
        <li><b>Предмет договора</b>
          <ol>
            <li>Предметом настоящего Договора является передача Лицензиаром неисключительных прав использования результата интеллектуальной деятельности, Программы, Лицензиату на условиях простой (неисключительной) лицензии путем воспроизведения Программы (подключения к Программе через сеть Интернет), исключительно для самостоятельного использования Лицензиатом без права сублицензирования третьим лицам.</li>
            <li>Доступ к Программе предоставляется (открывается) Лицензиаром в течение одного рабочего дня с момента поступления лицензионного вознаграждения, указанного в <b>пункте 7.1 Договора,</b> на расчетный счет Лицензиара.</li>   
            <li>Лицензиар создает Учетную запись Пользователя на основании данных, предоставленных Лицензиатом при Регистрации.</li>
            <li>В рамках настоящего Договора поставляется только тот функционал и оказываются только те услуги, которые были заявлены на сайте Лицензиара на момент внесения Лицензиатом оплаты за выбранный Тип лицензии на использование Программы. Все дополнительные услуги, любые манипуляции с данными, доработки, предлагаемые Лицензиатом, функции, не описанные на сайте Лицензиара, оказываются Лицензиаром на платной основе в рамках дополнительного договора, заключаемого между</li>
            <li>В момент акцепта настоящей оферты Лицензиат подтверждает и соглашается, что приобретаемая Программа предоставляется на условиях <b>«как есть» и «как доступно»</b> без каких-либо дополнительных гарантий. До акцепта настоящей Оферты Лицензиат поставлен в известность и соглашается с тем, что Лицензиар не гарантирует и не предоставляет каких-либо заверений о том:</li>  
            <ul>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- что Программа полностью будет удовлетворять потребностям (требованиям) Лицензиата;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- что Программа будет работать непрерывно и в ней полностью отсутствуют ошибки;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- что результат от использования Программы будет полностью соответствовать ожиданиям Лицензиата.</div>
            </ul>
            <li>Лицензиат подтверждает, что Программа приобретается на свой страх и риск. Лицензиар не несет ответственность за несоответствие Программы субъективным ожиданиям Лицензиата.</li>
            <li>Лицензиар не предоставляет Лицензиату право на использование принадлежащей ему Программы для создания нового результата интеллектуальной деятельности.</li>
          </ol>
        </li>
        <li><b>Исключительные права</b>
          <ol>
            <li>Программа, включая все ее компоненты, является объектом интеллектуальной собственности Лицензиара и защищается нормами законодательства Российской Федерации и международными соглашениями в сфере интеллектуальной собственности. Нарушение целостности Программы, нарушение систем защиты Программы, копирование исходного кода Программы или ее компонентов полностью или в части, а также иные действия, нарушающие исключительные права Лицензиара на Программу не допускаются. Лицензиат несет гражданско-правовую, административную либо уголовную ответственность в соответствии с законодательством Российской Федерации, в том числе обязанность исполнить решение суда по требованию Лицензиара или правообладателя о признании права, о пресечении действий, нарушающих право или создающих угрозу его нарушения, о возмещении убытков, о публикации решения суда о допущенном нарушении с указанием действительного правообладателя, о возмещении убытков либо выплате компенсации.</li>
            <li>Лицензиар гарантирует, что обладает всем необходимым объемом прав на Программу для предоставления их Лицензиату, включая документацию к Программе.</li>
            <li>Право использования Программы предоставляется только Лицензиату, а также работникам Лицензиата и уполномоченным им лицам в целях использования Лицензиатом Программы, без права передачи иным третьим лицам, исключительно в объеме, оговоренном Договором, если нет письменного согласия Лицензиара на иное.</li>
            <li>Лицензиату не предоставляется право собственности на Программу и ее компоненты, а только право использования Программы и ее компонентов в соответствии с условиями, которые обозначены в Договоре.</li>
            <li>Лицензиату не предоставляются никакие права на использование товарных знаков и знаков обслуживания Лицензиара и (или) его партнеров.</li>
            <li>Лицензиат не вправе копировать, распространять Программу и ее компоненты в любой форме, в том числе в виде исходного кода, каким-либо способом, в том числе сдавать в аренду, безвозмездное пользование, либо в прокат.</li>
          </ol>
        </li> 
        <li><b>Условия использования программы</b>
          <ol>
            <li>Лицензиат вправе использовать Программу следующими способами:
              <ol>
                <li>Круглосуточно (за исключением времени проведения профилактических работ) получать доступ к Программе с использованием сети Интернет и воспроизводить графическую часть (рабочий интерфейс) Программы на экране персонального компьютера и/или иного конечного устройства, предусмотренного документацией к Программе) Лицензиата.</li>
                <li>Использовать все оплаченные функциональные возможности Программы в соответствии с лицензией.</li>
                <li>Размножать относящуюся к Программе документацию для личного пользования.</li>
              </ol>
            </li>
            <li>Лицензиар не предоставляет Лицензиату услуги связи, не организует для него возможность доступа к информационным системам информационно-телекоммуникационных сетей, в том числе к сети Интернет, и не осуществляет деятельность по приему, обработке, хранению, передаче, доставке сообщений электросвязи.</li>
            <li>Лицензиар не несет ответственности за сохранность аккаунтов Лицензиата и возможные потери и затраты при продвижении аккаунтов Лицензиата в социальных сетях.</li>
          </ol>
        </li>
      <li><b>Права и обязанности сторон</b> 
        <ol>
          <li><b>Лицензиар обязан:</b>
            <ol>
              <li>Обеспечить круглосуточную (за исключением времени проведения профилактических работ) доступность сайта Лицензиара для использования Программы.</li>
              <li>Предоставить Лицензиату возможность (открыть доступ) использования Программы:</li>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- при приобретении бесплатной демо-версии ПО в течении <b>1 рабочего дня</b> с момента регистрации на сайте Лицензиара;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- при приобретении платной версии ПО в течение <b>1 рабочего дня</b> с момента поступления лицензионного вознаграждения, определяемого согласно <b>пункта 7.1.</b> Договора, на расчетный счет Лицензиара,</div>
              <li>Без взимания дополнительного вознаграждения предоставлять Лицензиату техническую поддержку по вопросам, связанным с функциональностью Программы, особенностями эксплуатации на стандартных конфигурациях поддерживаемых операционных, почтовых и иных систем в порядке и на условиях, указанных в технической̆ документации к ней.</li>
              <li>Обеспечивать конфиденциальность данных, размещенных Лицензиатом в Программе, на весь период их нахождения на сервере Лицензиара.</li>
              <li>Исправить обнаруженные Лицензиатом ошибки Программы в максимально короткие сроки. Стороны соглашаются, что точное определение срока устранения ошибки не может быть установлено, так как Программа тесно взаимодействует с другими программами сторонних разработчиков, операционной̆ системой и аппаратными ресурсами компьютеров Лицензиата, и работоспособность и время устранения проблем в полной мере не зависят только от Лицензиара.</li>
            </ol>
          </li>
          <li><b>Лицензиар вправе:</b>
            <ol>
              <li>Вносить изменения в Программу без уведомления Лицензиата в любое время и по любой причине, в том числе, но не ограничиваясь, в целях удовлетворения потребностей других лицензиатов, требований конкурентоспособности, или в целях исполнения требований нормативных актов. Лицензиар оставляет за собой право добавлять новые свойства и функциональные возможности Программы или удалять из Программы уже существующие свойства и функциональные возможности.</li>
              <li>Блокировать доступ Лицензиата к Программе при нарушении Лицензиатом условий Договора или Пользовательского соглашения, текст которого размещен Лицензиаром в сети Интернет на странице: <a href='https://botinviter.ru/agreement'>https://botinviter.ru/agreement</a> При этом внесенная оплата Лицензиату не возвращается и является штрафной неустойкой за его неправомерные действия.</li>
              <li>Предоставлять Лицензиару все сведения и документы, необходимые для выполнения Лицензиаром своих обязательств по Договору.</li>         
              <li>Указывать при Регистрации достоверные данные.</li>
              <li>Лицензиат полностью ответственен за сохранность своих учетных данных и за убытки или иной ущерб, которые могут возникнуть по причине несанкционированного использования этой информации. По факту утери, несанкционированного доступа к учетным данным или возможности возникновения такой ситуации Лицензиат имеет право направить запрос Лицензиару на смену учетных данных. В этом случае Лицензиар по согласованию с Лицензиатом осуществляет блокировку доступа к учетным данным Лицензиата. Срок подобной блокировки согласовывается Сторонами дополнительно. При этом Лицензиар не несет ответственности за извещение любых третьих лиц о временной приостановке доступа Лицензиата к его информационной системе и за возможные последствия, возникшие в результате отсутствия такого извещения.</li>
              <li>Не осуществлять действий, направленных на модификацию и/или любое изменение программы.</li>
              <li>Не распространять, в том числе, но не ограничиваясь, не копировать Программу или её части и/или осуществлять иные действия, направленные на извлечение коммерческой выгоды в отношениях с третьими лицами из использования Программы.</li>
              <li>Лицензиат не вправе заключать сублицензионные договора на использование Программы.</li>
              <li>При отправке Сообщения получателю, в обязательном порядке получить от него согласие. Предоставить Согласие Исполнителю по его требованию.</li>
              <li>Отправлять сообщения только от своего имени.</li>
              <li><b>Не использовать программное обеспечение:</b></li>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;- для организации СПАМА;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;- для намеренной передачи сообщений, которые могут привести к нарушению программного обеспечения;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;- для передачи сообщений оскорбительного или клеветнического характера, сообщений, разжигающих национальную, расовую или религиозную рознь, сообщений порнографической или другой предосудительной направленности;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;- для передачи сообщений, вводящих получателей в заблуждение, например, отправленных от чужого имени или сообщающих ложную информацию;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;- в политических целях и в целях, направленных на распространение экстремизма и терроризма;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;- для передачи сообщений содержащих неоднозначную трактовку.</div>
              <li>Лицензиат обязуется соблюдать дисциплину и общепринятые нормы поведения, в частности, проявлять уважение к Лицензиару и его представителям. В случае несоблюдения Лицензиатом указанного требования Лицензиар (его представитель) вправе расторгнуть настоящий лицензионный договор в одностороннем порядке.</li>
            </ol>
          </li>
          <li><b>Лицензиат вправе:</b> 
            <ol>
              <li>Получать круглосуточный (за исключением времени проведения профилактических работ) доступ к сайту Лицензиара для использования Программы.</li>
              <li>Использовать все оплаченные функциональные возможности Программы в соответствии с описанием выбранного Типа лицензии способами, не нарушающими условия Договора, Пользовательского соглашения, текст которого размещен Лицензиаром в сети Интернет на странице: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> законодательства Российской Федерации.</li>
              <li>Сохранять конфиденциальность информации, материалов, документов, ставших доступными ему в рамках исполнения настоящего Договора.</li>
              <li>Не предоставлять Лицензиару отчеты об использовании Программы.</li> 
              <li>Лицензиат гарантирует, что:</li>
              <div> &nbsp;&nbsp;&nbsp;&nbsp;- При обработке персональных данных Лицензиатом соблюдены все права субъектов персональных данных, предусмотренные законодательством Российской Федерации в области защиты персональных данных.</div>
              <div> &nbsp;&nbsp;&nbsp;&nbsp;- Лицензиатом получено согласие субъектов персональных данных на обработку принадлежащих им персональных данных.</div>
            </ol>
          </li>
        </ol>
      </li>
      <li><b>Срок действия и порядок расторжения договора</b>
        <ol>
          <li>Договор вступает в силу с даты осуществления Лицензиатом полного и безоговорочного акцепта Договора, в соответствии с преамбулой настоящего Договора и статьей 438 Гражданского Кодекса Российской Федерации — оплаты лицензионного вознаграждения Лицензиара в полном объеме, согласно условиям Договора, размещенного в сети Интернет на странице: <a href='https://botinviter.ru/license'>https://botinviter.ru/license</a> и действует до истечения срока соответствующей лицензии, выбранной Лицензиатом.</li>
          <li>Договор автоматически пролонгируется на новый срок при оплате каждого следующего выбранного Типа лицензии, размещенного в сети Интернет на странице: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> , а в случае, если право использования Программы предоставляется бесплатно — в случае продолжения использования Программы Лицензиатом после истечения срока действия лицензии.</li>
          <li>Настоящий Договор действует на всей территории всего Мира.</li>
            
          <li>Все споры, возникающие по Договору, решаются сторонами путем переговоров, а в случае невозможности урегулирования споров — путем судебного урегулирования, претензионный порядок урегулирования споров обязателен для сторон, срок рассмотрения претензионного письма и направления ответа на него составляет <b>10 (десять)</b> календарных дней с даты его получения.</li>
          <li>Договор может быть расторгнут по соглашению сторон, решению суда, а также Лицензиаром в одностороннем порядке, установленном настоящим Договором, при условии проведения всех взаиморасчетов, связанных с выполнением условий настоящего Договора или в порядке, предусмотренном действующим законодательством Российской Федерации.</li>
          <li>Лицензиат вправе в любое время отказаться от использования ПО. При этом, денежные средства, списанные в счет оплаты за отчетный период, в котором было принято решение об отказе от использования Программы, перерасчету и частичному возврату не подлежат.</li>
          <li>При существенном нарушении Лицензиатом обязанности выплатить Лицензиару в установленный Договором срок лицензионного вознаграждения, Лицензиар вправе отказаться в одностороннем порядке от Договора и потребовать возмещения убытков, причиненных его расторжением. Договор прекращается по истечении тридцатидневного срока с момента получения уведомления об отказе от Договора, если в этот срок Лицензиат не исполнил обязанность выплатить вознаграждение.</li>
          <li>При невозможности прийти к согласию в досудебном порядке споры между Лицензиатом и Лицензиаром подлежат рассмотрению в суде по местунахождения Лицензиара.</li>
        </ol>
      </li>
      <li><b>Стоимость услуг по договору, порядок оплаты</b>
        <ol>
          <li>Стоимость права использования Программы <b>(простая (неисключительная)
          лицензия)</b>, устанавливается в сети Интернет на странице: <a href='https://botinviter.ru/'>https://botinviter.ru/</a></li>
          <li>Лицензиат оплачивает Лицензиару лицензионное вознаграждение за право использования Программы в размере, указанном на сайте Лицензиара, в соответствии с выбранным Типом лицензии.</li>
          <li>Лицензиат оплачивает выставленный Лицензиаром счет путем единовременного перечисления в срок, указанный в таком счете, всей суммы лицензионного вознаграждения, указанной в счете, на банковский счет Лицензиара по реквизитам, указанным в счете.</li>
          <li>Датой исполнения Лицензиатом обязанности по оплате Договора выставленного Лицензиаром в адрес Лицензиата счета, является дата поступления денежных средств, в полном объеме, на расчетный счет Лицензиара.</li>
          
          <li>В случае, если оплата производится по Подписке, действие Договора будет продлено после внесения оплаты за следующий срок использования Программы.</li>
          <li>Стоимость права использования Программы (лицензионное вознаграждение, устанавливаемое в порядке, указанном в <b>пункте 7.1. Договора</b>) налогом на добавленную стоимость не облагается на основании <b>подпункта 26 пункта 2 статьи 149 Налогового кодекса Российской Федерации.</b></li>
          <li>В случае, если в течение пяти календарных дней с даты окончания срока действия выбранного Типа лицензии, Лицензиар не получил претензий Лицензиата, связанных с объемом предоставленных прав, то считается что неисключительное право использования Программы предоставлено Лицензиату в соответствии с Договором в полном объеме и надлежащим образом.</li>
          <li>Досрочное расторжение настоящего Договора не является основанием для возврата лицензионного вознаграждения.</li>
        </ol>
      </li>
      <li><b>Ответственность сторон</b>
        <ol>
        <li>За нарушение условий Договора Лицензиар и Лицензиат несут ответственность согласно действующему законодательству Российской Федерации.</li>
        <li>Лицензиар не несет ответственности за задержки, перебои в работе и невозможность полноценного использования собственных ресурсов Лицензиара, происходящие прямо или косвенно по причине действия или бездействия самого Лицензиата и третьих лиц и/или неработоспособностью информационных каналов, находящихся за пределами собственных ресурсов Лицензиара.</li>
        <li>Лицензиат соглашается с тем, что для работы с Программой Лицензиату необходимо использовать программное обеспечение (веб-браузеры, операционные системы и прочее) и оборудование (персональные компьютеры, сетевое оборудование, удаленные серверы и прочее) произведенное и предоставленное третьими лицами, и Лицензиар не может нести ответственность за качество их работы.</li>
        <li>Лицензиар не несет ответственности за неполученную прибыль и упущенную выгоду, а также за любые косвенные убытки, понесенные Лицензиатом в период использования или неиспользования Программы, в том числе в период проведения профилактических работ.</li>
        <li>Лицензиар не несет ответственности за утерю Лицензиатом Аутентификационных данных, а также не несет ответственности за ущерб, как прямой, так и косвенный, понесенный Лицензиатом вследствие получения доступа к Личному кабинету третьими лицами в результате утери Лицензиатом Аутентификационных данных либо их похищения третьими лицами.</li>
        <li>Лицензиар не несет ответственности за действия и решения Лицензиата, принятые на основании информации, полученной Лицензиатом при использовании Программы,

        их последствия, а также прямые и косвенные убытки, включая упущенную выгоду, возникшие в результате применения Программы.</li>
        <li>Любая ответственность Лицензиара, вне зависимости от оснований для ее возникновения, будет ограничена суммой, уплаченной Лицензиатом в счет лицензионного вознаграждения Лицензиара за предоставление прав на использование Программы.</li>
        <li>Лицензиат несет самостоятельную ответственность за возможные убытки, возникшие в результате утери или похищения третьими лицами Учетных данных, указанных им при Регистрации, а также Аутентификационных данных.</li>
        <li>Лицензиат несет самостоятельную ответственность за соблюдение при использовании Программы требований действующего законодательства Российской Федерации, а также всех прав и законных интересов третьих лиц.</li>
        <li>Лицензиар не несет ответственности за содержание, достоверность и полноту информации, полученной Лицензиатом при использовании Программы.</li>
        <li>Стороны освобождаются от ответственности за неисполнение или ненадлежащее исполнение обязательств по Договору, если надлежащее исполнение оказалось невозможным вследствие непреодолимой силы, то есть чрезвычайных и непредотвратимых при данных условиях обстоятельств, под которыми понимаются: запретительные действия органов власти, гражданские волнения, эпидемии, блокада, эмбарго, землетрясения, наводнения, пожары или другие стихийные бедствия. в случае наступления этих обстоятельств, Сторона обязана в течение <b>5(пяти) рабочих дней</b> уведомить об этом другую Сторону.</li>
        </ol> 
      </li>
      <li><b>Прочие условия</b> 
        <ol>
        <li>К положениям Договора применяется законодательство Российской Федерации. Вопросы, не урегулированные Договором, разрешаются в соответствии с законодательством Российской Федерации и нормами международного права.</li>
        <li>В случае, если какая-либо часть Договора будет признана утратившей юридическую силу и не подлежащей исполнению, остальные части Договора сохраняют свою юридическую силу и подлежат исполнению.</li>
        <li>Принимая условия Договора, Лицензиат дает согласие Лицензиару на сбор, хранение и обработку своих персональных данных, в том числе на передачу персональных данных правообладателю и иным третьим лицам в рамках исполнения обязательств по Договору и требований Федерального Закона Российской Федерации <b>от 27.07.2006 No 152-ФЗ «о персональных данных».</b> Лицензиат гарантирует, что при предоставлении Лицензиару персональных данных иных лиц, Лицензиатом от таких лиц получены соответствующие согласия.</li>

        <li>Принимая условия Договора, Лицензиат дает согласие на получение дополнительной информации и информационных рассылок по указанным при регистрации на сайте и в Программе адресам электронной почты и телефонам.</li>
        <li>Согласно пункту <b>2 статьи 310</b> Гражданского кодекса Российской Федерации односторонний отказ Лицензиата от настоящего Договора не допускается. Добровольное прекращение Лицензиатом использования Программы (в том числе, удаление Учетной записи Пользователя) не признается отказом Лицензиата от настоящего Договора (вне зависимости от факта уведомления об этом Лицензиара) и не влечет обязанности Лицензиара по перерасчету и (или) возврату лицензионного вознаграждения, уплаченного Лицензиатом в порядке, предусмотренном <b>пунктами 7.1—7.4 Договора.</b></li>
        <li>Во избежание неоднозначного толкования, предоставляя права использования программы для ЭВМ, Лицензиар не оказывает Лицензиату каких-либо услуг, в частности, но не ограничиваясь, Лицензиар не оказывает услуги по предоставлению технических, организационных, информационных и иных возможностей, осуществляемых с использованием информационных технологий и систем, для продвижения, рекламы продукции клиента и сбора, обработки и систематизации информации о покупателях клиента.</li>
        </ol>
      </li>
      <li><b>Реквизиты Лицензиара</b></li> 
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;ИП Попов Владимир Александрович,</h5>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;ИНН 233911827564, ОГРНИП 322237500160389, КРАСНОДАРСКИЙ</h5>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;КРАЙ, КУРГАНИНСКИЙ Р-Н, Г КУРГАНИНСК, УЛ ГАСТЕЛЛО, дом 93</h5>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;Эл.почта Popov1997vo@yandex.ru</h5>
      </ol> 

    </div>
  </div>
  );
}

export default OfferScreen;
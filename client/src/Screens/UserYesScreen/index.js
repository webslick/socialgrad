import React from 'react';  
import './style.css';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

function UserYesScreen () {

  // useInvalidUrlAccess();
  const cross = images.cross;
  return (
    <div className="user_yes_screen" >
    <div className='user_yes_wrapper'>
    <Link to='/'><img onClick={() => {}} style={{cursor:'pointer'}} src={cross} alt="exit" width="28" height="28" /></Link>
      <ol>
        <h2>Пользовательское соглашение</h2>
        Настоящее Пользовательское соглашение <b>(далее — «Соглашение»)</b> устанавливает условия, правила и ограничения использования Платформы <a href='https://botinviter.ru/'>https://botinviter.ru/</a> <b>(далее — «Платформа»)</b> и Сервисов, представленных на Платформе. Соглашение представляет собой простую <b>(неисключительную)</b> лицензию между <b>Индивидуального предпринимателя</b> Попов Владимир Александрович, <b>ИНН</b> 233911827564, <b>ОГРН</b> 322237500160389, <b>(далее — «Администрация»)</b> и лицом, являющимся пользователем Платформы <b>(далее — «Пользователь»)</b>.
        Администрация вправе устанавливать дополнительные или иные условия использования отдельных Сервисов. В случае если договором на использование отдельного Сервиса установлены условия использования, отличные от условий, указанных в настоящем Соглашении, Администрация и Пользователь будут руководствоваться <b>договором на использование</b> соответствующего Сервиса.
        <li><b>Общие положения</b> 
          <ol> 
            <li>В настоящем Соглашении применяются следующие термины и определения:</li>
            <div><b>Платформа</b> — совокупность Сервисов и иной информации, содержащейся в информационных системах Администрации, доступ к которым обеспечивается посредством сети «Интернет» по сетевому адресу в следующих доменах <b>(включая поддомены):</b> <a href='https://botinviter.ru/'>https://botinviter.ru/</a></div>
            <div><b>Сервис</b> — информация, охраняемые результаты интеллектуальной деятельности, иные объекты гражданских прав, исключительное право и (или) иные имущественные права на которые принадлежат Администрации.</div>
            <div><b>Личный кабинет</b> — совокупность защищённых техническими средствами страниц Платформы, представляющих собой персональный раздел Пользователя на Платформе, к которому Пользователь получает доступ после прохождения регистрации и/или авторизации на Платформе. Личный кабинет предназначен для заключения, исполнения, прекращения, гражданско-правовых сделок с Администрацией, использования дополнительных функциональных возможностей Платформы, просмотра и управления доступными функциональными возможностями Платформы, получения скидок на Сервис, направления в адрес Администрации сообщений, уведомлений, а также осуществления иных действий, предусмотренных явными функциями Личного кабинета.</div>
            <li>В настоящем Соглашении могут быть использованы иные термины и определения, не указанные в <b>п. 1.1.</b> Соглашения. В этом случае толкование такого термина производится в соответствии с текстом Соглашения. В случае отсутствия однозначного толкования термина или определения в тексте Соглашения, следует
            руководствоваться его толкованием, определённым, <b>в первую очередь,</b> — договором между Администрацией и Пользователем, <b>и в последующем</b> — нормами применимого права.</li>
            <li>Администрация предоставляет Пользователю право использования отдельными Сервисами Платформы в пределах, установленных настоящим Соглашением и иными договорами. Право использования Сервисов Платформы предоставляется на условиях простой <b>(неисключительной)</b> лицензии. Администрация вправе устанавливать дополнительные или иные условия использования отдельных Сервисов. В случае если договором на использование отдельного Сервиса установлены условия использования, отличные от условий, указанных в настоящем Соглашении, Администрация и Пользователь будут руководствоваться договором на использование соответствующего Сервиса.</li>
            <li><b>Акцепт</b> - полное и безоговорочное принятие Лицензиатом условий Договора путем регистрации на сайте Лицензиара.</li>
            <li>Пользователь вправе использовать Платформу и Сервисы при соблюдении условий и обязанностей, установленных настоящим Соглашением. Используя Платформу, <b>Пользователь тем самым подтверждает, что он:</b></li>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;a.</b> Ознакомился с условиями настоящего Соглашения в полном объёме;</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;б.</b> Принимает все условия настоящего Соглашения полностью и безоговорочно, обязуетесь их соблюдать или прекратить использование Платформы, если Пользователь не согласен с условиями Соглашения.</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;в.</b> Соглашение может быть изменено Администрацией без какого-либо специального уведомления Пользователя. Новая редакция Соглашения и/или указанных в нём обязательных документов вступает в силу с момента размещения на Платформе либо доведения до сведения Пользователя в иной удобной форме, если иное не предусмотрено новой редакцией Соглашения. Пользователь обязуется при каждом посещении Платформы проверять актуальную редакцию Соглашения и в случае, если не согласен с каким-либо условием, прекратить использование Платформы. <b>Действующая редакция Соглашения находится по адресу:</b> <a href='https://botinviter.ru/agreement'>https://botinviter.ru/agreement</a></div>
            <h4>Пользователь обязуется соблюдать следующие условия и ограничения использования Платформы и Сервисов:</h4>
          </ol>
          <ol> 
            <li>Для использования Платформы и Сервисов Пользователь обязуется своими силами и за свой счёт обеспечить себя компьютером, иным необходимым Пользователю оборудованием, необходимым для использования Платформы и Сервисов;</li>
            <li>Для использования Платформы и Сервисов Пользователь обязуется своими силами и за свой счёт обеспечить подключение своего компьютера к сети Интернет, обеспечивающей достаточную скорость и качество связи (интернет-соединения);</li>
            <li>Для использования Платформы и Сервисов Пользователь обязуется своими силами и за свой счёт обеспечить установку на свой компьютер версией интернет-браузера, иного программного обеспечения, необходимого для использования Платформы и Сервисов, произвести своими силами настройку установленного программного обеспечения, в том числе отключить всё программные средства, препятствующие работе Платформы и Сервисов;</li>
            <li>Пользователь не вправе использовать Платформу и Сервисы, если это прямо запрещено применимым правом, судебным актом, актом органа исполнительной власти;</li>
            <li>Если для использования Сервиса требуется регистрация Пользователя и создание Личного кабинета, заключение отдельного договора, совершение иных действий — Пользователь должен самостоятельно осуществить регистрацию и создание Личного кабинета, заключить договор с Администрацией, совершить иные предусмотренные действия. В случае если Пользователь не согласен использовать Сервис при соблюдении представленных на Платформе условий, Пользователь не вправе предпринимать попытки использовать Сервис или требовать от Администрации предоставления Сервиса на иных условиях.</li>
            <li>Пользователь обязуется обеспечить конфиденциальность и безопасность учётных данных от Личного кабинета и имеет право использовать ПО лишь под одной учетной записью и с одного ПК.</li>
            <li>Пользователь не вправе предоставлять свои учётные данные, доступ в личный кабинет третьим лицам.</li>
            <li>Пользователь обязуется исполнять все обязанности, предусмотренные договором между Администрацией и Пользователем, в том числе условия и ограничения использования результатов интеллектуальной деятельности, денежные и иные обязательства.</li>
            <li>Пользователь при использовании Платформы и Сервисов обязуется соблюдать действующее законодательство Российской Федерации, а также иных стран, если оно применимо к отношениям, связанным с использованием Платформы и Сервисов.</li>
            <li>Пользователь не вправе нарушать права и законные интересы Администрации, работников Администрации, других пользователей.</li>
            <li>Пользователь не вправе использовать Платформу и Сервисы:</li>
            в политических целях и в целях, направленных на распространение экстремизма и терроризма;
            в целях незаконного распространения контрафактной продукции, нарушения исключительных прав Администрации и любых иных лиц.
            <li>Пользователю запрещается копировать, модифицировать, изменять, удалять, дополнять, публиковать, передавать содержащиеся на Платформе результаты
            интеллектуальной деятельности, создавать производные работы, изготавливать или продавать товары/оказывать услуги на их основе, воспроизводить, отображать или любым другим образом эксплуатировать или использовать такие результаты интеллектуальной деятельности без прямого разрешения Администрации. При цитировании, если цитирование допускается в силу закона или отдельного договора между Пользователем и Администрацией, Пользователь обязуется указывать ссылку на Платформу.</li>
            <li>Пользователь обязуется соблюдать ограничения, связанные с использованием шрифтов, иных охраняемых результатов интеллектуальной деятельности согласно Разделу 4 настоящего Соглашения.</li>
            <li>Пользователь не вправе копировать, загружать на любые физические носители, облачные хранилища (за исключением случаев, когда такая загрузка прямо и требуется Администрацией), распространять любыми способами (в том числе путём создания фотографий, скриншотов и видео) любые элементы Платформы и Сервисов, в том числе, но не ограничиваясь: товарные знаки, логотипы, иконки, шрифты, изображения шрифтов, элементы дизайна и фирменного стиля, программный код, статьи, учебники, подборы материалов, каталоги, дизайн-макеты, аудиовизуальные произведения.</li>
            <li>Пользователь не вправе использовать Платформу, Сервисы и их элементы для использования любым противоречащим закону способом;</li>
              <b>Не использовать программное обеспечение:</b>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- для организации СПАМА;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- для намеренной передачи сообщений, которые могут привести к нарушению программного обеспечения;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- для передачи сообщений оскорбительного или клеветнического характера, сообщений, разжигающих национальную, расовую или религиозную рознь, сообщений порнографической или другой предосудительной направленности;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- для передачи сообщений, вводящих получателей в заблуждение, например, отправленных от чужого имени или сообщающих ложную информацию;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- для передачи сообщений содержащих неоднозначную трактовку.</div>
            <li>Пользователь не вправе копировать программный код, дизайн Платформы и Сервисов, создавать копии Сервисов, Платформы;</li>
            <li>Пользователь не вправе размещать на Платформе персональные данные третьих лиц, изображения и фотографии третьих лиц;</li>
            <li>Пользователь не вправе использовать на Платформе адреса электронной почты третьих лиц, банковские карты и иные средства платежа третьих лиц, если от них не было заранее получено надлежащим образом оформленное согласие;</li>
            <li>Пользователь не вправе продавать свой Личный кабинет или делать его предметом иных сделок;</li>
            <li>Пользователь не вправе размещать на Платформе рекламу, оферты о продаже товаров, работ, услуг, информацию политического, агитационного характера;</li>
            <li>Пользователь не вправе размещать на Платформе информацию, распространение которой каким-либо образом запрещено или ограничено в Российской Федерации;</li>
            <li>Пользователь не вправе использовать на Платформе ненормативную (нецензурную лексику), изображения эротического характера, информацию, способную причинить нравственные страдания или оскорбить третье лицо, а также информацию, причиняющую вред детям;</li>
            <li>Пользователь не вправе размещать на Платформе информацию, порочащую честь, деловую репутацию, достоинство Администрации, а также любого третьего лица;</li>
            <li>Пользователь обязуется в срок, не превышающий <b>1 (один)</b> час с момента направления Администрацией обращения в адрес Пользователя прекратить любое нарушение настоящего Соглашения и (или) иного договора, заключённого между Пользователем и Администрацией;</li>
            <li>Пользователь обязуется в срок, не превышающий <b>24 (двадцать четыре)</b> часа с момента направления Администрацией требования предоставить ответ на запрос, затрагивающий вопрос соблюдения Пользователем Соглашения и иных договоров.</li>
          </ol>
        </li>
        <li><b>Регистрация Пользователя и использование Платформы</b>
          <ol> 
            <li>Использование полных функциональных возможностей Платформы, включая использование Сервисов, допускается только после прохождения Пользователем регистрации и авторизации на Платформе в соответствии с установленной Администрацией процедурой.</li>
            <li>Перечень функциональных возможностей Платформы, использование которых требует предварительной регистрации и/или авторизации, а также принятия в необходимых случаях дополнительных документов на использование Сервисов, определяется по единоличному усмотрению Администрации и может время от времени изменяться. Администрация доводит до Пользователя информацию о необходимости регистрации и (или) авторизации непосредственно на Платформе, без публикации отдельных списков и перечней. Администрация вправе в одностороннем порядке изменить условия использования Сервисов, установив или отменив условие об обязательной регистрации и (или) авторизации для доступа к Сервису.</li>

            <li>По завершении процедуры регистрации создаётся уникальная учётная запись, связанная с Личным кабинетом Пользователя на Платформе, которая необходима для использования большинства функциональных возможностей Платформы и Сервисов.</li>
            <li>Для регистрации Пользователь обязуется предоставить достоверную и полную информацию по вопросам, предлагаемым в форме регистрации, и поддерживать эту информацию в актуальном состоянии. Если Пользователь предоставляет неверную информацию или у Администрации есть основания полагать, что предоставленная Пользователем информация неполна или недостоверна, Администрация имеет право по своему усмотрению заблокировать или удалить учётную запись Пользователя, а также отказать Пользователю в использовании Платформы и Сервисов полностью или в определённой части.</li>
            <li>Любые действия, совершённые под учётной записью Пользователя, считаются совершёнными соответствующим Пользователем. В случае несанкционированного доступа к учётной записи Пользователя, или распространения доступа, Пользователь обязан незамедлительно сообщить об этом Администрации.</li>
            <li>Администрация оставляет за собой право в любой момент потребовать от Пользователя подтверждения информации, указанной при регистрации, либо в Личном кабинете, а также запросить в связи с этим подтверждающие документы, непредоставление которых, по усмотрению Администрации, может быть приравнено к предоставлению недостоверной информации и повлечь последствия, предусмотренные <b>п. 2.4.</b> Соглашения. В случае если данные Пользователя, указанные в предоставленных им документах, не соответствуют данным, указанным при регистрации, а также в случае, когда данные, указанные при регистрации, не позволяют идентифицировать пользователя, Администрация вправе применить меры, указанные в <b>п. 2.4.</b> Соглашения.</li>
            <li>Информация, содержащаяся в Личном кабинете, обрабатывается Администрацией в соответствии с Политикой обработки персональных данных Администрации.</li>
            <li>Администрация вправе использовать адреса электронной почты, номера телефонов Пользователя и другие данные Пользователя, указанные Пользователем при регистрации на Платформе, в Личном кабинете, при использовании Платформы и Сервисов, для отправки Пользователю информации, рекламы, предложений Исполнителя на адреса электронной почты, через мессенджеры, короткие SMS-сообщения, посредством телефонных звонков и интернет-звонков с использованием сети Интернет, по сети подвижной связи и иным способом.</li>
            <li>Пользователь обязуется использовать Платформу и Сервисы только в законных целях, способами, установленными Соглашением и отдельными договорами на использование Сервисов.</li>
            <li>Пользователь обязуется соблюдать условия и ограничения использования Платформы и Сервисов, установленные в <b>п. 1.6.</b> Соглашения, иными договорами между Пользователем и Администрацией.</li>

            <li>Пользователь несёт единоличную полную ответственность в случае нарушения условий использования Платформы и Сервисов.</li>
            <li>В случае, если Администрация понесёт убытки в результате нарушения Пользователем Соглашения, Пользователь обязуется компенсировать Администрации убытки в полном объёме.</li>
            <li>В момент размещения каких-либо материалов на Платформе Пользователь безвозмездно предоставляет Администрации (или подтверждает, что владелец прав на такие материалы предоставил Администрации) бессрочное, безотзывное право на использование, воспроизведение, изменение, редактирование, копирование, опубликование, перевод и распространение таких материалов на территории всех стран мира и/или включение таких материалов в другие произведения в любой форме посредством использования любых технологий, которые известны в настоящее время или могут быть изобретены в будущем, на весь срок охраны авторского права, предусмотренный применимым правом, в отношении таких материалов.</li>
            <li>Администрация вправе устанавливать лимиты по объёму и составу размещаемых Пользователем информационных материалов, а также вводить иные технические ограничения использования Платформы, которые время от времени будут доводиться до сведения Пользователей способом, определяемым Администрацией по своему усмотрению.</li>
            <li>Администрация оставляет за собой право блокировать, исключать, удалять материалы с Платформы без согласия Пользователя, либо временно ограничить доступ к ним.</li>
          </ol>
        </li>
        <li><b>Ответственность и гарантии</b> 
          <ol>  
            <li>Администрация не несёт ответственности за нарушение условий настоящего Соглашения, если такое нарушение вызвано действием обстоятельств непреодолимой силы (форс-мажор), включая: действия и акты органов государственной власти, должностных лиц, в том числе судебные акты, запретительные акты органов исполнительной власти, пожар, наводнение, землетрясение, другие стихийные действия, эпидемии, пандемии, отсутствие электроэнергии и/или сбои работы компьютерной сети (нарушение работы линий связи, неисправность оборудования и т. п.), приостановка работы сервисов, обслуживающих Платформу, забастовки, гражданские волнения, беспорядки, любые иные обстоятельства, не ограничиваясь перечисленным, которые могут повлиять на выполнение Администрацией условий настоящего Соглашения.</li>
            <li>Администрация не несёт ответственности за неисполнение или ненадлежащее исполнение обязательств по Соглашению, а также возможные убытки, возникшие в том числе, но не ограничиваясь, в результате:</li>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;а.</b> Неправомерных действий третьих лиц, направленных на нарушения информационной безопасности или нормального функционирования Платформы;</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;б.</b> Сбоев в работе Платформы, вызванных ошибками в коде, компьютерными вирусами и иными посторонними фрагментами кода в программном обеспечении Платформы;</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;в.</b> Отсутствия (невозможности установления, прекращения и пр.) интернет-соединений между сервером Пользователя и сервером Платформы;</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;г.</b> Проведения государственными и муниципальными органами оперативно-розыскных мероприятий, контрольно-надзорных, проверочных мероприятий;</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;д.</b> Установления государственного регулирования (или регулирования иными организациями) хозяйственной деятельности коммерческих организаций в сети Интернет и/или установления указанными субъектами разовых ограничений, затрудняющих или делающих невозможным исполнение Соглашения или его части;</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;е.</b> Других случаев, связанных с действиями/бездействием третьих лиц, направленными на ухудшение общей ситуации с использованием сети Интернет и/или компьютерного оборудования, существовавшей на момент заключения Соглашения;</div>
              <div><b>&nbsp;&nbsp;&nbsp;&nbsp;ж.</b> Выполнения Администрацией профилактических работ на Платформе.</div>
            <li>Все споры, вытекающие из правоотношений по настоящему Соглашению, разрешаются путём переговоров. В случае, если Стороны не придут к решению возникших между ними споров в ходе переговоров, такие споры должны быть переданы на рассмотрение в соответствующий суд Российской Федерации по месту нахождения Администрации с обязательным соблюдением претензионного порядка. Срок ответа на претензию составляет <b>10 рабочих дней</b> с даты получения претензии. Претензия должна направляться в адрес Администрации по адресу, указанному в Едином государственном реестр индивидуальных предпринимателей.</li>
            <li>Бездействие со стороны Администрации в случае нарушения Пользователем либо иными Пользователями положений Соглашений не лишает Администрацию права предпринять соответствующие действия в защиту своих интересов позднее, а также не означает отказ Администрации от своих прав в случае совершения в последующем подобных либо сходных нарушений.</li>
          </ol>
        </li>
        <li><b>Интеллектуальная собственность</b> 
          <ol> 
            <li>Содержимое Платформы, в том числе, но не ограничиваясь: подбор и расположением материалов, программный код Платформы, элементы дизайна, являются результатами интеллектуальной деятельности, исключительное право на которые в полном объеме принадлежит Администрации. Отдельные результаты интеллектуальной деятельности, размещённые на Платформе, используются Администрацией на основании лицензионного соглашения между Администрацией и правообладателем.</li>
              <div>Исключительное право на вышеуказанные результаты интеллектуальной деятельности не переходят к Пользователю в результате пользования Платформы и заключения Соглашения.</div> 
              <div>Пользователь вправе использовать указанные результаты интеллектуальной деятельности только при условии, если Администрация предоставила Пользователю такое право.</div> 
            <li>Отдельные результаты интеллектуальной деятельности используются Администрацией на Платформе на основании лицензионного соглашения между Администрацией и правообладателем. Пользователю запрещается использовать такие результаты интеллектуальной деятельности, если право их использования Пользователем не было предоставлено непосредственно правообладателем. В случае если право использования таких результатов интеллектуальной деятельности предоставлено Пользователю, он обязуется соблюдать установленные лицензией правила и ограничения использования материалов.</li>
          </ol>
        </li>
        <li><b>Персональные данные и их обработка</b> 
          <ol> 
            <li>Цель, условия, порядок и иные условия обработки персональных данных Пользователя определены <b>Политикой обработки персональных данных,</b> доступной по адресу: <a href='https://botinviter.ru/privacypolicy'>https://botinviter.ru/privacypolicy</a></li>
          </ol>
        </li>
        <li><b>Заключительные положения</b>
          <ol>
            <li>Настоящее Соглашение регулируется и толкуется в соответствии с законодательством Российской Федерации как <b>лицензионный договор.</b> Вопросы, не урегулированные настоящим Соглашением, подлежат разрешению в соответствии с законодательством Российской Федерации. Все возможные споры, связанные с использованием Платформы по настоящему Соглашению регулируются материальным и процессуальным правом Российской Федерации, при этом нормы коллизионного регулирования и нормы международного частного права не применяются к отношениям между Пользователем и Администрацией. В случае если отношения, связанные с использованием Сервиса, регулируются отдельным договором между Администрацией и Пользователем, правила разрешения споров, соблюдения претензионного порядка, вопросы применимого права определяются таким отдельным договором.</li>
            <li>Если по тем или иным причинам одно или несколько положений настоящего Соглашения будут признаны недействительными или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных положений Соглашения.</li>
            <li>Администрация вправе в любой момент по своему усмотрению в одностороннем порядке изменять условия Соглашения, при этом такие изменения вступают в силу в момент опубликования новой версии Соглашения на Платформе. <b>При каждом посещении Платформы Пользователь обязуется знакомиться с новой версией Соглашения.</b></li>
          </ol>
        </li>

        <h4>Продолжение использования Платформы будет означать согласие Пользователя с условиями актуальной редакции Соглашения.</h4>
        <h5>ИП Попов Владимир Александрович,</h5>
        <h5>ИНН 233911827564, ОГРНИП 322237500160389, КРАСНОДАРСКИЙ</h5>
        <h5>КРАЙ, КУРГАНИНСКИЙ Р-Н, Г КУРГАНИНСК, УЛ ГАСТЕЛЛО, дом 93</h5>
        <h5>Эл.почта Popov1997vo@yandex.ru</h5>
      </ol>
    </div>
  </div>
  );
}

export default UserYesScreen;
import React from 'react';  
import './style.css';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

function PoliticsScreen () {

  // useInvalidUrlAccess();
  const cross = images.cross;
  return (
    <div className="politics_screen" >
    <div className='politics_wrapper'>
    <Link to='/'><img onClick={() => {}} style={{cursor:'pointer'}} src={cross} alt="exit" width="28" height="28" /></Link>
      <h2>Согласие на обработку данных</h2>
      <h4>Политика в отношении обработки персональных данных</h4>
      <div>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона <b>от 27.07.2006. No152-ФЗ «О персональных данных»</b> и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных <b>ИП</b> ПОПОВ ВЛАДИМИР АЛЕКСАНДРОВИЧ, <b>ИНН</b> 233911827564 , <b>ОГРН</b> 322237500160389 , <b>(далее – Оператор).</b></div>
      <ol>
      <li><b>Общие положения</b>
        <ol>
          <li>Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</li>
          <li>Настоящая политика Оператора в отношении обработки персональных данных <b>(далее – Политика)</b> применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> и других сайтов Оператора.</li>
        </ol>
      </li>
      <li><b>Основные понятия, используемые в Политике</b>
        <ol>
          <li><b>Автоматизированная обработка персональных данных</b> – обработка персональных данных с помощью средств вычислительной техники;</li>
          <li><b>Блокирование персональных данных</b> – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</li>
          <li><b>Веб-сайт</b> – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу: <a href='https://botinviter.ru/'>https://botinviter.ru/</a></li>
          <li><b>Информационная система персональных данных</b> — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;</li>
          <li><b>Обезличивание персональных данных</b> — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;</li>
          <li><b>Обработка персональных данных</b> – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</li>
          <li><b>Оператор</b> – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</li>
          <li><b>Персональные данные</b> – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> и других сайтов Оператора;</li>
          <li><b>Пользователь</b> – любой посетитель веб-сайта: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> и других сайтов Оператора;</li>
          <li><b>Предоставление персональных данных</b> – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;</li>
          <li><b>Распространение персональных данных</b> – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;</li>
          <li><b>Трансграничная передача персональных данных</b> – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;</li>
          <li><b>Уничтожение персональных данных</b> – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.</li>
        </ol>
      </li>
      <li><b>Оператор может обрабатывать следующие персональные данные Пользователя</b>
        <ol>
          <li>Фамилия, имя, отчество;</li>
          <li>Электронный адрес;</li>
          <li>Номера телефонов;</li>
          <li>Названия аккаунтов Пользователя в соцсетях .</li>
          <li>Также на сайте происходит сбор и обработка обезличенных данных о посетителях <b>(в т.ч. файлов «cookie»)</b> с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).</li>
          <li>Вышеперечисленные данные далее по тексту Политики объединены общим понятием <b>Персональные данные.</b></li>
        </ol>
      </li>
      <li><b>Информация об обработке персональных данных</b></li>
      <div>Обработка персональных данных осуществляется Оператором на законной и справедливой основе, действуя разумно и добросовестно и на основе принципов: законности целей и способов обработки персональных данных; добровольности предоставления персональных данных; добросовестности; соответствия целей обработки персональных данных целям, заранее определенным и заявленным при сборе персональных данных; соответствия объема и характера обрабатываемых персональных данных, способов обработки персональных данных целям обработки персональных данных.</div>
      <li><b>Цели Политики</b></li>
      <div>Обеспечение безопасности персональных данных пользователей Сайта в процессе их получения, обработки (использования), передачи, хранения, утилизации и иных действий, предусмотренных Законом;</div>
      <div>обеспечение должного уровня доверия пользователей Сайта к предлагаемым Оператором сервисам;</div>
      <div>обеспечение надлежащего исполнения принятых Оператором на себя обязательств перед пользователями Сайта в процессе исполнения заключенных с помощью Сайта и его сервисов договоров.</div>
      <li><b>Персональные данные. Цели сбора и обработки персональных данных</b>
        <ol>
          <li>Вы всегда можете посетить данный сайт, не раскрывая никакой персональной информации.</li>
          <li>Под персональными данными понимается любая информация, относящаяся к определенному или определяемому на основании такой информации физическому лицу.</li>
          <li>Оператор собирает и использует персональные данные, необходимые для выполнения запроса Пользователя, верификации пользователей на Сайте, включая случаи восстановления доступа или изменения учетных данных по запросу Пользователя; направление документов об оплатах согласно <b>ФЗ No 54-ФЗ;</b> решение возможных конфликтных ситуаций; улучшение качества обслуживания; проведение статистических исследований; обеспечение связи с Оператором; направления рекламной информации по желанию Пользователя; минимизация правовых рисков нашего проекта, это – фамилия, имя, телефон и электронный адрес. Они нужны для того, чтобы Пользователь мог поддерживать связь с Оператором, авторизоваться на Сайте, восстановить доступ к аккаунту, при необходимости.</li>
          <li>Оператор не проверяет достоверность персональных данных, предоставляемых Пользователями, и не проверяет их дееспособность.</li>
          <li>Цель обработки персональных данных Пользователя — информирование Пользователя посредством отправки электронных писем; заключение, исполнение и прекращение гражданско-правовых договоров; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на сайте: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> и других сайтах Оператора.</li>
          <li>Персональные данные не распространяются, а также не предоставляются третьим лицам без согласия субъекта персональных данных и используются Оператором исключительно для исполнения указанного договора и заключения договоров с субъектом персональных данных;</li>
          <li>Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты <b>Popov1997vo@yandex.ru</b> с пометкой <b>«Отказ от уведомлениях о новых продуктах и услугах и специальных предложениях».</b></li>
          <li>Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</li>
        </ol>
      </li>
      <li><b>Правовые основания обработки персональных данных</b>
        <ol>
          <li>Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте: <a href='https://botinviter.ru/'>https://botinviter.ru/</a> и других сайтах Оператора. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</li>
          <li>Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя <b>(включено сохранение файлов «cookie» и использование технологии JavaScript)</b>.</li>
        </ol>
      </li>
      <li><b>Порядок сбора, хранения, передачи и других видов обработки персональных данных</b>
        <ol>
          <li>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</li>
          <li>Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</li>
          <li>Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</li>
          <li>В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора <b>Popov1997vo@yandex.ru</b> с пометкой <b>«Актуализация персональных данных».</b></li>
          <li>Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора <b>Popov1997vo@yandex.ru</b> с пометкой <b>«Отзыв согласия на обработку персональных данных».</b></li>
          <li>Оператор не осуществляет трансграничную передачу персональных данных.</li> 
        </ol>
      </li>
      <li><b>Заключительные положения</b>
        <ol>
          <li>Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты <b>Popov1997vo@yandex.ru</b>.</li>
          <li>Круг прав и обязанностей пользователя определен действующим законодательством. Настоящая Политика лишь дополняет общие положения нормативно-правовых актов для целей регулирования конкретной модели работы Оператора с пользователями, сложившейся в процессе использования Сайта и его сервисов.</li>
          <li>Мы не имеем возможности проверить достоверность указанных пользователем персональных данных при регистрации, за исключением номера телефона и адреса электронной почты, однако исходим из того, что пользователь указывает достоверные персональные данные.</li>
          <li>В случае, если пользователь предоставил недостоверные персональные данные, он самостоятельно несет риск наступления возможных негативных последствий (к примеру: отказ в восстановлении доступа при неверификации субъекта на основе ранее предоставленных им персональных данных, невозможность возвращения оплат при отказе от услуг). Пользователь обязан хранить в тайне от третьих лиц свои учетные данные для доступа к Сайту и его сервисам (логин и пароль).</li>
          <li>В случае, если учетные данные стали известны третьим лицам или у пользователя сайта – субъекта персональных данных есть основания предполагать наступление указанных обстоятельств, он должен обратиться к Оператору на адрес электронной почты <b>Popov1997vo@yandex.ru</b></li>
          <li>В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.</li>
          <li>Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу: <a href='https://botinviter.ru/privacypolicy'>https://botinviter.ru/privacypolicy</a></li>
        </ol>
      </li>
    </ol>
    </div>
  </div>
  );
}

export default PoliticsScreen;
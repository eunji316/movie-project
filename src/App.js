import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import MovieList from './component/MovieList';
import Movie01 from './img/movie01.webp'
import Movie02 from './img/movie02.webp'
import Movie03 from './img/movie03.webp'
import Movie04 from './img/movie04.webp'
import Movie05 from './img/movie05.webp'
import Movie06 from './img/movie06.webp'
import Movie07 from './img/movie07.webp'
import Movie08 from './img/movie08.webp'
import Movie09 from './img/movie09.webp'
import Movie10 from './img/movie10.webp'
import Movie11 from './img/movie11.webp'
import Movie12 from './img/movie12.webp'
import Movie13 from './img/movie13.webp'
import Movie14 from './img/movie14.webp'
import Movie15 from './img/movie15.webp'
import Movie16 from './img/movie16.webp'
import Movie17 from './img/movie17.webp'
import Movie18 from './img/movie18.webp'
import Movie19 from './img/movie19.webp'
import Movie20 from './img/movie20.webp'

const dummy = [
  {
    id : 0,
    title : '정직한 후보',
    year : '2020',
    grade : '12세 관람가',
    showtimes : '104분',
    receive : '8.35',
    director : '장유정',
    actor : '라미란, 김무열, 나문희, 윤경호',
    story : '거짓말이 제일 쉬운 3선 국회의원 ‘주상숙’에게 청천벽력이 떨어진다. 하루아침에 거짓말은 1도 할 수 없는 ‘진실의 주둥이’를 갖게 된 것! 최고의 무기인 ‘거짓말’을 잃자 그녀의 인생은 송두리째 흔들리게 되는데… 웃음 빵! 속이 뻥! 뚫리는 통쾌한 웃음 폭격이 시작된다!',
    photo : Movie01,
  },
  {
    id : 1,
    title : '온다',
    year : '2020',
    grade : '15세 관람가',
    showtimes : '134분',
    receive : '7.04',
    director : '나카시마 테츠야',
    actor : '오카다 준이치, 쿠로키 하루, 고마츠 나나, 마츠 다카코',
    story : '행복한 결혼 생활 중인 한 남자가 자신을 부르는 미스터리한 ‘그것’의 전화를 받는다 초현실적이고 의문스러운 사건들이 이어지고 결국 그의 아내와 딸도 표적이 된다 보이지 않지만 도망칠 수도 없는 공포 속, ‘그것’이 부른 그들의 비밀도 서서히 드러나는데... 준비됐습니까? 맞이합시다!',
    photo : Movie02,
  },
  {
    id : 2,
    title : '뮬란',
    year : '2020',
    grade : '12세 관람가',
    showtimes : '115분',
    receive : '8.09',
    director : '니키 카로',
    actor : '유역비, 견자단, 공리, 이연걸',
    story : '무예에 남다른 재능을 지닌 ‘뮬란’은 좋은 집안과 인연을 맺어 가문을 빛내길 바라는 부모님의 뜻에 따라 본연의 모습을 억누르고 성장한다. 어느 날, 북쪽 오랑캐들이 침입하자 황제는 징집령을 내리고 ‘뮬란’은 아픈 아버지를 대신해 가족들 몰래 전장에 나가기로 결심한다. 여자라는 게 발각되면 목숨을 잃을 수도 있는 상황 속에서 ‘뮬란’은 타고난 용기와 지혜로 역경을 이겨내며 전사로 성장한다. 마침내 잔인무도한 적장 ‘보리 칸’과 마녀 ‘시아니앙’을 마주하게 된 ‘뮬란’. 그녀는 위험에 빠진 동료와 가족을 구하고 진정한 전사로 거듭날 수 있을 것인가',
    photo : Movie03,
  },
  {
    id : 3,
    title : '삼진그룹 영어토익반',
    year : '2020',
    grade : '12세 관람가',
    showtimes : '110분',
    receive : '9.01',
    director : '이종필',
    actor : '고아성, 이솜, 박혜수',
    story : '입사 8년차 동기인 말단 여직원들이 ‘삼진그룹 영어토익반’에 모인다! 실무 능력 퍼펙트, 현실은 커피 타기 달인인 생산관리3부 오지랖 ‘이자영’, 추리소설 마니아로 뼈 때리는 멘트의 달인 마케팅부 돌직구 ‘정유나’, 수학 올림피아드 우승 출신, 실체는 가짜 영수증 메꾸기 달인 회계부 수학왕 ‘심보람’은 대리가 되면 진짜 ‘일’을 할 수 있을 것이라는 희망에 부푼다. 내부고발이라도 하게? 나서지 마. 우리만 다쳐 잔심부름을 하러 간 공장에서 검은 폐수가 유출되는 것을 목격한 ‘자영’은 ‘유나’, ‘보람’과 함께 회사가 무엇을 감추고자 하는지, 결정적 증거를 찾으려 한다. 불가능해 보이는 싸움, 세 친구는 해고의 위험을 무릅쓰고 고군분투를 시작하는데… 아이 캔 두 잇, 유 캔 두 잇, 위 캔 두 잇! 회사와 맞짱 뜨는 용감한 세 친구!',
    photo : Movie04,
  },
  {
    id : 4,
    title : '오타쿠에게 사랑은 어려워',
    year : '2020',
    grade : '12세 관람가',
    showtimes : '114분',
    receive : '5.62',
    director : '후쿠다 유이치',
    actor : '타카하타 미츠키, 야마자키 켄토, 나나오, 사이토 타쿠미',
    story : '평범한 회사원 나루미는 이직한 회사에서 소꿉친구 히로타카와 재회한다. 잘생기고 일도 잘하는 히로타카는 사실 중증 게임 오타쿠이고, 나루미 역시 애니메이션에 푹 빠진 오타쿠! 오타쿠인 것을 숨겨온 나루미는 히로타카 앞에서만 본 모습을 드러내고 히로타카의 제안으로 둘은 아슬아슬한 초보 연애를 시작한다. 그러나 연애 부적합자인 오타쿠들의 연애는 생각보다 쉽지 않은데….',
    photo : Movie05,
  },
  {
    id : 5,
    title : '랑종',
    year : '2021',
    grade : '청소년 관람불가',
    showtimes : '131분',
    receive : '6.60',
    director : '반종 피산다나쿤',
    actor : '나릴야 군몽콘켓, 싸와니 우툼마, 씨라니 얀키띠칸, 야사카 차이쏜',
    story : '태국 북동부 ‘이산’ 지역 낯선 시골 마을. 집 안, 숲, 산, 나무, 논밭까지, 이 곳의 사람들은 모든 것에 혼이 깃들어 있다고 믿는다. 가문의 대를 이어 조상신 ‘바얀 신’을 모시는 랑종(무당) ‘님’은 조카 ‘밍’의 상태가 심상치 않음을 직감한다. 날이 갈수록 이상 증세가 점점 심각해지는 ‘밍’. 무당을 취재하기 위해 ‘님’과 동행했던 촬영팀은 신내림이 대물림되는 순간을 포착하기 위해 ‘밍’과 ‘님’, 그리고 가족에게 벌어지는 미스터리한 현상을 카메라에 담기 시작한다. 신내림이 대물림되는 무당 가문 피에 관한 세 달간의 기록',
    photo : Movie06,
  },
  {
    id : 6,
    title : '보이스',
    year : '2021',
    grade : '15세 관람가',
    showtimes : '109분',
    receive : '7.86',
    director : '김선, 김곡',
    actor : '변요한, 김무열, 김희원, 박명훈',
    story : '부산 건설현장 직원들을 상대로 걸려온 전화 한 통. 보이스피싱 전화로 인해 딸의 병원비부터 아파트 중도금까지, 당일 현장에서는 수많은 사람들이 목숨 같은 돈을 잃게 된다. 현장작업반장인 전직형사 서준은 가족과 동료들의 돈 30억을 되찾기 위해 보이스피싱 조직을 추적하기 시작한다. 마침내 중국에 위치한 본거지 콜센터 잠입에 성공한 서준, 개인정보확보, 기획실 대본입고, 인출책 섭외, 환전소 작업, 대규모 콜센터까지! 체계적으로 조직화된 보이스피싱의 스케일에 놀라고, 그곳에서 피해자들의 희망과 공포를 파고드는 목소리의 주인공이자 기획실 총책 곽프로를 드디어 마주한다. 그리고 그가 300억 규모의 새로운 총력전을 기획하는 것을 알게 되는데.. 상상이상으로 치밀하게 조직화된 보이스피싱의 실체! 끝까지 쫓아 반드시 되찾는다!',
    photo : Movie07,
  },
  {
    id : 7,
    title : '꽃다발 같은 사랑을 했다',
    year : '2021',
    grade : '12세 관람가',
    showtimes : '124분',
    receive : '8.54',
    director : '도히 노부히로',
    actor : '아리무라 카스미, 스다 마사키',
    story : '“시작은 막차였다” 집으로 가는 막차를 놓친 스물한 살 대학생 ’무기’와 ‘키누’는 첫차를 기다리며 함께 시간을 보내게 된다. 좋아하는 책부터 영화, 신고 있는 신발까지 모든 게 꼭 닮은 두 사람은 수줍은 고백과 함께 연애를 시작하고 매일매일 행복한 시간을 쌓아간다. “내 인생의 목표는 너와의 현상 유지야!” 하지만 대학 졸업과 함께 취업 준비에 나선 두 사람은 점점 서로에게 소원해지고 꿈과 현실 사이의 거리 만큼 마음의 거리도 멀어지기 시작하는데...',
    photo : Movie08,
  },
  {
    id : 8,
    title : '캔디맨',
    year : '2021',
    grade : '15세 관람가',
    showtimes : '91분',
    receive : '6.31',
    director : '니아 다코스타',
    actor : '야히아 압둘마틴 2세, 티오나 패리스',
    story : '들어봤니? 미지의 존재 캔디맨 비주얼 아티스트 ‘안소니’는 새 작품 구상을 위해 어릴 적 살던 도시로 돌아가고, 그곳에서 오래 전부터 떠돈 괴담을 듣고 매혹되면서 ‘캔디맨’에 대한 충격적인 비밀을 알게 되는데... 불러봤니? 죽음을 부르는 남자 캔디맨 세상을 뒤흔든 미지의 존재 캔디맨, 캔디맨, 캔디맨, 캔디맨... 한 번만 더 부르면 그가 나타나게 되는데… 용기가 있다면 그의 이름을 불러봐',
    photo : Movie09,
  },
  {
    id : 9,
    title : '퍼피 구조대 더 무비',
    year : '2021',
    grade : '전체 관람가',
    showtimes : '86분',
    receive : '9.46',
    director : '캘런 브렁커',
    actor : '정선혜, 신용우, 김새해, 엄상현',
    story : '시민들을 속여 어드벤처 시티의 시장이 된 날씨 악당 ‘험딩어’는 구름을 조종해 천둥번개를 만드는 등 시민들을 위협하며 본모습을 드러낸다. 그런 가운데, 어드벤처 시티의 용감한 퍼피 ‘리버티’로부터 도시가 위험에 빠졌다는 소식을 들은 퍼피 구조대가 신속하게 시티로 출동하는데…! 위기에 빠진 어드벤처 시티의 운명은?',
    photo : Movie10,
  },
  {
    id : 10,
    title : '공조 2 : 인터내셔날',
    year : '2022',
    grade : '15세 관람가',
    showtimes : '129분',
    receive : '7.92',
    director : '이석훈',
    actor : '현빈, 유해진, 윤아, 다니엘 헤니, 진선규',
    story : '공조 이즈 백! 이번엔 삼각 공조다! 남한으로 숨어든 글로벌 범죄 조직을 잡기 위해 새로운 공조 수사에 투입된 북한 형사 ‘림철령’. 수사 중의 실수로 사이버수사대로 전출됐던 남한 형사 ‘강진태’는 광수대 복귀를 위해 모두가 기피하는 ‘철령’의 파트너를 자청한다. 이렇게 다시 공조하게 된 ‘철령’과 ‘진태’! ‘철령’과 재회한 ‘민영’의 마음도 불타오르는 가운데, ‘철령’과 ‘진태’는 여전히 서로의 속내를 의심하면서도 나름 그럴싸한 공조 수사를 펼친다. 드디어 범죄 조직 리더인 ‘장명준’의 은신처를 찾아내려는 찰나, 미국에서 날아온 FBI 소속 ‘잭’이 그들 앞에 나타나는데…! 아직도 짠내 나는 남한 형사, 여전한 엘리트 북한 형사, 그리고 FBI 소속 해외파 형사까지! 각자의 목적으로 뭉친 그들의 짜릿한 공조 수사가 시작된다!',
    photo : Movie11,
  },
  {
    id : 11,
    title : '오늘 밤, 세계에서 이 사랑이 사라진다 해도',
    year : '2022',
    grade : '12세 관람가',
    showtimes : '121분',
    receive : '7.92',
    director : '미키 타카히로',
    actor : '미치에다 슌스케, 후쿠모토 리코, 후루카와 코토네, 마츠모토 호노카',
    story : '“카미야 토루에 대해 잊지 말 것” 자고 일어나면 전날의 기억을 잃는 ‘선행성 기억상실증’에 걸린 소녀 ‘마오리’ “내일의 마오리도 내가 즐겁게 해줄 거야" 누구에게도 기억되지 않는 무색무취의 평범한 소년 ‘토루’ 매일 밤 사랑이 사라지는 세계, 그럼에도 불구하고, 다음 날 서로를 향한 애틋한 고백을 반복하는 두 소년, 소녀의 가장 슬픈 청춘담',
    photo : Movie12,
  },
  {
    id : 12,
    title : '아바타 : 물의 길',
    year : '2022',
    grade : '12세 관람가',
    showtimes : '192분',
    receive : '8.83',
    director : '제임스 카메론',
    actor : '샘 워딩턴, 조 샐다나, 시고니 위버, 스티븐 랭, 케이트 원슬렛',
    story : '<아바타: 물의 길>은 판도라 행성에서 ‘제이크 설리’와 ‘네이티리’가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.',
    photo : Movie13,
  },
  {
    id : 13,
    title : '천박사 퇴마 연구소 : 설경의 비밀',
    year : '2023',
    grade : '12세 관람가',
    showtimes : '98분',
    receive : '7.15',
    director : '김성식',
    actor : '강동원, 허준호, 이솜, 이동휘',
    story : '대대로 마을을 지켜 온 당주집 장손이지만 정작 귀신은 믿지 않는 가짜 퇴마사 ‘천박사’. 사람의 마음을 꿰뚫는 통찰력으로 가짜 퇴마를 하며, 의뢰받은 사건들을 해결해 오던 그에게 귀신을 보는 의뢰인 ‘유경’이 찾아와 거액의 수임료로 거절하기 힘든 제안을 한다. ‘천박사’는 파트너 ‘인배’와 함께 ‘유경’의 집으로 향하고 그곳에서 벌어지는 사건을 쫓으며 자신과 얽혀 있는 부적인 ‘설경’의 비밀을 알게 되는데… 귀신을 믿지 않는 가짜 퇴마사! 그의 세계를 흔드는 진짜 사건이 나타났다!',
    photo : Movie14,
  },
  {
    id : 14,
    title : '일주일간 친구',
    year : '2023',
    grade : '12세 관람가',
    showtimes : '106분',
    receive : '6.79',
    director : '임효겸',
    actor : '조금맥, 린이, 심월, 왕가휘',
    story : '일주일마다 친구에 대한 기억을 잃는 전학생 ‘린샹즈’ 병 때문에 자발적 아싸가 돼버린 그녀에게 성화 재수학원 최고 인싸 3인방 ‘쉬유수’, ‘송샤오난’, ‘장우’가 다가온다. “일주일만 기억해도 상관없어. 일주일간 친구 하면 되잖아!” 머리가 좋아지는 호박죽, 기억력 증진 댄스, 깜찍한 유수표 엄지 인형까지! 세 사람은 샹즈의 단 하나뿐인 ‘일주일간 친구’가 되기 위해 고군분투하고, 샹즈는 그들과의 추억을 일기장에 채워 나가기 시작한다. 매주 리셋되는 우정 속에서 과연 우리는 ‘찐친’이 될 수 있을까?!',
    photo : Movie15,
  },
  {
    id : 15,
    title : '프레디의 피자가게',
    year : '2023',
    grade : '12세 관람가',
    showtimes : '109분',
    receive : '6.63',
    director : '엠마 타미',
    actor : '조쉬 허처슨, 엘리자베스 라일, 캣 코너 스털링, 파이퍼 루비오',
    story : '“환상적이고 즐거움이 넘치는 프레디의 피자가게에 오신 걸 환영합니다” 80년대에 아이들이 실종되고 폐업한지 오래된 프레디의 피자가게 그곳의 야간 경비 알바를 하게 된 ‘마이크’는 캄캄한 어둠만이 존재하는 줄 알았던 피자가게에서 살아 움직이는 피자가게 마스코트 ‘프레디와 친구들’을 목격한다. 어딘가 기괴하고 섬뜩한 프레디와 친구들이 실체를 드러내기 시작하는데...',
    photo : Movie16,
  },
  {
    id : 16,
    title : '그대들은 어떻게 살 것인가',
    year : '2023',
    grade : '전체 관람가',
    showtimes : '124분',
    receive : '6.96',
    director : '미야자키 하야오',
    actor : '산토키 소마, 스다 마사키, 시바사키 코우, 아이묭',
    story : '화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운 보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고, 왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!',
    photo : Movie17,
  },
  {
    id : 17,
    title : '서울의 봄',
    year : '2023',
    grade : '12세 관람가',
    showtimes : '141분',
    receive : '9.59',
    director : '김성수',
    actor : '황정민, 정우성, 이성민, 박해준, 김성균',
    story : '1979년 12월 12일, 수도 서울 군사반란 발생 그날, 대한민국의 운명이 바뀌었다 대한민국을 뒤흔든 10월 26일 이후, 서울에 새로운 바람이 불어온 것도 잠시 12월 12일, 보안사령관 전두광이 반란을 일으키고 군 내 사조직을 총동원하여 최전선의 전방부대까지 서울로 불러들인다. 권력에 눈이 먼 전두광의 반란군과 이에 맞선 수도경비사령관 이태신을 비롯한 진압군 사이, 일촉즉발의 9시간이 흘러가는데… 목숨을 건 두 세력의 팽팽한 대립 오늘 밤, 대한민국 수도에서 가장 치열한 전쟁이 펼쳐진다!',
    photo : Movie18,
  },
  {
    id : 18,
    title : '괴물',
    year : '2023',
    grade : '12세 관람가',
    showtimes : '127분',
    receive : '8.97',
    director : '고레에다 히로카즈',
    actor : '안도 사쿠라, 나가야마 에이타, 쿠로카와 소야, 히이라기 히나타',
    story : '“우리 동네에는 괴물이 산다” 싱글맘 사오리는 아들 미나토의 행동에서 이상 기운을 감지한다. 용기를 내 찾아간 학교에서 상담을 진행한 날 이후 선생님과 학생들의 분위기가 심상치 않게 흐르기 시작하고. “괴물은 누구인가?” 한편 사오리는 친구들로부터 따돌림을 당하고 있는 미나토의 친구 요리의 존재를 알게 되고 자신이 아는 아들의 모습과 사람들이 아는 아들의 모습이 다르다는 사실을 어렴풋이 깨닫는데… 태풍이 몰아치던 어느 날, 아무도 몰랐던 진실이 드러난다.',
    photo : Movie19,
  },
  {
    id : 19,
    title : '말하고 싶은 비밀',
    year : '2023',
    grade : '전체 관람가',
    showtimes : '111분',
    receive : '7.41',
    director : '타케무라 켄타로',
    actor : '타카하시 후미야, 사쿠라다 히요리',
    story : '어느 날 갑자기 고백 사고!? 마음이 잘못 배달되었다! ‘노조미’는 자신의 책상 서랍 속 ‘좋아해’라는 쪽지를 발견한다. 쪽지의 주인공은 바로 학교 최고 인기남 ‘세토야마’! 전교생이 좋아하는 이상형으로부터 고백받은 설렘도 잠시, 고백의 주인이 사실은 자신이 아니었음을 알고 망연자실한다. 엇갈릴수록 점점 커져가는 너를 향한 마음, 내일은 너에게 말할 수 있을까?',
    photo : Movie20,
  },
]

function App() {

  const [category, setCategory] = useState('all');

  return (
    <div className="App">
      <Header setCategory={setCategory} />
      <MovieList dummy={dummy} category={category} />
    </div>
  );
}

export default App;

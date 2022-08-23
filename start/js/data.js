/*
식물 저승사자,0
아기 식집사,1
요망진 식집사,2
식닥터,3
페르세포네,4
*/

const qnaList = [
  {
    q: '1. 반려 식물을 얼마나 키워봤나요?',
    a: [
      { answer: 'a. 키워본 적 없음', value: 0 },
      { answer: 'b. 1개월 이하', value: 1 },
      { answer: 'c. 1~3개월', value: 2 },
      {answer:'d. 3~6개월', value: 3 },
    ]
  },
  {
    q: '2. "식집사"는 어떤 사람을 의미하나요? ',
    a: [
      { answer: 'a. 음식을 먹어본 후 맛을 알려주는 사람', value: 0 },
      { answer: 'b. 식물을 키우는 사람', value: 1 },
      { answer: 'c. 결혼식에서 신부를 도와주는 사람', value: 0 },
    ]
  },
  {
    q: '3. 식물을 돌보면서 즐거움을 느끼나요? 걱정을 먼저 하나요?',
    a: [
      { answer: 'a. 어떻게 자랄지 기대가 되고 즐거움을 느낀다', value: 0 },
      { answer: 'b. 식물을 어떻게 잘 키울지 걱정이 된다', value: 2 },
      { answer: 'c. 아무런 생각이 없다', value: 1 }
    ]
  },
  {
    q: '4. 반려식물 호텔이 있다는 사실을 알고 있었나요?',
    a: [
      { answer: 'a. 몰랐다 ', value: 0 },
      { answer: 'b. 알고 있었지만 가보진 않았다', value: 1 },
      { answer: 'c. 알고 있었으며 가봤다 ', value: 2 },
    ]
  },
  {
    q: '5. 손만 대면 식물을 죽인다는 "식물 킬러"라는 별명으로 불려본 적 있나요?',
    a: [
      { answer: 'a. 들어본 적 있다', value: 0 },
      { answer: 'b. 들어본 적 없다', value: 1 },
    ]
  },

  {
    q: '6. 처음 접하는 식물도 어떻게 돌봐야 할 지 금방 터득할 수 있나요?',
    a: [
      { answer: 'a. 아니요ㅜ', value: 0 },
      { answer: 'b. 금방 터득할 자신 있습니다', value: 1 },
      { answer: 'c. 이미 모든 식물에 대해 파악 완료한 상태입니다', value: 2 },
    ]
  },
  {
    q: '7. 식물성장 조명의 색상은 무엇인가요?',
    a: [
      { answer: 'a. 파란색', value: 0 },
      { answer: 'b. 노란색', value: 0 },
      { answer: 'c. 자주색', value: 1 },
    ]
  },
  {
    q: '8. "플랜테리어"는 어떤 단어를 합성하여 만들었을까요?',
    a: [
      { answer: 'a. plant + interior', value: 1 },
      { answer: 'b. plant + territory', value: 0 },
      { answer: 'c. plain + exterior', value: 0 },
      { answer: 'd. plane + interior', value: 0 },
    ]
  },
  {
    q: '9. 식물 키우기의 필수 4요소가 아니라고 생각되는 것을 고르시오',
    a: [
      { answer: 'a. 온도', value: 0 },
      { answer: 'b. 시멘트', value: 1 },
      { answer: 'c. 빛', value: 0 },
      { answer: 'd. 수분', value: 0 },
    ]
  },
  {
    q: '10. 식물을 보며 멍 때리는 것을 뜻하는 것으로 가장 적합한 신조어는 무엇일까요? ',
    a: [
      { answer: 'a. 플멍', value: 1 },
      { answer: 'b. 식멍', value: 0 },
      { answer: 'c. 숲멍', value: 0 },
    ]
  },
  {
    q: '11. 작약은 끝을 뜨거운 물로 지져줘야 한다 (O/X)  ',
    a: [
      { answer: 'a. O(맞다)', value: 1 },
      { answer: 'b. X(아니다)', value: 0},
    ]
  },
  {
    q: '12. 식물을 개인 호흡 범위 이내에 두면 피부가 정화되는 효과를 얻을 수 있다 (O/X)  ',
    a: [
      { answer: 'a. O(맞다)', value: 1 },
      { answer: 'b. X(아니다)', value: 0},
    ]
  }
]

const infoList = [
  {
    name: '손만 대면 식물을 죽이는 <식물 저승사자>',
    desc: '아직은 식물을 키우는 법을 더 공부해야겠군요.. 죽어간 식물들을 위해 R.I.P...'
  },
  {
    name: '식물의 세계로 갓 입문한 <아기 식집사>',
    desc: '응애 나 아기 식집사~! '
  },
  {
    name: '야무지게 식물을 키우는 <요망진 식집사>',
    desc: '앞으로도 요망지게 식물 키우시길 바라겠습니다~'
  },
  {
    name: '레벨업 ! 식 to the 집 to the 사 <식닥터>',
    desc: '하! 앞으로도 함께 식물 키워보자구요!'
  },
  {
    name: '식물 생장의 여신 <페르세포네>',
    desc: '그저 GOD! 당신은 식물 생장의 신입니다.'
  }
]

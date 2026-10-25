/*
 * WELLGOING / editable site copy
 * 텍스트를 수정할 때 이 파일의 값만 수정하면 메인 주요 문구와 제품정보가 반영됩니다.
 * 현재는 백엔드가 없는 1차 반응형 시안입니다. CMS 연동은 후속 단계입니다.
 */
window.WELLGOING_CONTENT = {
  heroLead: 'AI로 이어지는 케어,\n더 나은 일상을 만듭니다.',
  productsLead: '피부와 구강, 일상과 케어 현장을 위한 웰고잉의 프리미엄 케어 컬렉션.',
  bodyLead: '물 없이도 한 장으로, 세정과 보습을 함께 생각한 프리미엄 바디 케어.',
  dentLead: '손잡이는 다시 사용하고, 헤드는 교체하는 구강 위생 케어 제품을 준비하고 있습니다.',
  brand: {headline:'더 나은 케어는\n사람을 이해하는 것에서 시작됩니다.',description:'돌봄 현장의 질문을 세심한 제품과 기술로 연결합니다. 누구에게나 존엄하고 편안한 일상을 위해.',origin:'호스피스 병동과 요양환경에서 물로 씻기 어려운 분들의 위생을 어떻게 지킬 수 있을까. 비채 바디쉴드는 그 질문에서 출발했습니다.'},
  ai: {headline:'장소와 담당자가 바뀌어도,\n케어는 이어지도록.',description:'음성으로 남긴 현장 기록을 AI로 구조화·요약하고, 필요한 케어 정보를 다음 담당자에게 이어줍니다.'},
  partnership: {description:'병원·요양기관부터 국내외 유통 파트너까지. 웰고잉의 케어 솔루션을 함께 넓혀갈 파트너를 찾습니다.'},
  heroDesc: '사람의 존엄을 지키는 프리미엄 케어 제품과\nAI 기술로 케어의 연속성을 만들어갑니다.',
  products: {
    body: {
      kicker: '01 / PREMIUM BODY CARE',
      title: '비채 바디쉴드',
      description: '물 없이 사용할 수 있는 한 장의 프리미엄 바디 세정·보습 시트. 케어 현장과 일상에서 편안하게 사용할 수 있도록 개발했습니다.',
      image: 'assets/body-sheet.webp',
      imageAlt: '비채 바디쉴드 공식 제품 이미지',
      specs: [['제품 구성','1매 개별 포장'], ['시트 크기','30 × 30 cm'], ['에센스','45 mL'], ['주요 성분','편백수 · 판테놀 · 5종 세라마이드'],['제조국','대한민국']],
      note: '상세 성분, 사용상 주의사항 및 최신 표시정보는 실제 제품 패키지를 확인해 주세요.',
      action: '네이버 스마트스토어 방문 ↗',
      href: 'https://smartstore.naver.com/sobisense'
    },
    dent: {
      kicker: '02 / ORAL CARE · COMING SOON',
      title: '비채 덴트쉴드',
      description: '재사용 손잡이와 교체형 헤드로 구성하는 구강 위생 케어 제품 컨셉입니다. 출시 전 제품으로, 이미지는 구조 설명을 위한 일러스트입니다.',
      image: 'assets/dent-shield-concept.jpg',
      imageAlt: '비채 덴트쉴드 출시 예정 제품의 컨셉 일러스트',
      specs: [['현재 상태','출시 예정'], ['제품 구조','재사용 손잡이 + 교체형 헤드'], ['안내','세부 사양 및 판매 일정은 추후 공지']],
      note: '공개한 정보는 업로드된 안내자료를 기준으로 작성했습니다.',
      action: '제품 개발 문의 ↗',
      href: 'mailto:wellgoing@wellgoing.kr?subject=%5B%EC%9B%B0%EA%B3%A0%EC%9E%89%5D%20%EB%8D%B4%ED%8A%B8%EC%89%B4%EB%93%9C%20%EB%AC%B8%EC%9D%98'
    }
  },
  aiSteps: [
    {title:'케어 현장',description:'현장에서 발생하는 케어 내용과 상태 변화를 기록할 준비를 합니다.'},
    {title:'음성 기록',description:'증상, 상태 변화, 특이사항을 음성으로 기록합니다.'},
    {title:'AI 구조화·요약',description:'기록에서 필요한 정보를 추출하여 핵심 내용을 구조화하고 요약합니다.'},
    {title:'정보 전달·공유',description:'다음 케어 담당자가 확인할 수 있도록 주요 정보를 전달하고 공유합니다.'},
    {title:'후속 확인',description:'권고 사항과 일정, 조치 여부 등 후속 기록을 확인합니다.'}
  ]
};

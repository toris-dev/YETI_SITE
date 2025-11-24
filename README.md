# 🏔️ Yeti Sports Meme Coin

Yeti Sports 밈코인 공식 웹사이트입니다. Pump.fun에서 발행된 Solana 기반 밈코인 프로젝트입니다.

## 🚀 시작하기

### 설치

```bash
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📋 로드맵

### Phase 1: 토큰 발행 및 초기 마케팅 ✅
- [x] Pump.fun에서 토큰 발행
- [x] 공식 웹사이트 런칭
- [x] 소셜 미디어 채널 개설
- [x] 초기 홀더 모집

### Phase 2: 커뮤니티 확장 🚀
- [ ] 디스코드/텔레그램 커뮤니티 활성화
- [ ] 밈 콘테스트 개최
- [ ] 인플루언서 파트너십
- [ ] CMC/Coingecko 등록 신청

### Phase 3: 거래소 상장 📅
- [ ] Raydium DEX 상장
- [ ] CEX 상장 신청 (Jupiter, Orca 등)
- [ ] 유동성 풀 확대
- [ ] 거래량 목표 달성

### Phase 4: 생태계 확장 📅
- [ ] Yeti Sports 게임 리메이크 프로젝트
- [ ] NFT 컬렉션 발행 검토
- [ ] 게임 내 토큰 활용
- [ ] 장기 생태계 구축

## 🛠️ 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **Solana Web3.js** - 블록체인 연동

## 📝 주요 기능

- ✅ 반응형 디자인
- ✅ 실시간 토큰 정보 표시 (Solana RPC 연동 필요)
- ✅ 로드맵 섹션
- ✅ 커뮤니티 링크
- ✅ Pump.fun 연동

## 🔧 설정

### 환경 변수

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_TOKEN_ADDRESS=YOUR_TOKEN_ADDRESS_HERE
```

### 토큰 정보 업데이트

`components/TokenInfo.tsx`에서 실제 토큰 주소를 입력하고 Solana RPC를 통해 토큰 정보를 조회하도록 구현하세요.

## 📄 라이선스

MIT

## ⚠️ 면책 조항

이 프로젝트는 교육 및 정보 제공 목적으로 제작되었습니다. 암호화폐 투자는 높은 리스크를 수반하며, 투자 결정은 신중하게 하시기 바랍니다.


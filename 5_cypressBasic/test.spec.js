// describe을 통해 테스트를 분류하고 it으로 실제 테스트 코드를 작성한다.
// context는 descript와 같은 역할을 하는데 가독성을 위해 다르게 사용

describe("cypress demo", () => {
  context("검색", () => {
    it("검색 후 결과를 클릭하면 작품 홈으로 이동한다.", () => {});
  });
});

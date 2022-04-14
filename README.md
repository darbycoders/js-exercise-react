# React Exercise

## Table of contents

* [1.Basic](#basic)
* [2.JsxReactElement](#jsxReactElement)

## Basic

```html
<div id="root" className="container">
  <h1>React</h1>
</div>

{
  tagName: 'div',
  props: {
    id: 'root',
    className: 'container',
  },
  children: [
    {
      tagName: 'h1',
      props: {},
      children: {
        'React'
      }
    }
  ]
}
```

## JsxReactElement

#### JSX
페이스북의 React 개발팀에서 React 를 소개할 때 3가지를 중점으로 설명합니다.
(선언형, 컴포넌트 기반, 한 번 배워서 어디서나 사용하기)

그중에서도 Declarative (선언형)은 이번 주제와 깊은 연관성이 있는데요

프론트엔드 개발을 하다 보면 유저 인터렉션이 많은 UI를 만들 때 어려움이 발생합니다.
이에 대응하여 React 는 데이터 변경에 알아서 렌더링 할 수 있는 방법을 제공하고 개발자가 각 상태에 대한 뷰만 설계할 수 있도록 돕습니다.

구체적으로 Declarative (선언형) View 를 작성하여 예측 가능한 코드로 드러내는 것을 위해 사용할 수 있는 것이 JSX 입니다.

JSX(Javascript XML) 는 마치 HTML 처럼 보이지만 JavaScript 로 인식할 수 있습니다.

이러한 동작이 가능하기 위해 내부적으로 다양한 동작을 하겠지만 기본적으로 Babel 이라는 도구를 활용해 트랜스파일링 할 수 있습니다.

#### React.createElement

React를 처음 접할 때 **JSX** 만으로 컴포넌트를 작성했다면 `React.createElement`를 알지 못하더라도 큰 문제는 없습니다.

사실 **JSX** 는 `React.createElement()`의 **Syntactic Sugar** (문법적 설탕)이기 때문입니다.

기본적으로 `React.createElement()`는 네이밍에서 알 수 있는 의미 그대로 **React Element** 를 생성하고 반환합니다.

또한 **React Element** 는 React에서 가장 작은 단위라고도 할 수 있습니다.

#### learning keyword

1. JSX
2. React.createElement
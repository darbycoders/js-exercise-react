# React Exercise

## Table of contents

* [1.Basic](#basic)
* [2.JsxReactElement](#jsxReactElement)
* [3.Rendering](#rendering)
* [4.State](#state)
* [5.Props](#props)
* [6.ReactUsestate](#reactUsestate)
* [7.ReactUseEffect](#reactUseEffect)
* [8.UseRef](#useRef)

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

## Rendering

```javascript
ReactDOM.render(element, container)
```

첫 번째 인자로 제공된 React Element 를 두 번째 인자인 Container Element 의 내부에 렌더링시킬 수 있습니다.

#### learning keyword

- ReactDOM.render()

## State

React Component의 상태는 State 라는 개념으로 다룹니다. 이 State는 변경 가능하며 변경될때마다 Component는 리렌더링 됩니다.<br> Class Component와 Function Component에 따라 State 관련 코드를 작성하는 방식과 내부적으로 동작하는 방식이 조금 다릅니다.<br> 다만 State를 직접 변경하지 않는다는 점과 State가 변경되면 리렌더링이 트리거되는 점은 여전히 같습니다.<br> Function Component에서의 State는 useState에서 다룰 예정이니 이번 케이스에서는 Class Component에서의 State에 대해서 다룹니다.<br> State와 리렌더링이 어떻게 동작하는지 알아보기 위해서 간단하게 아래와 같은 형태로 Component 클래스를 작성해봅니다.

## Props

React Component는 Props 라는 불변(immutable) 객체를 받습니다.<br>이 Props는 Properties를 의미하며 컴포넌트 트리에서 항상 위에서 아래로만 흐르는 단방향 특성을 갖습니다.<br> 그리고 컴포넌트는 전달받은 Props를 변경할 수 없습니다.<br> 이는 React가 컴포넌트를 Props 라는 arguments를 받아 UI 정보를 반환하는 하나의 단순한 함수로 바라보는 철학에서 비롯된 것입니다.<br> 다시 말해, 어떤 컴포넌트에 동일한 Props를 전달하면 항상 동일한 UI 결과가 나올 것이라고 확신할 수 있고<br> 이 높은 확신에서 UI를 더 선언적으로 바라보게 되는 점, 코드 가독성 향상, 테스트하기 쉬운 점 등의 이점을 얻게 됩니다.

#### learning keyword

- JavaScript
  - Function
    - Function Parameter Validation
  - Object.seal() & Object.isSealed()
  - Object.freeze() & Object.isFrozen()
  - Object.getOwnPropertyDescriptor()

## ReactUsestate

react의 useState함수를 이해를 위한 구현

## ReactUseEffect

react의 useEffect함수를 이해를 위한 구현

## UseRef

React의 useRef hook은 기본적으로 원하는 DOM Node에 접근해 reference를 얻는 것에 목적이 있습니다.<br> 그러나 이렇게 DOM Node에 접근하는 용도로도 쓰이지만 useRef는 컴포넌트의 full lifetime 동안 레퍼런스가 유지되는 mutable object를 반환하기 때문에<br> 이전 값을 유지하는 용도로도 사용될 수 있습니다.<br> 즉, useRef는 매 렌더마다 레퍼런스가 고정된 객체를 반환합니다.<br> useRef는 아래와 같은 function signature를 갖고 있습니다.<br> 특정 타입을 갖는 초깃값을 받아 current 프로퍼티에 그 값을 갖는 리터럴 객체를 반환합니다.<br> 이때 이 객체는 seal이나 freeze가 되어있지 않은 객체여서 기존의 프로퍼티를 수정 및 삭제하거나 새 프로퍼티를 추가할 수 있습니다.

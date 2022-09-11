const TEXT_ELEMENT = 'TEXT_ELEMENT';

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(item => {
        if (typeof item === 'object') {
          return item;
        } else {
          // 原始数据类型进行处理
          createTextElement(text);
        }
      }),
    },
  }
}

// 创建 Text 类型的元素
function createTextElement(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    }
  }
}

function createDom(fiber) {
  const dom = fiber.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(fiber.type);
  // 将 fiber 的 props 分配 dom
  Object.keys(fiber.props)
    .filter(key => key !=== 'children')
    .forEach(key => {
      dom[key] = fiber.props[key];
    })

  return dom;

  // 如果渲染 tree 太大，阻塞主进程太长时间。如果浏览器需要做其他类似于用户输入或者动画流畅之类高优先级任务，则必须等渲染完成才行
  // 递归渲染子元素
  // (fiber.props.children || []).forEach(child => render(child, dom));
  // container.appendChild(dom);
}

function commitRoot() {
  commitWork(wipRoot.child);
  // currentRoot: 最后一次 commit 到 DOM 的一棵 Fiber Tree
  currentRoot = wipRoot;
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return
  }

  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

function render(element, container) {
  // TODO:render 函数
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  }

  nextUnitOfWork = wipRoot;
}

let nextUnitOfWork = null;
let wipRoot = null;
let currentRoot = null;

function workLoop() {
  // TODO:这个是代表有更高优先级需要渲染？为 true 则不渲染 tree
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    // 表示当前闲置周期的预估剩余毫秒数，为什么是小于 1？
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  requestIdleCallback(workLoop);
}

// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback
requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  // TODO:优化对任务的执行？
  // 添加 dom
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }
  const elements = fiber.props.children || [];
  let index = 0;
  let prevSibling = null;

  // 创建新的 fiber
  while (index < elements.length) {
    const element = elements[index];

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }

    // 如果是第一个 child，则为 child，否则为 sibling
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }

  // 如果它有 child ，那么这个 Fiber 会被当作是下一个工作单元。
  if (fiber.child) {
    return fiber.child;
  }

  let nextFiber = fiber;
  // 如果该 fiber 没有 child ，我们会把这个 fiber 的兄弟姐妹节点当作是下一个工作单元。
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    // 如果parent没有sibling ，我们将不断检查父节点的父节点，直到找到有sibling 的parent节点，或者直接找到根节点 root 位置。
    nextFiber = nextFiber.parent;
  }

}

function reconcileChildren(wipFiber, elements) {
  let index = 0;

  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;
  while (index < elements.length || oldFiber !== null) {
    const element = elements[index]
    let newFiber = null;

    const sameType = oldFiber && element && element.type === type
  }
}

const MiniReact = {
  CreateElement,
  render,
}

const element = MiniReact.createElement(
  'div',
  {
    id: 'foo',
  }
  MiniReact.createElement('a', null, 'bar'),
  MiniReact.createElement('b'),
)

/** @jsx Didact.createElement */
// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
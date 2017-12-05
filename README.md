# What Vue took from React and Angular?

![kitty](https://trello-attachments.s3.amazonaws.com/59e10a09fa37e1fead5031c2/59f8cbbdeb9de7f85ba07af6/1b60564bc33e672bca8c9bb0414704d4/joxi_screenshot_1509526926848.png)

## From React Vue takes:

1. Virtual DOM
2. Render functions & JSX support
3. Focus on view layer

### 1. Virual DOM
Both React and Vue uses Virtual DOM. This means that both Vue and React creates a lightweight tree from JavaScript objects that is lightweight copy of DOM tree. Such approach allow us to increase speed, because it doesn’t require all the heavyweight parts that go into a real DOM. It is worth noting that Vue implementation of Virtual DOM is more lighter-weight. That's why Vue has better performance.

### 2. Render functions & JSX support
All React components uses render function with JSX. JSX is a XML-like syntax that works within JavaScript. Render function is useful because with render function we can use full power of JavaScript to build our views. Vue also has render functions and JSX support. In addition, Vue provides an alternative HTML-template syntax. In Vue any valid HTML can be a template. This Vue feature simplify existing application migration, decrease learning time cost, becouse your dont need to learn some new DSL and even allow us to use pre-processors such as HAML, Pug and others. It is good idea to use render functions and JSX in logical components and use template syntax in presentational. For JSX support Vue requires babel-plugin-transform-vue-jsx.

In Vue:
```js
import Vue from 'vue'

new Vue({
  el: '#demo',
  methods: {
    sayHi () {
      alert('Hi.')
    }
  },
  render (h) => {
    return (
      <span on-click={this.sayHi}>Say hi!</span>
    )
  }
})
```

In React
```js
import React from 'react'

const Demo = () => {
  const sayHi = () =>
    alert('Hi.')

  return (
    <span onClick={sayHi}>Say hi!</span>
  )
}

export default Demo
```

### 3. Focus on view layer
Vue and React core libraries focused on view layer. Other tasks like routing and global state management are handled by companion libraries such as react-router, redux for React and vue-router, vuex for Vue. Also it is easy to integrate Vue or React with other libraries or existing projects. That's why Vue and React is more flexible than Angular.

## From Angular Vue takes:

1. Directives syntax
2. Two way data binding
3. Filters

### 1. Directives syntax:
Directive is a specail markup attribute provided by library that talks to do something with the DOM element. Vue directives was inspired by Angular dirictives and has similar syntax. For example Vue directive ```v-model``` that provide two way data binding between form element and some variable looks like Angular ```ng-model``` which do the same.

### 2. Two way data binding
One of the core features of Vue and Angular is it’s reactive data binding system. In simple terms: it keeps your data in sync with your DOM without you having to do anything. We can do this with ```v-model``` directive (```ng-model``` in Angular).

In Vue:
```html
<div class='field'>
  <input placeholder='Title' v-model='newArticle.title' />
</div>
```

In Angular:
```html
<div class='field'>
  <input placeholder='Title' ng-model='newArticle.title' />
</div>
```

### 3. Filter syntax
Vue and Angular both implement special filter syntax that can be used inside markup. A filter is essentially a function that takes a value, processes it, and then returns the processed value. Both frameworks have usefull built-in filters and ability to provide custom filters.

In Vue:
```html
<span>{{ message | uppercase }}</span>
```

In Angular:
```html
<span>{{ message | uppercase }}</span>
```

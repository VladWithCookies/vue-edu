# What good did Vue take from from React and Angular?

## Usefull links
1. Vue docs: https://vuejs.org/v2/guide/
2. Vuex docs: https://vuex.vuejs.org/en/
3. Vue router docs: https://router.vuejs.org/ru/
4. React docs: https://reactjs.org/docs/hello-world.html
5. Angular docs: https://angular.io/docs
6. Framework comparison article: https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176
7. Framework comparison article: https://www.valuecoders.com/blog/technology-and-apps/vue-js-comparison-angular-react/
8. Framework comparison by Vue dev team: https://vuejs.org/v2/guide/comparison.html

## What Vue takes both from Angular and React:
1. Component based
2. Animation
3. Server side rendering
4. Native rendering

### 1. Component based
Components are one of the most powerful features of modern Javascript frameworks. Components help extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements. Compiler attaches some defined behavior to components. Vue, React and Angular are component based. 

### 2. Animation
Animation is not wide used feature of modern js frameworks, but in some cases it can simplify our life. Angular and Vue have built in solution for animation. 
Vue provides:  
- ```transition``` wrapper component that allow us to add entering/leaving transitions for any element or component. 
```html
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
```
- ability to create state transitions with watchers to animate data itself. Such as numbers and calculations, colors, positions of SVG nodes, sizes and other properties of elements.Vue allow us to animate these state changes using 3rd-party libraries to tween state, in combination with Vue’s reactivity and component systems.

In Angular this feature provided by ```ngAnimate``` module. Animations in AngularJS are completely based on CSS classes. As long as you have a CSS class attached to a HTML element within your application, you can apply animations to it.

React has addon for animation (```ReactCSSTransitionGroup```) inspared by ```ngAnimate```.
### 3. Server side rendering
By default, components produce and manipulate DOM in the browser as output. However, it is also possible to render the same components into HTML strings on the server, send them directly to the browser, and finally "hydrate" the static markup into a fully interactive app on the client.

A server-rendered app can also be considered "isomorphic" or "universal", in the sense that the majority of your app's code runs on both the server and the client. Vue, React and Angular have solutions for server side rendering:
- Nuxt.js for Vue
- Angular Universal for Angular 2
- ```ReactDOMServer``` object Next.js framework in React

### 4. Native rendering
Native rendering lets you build mobile apps using only JavaScript. And let you compose a rich mobile UI from declarative components. Vue, React and Angular have solutions for native rendering. For example:
- React native for React
- Ionic, NativeScript for Angular
- Weex for Vue

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

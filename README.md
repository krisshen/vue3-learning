# Vue3 Learning

## Course

[Vue - The Complete Guide](https://www.udemy.com/course/vuejs-2-the-complete-guide/)

## Learning Notes

### What is Vue3

[Vue3](https://v3.vuejs.org/) is a ***JavaScript framework*** that makes building interactive and ***reactive web frontends*** easier.

### Different Ways of Using Vue

<details>
  <summary>Details</summary>

  1. Can be used to control parts of HTML pges or entire pages.
  2. Can also be used to control the entire frontend of a web application.
</details>

### Setup

<details>
  <summary>Details</summary>

  1. [Installation](https://v3.vuejs.org/guide/installation.html)
  2. Connect Vue (from js) to HTML 
     - in js create Vue app and mount
     - in html refer to js 
  3. Start Vue js coding
</details>

### Syntax

- Interpolation and Data Binding

  `data()` property from js will be matched and rendered in html `{{ }}` tags, it consists of object which holds data for html

  <details>
    <summary>html sample</summary>

    ```
      <h2>{{ dataPropertyName }}</h2>
    ```
  </details>

  <details>
    <summary>js sample</summary>

    ```
      data() {
          return {
              dataPropertyName: "bla",
              anotherProperty: "xxx"
          }
      }
    ```
  </details>

- methods

  `methods` property from js can be invoked in html, it consists of js functions, better to use `methods` in events binding.

  <details>
    <summary>html sample</summary>

    ```
      <p>Favorite Number: {{favNum()}}</p>
    ```
    or
    ```
      <p v-html="favNum()">Favorite Number: RANDOM NUMBER BETWEEN 0 AND 1</p>
    ```
  </details>

  <details>
    <summary>js sample</summary>

    ```
      methods: {
          favNum () {
              return Math.random();
          }
      }
    ```
  </details>

- Communication between `data()` and `methods`

  `methods` uses `this` keyword to access `data()` properties

  <details>
    <summary>js sample</summary>

    ```
      data() {
          return {
              year: "2021",
              month: "12"
          };
      },
      methods: {
          getYearMonth () {
              return this.year + ' ' + this.month;
          }
      },
    ```
  </details>

- computed
  
  A computed property will only re-evaluate when some of its reactive dependencies have changed. In comparison, a method invocation will always run the function whenever a re-render happens.

  Use `computed` in data binding when data depends on other data.

  <details>
    <summary>html sample</summary>

    ```
      <input type="text" v-model="name">
      <p>Your Name: {{ fullname }}</p>
    ```
  </details>

  <details>
    <summary>js sample</summary>

    ```
      data() {
        return {
          name: ''
        }
      },
      computed: {
          fullname () {
              return this.name + ' ' + 'Bla';
          }
      }
    ```
  </details>

- watch
  
  Watcher properties will be triggered only when its property is changed. It's useful for timers, counters, asynchronous or expensive operations in response to change data.

  Not used directly in template. Use for any non-data update.

  example - https://v3.vuejs.org/guide/computed.html#watchers

- Directive - `v-bind` - bind data to HTML attribute

  use `v-bind` to render `data()` property to html element attribute

  <details>
    <summary>html sample</summary>

    ```
      <img v-bind:src="imgUrl" />
    ```
  </details>

  <details>
    <summary>js sample</summary>

    ```
      data() {
          return {
              imgUrl: 'https://some-url'
          }
      }
    ```
  </details>

- Directive - `v-html` - output raw HTML

  use `v-html` to render raw html

  <details>
    <summary>html sample</summary>

    ```
      <p v-html="rawHtml"></p>
      <p v-html="rawHtmlmMethod()"></p>
    ```
  </details>

  <details>
    <summary>js sample</summary>

    ```
      data() {
          return {
              rawHtml: "<h2>I am raw HTML content</h2>"
          }
      },
      methods: {
          rawHtmlmMethod () {
              return this.rawHtml;
          }
      }
    ```
  </details>

- Directive - `v-on` - event binding

  use `v-on:{EventName}` to listen to a HTML event

  <details>
    <summary>html sample 1</summary>

    ```
      <button v-on:click="add()">Add</button>
      <p>Result: {{ counter }}</p>
    ```
  </details>

  <details>
    <summary>js sample 1</summary>

    ```
      data() {
          return {
              counter: 0
          }
      },
      methods: {
          add () {
              return this.counter+=1;
          }
      }
    ```
  </details>

  <details>
    <summary>html sample 2</summary>

    ```
      <input type="text" v-on:input="setName">
      <!-- <input type="text" v-on:input="setName($event, '2nd Param')"> -->
      <p>Name: {{ name }}</p>
    ```
  </details>

  <details>
    <summary>js sample 2</summary>

    ```
      data() {
          return {
              name: ''
          }
      },
      methods: {
          setName (event) {
              this.name = event.target.value;
          }
      }
    ```
  </details>

  `v-on` also supports Modifiers
  
  <details>
    <summary>html sample - only enable mouse right click</summary>

    ```
      <button v-on:click.right="add()">Add</button>
      <p>Result: {{ counter }}</p>
    ```
  </details>

  <details>
    <summary>html sample - prevent page refresh when submit form</summary>

    ```
      <form v-on:submit.prevent="aMethod">
    ```
  </details>

  <details>
    <summary>html sample - "onEnter" method will be triggered when hit keyboard Enter</summary>

    ```
      <input @keyup.enter="onEnter" />
    ```
  </details>

- Directive - `v-model` - two-way binding on a form input element or a component.
  
  `v-model` is a shortcut of `v-bind:value` and `v-on:input`

  <details>
    <summary>html sample</summary>

    ```
      <input type="text" v-model="name">
    ```
  </details>

- Shorthands
  - `@EventName` for `v-on:EventName`
  - `:AttrName` for `v-bind:AttrName`

- Dynamic Styling

  use `:class` to dynamically assign a class based on a boolean veriable
  <details>
    <summary>html sample 1</summary>

    ```
      <div 
        class="classA"
        :class="{classB: boolVar}"
      ></div>
    ```
  </details>

  with computed properties:
  <details>
    <summary>html sample 2</summary>

    ```
      <div 
        class="classA"
        :class="classVar"
      ></div>
    ```
  </details>
  
  <details>
    <summary>js sample 2</summary>

    ```
      computed: {
          classVar () {
              ... // more logic
              return { classB: this.bla}
          }
      }
    ```
  </details>

  dynamic classes in array:
  <details>
    <summary>html sample 3</summary>

    ```
      <div 
        :class="['classA', {classB: boolVar}]"
      ></div>
    ```
  </details>

- Conditional Rendering - `v-if`, `v-else-if` and `v-else`
  
  <details>
    <summary>html sample</summary>

    ```
      <div v-if="xxx">
        ...
      </div>
      <div v-else-if="xxx">
        ...
      </div>
      <div v-else="xxx">
        ...
      </div>      
    ```
  </details>

- Conditional Rendering - `v-show`
  
  `v-show` will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element.
  `v-show` doesn't support the `<template>` element, nor does it work with `v-else`.
  prefer `v-show` if you need to toggle something very often, and prefer `v-if` if the condition is unlikely to change at runtime.
  <details>
    <summary>html sample</summary>

    ```
      <h1 v-show="ok">Hello!</h1>
    ```
  </details>

- List Rendering - `v-for`
  
  <details>
    <summary>html sample 1 - loop an array</summary>

    ```
      <ul id="array-rendering">
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
    ```
  </details>

  <details>
    <summary>html sample 2 - loop index of an array</summary>

    ```
      <ul id="array-rendering">
        <li v-for="(item, index) in items">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
    ```
  </details>

  <details>
    <summary>html sample 3 - loop an object, can loop value, name and index</summary>

    ```
      <ul>
        <li v-for="(value, name, index) in myObject">
          {{ index }}. {{ name }}: {{ value }}
        </li>
      </ul>
    ```
  </details>

  <details>
    <summary>html sample 4 - recommended to privde a `key` attribute with `v-for`</summary>

    ```
      <ul>
        <div v-for="item in items" :key="item.id">
          ...
        </div>
      </ul>
    ```
  </details>

- Working with `Refs`

  A `ref` object returns its HTML element object, the `ref` object has a single property `.value` that points to the inner value.

  `$refs` is Vue internally used properties.

  <details>
    <summary>html sample</summary>

    ```
      <input type="text" ref="userText">
    ```
  </details>

  <details>
    <summary>js sample</summary>

    ```
      methods: {
          setText () {
              this.message = this.$refs.userText.value
          }
      }
    ```
  </details>

- A standard Vue project source code folder structure
  - public
    - index.html
  - src
    - assets
    - components
    - App.vue
    - main.js
  - package.json
  - ...

- Adding a component
  
  <details>
    <summary>sample Vue component - ./src/components/SampleComponent.vue</summary>
    
    ```
      <template>
        ...html
      </template>
      <script>
        export default {
          data() {
            return {
              ...
            }
          },
          methods: {
            ...
          }
        }
      </script>
      <style>
        ...
      </style>
    ```
  </details>

  <details>
    <summary>main.js</summary>

    ```
      ...
      import SampleComponent from './components/SampleComponent.vue';
      ...
      app.component('sample-component', SampleComponent);
      ...
    ```
  </details>

  <details>
    <summary>App.vue</summary>

    ```
      <template>
        <sample-component></sample-component>
      </template>
      ...
    ```
  </details>

- `Props` - Parent to Child component, [supported types](https://v3.vuejs.org/guide/component-props.html)

  <details>
    <summary>App.vue (Parent)</summary>

    ```
      <template>
        <sample-component sample-prop-A="xxx" sample-prop-B="xxx"></sample-component>
      </template>
      ...
    ```
  </details>

  SampleComponent.vue: (Child)

  <details>
    <summary>sample 1 - props as a list</summary>
    
    ```
      ...
      <script>
        export default {
          props: ["samplePropA", "samplePropB"],
          ...
        }
      </script>
    ```
  </details>

  <details>
    <summary>sample 2 - props validation (with type)</summary>
    
    ```
      ...
      <script>
        export default {
          props: {
            samplePropA: String,
            samplePropB: String
          },
          ...
        }
      </script>
    ```
  </details>

  <details>
    <summary>sample 2 - props validation (as an object)</summary>
    
    ```
      ...
      <script>
        export default {
          props: {
            samplePropA: {
              type: String,
              required: true
            },
            samplePropA: {
              type: String,
              required: false,
              default: 'a default value or a function',
              validator: function(value) {
                ...
              }
            },
          },
          ...
        }
      </script>
    ```
  </details>

- `Props` - Dynamic props

  <details>
    <summary>App.vue (Parent)</summary>

    ```
      <template>
        <sample-component :sample-prop-A="varA" :sample-prop-B="varB"></sample-component>
      </template>
      <script>
        export default {
          data() {
            return {
              varA: 'abc',
              varB: 'def'
            }
          },
          ...
        }
      </script>
      ...
    ```
  </details>

- `Props` - Binding all props

  <details>
    <summary>App.vue (Parent)</summary>

    ```
      <template>
        <user-data v-bind="person"></user-data>
      </template>
      <script>
        export default {
          data() {
            return {
              person: { firstname: 'Max', lastname: 'Schwarz' }
            };
          },
          ...
        }
      </script>
      ...
    ```
  </details>

- `$emit` - emit own events with props data from Child to Parent component

  <details>
    <summary>SampleComponent.vue: (Child)</summary>
    
    ```
      ...
      <script>
        export default {
          props: ['id'],
          emits: ['custom-event-bla'], // define emits events here
          ...,
          methods: {
            someFunc() {
              this.$emit('custom-event-bla', this.id) // first param is event name, then following with props (can be more than one)
            }
          }
        }
      </script>
    ```
  </details>

  <details>
    <summary>App.vue (Parent)</summary>

    ```
      <template>
        <sample-component @custom-event-bla="handleThisEvent"></sample-component>
      </template>
      <script>
        export default {
          data() {
            return {
              varA: 'abc',
              varB: 'def'
            }
          },
          methods: {
            handleThisEvent(childId) {
              // childId here is this.id from child component's emit event 
            }
          }
          ...
        }
      </script>
      ...
    ```
  </details>

- `Provide / Inject` - This allows parent component to pass props or functions further down to a child component rather than passing them through in-between components.

  <details>
    <summary>Parent Component</summary>

    ```
      <template>
        <button @click="doSomething">click me</button>
      </template>
      <script>
        export default {
          data() {
            return {
              varA: {
                ...
              }
            }
          },
          methods: {
            doSomething() {
              ...
            }
          }
          provide() {
            return {
              varA: this.varA,
              doSomething: this.doSomething
            }
          },
          ...
        }
      </script>
      ...
    ```
  </details>

  <details>
    <summary>Child Component</summary>

    ```
      <template>
        <button @click="doSomething">click me</button>
        <p>{{ varA }}</p>
      </template>
      <script>
        export default {
          inject: ['varA', 'doSomething'],
          ...
        }
      </script>
      ...
    ```
  </details>

- Global and Local components

  Components using `app.component` are globally registered for the application, they can be used in the template of any component instance within this application.

  Local component using `components` option.

  <details>
    <summary>Sample Component</summary>

    ```
      <template>
        ...
      </template>
      <script>
        import ComponentA from './ComponentA.vue'
        export default {
          components: {
            ComponentA
          }
          ...
        }
      </script>
      ...
    ```
  </details>

- Scoped styles

  When a `<style>` tag has the scoped attribute, its CSS will apply to elements of the current component only.

  <details>
    <summary>Sample Component</summary>

    ```
      <style scoped>
        ...
      </style>
    ```
  </details>
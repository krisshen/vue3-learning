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

- `Slots`

  Similar with props, `slot`s can be used for dynamic HTML to be passed in from one component to another.

  <details>
    <summary>Parent Component</summary>

    ```
      <template>
        <section>
          <child-comp>
            <header>
              <h3>{{ bla }}</h3>
            </header>
          </child-comp>
        </section>
      </template>
    ```
  </details>

  <details>
    <summary>Child Component</summary>

    ```
      <template>
        <div>
          <slot>
          </slot>
        </div>
      </template>
    ```
  </details>

- `Named Slots` - when have multiple slots, see [here](https://v3.vuejs.org/guide/component-slots.html#named-slots) for details.

  <details>
    <summary>Parent Component</summary>

    ```
      <base-layout>
        <template v-slot:header>
        <!-- <template #header> shorthand for v-slot -->
          <h1>Here might be a page title</h1>
        </template>

        <template v-slot:default>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </template>

        <template v-slot:footer>
          <p>Here's some contact info</p>
        </template>
      </base-layout>
    ```
  </details>

  <details>
    <summary>Child Component</summary>

    ```
      <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot> // default slot
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    ```
  </details>

- `Default Slots (Fallback Content)` - default content in a slot, to be rendered when no content is provided. See [here](https://v3.vuejs.org/guide/component-slots.html#fallback-content) for more info.

- `Scoped Slots` - more info [here](https://v3.vuejs.org/guide/component-slots.html#scoped-slots)

- `Dynamic Components` - dynamically switch between components

  <details>
    <summary>Sample Component</summary>

    ```
      <template>
        <div>
          <button @click="setSelectedComponent('cmp-a')"></button>
          <button @click="setSelectedComponent('cmp-b')"></button>
          <component :is="selectedComponent"></component>
        </div>
      </template>
      <script>
        export default {
          data() {
            return {
              selectedComponent: '',
            };
          },
          methods: {
            setSelectedComponent(cmp) {
              this.selectedComponent = cmp;
            }
          }
        };
      </script>
    ```
  </details>

- `Dynamic Components` - keep alive

  Use `<keep-alive>` to cache dynamic component instances. e.g. input text of a dynamic component won't be lost if swithing to other components and back.

  <details>
    <summary>Sample Component</summary>

    ```
      <template>
        <div>
          <keep-alive>
            <component :is="selectedComponent"></component>
          </keep-alive>
        </div>
      </template>
    ```
  </details>

- `Teleport` Component

  Below `error-alert` component will be teleported `to` `body` element.

  <details>
    <summary>Sample Component</summary>

    ```
      <template>
        <div>
          <teleport to="body">
            <error-alert v-if="isError">
              ...
            </error-alert>
          </teleport>
        </div>
      </template>
    ```
  </details>

- `v-model` on custom components

  When used on custom components, `v-model` prop and event default names are changed, they are `:model-value`(modelValue) prop and `@update:modelValue` event.

  <details>
    <summary>Form Component</summary>

    ```
      <template>
        <form @submit.prevent="submit">
          <div>
            <custom-comp v-model="var"></custom-comp>
          </div>
          <button>Submit</button>
        </form>
      </template>
    ```
  </details>

  <details>
    <summary>Custom Component</summary>

    ```
      <template>
        <ul>
          <li :class="{active: modelValue === 'option1'}">
            <button type="button" @click="active('option1')">Option 1</button>
          </li>
        </ul>
      </template>
      <script>
        export default {
          props: ['modelValue'],
          emits: ['update:modelValue'],
          methods: {
            active(option) {
              this.$emit('update:modelValue', option)
            }
          }
        }
      </script>
    ```
  </details>

- `Router` - more info [here](https://next.router.vuejs.org/guide/)

  Router setup:
  <details>
    <summary>Sample main.js</summary>

    ```
      import {createRouter, creatWebHistory} from 'vue-router';
      import TeamsLlist from '...'; // import components to be routed
      import TeamMembers from '...';

      const router = createRouter({
        history: creatWebHistory(), // use web browsers build-in web history mechanism
        routes: [
          {path: '/', redirect: '/teams'},
          {path: '/teams', component: TeamsLlist},
          {path: '/teams/:teamId', component: TeamMembers, props: true}, // use ':teamId' as a prop in component
          {path: '/:notFound(.*)', component: NotFound} // use regx to catch all other udefined routes
        ],
        linkActiveClass: 'active' // rename router class name
      });
      ...
      app.use(router);
    ```
  </details>

  <details>
    <summary>Sample Component</summary>

    ```
      <template>
        <p>
          <!-- use the router-link component for navigation. -->
          <!-- specify the link by passing the `to` prop. -->
          <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
          <router-link to="/teams">Go to Teams</router-link>
          <router-link :to="'/teams/' + id">Go to One Team Member</router-link>
        </p>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
      </template>
    ```
  </details>

- `Router` - Programmatic navigation

  After `app.use(router)`, use `this.$router` to control route behaviours.
  Can also use `props: true` in router setup.

  <details>
    <summary>Sample Component</summary>

    ```
      <script>
        export default {
          methods: {
            navigate() {
              this.$router.push('/someUrl')
            }
          }
        }
      </script>
    ```
  </details>

- `Router` - Nested routes
  
  Use `children` in `routes` config, more info [here](https://next.router.vuejs.org/guide/essentials/nested-routes.html#nested-routes)

- `Router` - Multiple routes with named router views

  Use `components` in `routes` config, more info [here](https://next.router.vuejs.org/guide/essentials/named-views.html)

- `Router` - Controller scrolling behaviour

  Use `scrollBehavior` function in `routes` config, more info [here](https://next.router.vuejs.org/guide/advanced/scroll-behavior.html#scroll-behavior)

- `Router` - Navigation guards

  more info [here](https://next.router.vuejs.org/guide/advanced/navigation-guards.html)

  Global beforeEach - Use `router.beforeEach` function to handle each route navigation.

  Then route config level - Use `beforeEnter` in route definition.

  Then component level - Use `beforeRouteEnter` in component.

  Then Global afterEach - `router.afterEach`.

  `beforeRouteLeave` - before leaving the route.
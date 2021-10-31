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

  `methods` property from js can be invoked in html, it consists of js functions

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

- Directive - `v-bind` - bind data to HTML attribute

  use `v-bind` to reder `data()` property to html element attribute

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
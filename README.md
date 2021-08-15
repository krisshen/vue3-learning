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

#### Interpolation and Data Binding

data property from js will be matched and rendered in html `{{ }}` tags

<details>
  <summary>html</summary>

  ```
    <h2>{{ dataPropertyName }}</h2>
  ```
</details>

<details>
  <summary>js</summary>

  ```
    data() {
        return {
            dataPropertyName: "bla"
        }
    }
  ```
</details>


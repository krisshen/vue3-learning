<template>
    <section>
        <div><h2>User Name {{ userName }}</h2></div>
        <div><h3>Age {{ userAge }}</h3></div>
    </section>
</template>

<script>
export default {
    props: ['userName', 'userAge']
}
</script>
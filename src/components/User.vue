<template>
	<li :style="'background-image: url(' + user.avatar +')'"><p>{{ user.name }}</p></li>
</template>

<script>
export default {
	props: ['user']
}
</script>
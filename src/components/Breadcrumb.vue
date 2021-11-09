<script>
export default {
    name: 'Breadcrumb',
    setup() {},
};
</script>

<template>
  <nav
    class="
      text-sm text-left text-green-600
      bg-green-500 bg-opacity-10
      h-12
      flex
      items-center
      p-4
      pb-6
      mb-4
      rounded-md
    "
    role="alert"
  >
    <ol class="list-reset flex text-grey-dark">
      <li><a href="#" class="font-bold">Home</a></li>
      <li><span class="mx-2">/</span></li>
      <li><a href="#" class="font-bold">Library</a></li>
      <li><span class="mx-2">/</span></li>
      <li>Data</li>
    </ol>
    <h4>Hello</h4>
  </nav>
</template>
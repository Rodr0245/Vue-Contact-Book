<template>
  <div id="app" class="min-h-screen bg-white mt-4 md:mx-auto">
    <header class="bg-white py-4 md:max-w-7xl mx-auto">
      <nav class="container mx-auto px-4 flex justify-between items-center">
        <ul class="flex space-x-4 justify-between w-full items-center">
          <li>
            <router-link to="/" class="py-2.5 px-3 border-[1px] rounded-full md:hover:bg-gray-200 transition ease "><font-awesome-icon :icon="['fas', 'home']" class="text-lg "/></router-link>
          </li>
          <li>
            <h1 class="">
              <router-link to="/" class="font-bold text-3xl">Contact Book</router-link>
            </h1>
          </li>
          <li>
            <router-link to="/add" class="py-2.5 px-3.5 border-[1px] md:hover:bg-gray-200 transition ease rounded-full"><font-awesome-icon :icon="['fas', 'plus']" class="text-lg"/></router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto py-4 md:max-w-7xl ">
      <router-view />
    </main>
    <footer class="bg-gray-200 text-center py-4 mt-8">
      <p>&copy 2024 Nicolas Ortiz. All rights reserved. </p>
      <p>Proudly part of my <a href="www.ortizwebworks.com" class="text-blue-500 hover:underline" target="_blank">portfolio.</a> </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
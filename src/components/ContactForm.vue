<!-- Create / edit contact form reusable component -->
<template>
	<div class="h-screen flex justify-center items-center mt-12">
		<div class="px-4 motion-preset-blur-up-md shadow p-12 rounded-3xl md:w-1/2 mb-48">
			<h2 class="text-2xl font-semibold mb-4 text-center">{{ title }}</h2>
			<img :src="contactState.profilePicture || '/src/assets/images/option1.png'" alt="Profile Picture" class="w-40 h-40 rounded-full my-4 mx-auto">
			<div class="w-full relative">
				<button type="button" @click="showProfilePicture = !showProfilePicture" class="bg-customGray text-titleColor px-4 py-2 font-semibold rounded-full border md:hover:border  md:hover:border-gray-500 transition ease duration-300 focus:outline-none focus:border-gray-500 mb-4 mt-8 block mx-auto">
					{{ showProfilePicture ? 'Close Image Menu' : 'Choose Profile Picture' }}
				</button>
				<div v-if="showProfilePicture" class="mt-4 grid grid-cols-3 max-h-[500px] md:max-h-[400px] overflow-y-scroll bg-white border-[0.5px] border-gray-600 rounded-2xl absolute z-10 top-10  motion-preset-blur-down-md ">
					<img v-for="picture in pictures" :key="picture.id" :src="`/src/assets/images/${picture.profilePicture}`" @click="contactState.profilePicture = `/src/assets/images/${picture.profilePicture}`; showProfilePicture = false" class="w-full md:w-[200px] h-auto p-2 border-[0.5px] border-gray-600 rounded-2xl cursor-pointer md:hover:opacity-75 md:hover:bg-customBlue transition ease duration-300" alt="Profile Picture" />
				</div>
			</div>
			<form @submit.prevent="submitContactForm" class="space-y-4">
				<div>
					<label for="firstName" class="block text-md text-gray-500">First Name</label>
					<input type="text" id="firstName" v-model="contactState.firstName" class="w-full p-2 border bg-customGray rounded-full mt-1 focus:outline-none focus:border-gray-500 md:hover:border-gray-500 transition ease duration-300" required />
				</div>
				<div>
					<label for="lastName" class="block text-md text-gray-500">Last Name</label>
					<input type="text" id="lastName" v-model="contactState.lastName" class="w-full p-2 border bg-customGray rounded-full mt-1 focus:outline-none focus:border-gray-500 md:hover:border-gray-500 transition ease duration-300" required />
				</div>
				<div>
					<label for="phoneNumber" class="block text-md text-gray-500">Phone Number</label>
					<input type="tel" id="phoneNumber" v-model="contactState.phoneNumber" class="w-full p-2 border bg-customGray rounded-full mt-1 focus:outline-none focus:border-gray-500 md:hover:border-gray-500 transition ease duration-300" pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}" :required="!contactState.email" placeholder="123-456-7890" />
				</div>
				<div>
					<label for="email" class="block text-md text-gray-500">Email</label>
					<input type="email" id="email" v-model="contactState.email" class="w-full p-2 border bg-customGray rounded-full mt-1 focus:outline-none focus:border-gray-500 md:hover:border-gray-500 transition ease duration-300" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" :required="!contactState.phoneNumber" />
				</div>
				<div>
					<button type="submit" class="bg-customBlue shadow-md shadow-customBlue md:hover:bg-blue-500 md:hover:shadow transition ease duration-300 block mx-auto text-white px-4 py-2 rounded-lg">{{ confirmation }}</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    title: String,
		confirmation: String,
    contactState: Object, 
    pictures: Array, 
  },
  data() {
    return {
      showProfilePicture: false,
			// Default profile picture options
			pictures: [
        { id: 1, profilePicture: 'option1.png' },
        { id: 2, profilePicture: 'option2.png' },
        { id: 3, profilePicture: 'option4.png' },
        { id: 4, profilePicture: 'option5.png' },
        { id: 5, profilePicture: 'option6.png' },
        { id: 6, profilePicture: 'option7.png' },
        { id: 7, profilePicture: 'option8.png' },
        { id: 8, profilePicture: 'option9.png' }
      ],
    };
  },
  methods: {
    submitContactForm() {
      this.$emit('submit-contact', this.contactState);
    },
  },
};
</script>
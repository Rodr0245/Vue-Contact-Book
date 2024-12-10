<template>
  <div v-if="contact" class="px-4 md:flex h-screen items-center justify-center motion-preset-blur-up-md">
		<div class="contactContainer shadow-md rounded-3xl p-12 mx-auto md:w-1/2 md:mb-48">
			<!-- Contact Card -->
			<section class="contactCard flex flex-col items-center justify-center gap-4">
				<div class="contactImage">
					<img :src="contact.profilePicture || '/src/assets/images/option1.png'" alt="Profile Picture" class="w-24 h-24 rounded-full mt-4">
				</div>
				<div class="contactName">
					<h2 class="text-lg font-semibold mb-4">{{ contact.firstName }} {{ contact.lastName }}</h2>
				</div>
			</section>
			<!-- Button Group -->
			<section class="btnGroup relative w-full md:max-w-md md:mx-auto bg-customGray p-2 rounded-full my-4">
				<button @click="showConfirmDelete = true" class="bg-transparent py-2 rounded-full font-medium text-lg w-1/2 text-center transition ease duration-300 md:hover:text-red-500 ">Delete</button>
				<router-link :to="'/edit/' + contact.id" class="absolute top-1.6 right-2 bg-customBlue shadow-md shadow-customBlue text-white py-2 rounded-full font-semibold w-1/2 text-lg text-center md:hover:bg-blue-500 transition ease duration-300 md:hover:shadow">Edit</router-link>
			</section>
			<!-- Confirmation Modal -->
			<section v-if="showConfirmDelete" class="bg-white p-4 rounded-lg shadow-md mt-4 mb-8 motion-preset-blur-up-md motion-duration-1000 text-center">
				<p>Are you sure you want to delete <strong>{{ contact.firstName }} {{ contact.lastName }}</strong></p>
				<div class="flex justify-center my-4">
					<!-- Cancel Button -->
					<button @click="showConfirmDelete = false" class="bg-gray-200 px-4 py-2 rounded-lg mr-4">Cancel</button>
					<!-- Confirm Delete Button -->
					<button @click="deleteContact" class="bg-red-600 text-white px-4 py-2 rounded-lg relative group">
						Delete
						<span class="hidden group-hover:block transition-opacity duration-300 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-md rounded py-1 px-3 font-bold motion-preset-blur-up-md">
							DELETE
						</span>
					</button>
				</div>
			</section>
			<section class="contactDetails mt-8">
				<div v-if="contact.phoneNumber" class="phoneNumber">
					<p class="text-md text-gray-500">Phone Number</p>
					<p class="text-xl font-semibold">{{ contact.phoneNumber }}</p>
				</div>
				<div v-if="contact.email" class="email mt-4">
					<p class="text-md text-gray-500">Email Address</p>
					<p class="text-xl font-semibold">{{ contact.email }}</p>
				</div>
			</section>
		</div>
  </div>
    
    


  <!-- Message for "Contact not found" -->
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null,
      showConfirmDelete: false, // State to show/hide the confirmation modal
    };
  },
  created() {
    const contactId = this.$route.params.id;
    this.loadContact(contactId);
  },
  methods: {
    loadContact(id) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact = contacts.find(contact => contact.id === parseInt(id)); // Find the contact by id
    },
    deleteContact() {
      // Gets the list of contacts from local storage
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      
      // Removes the contact to be deleted
      const updatedContacts = contacts.filter(contact => contact.id !== this.contact.id);
      
      // Updates the contacts in local storage
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      
      // Redirects to the home page after removing contact
      this.$router.push('/');
    }
  },
};
</script>

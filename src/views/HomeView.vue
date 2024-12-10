<template>
  <div>
		<div class="searchContainer relative w-full">
			<input v-model="searchQuery" type="text" placeholder="Search..." class=" mb-4 p-4 w-4/5 md:w-full bg-customGray outline-none rounded-3xl block mx-auto placeholder:font-medium" style="display: block; margin-left: auto; margin-right: auto;" />
		</div>
    <div v-if="filteredContacts.length" class="grid grid-cols-1 ">
      <div v-for="(contact, index) in filteredContacts" :key="contact.id" class="flex flex-col" data-aos="fade-up" data-aos-duration="1000">
        <div v-if="index === 0 || contact.lastName[0].toUpperCase() !== filteredContacts[index - 1].lastName[0].toUpperCase()" class="text-sm font-semibold py-4 px-8  bg-customGray my-1">
          {{ contact.lastName[0].toUpperCase() }}
        </div>
        <router-link :to="'/contact/' + contact.id" class="p-4 rounded-lg md:hover:shadow-md !transition !ease !duration-300" data-aos="fade-up" data-aos-duration="1000">
          <div class="flex items-center space-x-4">
            <div class="profilePicture flex flex-shrink-0">
              <img :src="contact.profilePicture || '/src/assets/images/option1.png'" alt="Profile Picture" class="w-16 h-16 rounded-full">
            </div>
            <div class="text-titleColor break-words">
              <h3 class="text-lg font-medium">{{ contact.firstName }} {{ contact.lastName }}</h3>
              <p class="text-sm font-normal text-gray-500">{{ contact.phoneNumber ? contact.phoneNumber : contact.email }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <p v-else class="text-center mt-16">No contacts found.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      contacts: [],
    };
  },
  created() {
    this.loadContacts();
  },
computed: {
  filteredContacts() {
    const lowercasedQuery = this.searchQuery.toLowerCase();
    return this.contacts.filter(contact => {
      const firstName = contact.firstName || '';  // Defaults to an empty string if undefined
      const lastName = contact.lastName || '';    // Defaults to an empty string if undefined
      return firstName.toLowerCase().includes(lowercasedQuery) || lastName.toLowerCase().includes(lowercasedQuery);
    }).sort((a, b) => a.lastName.localeCompare(b.lastName));
  }
},
  methods: {
    loadContacts() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contacts = contacts;
    }
  }
};
</script>


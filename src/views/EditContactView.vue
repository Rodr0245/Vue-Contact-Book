<template>
  <div>
    <ContactForm 
      title="Edit Contact"
			confirmation="Update Contact" 
      :contactState="contact" 
      @submit-contact="editContact" 
      :pictures="pictures"
    />
  </div>
</template>

<script>

import ContactForm from '../components/ContactForm.vue';
export default {
	components: {
		ContactForm
	},
  data() {
    return {
      contact: null,
			showProfilePicture: false
    };
  },
  created() {
    const contactId = this.$route.params.id;
    this.loadContact(contactId);
  },
  methods: {
    loadContact(id) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact = contacts.find(contact => contact.id === parseInt(id));
    },
    editContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const index = contacts.findIndex(contact => contact.id === this.contact.id);
      if (index !== -1) {
        contacts[index] = { ...this.contact };
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push(`/contact/${this.contact.id}`);  // Redirect to Contact details view after editing contact
      }
    }
  },
};
</script>



<template>
  <div>
    <ContactForm 
      title="Add Contact" 
			confirmation="Add Contact"
      :contactState="newContact" 
      @submit-contact="addContact" 
      :pictures="pictures" 
    />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      newContact: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        profilePicture: '',
      }
    };
  },
  methods: {
    addContact(contact) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
      const newContact = { ...contact, id: newId };
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));

      this.$router.push(`/contact/${newId}`); // Redirect to the Contact details view after adding new contact
    },
  },
};
</script>

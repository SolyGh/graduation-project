import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 12,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719850710/jammal_photos/vh9x6ll6nixpsybvxe5q.png",
    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719850811/jammal_photos/brginprtncegbiyr3wqf.png",
    links: [
      {
        title: "home",
        url: "#",
      },
      {
        title: "Features",
        url: "#",
      },
      {
        title: "About",
        url: "#",
      },
      {
        title: "Teams",
        url: "#",
      },
      {
        title: "contact",
        url: "#",
      },
    ],
  },
  hero: {
    title: "We Ensure better education for a better world",
    description:
      "Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education",
    buttonText: "Explore More",
    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719850606/jammal_photos/cela2eggopmbbsfgcylq.png",
    imgUrl: "",
  },

  features: {
    title: "what we offer",
    features: [
      {
        title: "Graduation Degree",
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719830119/jammal_photos/bya9nzubv9jbt5aukuax.png",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719827222/jammal_photos/ei4ppt3gybkh7l98hapt.png",
      },
      {
        title: "Master Degree",
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719850422/jammal_photos/rarjoggq9u01wohrff7f.png",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719827442/jammal_photos/qpz2eidko6xewm7arggi.png",
      },
      {
        title: "Post Graduation",
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719850494/jammal_photos/x0bevimtd0kdrjap1acf.png",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719827597/jammal_photos/bxmfbv8zmfjw7kbuewiu.png",
      },
    ],
  },
  about: {
    title: "ABOUT UNIVERCITY",
    subtitle: "Nurturing Tomorrow's Leaders Today",
    description:
      " Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1719851473/jammal_photos/u1ctmph7rkswr6sofwye.png",
  },

  team: {
    title: "Our Teams",
    members: [
      {
        imgUrl: "https://res.cloudinary.com/di8kjrflu/image/upload/v1719854981/gallery-1_zlobfm.png",
      },
      { imgUrl: "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855072/gallery-2_igw8bc.png" },

      { imgUrl: "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855120/gallery-3_aicntt.png" },
      { imgUrl: "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855148/gallery-4_b9x6qt.png" },
    ],
    buttonText: "See more here",
    icon: "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855189/white-arrow_bmhias.png",
  },

  contact: {
    icons: [
      "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855279/msg-icon_admjx1.png",
      "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855301/mail-icon_cfnj5m.png",
      "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855333/phone-icon_ct28v1.png",
      "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855417/location-icon_ytfm0b.png",
      "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855189/white-arrow_bmhias.png",
    ],
    title: "Send us a message",
    description:
      "Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.",
    contacts: [
      {
        icon: 1,
        text: "Contact@edusite.dev",
      },
      {
        icon: 2,
        text: "+1 123-456-7890",
      },
      {
        icon: 3,
        text: "77 Massachusetts Ave, Cambridge\nMA 02139, United States",
      },
    ],
  },

  colors: {
    templateColors: ["#ffffff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice12 = createSlice({
  initialState,
  name: "templateSlice12",
  reducers: {
    updateTemplate: (state, action) => {
      editElement(state, action);
    },
    addNewElement: (state, action) => {
      addElement(state, action);
    },
    addElementToArray: (state, action) => {
      addElementToArray(state, action);
    },
    addNewSubElement: (state, action) => {
      addSubElement(state, action);
    },
    deleteElement: (state, action) => {
      deleteElement(state, action);
    },
    reorder: (state, action) => {
      reorder(state, action);
    },
    reorderSection: (state, action) => {
      return reorderSections(state, action);
    },
    deleteSection: (state, action) => {
      return deleteSection(state, action);
    },
    updateSchema: (state, action) => {
      updateSchema(state, action);
    },
  },
});

export const templateActions12 = templateSlice12.actions;
export { initialState };
export default templateSlice12.reducer;

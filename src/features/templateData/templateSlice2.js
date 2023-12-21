import { createSlice } from "@reduxjs/toolkit";

const templateSlice2 = createSlice({
  initialState: {
    navbar: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/home-1-svgrepo-com_axgckp.svg",
        url: "home",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134253/info-circle-svgrepo-com_a6q6z3.svg",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/project-svgrepo-com_qjvqow.svg",
        url: "projects2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/customer-testimonial-svgrepo-com_vdnnre.svg",
        url: "testimonials2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/message-circle-lines-alt-svgrepo-com_iotcwk.svg",
        url: "contactUs2",
      },
    ],
    hero: {
      title: "Get to know",
      subtitle: "Hero",
      image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703142400/me-about_pobewn.jpg",
      cards: [
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/book-svgrepo-com_f62qre.svg", title: "Experience", content: "3+ Years Working" },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/users-svgrepo-com_acna7b.svg",
          title: "Clients",
          content: "300+ Clients Worldwide",
        },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/project-svgrepo-com_qjvqow.svg",
          title: "Projects",
          content: "80+ completed projects",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
    testimonial: {
      title: "What the People Thinks About Us",
      cards: [
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar2_lgwr3o.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar1_g7wm1r.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
      ],
    },
    projects: {
      cards: [
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134068/portfolio3_rzhjvk.jpg",
          title: "projects2 Item 1",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
          title: "projects2 Item 2",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134068/portfolio3_rzhjvk.jpg",
          title: "projects2 Item 3",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
          title: "projects2 Item 4",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134029/portfolio5_cugtet.png",
          title: "projects2 Item 5",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
          title: "projects2 Item 6",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
      ],
    },
    contact: {
      options: [
        {
          title: "Email",
          subtitle: "ahmed.solimanth57@gmail.com",
          link: "mailto:ahmed.solimanth57@gmail.com",
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/gmail-svgrepo-com_xppy7f.svg",
        },
        {
          title: "Messenger",
          subtitle: "Ahmed soliman Gohnaim",
          link: "https://m.me/ahmed.soliman.3591267",
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/facebook-svgrepo-com_lmghnk.svg",
        },
        {
          title: "WhatsApp",
          subtitle: "___________",
          link: "https://wa.me/1234567890",
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134203/whatsapp-whats-app-svgrepo-com_ug4dbt.svg", // Replace with your WhatsApp link
        },
      ],
    },
    items: {
      title: "Articles & News",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
      cards: [
        {
          title: "Let’s Get Solution For Building Construction Work",
          description: "26 December,2022 ",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718041/templates/template_one/article1.f88f54e6a4cdbf340b36_l3ujjw.png",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          caption: "Kitchan Design",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          description: "22 December,2022 ",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article2.43be768543cb8cfeaf07_atvwjd.png",
          caption: "Living Design",
        },
        {
          title: "Best For Any Office & Business Interior Solution",
          description: "25 December,2022 ",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article3.f759fde0c85f3fb92b22_c2tqkv.png",
          caption: "Interior Design",
        },
      ],
    },
    footer: {
      logo: "CSE",
      rights: "ssssssssssssssssssssss all rights reserved.",
      mediaIcons: [
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129090/icons8-facebook-50_xfbimo.png",
          url: "https://facebook.com",
        },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129090/icons8-instagram-48_tywoff.png",
          url: "https://instagram.com",
        },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129090/icons8-facebook-50_xfbimo.png",
          url: "https://facebook.com",
        },
      ],
    },
    services: [
      {
        title: "UI/UX Design",
        items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
      },
      {
        title: "WebDevelopment",
        items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
      },
      {
        title: "Content Creation",
        items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
      },
    ],
  },

  name: "templateSlice2",
  reducers: {
    updateAll: (state, action) => {
      const { section, variable, value, i, blockName, subBlockName, subIndex, objKey } = action.payload;
      // sub means level 2 of fields
      if (i === undefined) {
        if (variable === null) {
          // edit object filed
          state[section][blockName][objKey] = value;
        } else {
          // edit normal field
          state[section][variable] = value;
        }
      } else {
        if (subIndex === undefined) {
          // edit array filed with index
          if (variable === null) state[section][blockName][i] = value;
          else {
            if (subBlockName === undefined) {
              // edit obj in array of objects
              state[section][blockName][i][variable] = value;
            } else {
              // edit sub obj directly
              state[section][blockName][i][subBlockName][variable] = value;
            }
          }
        } else {
          // edit sub element in array
          if (variable === null) state[section][blockName][i][subBlockName][subIndex] = value;
          else {
            // edit sub obj in array of objects
            state[section][blockName][i][subBlockName][subIndex][variable] = value;
          }
        }
      }
    },
  },
});

export const { updateAll } = templateSlice2.actions;
export default templateSlice2.reducer;
